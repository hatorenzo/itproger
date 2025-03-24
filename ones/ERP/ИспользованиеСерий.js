
    ЗначенияПолейСвязи = Новый Структура("Склад", Объект.Склад); 
	ВидНоменклатуры = ОбщегоНазначения.ЗначениеРеквизитаОбъекта(Объект.Номенклатура, "ВидНоменклатуры"); 
	ПараметрыУказанияСерий = НоменклатураКлиентСервер.ПараметрыУказанияСерий(); 	
	НастройкиИспользованияСерий = Справочники.ВидыНоменклатуры.НастройкиИспользованияСерий(ВидНоменклатуры, ПараметрыУказанияСерий, ЗначенияПолейСвязи); 
	
    СерииИспользуются = НастройкиИспользованияСерий.ПолитикаУчетаСерий <> Справочники.ПолитикиУчетаСерий.СерииНеИспользуются;


	// ИЛИ ЗАпросом

	ВЫБРАТЬ
	ЕСТЬNULL(ТЧПолитикиУчетаСерий.ПолитикаУчетаСерий, ЗНАЧЕНИЕ(Справочник.ПолитикиУчетаСерий.ПустаяСсылка)) 
	<> Значение(Справочник.ПолитикиУчетаСерий.СерииНеИспользуются) КАК СерииИспользуются
	
ИЗ
	Справочник.ВидыНоменклатуры КАК ВидыНоменклатуры
		ЛЕВОЕ СОЕДИНЕНИЕ Справочник.ВидыНоменклатуры.ПолитикиУчетаСерий КАК ТЧПолитикиУчетаСерий
		ПО ВидыНоменклатуры.Ссылка = ТЧПолитикиУчетаСерий.Ссылка
			И (ТЧПолитикиУчетаСерий.Склад = &СкладПодразделение)
ГДЕ
	ВидыНоменклатуры.Ссылка = &ВидНоменклатуры
	