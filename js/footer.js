const divInput = document.getElementById("footer");

const elements = (<div className="footer-block">
    <div className="footer-up-block">
        <p>Спасибо что выбераете нас!</p>
    </div>
    <div className="footer-down-block">
        <p>Сайт был создан для развлекательных целях. Вся вселенна лишь воображение авторов и не как не связанные с реальным миром. Присутствует множество отсылок на другие проекты, аниме, фильмы и игры.</p>
        <p>Автор - wladrak</p>
        <p>Поддержка - wladrak711@gmail.com</p>
        <p>© RP-LIB / 2023 / Version 0.1.5 (Alpha) [Build 00607172312]</p>
    </div>
</div>);

ReactDOM.render(elements, divInput)