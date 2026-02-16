// V = d³
for (const [ud, fd] of Object.entries(factores.Distancia)) {
  factores.Volumen[`${ud}³`] = fd ** 3;
}

// w = a / t
for (const [ua, fa] of Object.entries(factores.Ángulo)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores.V_Angular[`${ua}/${ut}`] = fa / ft;
  }
}

// a = a / t²
for (const [ua, fa] of Object.entries(factores.Ángulo)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores.A_Angular[`${ua}/${ut}²`] = fa / ft ** 2;
  }
}

// C = I/t
for (const [ui, fi] of Object.entries(factores.Información)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores.Conexión[`${ui}/${ut}`] = fi / ft;
  }
}

// D = m/V
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [uv, fv] of Object.entries(factores.Volumen)) {
    factores.Densidad[`${um}/${uv}`] = fm / fv;
  }
}

// Separados:

// A = d²
for (const [ud, fd] of Object.entries(factores.Distancia)) {
  factores_separado.á_dist2[`${ud}²`] = fd ** 2;
}

// v = d/t
for (const [ud, fd] of Object.entries(factores.Distancia)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.vel_dist_tiempo[`${ud}/${ut}`] = fd / ft;
  }
}

// a = v/t
for (const [uv, fv] of Object.entries(factores.Velocidad)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.ace_vel_tiempo[`${uv}/${ut}`] = fv / ft;
  }
}

// a = d/t²
for (const [ud, fd] of Object.entries(factores.Distancia)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.ace_dist_tiempo2[`${ud}/${ut}²`] = fd / ft ** 2;
  }
}

// F = ma
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores.Aceleración)) {
    factores_separado.force_masa_ace[`${um}*${ua}`] = fm * fa;
  }
}

// F = m*d/t²
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores_separado.ace_dist_tiempo2)) {
    factores_separado.force_masa_dist_tiempo2[`${um}*${ua}`] = fm * fa;
  }
}

// F = m*v/t
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores_separado.ace_vel_tiempo)) {
    factores_separado.force_masa_vel_tiempo[`${um}*${ua}`] = fm * fa;
  }
}

// P = F / a
for (const [uf, ff] of Object.entries(factores.Fuerza)) {
  for (const [ua, fa] of Object.entries({
    ...factores.Área,
    ...factores_separado.á_dist2,
  })) {
    factores_separado.pres_force_á[`${uf}/${ua}`] = ff / fa;
  }
}

// P = m / dt²
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ud, fd] of Object.entries(factores.Distancia)) {
    for (const [ut, ft] of Object.entries(factores.Tiempo)) {
      factores_separado.pres_masa_dist_tiempo2[`${um}/(${ud}*${ut}²)`] =
        fm / (fd * ft ** 2);
    }
  }
}

// P = E / V
for (const [ue, fe] of Object.entries(factores.Energía)) {
  for (const [uv, fv] of Object.entries(factores.Volumen)) {
    factores_separado.pres_ener_vol[`${ue}/${uv}`] = fe / fv;
  }
}

// E = mc²
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [uv, fv] of Object.entries(factores.Velocidad)) {
    factores_separado.ener_masa_vel2[`${um}*${uv}²`] = fm * fv ** 2;
  }
}

// E = m*d²/t²
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores_separado.á_dist2)) {
    for (const [ut, ft] of Object.entries(factores.Tiempo)) {
      factores_separado.ener_masa_dist2_tiempo2[`${um}*${ua}/${ut}²`] =
        (fm * fa) / ft ** 2;
    }
  }
}

// E = m*a*d
for (const [uf, ff] of Object.entries(factores_separado.force_masa_ace)) {
  for (const [ud, fd] of Object.entries(factores.Distancia)) {
    factores_separado.ener_masa_ace_dist[`${uf}*${ud}`] = ff * fd;
  }
}

// E = F*d
for (const [uf, ff] of Object.entries(factores.Fuerza)) {
  for (const [ud, fd] of Object.entries(factores.Distancia)) {
    factores_separado.ener_force_dist[`${uf}*${ud}`] = ff * fd;
  }
}

// E = m*A/t²
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores.Área)) {
    for (const [ut, ft] of Object.entries(factores.Tiempo)) {
      factores_separado.ener_masa_á_tiempo2[`${um}*${ua}/${ut}²`] =
        (fm * fa) / ft ** 2;
    }
  }
}

// P = E/t
for (const [ue, fe] of Object.entries(factores.Energía)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.pote_ener_tiempo[`${ue}/${ut}`] = fe / ft;
  }
}

// P = m*a*v
for (const [uf, ff] of Object.entries(factores_separado.force_masa_ace)) {
  for (const [uv, fv] of Object.entries(factores.Velocidad)) {
    factores_separado.pote_masa_ace_vel[`${uf}*${uv}`] = ff * fv;
  }
}

// P = m*a*d/t
for (const [ue, fe] of Object.entries(factores_separado.ener_masa_ace_dist)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.pote_masa_ace_dist_tiempo[`${ue}/${ut}`] = fe / ft;
  }
}

// P = m*v²/t
for (const [ue, fe] of Object.entries(factores_separado.ener_masa_vel2)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.pote_masa_vel2_tiempo[`${ue}/${ut}`] = fe / ft;
  }
}

// P = F*v
for (const [uf, ff] of Object.entries(factores.Fuerza)) {
  for (const [uv, fv] of Object.entries(factores.Velocidad)) {
    factores_separado.pote_force_vel[`${uf}*${uv}`] = ff * fv;
  }
}

// P = F*d/t
for (const [uf, ff] of Object.entries(factores.Fuerza)) {
  for (const [uv, fv] of Object.entries(factores_separado.vel_dist_tiempo)) {
    factores_separado.pote_force_dist_tiempo[`${uf}*${uv}`] = ff * fv;
  }
}

// P = m*A/t³
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores.Área)) {
    for (const [ut, ft] of Object.entries(factores.Tiempo)) {
      factores_separado.pote_masa_á_tiempo3[`${um}*${ua}/${ut}³`] =
        (fm * fa) / ft ** 3;
    }
  }
}

// P = m*d²/t³
for (const [um, fm] of Object.entries(factores.Masa)) {
  for (const [ua, fa] of Object.entries(factores_separado.á_dist2)) {
    for (const [ut, ft] of Object.entries(factores.Tiempo)) {
      factores_separado.pote_masa_dist2_tiempo3[`${um}*${ua}/${ut}³`] =
        (fm * fa) / ft ** 3;
    }
  }
}

// E = P * T -> kWh
for (const [up, fp] of Object.entries(factores.Potencia)) {
  for (const [ut, ft] of Object.entries(factores.Tiempo)) {
    factores_separado.ener_pote_tiempo[`${up}${ut}`] = fp * ft;
  }
}
