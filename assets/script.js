const sentimentData = {
  textblob: { labels: ["Satisfactory", "Neutral", "Unsatisfactory"], values: [45, 30, 25] },
  vader: { labels: ["Satisfactory", "Neutral", "Unsatisfactory"], values: [50, 20, 30] }
};

function createChart(ctx, method) {
  return new Chart(ctx, {
    type: "pie",
    data: {
      labels: sentimentData[method].labels,
      datasets: [{
        data: sentimentData[method].values,
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      plugins: {
        legend: { position: "top" },
        title: {
          display: true,
          text: `Customer Sentimental Distribution (${method.charAt(0).toUpperCase() + method.slice(1)})`
        }
      }
    }
  });
}

const chart1 = createChart(document.getElementById("sentimentChart1"), "textblob");
const chart2 = createChart(document.getElementById("sentimentChart2"), "vader");

document.getElementById("sentimentSelector1").addEventListener("change", e => {
  const selected = e.target.value;
  chart1.data.labels = sentimentData[selected].labels;
  chart1.data.datasets[0].data = sentimentData[selected].values;
  chart1.options.plugins.title.text = `Customer Sentimental Distribution (${selected.charAt(0).toUpperCase() + selected.slice(1)})`;
  chart1.update();
});

document.getElementById("sentimentSelector2").addEventListener("change", e => {
  const selected = e.target.value;
  chart2.data.labels = sentimentData[selected].labels;
  chart2.data.datasets[0].data = sentimentData[selected].values;
  chart2.options.plugins.title.text = `Customer Sentimental Distribution (${selected.charAt(0).toUpperCase() + selected.slice(1)})`;
  chart2.update();
});

function exportChart(chart, filename) {
  const link = document.createElement("a");
  link.href = chart.toBase64Image();
  link.download = `${filename}.png`;
  link.click();
}

async function exportPDF(chart, filename) {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();
  const imageData = chart.toBase64Image();
  pdf.text(filename, 10, 10);
  pdf.addImage(imageData, 'PNG', 10, 20, 180, 120);
  pdf.save(`${filename}.pdf`);
}

function exportCSV(chart, filename) {
  const labels = chart.data.labels;
  const values = chart.data.datasets[0].data;
  let csv = "Category,Value\n";
  labels.forEach((label, index) => {
    csv += `${label},${values[index]}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download
