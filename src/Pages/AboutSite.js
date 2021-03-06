import React from "react";
import { Container, Table } from "react-bootstrap";

const style = { textIndent: "20px"};

export function AboutSite() {
  return (
    <Container fluid>
      <h2 className="text-center m-3"><b>Військовий інститут телекомунікацій та інформатизації здійснює підготовку</b></h2>
      <p style={style}>
        <b>1. Офіцерських кадрів за ступенями вищої освіти: бакалавр, магістр:</b>
      </p>
      <ul style = {{ listStyleType: 'none' }}>
        <li>приймається цивільна молодь та військовослужбовці на базі повної загальної середньої освіти;</li>
        <li>форма навчання – денна;</li>
        <li>термін навчання – 4 роки підготовка бакалавра + 1,5 роки підготовка магістра. Термін навчання зараховується до терміну проходження військової служби;</li>
        <li>навчання здійснюється за рахунок видатків державного бюджету.</li>
      </ul>
      <p style={style}>
        <b>2. Військовослужбовців (які не мають офіцерських звань) за спеціальностями за ступенем вищої освіти бакалавр:</b>
      </p>
      <ul style = {{ listStyleType: 'none' }}>
        <li>приймаються військовослужбовці військової служби за контрактом на базі повної загальної середньої освіти;</li>
        <li>форма навчання – заочна;</li>
        <li>термін навчання – 4 роки;</li>
        <li>навчання здійснюється за рахунок видатків державного бюджету.</li>
      </ul>
      <p style={style}>
        <b>3. Громадян України з числа цивільної молоді та військовослужбовців за програмою підготовки офіцерів запасу:</b>
      </p>
      <ul style = {{ listStyleType: 'none' }}>
        <li>приймаються військовослужбовці військової служби за контрактом, студенти ЗВО та інші громадяни України, які мають, або здобувають вищу освіту;</li>
        <li>форма навчання – заочна;</li>
        <li>термін навчання – 2 роки;</li>
        <li>навчання здійснюється за рахунок видатків державного бюджету, а також за кошти фізичних або юридичних осіб.</li>
      </ul>
      <h2 className="text-center m-3"><b>Спеціальності підготовки</b></h2>
      <Table striped bordered hover style = {{ width: '80%', margin: '0 auto'}}>
        <thead>
          <tr>
            <th>
              <p>Код</p>
            </th>
            <th>
              <p>Найменування спеціальності</p>
            </th>
            <th>
              <p>Найменування спеціалізації</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>122</td>
            <td>Комп’ютерні науки</td>
            <td>Математичне, інформаційне і програмне забезпечення військових інформаційних систем</td>
          </tr>
          <tr>
            <td>125</td>
            <td>Кібербезпека</td>
            <td>Захист інформації та кібернетична безпека в інформаційно-телекомунікаційних системах</td>
          </tr>
          <tr>
            <td>126</td>
            <td>Інформаційні системи та технології</td>
            <td>Автоматизовані системи управління військами та озброєнням</td>
          </tr>
          <tr>
            <td>172</td>
            <td>Телекомунікації та радіотехніка</td>
            <td>Системи військового зв’язку</td>
          </tr>
          <tr>
            <td>253</td>
            <td>Військове управління (за видами збройних сил)</td>
            <td>Управління діями підрозділів зв’язку</td>
          </tr>
          <tr>
            <td>255</td>
            <td>Озброєння та військова техніка</td>
            <td>Радіоелектронні інформаційні системи, оперативна техніка та спецозброєння</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="text-center m-3"><b>Структурні підрозділи інституту</b></h2>
      <p style={style}>
        Інститут має у своєму складі: 3 факультети (9 кафедр), 6 загальновійськових кафедр, науковий центр, Військовий коледж сержантського складу, курси перепідготовки та підвищення кваліфікації:
      </p>
      <ul>
        <li>факультет Телекомунікаційних систем;</li>
        <li>факультет Інформаційних технологій;</li>
        <li>факультет Бойового застосування систем управління та зв'язку;</li>
        <li>кафедра Загальновійськових дисциплін;</li>
        <li>кафедра Фізичного виховання, спеціальної фізичної підготовки і спорту;</li>
        <li>кафедра Військово-гуманітарних дисциплін;</li>
        <li>кафедра Математики та фізики;</li>
        <li>кафедра Іноземних мов;</li>
        <li>кафедра Військової підготовки;</li>
        <li>військовий коледж сержантського складу ВІТІ (місце дислокації м. Полтава)</li>
        <li>науковий центр зв'язку та інформатизації;</li>
        <li>курси перепідготовки та підвищення кваліфікації:</li>
      </ul>
      <p style={style}>
        В інституті працюють висококваліфіковані науково-педагогічні працівники, серед яких 2 Заслужених діячі науки і техніки України; 1 Заслужений працівник освіти України, 1 Лауреати Державної премії України; 1 Академік галузевої академії; 15 докторів наук; 12 професорів; 61 кандидат наук; 48 доцентів та старших наукових співробітників.
      </p>
      <p style={style}>
        У військовому інституті створено всі необхідні умови для здійснення навчально-виховного процесу згідно потреб сучасності: 110 лекційних, навчальних, лабораторних, спеціалізованих аудиторій, комп’ютерних лабораторій, та інших класів; навчально-тренувальний комплекс для відпрацювання питань практичної підготовки курсантів на засобах зв'язку і АСУ; стрілецький тир; 4 спортивні та тренажерні зали; 2 спортивних майданчики, спортивне містечко для занять силовими вправами; смуга перешкод.
      </p>
      <p style={style}>
        Випускники інституту отримують диплом державного зразка та первинне офіцерське звання лейтенант. Офіцери випускники направляються для подальшого проходження військової служби до частин та підрозділів Збройних Сил України та інших військових формувань держави.
      </p>
      <p style={style}>
        Випускники Військового коледжу сержантського складу отримують диплом молодшого спеціаліста державного зразка та звання сержанта. Випускники направляються для подальшого проходження військової служби до частин та підрозділів Збройних Сил України та інших військових формувань держави, а також можуть продовжити навчання у Військовому інституті за спорідненими спеціальностями для отримання вищих ступенів освіти та військового звання лейтенант.
      </p>
      <p style={style}>
        На науковий центр зв’язку та інформатизації покладаються завдання щодо планування, організації і безпосереднього здійснення всіх видів і форм наукової та науково-технічної діяльності з проблем воєнної науки на замовлення (за договорами, оперативними завданнями) органам державної виконавчої влади, структурних підрозділів центрального апарату Міністерства оборони України, Генерального штабу Збройних Сил України і видів Збройних Сил України, органів місцевого самоврядування, підприємств, установ і організацій. Основним напрямом діяльності НЦЗІ ВІТІ є виконання НДДКР, відпрацювання оперативних постановок, наукове супроводження та впровадження результатів дослідно-конструкторських робіт.
      </p>
      <p style={style}>
        5-ті Курси перепідготовки та підвищення кваліфікації дислокуються на території Військового інституту телекомунікацій та інформатизації та є окремою військовою частиною польова пошта В0805, яка підпорядковується начальнику інституту. Навчання на курсах проводяться, як теоретично в навчальних аудиторіях на кафедрах інституту, де вивчаються новітні засоби зв’язку, так і в польових умовах. Слухачі курсів під керівництвом офіцерів, які неодноразово перебували на Сході України, приймали участь в АТО, опановують організацію життєдіяльності у польових умовах та відпрацьовують нормативи по роботі на військовій техніці зв’язку, нормативи з вогневої та інженерної підготовки.
      </p>
    </Container>
  );
}
