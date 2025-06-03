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
          text: `Customer Sentiment Distribution (${capitalize(method)})`
        }
      }
    }
  });
}

const chart1 = createChart(document.getElementById("sentimentChart1"), "textblob");
const chart2 = createChart(document.getElementById("sentimentChart2"), "vader");

document.getElementById("sentimentSelector1").addEventListener("change", e => {
  updateChart(chart1, e.target.value);
});
document.getElementById("sentimentSelector2").addEventListener("change", e => {
  updateChart(chart2, e.target.value);
});

function updateChart(chart, method) {
  chart.data.labels = sentimentData[method].labels;
  chart.data.datasets[0].data = sentimentData[method].values;
  chart.options.plugins.title.text = `Customer Sentiment Distribution (${capitalize(method)})`;
  chart.update();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
  a.download = `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// 🌗 Theme Toggle - Light and Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("themeToggle");
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 🖥️ View Toggle - Desktop and Mobile Layouts
document.getElementById("viewToggle").addEventListener("click", () => {
  document.body.classList.toggle("view-desktop");
  document.body.classList.toggle("view-mobile");
  const icon = document.getElementById("viewToggle");
  icon.textContent = document.body.classList.contains("view-mobile") ? "📱" : "🖥️";
});
