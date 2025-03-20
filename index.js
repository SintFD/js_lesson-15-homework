// Задание 1
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(newRadius) {
    this.#radius = newRadius;
  }

  get diameter() {
    return this.#radius * 2;
  }

  circleSquare() {
    return this.#radius ** 2 * Math.PI;
  }

  circleLength() {
    return this.diameter * Math.PI;
  }
}

const newCircle = new Circle(12);

// console.log(newCircle.circleSquare());
// console.log(newCircle.circleLength());

// Задание 2
// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;

// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().

class HtmlElement {
  tagName;
  isSelfClose;
  textContent;
  attributeArray = [];
  stylesArray = [];
  innerTags = [];

  constructor(params) {
    this.tagName = params.tagName;
    this.isSelfClose = params.isSelfClose;
    this.textContent = params.textContent || "";
    // this.attributeArray = params.attributeArray;
    // this.stylesArray = params.stylesArray;
    // this.innerTags = params.innerTags;
  }

  setAttribute(attribute) {
    this.attributeArray.push(attribute);
  }
  setStyle(style) {
    this.stylesArray.push(style);
  }

  addInnerTagInEnd(tag) {
    this.innerTags.push(tag);
  }
  addInnerTagInStart(tag) {
    this.innerTags.unshift(tag);
  }
  getHtml() {
    if (this.isSelfClose) {
      return `<${this.tagName} ${
        (this.attributeArray[0] && this.attributeArray.join(" ")) || ""
      } ${
        (this.stylesArray[0] && `style='${this.stylesArray.join("; ")};'`) || ""
      }>  ${this.textContent} ${
        (this.innerTags[0] && this.innerTags.join(" ")) || ""
      } <${this.tagName}>`;
    } else {
    }
  }
}

const wrapper = new HtmlElement({
  tagName: "div",
  isSelfClose: true,
});

wrapper.setStyle("display: flex");
wrapper.setAttribute("id='wrapper'");

console.log(wrapper.getHtml());

// const bull = false;

// console.log(`${(bull && "hello") || ""}`);

// console.log([2, 34, 53, 1].join(" "));
