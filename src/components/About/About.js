import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from "@octokit/rest";
import Pagination from '@material-ui/lab/Pagination';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TelegramIcon from '@material-ui/icons/Telegram';
import vk from '../img/vk.png';
import github from '../img/github.png';
import instagram from '../img/instagram.png';
import telegram from '../img/telegram.png';
import email from '../img/email.png';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userLogin: [],
		userUrl: [],
		avatarUrl: [],
		userBio: [],
		fetchFailure: false,
		userName: 'LenaMakeeva',
        pageLimit: 2,
        countPages: 0,
        currentPage: 0,
        repoPageList: []
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: this.state.userName
		}).then( ({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false
			})
			this.setState({
            	repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
            	countPages: Math.ceil(this.state.repoList.length / this.state.pageLimit)
      		});
		}).catch(err => {
			this.setState({
				fetchFailure: true,
				error: err,
				errorText: 'Что-то пошло не так…',
				isLoading: false
			})
		})

		octokit.users.getByUsername({
			username: this.state.userName
		}).then( (info) => {
			this.setState({
				userLogin: info.data.login,
				userUrl: info.data.html_url,
				avatarUrl: info.data.avatar_url,
				userBio: info.data.bio,
				isLoading: false
			})
		}).catch(err => {
			this.setState({
				fetchFailure: true,
				error: err,
				errorText: 'Что-то пошло не так…',
				isLoading: false
			})
		})
	}

    onChangePagination(event, value) {
        this.setState({
          currentPage: value,
          repoPageList: this.state.repoList.slice((value - 1) * this.state.pageLimit, ((value - 1) * this.state.pageLimit + this.state.pageLimit))
        })
  	};

	render() {
		const { isLoading, repoList, fetchFailure, userLogin, avatarUrl, countPages, repoPageList } = this.state;

		return (
			<div className={styles.card}>
			{ isLoading ? <CircularProgress color='inherit'/> :  fetchFailure ? 
				<Card className={styles.error}>
					<h1 className={styles.title}>{this.state.errorText}</h1>
				</Card> :
				<Card className={styles.wrap}>
					<div className={styles.info}>
						<div className={styles.about}>
							<h1 className={styles.title}>{userLogin}</h1>
							<p className={styles.bio}>{this.state.userBio}</p>
							<div className={styles.contacts}>
								<div className={styles.email}>
									<img src={ email } alt='mail_icon' className={styles.logo}></img>
									<a 
									href='mailto: len16730637@yandex.ru'  
									underline='none' 
									className={styles.link}>
			                    		len16730637@yandex.ru
		                  			</a>
	                  			</div>
	                  			<div className={styles.telegram}>
	                  			<img src={ telegram } alt='telegram_icon' className={styles.logo}></img>
	                  			<a 
	                  			href='tg://resolvedomain=lena_makeevaa'
	                  			color='textSecondary'
	                  			underline='none'
	                  			className={styles.link}>
				                	+7 929 518 52 21
				                </a>
				                </div>
			                </div>
						</div>
						<div>
							<img 
							className={styles.avatar}
							src={avatarUrl}
							/>
						</div>
					</div>
					
					<div className={styles.works}>
						<h3 className={styles.title}>Мои работы:</h3>
						<p className={styles.works_description}>Для просмотра нажмите на работу</p>
						<li>
							<a 
								href="https://lenamakeeva.github.io/WayUp/"
								className={styles.link}
								target='_blank'
							>
								Верстка от WayUp
							</a>
						</li>
						<li>
							<a 
								href="https://lenamakeeva.github.io/Final-Axion-Cite/" 
								className={styles.link}
								target='_blank'
							>
								Верстка от WHS сайта Axion
							</a>
						</li>
						<li>
							<a 
								href="https://lenamakeeva.github.io/Final-Card-Game/"
								className={styles.link}
								target='_blank'
							>
								Игра "Найди Баг"
							</a>
						</li>
					</div>
					<div className={styles.repos}>
						<h3 className={styles.title}>Мои репозитории:</h3>
						{ repoList.length === 0 && <p className={styles.message}>Здесь пока нет репозиториев:(</p> }
						{ repoList.length > 0 && <ul className={styles.list}>
							{repoPageList.map(repo => (
								<li key={repo.id} className={styles.list_item}>
									<a href={repo.html_url} className={styles.link} target='_blank'>{repo.name}</a>
									<p className={styles.repo_description}>{repo.description}</p>
									<span className={styles.updated}>
	                                    {'updated '}
	                                    {new Date(repo.updated_at).toLocaleString('en-US',{
	                                    day: 'numeric',
	                                    month: 'short',
	                                    year: 'numeric',})}
	                                </span>
								</li>
							))}
						</ul>}
					</div>
					<div className={styles.pagination}>
                        <Pagination
                        count={ countPages }
                        variant="outlined"
                        onChange={this.onChangePagination.bind(this)} />
		            </div>
		            <div className={styles.socialNetworks}>
						<a href='https://github.com/LenaMakeeva' target='_blank'>
							<img src={ github } alt='github' className={styles.socialNetwork}></img>
						</a>
						<a href='http://vk.com/id20358623' target='_blank'>
							<img src={ vk } alt='vkontakte'className={styles.socialNetwork}></img>
						</a>
						<a href='https://www.instagram.com/lena_makeevaa' target='_blank'>
							<img src={ instagram } alt='instagram' className={styles.socialNetwork}></img>
						</a>
						<div className='styles.remark'>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
					</div>
				</Card>}
			</div>);
	}
}


export default About;