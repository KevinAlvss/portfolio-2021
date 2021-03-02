import styles from '../styles/components/Habilities.module.css';

export function Habilities(){
    return(
        <div className={styles.habilitiesContainer}>
            <div className={styles.habilitiesItem}>
                <section>
                    <h2>
                        Aspirante <br/> Front-end developer
                    </h2>
                    <p>
                        Base sólida em html e css. Buscando se tornar um ninja em javascript. 
                    </p>
                </section>
            </div>

            <div className={styles.habilitiesItem}>
                <section>
                    <h2>
                        Amante <br/> de UX/UI
                    </h2>
                    <p>
                        Sempre focando no usuário, em ele ter a melhor experiência nas minhas aplicações
                    </p>
                </section>
            </div>
        </div>
    )
}