lucide.createIcons();


/* formatstring = limpa e padroniza o texto */
/* value = todas as values do arquivo js */
/* trim = remove espaços em branco do inicio e fim da string */
/* toLowerCase = converte toda a string para lower case */
/* normalize 'nfd' = retira os caracteres especiais e retorna puro, exemplo: ola mundo */
/* replace = remove os acentos, só pra garantir */

function formatString(value){
  
    return value
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

/* const de todos os cursos de graduação e pós-graduação juntamente com MBA */
const cursosMap = {
  dt: 'Direito',
  cpt: 'Engenharia da Computação',
  adm: 'Administração',
  'mba-auditoria-controladoria': 'MBA em Auditoria e Controladoria',
  'mba-construcao-civil': 'MBA em Construção Civil',
  'mba-gestao-conflitos': 'MBA em Gestão de Conflitos',
  'mba-gestao-dados-inovacao': 'MBA em Gestão de Dados e Inovação',
  'mba-gestao-marketing': 'MBA em Gestão de Marketing',
  'mba-gestao-pessoas': 'MBA em Gestão de Pessoas',
  'mba-gestao-pessoas-carreiras': 'MBA em Gestão de Pessoas e Carreiras',
  'mba-gestao-projetos-empresariais': 'MBA em Gestão de Projetos Empresariais',
  'mba-gestao-educacional': 'MBA em Gestão Educacional',
  'mba-gestao-saude': 'MBA em Gestão em Saúde',
  'mba-gestao-empresarial': 'MBA em Gestão Empresarial',
  'mba-gestao-financeira': 'MBA em Gestão Financeira',
  'mba-gestao-financeira-controladoria': 'MBA em Gestão Financeira e Controladoria',
  'mba-gestao-publica': 'MBA em Gestão Pública',
  'mba-legislacao-planejamento-tributario': 'MBA em Legislação e Planejamento Tributário',
  'mba-management': 'MBA em Management',
  'mba-marketing-estrategico': 'MBA em Marketing Estratégico',
  'mba-energias-renovaveis-hidrogenio-verde': 'MBA em Mercado de Energias Renováveis e Hidrogênio Verde',
  'pos-direito-familia-sucessoes': 'Pós Graduação em Direito de Família e Sucessões',
  'pos-psicologia-infancia-adolescencia': 'Pós graduação em Psicologia Aplicada ao Desenvolvimento Infantil e Adolescente',
  'pos-advocacia-criminal': 'Pós-graduação em Advocacia Criminal',
  'pos-advocacia-criminal-compliance': 'Pós-Graduação em Advocacia Criminal e Compliance',
  'pos-advocacia-empresarial': 'Pós-Graduação em Advocacia Empresarial',
  'pos-analise-dados-ia': 'Pós-graduação em Análise de Dados e IA para Tomada de Decisões Empresariais',
  'pos-business-data-science': 'Pós-Graduação em Business Data Science',
  'pos-business-intelligence-data-science': 'Pós-Graduação em Business Intelligence e Data Science',
  'pos-data-science-bi': 'Pós-Graduação em Data Science e Business Intelligence',
  'pos-desenvolvimento-jogos': 'Pós-Graduação em Desenvolvimento de Jogos',
  'pos-desenvolvimento-web-fullstack': 'Pós-graduação em Desenvolvimento Web Full Stack',
  'pos-direito-civil-processual-civil': 'Pós-graduação em Direito Civil e Processual Civil',
  'pos-direito-constitucional': 'Pós-Graduação em Direito Constitucional',
  'pos-direito-agronegocio': 'Pós-Graduação em Direito do Agronegócio Aplicado',
  'pos-direito-trabalho-previdenciario': 'Pós-graduação em Direito do Trabalho e Previdenciário Aplicado',
  'pos-direito-trabalho-processo': 'Pós-Graduação em Direito do Trabalho e Processo do Trabalho',
  'pos-direito-eleitoral': 'Pós-Graduação em Direito Eleitoral Aplicado',
  'pos-direito-privado': 'Pós-Graduação em Direito Privado: Direito Civil, Empresarial e Consumidor',
  'pos-inteligencia-artificial-negocios': 'Pós-Graduação em Ferramentas de Inteligência Artificial para Negócios',
  'pos-gestao-educacional': 'Pós-Graduação em Gestão Educacional',
  'pos-inovacoes-tecnologicas-educacao': 'Pós-Graduação em Inovações Tecnológicas para Educação',
  'pos-inteligencia-artificial': 'Pós-graduação em Inteligência Artificial',
  'pos-licitacoes-contratos': 'Pós-graduação em Licitações e Contratos'
  };  


/* function responsável por atualizar os dados a medida que vão sendo preenchidos no form, resultando no preview-area */ 
function atualizar() {
  const nome1 = document.getElementById('nome1')?.value.trim();
  const nome2 = document.getElementById('nome2')?.value.trim();
  
  const curso1 = document.getElementById('curso1-hidden')?.value.trim();
  const curso2 = document.getElementById('curso2-hidden')?.value.trim(); 

  const periodo1 = document.getElementById('periodo1')?.value.trim();
  const periodo2 = document.getElementById('periodo2')?.value.trim();

  function cursoSemPeriodo(cursoKey){
    return cursoKey?.toLowerCase().startsWith('mba') || cursoKey?.toLowerCase().startsWith('pos');
  }

  document.querySelectorAll('.preview-nome1').forEach(el => {
      el.textContent = nome1 || 'Nome do Aluno';
  });

  document.querySelectorAll('.preview-curso1').forEach(el => {
      const keyCurso1 = document.getElementById('curso1-hidden').value;
      if (keyCurso1) {
        el.textContent = cursosMap[keyCurso1] || 'Curso';
      } else {
        el.textContent = curso1 || 'Curso';
      }
  });

  /* adicionado lógica de que caso o curso comece com mba ou pós, período é opcional */
  document.querySelectorAll('.preview-periodo1').forEach(el => {
    if (cursoSemPeriodo(curso1)) {
        el.style.display = 'none';
    } else {
      el.style.display = 'block';
      el.textContent = periodo1 ? periodo1 + 'º Período' : 'Período';
    }
  });

  document.querySelectorAll('.preview-nome2').forEach(el => {
    el.textContent = nome2 || 'Nome do Aluno';
  });

  document.querySelectorAll('.preview-curso2').forEach(el => {
    const keyCurso2 = document.getElementById('curso2-hidden').value;
    if (keyCurso2) {
      el.textContent = cursosMap[keyCurso2] || 'Curso';
    } else {
      el.textContent = curso2 || 'Curso';
    }
  });

  /* adicionado lógica de que caso o curso comece com mba ou pós, período é opcional */
    document.querySelectorAll('.preview-periodo2').forEach(el => {
      if (cursoSemPeriodo(curso2)) {
        el.style.display = 'none';
    } else {
      el.style.display = 'block';
      el.textContent = periodo2 ? periodo2 + 'º Período' : 'Período';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {

  /* subscreen.html */
  const modal = document.getElementById('csv-modal');
  const closeBtn = document.querySelector('.close-btn');
  const csvBtn = document.getElementById('csv-btn');
  const csvInput = document.getElementById('csv-upload');
  const previewArea = document.querySelector('.preview-area');
  const fileNameDisplay = document.getElementById('file-name');

  if (!csvBtn || !csvInput || !fileNameDisplay || !previewArea) {
    console.error('Elemento(s) não encontrado(s) no DOM.');
    return;
  }

  csvBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });


csvInput.addEventListener('change', function (event) {
  const file = event.target.files[0];

  if (file && file.name.endsWith('.csv')) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const lines = e.target.result.trim().split('\n');
      const alunos = [];

      for (let i = 1; i < lines.length; i++) {
        const [nome, curso, periodo] = lines[i].split(';');
        alunos.push({ 
          nome: nome?.trim(),
          curso: curso?.trim(), 
          periodo: periodo?.trim() 
        });
      }

      previewArea.innerHTML = '';

      for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];

      const layout = document.createElement('div');
      layout.className = 'layout';

      layout.innerHTML = `
        <div class="nome preview-nome1">${aluno.nome}</div>
        <div class="curso preview-curso1">${aluno.curso}</div>
        <div class="periodo preview-periodo1">${aluno.periodo}º Período</div>
      `;

      previewArea.appendChild(layout);
          }

      fileNameDisplay.textContent = `Arquivo selecionado: ${file.name}`;
    };

    reader.readAsText(file, 'ISO-8859-1');

  } else {
    fileNameDisplay.textContent = 'Por favor, selecione um arquivo .csv válido.';
    event.target.value = '';
  }
});


  const all = document.querySelectorAll(
    '#nome1, #nome2, #search-curso1, #search-curso2, #periodo1, #periodo2, #curso1-hidden, #curso2-hidden'
  );

  all.forEach(input => {
    input.addEventListener('input', atualizar);
  });
  atualizar();

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    document.getElementById('csv-upload').click();
  });

  window.addEventListener('click', function (event){
    if (event.target === modal) {
      modal.style.display = 'none';
      document.getElementById('csv-upload').click();
    }
  });

  const searchInput = document.getElementById('search-curso1');
  const searchInput2 = document.getElementById('search-curso2');


  const items             = document.querySelectorAll('.options-1 .option');
  const items2            = document.querySelectorAll('.options-2 .option');
  const noResults         = document.getElementById('no_results');
  const noResults2        = document.getElementById('no_results2');  
  const optionsContainer  = document.querySelector('.options-1');
  const optionsContainer2 = document.querySelector('.options-2');

  searchInput.addEventListener('input', function (event) {
    const value = formatString(event.target.value);
    let hasResult = false;
    optionsContainer.style.display = value !== '' ? 'block' : 'none';

    items.forEach(item => {
      const text = item.textContent;
      if (formatString(text).includes(value)) {
        item.style.display = 'block';
        hasResult = true;
      } else {
        item.style.display = 'none';
      }
    });
    if (noResults) noResults.style.display = hasResult ? 'none' : 'block';
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const selectedText = item.textContent;
      const selectedValue = item.dataset.value || selectedText;

      searchInput.value = selectedText;
      document.getElementById('curso1-hidden').value = selectedValue;

      optionsContainer.style.display = 'none';
      if (noResults) noResults.style.display = 'none';
      atualizar();
    });
  });

  searchInput2.addEventListener('input', function (event) {
  const value2 = formatString(event.target.value);
  let hasResult = false;

  optionsContainer2.style.display = value2 !== '' ? 'block' : 'none';

  items2.forEach(item => {
    const text = item.textContent;
    if (formatString(text).includes(value2)){
      item.style.display = 'block';
      hasResult = true;
    } else {
      item.style.display = 'none';
    }
  });

  if (noResults2) noResults2.style.display = hasResult ? 'none' : 'block';
  });

  items2.forEach(item => {
    item.addEventListener('click', () => {
      const selectedText = item.textContent; 
      const selectedValue = item.dataset.value || selectedText; 

      searchInput2.value = selectedText; 
      document.getElementById('curso2-hidden').value = selectedValue;

      optionsContainer2.style.display = 'none'; 
      if (noResults2) noResults2.style.display = 'none';
      atualizar();
    });
});
});



/* mode dark */
  const body = document.body;
  const modeSwitch = body.querySelector(".toggle-switch");
  const modetext = body.querySelector(".mode-text");
  const toggle = body.querySelector(".toggle");
  const sidebar = body.querySelector(".sidebar");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    modetext.innerText = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
  });


/* Análise daqui pra baixo */

document.querySelectorAll('.custom-select').forEach((parent) => {
  const selectedValue = parent.querySelector('input.input-field');
  const optionsList = parent.querySelector('ul');
  const options = parent.querySelectorAll('.option');
  let hiddenInput = parent.querySelector('input[type="hidden"]');

  if (parent.id === 'curso1') hiddenInput.id = 'curso1-hidden';
  if (parent.id === 'curso2') hiddenInput.id = 'curso2-hidden';

  selectedValue.addEventListener('click', () => {
    parent.classList.toggle('open');
    $(optionsList).stop(true, true).fadeToggle(100);
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selectedValue.textContent = option.textContent;
      hiddenInput.value = option.dataset.value;

      options.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');

      $(optionsList).fadeOut(100, () => {
        parent.classList.remove('open');
        selectedValue.focus();
        atualizar();
      });
    });

    option.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        option.click();
      }
    });
  });
  document.addEventListener('click', (e) => {
    if (!parent.contains(e.target)) {
      $(optionsList).fadeOut(100);
      parent.classList.remove('open');
    }
  });
});


document.getElementById('emitir-btn').addEventListener('click', function (event) {
  event.preventDefault();
  atualizar();

  const nome1 = document.getElementById('nome1').value.trim();
  const nome2 = document.getElementById('nome2').value.trim();

  const curso1 = document.getElementById('curso1-hidden').value.trim();
  const curso2 = document.getElementById('curso2-hidden').value.trim();

  const periodo1 = document.getElementById('periodo1').value.trim();
  const periodo2 = document.getElementById('periodo2').value.trim();

  function cursoSemPeriodo(cursoKey){
    return cursoKey.startsWith('mba') || cursoKey.startsWith('pos');
  }

  const conjunto1Preenchido =
  nome1 && curso1 && (cursoSemPeriodo(curso1) || periodo1);

  const conjunto2Preenchido =
    nome2 && curso2 && (cursoSemPeriodo(curso2) || periodo2);


  if (!conjunto1Preenchido && !conjunto2Preenchido) {
    alert("Formulário incompleto. Por favor, preencha todos os campos.");
    return;
  }
  window.print();
  
});

