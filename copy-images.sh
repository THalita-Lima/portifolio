#!/bin/bash

# Script para copiar imagens do portfólio antigo para o novo projeto React

SOURCE_DIR="../portifolio/img"
DEST_DIR="./public/img"

echo "======================================"
echo "Copiando imagens do projeto antigo..."
echo "======================================"
echo ""
echo "Origem: $SOURCE_DIR"
echo "Destino: $DEST_DIR"
echo ""

# Criar diretório de destino se não existir
mkdir -p "$DEST_DIR"

# Copiar todos os arquivos de imagem
cp "$SOURCE_DIR"/* "$DEST_DIR"/ 2>/dev/null

if [ $? -eq 0 ]; then
    echo ""
    echo "======================================"
    echo "[SUCESSO] Imagens copiadas!"
    echo "======================================"
else
    echo ""
    echo "======================================"
    echo "[ERRO] Falha ao copiar as imagens."
    echo "======================================"
    exit 1
fi
