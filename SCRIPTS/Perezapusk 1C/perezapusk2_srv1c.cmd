REM -- ������ ��� �㦡� ����� �ࢥ� 1�

:: set agent="1C:Enterprise 8.3 Server Agent" 
set agent="1C:Enterprise 8.3 Server Agent (x86-64)"

REM -- ������ 䠩� ����

:: set logfile="\\localhost\log\LOG_restart.TXT"
set logfile="C:\Scripts\Perezapusk2\LOG_restart.TXT"

REM -- ��⠭�������� �㦡� ����� �ࢥ� 1�

:: Stop the server agent service 1C
echo "   " >>%logfile%
echo "*******************************************************" >>%logfile%
echo "   " >>%logfile%
echo %date% %time% "net stop Agent 1C" >>%logfile%
net stop %agent% >>%logfile%

REM -- ����, ���� �㦡� ��⠭������

:: pause
set timeout=150
echo %date% %time% "Begin pause 150s" >>%logfile%
timeout /t %timeout% /nobreak >nul
echo %date% %time% "End Pause" >>%logfile%

REM -- ������� ������ 1�, ����� ����᫨

:: kill the process
echo %date% %time% "TASKKILL rphost.exe" >>%logfile%
TASKKILL /F /IM "rphost.exe">>%logfile%
echo %date% %time% "TASKKILL rmngr.exe" >>%logfile%
TASKKILL /F /IM "rmngr.exe">>%logfile%
echo %date% %time% "TASKKILL ragent.exe" >>%logfile%
TASKKILL /F /IM "ragent.exe">>%logfile%
echo %date% %time% "TASKKILL 1cv8.exe" >>%logfile%
TASKKILL /F /IM "1cv8.exe">>%logfile%
echo %date% %time% "TASKKILL 1cv8c.exe" >>%logfile%
TASKKILL /F /IM "1cv8c.exe">>%logfile%
echo %date% %time% "TASKKILL 1cv8t" >>%logfile%
TASKKILL /F /IM "1cv8t">>%logfile%
echo %date% %time% "TASKKILL 1cv8s.exe" >>%logfile%
TASKKILL /F /IM "1cv8s.exe">>%logfile%

REM -- �������� ��㧠 ��᫥ ���� ����ᮢ

:: pause
set timeout=30
echo %date% %time% "Begin pause 30s" >>%logfile%
timeout /t %timeout% /nobreak >nul
echo %date% %time% "End Pause" >>%logfile%

REM -- ������ ����� srvinfo\reg_1541

:: set Dirreg1541="C:\Program Files (x86)\1cv8\srvinfo\reg_1541" 
set Dirreg1541="F:\1cv8\srvinfo\reg_1541"

REM -- ���⨬ ᥠ�ᮢ� �����

:: Clear folder by mask
set n=0
pushd "%Dirreg1541%"
for /f %%i in ('2^>nul dir/ad/b "*snccntx*"') do (
set/a n+=1
call set $%%n%%=%%i
)
popd (
if %n% equ 0 (
echo %date% %time% These folders not found. >>%logfile%
)
if %n% equ 1 (
pushd "%Dirreg1541%"
2>nul rd/q/s "%$1%"&& (
echo %date% %time% Clear the folder "%$1%". >>%logfile%
)|| (
echo %date% %time% folder "%$1%" was found, but to remove it completely failed. >>%logfile%
)
popd
)
if %n% gtr 1 (
echo %date% %time% These folders not found %n%: >>%logfile%
cmd/v/c "for /l %%i in (1 1 %n%) do @echo !$%%i!" >>%logfile%
)

REM -- ������ ����� �६����� 䠩��� ��� ���짮��⥫� ��� ��� ����᪠���� �ࢥ� 1�

:: set DirProg="C:\Users\USR1CV8\AppData\Local\Temp\"
set DirProg="C:\Users\USR1CV8\AppData\Local\Temp\

REM -- ���⨬ �ࢥ�� ���
:: Clear folder
PUSHD "%DirProg%"
2>Nul RD /S/Q "%DirProg%"
echo %date% %time% Clear the folder "%DirProg%". >>%logfile%
POPD

:: pause
set timeout=420
echo %date% %time% "Begin pause 7min" >>%logfile%
timeout /t %timeout% /nobreak >nul
echo %date% %time% "End Pause" >>%logfile%

REM -- ����᪠�� �㦡� �ࢥ� 1�

:: Start the server agent service 1C
echo %date% %time% "net start Agent 1C">>%logfile%
net start %agent% >>%logfile%

REM -- ����, ���� ��������� (����易⥫쭮)

:: pause
set timeout=10
echo %date% %time% "Begin pause 10s" >>%logfile%
timeout /t %timeout% /nobreak >nul
echo %date% %time% "End Pause" >>%logfile%

REM -- ����� ��⭨�� 