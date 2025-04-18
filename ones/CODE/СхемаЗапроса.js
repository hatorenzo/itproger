
    
    СхемаЗапроса = Новый СхемаЗапроса;
	СхемаЗапроса.УстановитьТекстЗапроса(Запрос.Текст);
	
    // Новое поле
    ОсновнойПакетЗапросов = СхемаЗапроса.ПакетЗапросов[5];
	ОсновнаяВыборка = ОсновнойПакетЗапросов.Операторы[0];
	ОсновнаяВыборка.ВыбираемыеПоля.Добавить("ВЫБОР 
											|КОГДА ВТ_ИтоговаяТаблицаОстатков.Назначение = Значение(Справочник.Назначения.ПустаяСсылка)
											|	ТОГДА 2 
											|	КОГДА ВТ_ИтоговаяТаблицаОстатков.Назначение.НаправлениеДеятельности = &НД 
											|		ТОГДА 1
											|	КОГДА 
											|		//ВТ_ИтоговаяТаблицаОстатков.Назначение.НаправлениеДеятельности.УУАЗ_ДоходныйКонтракт <> ЗНАЧЕНИЕ(Справочник.УУАЗ_ДоходныеКонтракты.ПустаяСсылка)	
											|		ВТ_ИтоговаяТаблицаОстатков.Назначение.НаправлениеДеятельности.ТипНаправленияДеятельности = ЗНАЧЕНИЕ(Перечисление.ТипыНаправленийДеятельности.ИнаяДеятельность)	
											|		ТОГДА 3
											|	ИНАЧЕ 4
											|КОНЕЦ");
	НовИндексКолонки = ОсновнойПакетЗапросов.Колонки.Количество() - 1;
	ОсновнойПакетЗапросов.Колонки[НовИндексКолонки].Псевдоним = "Приоритет";
	
    // Сортировка
    ОсновнойПакетЗапросов.Порядок.Добавить(ОсновнойПакетЗапросов.Колонки[НовИндексКолонки]);
	
	// Группировать по
	ОсновнаяВыборка.Группировка.Добавить("ВТ_ОптимизированнаяТаблицаВыбранныхСерийНоменклатуры.ЗаблокированаКорректировка");	

	
	Запрос.Текст = СхемаЗапроса.ПолучитьТекстЗапроса();