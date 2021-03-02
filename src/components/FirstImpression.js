import styles from '../styles/components/FirstImpression.module.css';

export function FirstImpression(){
    return(
        <div className={styles.firstImpressionContainer}>
            <section>
                <main>
                    <p>
                        Desenvolvedor Front-end de São Paulo, Brasil
                    </p>
                    <p>
                        Apaixonado por tecnologia e por colocar a mão na massa
                    </p>
                </main>
            </section>
        </div>
    )
}