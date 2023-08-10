const divInput = document.getElementById("header");

const elements = (<div class="header-block">
    <div class="header-text">
        <a href="/index.html">Главная</a>
        <a href="/html/persons.html">Персонажи</a>
        <a href="/html/race.html">Расы</a>
        <a href="/html/other.html">Другое</a>
    </div>
</div>);

ReactDOM.render(elements, divInput)