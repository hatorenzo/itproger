// Пример 1

& НаСервере
Процедура УстановитьУсловноеОформление()

ЭлементУсловногоОформления = УсловноеОформление.Элементы.Добавить();
//1
ПолеЭлемента = ЭлементУсловногоОформления.Поля.Элементы.Добавить();
ПолеФормыНоменклатура = Элементы["ДеревоНоменклатурыНоменклатура"]; // ПолеФормы
ПолеЭлемента.Поле = Новый ПолеКомпоновкиДанных(ПолеФормыНоменклатура.Имя);

ОтборЭлемента = ЭлементУсловногоОформления.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
ОтборЭлемента.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ДеревоНоменклатуры.ВерхнийУровень");
ОтборЭлемента.ВидСравнения = ВидСравненияКомпоновкиДанных.Равно;
ОтборЭлемента.ПравоеЗначение = Истина;

ЭлементУсловногоОформления.Оформление.УстановитьЗначениеПараметра("ЦветТекста", ЦветаСтиля.ТекстЗапрещеннойЯчейкиЦвет);
ЭлементУсловногоОформления.Оформление.УстановитьЗначениеПараметра("ОтметкаНезаполненного", Ложь);
ЭлементУсловногоОформления.Оформление.УстановитьЗначениеПараметра("Текст", НСтр("ru = '<для товаров>';
	| en = '<for goods>'"));
	ЭлементУсловногоОформления.Оформление.УстановитьЗначениеПараметра("ТолькоПросмотр", Истина);

ЭлементУсловногоОформления.Использование = Истина;


КонецПроцедуры

//Пример для Дин.списка
ЭлементыОформления = Список.УсловноеОформление.Элементы.Добавить();
ЭлементыОформления.Использование = Истина;
//1
ПолеЭлемента = ЭлементыОформления.Поля.Элементы.Добавить();
ПолеЭлемента.Использование = Истина;
ПолеЭлемента.Поле = Новый ПолеКомпоновкиДанных("Склад");

ОтборЭлемента = ЭлементыОформления.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
ОтборЭлемента.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ДобавленПроведением");
ОтборЭлемента.ВидСравнения = ВидСравненияКомпоновкиДанных.Равно;
ОтборЭлемента.ПравоеЗначение = Истина;
ОтборЭлемента.Использование = Истина;

ЭлементыОформления.Оформление.УстановитьЗначениеПараметра("ЦветТекста", WindowsЦвета.Подсвеченный);
	//WindowsЦвета.Подсвеченный);
	//WebЦвета.Аквамарин);



// Шаблон краткий
& НаСервере
Процедура УстановитьУсловноеОформлениеНаСервере()

УсловноеОформление.Элементы.Очистить();

ЭлементУО = УсловноеОформление.Элементы.Добавить();
ЭлементУО.Оформление.УстановитьЗначениеПараметра("ЦветФона", WebЦвета.ДымчатоБелый);
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаЗаявкаНаЗаборГруза");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаНомерТТН");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаКоличествоПоставок");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаКоличествоОрдеров");
ЭлементУсловия = ЭлементУО.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
ЭлементУсловия.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГруза.МожноОформитьПриход");
ЭлементУсловия.ВидСравнения = ВидСравненияКомпоновкиДанных.Равно;
ЭлементУсловия.ПравоеЗначение = Ложь;
ЭлементУсловия.Использование = Истина;

ЭлементУО = УсловноеОформление.Элементы.Добавить();
ЭлементУО.Оформление.УстановитьЗначениеПараметра("ЦветФона", Новый Цвет(204, 253, 204));
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаЗаявкаНаЗаборГруза");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаНомерТТН");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаКоличествоПоставок");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГрузаКоличествоОрдеров");
ЭлементУсловия = ЭлементУО.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
ЭлементУсловия.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ЗаявкиНаЗаборГруза.МожноОформитьПриход");
ЭлементУсловия.ВидСравнения = ВидСравненияКомпоновкиДанных.Равно;
ЭлементУсловия.ПравоеЗначение = Истина;
ЭлементУсловия.Использование = Истина;


КонецПроцедуры


// Шаблон полный 
НаСервере
Процедура УстановитьУсловноеОформлениеНаСервере()

УсловноеОформление.Элементы.Очистить();

СписокДляОтбора = Новый СписокЗначений;
СписокДляОтбора.Добавить(Дата(1986, 10, 2));
СписокДляОтбора.Добавить(Дата(1985, 6, 9));
СписокДляОтбора.Добавить(Дата(1989, 4, 15));
СписокДляОтбора.Добавить(Дата(1974, 3, 8));


ЭлементУО = УсловноеОформление.Элементы.Добавить();
//устанавливаем само оформление
ЭлементУО.Оформление.УстановитьЗначениеПараметра("Доступность", Ложь);
//добавляем условие
ЭлементУсловия = ЭлементУО.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
//что сравниваем
ЭлементУсловия.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ТЗПример.ДатаРождения");
//как сравниваем
ЭлементУсловия.ВидСравнения = ВидСравненияКомпоновкиДанных.ВСписке;
//с чем сравниваем
ЭлементУсловия.ПравоеЗначение = СписокДляОтбора;

ЭлементУсловия.Использование = Истина;

//оформляемые поля
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ТЗПримерИмя");

ЭлементУО = УсловноеОформление.Элементы.Добавить();
ЭлементУО.Оформление.УстановитьЗначениеПараметра("ЦветФона", WebЦвета.СеребристоСерый);
ЭлементУсловия = ЭлементУО.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
ЭлементУсловия.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ТЗПример.ДатаРождения");
ЭлементУсловия.ВидСравнения = ВидСравненияКомпоновкиДанных.Больше;
//ЭлементУсловия.ВидСравнения 		= ВидСравненияКомпоновкиДанных.НачинаетсяС;
ЭлементУсловия.ПравоеЗначение = Дата(1979, 11, 19);
ЭлементУсловия.Использование = Истина;

//оформляемые поля
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ТЗПримерФамилия");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ТЗПримерИНН");

ЭлементУО = УсловноеОформление.Элементы.Добавить();
ЭлементУО.Оформление.УстановитьЗначениеПараметра("ЦветТекста", WebЦвета.Киноварь);
ЭлементУсловия = ЭлементУО.Отбор.Элементы.Добавить(Тип("ЭлементОтбораКомпоновкиДанных"));
ЭлементУсловия.ЛевоеЗначение = Новый ПолеКомпоновкиДанных("ТЗПример.ДатаРождения");
ЭлементУсловия.ВидСравнения = ВидСравненияКомпоновкиДанных.МеньшеИлиРавно;
ЭлементУсловия.ПравоеЗначение = Дата(1979, 11, 19);
ЭлементУсловия.Использование = Истина;

//оформляемые поля
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ТЗПримерФамилия");
ОформляемоеПоле = ЭлементУО.Поля.Элементы.Добавить();
ОформляемоеПоле.Поле = Новый ПолеКомпоновкиДанных("ТЗПримерИНН");

КонецПроцедуры //УстановитьУсловноеОформлениеНаСервере()

