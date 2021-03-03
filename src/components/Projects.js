import styles from '../styles/components/Projects.module.css'

export function Projects() {

    const projetos = [
        { 
            "projectname" : "Rocketseat dashboard clone",
            "description" : "Um clone do dashboard da rocketseat que fiz usando flexbox",
            "image" : "./clonedashboard.PNG",
            "link" : "https://dashboard-rocketseat-clone.vercel.app/"
        },
        {
            "projectname" : "Feed do LinkedIn",
            "description" : "Um clone que eu fiz do feed do LinkedIn usando React",
            "image" : "./linkedin-homepage.PNG",
            "link" : "https://linkedin-homepage.vercel.app/" 
        }
    ]
     
    return(
        <div className={styles.projectsContainer}>
            <h2>Projetos</h2>
            <section>
                {projetos.map(x =>(
                    <div className={styles.projectItem}>
                    
                        <img src={x.image} alt={x.projectname} />
                        <main>
                            <h3>{x.projectname}</h3>
                            <p>{x.description}</p>
                            <p>Acesse: <a href={x.link} target="_blank">{x.projectname}</a></p>
                        </main>
                    </div>
                ))}
                
            </section>
        </div>
    )
}