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
