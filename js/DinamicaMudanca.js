    var birthYear = 2003; // Exemplo: se você nasceu em 2003
    var birthMonth = 7; // Julho
    var birthDay = 10; // Dia 1º
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth() + 1; // Meses começam do 0 (janeiro) até 11 (dezembro)
    var currentDay = new Date().getDate();
    
    // Calculando a idade
    var age = currentYear - birthYear;

    // Verifica se já passou do dia 1º de julho
    if (currentMonth > birthMonth || (currentMonth === birthMonth && currentDay >= birthDay)) {
        // Se já passou, calcula a idade
        document.getElementById('age').textContent = age;
    } else {
        // Se ainda não chegou, mostra a idade anterior
        document.getElementById('age').textContent = age - 1;
    }

    // Verificando se já passou o dia 10 de julho para atualizar o status de estudos
    if (currentMonth > 7 || (currentMonth === 7 && currentDay >= 10)) {
        document.getElementById('study-status').textContent = 'I graduated in Information Systems from the Pontifical Catholic University of Campinas.';
    }