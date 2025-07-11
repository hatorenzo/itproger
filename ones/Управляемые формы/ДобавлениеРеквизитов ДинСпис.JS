
// ШАБЛОН КРАТКИЙ
&НаСервере
Процедура СозданиеДинамическогоСпискаЭлектронныеПодписи()					
	
	ДобавляемыеРеквизиты = Новый Массив;
	ТипДинамическийСписок = Новый ОписаниеТипов("ДинамическийСписок");
	
	ДобавляемыеРеквизиты = Новый Массив;
	НовыйРеквизит = Новый РеквизитФормы("ЭлектронныеПодписи", ТипДинамическийСписок);
	ДобавляемыеРеквизиты.Добавить(НовыйРеквизит);
	ИзменитьРеквизиты(ДобавляемыеРеквизиты);  

	ЭлектронныеПодписи =ЭтотОбъект.ЭлектронныеПодписи; 
    ЭлектронныеПодписи.ПроизвольныйЗапрос = ИСТИНА;
	ЭлектронныеПодписи.ТекстЗапроса = ПолучитьТекстЗапросаЭлектронныеПодписи();
	ЭлектронныеПодписи.Параметры.УстановитьЗначениеПараметра("Документ", Объект.Ссылка);
	ТаблицаФормы = Элементы.Добавить("ЭлектронныеПодписи",Тип("ТаблицаФормы"), Элементы.ЭлектронныеПодписи);
	ТаблицаФормы.ПутьКДанным = "ЭлектронныеПодписи"; //Имя реквизита 
	// Колонка 1
	НоваяКолонкаТаблицы = Элементы.Добавить("ЭлектронныеПодписиРольПодписанта", Тип("ПолеФормы"), ЭлектронныеПодписи);
	НоваяКолонкаТаблицы.ПутьКДанным = "ЭлектронныеПодписи.РольПодписанта"; 		
	// Колонка 2
	НоваяКолонкаТаблицы = Элементы.Добавить("ЭлектронныеПодписиПодписант", Тип("ПолеФормы"), ЭлектронныеПодписи);
	НоваяКолонкаТаблицы.ПутьКДанным = "ЭлектронныеПодписи.Подписант"; 
	// Колонка 3
	НоваяКолонкаТаблицы = Элементы.Добавить("ЭлектронныеПодписиДата", Тип("ПолеФормы"), ЭлектронныеПодписи);
	НоваяКолонкаТаблицы.ПутьКДанным = "ЭлектронныеПодписи.Дата"; 
	// Колонка 4
	НоваяКолонкаТаблицы = Элементы.Добавить("ЭлектронныеПодписиИдентификаторПодписи", Тип("ПолеФормы"), ЭлектронныеПодписи);
	НоваяКолонкаТаблицы.ПутьКДанным = "ЭлектронныеПодписи.ИдентификаторПодписи"; 
	// Колонка 5
	НоваяКолонкаТаблицы = Элементы.Добавить("ЭлектронныеПодписиКомментарий", Тип("ПолеФормы"), ЭлектронныеПодписи);
	НоваяКолонкаТаблицы.ПутьКДанным = "ЭлектронныеПодписи.Комментарий"; 
	
КонецПроцедуры 

// ШАБЛОН ПОЛНЫЙ
&НаСервере
Процедура СозданиеДинамическогоСписка(
	
	ИмяСписка = "Список", 			//тип строка - имя будущего списка на форме и реквизита
	ТекстЗапроса = "", 				//тип строка - запрос, если он не указан, необходимо указать таблицу
	МассивКолонок,                  //тип массив - массив создаваемых колонок, значения тип строка. Пример: "Д,ДоговораКонтрагента" значит будет создана колонка
									//				с заголовком "Д" и колонкой списка "ДоговораКонтрагента". Если указать просто "ДоговораКонтрагента", 
									//				заголовок будет идентичен заголовку по умолчанию типа "Договор контрагента".
	СписокДействий = Неопределено,  //типа структура - структура содержит действия (свойства) динамического списка, можно указать только те которые необходимы.
									//				пример: СписокДействий = Новый Структура("Выбор,ПриАктивизацииСтроки","СписокВыбор","СписокПриАктивизацииСтроки")
	ТаблицаСписка = "",				//тип строка - содержит имя основной таблицы, пример: "Документ.РеализацияТоваровУслуг"	
	ДобавитьВ = "",                 //тип строка - имя элемента на который будет размещен список, если пустое, тогда добавляется на форму
	ВставитьПеред = "",             //тип строка - имя элемента перед которым будет размещен список, если пустое, будет просто добавлен в конец
	СвояКоманднаяПанель = ЛОЖЬ,     //тип булево - если ИСТИНА, скрывает стандартную панель и создает свою пустую для будушего наполнения ИмяСписка+"КоманднаяПанель2"
	ПараметрыЗапроса = Неопределено)//тип структура - содержит перечень параметров, если они используются в запросе.
	
	//Защита от дурака
	Если ТекстЗапроса = "" И ТаблицаСписка = "" Тогда Сообщить("Ошибка формирования динамического списка, укажите запрос или таблицу"); Возврат; КонецЕсли;
																									
	//Создаем свою командную панель, тот случай когда я не нашел способа снять галочку "Автозаполнение"
	Если СвояКоманднаяПанель Тогда
		Если ВставитьПеред = "" Тогда
			ГруппаДинамическогоСписка  = Элементы.Добавить("Группа" + ИмяСписка + "CоСвоейКоманднойПанелью",Тип("ГруппаФормы"),?(ДобавитьВ = "",ЭтаФорма,ЭтаФорма.Элементы[ДобавитьВ]));
		Иначе
			ГруппаДинамическогоСписка  = Элементы.Вставить("Группа" + ИмяСписка + "CоСвоейКоманднойПанелью",Тип("ГруппаФормы"),?(ДобавитьВ = "",ЭтаФорма,ЭтаФорма.Элементы[ДобавитьВ]),ЭтаФорма.Элементы[ВставитьПеред]);			
		КонецЕсли;
		ГруппаДинамическогоСписка.Вид = ВидГруппыФормы.ОбычнаяГруппа;
		ГруппаДинамическогоСписка.ОтображатьЗаголовок = Ложь;
		ГруппаДинамическогоСписка.Отображение = ОтображениеОбычнойГруппы.Нет;
		ГруппаДинамическогоСписка.Группировка = ГруппировкаПодчиненныхЭлементовФормы.Вертикальная;
		КоманднаяПанельСписка  = Элементы.Добавить(ИмяСписка + "КоманднаяПанель2",Тип("ГруппаФормы"),ГруппаДинамическогоСписка);
		КоманднаяПанельСписка.Вид = ВидГруппыФормы.КоманднаяПанель;			
	КонецЕсли;
									
	//Создаем реквизит формы
	ТипыРеквизита = Новый Массив;                             
	ТипыРеквизита.Добавить(Тип("ДинамическийСписок"));
	ОписаниеТиповДляРеквизита = Новый ОписаниеТипов(ТипыРеквизита); 
	ДинамическийСписок = Новый РеквизитФормы(ИмяСписка, ОписаниеТиповДляРеквизита,,"",ЛОЖЬ); //Имя реквизита
	ДобавляемыеРеквизиты = Новый Массив;
	ДобавляемыеРеквизиты.Добавить(ДинамическийСписок);        
	
	//Задаем свойства реквизиту
	ИзменитьРеквизиты(ДобавляемыеРеквизиты);        
	РеквизитДинамическийСписок = ЭтаФорма[ИмяСписка]; //Имя реквизита
	Если ТекстЗапроса = "" Тогда
		РеквизитДинамическийСписок.ПроизвольныйЗапрос = ЛОЖЬ;
		РеквизитДинамическийСписок.ОсновнаяТаблица = ТаблицаСписка;
	Иначе
		РеквизитДинамическийСписок.ПроизвольныйЗапрос = ИСТИНА;
		РеквизитДинамическийСписок.ТекстЗапроса = ТекстЗапроса;
		Если ТаблицаСписка <> "" Тогда РеквизитДинамическийСписок.ОсновнаяТаблица = ТаблицаСписка; КонецЕсли;		
	КонецЕсли;
	
	//Заполняем параметры если они были указаны
	Если ПараметрыЗапроса <> Неопределено Тогда
		Для Каждого Параметра из ПараметрыЗапроса Цикл
			РеквизитДинамическийСписок.Параметры.УстановитьЗначениеПараметра(Параметра.Ключ,Параметра.Значение);	
		КонецЦикла;		 
	КонецЕсли;
	
	//Размещаем реквизит на форме
	Если ЛОЖЬ
		ИЛИ ВставитьПеред = "" 
		ИЛИ СвояКоманднаяПанель //Если своя командная панель тогда нет логики уже в параметре ВставитьПеред
		Тогда
		ТаблицаФормы = Элементы.Добавить(ИмяСписка,Тип("ТаблицаФормы"),?(СвояКоманднаяПанель,ГруппаДинамическогоСписка,?(ДобавитьВ = "",ЭтаФорма,ЭтаФорма.Элементы[ДобавитьВ])));
	Иначе
		ТаблицаФормы = Элементы.Вставить(ИмяСписка,Тип("ТаблицаФормы"),?(ДобавитьВ = "",ЭтаФорма,ЭтаФорма.Элементы[ДобавитьВ]),ЭтаФорма.Элементы[ВставитьПеред]);	
	КонецЕсли;		
	ТаблицаФормы.ПутьКДанным = ИмяСписка; //Имя реквизита 
	
	//Если своя панель тогда скрываем стандартную
	Если СвояКоманднаяПанель Тогда
		Элементы[ИмяСписка].ПоложениеКоманднойПанели = ПоложениеКоманднойПанелиЭлементаФормы.Нет;
	КонецЕсли;

	//Создание колонок на основание МассивКолонок
	Для Каждого Элемента Из МассивКолонок Цикл
		ПараметрыКолонки = СтрЗаменить(Элемента,",",Символы.ПС);
		Если СтрЧислоСтрок(ПараметрыКолонки) > 1 Тогда
			Заголовок = СтрПолучитьСтроку(ПараметрыКолонки, 1);
			ИмяКолонки = СтрПолучитьСтроку(ПараметрыКолонки, 2);
		Иначе
			Заголовок = "";
			ИмяКолонки = ПараметрыКолонки; 
		КонецЕсли;	
		НоваяКолонкаТаблицы = Элементы.Добавить(ИмяСписка + ИмяКолонки, Тип("ПолеФормы"), ТаблицаФормы);
		Если Заголовок <> "" Тогда НоваяКолонкаТаблицы.Заголовок = Заголовок; КонецЕсли;
		НоваяКолонкаТаблицы.ПутьКДанным = ИмяСписка + "." + ИмяКолонки; 	
	КонецЦикла;
	
	//Задаем действия (События) на основание СписокДействий, если он определен
	Если СписокДействий <> Неопределено Тогда 	
		ПереченьСвойств = "ПриИзменении
						|Выбор
						|ПриАктивизацииСтроки
						|ВыборЗначения
						|ПриАктивизацииПоля
						|ПриАктивизацииЯчейки
						|ПередНачаломДобавления
						|ПередНачаломИзменения
						|ПередУдалением
						|ПриНачалеРедактирования
						|ПередОкончаниемРедактирования
						|ПриОкончанииРедактирования
						|ОбработкаВыбора
						|ПередРазворачиванием
						|ПередСворачиванием
						|ПослеУдаления
						|ПриСменеТекущегоРодителя
						|ОбработкаЗаписиНового
						|ПриСохраненииПользовательскихНастроекНаСервере
						|ПередЗагрузкойПользовательскихНастроекНаСервере
						|ПриЗагрузкеПользовательскихНастроекНаСервере
						|ПриОбновленииСоставаПользовательскихНастроекНаСервере
						|ОбработкаЗапросаОбновления
						|ПриПолученииДанныхНаСервере
						|НачалоПеретаскивания
						|ПроверкаПеретаскивания
						|ОкончаниеПеретаскивания
						|Перетаскивание";
		Для Счетчик = 1 по 28 Цикл
			ИмяСвойства = СтрПолучитьСтроку(ПереченьСвойств, Счетчик);
			Элементы[ИмяСписка].УстановитьДействие(ИмяСвойства,?(СписокДействий.Свойство(ИмяСвойства),СписокДействий[ИмяСвойства],""));
		КонецЦикла;
	КонецЕсли;	

КонецПроцедуры


НовКолонка.ПутьКДаннымКартинкиСтроки = "УУАЗ_РаспоряженияПриемкаОтРабочего.НомерКартинки"; //Для отображения картинки в строке -коллекция картинки
	НовКолонка.КартинкаСтрок = БиблиотекаКартинок.СтатусыДокумента;