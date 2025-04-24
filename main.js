// Lógica de cálculo para cada KPI

function calcularResultados() {
    // CPM
    const costoCpm = parseFloat(document.getElementById('costoCpm').value);
    const impresionesCpm = parseFloat(document.getElementById('impresionesCpm').value);
    if (costoCpm && impresionesCpm) {
      const cpm = (costoCpm / impresionesCpm) * 1000;
      document.getElementById('resultadoCpm').textContent = `CPM: $${cpm.toFixed(2)}`;
    }
  
    // CTR
    const clicsCtr = parseFloat(document.getElementById('clicsCtr').value);
    const impresionesCtr = parseFloat(document.getElementById('impresionesCtr').value);
    if (clicsCtr && impresionesCtr) {
      const ctr = (clicsCtr / impresionesCtr) * 100;
      document.getElementById('resultadoCtr').textContent = `CTR: ${ctr.toFixed(2)}%`;
    }
  
    // CPC
    const costoCpc = parseFloat(document.getElementById('costoCpc').value);
    const clicsCpc = parseFloat(document.getElementById('clicsCpc').value);
    if (costoCpc && clicsCpc) {
      const cpc = costoCpc / clicsCpc;
      document.getElementById('resultadoCpc').textContent = `CPC: $${cpc.toFixed(2)}`;
    }
  
    // ROAS
    const ingresosRoas = parseFloat(document.getElementById('ingresosRoas').value);
    const gastoRoas = parseFloat(document.getElementById('gastoRoas').value);
    if (ingresosRoas && gastoRoas) {
      const roas = ingresosRoas / gastoRoas;
      document.getElementById('resultadoRoas').textContent = `ROAS: ${roas.toFixed(2)}`;
    }
  
    // CPA
    const costoCpa = parseFloat(document.getElementById('costoCpa').value);
    const conversionesCpa = parseFloat(document.getElementById('conversionesCpa').value);
    if (costoCpa && conversionesCpa) {
      const cpa = costoCpa / conversionesCpa;
      document.getElementById('resultadoCpa').textContent = `CPA: $${cpa.toFixed(2)}`;
    }
  
    // CPI
    const costoCpi = parseFloat(document.getElementById('costoCpi').value);
    const instalacionesCpi = parseFloat(document.getElementById('instalacionesCpi').value);
    if (costoCpi && instalacionesCpi) {
      const cpi = costoCpi / instalacionesCpi;
      document.getElementById('resultadoCpi').textContent = `CPI: $${cpi.toFixed(2)}`;
    }
  
    // CPV
    const costoCpv = parseFloat(document.getElementById('costoCpv').value);
    const visualizacionesCpv = parseFloat(document.getElementById('visualizacionesCpv').value);
    if (costoCpv && visualizacionesCpv) {
      const cpv = costoCpv / visualizacionesCpv;
      document.getElementById('resultadoCpv').textContent = `CPV: $${cpv.toFixed(4)}`;
    }
  
    // VTR
    const visualizacionesVtr = parseFloat(document.getElementById('visualizacionesVtr').value);
    const impresionesVtr = parseFloat(document.getElementById('impresionesVtr').value);
    if (visualizacionesVtr && impresionesVtr) {
      const vtr = (visualizacionesVtr / impresionesVtr) * 100;
      document.getElementById('resultadoVtr').textContent = `VTR: ${vtr.toFixed(2)}%`;
    }
  }
  
  // Agregar eventos a todos los inputs para recalcular automáticamente
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type="number"]').forEach(input => {
      input.addEventListener('input', calcularResultados);
    });
  });
  