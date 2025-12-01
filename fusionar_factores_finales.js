factores.Área = {
    ...factores.Área,
    ...factores_separado.á_dist2,
};

factores.Velocidad = {
    ...factores.Velocidad,
    ...factores_separado.vel_dist_tiempo,
};

factores.Aceleración = {
    ...factores.Aceleración,
    ...factores_separado.ace_dist_tiempo2,
    ...factores_separado.ace_vel_tiempo,
};

factores.Fuerza = {
    ...factores.Fuerza,
    ...factores_separado.force_masa_ace,
    ...factores_separado.force_masa_vel_tiempo,
    ...factores_separado.force_masa_dist_tiempo2,
};

factores.Presión = {
    ...factores.Presión,
    ...factores_separado.pres_force_á,
    ...factores_separado.pres_masa_dist_tiempo2,
    ...factores_separado.pres_ener_vol,
};

factores.Energía = {
    ...factores.Energía,
    ...factores_separado.ener_masa_dist2_tiempo2,
    ...factores_separado.ener_force_dist,
    ...factores_separado.ener_masa_ace_dist,
    ...factores_separado.ener_masa_vel2,
    ...factores_separado.ener_masa_á_tiempo2,
    ...factores_separado.ener_pote_tiempo,
};

factores.Potencia = {
    ...factores.Potencia,
    ...factores_separado.pote_ener_tiempo,
    ...factores_separado.pote_force_dist_tiempo,
    ...factores_separado.pote_force_vel,
    ...factores_separado.pote_masa_ace_dist_tiempo,
    ...factores_separado.pote_masa_ace_vel,
    ...factores_separado.pote_masa_dist2_tiempo3,
    ...factores_separado.pote_masa_vel2_tiempo,
    ...factores_separado.pote_masa_á_tiempo3,
};

factores_separado = null;