-- НАСТРАИВАЕМЫЕ ПАРАМЕТРЫ
-- Условие для выборки, '%' - все базы данных 
--DECLARE @namelike varchar(100) = 'erp_%'
DECLARE @namelike varchar(100) = 'erp_vov'
-- Имена таблиц для очистки (необходимо добавить имена таблиц в таблицу @Table)
DECLARE @Table table(TablName varchar(100));
INSERT INTO @Table VALUES ('_InfoRg48805') -- "РегистрСведений.ВерсииОбъектов"
INSERT INTO @Table VALUES ('_InfoRg62697') -- "РегистрСведений.ЗамерыВремени"
INSERT INTO @Table VALUES ('_InfoRg65755') -- "РегистрСведений.адаптер_СостояниеПолученияСообщенийОбмена"
INSERT INTO @Table VALUES ('_InfoRg61816') -- "РегистрСведений.адаптер_ЛогНедоставленныхСообщений"
--
INSERT INTO @Table VALUES ('_AccumRg59925') -- "РегистрНакопления.ПрочиеРасходыНезавершенногоПроизводства" 
INSERT INTO @Table VALUES ('_AccumRgT59963') -- "РегистрНакопления.ПрочиеРасходыНезавершенногоПроизводства"
INSERT INTO @Table VALUES ('_AccumRg60339') -- "РегистрНакопления.СебестоимостьТоваров"
--
INSERT INTO @Table VALUES ('_AccumRgT81701') -- "РегистрНакопления.УУАЗ_ПотребностьНаЗаказ" регистрация на изменение
INSERT INTO @Table VALUES ('_AccumRg81694') -- "РегистрНакопления.УУАЗ_ПотребностьНаЗаказ"
INSERT INTO @Table VALUES ('_InfoRg85187') -- "РегистрСведений.кшдЖурналОтправки"
INSERT INTO @Table VALUES ('_Reference85034') -- "Справочник.кшдСобытия"
INSERT INTO @Table VALUES ('_InfoRg85207') -- "РегистрСведений.кшдЖурналПолучения"
INSERT INTO @Table VALUES ('_InfoRg85301') -- "РегистрСведений.кшдПолученныеПакеты"

--версия 1.2
INSERT INTO @Table VALUES ('_AccumRg59894') -- "РегистрНакопления.ПрочиеРасходы"
INSERT INTO @Table VALUES ('_AccRgAT32181') -- "Хозрасчетный (Журнал проводок (регламентированный учет)). <ИтогиПоСчетамССубконто3>"
INSERT INTO @Table VALUES ('_Reference93497') -- "Справочник.НастройкиСчетовУчетаПрочихОпераций"
INSERT INTO @Table VALUES ('_AccumRg108265') -- "РегистрНакопления.РаспределениеЗапасовДвижения"
INSERT INTO @Table VALUES ('_Document1019_VT40059') -- "ПартииПроизводства"
INSERT INTO @Table VALUES ('_AccumRg57566') -- "РегистрНакопления.ДвиженияДоходыРасходыПрочиеАктивыПассивы"
INSERT INTO @Table VALUES ('_InfoRg91008') -- "РегистрСведений.ДетализацияСебестоимостиТоваров"
INSERT INTO @Table VALUES ('_AccumRg57718') -- "РегистрНакопления.ДвиженияНоменклатураДоходыРасходы"
INSERT INTO @Table VALUES ('_Document81678_VT81680') -- "УУАЗ_РегистрацияПотребности (Регистрация потребности).Потребности"

INSERT INTO @Table VALUES ('_Document1008_VT39451') -- ПрочиеДоходыРасходы (Отражение прочих доходов и расходов).ПрочиеРасходы (Прочие расходы)
INSERT INTO @Table VALUES ('_AccumRg59867') -- "РегистрНакопления.ПрочиеАктивыПассивы"
INSERT INTO @Table VALUES ('_Document1019') -- "Документ.РаспределениеПрочихЗатрат"
--INSERT INTO @Table VALUES ('_AccumRgT110132') -- ТМЦВЭксплуатации (ТМЦ в эксплуатации).Итоги
INSERT INTO @Table VALUES ('_AccRgAT22180') -- Хозрасчетный (Журнал проводок (регламентированный учет)). <ИтогиПоСчетамССубконто2> 
INSERT INTO @Table VALUES ('_AccumRgT60412') -- СебестоимостьТоваров (Себестоимость товаров).Итоги 
INSERT INTO @Table VALUES ('_AccumRgTn94521') -- ДвиженияПоПрочимАктивамПассивам (Движения Прочие активы и пассивы) 
INSERT INTO @Table VALUES ('_InfoRg49716') -- "РегистрСведений.ABCXYZКлассификацияНоменклатуры"
INSERT INTO @Table VALUES ('_DocumentJournal46423') -- "ЖурналДокументов.РеестрТорговыхДокументов"
INSERT INTO @Table VALUES ('_DocumentJournal46416') -- "ЖурналДокументов.РегламентныеДокументы"
INSERT INTO @Table VALUES ('_AccumRgT67335') -- УУАЗ_ПотребностьТМЦ (Потребность ТМЦ (УУАЗ)).Итоги
INSERT INTO @Table VALUES ('_AccumRgT58289') -- ПрочиеТаблицы.Итоги

--версия 1.4

INSERT INTO @Table VALUES ('_InfoRg116550') -- "РегистрСведений.крн_ЖурналСобытийВыгрузки"
INSERT INTO @Table VALUES ('_InfoRg65749') -- "РегистрСведений.адаптер_ТаблицаКлючей"
INSERT INTO @Table VALUES ('_InfoRg95643') -- "РегистрСведений.УУАЗ_СтатистикаЗапускаВнешнихОтчетовОбработок"
INSERT INTO @Table VALUES ('_InfoRg83376') -- "РегистрСведений.СловарьСопоставленияНоменклатурыБЭД"
INSERT INTO @Table VALUES ('_InfoRg62791') -- "РегистрСведений.СоставДокументовЗарплатаКадры"
INSERT INTO @Table VALUES ('_InfoRg85244') -- "РегистрСведений.кшдИдентификаторыОбъектовПоПолямПоиска"
INSERT INTO @Table VALUES ('_InfoRg50135') -- "РегистрСведений.ЗамерыВремениТехнологические"
INSERT INTO @Table VALUES ('_InfoRg122130') -- "РегистрСведений.УУАЗ_ОчередьСобытийОтложенныхИзмененийОбъектов"

-- версия 1.5
INSERT INTO @Table VALUES ('_AccumRgT121926') -- "РегистрНакопления.ЗапасыИПотребности"
INSERT INTO @Table VALUES ('_AccumRg108265') -- "РегистрНакопления.РаспределениеЗапасовДвижения"
INSERT INTO @Table VALUES ('_AccumRg119387') -- "РегистрНакопления.ЗапасыИПотребности"
INSERT INTO @Table VALUES ('_AccumRg94503') -- "РегистрНакопления.ДвиженияПоПрочимАктивамПассивам"
INSERT INTO @Table VALUES ('_AccumRgTn94521') -- "РегистрНакопления.ДвиженияПоПрочимАктивамПассивам_обороты"
INSERT INTO @Table VALUES ('_AccumRgT60412') -- "РегистрНакопления.СебестоимостьТоваров_Итоги"
INSERT INTO @Table VALUES ('_AccumRg67317') -- "РегистрНакопления.УУАЗ_ПотребностьТМЦ"
INSERT INTO @Table VALUES ('_AccumRg125978') -- "РегистрНакопления.УУАЗ_ПотребностьНаЗаказ_v2"
INSERT INTO @Table VALUES ('_AccumRgT58289') -- "РегистрНакопления.ЗарплатаКВыплате"
INSERT INTO @Table VALUES ('_AccumRgT58842') -- "РегистрНакопления.ОбеспечениеЗаказов"
INSERT INTO @Table VALUES ('_AccumRg57783') -- "РегистрНакопления.ДвиженияНоменклатураНоменклатура"
INSERT INTO @Table VALUES ('_AccumRg57851') -- "РегистрНакопления.ДвиженияСерийТоваров"

--



-- Имя почтового профиля, для отправки электонной почты                                                                                                                               
DECLARE @profilename as nvarchar(100) = 'Main'
-- Получатели сообщений электронной почты, разделенные знаком ";"                                                        
DECLARE @recipients as nvarchar(500) = 'cbg21372@uuap.com'

-------------------------------------------
-- СЛУЖЕБНЫЕ ПЕРЕМЕННЫЕ 
DECLARE @SQLString NVARCHAR(4000)
DECLARE @DBName varchar(100)
DECLARE @TableName varchar(100)
DECLARE @subject as NVARCHAR(1000) = '' -- тема сообщения
DECLARE @finalmassage as NVARCHAR(4000) = '' -- текст сообщения

-------------------------------------------
-- ТЕЛО СКРИПТА
USE master

-- Цикл по всем базам данных
DECLARE DBcursor CURSOR FOR 
(
                SELECT d.name as DatabaseName 
                FROM sys.databases d
                WHERE 
                               d.name <> 'tempdb'
                               AND d.name <> 'master'
                               AND d.name <> 'model'
                               AND d.name <> 'msdb'
                               AND d.state_desc = 'ONLINE' -- база должна быть в сети 
                               AND d.name not like '%demo%' -- исключаем демо-базы
                               AND d.name not like 'erp_daily' -- исключаем демо-базы
                               --AND d.name not like 'erp_update' -- исключаем демо-базы
                               AND d.name not like 'erp_cost_etalon' -- исключаем демо-базы
                               AND d.name not like 'erp_asfzd%' -- исключаем демо-базы
                               --AND d.name not like 'erp_audit' -- исключаем демо-базы
                               --AND d.name not like 'erp_g_%' -- исключаем демо-базы
                               --AND d.name not like 'erp_mti' -- исключаем демо-базы
                               --AND d.name not like 'erp_mti2' -- исключаем демо-базы
                               --AND d.name not like 'erp_ivanov' -- исключаем демо-базы
                               --AND d.name not like 'erp_nav' -- исключаем демо-базы
                               --AND d.name not like 'erp_peb' -- исключаем демо-базы
                               --AND d.name not like 'erp_saa' -- исключаем демо-базы
                               --AND d.name not like 'erp_sty' -- исключаем демо-базы
                               AND d.name like @namelike -- база должна содержать указанное слово 
                               --AND d.name like '________'
)

-- Цикл по всем указанным таблицам
DECLARE TableCursor CURSOR FOR 
(
                SELECT * FROM @Table
)

-- Цикл по всем базам, попавшим в выборку
OPEN DBcursor
FETCH NEXT FROM DBcursor INTO @DBName
WHILE @@FETCH_STATUS = 0
BEGIN

                PRINT N'----------------------------------------------------------'
                PRINT N'USE [' + @DBName + N']'

                -- Цикл по всем указанным таблицам
                OPEN TableCursor
                FETCH NEXT FROM TableCursor INTO @TableName
                WHILE @@FETCH_STATUS = 0
                BEGIN

                               -- Удаляем таблицу, если такая есть
                               SET @SQLString = 'USE [' + @DBName + '] IF NOT OBJECT_ID(N''[' + @TableName + ']'',''U'') IS NULL TRUNCATE TABLE [dbo].[' + @TableName + '];'
                
                               -- Выполняем инструкцию                       
                               PRINT @SQLString
                               BEGIN TRY
                                               EXEC sp_executesql @SQLString              
                                               SET @finalmassage = @finalmassage + 'Успешная очистка таблицы ' + @TableName + ' в базе данных ' + @DBName + CHAR(13) + CHAR(13)
                               END TRY
                               BEGIN CATCH  
                                               -- Ошбика выполнения операции
                                               SET @subject = 'БЫЛИ ОШИБКИ при очистке таблиц '
                                               SET @finalmassage = @finalmassage + 'ОШИБКА очистки таблицы ' + @TableName + ' в базе данных ' + @DBName + CHAR(13) + CHAR(13)
                                                               + 'Код ошибки: ' + CAST(ERROR_NUMBER() as nvarchar(10)) + CHAR(13) + CHAR(13)
                                                               + 'Текст ошибки: ' + ERROR_MESSAGE()  + CHAR(13) + CHAR(13)
                                                               + 'Текст T-SQL: ' + CHAR(13) + @SQLString + CHAR(13) + CHAR(13)  
                               END CATCH;

                               -- Запускаем сжатие базы данных
                               IF @subject = ''
                               BEGIN   
                                               SET @SQLString = 'DBCC SHRINKDATABASE(N''' + @DBName + ''');'          
                                               PRINT @SQLString
                                               BEGIN TRY 
                                                               EXEC sp_executesql @SQLString
                                               END TRY
                                               BEGIN CATCH  
                                                               -- Ошбика выполнения операции
                                                               SET @subject = 'ОШИБКА сжатия базы данных ' + @DBName
                                                               SET @finalmassage = 'ОШИБКА сжатия базы данных ' + @DBName + CHAR(13) + CHAR(13)
                                                                               + 'Код ошибки: ' + CAST(ERROR_NUMBER() as nvarchar(10)) + CHAR(13) + CHAR(13)
                                                                               + 'Текст ошибки: ' + ERROR_MESSAGE()  + CHAR(13) + CHAR(13)
                                                                               + 'Текст T-SQL:' + CHAR(13) + @SQLString  
                                               END CATCH;
                               END


                               -- Следующий элемент цикла по таблицам
                               FETCH NEXT FROM TableCursor INTO @TableName
                
                END
                CLOSE TableCursor;

                -- Следующий элемент цикла по базам данных
                FETCH NEXT FROM DBcursor INTO @DBName
                
END
DEALLOCATE TableCursor;
CLOSE DBcursor;
DEALLOCATE DBcursor;

-- Формируем сообщение об успешном или не успешном выполнении операций
IF @subject = ''
BEGIN
                -- Успешное выполнение всех операций
                SET @subject = 'Успешная очистка таблиц '
END

-- Если задан профиль электронной почты, отправим сообщение
IF @profilename <> ''
EXEC msdb.dbo.sp_send_dbmail
    @profile_name = @profilename,
    @recipients = @recipients,
    @body = @finalmassage,
    @subject = @subject;

-- Выводим сообщение о результате
SELECT
                @subject as subject, 
                @finalmassage as finalmassage 

GO
