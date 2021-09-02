import React from 'react'
import './css/footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <p> Proyecto final para el curso de react de CoderHouse</p>
            <a href='https://www.linkedin.com/in/lucasbonacci/' target='_blank' rel="noreferrer"><LinkedInIcon/> Lucas Bonacci</a>
            <a href='https://github.com/lucasbonacci/Desafio1Coder' target='_blank' rel="noreferrer"><GitHubIcon/> Repo en github </a>
        </div>
    )
}

export default Footer
