
    имяКолонки = ?(Аналитика.Предопределенный, Аналитика.ИмяПредопределенныхДанных, Аналитика.Идентификатор);	
	УИД = Новый УникальныйИдентификатор(); 
	ВременнаяСтруктура = Новый Структура(имяКолонки, УИД); 
	ЗаполнитьЗначенияСвойств(ВременнаяСтруктура, Ячейка, имяКолонки); 
	флЕстьКолонка = ВременнаяСтруктура[имяКолонки] <> УИД;