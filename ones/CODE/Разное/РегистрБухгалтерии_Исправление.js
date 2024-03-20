    
	Выборка2 = РезультатПакет[2].Выбрать();
	НаборЗаписей=РегистрыБухгалтерии.Хозрасчетный.СоздатьНаборЗаписей();
	счетчикХозРасчетный = 0;
	Пока Выборка2.Следующий() Цикл
		ЕстьИзменения = Ложь;
		НаборЗаписей.Отбор.Регистратор.Установить(Выборка2.Регистратор);
        НаборЗаписей.Прочитать();
		Для каждого движ из НаборЗаписей Цикл
			Если (движ.СчетДт = ПланыСчетов.Хозрасчетный.СпецоснасткаВЭксплуатацииВспомогательный) Тогда	
				ВидСубк = движ.СчетДт.ВидыСубконто[2].ВидСубконто;
				движ.СубконтоДт.Вставить(ВидСубк, ФизЛицо_Нужное);	
				ЕстьИзменения = Истина; 
				счетчикХозРасчетный = счетчикХозРасчетный + 1;
			КонецЕсли;		
		КонецЦикла;
		Если ЕстьИзменения Тогда
			НаборЗаписей.ОбменДанными.Загрузка = Истина;
			НаборЗаписей.Записать();
		КонецЕсли;
	КонецЦикла;

  Если счетчикХозРасчетный > 0 Тогда
		Сообщение = Новый СообщениеПользователю;
		Сообщение.Текст = СтрШаблон("Записано записей по регистру Хозрасчетный - %1", счетчикХозРасчетный);
		Сообщение.Сообщить();
	КонецЕсли;
 

