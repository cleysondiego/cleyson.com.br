import { Head } from '../../components/Head';

import styles from './styles.module.scss';

export default function Privacy() {
  return (
    <>
      <Head title='Privacy Policy | Cleyson Diego' />

      <main className={styles.container}>
        <article className={styles.privacy}>
          <h1>Privacy Policy</h1>
          <time>April 6, 2022</time>

          <div className={styles.privacyContent}>
            <p>A sua privacidade é importante para nós.</p>
            <p>É política do cleyson.com respeitar a sua privacidade em relação a qualquer informação que possamos vir a coletar através dos nossos aplicativos.</p>
            <p>Podemos solicitar informações pessoais apenas quando estritamente necessárias para fornecer o serviço. Fazemos por meios legais, com o seu conhecimento e consentimento. Também informamos o motivo da coleta e como os dados serão utilizados.</p>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos os dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
            <p>O nosso aplicativo pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não nos responsabilizamos por suas respectivas políticas de privacidade.</p>
            <p>Você é livre para recusar a nossa solicitação de informações pessoais, quando solicitado, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            <p>O uso continuado de nosso aplicativo será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
            <h2>Compromisso do Usuário</h2>
            <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que os nossos aplicativos oferece e com caráter enunciativo, mas não limitativo:</p>
            <p>- Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</p>
            <p>- Não divulgar conteúdo ou propaganda de natureza racista, xenofóbica, casas de apostas online, pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</p>
            <p>- Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre cassinos, apostas desportiva (ex.: Betano), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</p>
            <p>- Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) dos aplicativos do cleyson.com, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</p>
          </div>
        </article>
      </main>
    </>
  )
}