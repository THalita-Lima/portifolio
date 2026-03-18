@echo off
REM Script para copiar imagens do portfólio antigo para o novo projeto React

setlocal enabledelayexpand

set SOURCE_DIR=c:\Users\Talita\Desktop\Repositorio\portifolio\img
set DEST_DIR=c:\Users\Talita\Desktop\Repositorio\portifolio-react\public\img

echo ======================================
echo Copiando imagens do projeto antigo...
echo ======================================
echo.
echo Origem: %SOURCE_DIR%
echo Destino: %DEST_DIR%
echo.

REM Criar diretório de destino se não existir
if not exist "%DEST_DIR%" (
    mkdir "%DEST_DIR%"
    echo [INFO] Diretório criado: %DEST_DIR%
)

REM Copiar todos os arquivos de imagem
copy "%SOURCE_DIR%\*.*" "%DEST_DIR%\"

if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================
    echo [SUCESSO] Imagens copiadas com sucesso!
    echo ======================================
) else (
    echo.
    echo ======================================
    echo [ERRO] Falha ao copiar as imagens.
    echo ======================================
    exit /b 1
)

pause
