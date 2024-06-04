document.addEventListener('DOMContentLoaded', function () {
    // Dados para o gráfico diário de produção
    const dailyProductionData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'Mouse',
                data: [30, 42, 34, 56, 38, 28, 35, 24, 55, 60, 42, 28, 38, 21, 26, 32, 50, 46, 37, 24, 49, 20, 37, 42, 51, 61, 30, 18, 55, 46],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Teclado',
                data: [45, 52, 56, 38, 47, 33, 59, 31, 42, 54, 48, 36, 55, 41, 57, 30, 51, 53, 40, 44, 32, 50, 58, 35, 46, 39, 34, 60, 37, 49],
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Mousepad',
                data: [45, 55, 48, 33, 52, 41, 36, 39, 50, 56, 31, 44, 53, 60, 58, 38, 35, 46, 32, 57, 34, 51, 49, 42, 47, 54, 37, 30, 59, 43],
                borderColor: 'rgba(255, 0, 0, 1',
                borderWidth: 1,
                fill: false
            }
            
        ]
    };

    const dailyProductionConfig = {
        type: 'line',
        data: dailyProductionData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Dia do Mês'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade'
                    }
                }
            }
        }
    };

    var dailyProductionChart = new Chart(
        document.getElementById('dailyProductionChart'),
        dailyProductionConfig
    );

    // Dados para o gráfico de comparação de eficiência
    const efficiencyComparisonData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Eficiência (%)',
                data: [64, 90, 73, 83, 56],
                backgroundColor: 'rgba(255, 0, 247, 0.2)',
                borderColor: 'rgba(255, 0, 247, 1)',
                borderWidth: 1
            }
        ]
    };

    const efficiencyComparisonConfig = {
        type: 'bar',
        data: efficiencyComparisonData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Mês'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Eficiência (%)'
                    }
                }
            }
        }
    };

    var efficiencyComparisonChart = new Chart(
        document.getElementById('efficiencyComparisonChart'),
        efficiencyComparisonConfig
    );

    // Dados para a tabela de estoque de matéria-prima
    const rawMaterialStockData = [
        { material: 'Mouse', quantity: 3600, required: 3000, status: 'Suficiente' },
        { material: 'Teclado', quantity: 1500, required:1800, status: 'Baixo' },
        { material: 'Mouse', quantity: 900, required: 1200, status: 'Crítico' }
    ];

    const rawMaterialStockTable = document.getElementById('rawMaterialStockTable').getElementsByTagName('tbody')[0];
    rawMaterialStockData.forEach(item => {
        const row = rawMaterialStockTable.insertRow();
        row.insertCell(0).innerText = item.material;
        row.insertCell(1).innerText = item.quantity;
        row.insertCell(2).innerText = item.required;
        row.insertCell(3).innerText = item.status;
    });

    // Dados para a tabela de status de produção atual
    const currentProductionStatusData = [
        { produced: 1050, goal: 1350, percentage: '78%' },
        { produced: 1200, goal: 1500, percentage: '80%' },
        { produced: 1500, goal: 1500, percentage: '100%' }
    ];

    const currentProductionStatusTable = document.getElementById('currentProductionStatusTable').getElementsByTagName('tbody')[0];
    currentProductionStatusData.forEach(item => {
        const row = currentProductionStatusTable.insertRow();
        row.insertCell(0).innerText = item.produced;
        row.insertCell(1).innerText = item.goal;
        row.insertCell(2).innerText = item.percentage;
    });
});