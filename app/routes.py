
# -*- coding: utf-8 -*-

from main import app 
from flask import render_template, request


CURSOS_VALIDOS = [
    'adm', 'cpt', 'dt',
    'mba-auditoria-controladoria', 'mba-construcao-civil', 'mba-gestao-conflitos',
    'mba-gestao-dados-inovacao', 'mba-gestao-marketing', 'mba-gestao-pessoas',
    'mba-gestao-pessoas-carreiras', 'mba-gestao-projetos-empresariais', 'mba-gestao-educacional',
    'mba-gestao-saude', 'mba-gestao-empresarial', 'mba-gestao-financeira',
    'mba-gestao-financeira-controladoria', 'mba-gestao-publica', 'mba-legislacao-planejamento-tributario',
    'mba-management', 'mba-marketing-estrategico', 'mba-energias-renovaveis-hidrogenio-verde',
    'pos-direito-familia-sucessoes', 'pos-psicologia-infancia-adolescencia',
    'pos-advocacia-criminal', 'pos-advocacia-criminal-compliance', 'pos-advocacia-empresarial',
    'pos-analise-dados-ia', 'pos-business-data-science', 'pos-business-intelligence-data-science',
    'pos-data-science-bi', 'pos-desenvolvimento-jogos', 'pos-desenvolvimento-web-fullstack',
    'pos-direito-civil-processual-civil', 'pos-direito-constitucional', 'pos-direito-agronegocio',
    'pos-direito-trabalho-previdenciario', 'pos-direito-trabalho-processo', 'pos-direito-eleitoral',
    'pos-direito-privado', 'pos-inteligencia-artificial-negocios', 'pos-gestao-educacional',
    'pos-inovacoes-tecnologicas-educacao', 'pos-inteligencia-artificial', 'pos-licitacoes-contratos'
    ]

@app.route('/')
def data(): 
    return render_template('index.html')

@app.route('/emitir', methods=['POST'])
def emitir():
        return render_template('index.html')

""" @app.route('/emitir_csv')
def emitir_por_csv():
    df = pd.read_csv('aluno.csv', dtype=str)
    print(df)
    for _, row in df.iterrows():
        nome = str(row['nome'])
        curso = str(row['curso'])
        if curso == 'cpt':
            curso = 'Computação'
        elif curso == 'dt':
            curso = 'Direito'
        elif curso == 'adm':
            curso = 'Administração'
        periodo = f"{row['periodo']}º Período"
        gerar_placa(nome,curso,periodo)
    return 'Arquivo gerado com sucesso!' """
    
if __name__ == '__main__':
    app.run(debug=True)