import React from 'react'
import config from '../../../config'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer id='footer' className='footer' aria-label='stopka'>
      <div className='container'>
        <div className='columns has-text-centered'>
          <Link className='column navbar-item' to='/'>
            Strona główna
          </Link>
          <Link className='column navbar-item' to='/grupy'>
            Grupy
          </Link>
          <Link className='column navbar-item' to='/zajecia'>
            Zajęcia
          </Link>
          <Link className='column navbar-item' to='/aktualnosci'>
            Aktualności
          </Link>
          <Link className='column navbar-item' to='/galeria'>
            Galeria
          </Link>
          <Link className='column navbar-item' to='/rodo'>
            RODO
          </Link>
          <Link className='column navbar-item' to='/deklaracja-dostepnosci'>
            Deklaracja dostępności
          </Link>
          <Link
            className='column navbar-item'
            to='/kontakt'>
            Kontakt </Link>
          <div className='column navbar-item'><a id='BipLink' href='http://przedszkole371.bip.um.warszawa.pl/default.htm' target='_blank' rel='noopener' aria-label='Łącze do Biuletynu Informacji Publicznej'><div className='bip-logo' /></a></div>
        </div>
        <hr />
        <p className='is-size-7'>
        Podstrony strony www.przedszkole371.nq.pl mogą zawierać adresy skrzynek mailowych. Użytkownik korzystający z odnośnika będącego adresem e-mail zgadza się na przetwarzanie jego danych (adres e-mail oraz dobrowolnie podanych danych w wiadomości) w celu przesłania odpowiedzi na przesłane pytania. Szczegóły przetwarzania danych osobowych dostępne są w zakładce <Link to='/rodo'>RODO</Link>.
        </p>
        <hr />
        <div className='is-size-7'>
          <p>{config.copyright} na licencji <a target='_blank' rel='license' href='https://opensource.org/licenses/mit-license.php'>MIT</a>. Zasilane przez <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener'>Gatsby</a>,<a href='https://www.netlifycms.org' target='_blank' rel='noopener'>Netlify CMS</a>,<a href='https://github.com/' target='_blank' rel='noopener'>Github</a> i <a href='https://cloudinary.com/' target='_blank' rel='noopener'>Cloudinary.</a></p>
          <p>Treści dostępne są na licencji <a rel='license' target='_blank' href='https://creativecommons.org/licenses/by-sa/2.0/deed.pl'>Creative Commons uznanie autorstwa</a>. Zdjęcia zamieszczone w galerii przedszkola na licencji <a href='https://creativecommons.org/licenses/by-nc/4.0/legalcode.pl'>Creative Commons uznanie autorstwa-użycie niekomercyjne</a>.</p>
          <p>Zdjęcie w bannerze <a href='https://pl.freepik.com/darmowe-zdjecie-wektory/dzieci'>utworzone przez freepik - pl.freepik.com</a>.</p>
          <p>Pozostałe zdjęcia na licencji <a rel='license' target='_blank' href='https://creativecommons.org/licenses/by/4.0/legalcode.pl'>Creative Commons uznanie autorstwa</a> lub <a rel='license' target='_blank' href='https://creativecommons.org/publicdomain/zero/1.0/legalcode.pl'>domeny publicznej</a>. Źródło zdjęcia oraz prawa autorskie zamieszczone są metadanych poszczególnych plików.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
