import React from 'react'
import { Section } from '../../Section'

export default function AboutPage() {
  return (
    <Section>
        <h1>О проекте</h1>
        <p>Этот проект был разработан по нижеописанному техническому заданию и 
            был выложен в общий доступ на следующий репозиторий:&nbsp;
            <a href="https://github.com/YSV-dev/ReactTestApp.git">ссылка на репозиторий</a>
            </p>
        <h2>Техническое задание</h2>
        <p>Используя React разработать микро-фронтенд приложение состоящие из трех микро приложений и
            обеденные в одно полноценное приложение, реализующее следующий функционал:
            В основном (host) приложении используется горизонтальное главное меню, содержащее 3 пункта
            для перехода между приложениями: «Раздел 1» - приложение 1, «Раздел 2» - приложение 2,
            «Раздел 3» - приложение 3. При переходе между пунктами меню, их наименование отображается в
            заголовке окна.</p>
        <h3><u>Раздел 1 (приложение 1)</u></h3>
        <ol>
            <li>Группа кнопок выбора цвета: «красный», «зеленый», «синий»;</li>
            <li>Текстовая область.</li>
        </ol>
        <h3><u>Раздел 2 (приложение 2)</u></h3>
        <p>Группа состоящая из 3-х вкладок: «Блок 1», «Блок 2», «Блок 3».</p>
        <br/>

        <h4><u>Блок 1</u></h4>
        <ol>
            <li>Селектор выбора одного из многих;</li>
            <li>Текстовое поле;</li>
            <li>Таблица 3x6, содержащая 3 столбца (идентификатор, значения из списка селектора 1,
                текстовая информация (2-3 слова) ) и 6 строк.
                Отображение информации в таблице фильтруется в зависимости от выбранного селектора 1
                (столбец 2), а также в зависимости от содержимого, введённого в текстовое поле 2 (столбец
                3).</li>
        </ol>
        <br/>

        <h4><u>Блок 2</u></h4>
        <p>Реализация простого ToDo листа. Поддержка функций: выполнено/невыполнено, добавить, редактировать, удалить.</p>
        <br/>

        <h4><u>Блок 3</u></h4>
        <ol>
            <li>Блок загрузки изображения (как с возможностью выбора файла, так и с возможностью его 
                перетаскивания на область загрузки);</li>
            <li>Блок отображения загруженного файла. Размер области 320px*240px. Загруженное
                изображение должно вписываться в область по большей стороне;</li>
            <li>Блок отображения информации о загруженном файле: имя, тип mime, размер в зависимости
                от размера отображается в Мегабайтах, килобайтах или байтах с указанием единиц.</li>
        </ol>

        <h3><u>Раздел 3 (приложение 3)</u></h3>
        <p>Раздел 3 состоит из Левого бокового меню, содержащего 3 пункта: «Подменю 1», «Подменю 2»,
            «Подменю 3». Цвет фона бокового меню по умолчанию зависит от выбранного цвета в «Разделе 1».
            При выборе подменю, в основном окне отображается наименование выбранного подменю, кроме
            того:</p>
        <br/>

        <h4><u>Подменю 1</u></h4>
        <ol>
            <li>В основном окне отображается результат выбора селектора из раздела 2, блока 1;</li>
            <li>В основном окне отображается текущий лист ToDo из раздела 2, блока 2.</li>
        </ol>
        <br/>

        <h4><u>Подменю 2</u></h4>
        <p>Реализация простого калькулятора. Поддержка функций: сложения, вычитания, деления и
            умножения. Выполняемая операция задаётся выбором соответствующего кнопки + - / *. Операнды
            задаются следующими значениями: операнд 1 – поле ввода расположенное на основном окне,
            операнд 2 – параметр адреса URL. Результат выводится в текстовом поле.</p>
            <br/>

        <h4><u>Подменю 3</u></h4>
        <ol>
            <li>В основном окне отображается текстовое содержимое из раздела 1;</li>
            <li>В основном окне отображается отфильтрованная, на основании установленных фильтров
                таблица из раздела 2, блока 1.</li>
        </ol>
        <p>Задание следует вести в git. Параметры подключения к серверу git смотрите в письме.
        По завершению сообщить любым удобным способом.</p>

    </Section>
  )
}
