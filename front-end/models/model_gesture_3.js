// XGBoost Model for Gesture 3: ShoulderFlexionRight
// Accuracy: 99.97%
// Trained on 38575 samples

export function evaluateGesture3(features) {
function score(input) {
    var var0;
    if (input[4] < 0.3752759) {
        if (input[15] < 0.2545745) {
            if (input[14] < 2.673279) {
                if (input[9] < -0.04028044) {
                    if (input[1] < 0.5201896) {
                        var0 = 0.50100607;
                    } else {
                        var0 = -0.34736842;
                    }
                } else {
                    if (input[1] < 0.2017561) {
                        var0 = -0.5978729;
                    } else {
                        var0 = -0.38123283;
                    }
                }
            } else {
                if (input[13] < 0.2552732) {
                    if (input[4] < -0.07802229) {
                        var0 = -0.15;
                    } else {
                        var0 = 0.59789294;
                    }
                } else {
                    var0 = -0.5816794;
                }
            }
        } else {
            if (input[14] < 2.136013) {
                if (input[17] < 1.87981) {
                    if (input[12] < 0.2615852) {
                        var0 = 0.33015335;
                    } else {
                        var0 = -0.53086424;
                    }
                } else {
                    if (input[8] < 1.208332) {
                        var0 = -0.10000001;
                    } else {
                        var0 = -0.58481014;
                    }
                }
            } else {
                if (input[6] < 0.1051467) {
                    if (input[9] < 0.09741113) {
                        var0 = 0.22058824;
                    } else {
                        var0 = 0.59320885;
                    }
                } else {
                    var0 = -0.55932206;
                }
            }
        }
    } else {
        if (input[13] < 0.3106474) {
            if (input[10] < 0.1576806) {
                var0 = -0.5875648;
            } else {
                if (input[4] < 0.4013492) {
                    if (input[17] < 2.276219) {
                        var0 = -0.12660551;
                    } else {
                        var0 = 0.5535912;
                    }
                } else {
                    if (input[17] < 2.276219) {
                        var0 = 0.54325634;
                    } else {
                        var0 = 0.5968912;
                    }
                }
            }
        } else {
            if (input[15] < 0.03288612) {
                if (input[0] < -0.4083976) {
                    if (input[17] < 2.118415) {
                        var0 = -0.50769234;
                    } else {
                        var0 = 0.3304348;
                    }
                } else {
                    if (input[1] < 0.6162059) {
                        var0 = -0.5964444;
                    } else {
                        var0 = 0.45882356;
                    }
                }
            } else {
                if (input[2] < 1.940176) {
                    var0 = -0.40000004;
                } else {
                    var0 = 0.59721255;
                }
            }
        }
    }
    var var1;
    if (input[4] < 0.3752759) {
        if (input[15] < 0.2545745) {
            if (input[14] < 2.673279) {
                if (input[9] < -0.03547434) {
                    if (input[1] < 0.03426585) {
                        var1 = -0.5749133;
                    } else {
                        var1 = 0.35505575;
                    }
                } else {
                    if (input[1] < 0.2017561) {
                        var1 = -0.46271443;
                    } else {
                        var1 = -0.2817734;
                    }
                }
            } else {
                if (input[13] < 0.2552732) {
                    if (input[1] < 0.1517396) {
                        var1 = 0.023966826;
                    } else {
                        var1 = 0.46320334;
                    }
                } else {
                    var1 = -0.45220587;
                }
            }
        } else {
            if (input[14] < 2.136013) {
                if (input[1] < 0.2513219) {
                    if (input[16] < -0.507953) {
                        var1 = 0.115061685;
                    } else {
                        var1 = -0.4710537;
                    }
                } else {
                    var1 = 0.50978166;
                }
            } else {
                if (input[6] < 0.1051467) {
                    if (input[9] < 0.08180196) {
                        var1 = -0.5556378;
                    } else {
                        var1 = 0.42770043;
                    }
                } else {
                    var1 = -0.4371353;
                }
            }
        }
    } else {
        if (input[13] < 0.3106474) {
            if (input[10] < 0.1576806) {
                var1 = -0.4561913;
            } else {
                if (input[4] < 0.4013492) {
                    if (input[10] < 0.3846568) {
                        var1 = 0.45641991;
                    } else {
                        var1 = -0.13880259;
                    }
                } else {
                    if (input[4] < 0.4521318) {
                        var1 = 0.38096964;
                    } else {
                        var1 = 0.4558443;
                    }
                }
            }
        } else {
            if (input[15] < 0.03288612) {
                if (input[0] < -0.4083976) {
                    if (input[5] < 1.870353) {
                        var1 = 0.3525957;
                    } else {
                        var1 = -0.30735528;
                    }
                } else {
                    if (input[1] < 0.6162059) {
                        var1 = -0.46222213;
                    } else {
                        var1 = 0.3697465;
                    }
                }
            } else {
                if (input[2] < 1.940176) {
                    var1 = -0.32961032;
                } else {
                    var1 = 0.46274486;
                }
            }
        }
    }
    var var2;
    if (input[4] < 0.3805581) {
        if (input[17] < 2.496526) {
            if (input[15] < 0.2545745) {
                if (input[12] < 0.1522288) {
                    if (input[1] < 0.1976027) {
                        var2 = -0.40616497;
                    } else {
                        var2 = 0.10548938;
                    }
                } else {
                    if (input[15] < 0.2125677) {
                        var2 = -0.406104;
                    } else {
                        var2 = -0.149653;
                    }
                }
            } else {
                if (input[10] < 0.2111858) {
                    if (input[0] < -0.05516275) {
                        var2 = -0.114767365;
                    } else {
                        var2 = 0.40259552;
                    }
                } else {
                    var2 = 0.41425064;
                }
            }
        } else {
            if (input[16] < 0.1689577) {
                if (input[10] < 0.1292168) {
                    var2 = -0.38269287;
                } else {
                    if (input[14] < 2.547946) {
                        var2 = 0.7293186;
                    } else {
                        var2 = 0.4047662;
                    }
                }
            } else {
                var2 = -0.40348664;
            }
        }
    } else {
        if (input[13] < 0.3106474) {
            if (input[10] < 0.1576806) {
                var2 = -0.39432758;
            } else {
                if (input[7] < 0.2048516) {
                    var2 = -0.45319703;
                } else {
                    if (input[4] < 0.4131834) {
                        var2 = 0.20456357;
                    } else {
                        var2 = 0.38457355;
                    }
                }
            }
        } else {
            if (input[15] < 0.03288612) {
                if (input[0] < -0.4083976) {
                    if (input[11] < 2.064372) {
                        var2 = -0.46269795;
                    } else {
                        var2 = 0.21690516;
                    }
                } else {
                    if (input[1] < 0.6162059) {
                        var2 = -0.40091795;
                    } else {
                        var2 = 0.31607807;
                    }
                }
            } else {
                if (input[2] < 1.940176) {
                    var2 = -0.28328514;
                } else {
                    var2 = 0.40148118;
                }
            }
        }
    }
    var var3;
    if (input[1] < 0.2017561) {
        if (input[15] < 0.2545745) {
            if (input[14] < 2.673279) {
                if (input[16] < -0.5556804) {
                    var3 = 0.5271009;
                } else {
                    if (input[1] < 0.1989124) {
                        var3 = -0.37091777;
                    } else {
                        var3 = -0.26200002;
                    }
                }
            } else {
                if (input[6] < -0.3244437) {
                    var3 = 0.36179718;
                } else {
                    var3 = -0.104066245;
                }
            }
        } else {
            if (input[6] < -0.1629876) {
                if (input[14] < 2.324444) {
                    if (input[11] < 1.778147) {
                        var3 = -0.13311978;
                    } else {
                        var3 = -0.4967338;
                    }
                } else {
                    if (input[15] < 0.260144) {
                        var3 = 0.3657357;
                    } else {
                        var3 = 0.05912531;
                    }
                }
            } else {
                if (input[16] < -0.3783134) {
                    if (input[10] < -0.1739112) {
                        var3 = -0.2904097;
                    } else {
                        var3 = 0.42869306;
                    }
                } else {
                    var3 = -0.408838;
                }
            }
        }
    } else {
        if (input[17] < 2.280328) {
            if (input[17] < 2.064593) {
                if (input[16] < -0.2108991) {
                    var3 = -0.41025043;
                } else {
                    if (input[7] < 0.4104985) {
                        var3 = 0.56189173;
                    } else {
                        var3 = 0.37062365;
                    }
                }
            } else {
                if (input[16] < -0.03157619) {
                    if (input[12] < 0.1532331) {
                        var3 = 0.54253286;
                    } else {
                        var3 = -0.38345516;
                    }
                } else {
                    if (input[16] < 0.1181335) {
                        var3 = -0.43300676;
                    } else {
                        var3 = 0.124952815;
                    }
                }
            }
        } else {
            if (input[10] < 0.1576806) {
                var3 = -0.38997903;
            } else {
                if (input[15] < -0.07200158) {
                    var3 = -0.37069422;
                } else {
                    if (input[12] < 0.2046906) {
                        var3 = 0.48471823;
                    } else {
                        var3 = 0.23771082;
                    }
                }
            }
        }
    }
    var var4;
    if (input[1] < 0.2000245) {
        if (input[15] < 0.2545745) {
            if (input[14] < 2.673279) {
                if (input[16] < -0.5556804) {
                    var4 = 0.38326892;
                } else {
                    if (input[12] < 0.3634924) {
                        var4 = -0.34820023;
                    } else {
                        var4 = -0.05535171;
                    }
                }
            } else {
                if (input[6] < -0.3244437) {
                    var4 = 0.33804318;
                } else {
                    var4 = -0.08821886;
                }
            }
        } else {
            if (input[16] < -0.3783134) {
                if (input[6] < -0.1629876) {
                    if (input[11] < 1.778147) {
                        var4 = 0.07923647;
                    } else {
                        var4 = -0.43844286;
                    }
                } else {
                    if (input[10] < -0.1739112) {
                        var4 = -0.2575535;
                    } else {
                        var4 = 0.37789926;
                    }
                }
            } else {
                if (input[17] < 2.205902) {
                    var4 = -0.3850855;
                } else {
                    if (input[3] < -0.1813188) {
                        var4 = 0.11613638;
                    } else {
                        var4 = -0.42017153;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.280328) {
            if (input[14] < 2.096048) {
                if (input[0] < -0.5713729) {
                    var4 = -0.42192504;
                } else {
                    if (input[4] < 0.4013492) {
                        var4 = 0.5251323;
                    } else {
                        var4 = 0.34983748;
                    }
                }
            } else {
                if (input[10] < 0.382268) {
                    if (input[16] < -0.2222067) {
                        var4 = -0.37102276;
                    } else {
                        var4 = 0.32049242;
                    }
                } else {
                    if (input[15] < -0.1399897) {
                        var4 = 0.16354094;
                    } else {
                        var4 = -0.38475266;
                    }
                }
            }
        } else {
            if (input[10] < 0.1576806) {
                var4 = -0.3576162;
            } else {
                if (input[15] < -0.07200158) {
                    var4 = -0.34570813;
                } else {
                    if (input[12] < 0.2046906) {
                        var4 = 0.4415253;
                    } else {
                        var4 = 0.19177336;
                    }
                }
            }
        }
    }
    var var5;
    if (input[1] < 0.2000245) {
        if (input[15] < 0.2545745) {
            if (input[17] < 2.625929) {
                if (input[16] < -0.5556804) {
                    var5 = 0.29752964;
                } else {
                    if (input[14] < 2.673279) {
                        var5 = -0.3330191;
                    } else {
                        var5 = -0.0076662796;
                    }
                }
            } else {
                var5 = 0.322008;
            }
        } else {
            if (input[17] < 1.668892) {
                var5 = -0.3700852;
            } else {
                if (input[12] < 0.1899757) {
                    var5 = -0.37445128;
                } else {
                    if (input[6] < -0.1738832) {
                        var5 = -0.017929845;
                    } else {
                        var5 = 0.22259353;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.280328) {
            if (input[17] < 2.009065) {
                if (input[10] < 0.2033147) {
                    var5 = -0.32850224;
                } else {
                    if (input[0] < -0.5713729) {
                        var5 = -0.22714552;
                    } else {
                        var5 = 0.38661054;
                    }
                }
            } else {
                if (input[16] < -0.03157619) {
                    if (input[16] < -0.2222067) {
                        var5 = -0.34781983;
                    } else {
                        var5 = 0.4087993;
                    }
                } else {
                    if (input[12] < -0.03266037) {
                        var5 = 0.16979112;
                    } else {
                        var5 = -0.35870183;
                    }
                }
            }
        } else {
            if (input[10] < 0.1576806) {
                var5 = -0.3368854;
            } else {
                if (input[15] < -0.07200158) {
                    var5 = -0.32823765;
                } else {
                    if (input[12] < 0.2046906) {
                        var5 = 0.4076526;
                    } else {
                        var5 = 0.15122409;
                    }
                }
            }
        }
    }
    var var6;
    if (input[1] < 0.1989124) {
        if (input[15] < 0.2545745) {
            if (input[14] < 2.673279) {
                if (input[16] < -0.5556804) {
                    var6 = 0.24042156;
                } else {
                    if (input[12] < 0.3618654) {
                        var6 = -0.3239522;
                    } else {
                        var6 = -0.02507563;
                    }
                }
            } else {
                if (input[2] < 2.658052) {
                    var6 = 0.30878782;
                } else {
                    var6 = -0.06222266;
                }
            }
        } else {
            if (input[0] < -0.05516275) {
                if (input[12] < 0.2558995) {
                    if (input[15] < 0.3199143) {
                        var6 = -0.03202542;
                    } else {
                        var6 = 0.37181795;
                    }
                } else {
                    if (input[2] < 1.64242) {
                        var6 = 0.31813866;
                    } else {
                        var6 = -0.38898158;
                    }
                }
            } else {
                var6 = 0.3140269;
            }
        }
    } else {
        if (input[11] < 2.532528) {
            if (input[11] < 2.430201) {
                if (input[11] < 2.257836) {
                    if (input[14] < 2.096048) {
                        var6 = 0.35665017;
                    } else {
                        var6 = -0.22646175;
                    }
                } else {
                    if (input[4] < 0.3752759) {
                        var6 = 0.39856744;
                    } else {
                        var6 = 0.34226745;
                    }
                }
            } else {
                if (input[1] < 0.4486562) {
                    if (input[15] < 0.2101189) {
                        var6 = -0.3516907;
                    } else {
                        var6 = -0.55866015;
                    }
                } else {
                    var6 = 0.27726474;
                }
            }
        } else {
            if (input[15] < -0.0635656) {
                var6 = -0.31543005;
            } else {
                if (input[10] < 0.1312825) {
                    var6 = -0.29412422;
                } else {
                    if (input[17] < 2.453162) {
                        var6 = 0.47938183;
                    } else {
                        var6 = 0.33331087;
                    }
                }
            }
        }
    }
    var var7;
    if (input[1] < 0.1989124) {
        if (input[15] < 0.2545745) {
            if (input[17] < 2.625929) {
                if (input[16] < -0.5556804) {
                    var7 = 0.1990231;
                } else {
                    if (input[14] < 2.673279) {
                        var7 = -0.31618303;
                    } else {
                        var7 = -0.031342283;
                    }
                }
            } else {
                var7 = 0.29683656;
            }
        } else {
            if (input[17] < 1.668892) {
                var7 = -0.34115046;
            } else {
                if (input[12] < 0.1899757) {
                    var7 = -0.34573877;
                } else {
                    if (input[10] < -0.1690207) {
                        var7 = -0.27259067;
                    } else {
                        var7 = 0.09036414;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2150551) {
            if (input[12] < 0.125989) {
                if (input[13] < 0.2657537) {
                    if (input[6] < -0.1702148) {
                        var7 = 0.33239043;
                    } else {
                        var7 = -0.1988611;
                    }
                } else {
                    if (input[14] < 2.159554) {
                        var7 = -0.30634078;
                    } else {
                        var7 = 0.22241472;
                    }
                }
            } else {
                if (input[11] < 2.5314) {
                    if (input[10] < 0.5393569) {
                        var7 = -0.3574256;
                    } else {
                        var7 = 0.2456115;
                    }
                } else {
                    if (input[1] < 0.2017561) {
                        var7 = 0.66479504;
                    } else {
                        var7 = 0.38248774;
                    }
                }
            }
        } else {
            if (input[13] < -0.04043981) {
                if (input[2] < 2.756204) {
                    var7 = -0.3224313;
                } else {
                    var7 = 0.30614588;
                }
            } else {
                if (input[0] < -0.2077175) {
                    if (input[12] < 0.1656187) {
                        var7 = 0.36409965;
                    } else {
                        var7 = -0.3135503;
                    }
                } else {
                    if (input[10] < 0.1834467) {
                        var7 = -0.2390744;
                    } else {
                        var7 = 0.3382966;
                    }
                }
            }
        }
    }
    var var8;
    if (input[1] < 0.1989124) {
        if (input[15] < 0.2511806) {
            if (input[17] < 2.625929) {
                if (input[14] < 2.673279) {
                    if (input[12] < 0.3599558) {
                        var8 = -0.31119686;
                    } else {
                        var8 = -0.017595742;
                    }
                } else {
                    var8 = -0.025905639;
                }
            } else {
                var8 = 0.28587914;
            }
        } else {
            if (input[5] < 1.399328) {
                if (input[3] < -0.2131119) {
                    var8 = 0.10589533;
                } else {
                    var8 = 0.36091447;
                }
            } else {
                if (input[0] < -0.05516275) {
                    if (input[12] < 0.2558995) {
                        var8 = -0.008742566;
                    } else {
                        var8 = -0.3220638;
                    }
                } else {
                    var8 = 0.30116743;
                }
            }
        }
    } else {
        if (input[0] < -0.2150551) {
            if (input[9] < 0.08180196) {
                if (input[13] < 0.2657537) {
                    if (input[12] < 0.125989) {
                        var8 = 0.32312173;
                    } else {
                        var8 = -0.09542904;
                    }
                } else {
                    if (input[17] < 2.124743) {
                        var8 = -0.3019039;
                    } else {
                        var8 = 0.16400093;
                    }
                }
            } else {
                if (input[11] < 2.5314) {
                    if (input[4] < 0.4013492) {
                        var8 = -0.3304059;
                    } else {
                        var8 = -0.49646127;
                    }
                } else {
                    var8 = 0.37434727;
                }
            }
        } else {
            if (input[13] < -0.04043981) {
                if (input[2] < 2.756204) {
                    var8 = -0.3136654;
                } else {
                    var8 = 0.2926273;
                }
            } else {
                if (input[10] < 0.1834467) {
                    var8 = -0.21667595;
                } else {
                    if (input[0] < -0.2077175) {
                        var8 = 0.11136302;
                    } else {
                        var8 = 0.31796613;
                    }
                }
            }
        }
    }
    var var9;
    if (input[15] < 0.2763226) {
        if (input[12] < 0.125989) {
            if (input[10] < 0.1576806) {
                var9 = -0.3059721;
            } else {
                if (input[13] < 0.2657537) {
                    if (input[6] < -0.1858486) {
                        var9 = 0.3153369;
                    } else {
                        var9 = -0.16849758;
                    }
                } else {
                    if (input[12] < 0.03103214) {
                        var9 = -0.16713761;
                    } else {
                        var9 = 0.31235474;
                    }
                }
            }
        } else {
            if (input[15] < 0.2125677) {
                if (input[12] < 0.1650469) {
                    if (input[16] < -0.02653662) {
                        var9 = 0.18444772;
                    } else {
                        var9 = -0.30115083;
                    }
                } else {
                    if (input[7] < 0.7897991) {
                        var9 = -0.31285223;
                    } else {
                        var9 = 0.09428314;
                    }
                }
            } else {
                if (input[13] < 0.1153935) {
                    if (input[3] < -0.2907562) {
                        var9 = -0.37793103;
                    } else {
                        var9 = -0.030566595;
                    }
                } else {
                    if (input[9] < 0.1123933) {
                        var9 = -0.121500395;
                    } else {
                        var9 = 0.32412955;
                    }
                }
            }
        }
    } else {
        if (input[8] < 1.461357) {
            if (input[11] < 1.776376) {
                if (input[8] < 1.345888) {
                    if (input[17] < 1.87981) {
                        var9 = 0.41701418;
                    } else {
                        var9 = -0.10524976;
                    }
                } else {
                    if (input[6] < -0.1882304) {
                        var9 = -0.3233299;
                    } else {
                        var9 = 0.16007566;
                    }
                }
            } else {
                if (input[6] < -0.2470855) {
                    var9 = 0.28870162;
                } else {
                    if (input[2] < 1.625234) {
                        var9 = 0.2159053;
                    } else {
                        var9 = -0.33749223;
                    }
                }
            }
        } else {
            if (input[14] < 1.738895) {
                var9 = -0.24772151;
            } else {
                if (input[6] < 0.232785) {
                    if (input[9] < 0.147927) {
                        var9 = -0.23299818;
                    } else {
                        var9 = 0.31705585;
                    }
                } else {
                    if (input[0] < -0.05516275) {
                        var9 = -0.24956053;
                    } else {
                        var9 = 0.19234073;
                    }
                }
            }
        }
    }
    var var10;
    if (input[1] < 0.1928118) {
        if (input[15] < 0.2511806) {
            if (input[17] < 2.625929) {
                if (input[14] < 2.673279) {
                    if (input[12] < 0.3579433) {
                        var10 = -0.30657423;
                    } else {
                        var10 = -0.030765673;
                    }
                } else {
                    var10 = -0.024963323;
                }
            } else {
                var10 = 0.25309625;
            }
        } else {
            if (input[8] < 1.208332) {
                if (input[9] < 0.1189694) {
                    var10 = 0.34337008;
                } else {
                    var10 = -0.1373243;
                }
            } else {
                if (input[15] < 0.3199143) {
                    if (input[9] < 0.08887912) {
                        var10 = 0.08800958;
                    } else {
                        var10 = -0.22190006;
                    }
                } else {
                    if (input[16] < -0.3783134) {
                        var10 = 0.24598527;
                    } else {
                        var10 = -0.29882133;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.2577302) {
            if (input[7] < 0.06142919) {
                if (input[13] < -0.03556902) {
                    if (input[0] < -0.1955233) {
                        var10 = 0.1692477;
                    } else {
                        var10 = -0.26673043;
                    }
                } else {
                    if (input[16] < 0.004982479) {
                        var10 = 0.32537144;
                    } else {
                        var10 = 0.08859578;
                    }
                }
            } else {
                if (input[12] < 0.125989) {
                    if (input[12] < 0.02826038) {
                        var10 = -0.042932887;
                    } else {
                        var10 = 0.28025073;
                    }
                } else {
                    if (input[2] < 1.978701) {
                        var10 = 0.31518787;
                    } else {
                        var10 = -0.22798166;
                    }
                }
            }
        } else {
            if (input[16] < -0.341973) {
                var10 = -0.20385037;
            } else {
                var10 = 0.31043613;
            }
        }
    }
    var var11;
    if (input[4] < 0.4521318) {
        if (input[7] < 0.07411014) {
            if (input[10] < 0.1576806) {
                if (input[15] < 0.248047) {
                    var11 = -0.3009798;
                } else {
                    if (input[6] < -0.1591363) {
                        var11 = -0.067426406;
                    } else {
                        var11 = 0.25846252;
                    }
                }
            } else {
                if (input[17] < 2.264725) {
                    if (input[16] < 0.007217883) {
                        var11 = 0.22877343;
                    } else {
                        var11 = -0.12330943;
                    }
                } else {
                    if (input[12] < 0.2046906) {
                        var11 = 0.3394767;
                    } else {
                        var11 = 0.23029633;
                    }
                }
            }
        } else {
            if (input[15] < 0.2545745) {
                if (input[14] < 2.076187) {
                    if (input[1] < 0.03426585) {
                        var11 = -0.16721904;
                    } else {
                        var11 = 0.3081393;
                    }
                } else {
                    if (input[12] < 0.1671217) {
                        var11 = -0.111369826;
                    } else {
                        var11 = -0.2955768;
                    }
                }
            } else {
                if (input[10] < 0.1880366) {
                    if (input[9] < 0.08887912) {
                        var11 = 0.15549144;
                    } else {
                        var11 = -0.17872798;
                    }
                } else {
                    if (input[13] < -0.05343824) {
                        var11 = -0.10066256;
                    } else {
                        var11 = 0.2981493;
                    }
                }
            }
        }
    } else {
        if (input[15] < -0.1768338) {
            var11 = -0.2853591;
        } else {
            if (input[3] < -0.6613371) {
                if (input[5] < 1.850866) {
                    if (input[17] < 2.118415) {
                        var11 = -0.07411679;
                    } else {
                        var11 = 0.35451925;
                    }
                } else {
                    if (input[11] < 2.086877) {
                        var11 = -0.48215023;
                    } else {
                        var11 = -0.010642068;
                    }
                }
            } else {
                if (input[8] < 1.560139) {
                    if (input[10] < 0.5624769) {
                        var11 = 0.24884349;
                    } else {
                        var11 = -0.27655917;
                    }
                } else {
                    if (input[10] < 0.07771686) {
                        var11 = -0.18635483;
                    } else {
                        var11 = 0.27519426;
                    }
                }
            }
        }
    }
    var var12;
    if (input[14] < 2.760786) {
        if (input[11] < 2.423716) {
            if (input[11] < 2.21862) {
                if (input[11] < 2.154929) {
                    if (input[10] < 0.5541288) {
                        var12 = 0.029778568;
                    } else {
                        var12 = -0.27154344;
                    }
                } else {
                    if (input[9] < 0.195323) {
                        var12 = -0.30929685;
                    } else {
                        var12 = 0.08448374;
                    }
                }
            } else {
                if (input[1] < 0.1362102) {
                    if (input[9] < 0.08180196) {
                        var12 = -0.35267588;
                    } else {
                        var12 = 0.110085405;
                    }
                } else {
                    if (input[11] < 2.257836) {
                        var12 = -0.098712124;
                    } else {
                        var12 = 0.32199076;
                    }
                }
            }
        } else {
            if (input[11] < 2.534334) {
                if (input[1] < 0.4486562) {
                    if (input[11] < 2.532528) {
                        var12 = -0.31691802;
                    } else {
                        var12 = -0.12069496;
                    }
                } else {
                    var12 = 0.18846236;
                }
            } else {
                if (input[10] < 0.1576806) {
                    var12 = -0.3040269;
                } else {
                    if (input[16] < 0.06084139) {
                        var12 = 0.345806;
                    } else {
                        var12 = -0.30582824;
                    }
                }
            }
        }
    } else {
        if (input[15] < -0.1583239) {
            var12 = -0.21526074;
        } else {
            var12 = 0.30020493;
        }
    }
    var var13;
    if (input[1] < 0.1962191) {
        if (input[15] < 0.248047) {
            if (input[14] < 2.673279) {
                var13 = -0.30105895;
            } else {
                if (input[0] < -0.2868778) {
                    var13 = 0.0072728354;
                } else {
                    var13 = 0.20957421;
                }
            }
        } else {
            if (input[12] < 0.1899757) {
                var13 = -0.33168;
            } else {
                if (input[15] < 0.260144) {
                    if (input[9] < 0.09277747) {
                        var13 = 0.34360224;
                    } else {
                        var13 = -0.10457284;
                    }
                } else {
                    if (input[3] < -0.3236437) {
                        var13 = 0.19420616;
                    } else {
                        var13 = -0.07171416;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2202836) {
            if (input[9] < 0.07775725) {
                if (input[13] < 0.2657537) {
                    if (input[9] < 0.07612504) {
                        var13 = 0.29628012;
                    } else {
                        var13 = 0.009326874;
                    }
                } else {
                    if (input[17] < 2.118415) {
                        var13 = -0.29493013;
                    } else {
                        var13 = 0.09809416;
                    }
                }
            } else {
                if (input[11] < 2.5314) {
                    if (input[10] < 0.5393569) {
                        var13 = -0.31374806;
                    } else {
                        var13 = 0.23699066;
                    }
                } else {
                    var13 = 0.34388646;
                }
            }
        } else {
            if (input[13] < -0.03556902) {
                if (input[11] < 2.666303) {
                    var13 = -0.2880637;
                } else {
                    var13 = 0.25402877;
                }
            } else {
                if (input[0] < -0.2077175) {
                    if (input[12] < 0.1656187) {
                        var13 = 0.31587005;
                    } else {
                        var13 = -0.25711635;
                    }
                } else {
                    if (input[1] < 0.2119927) {
                        var13 = 0.06325677;
                    } else {
                        var13 = 0.30060923;
                    }
                }
            }
        }
    }
    var var14;
    if (input[4] < 0.4770419) {
        if (input[15] < 0.2785565) {
            if (input[6] < -0.1951485) {
                if (input[13] < -0.10897) {
                    if (input[3] < -0.2500715) {
                        var14 = -0.33897302;
                    } else {
                        var14 = -0.056640238;
                    }
                } else {
                    if (input[16] < -0.03157619) {
                        var14 = 0.12764543;
                    } else {
                        var14 = -0.119682245;
                    }
                }
            } else {
                if (input[8] < 1.257993) {
                    if (input[15] < 0.1948037) {
                        var14 = -0.1799965;
                    } else {
                        var14 = 0.31546146;
                    }
                } else {
                    if (input[6] < -0.1721249) {
                        var14 = -0.14710243;
                    } else {
                        var14 = -0.28722012;
                    }
                }
            }
        } else {
            if (input[16] < -0.5376349) {
                if (input[8] < 1.295351) {
                    if (input[4] < -0.2611126) {
                        var14 = 0.35048473;
                    } else {
                        var14 = -0.081840396;
                    }
                } else {
                    if (input[3] < -0.3377496) {
                        var14 = 0.23178652;
                    } else {
                        var14 = -0.35531446;
                    }
                }
            } else {
                if (input[17] < 1.668892) {
                    var14 = -0.27354357;
                } else {
                    if (input[8] < 1.271432) {
                        var14 = -0.22344923;
                    } else {
                        var14 = 0.26404473;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.6613371) {
            if (input[5] < 1.850866) {
                if (input[13] < 0.3291096) {
                    var14 = -0.035768624;
                } else {
                    var14 = 0.32152316;
                }
            } else {
                if (input[11] < 2.086877) {
                    var14 = -0.39475104;
                } else {
                    if (input[14] < 2.15698) {
                        var14 = -0.31791902;
                    } else {
                        var14 = 0.2519599;
                    }
                }
            }
        } else {
            if (input[15] < -0.1768338) {
                var14 = -0.2256464;
            } else {
                if (input[8] < 1.588263) {
                    if (input[10] < 0.5624769) {
                        var14 = 0.24212375;
                    } else {
                        var14 = -0.24524088;
                    }
                } else {
                    if (input[12] < 0.1793703) {
                        var14 = 0.30589157;
                    } else {
                        var14 = 0.16655388;
                    }
                }
            }
        }
    }
    var var15;
    if (input[2] < 2.760983) {
        if (input[11] < 2.430201) {
            if (input[17] < 2.249357) {
                if (input[15] < 0.0187387) {
                    if (input[17] < 2.171904) {
                        var15 = 0.22207683;
                    } else {
                        var15 = -0.3410859;
                    }
                } else {
                    if (input[15] < 0.2111401) {
                        var15 = -0.20791285;
                    } else {
                        var15 = 0.023993652;
                    }
                }
            } else {
                if (input[6] < 0.000468206) {
                    var15 = 0.31343213;
                } else {
                    var15 = -0.0015054842;
                }
            }
        } else {
            if (input[11] < 2.532528) {
                if (input[9] < 0.2463339) {
                    var15 = -0.31066945;
                } else {
                    var15 = -0.018704042;
                }
            } else {
                if (input[16] < 0.05671053) {
                    if (input[10] < 0.1576806) {
                        var15 = -0.29101333;
                    } else {
                        var15 = 0.32435876;
                    }
                } else {
                    if (input[1] < 0.3033428) {
                        var15 = -0.2984466;
                    } else {
                        var15 = 0.051855925;
                    }
                }
            }
        }
    } else {
        var15 = 0.29113734;
    }
    var var16;
    if (input[1] < 0.1928118) {
        if (input[15] < 0.248047) {
            if (input[17] < 2.542378) {
                var16 = -0.2965307;
            } else {
                var16 = 0.10995657;
            }
        } else {
            if (input[9] < 0.08180196) {
                if (input[1] < -0.2008021) {
                    var16 = 0.22198805;
                } else {
                    var16 = -0.35735938;
                }
            } else {
                if (input[9] < 0.08887912) {
                    if (input[17] < 2.221262) {
                        var16 = 0.012154092;
                    } else {
                        var16 = 0.35023874;
                    }
                } else {
                    if (input[6] < -0.1815607) {
                        var16 = -0.13822219;
                    } else {
                        var16 = 0.10946705;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2150551) {
            if (input[9] < 0.08510619) {
                if (input[13] < 0.2657537) {
                    if (input[12] < 0.1309231) {
                        var16 = 0.2779313;
                    } else {
                        var16 = -0.1242393;
                    }
                } else {
                    if (input[17] < 2.124743) {
                        var16 = -0.22247608;
                    } else {
                        var16 = 0.10520367;
                    }
                }
            } else {
                if (input[11] < 2.5314) {
                    if (input[16] < 0.06084139) {
                        var16 = -0.30738822;
                    } else {
                        var16 = 0.045527555;
                    }
                } else {
                    var16 = 0.32917044;
                }
            }
        } else {
            if (input[16] < -0.2222067) {
                if (input[2] < 2.756204) {
                    var16 = -0.28766924;
                } else {
                    var16 = 0.25751063;
                }
            } else {
                if (input[0] < -0.2017166) {
                    if (input[12] < 0.1656187) {
                        var16 = 0.28469712;
                    } else {
                        var16 = -0.27364263;
                    }
                } else {
                    if (input[10] < 0.1912663) {
                        var16 = -0.12308547;
                    } else {
                        var16 = 0.30693048;
                    }
                }
            }
        }
    }
    var var17;
    if (input[0] < -0.05516275) {
        if (input[6] < -0.107083) {
            if (input[16] < 0.2445671) {
                if (input[11] < 2.532528) {
                    if (input[11] < 2.430201) {
                        var17 = 0.020999158;
                    } else {
                        var17 = -0.3029529;
                    }
                } else {
                    if (input[10] < 0.1576806) {
                        var17 = -0.2579837;
                    } else {
                        var17 = 0.30999908;
                    }
                }
            } else {
                var17 = -0.29122907;
            }
        } else {
            if (input[16] < -0.507953) {
                var17 = 0.2050095;
            } else {
                if (input[10] < 0.3929621) {
                    var17 = -0.29569018;
                } else {
                    var17 = -0.042737305;
                }
            }
        }
    } else {
        var17 = 0.29253945;
    }
    var var18;
    if (input[13] < -0.03390985) {
        if (input[15] < 0.248047) {
            if (input[17] < 2.542378) {
                var18 = -0.29162332;
            } else {
                var18 = 0.15397532;
            }
        } else {
            if (input[2] < 1.64242) {
                if (input[17] < 1.87981) {
                    var18 = 0.30714235;
                } else {
                    var18 = -0.2515453;
                }
            } else {
                if (input[2] < 2.147171) {
                    if (input[15] < 0.2868239) {
                        var18 = -0.27580214;
                    } else {
                        var18 = 0.017661765;
                    }
                } else {
                    if (input[15] < 0.260144) {
                        var18 = 0.24775167;
                    } else {
                        var18 = -0.04177005;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2017166) {
            if (input[9] < -0.008564131) {
                if (input[1] < 0.5201896) {
                    if (input[15] < 0.03671606) {
                        var18 = 0.2782503;
                    } else {
                        var18 = 0.02567953;
                    }
                } else {
                    if (input[13] < 0.3252791) {
                        var18 = -0.26588905;
                    } else {
                        var18 = 0.1446097;
                    }
                }
            } else {
                if (input[17] < 2.302894) {
                    if (input[3] < -0.4625026) {
                        var18 = -0.04035224;
                    } else {
                        var18 = -0.29606757;
                    }
                } else {
                    if (input[17] < 2.453162) {
                        var18 = 0.24106811;
                    } else {
                        var18 = -0.18128839;
                    }
                }
            }
        } else {
            if (input[1] < 0.2000245) {
                var18 = -0.21090065;
            } else {
                if (input[16] < -0.2108991) {
                    if (input[14] < 2.769662) {
                        var18 = -0.07896504;
                    } else {
                        var18 = 0.1658788;
                    }
                } else {
                    var18 = 0.2991778;
                }
            }
        }
    }
    var var19;
    if (input[1] < 0.1928118) {
        if (input[15] < 0.248047) {
            if (input[14] < 2.673279) {
                var19 = -0.29014695;
            } else {
                var19 = 0.07639336;
            }
        } else {
            if (input[14] < 2.33749) {
                if (input[5] < 2.114625) {
                    if (input[13] < -0.1007832) {
                        var19 = 0.0058974116;
                    } else {
                        var19 = -0.26061264;
                    }
                } else {
                    if (input[9] < 0.08180196) {
                        var19 = -0.27111372;
                    } else {
                        var19 = 0.295726;
                    }
                }
            } else {
                if (input[3] < -0.2584558) {
                    var19 = -0.55314493;
                } else {
                    if (input[3] < -0.2223305) {
                        var19 = 0.25648165;
                    } else {
                        var19 = -0.2095911;
                    }
                }
            }
        }
    } else {
        if (input[14] < 2.063131) {
            if (input[15] < -0.07200158) {
                var19 = 0.018400999;
            } else {
                var19 = 0.2924756;
            }
        } else {
            if (input[14] < 2.153596) {
                if (input[16] < 0.1240764) {
                    if (input[7] < 0.04125344) {
                        var19 = -0.002652169;
                    } else {
                        var19 = -0.2951246;
                    }
                } else {
                    var19 = 0.18272391;
                }
            } else {
                if (input[13] < 0.09669418) {
                    if (input[10] < 0.1663181) {
                        var19 = -0.18696725;
                    } else {
                        var19 = 0.28746995;
                    }
                } else {
                    if (input[10] < 0.5393569) {
                        var19 = -0.12948552;
                    } else {
                        var19 = 0.16792469;
                    }
                }
            }
        }
    }
    var var20;
    if (input[9] < 0.2651243) {
        if (input[6] < -0.107083) {
            if (input[15] < -0.1583239) {
                if (input[17] < 2.181995) {
                    if (input[2] < 2.007453) {
                        var20 = 0.21855545;
                    } else {
                        var20 = -0.021145899;
                    }
                } else {
                    if (input[1] < 0.5201896) {
                        var20 = -0.23052768;
                    } else {
                        var20 = -0.5575809;
                    }
                }
            } else {
                if (input[17] < 2.280328) {
                    if (input[14] < 2.359028) {
                        var20 = -0.006279797;
                    } else {
                        var20 = -0.2842859;
                    }
                } else {
                    if (input[12] < 0.2046906) {
                        var20 = 0.2684862;
                    } else {
                        var20 = -0.11577329;
                    }
                }
            }
        } else {
            if (input[16] < -0.507953) {
                var20 = 0.1719715;
            } else {
                if (input[10] < 0.3907866) {
                    var20 = -0.28541633;
                } else {
                    var20 = -0.0644326;
                }
            }
        }
    } else {
        var20 = 0.2874684;
    }
    var var21;
    if (input[16] < 0.1395267) {
        if (input[13] < -0.03390985) {
            if (input[15] < 0.248047) {
                if (input[17] < 2.528226) {
                    var21 = -0.28161836;
                } else {
                    var21 = 0.11086096;
                }
            } else {
                if (input[6] < -0.1477832) {
                    if (input[16] < -0.5556804) {
                        var21 = -0.31641185;
                    } else {
                        var21 = -0.017546339;
                    }
                } else {
                    if (input[16] < -0.3853616) {
                        var21 = 0.2723642;
                    } else {
                        var21 = -0.2499639;
                    }
                }
            }
        } else {
            if (input[0] < -0.2017166) {
                if (input[12] < 0.2027505) {
                    if (input[17] < 2.280328) {
                        var21 = -0.029941807;
                    } else {
                        var21 = 0.2907033;
                    }
                } else {
                    var21 = -0.26459196;
                }
            } else {
                if (input[1] < 0.2119927) {
                    if (input[12] < 0.1532331) {
                        var21 = 0.18606804;
                    } else {
                        var21 = -0.14694299;
                    }
                } else {
                    var21 = 0.2904728;
                }
            }
        }
    } else {
        if (input[10] < 0.5624769) {
            if (input[2] < 2.007453) {
                var21 = 0.19213524;
            } else {
                if (input[17] < 2.171904) {
                    var21 = -0.08714339;
                } else {
                    var21 = -0.33072305;
                }
            }
        } else {
            var21 = 0.19355;
        }
    }
    var var22;
    if (input[17] < 1.668892) {
        var22 = -0.2740995;
    } else {
        if (input[14] < 1.796179) {
            if (input[9] < 0.1555381) {
                var22 = 0.32431722;
            } else {
                var22 = -0.29034266;
            }
        } else {
            if (input[10] < -0.163907) {
                if (input[6] < -0.1233842) {
                    var22 = -0.3566415;
                } else {
                    var22 = -0.10549044;
                }
            } else {
                if (input[7] < -0.03780366) {
                    if (input[3] < -0.2486025) {
                        var22 = -0.024001896;
                    } else {
                        var22 = 0.2571954;
                    }
                } else {
                    if (input[4] < 0.07131051) {
                        var22 = -0.19866592;
                    } else {
                        var22 = 0.00541569;
                    }
                }
            }
        }
    }
    var var23;
    if (input[7] < 0.9422187) {
        if (input[16] < 0.1395267) {
            if (input[16] < 0.1167921) {
                if (input[10] < 0.5206639) {
                    if (input[12] < 0.125989) {
                        var23 = 0.20467244;
                    } else {
                        var23 = -0.018307695;
                    }
                } else {
                    if (input[11] < 2.257836) {
                        var23 = -0.24715678;
                    } else {
                        var23 = 0.23562543;
                    }
                }
            } else {
                if (input[14] < 2.15698) {
                    if (input[5] < 1.850866) {
                        var23 = 0.1337996;
                    } else {
                        var23 = -0.24603973;
                    }
                } else {
                    if (input[4] < 0.2796243) {
                        var23 = -0.17695215;
                    } else {
                        var23 = 0.31077483;
                    }
                }
            }
        } else {
            if (input[2] < 2.012186) {
                var23 = 0.12678708;
            } else {
                if (input[1] < 0.5901582) {
                    var23 = -0.3057933;
                } else {
                    var23 = 0.07770839;
                }
            }
        }
    } else {
        var23 = 0.28872153;
    }
    var var24;
    if (input[15] < 0.2785565) {
        if (input[14] < 1.841141) {
            var24 = -0.29655233;
        } else {
            if (input[2] < 2.016949) {
                if (input[10] < 0.5624769) {
                    if (input[1] < -0.1705352) {
                        var24 = -0.13182998;
                    } else {
                        var24 = 0.16887242;
                    }
                } else {
                    var24 = -0.24747153;
                }
            } else {
                if (input[11] < 2.21862) {
                    if (input[15] < 0.001174732) {
                        var24 = -0.113534056;
                    } else {
                        var24 = -0.29082406;
                    }
                } else {
                    if (input[12] < 0.2065493) {
                        var24 = 0.048720926;
                    } else {
                        var24 = -0.22698192;
                    }
                }
            }
        }
    } else {
        if (input[16] < -0.5376349) {
            if (input[8] < 1.295351) {
                if (input[17] < 1.81195) {
                    var24 = 0.28446075;
                } else {
                    var24 = -0.015509844;
                }
            } else {
                if (input[3] < -0.3351548) {
                    var24 = 0.14902619;
                } else {
                    if (input[6] < -0.1756872) {
                        var24 = -0.3201263;
                    } else {
                        var24 = -0.08702585;
                    }
                }
            }
        } else {
            if (input[15] < 0.3777327) {
                if (input[12] < 0.2325397) {
                    if (input[1] < -0.2008021) {
                        var24 = 0.20523909;
                    } else {
                        var24 = -0.24292074;
                    }
                } else {
                    if (input[17] < 1.782863) {
                        var24 = 0.06905878;
                    } else {
                        var24 = 0.30981076;
                    }
                }
            } else {
                if (input[10] < 0.06545661) {
                    var24 = -0.24407257;
                } else {
                    var24 = 0.12965357;
                }
            }
        }
    }
    var var25;
    if (input[0] < -0.2171254) {
        if (input[9] < 0.08887912) {
            if (input[17] < 2.221975) {
                if (input[7] < 0.2316519) {
                    if (input[2] < 2.262643) {
                        var25 = -0.07777546;
                    } else {
                        var25 = -0.5051197;
                    }
                } else {
                    if (input[12] < -0.13244) {
                        var25 = -0.14415883;
                    } else {
                        var25 = 0.1404822;
                    }
                }
            } else {
                if (input[15] < -0.05871297) {
                    var25 = -0.2470265;
                } else {
                    if (input[2] < 2.356275) {
                        var25 = 0.30571508;
                    } else {
                        var25 = 0.0535863;
                    }
                }
            }
        } else {
            if (input[15] < 0.2858131) {
                if (input[11] < 2.532528) {
                    if (input[2] < 2.290732) {
                        var25 = -0.38630208;
                    } else {
                        var25 = -0.1900023;
                    }
                } else {
                    var25 = 0.25512454;
                }
            } else {
                if (input[3] < -0.2907562) {
                    if (input[12] < 0.2325397) {
                        var25 = -0.21649306;
                    } else {
                        var25 = 0.2791782;
                    }
                } else {
                    var25 = -0.23135965;
                }
            }
        }
    } else {
        if (input[8] < 1.742256) {
            if (input[2] < 1.659371) {
                if (input[6] < -0.1572972) {
                    var25 = -0.04034241;
                } else {
                    var25 = 0.24895662;
                }
            } else {
                if (input[1] < 0.2513219) {
                    if (input[3] < -0.3236437) {
                        var25 = 0.12930745;
                    } else {
                        var25 = -0.28971985;
                    }
                } else {
                    var25 = 0.23895831;
                }
            }
        } else {
            if (input[11] < 2.338711) {
                if (input[11] < 2.205464) {
                    if (input[0] < -0.1727424) {
                        var25 = -0.151401;
                    } else {
                        var25 = 0.20785397;
                    }
                } else {
                    var25 = 0.38270074;
                }
            } else {
                if (input[10] < 0.1880366) {
                    if (input[7] < -0.05629134) {
                        var25 = 0.24719477;
                    } else {
                        var25 = -0.25150913;
                    }
                } else {
                    if (input[10] < 0.3885778) {
                        var25 = 0.2802094;
                    } else {
                        var25 = -0.013694174;
                    }
                }
            }
        }
    }
    var var26;
    if (input[2] < 2.760983) {
        if (input[11] < 2.423716) {
            if (input[17] < 2.249357) {
                if (input[10] < 0.5541288) {
                    if (input[17] < 1.668892) {
                        var26 = -0.24365638;
                    } else {
                        var26 = 0.022345517;
                    }
                } else {
                    if (input[7] < 0.779765) {
                        var26 = -0.29483905;
                    } else {
                        var26 = 0.011159584;
                    }
                }
            } else {
                var26 = 0.26426616;
            }
        } else {
            if (input[11] < 2.532528) {
                var26 = -0.27769133;
            } else {
                if (input[15] < -0.004154104) {
                    var26 = -0.23299065;
                } else {
                    if (input[10] < 0.1576806) {
                        var26 = -0.21871236;
                    } else {
                        var26 = 0.2708573;
                    }
                }
            }
        }
    } else {
        var26 = 0.24311647;
    }
    var var27;
    if (input[0] < -0.2171254) {
        if (input[6] < -0.3358629) {
            if (input[0] < -0.5713729) {
                if (input[11] < 2.100331) {
                    if (input[2] < 2.000878) {
                        var27 = 0.19194311;
                    } else {
                        var27 = -0.3229288;
                    }
                } else {
                    var27 = 0.23080182;
                }
            } else {
                if (input[14] < 2.096048) {
                    var27 = 0.25778738;
                } else {
                    if (input[17] < 2.118415) {
                        var27 = -0.23149012;
                    } else {
                        var27 = 0.13019724;
                    }
                }
            }
        } else {
            if (input[15] < 0.2868239) {
                if (input[3] < -0.2989028) {
                    if (input[4] < 0.6294615) {
                        var27 = -0.25452366;
                    } else {
                        var27 = 0.15262131;
                    }
                } else {
                    if (input[1] < 0.1250326) {
                        var27 = -0.12592822;
                    } else {
                        var27 = 0.1078118;
                    }
                }
            } else {
                if (input[3] < -0.2907562) {
                    if (input[12] < 0.2558995) {
                        var27 = 0.22665912;
                    } else {
                        var27 = -0.14151664;
                    }
                } else {
                    var27 = -0.21638939;
                }
            }
        }
    } else {
        if (input[9] < 0.09431899) {
            if (input[12] < 0.1957022) {
                var27 = -0.095653675;
            } else {
                var27 = 0.3117248;
            }
        } else {
            if (input[13] < -0.0373431) {
                if (input[7] < -0.0502205) {
                    if (input[12] < 0.2390534) {
                        var27 = 0.17952542;
                    } else {
                        var27 = -0.16977924;
                    }
                } else {
                    if (input[16] < -0.3783134) {
                        var27 = 0.12028024;
                    } else {
                        var27 = -0.2979241;
                    }
                }
            } else {
                if (input[1] < 0.2017561) {
                    var27 = -0.085506335;
                } else {
                    if (input[0] < -0.2017166) {
                        var27 = 0.0013685949;
                    } else {
                        var27 = 0.25565225;
                    }
                }
            }
        }
    }
    var var28;
    if (input[2] < 1.64242) {
        if (input[17] < 1.867685) {
            var28 = 0.26219925;
        } else {
            var28 = -0.059139278;
        }
    } else {
        if (input[4] < 0.3413553) {
            if (input[3] < -0.2624162) {
                if (input[15] < 0.2868239) {
                    if (input[10] < 0.09503446) {
                        var28 = -0.30156058;
                    } else {
                        var28 = -0.04093963;
                    }
                } else {
                    if (input[12] < 0.2558995) {
                        var28 = 0.1327659;
                    } else {
                        var28 = -0.25084555;
                    }
                }
            } else {
                if (input[8] < 1.663888) {
                    if (input[2] < 1.659371) {
                        var28 = 0.13278133;
                    } else {
                        var28 = -0.21462147;
                    }
                } else {
                    if (input[9] < 0.0867674) {
                        var28 = -0.09426344;
                    } else {
                        var28 = 0.12294787;
                    }
                }
            }
        } else {
            if (input[3] < -0.6613371) {
                if (input[7] < 0.8568512) {
                    if (input[17] < 2.118415) {
                        var28 = -0.14276665;
                    } else {
                        var28 = 0.17416163;
                    }
                } else {
                    var28 = -0.33862045;
                }
            } else {
                if (input[9] < -0.02381299) {
                    if (input[0] < -0.5713729) {
                        var28 = -0.02782352;
                    } else {
                        var28 = 0.2777368;
                    }
                } else {
                    if (input[12] < 0.02595822) {
                        var28 = -0.22448201;
                    } else {
                        var28 = 0.11462454;
                    }
                }
            }
        }
    }
    var var29;
    if (input[2] < 2.760983) {
        if (input[11] < 2.430201) {
            if (input[2] < 2.303731) {
                if (input[14] < 2.334928) {
                    if (input[7] < 0.2343174) {
                        var29 = -0.029443795;
                    } else {
                        var29 = 0.081679195;
                    }
                } else {
                    if (input[15] < 0.260144) {
                        var29 = 0.17822193;
                    } else {
                        var29 = -0.35321993;
                    }
                }
            } else {
                if (input[15] < 0.2627702) {
                    if (input[15] < 0.0968254) {
                        var29 = 0.01588873;
                    } else {
                        var29 = 0.31759688;
                    }
                } else {
                    if (input[9] < 0.08342929) {
                        var29 = -0.33672875;
                    } else {
                        var29 = 0.06410193;
                    }
                }
            }
        } else {
            if (input[11] < 2.532528) {
                var29 = -0.27192158;
            } else {
                if (input[16] < 0.06820299) {
                    if (input[10] < 0.1576806) {
                        var29 = -0.1863401;
                    } else {
                        var29 = 0.25638682;
                    }
                } else {
                    var29 = -0.20292936;
                }
            }
        }
    } else {
        var29 = 0.22153528;
    }
    var var30;
    if (input[0] < -0.05516275) {
        if (input[6] < -0.107083) {
            if (input[3] < -0.2500715) {
                if (input[9] < 0.08887912) {
                    if (input[14] < 2.159554) {
                        var30 = -0.07136728;
                    } else {
                        var30 = 0.12075702;
                    }
                } else {
                    if (input[12] < 0.2325397) {
                        var30 = -0.15828621;
                    } else {
                        var30 = 0.057712603;
                    }
                }
            } else {
                if (input[11] < 2.337177) {
                    if (input[2] < 1.978701) {
                        var30 = 0.13892604;
                    } else {
                        var30 = -0.10601769;
                    }
                } else {
                    if (input[12] < 0.2073671) {
                        var30 = 0.21595092;
                    } else {
                        var30 = -0.06455191;
                    }
                }
            }
        } else {
            if (input[2] < 2.069351) {
                var30 = 0.00190296;
            } else {
                var30 = -0.23989496;
            }
        }
    } else {
        var30 = 0.24447824;
    }
    var var31;
    if (input[2] < 1.648771) {
        if (input[17] < 1.87981) {
            if (input[15] < 0.2642812) {
                var31 = 0.04291919;
            } else {
                var31 = 0.28852746;
            }
        } else {
            var31 = -0.20479134;
        }
    } else {
        if (input[14] < 2.159554) {
            if (input[16] < 0.1240764) {
                if (input[14] < 2.092411) {
                    if (input[8] < 1.488385) {
                        var31 = -0.09550727;
                    } else {
                        var31 = 0.18252307;
                    }
                } else {
                    if (input[9] < 0.1848368) {
                        var31 = -0.2713563;
                    } else {
                        var31 = 0.1338897;
                    }
                }
            } else {
                var31 = 0.20619681;
            }
        } else {
            if (input[17] < 2.148873) {
                if (input[8] < 1.977999) {
                    if (input[11] < 2.15279) {
                        var31 = 0.29243955;
                    } else {
                        var31 = 0.072796695;
                    }
                } else {
                    var31 = 0.039294764;
                }
            } else {
                if (input[16] < -0.04478218) {
                    if (input[15] < 0.2627702) {
                        var31 = 0.095952876;
                    } else {
                        var31 = -0.08671027;
                    }
                } else {
                    if (input[10] < 0.5624769) {
                        var31 = -0.1788486;
                    } else {
                        var31 = 0.1984568;
                    }
                }
            }
        }
    }
    var var32;
    if (input[17] < 1.668892) {
        var32 = -0.21698916;
    } else {
        if (input[14] < 1.796179) {
            if (input[0] < -0.2121356) {
                if (input[2] < 1.67682) {
                    var32 = 0.060872223;
                } else {
                    var32 = 0.25363725;
                }
            } else {
                var32 = -0.12753563;
            }
        } else {
            if (input[10] < -0.163907) {
                var32 = -0.23118247;
            } else {
                if (input[1] < -0.2008021) {
                    if (input[11] < 1.780748) {
                        var32 = 0.28374523;
                    } else {
                        var32 = -0.13077928;
                    }
                } else {
                    if (input[0] < -0.2150551) {
                        var32 = -0.036844905;
                    } else {
                        var32 = 0.07762702;
                    }
                }
            }
        }
    }
    var var33;
    if (input[2] < 2.760983) {
        if (input[11] < 2.430201) {
            if (input[2] < 2.290732) {
                if (input[14] < 2.332517) {
                    if (input[17] < 2.221262) {
                        var33 = -0.020120284;
                    } else {
                        var33 = 0.12255592;
                    }
                } else {
                    if (input[2] < 2.262643) {
                        var33 = 0.050758887;
                    } else {
                        var33 = -0.31438762;
                    }
                }
            } else {
                if (input[15] < 0.261425) {
                    if (input[15] < 0.0968254) {
                        var33 = -0.00069921167;
                    } else {
                        var33 = 0.30607176;
                    }
                } else {
                    if (input[14] < 2.33749) {
                        var33 = 0.09034505;
                    } else {
                        var33 = -0.19730484;
                    }
                }
            }
        } else {
            if (input[11] < 2.532528) {
                var33 = -0.2540401;
            } else {
                if (input[10] < 0.1576806) {
                    var33 = -0.18927908;
                } else {
                    if (input[15] < -0.0678096) {
                        var33 = -0.16991256;
                    } else {
                        var33 = 0.2443078;
                    }
                }
            }
        }
    } else {
        var33 = 0.2040921;
    }
    var var34;
    if (input[0] < -0.05516275) {
        if (input[2] < 2.016949) {
            if (input[12] < 0.2558995) {
                if (input[7] < -0.2928369) {
                    if (input[0] < -0.2121356) {
                        var34 = -0.046990316;
                    } else {
                        var34 = -0.20022394;
                    }
                } else {
                    if (input[17] < 2.186087) {
                        var34 = 0.09747775;
                    } else {
                        var34 = -0.18571782;
                    }
                }
            } else {
                if (input[2] < 1.659371) {
                    var34 = 0.010721979;
                } else {
                    var34 = -0.22645038;
                }
            }
        } else {
            if (input[14] < 2.324444) {
                if (input[9] < 0.2145008) {
                    if (input[13] < 0.3245014) {
                        var34 = -0.24071303;
                    } else {
                        var34 = -0.06344979;
                    }
                } else {
                    var34 = 0.044378255;
                }
            } else {
                if (input[13] < -0.10897) {
                    if (input[15] < 0.258799) {
                        var34 = 0.09626555;
                    } else {
                        var34 = -0.2943623;
                    }
                } else {
                    if (input[0] < -0.2265281) {
                        var34 = -0.054868445;
                    } else {
                        var34 = 0.08191681;
                    }
                }
            }
        }
    } else {
        var34 = 0.2184962;
    }
    var var35;
    if (input[1] < 0.1279088) {
        if (input[16] < -0.2649003) {
            if (input[13] < -0.0807141) {
                if (input[12] < 0.1957022) {
                    if (input[1] < 0.1234693) {
                        var35 = -0.30157578;
                    } else {
                        var35 = -0.07297846;
                    }
                } else {
                    if (input[3] < -0.2193058) {
                        var35 = -0.020105317;
                    } else {
                        var35 = 0.19110672;
                    }
                }
            } else {
                var35 = 0.27646288;
            }
        } else {
            if (input[4] < 0.2415533) {
                var35 = -0.33865723;
            } else {
                if (input[9] < 0.08342929) {
                    var35 = -0.18371019;
                } else {
                    var35 = 0.16656584;
                }
            }
        }
    } else {
        if (input[14] < 2.063131) {
            var35 = 0.23898776;
        } else {
            if (input[14] < 2.15698) {
                if (input[16] < 0.1240764) {
                    if (input[14] < 2.096048) {
                        var35 = -0.02082454;
                    } else {
                        var35 = -0.2587236;
                    }
                } else {
                    var35 = 0.18422018;
                }
            } else {
                if (input[16] < 0.1316423) {
                    if (input[14] < 2.33749) {
                        var35 = 0.19098972;
                    } else {
                        var35 = 0.009437036;
                    }
                } else {
                    if (input[17] < 2.171904) {
                        var35 = 0.1294718;
                    } else {
                        var35 = -0.19380088;
                    }
                }
            }
        }
    }
    var var36;
    if (input[9] < 0.08887912) {
        if (input[17] < 2.221975) {
            if (input[2] < 2.016949) {
                if (input[15] < 0.0216704) {
                    if (input[17] < 2.186087) {
                        var36 = 0.13586244;
                    } else {
                        var36 = -0.15048996;
                    }
                } else {
                    if (input[1] < -0.1979605) {
                        var36 = 0.2036421;
                    } else {
                        var36 = -0.18935777;
                    }
                }
            } else {
                if (input[6] < -0.2356659) {
                    if (input[6] < -0.2562627) {
                        var36 = -0.08459473;
                    } else {
                        var36 = -0.34556553;
                    }
                } else {
                    if (input[9] < 0.08180196) {
                        var36 = -0.1793876;
                    } else {
                        var36 = 0.23235516;
                    }
                }
            }
        } else {
            if (input[2] < 2.356275) {
                var36 = 0.28020838;
            } else {
                if (input[17] < 2.735959) {
                    if (input[13] < 0.07511733) {
                        var36 = 0.010020524;
                    } else {
                        var36 = -0.190045;
                    }
                } else {
                    var36 = 0.12584758;
                }
            }
        }
    } else {
        if (input[7] < -0.03780366) {
            if (input[1] < 0.09913446) {
                if (input[11] < 1.778147) {
                    if (input[9] < 0.1555381) {
                        var36 = 0.16151306;
                    } else {
                        var36 = -0.20740971;
                    }
                } else {
                    if (input[6] < -0.1518092) {
                        var36 = -0.26351792;
                    } else {
                        var36 = 0.1612756;
                    }
                }
            } else {
                if (input[7] < -0.0502205) {
                    var36 = 0.22353229;
                } else {
                    var36 = -0.01873857;
                }
            }
        } else {
            if (input[0] < -0.2150551) {
                if (input[2] < 2.290732) {
                    if (input[2] < 1.653515) {
                        var36 = 0.03232072;
                    } else {
                        var36 = -0.30389294;
                    }
                } else {
                    if (input[14] < 2.33749) {
                        var36 = 0.16660386;
                    } else {
                        var36 = -0.18728662;
                    }
                }
            } else {
                if (input[1] < 0.2160003) {
                    if (input[9] < 0.09431899) {
                        var36 = 0.17925963;
                    } else {
                        var36 = -0.23706146;
                    }
                } else {
                    if (input[0] < -0.1994369) {
                        var36 = -0.0059070797;
                    } else {
                        var36 = 0.2117615;
                    }
                }
            }
        }
    }
    var var37;
    if (input[6] < -0.2600288) {
        if (input[0] < -0.5713729) {
            if (input[11] < 2.100331) {
                if (input[5] < 1.870353) {
                    var37 = 0.009834593;
                } else {
                    var37 = -0.25293553;
                }
            } else {
                var37 = 0.18053332;
            }
        } else {
            if (input[1] < 0.1039143) {
                if (input[11] < 2.337177) {
                    if (input[14] < 1.841141) {
                        var37 = -0.03253177;
                    } else {
                        var37 = 0.16383205;
                    }
                } else {
                    var37 = -0.23746999;
                }
            } else {
                if (input[16] < 0.007217883) {
                    if (input[14] < 2.334928) {
                        var37 = 0.25587493;
                    } else {
                        var37 = 0.07197564;
                    }
                } else {
                    if (input[14] < 2.159554) {
                        var37 = -0.0949611;
                    } else {
                        var37 = 0.1255008;
                    }
                }
            }
        }
    } else {
        if (input[14] < 1.796179) {
            if (input[4] < -0.2963482) {
                var37 = 0.20298465;
            } else {
                var37 = -0.0861635;
            }
        } else {
            if (input[3] < -0.2500715) {
                if (input[7] < 0.4181217) {
                    if (input[2] < 1.648771) {
                        var37 = 0.05765648;
                    } else {
                        var37 = -0.23786385;
                    }
                } else {
                    if (input[14] < 2.33749) {
                        var37 = 0.22858405;
                    } else {
                        var37 = -0.22877556;
                    }
                }
            } else {
                if (input[6] < -0.2356659) {
                    if (input[0] < -0.2210851) {
                        var37 = -0.26226154;
                    } else {
                        var37 = 0.11470636;
                    }
                } else {
                    if (input[15] < 0.2125677) {
                        var37 = -0.15596217;
                    } else {
                        var37 = 0.099241026;
                    }
                }
            }
        }
    }
    var var38;
    if (input[11] < 2.534334) {
        if (input[11] < 2.430201) {
            if (input[17] < 2.249357) {
                if (input[14] < 2.33749) {
                    if (input[2] < 2.296302) {
                        var38 = -0.014466245;
                    } else {
                        var38 = 0.11604636;
                    }
                } else {
                    if (input[8] < 2.011959) {
                        var38 = 0.08367832;
                    } else {
                        var38 = -0.24867925;
                    }
                }
            } else {
                var38 = 0.21068211;
            }
        } else {
            var38 = -0.22962297;
        }
    } else {
        if (input[10] < 0.1576806) {
            var38 = -0.15786934;
        } else {
            if (input[16] < 0.1097662) {
                var38 = 0.24320747;
            } else {
                var38 = -0.06759708;
            }
        }
    }
    var var39;
    if (input[7] < -0.09459233) {
        if (input[4] < -0.02880991) {
            if (input[8] < 1.310776) {
                if (input[16] < -0.5240782) {
                    var39 = 0.21353231;
                } else {
                    var39 = -0.08131108;
                }
            } else {
                if (input[16] < -0.5376349) {
                    var39 = -0.18406783;
                } else {
                    if (input[6] < -0.2321548) {
                        var39 = -0.112313114;
                    } else {
                        var39 = 0.14639553;
                    }
                }
            }
        } else {
            var39 = 0.2202633;
        }
    } else {
        if (input[4] < 0.07131051) {
            if (input[1] < -0.1979605) {
                var39 = 0.19895718;
            } else {
                if (input[3] < -0.2283672) {
                    if (input[15] < 0.260144) {
                        var39 = -0.09015393;
                    } else {
                        var39 = -0.2988883;
                    }
                } else {
                    if (input[12] < 0.2073671) {
                        var39 = 0.12343351;
                    } else {
                        var39 = -0.06763018;
                    }
                }
            }
        } else {
            if (input[14] < 2.063131) {
                var39 = 0.20814572;
            } else {
                if (input[14] < 2.14823) {
                    if (input[1] < 0.5163247) {
                        var39 = -0.039850403;
                    } else {
                        var39 = -0.24700648;
                    }
                } else {
                    if (input[13] < 0.3245014) {
                        var39 = -0.015412891;
                    } else {
                        var39 = 0.09839604;
                    }
                }
            }
        }
    }
    var var40;
    if (input[17] < 1.668892) {
        var40 = -0.17111006;
    } else {
        if (input[11] < 1.776376) {
            if (input[15] < 0.2763226) {
                var40 = -0.09566316;
            } else {
                if (input[12] < 0.2558995) {
                    if (input[0] < -0.2161763) {
                        var40 = 0.22699349;
                    } else {
                        var40 = -0.016825983;
                    }
                } else {
                    var40 = -0.06514497;
                }
            }
        } else {
            if (input[15] < 0.2627702) {
                if (input[16] < 0.0092729) {
                    if (input[9] < 0.09038337) {
                        var40 = 0.16420679;
                    } else {
                        var40 = -0.0044396957;
                    }
                } else {
                    if (input[13] < 0.3245014) {
                        var40 = -0.16077945;
                    } else {
                        var40 = 0.03803815;
                    }
                }
            } else {
                if (input[1] < 0.1362102) {
                    if (input[3] < -0.2208799) {
                        var40 = -0.16800995;
                    } else {
                        var40 = 0.021171346;
                    }
                } else {
                    if (input[4] < 0.2860089) {
                        var40 = 0.038434237;
                    } else {
                        var40 = 0.19606489;
                    }
                }
            }
        }
    }
    var var41;
    if (input[12] < -0.13244) {
        if (input[1] < 0.5201896) {
            var41 = 0.16397905;
        } else {
            if (input[5] < 1.874339) {
                var41 = 0.028035628;
            } else {
                var41 = -0.26946157;
            }
        }
    } else {
        if (input[4] < 0.3413553) {
            if (input[7] < -0.08700752) {
                if (input[4] < -0.02880991) {
                    if (input[11] < 1.776376) {
                        var41 = 0.06640125;
                    } else {
                        var41 = -0.07295403;
                    }
                } else {
                    if (input[13] < -0.101853) {
                        var41 = 0.22213914;
                    } else {
                        var41 = 0.05875034;
                    }
                }
            } else {
                if (input[1] < -0.1979605) {
                    var41 = 0.174449;
                } else {
                    if (input[4] < 0.07131051) {
                        var41 = -0.17383097;
                    } else {
                        var41 = -0.0015247801;
                    }
                }
            }
        } else {
            if (input[15] < -0.1492399) {
                if (input[17] < 2.124743) {
                    var41 = -0.23405561;
                } else {
                    var41 = 0.12839371;
                }
            } else {
                if (input[9] < -0.02381299) {
                    var41 = 0.20497964;
                } else {
                    if (input[15] < 0.2001568) {
                        var41 = -0.029570932;
                    } else {
                        var41 = 0.15619448;
                    }
                }
            }
        }
    }
    var var42;
    if (input[0] < -0.5713729) {
        if (input[2] < 2.016949) {
            if (input[5] < 1.96004) {
                var42 = 0.13767545;
            } else {
                var42 = -0.15331003;
            }
        } else {
            var42 = -0.21627568;
        }
    } else {
        if (input[6] < -0.3482838) {
            if (input[3] < -0.6613371) {
                if (input[2] < 2.012186) {
                    var42 = -0.22993015;
                } else {
                    var42 = 0.13319579;
                }
            } else {
                if (input[15] < 0.0187387) {
                    var42 = 0.23649852;
                } else {
                    if (input[17] < 2.264725) {
                        var42 = -0.040600188;
                    } else {
                        var42 = 0.12351828;
                    }
                }
            }
        } else {
            if (input[0] < -0.2273137) {
                if (input[1] < -0.1979605) {
                    var42 = 0.16371028;
                } else {
                    if (input[1] < 0.1250326) {
                        var42 = -0.24414386;
                    } else {
                        var42 = -0.047034875;
                    }
                }
            } else {
                if (input[2] < 2.303731) {
                    if (input[12] < 0.1957022) {
                        var42 = -0.20808887;
                    } else {
                        var42 = 0.036132533;
                    }
                } else {
                    if (input[12] < 0.1957022) {
                        var42 = 0.1995512;
                    } else {
                        var42 = -0.04273715;
                    }
                }
            }
        }
    }
    var var43;
    if (input[10] < -0.1690207) {
        var43 = -0.13896668;
    } else {
        if (input[12] < 0.2325397) {
            if (input[13] < -0.1127578) {
                if (input[5] < 1.417994) {
                    var43 = 0.12243624;
                } else {
                    var43 = -0.2254307;
                }
            } else {
                if (input[7] < -0.08700752) {
                    if (input[13] < -0.101853) {
                        var43 = 0.22020903;
                    } else {
                        var43 = 0.026240971;
                    }
                } else {
                    if (input[2] < 2.000878) {
                        var43 = 0.14244157;
                    } else {
                        var43 = -0.023584617;
                    }
                }
            }
        } else {
            if (input[15] < 0.248047) {
                var43 = -0.15644237;
            } else {
                if (input[16] < -0.5376349) {
                    if (input[8] < 1.310776) {
                        var43 = 0.15423381;
                    } else {
                        var43 = -0.14645466;
                    }
                } else {
                    if (input[16] < -0.3783134) {
                        var43 = 0.21561079;
                    } else {
                        var43 = 0.08173726;
                    }
                }
            }
        }
    }
    var var44;
    if (input[14] < 2.161573) {
        if (input[14] < 2.092411) {
            if (input[12] < 0.2558995) {
                if (input[7] < -0.2928369) {
                    var44 = -0.10870959;
                } else {
                    if (input[1] < -0.1705352) {
                        var44 = 0.006415539;
                    } else {
                        var44 = 0.1609944;
                    }
                }
            } else {
                if (input[7] < -0.2622208) {
                    var44 = 0.012280693;
                } else {
                    var44 = -0.19927348;
                }
            }
        } else {
            if (input[16] < 0.1240764) {
                if (input[17] < 2.00807) {
                    var44 = 0.0347154;
                } else {
                    if (input[5] < 1.838746) {
                        var44 = 0.0020442097;
                    } else {
                        var44 = -0.24309309;
                    }
                }
            } else {
                var44 = 0.13813509;
            }
        }
    } else {
        if (input[17] < 2.163425) {
            if (input[12] < 0.1509037) {
                var44 = 0.23757605;
            } else {
                var44 = -0.007851024;
            }
        } else {
            if (input[15] < -0.05871297) {
                if (input[2] < 2.012186) {
                    var44 = -0.024435356;
                } else {
                    var44 = -0.20620619;
                }
            } else {
                if (input[9] < 0.08887912) {
                    if (input[17] < 2.221975) {
                        var44 = -0.012254204;
                    } else {
                        var44 = 0.20002481;
                    }
                } else {
                    if (input[0] < -0.2150551) {
                        var44 = -0.0973032;
                    } else {
                        var44 = 0.08158359;
                    }
                }
            }
        }
    }
    var var45;
    if (input[9] < 0.09353288) {
        if (input[0] < -0.2150551) {
            if (input[4] < 0.2218255) {
                if (input[15] < 0.260144) {
                    if (input[11] < 2.337177) {
                        var45 = 0.17237225;
                    } else {
                        var45 = -0.09071025;
                    }
                } else {
                    if (input[6] < -0.2288282) {
                        var45 = -0.27333727;
                    } else {
                        var45 = -0.00028228472;
                    }
                }
            } else {
                if (input[14] < 2.161573) {
                    if (input[5] < 1.872065) {
                        var45 = 0.06263534;
                    } else {
                        var45 = -0.1647977;
                    }
                } else {
                    if (input[0] < -0.2202836) {
                        var45 = 0.14030768;
                    } else {
                        var45 = -0.0799357;
                    }
                }
            }
        } else {
            if (input[8] < 1.835116) {
                var45 = 0.021276582;
            } else {
                var45 = 0.24128653;
            }
        }
    } else {
        if (input[11] < 2.532528) {
            if (input[12] < 0.2325397) {
                if (input[3] < -0.2603527) {
                    var45 = -0.23910165;
                } else {
                    if (input[10] < 0.09266941) {
                        var45 = 0.10630683;
                    } else {
                        var45 = -0.12171407;
                    }
                }
            } else {
                if (input[3] < -0.3327239) {
                    var45 = 0.164192;
                } else {
                    if (input[10] < -0.163907) {
                        var45 = -0.12109706;
                    } else {
                        var45 = 0.050146703;
                    }
                }
            }
        } else {
            if (input[12] < 0.228821) {
                var45 = 0.18187818;
            } else {
                var45 = 0.01058279;
            }
        }
    }
    var var46;
    if (input[0] < -0.5713729) {
        if (input[2] < 2.007453) {
            var46 = 0.022542909;
        } else {
            var46 = -0.17378332;
        }
    } else {
        if (input[9] < -0.02381299) {
            if (input[3] < -0.6613371) {
                if (input[2] < 2.012186) {
                    var46 = -0.17905834;
                } else {
                    var46 = 0.11832815;
                }
            } else {
                if (input[7] < 0.1643748) {
                    var46 = 0.035134036;
                } else {
                    var46 = 0.22388782;
                }
            }
        } else {
            if (input[12] < 0.03103214) {
                var46 = -0.18032052;
            } else {
                if (input[4] < 0.2218255) {
                    if (input[7] < -0.02274477) {
                        var46 = 0.027437849;
                    } else {
                        var46 = -0.07412996;
                    }
                } else {
                    if (input[14] < 2.33749) {
                        var46 = 0.108414285;
                    } else {
                        var46 = -0.023361376;
                    }
                }
            }
        }
    }
    var var47;
    if (input[2] < 1.64242) {
        if (input[0] < -0.2225301) {
            var47 = 0.038172748;
        } else {
            var47 = 0.14625652;
        }
    } else {
        if (input[14] < 2.150301) {
            if (input[12] < 0.2558995) {
                if (input[14] < 2.096048) {
                    if (input[8] < 1.488385) {
                        var47 = -0.0114885755;
                    } else {
                        var47 = 0.13435912;
                    }
                } else {
                    var47 = -0.20126244;
                }
            } else {
                var47 = -0.19269434;
            }
        } else {
            if (input[0] < -0.2171254) {
                if (input[9] < 0.08887912) {
                    if (input[17] < 2.217906) {
                        var47 = -0.027111838;
                    } else {
                        var47 = 0.10423866;
                    }
                } else {
                    if (input[2] < 2.303731) {
                        var47 = -0.16410586;
                    } else {
                        var47 = 0.02651731;
                    }
                }
            } else {
                if (input[11] < 2.338711) {
                    if (input[1] < 0.1250326) {
                        var47 = 0.25195327;
                    } else {
                        var47 = 0.04660711;
                    }
                } else {
                    if (input[10] < 0.1880366) {
                        var47 = -0.097945124;
                    } else {
                        var47 = 0.15757695;
                    }
                }
            }
        }
    }
    var var48;
    if (input[15] < -0.1492399) {
        if (input[11] < 2.100331) {
            if (input[17] < 2.124743) {
                var48 = -0.2061819;
            } else {
                if (input[17] < 2.186087) {
                    var48 = 0.12491956;
                } else {
                    var48 = -0.19094642;
                }
            }
        } else {
            var48 = 0.08385107;
        }
    } else {
        if (input[6] < -0.2600288) {
            if (input[1] < 0.09913446) {
                if (input[16] < -0.4118899) {
                    var48 = 0.09104318;
                } else {
                    var48 = -0.1397239;
                }
            } else {
                if (input[3] < -0.3035052) {
                    if (input[16] < 0.1167921) {
                        var48 = -0.04555789;
                    } else {
                        var48 = 0.12380658;
                    }
                } else {
                    if (input[12] < 0.1957022) {
                        var48 = 0.028021816;
                    } else {
                        var48 = 0.20898068;
                    }
                }
            }
        } else {
            if (input[9] < 0.08342929) {
                if (input[1] < 0.1039143) {
                    var48 = 0.014071261;
                } else {
                    if (input[1] < 0.1195467) {
                        var48 = -0.23784222;
                    } else {
                        var48 = -0.0050905882;
                    }
                }
            } else {
                if (input[14] < 2.33749) {
                    if (input[2] < 2.303731) {
                        var48 = -0.010511622;
                    } else {
                        var48 = 0.2236692;
                    }
                } else {
                    if (input[3] < -0.2584558) {
                        var48 = -0.17320263;
                    } else {
                        var48 = 0.04708687;
                    }
                }
            }
        }
    }
    var var49;
    if (input[16] < 0.1395267) {
        if (input[11] < 2.532528) {
            if (input[11] < 2.430201) {
                if (input[17] < 2.249357) {
                    if (input[1] < 0.5593435) {
                        var49 = 0.014356816;
                    } else {
                        var49 = -0.09506418;
                    }
                } else {
                    var49 = 0.17449206;
                }
            } else {
                var49 = -0.20276058;
            }
        } else {
            if (input[1] < 0.1989124) {
                var49 = -0.05077173;
            } else {
                var49 = 0.19086477;
            }
        }
    } else {
        if (input[1] < 0.5508937) {
            var49 = -0.15988334;
        } else {
            var49 = 0.0044832584;
        }
    }
    var var50;
    if (input[2] < 1.64242) {
        var50 = 0.10867894;
    } else {
        if (input[10] < -0.1661818) {
            var50 = -0.13071382;
        } else {
            if (input[7] < -0.09459233) {
                if (input[1] < -0.1790948) {
                    var50 = -0.056925755;
                } else {
                    if (input[2] < 2.268299) {
                        var50 = 0.14754584;
                    } else {
                        var50 = -0.012670948;
                    }
                }
            } else {
                if (input[4] < 0.07131051) {
                    if (input[3] < -0.2283672) {
                        var50 = -0.14740069;
                    } else {
                        var50 = 0.080190346;
                    }
                } else {
                    if (input[6] < -0.1721249) {
                        var50 = 0.027241664;
                    } else {
                        var50 = -0.116916634;
                    }
                }
            }
        }
    }
    var var51;
    if (input[16] < 0.1316423) {
        if (input[13] < 0.3261032) {
            if (input[10] < 0.5206639) {
                if (input[1] < 0.4017701) {
                    if (input[16] < -0.04478218) {
                        var51 = 0.007095459;
                    } else {
                        var51 = -0.1287208;
                    }
                } else {
                    var51 = 0.15396994;
                }
            } else {
                if (input[3] < -0.3501371) {
                    if (input[17] < 2.124743) {
                        var51 = -0.20003426;
                    } else {
                        var51 = -0.04662687;
                    }
                } else {
                    var51 = 0.016190225;
                }
            }
        } else {
            if (input[1] < 0.5446773) {
                var51 = 0.19929816;
            } else {
                if (input[1] < 0.5772644) {
                    var51 = -0.118719116;
                } else {
                    var51 = 0.09024712;
                }
            }
        }
    } else {
        if (input[17] < 2.181995) {
            var51 = 0.064311616;
        } else {
            var51 = -0.1593131;
        }
    }
    var var52;
    if (input[2] < 1.648771) {
        if (input[12] < 0.22606) {
            var52 = -0.03327109;
        } else {
            var52 = 0.14865431;
        }
    } else {
        if (input[13] < -0.1127578) {
            if (input[6] < -0.1298103) {
                if (input[11] < 1.778147) {
                    if (input[8] < 1.345888) {
                        var52 = 0.10467296;
                    } else {
                        var52 = -0.10568273;
                    }
                } else {
                    var52 = -0.2107052;
                }
            } else {
                var52 = 0.08014704;
            }
        } else {
            if (input[7] < -0.08700752) {
                if (input[16] < -0.280997) {
                    var52 = 0.16767561;
                } else {
                    var52 = 0.021379631;
                }
            } else {
                if (input[5] < 1.833011) {
                    var52 = 0.12831873;
                } else {
                    if (input[2] < 2.290732) {
                        var52 = -0.045759223;
                    } else {
                        var52 = 0.026208866;
                    }
                }
            }
        }
    }
    var var53;
    if (input[0] < -0.5713729) {
        if (input[2] < 2.016949) {
            if (input[5] < 1.949868) {
                var53 = 0.11048682;
            } else {
                var53 = -0.10561192;
            }
        } else {
            var53 = -0.16067141;
        }
    } else {
        if (input[6] < -0.3307388) {
            if (input[3] < -0.6613371) {
                if (input[1] < 0.5537443) {
                    var53 = 0.062151965;
                } else {
                    var53 = -0.078550935;
                }
            } else {
                if (input[15] < 0.02034447) {
                    var53 = 0.18342334;
                } else {
                    if (input[3] < -0.4109903) {
                        var53 = -0.06659311;
                    } else {
                        var53 = 0.08170424;
                    }
                }
            }
        } else {
            if (input[15] < 0.2111401) {
                if (input[15] < 0.1438244) {
                    if (input[0] < -0.2257783) {
                        var53 = -0.08820318;
                    } else {
                        var53 = 0.10255222;
                    }
                } else {
                    var53 = -0.17769432;
                }
            } else {
                if (input[15] < 0.260144) {
                    if (input[1] < 0.09913446) {
                        var53 = -0.031027304;
                    } else {
                        var53 = 0.17639011;
                    }
                } else {
                    if (input[6] < -0.2076645) {
                        var53 = -0.06623454;
                    } else {
                        var53 = 0.039214153;
                    }
                }
            }
        }
    }
    var var54;
    if (input[9] < 0.09353288) {
        if (input[0] < -0.2150551) {
            if (input[15] < 0.261425) {
                if (input[3] < -0.3024618) {
                    if (input[6] < -0.3259334) {
                        var54 = 0.022706103;
                    } else {
                        var54 = -0.12881905;
                    }
                } else {
                    if (input[13] < -0.1035553) {
                        var54 = -0.009939567;
                    } else {
                        var54 = 0.17461601;
                    }
                }
            } else {
                if (input[17] < 2.228156) {
                    if (input[14] < 2.330391) {
                        var54 = -0.13066894;
                    } else {
                        var54 = 0.1499737;
                    }
                } else {
                    if (input[16] < -0.2744406) {
                        var54 = -0.23760687;
                    } else {
                        var54 = 0.010278508;
                    }
                }
            }
        } else {
            if (input[8] < 1.841739) {
                var54 = 0.025179878;
            } else {
                var54 = 0.20673521;
            }
        }
    } else {
        if (input[11] < 2.532528) {
            if (input[12] < 0.2325397) {
                if (input[3] < -0.2500715) {
                    var54 = -0.20074408;
                } else {
                    if (input[10] < 0.09266941) {
                        var54 = 0.13331601;
                    } else {
                        var54 = -0.10587378;
                    }
                }
            } else {
                if (input[3] < -0.2999883) {
                    if (input[16] < -0.5376349) {
                        var54 = -0.023009652;
                    } else {
                        var54 = 0.16862431;
                    }
                } else {
                    if (input[14] < 2.136013) {
                        var54 = -0.121135004;
                    } else {
                        var54 = 0.0950798;
                    }
                }
            }
        } else {
            var54 = 0.10539881;
        }
    }
    var var55;
    if (input[2] < 1.656171) {
        if (input[17] < 1.867685) {
            var55 = 0.16333123;
        } else {
            var55 = -0.08936476;
        }
    } else {
        if (input[13] < -0.1127578) {
            if (input[6] < -0.1298103) {
                if (input[3] < -0.3364936) {
                    var55 = 0.04847823;
                } else {
                    if (input[14] < 1.796179) {
                        var55 = -0.017006991;
                    } else {
                        var55 = -0.18389755;
                    }
                }
            } else {
                var55 = 0.056208503;
            }
        } else {
            if (input[6] < -0.1721249) {
                if (input[0] < -0.1994369) {
                    if (input[15] < 0.261425) {
                        var55 = 0.03666044;
                    } else {
                        var55 = -0.06479845;
                    }
                } else {
                    if (input[10] < 0.2042739) {
                        var55 = 0.044098817;
                    } else {
                        var55 = 0.17624022;
                    }
                }
            } else {
                if (input[1] < 0.188422) {
                    var55 = -0.15476613;
                } else {
                    var55 = -0.030345963;
                }
            }
        }
    }
    var var56;
    if (input[15] < 0.248047) {
        if (input[13] < -0.02756035) {
            var56 = -0.16864555;
        } else {
            if (input[16] < -0.04478218) {
                if (input[15] < 0.225822) {
                    var56 = 0.16322929;
                } else {
                    var56 = -0.028922072;
                }
            } else {
                if (input[8] < 1.769218) {
                    if (input[3] < -0.6613371) {
                        var56 = -0.02744784;
                    } else {
                        var56 = 0.12791066;
                    }
                } else {
                    if (input[17] < 2.269023) {
                        var56 = -0.13176665;
                    } else {
                        var56 = 0.0425685;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.260144) {
            if (input[1] < 0.09913446) {
                if (input[3] < -0.2500715) {
                    var56 = -0.088860914;
                } else {
                    var56 = 0.08203727;
                }
            } else {
                var56 = 0.18867765;
            }
        } else {
            if (input[9] < 0.08342929) {
                if (input[16] < -0.2649003) {
                    var56 = -0.050061215;
                } else {
                    var56 = -0.17650145;
                }
            } else {
                if (input[10] < 0.1072996) {
                    if (input[6] < -0.1899304) {
                        var56 = -0.04525579;
                    } else {
                        var56 = 0.10129187;
                    }
                } else {
                    var56 = 0.15513107;
                }
            }
        }
    }
    var var57;
    if (input[11] < 2.338711) {
        if (input[17] < 2.216262) {
            if (input[2] < 2.021461) {
                if (input[12] < 0.2558995) {
                    if (input[14] < 2.15698) {
                        var57 = 0.013865019;
                    } else {
                        var57 = 0.1123987;
                    }
                } else {
                    var57 = -0.11121508;
                }
            } else {
                if (input[15] < 0.2660418) {
                    var57 = -0.17427908;
                } else {
                    if (input[2] < 2.303731) {
                        var57 = 0.08502662;
                    } else {
                        var57 = -0.048303664;
                    }
                }
            }
        } else {
            if (input[14] < 2.334928) {
                if (input[6] < -0.2339939) {
                    if (input[12] < 0.2016432) {
                        var57 = 0.13653405;
                    } else {
                        var57 = -0.06622007;
                    }
                } else {
                    var57 = 0.23179656;
                }
            } else {
                if (input[0] < -0.2202836) {
                    var57 = 0.13028196;
                } else {
                    if (input[1] < 0.1234693) {
                        var57 = -0.17104883;
                    } else {
                        var57 = -0.0009935421;
                    }
                }
            }
        }
    } else {
        if (input[12] < 0.2027505) {
            if (input[9] < 0.09277747) {
                if (input[6] < -0.2676863) {
                    var57 = 0.052743196;
                } else {
                    var57 = -0.14000316;
                }
            } else {
                if (input[0] < -0.2191461) {
                    var57 = 0.04112013;
                } else {
                    var57 = 0.1826635;
                }
            }
        } else {
            if (input[7] < -0.03780366) {
                var57 = -0.021130731;
            } else {
                var57 = -0.17988823;
            }
        }
    }
    var var58;
    if (input[15] < -0.1492399) {
        if (input[11] < 2.100331) {
            if (input[11] < 2.086877) {
                var58 = -0.044158377;
            } else {
                var58 = -0.16542764;
            }
        } else {
            var58 = 0.066921316;
        }
    } else {
        if (input[9] < 0.08887912) {
            if (input[17] < 2.221975) {
                if (input[7] < 0.1627987) {
                    if (input[14] < 2.096048) {
                        var58 = 0.050070424;
                    } else {
                        var58 = -0.13391276;
                    }
                } else {
                    if (input[9] < 0.08342929) {
                        var58 = -0.009169192;
                    } else {
                        var58 = 0.17016196;
                    }
                }
            } else {
                if (input[2] < 2.356275) {
                    var58 = 0.2117535;
                } else {
                    var58 = -0.018129911;
                }
            }
        } else {
            if (input[7] < -0.03780366) {
                if (input[12] < 0.2558995) {
                    if (input[3] < -0.2486025) {
                        var58 = 0.014071345;
                    } else {
                        var58 = 0.1639029;
                    }
                } else {
                    var58 = -0.061811488;
                }
            } else {
                if (input[2] < 2.290732) {
                    if (input[14] < 2.332517) {
                        var58 = -0.018204616;
                    } else {
                        var58 = -0.19382922;
                    }
                } else {
                    if (input[9] < 0.08964932) {
                        var58 = -0.11687388;
                    } else {
                        var58 = 0.07179146;
                    }
                }
            }
        }
    }
    var var59;
    if (input[11] < 2.420485) {
        if (input[0] < -0.5713729) {
            if (input[2] < 2.007453) {
                var59 = 0.019916505;
            } else {
                var59 = -0.11681243;
            }
        } else {
            if (input[1] < 0.1134226) {
                if (input[16] < -0.2649003) {
                    if (input[9] < 0.09038337) {
                        var59 = 0.07732095;
                    } else {
                        var59 = -0.025150307;
                    }
                } else {
                    var59 = -0.18180187;
                }
            } else {
                if (input[14] < 2.096048) {
                    var59 = 0.17994644;
                } else {
                    if (input[14] < 2.161573) {
                        var59 = -0.09876745;
                    } else {
                        var59 = 0.09272421;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.532528) {
            var59 = -0.17169616;
        } else {
            if (input[10] < 0.1920166) {
                var59 = -0.056595966;
            } else {
                var59 = 0.09974732;
            }
        }
    }
    var var60;
    if (input[15] < 0.2785565) {
        if (input[13] < -0.1127578) {
            if (input[3] < -0.2453107) {
                var60 = -0.19559105;
            } else {
                var60 = 0.07307506;
            }
        } else {
            if (input[14] < 2.063131) {
                var60 = 0.12313289;
            } else {
                if (input[12] < 0.2073671) {
                    if (input[14] < 2.150301) {
                        var60 = -0.12250992;
                    } else {
                        var60 = 0.02287756;
                    }
                } else {
                    var60 = -0.15569797;
                }
            }
        }
    } else {
        if (input[3] < -0.2978257) {
            if (input[4] < -0.2852896) {
                var60 = 0.14974393;
            } else {
                if (input[6] < -0.2175485) {
                    var60 = 0.040845737;
                } else {
                    var60 = -0.012628025;
                }
            }
        } else {
            if (input[10] < -0.1438759) {
                var60 = -0.104605764;
            } else {
                var60 = 0.04054235;
            }
        }
    }
    var var61;
    if (input[15] < -0.1583239) {
        var61 = -0.08428983;
    } else {
        if (input[13] < 0.3261032) {
            if (input[16] < 0.02776681) {
                if (input[12] < 0.08752976) {
                    var61 = 0.12651634;
                } else {
                    if (input[12] < 0.1934781) {
                        var61 = -0.089045115;
                    } else {
                        var61 = 0.016245835;
                    }
                }
            } else {
                if (input[3] < -0.3501371) {
                    var61 = -0.13067941;
                } else {
                    var61 = 0.003154418;
                }
            }
        } else {
            if (input[1] < 0.5460396) {
                var61 = 0.16295667;
            } else {
                if (input[3] < -0.6613371) {
                    var61 = -0.09662355;
                } else {
                    var61 = 0.11317776;
                }
            }
        }
    }
    var var62;
    if (input[2] < 1.653515) {
        if (input[15] < 0.2868239) {
            var62 = -0.017876508;
        } else {
            var62 = 0.1241354;
        }
    } else {
        if (input[4] < 0.1458204) {
            if (input[7] < -0.02274477) {
                if (input[17] < 2.222673) {
                    if (input[8] < 1.310776) {
                        var62 = 0.06452085;
                    } else {
                        var62 = -0.08555996;
                    }
                } else {
                    if (input[3] < -0.2486025) {
                        var62 = -0.052622218;
                    } else {
                        var62 = 0.1705156;
                    }
                }
            } else {
                if (input[4] < 0.07131051) {
                    var62 = -0.17515373;
                } else {
                    if (input[8] < 1.854954) {
                        var62 = 0.08553831;
                    } else {
                        var62 = -0.10591455;
                    }
                }
            }
        } else {
            if (input[6] < -0.1951485) {
                if (input[3] < -0.2542287) {
                    if (input[1] < 0.1062806) {
                        var62 = -0.099944614;
                    } else {
                        var62 = 0.023038821;
                    }
                } else {
                    var62 = 0.15995716;
                }
            } else {
                if (input[9] < 0.1031501) {
                    var62 = -0.10116971;
                } else {
                    var62 = -0.026466275;
                }
            }
        }
    }
    var var63;
    if (input[11] < 1.776376) {
        if (input[15] < 0.2851095) {
            var63 = -0.06047965;
        } else {
            if (input[8] < 1.345888) {
                var63 = 0.16672127;
            } else {
                var63 = -0.0063647837;
            }
        }
    } else {
        if (input[15] < 0.2627702) {
            if (input[8] < 1.854954) {
                if (input[1] < 0.5460396) {
                    if (input[1] < 0.08973695) {
                        var63 = -0.04264113;
                    } else {
                        var63 = 0.13920528;
                    }
                } else {
                    if (input[14] < 2.15698) {
                        var63 = -0.086338915;
                    } else {
                        var63 = 0.052083302;
                    }
                }
            } else {
                if (input[12] < 0.2037675) {
                    if (input[16] < -0.04478218) {
                        var63 = 0.0761851;
                    } else {
                        var63 = -0.08557372;
                    }
                } else {
                    if (input[11] < 2.338711) {
                        var63 = -0.015182016;
                    } else {
                        var63 = -0.1700622;
                    }
                }
            }
        } else {
            if (input[10] < 0.1059824) {
                if (input[17] < 2.228156) {
                    if (input[11] < 2.336156) {
                        var63 = -0.10647572;
                    } else {
                        var63 = 0.09069612;
                    }
                } else {
                    if (input[17] < 2.233836) {
                        var63 = -0.20701873;
                    } else {
                        var63 = -0.0539916;
                    }
                }
            } else {
                if (input[14] < 2.332517) {
                    var63 = -0.04888902;
                } else {
                    var63 = 0.12955534;
                }
            }
        }
    }
    var var64;
    if (input[16] < -0.4118899) {
        if (input[6] < -0.1629876) {
            if (input[0] < -0.2191461) {
                if (input[15] < 0.2921785) {
                    var64 = -0.050696272;
                } else {
                    var64 = 0.14223982;
                }
            } else {
                var64 = -0.13459045;
            }
        } else {
            var64 = 0.13885847;
        }
    } else {
        if (input[13] < -0.1127578) {
            var64 = -0.12803912;
        } else {
            if (input[7] < -0.08700752) {
                var64 = 0.09785164;
            } else {
                if (input[1] < 0.1134226) {
                    if (input[15] < 0.260144) {
                        var64 = 0.06923172;
                    } else {
                        var64 = -0.11199124;
                    }
                } else {
                    if (input[16] < 0.1316423) {
                        var64 = 0.026565675;
                    } else {
                        var64 = -0.06657636;
                    }
                }
            }
        }
    }
    var var65;
    if (input[7] < 0.7499105) {
        if (input[12] < 0.1957022) {
            if (input[13] < -0.08306877) {
                var65 = -0.17038429;
            } else {
                if (input[14] < 2.163571) {
                    if (input[15] < 0.02034447) {
                        var65 = -0.034352295;
                    } else {
                        var65 = -0.1545347;
                    }
                } else {
                    if (input[16] < 0.1316423) {
                        var65 = 0.08556932;
                    } else {
                        var65 = -0.094630025;
                    }
                }
            }
        } else {
            if (input[11] < 2.338711) {
                if (input[17] < 2.221262) {
                    if (input[8] < 1.872957) {
                        var65 = 0.03716999;
                    } else {
                        var65 = -0.089264005;
                    }
                } else {
                    if (input[6] < -0.2961046) {
                        var65 = -0.021182798;
                    } else {
                        var65 = 0.17010608;
                    }
                }
            } else {
                if (input[12] < 0.2027505) {
                    var65 = 0.08835347;
                } else {
                    if (input[7] < -0.03780366) {
                        var65 = -0.021307228;
                    } else {
                        var65 = -0.14947684;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.6613371) {
            var65 = -0.042639624;
        } else {
            var65 = 0.12683865;
        }
    }
    var var66;
    if (input[6] < -0.2843558) {
        if (input[5] < 1.840605) {
            var66 = 0.11049529;
        } else {
            if (input[11] < 2.100331) {
                if (input[3] < -0.6613371) {
                    var66 = -0.13760972;
                } else {
                    if (input[0] < -0.5713729) {
                        var66 = -0.09320166;
                    } else {
                        var66 = 0.09123559;
                    }
                }
            } else {
                if (input[10] < 0.09503446) {
                    var66 = -0.103295766;
                } else {
                    if (input[9] < 0.0916569) {
                        var66 = 0.14399865;
                    } else {
                        var66 = -0.02398084;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.2624162) {
            if (input[14] < 1.823543) {
                if (input[9] < 0.1494376) {
                    var66 = 0.107949115;
                } else {
                    var66 = -0.012519737;
                }
            } else {
                if (input[1] < 0.1279088) {
                    if (input[0] < -0.2225301) {
                        var66 = -0.055405993;
                    } else {
                        var66 = -0.19855352;
                    }
                } else {
                    if (input[14] < 2.339654) {
                        var66 = 0.06791737;
                    } else {
                        var66 = -0.086969234;
                    }
                }
            }
        } else {
            if (input[14] < 2.330391) {
                if (input[13] < -0.1007832) {
                    if (input[7] < -0.05629134) {
                        var66 = -0.03585536;
                    } else {
                        var66 = 0.13501754;
                    }
                } else {
                    var66 = -0.11997347;
                }
            } else {
                if (input[13] < -0.08306877) {
                    if (input[10] < 0.09266941) {
                        var66 = 0.0969913;
                    } else {
                        var66 = -0.08220702;
                    }
                } else {
                    if (input[13] < -0.06590132) {
                        var66 = 0.16072081;
                    } else {
                        var66 = 0.011112237;
                    }
                }
            }
        }
    }
    var var67;
    if (input[7] < 0.7499105) {
        if (input[12] < 0.1957022) {
            if (input[13] < -0.08306877) {
                var67 = -0.14436457;
            } else {
                if (input[14] < 2.163571) {
                    if (input[15] < 0.02034447) {
                        var67 = -0.029717753;
                    } else {
                        var67 = -0.1430625;
                    }
                } else {
                    if (input[15] < -0.1583239) {
                        var67 = -0.08750128;
                    } else {
                        var67 = 0.06262935;
                    }
                }
            }
        } else {
            if (input[6] < -0.2013385) {
                if (input[4] < 0.1263173) {
                    if (input[8] < 1.345888) {
                        var67 = 0.05969071;
                    } else {
                        var67 = -0.08095666;
                    }
                } else {
                    if (input[3] < -0.3035052) {
                        var67 = -0.057593636;
                    } else {
                        var67 = 0.09880523;
                    }
                }
            } else {
                if (input[12] < 0.2390534) {
                    var67 = 0.16497211;
                } else {
                    if (input[6] < -0.1233842) {
                        var67 = -0.099017486;
                    } else {
                        var67 = 0.013160964;
                    }
                }
            }
        }
    } else {
        if (input[5] < 1.872065) {
            var67 = 0.11231292;
        } else {
            var67 = -0.025988832;
        }
    }
    var var68;
    if (input[0] < -0.2171254) {
        if (input[8] < 1.769218) {
            if (input[0] < -0.2390407) {
                if (input[1] < 0.5319865) {
                    var68 = 0.1447091;
                } else {
                    if (input[16] < 0.1240764) {
                        var68 = -0.040053427;
                    } else {
                        var68 = 0.06411321;
                    }
                }
            } else {
                if (input[14] < 1.823543) {
                    var68 = 0.062222682;
                } else {
                    var68 = -0.12124162;
                }
            }
        } else {
            if (input[17] < 2.312668) {
                if (input[14] < 2.33749) {
                    if (input[5] < 2.114625) {
                        var68 = -0.069400676;
                    } else {
                        var68 = 0.06557936;
                    }
                } else {
                    var68 = -0.14944382;
                }
            } else {
                var68 = 0.048718385;
            }
        }
    } else {
        if (input[9] < 0.09431899) {
            if (input[11] < 2.338711) {
                var68 = 0.16176926;
            } else {
                var68 = 0.04080095;
            }
        } else {
            if (input[1] < 0.2119927) {
                if (input[6] < -0.1836796) {
                    if (input[6] < -0.2374482) {
                        var68 = -0.01911442;
                    } else {
                        var68 = -0.17337096;
                    }
                } else {
                    if (input[16] < -0.3970566) {
                        var68 = 0.10489237;
                    } else {
                        var68 = -0.08822226;
                    }
                }
            } else {
                var68 = 0.092555955;
            }
        }
    }
    var var69;
    if (input[17] < 1.782863) {
        var69 = -0.06388905;
    } else {
        if (input[0] < -0.2171254) {
            if (input[1] < -0.1979605) {
                var69 = 0.09235882;
            } else {
                if (input[15] < 0.260144) {
                    if (input[9] < 0.0916569) {
                        var69 = 0.037402254;
                    } else {
                        var69 = -0.075224675;
                    }
                } else {
                    if (input[1] < 0.1250326) {
                        var69 = -0.0997211;
                    } else {
                        var69 = 0.04830841;
                    }
                }
            }
        } else {
            if (input[9] < 0.09431899) {
                if (input[3] < -0.2333756) {
                    var69 = 0.031140147;
                } else {
                    var69 = 0.15546536;
                }
            } else {
                if (input[1] < 0.2119927) {
                    if (input[7] < -0.05629134) {
                        var69 = 0.05267886;
                    } else {
                        var69 = -0.11815174;
                    }
                } else {
                    var69 = 0.07955375;
                }
            }
        }
    }
    var var70;
    if (input[15] < 0.2070191) {
        if (input[9] < -0.01030248) {
            if (input[1] < 0.5201896) {
                var70 = 0.107884906;
            } else {
                if (input[5] < 1.872065) {
                    var70 = 0.04319104;
                } else {
                    if (input[14] < 2.159554) {
                        var70 = -0.11048925;
                    } else {
                        var70 = -0.015693786;
                    }
                }
            }
        } else {
            if (input[17] < 2.36024) {
                var70 = -0.15792345;
            } else {
                var70 = 0.022934685;
            }
        }
    } else {
        if (input[15] < 0.260144) {
            if (input[12] < 0.2037675) {
                var70 = 0.1398859;
            } else {
                if (input[0] < -0.2171254) {
                    var70 = -0.06013988;
                } else {
                    var70 = 0.06819397;
                }
            }
        } else {
            if (input[9] < 0.08342929) {
                var70 = -0.116290286;
            } else {
                if (input[9] < 0.08887912) {
                    if (input[4] < 0.1565651) {
                        var70 = -0.012377239;
                    } else {
                        var70 = 0.17634352;
                    }
                } else {
                    if (input[6] < -0.1836796) {
                        var70 = -0.046203863;
                    } else {
                        var70 = 0.06325573;
                    }
                }
            }
        }
    }
    var var71;
    if (input[15] < -0.1492399) {
        if (input[17] < 2.181995) {
            var71 = 0.011032917;
        } else {
            var71 = -0.12724997;
        }
    } else {
        if (input[4] < 0.6405324) {
            if (input[11] < 2.21862) {
                if (input[11] < 1.776376) {
                    if (input[8] < 1.345888) {
                        var71 = 0.09172259;
                    } else {
                        var71 = -0.03167028;
                    }
                } else {
                    if (input[15] < 0.02034447) {
                        var71 = 0.048605077;
                    } else {
                        var71 = -0.12030828;
                    }
                }
            } else {
                if (input[0] < -0.2150551) {
                    if (input[15] < 0.2627702) {
                        var71 = 0.028108956;
                    } else {
                        var71 = -0.078163855;
                    }
                } else {
                    if (input[14] < 2.332517) {
                        var71 = 0.16995212;
                    } else {
                        var71 = -0.004374744;
                    }
                }
            }
        } else {
            var71 = 0.08356063;
        }
    }
    var var72;
    if (input[15] < -0.1492399) {
        if (input[10] < 0.5427776) {
            var72 = -0.11127147;
        } else {
            var72 = 0.015040661;
        }
    } else {
        if (input[9] < 0.08887912) {
            if (input[17] < 2.216262) {
                if (input[1] < 0.1166833) {
                    var72 = -0.08482324;
                } else {
                    if (input[1] < 0.5243564) {
                        var72 = 0.10660382;
                    } else {
                        var72 = -0.01683327;
                    }
                }
            } else {
                if (input[7] < 0.02380546) {
                    var72 = -0.017076787;
                } else {
                    var72 = 0.15307501;
                }
            }
        } else {
            if (input[7] < -0.03780366) {
                if (input[12] < 0.2558995) {
                    if (input[3] < -0.2486025) {
                        var72 = 0.02266378;
                    } else {
                        var72 = 0.12137716;
                    }
                } else {
                    var72 = -0.051460266;
                }
            } else {
                if (input[2] < 2.290732) {
                    if (input[0] < -0.1994369) {
                        var72 = -0.13504852;
                    } else {
                        var72 = 0.03149515;
                    }
                } else {
                    if (input[14] < 2.33749) {
                        var72 = 0.09863912;
                    } else {
                        var72 = -0.049678057;
                    }
                }
            }
        }
    }
    var var73;
    if (input[12] < 0.1957022) {
        if (input[13] < -0.08306877) {
            var73 = -0.121361926;
        } else {
            if (input[14] < 2.15698) {
                if (input[7] < 0.7499105) {
                    var73 = -0.0934899;
                } else {
                    var73 = -0.00035894557;
                }
            } else {
                if (input[16] < 0.1316423) {
                    if (input[10] < 0.537762) {
                        var73 = 0.008855457;
                    } else {
                        var73 = 0.13576375;
                    }
                } else {
                    var73 = -0.058496334;
                }
            }
        }
    } else {
        if (input[15] < 0.2447102) {
            var73 = -0.05645373;
        } else {
            if (input[15] < 0.260144) {
                if (input[1] < 0.09913446) {
                    var73 = 0.002235946;
                } else {
                    var73 = 0.14804299;
                }
            } else {
                if (input[6] < -0.2076645) {
                    if (input[12] < 0.22606) {
                        var73 = -0.07603857;
                    } else {
                        var73 = 0.07402801;
                    }
                } else {
                    if (input[12] < 0.2390534) {
                        var73 = 0.13215278;
                    } else {
                        var73 = -0.03766806;
                    }
                }
            }
        }
    }
    var var74;
    if (input[15] < 0.2070191) {
        if (input[10] < 0.5393569) {
            if (input[16] < 0.01115781) {
                if (input[6] < -0.265884) {
                    var74 = 0.038616095;
                } else {
                    var74 = -0.04154126;
                }
            } else {
                var74 = -0.12705676;
            }
        } else {
            if (input[11] < 2.100331) {
                if (input[5] < 1.872065) {
                    var74 = 0.047920644;
                } else {
                    var74 = -0.09477381;
                }
            } else {
                var74 = 0.10697933;
            }
        }
    } else {
        if (input[9] < 0.08342929) {
            var74 = -0.05482541;
        } else {
            if (input[9] < 0.08887912) {
                if (input[4] < 0.1057011) {
                    var74 = 0.012427175;
                } else {
                    var74 = 0.15863553;
                }
            } else {
                if (input[1] < 0.1917008) {
                    if (input[16] < -0.280997) {
                        var74 = 0.015818294;
                    } else {
                        var74 = -0.075794;
                    }
                } else {
                    var74 = 0.08103806;
                }
            }
        }
    }
    var var75;
    if (input[15] < -0.1492399) {
        if (input[10] < 0.5440668) {
            var75 = -0.09142594;
        } else {
            var75 = 0.012696026;
        }
    } else {
        if (input[2] < 2.485894) {
            if (input[11] < 2.423716) {
                if (input[7] < 0.3255192) {
                    if (input[7] < 0.1043526) {
                        var75 = 0.01724321;
                    } else {
                        var75 = -0.06174569;
                    }
                } else {
                    if (input[15] < 0.2627702) {
                        var75 = 0.08798584;
                    } else {
                        var75 = -0.026497645;
                    }
                }
            } else {
                var75 = -0.1266759;
            }
        } else {
            var75 = 0.075147696;
        }
    }
    var var76;
    if (input[3] < -0.2624162) {
        if (input[15] < 0.2785565) {
            if (input[1] < 0.1062806) {
                var76 = -0.1520336;
            } else {
                if (input[14] < 2.33749) {
                    if (input[1] < 0.5201896) {
                        var76 = 0.1396046;
                    } else {
                        var76 = -0.05011342;
                    }
                } else {
                    if (input[17] < 2.312668) {
                        var76 = -0.15903626;
                    } else {
                        var76 = 0.035751596;
                    }
                }
            }
        } else {
            if (input[16] < -0.5376349) {
                var76 = -0.022559809;
            } else {
                var76 = 0.08585058;
            }
        }
    } else {
        if (input[2] < 2.135387) {
            var76 = -0.050634146;
        } else {
            if (input[9] < 0.0867674) {
                if (input[5] < 2.076874) {
                    var76 = -0.06566206;
                } else {
                    var76 = 0.007873049;
                }
            } else {
                if (input[11] < 2.338711) {
                    if (input[3] < -0.2405156) {
                        var76 = 0.04636991;
                    } else {
                        var76 = 0.18345448;
                    }
                } else {
                    if (input[12] < 0.2027505) {
                        var76 = 0.06850862;
                    } else {
                        var76 = -0.06449407;
                    }
                }
            }
        }
    }
    var var77;
    if (input[0] < -0.5713729) {
        var77 = -0.050700095;
    } else {
        if (input[9] < -0.02381299) {
            if (input[3] < -0.6613371) {
                var77 = -0.016851613;
            } else {
                var77 = 0.12106858;
            }
        } else {
            if (input[15] < 0.09973165) {
                var77 = -0.09829337;
            } else {
                if (input[1] < 0.1917008) {
                    if (input[16] < -0.2649003) {
                        var77 = 0.012724895;
                    } else {
                        var77 = -0.08360505;
                    }
                } else {
                    if (input[17] < 2.280328) {
                        var77 = -0.0027273055;
                    } else {
                        var77 = 0.094023444;
                    }
                }
            }
        }
    }
    var var78;
    if (input[3] < -0.2624162) {
        if (input[0] < -0.2202836) {
            if (input[0] < -0.2273137) {
                if (input[5] < 1.839811) {
                    var78 = 0.059884768;
                } else {
                    if (input[1] < 0.5799901) {
                        var78 = -0.06309697;
                    } else {
                        var78 = 0.044834718;
                    }
                }
            } else {
                if (input[10] < 0.09503446) {
                    var78 = -0.03212075;
                } else {
                    var78 = 0.11485122;
                }
            }
        } else {
            if (input[17] < 1.81195) {
                var78 = 0.025776094;
            } else {
                if (input[6] < -0.2676863) {
                    var78 = -0.013902659;
                } else {
                    var78 = -0.13686103;
                }
            }
        }
    } else {
        if (input[8] < 1.829246) {
            if (input[6] < -0.1756872) {
                var78 = -0.07205083;
            } else {
                var78 = 0.018354608;
            }
        } else {
            if (input[0] < -0.2234754) {
                var78 = -0.030926263;
            } else {
                if (input[9] < 0.09353288) {
                    if (input[12] < 0.1957022) {
                        var78 = 0.03106443;
                    } else {
                        var78 = 0.15452129;
                    }
                } else {
                    var78 = 0.006173941;
                }
            }
        }
    }
    var var79;
    if (input[4] < 0.1458204) {
        if (input[12] < 0.1957022) {
            var79 = -0.08993563;
        } else {
            if (input[9] < 0.09226666) {
                if (input[6] < -0.2356659) {
                    var79 = -0.0131298425;
                } else {
                    var79 = 0.10690809;
                }
            } else {
                if (input[7] < -0.03780366) {
                    if (input[10] < -0.163907) {
                        var79 = -0.043296292;
                    } else {
                        var79 = 0.038523357;
                    }
                } else {
                    var79 = -0.100935064;
                }
            }
        }
    } else {
        if (input[6] < -0.1951485) {
            if (input[3] < -0.2639831) {
                if (input[6] < -0.2823387) {
                    if (input[11] < 2.100331) {
                        var79 = -0.028340269;
                    } else {
                        var79 = 0.08321987;
                    }
                } else {
                    var79 = -0.05162538;
                }
            } else {
                var79 = 0.11707773;
            }
        } else {
            var79 = -0.058946453;
        }
    }
    var var80;
    if (input[10] < 0.1899946) {
        if (input[16] < -0.2547897) {
            if (input[17] < 2.229191) {
                if (input[5] < 2.076874) {
                    if (input[6] < -0.1629876) {
                        var80 = -0.031721234;
                    } else {
                        var80 = 0.056714743;
                    }
                } else {
                    var80 = 0.119928144;
                }
            } else {
                if (input[2] < 2.268299) {
                    var80 = 0.061492063;
                } else {
                    if (input[2] < 2.290732) {
                        var80 = -0.13058503;
                    } else {
                        var80 = -0.0028572902;
                    }
                }
            }
        } else {
            var80 = -0.10882982;
        }
    } else {
        if (input[13] < 0.2633481) {
            if (input[6] < -0.2356659) {
                var80 = 0.09877748;
            } else {
                var80 = -0.001247678;
            }
        } else {
            if (input[10] < 0.5393569) {
                var80 = -0.10229121;
            } else {
                if (input[14] < 2.15698) {
                    var80 = -0.038342208;
                } else {
                    if (input[17] < 2.163425) {
                        var80 = 0.12917188;
                    } else {
                        var80 = -0.009281236;
                    }
                }
            }
        }
    }
    var var81;
    if (input[14] < 2.150301) {
        if (input[16] < -0.436978) {
            if (input[11] < 1.776376) {
                if (input[8] < 1.362287) {
                    var81 = 0.095465735;
                } else {
                    var81 = -0.008304387;
                }
            } else {
                var81 = -0.055607293;
            }
        } else {
            if (input[1] < 0.3764161) {
                var81 = -0.1257432;
            } else {
                var81 = 0.0029671649;
            }
        }
    } else {
        if (input[10] < 0.5393569) {
            if (input[0] < -0.2273137) {
                if (input[17] < 2.26667) {
                    var81 = -0.12580706;
                } else {
                    var81 = -0.012338344;
                }
            } else {
                if (input[17] < 2.229191) {
                    if (input[0] < -0.2225301) {
                        var81 = -0.0037456919;
                    } else {
                        var81 = 0.13461445;
                    }
                } else {
                    if (input[1] < 0.1062806) {
                        var81 = -0.079989254;
                    } else {
                        var81 = 0.02261396;
                    }
                }
            }
        } else {
            if (input[12] < -0.13244) {
                var81 = -0.0129383765;
            } else {
                var81 = 0.10462109;
            }
        }
    }
    var var82;
    if (input[3] < -0.2500715) {
        if (input[0] < -0.2202836) {
            if (input[0] < -0.2265281) {
                if (input[2] < 2.016949) {
                    if (input[17] < 2.124743) {
                        var82 = -0.0023779082;
                    } else {
                        var82 = 0.077610284;
                    }
                } else {
                    if (input[17] < 2.26667) {
                        var82 = -0.10518163;
                    } else {
                        var82 = 0.022546979;
                    }
                }
            } else {
                if (input[10] < 0.09503446) {
                    var82 = -0.020144708;
                } else {
                    var82 = 0.111735895;
                }
            }
        } else {
            if (input[17] < 2.228156) {
                var82 = 0.008188193;
            } else {
                if (input[6] < -0.2600288) {
                    var82 = -0.005170974;
                } else {
                    var82 = -0.14413999;
                }
            }
        }
    } else {
        if (input[14] < 2.330391) {
            if (input[0] < -0.2210851) {
                var82 = -0.07864431;
            } else {
                var82 = 0.03687368;
            }
        } else {
            if (input[8] < 1.860754) {
                var82 = -0.008012323;
            } else {
                var82 = 0.0876127;
            }
        }
    }
    var var83;
    if (input[4] < -0.30834) {
        var83 = 0.047914237;
    } else {
        if (input[7] < -0.1970546) {
            var83 = -0.080101065;
        } else {
            if (input[7] < -0.09459233) {
                var83 = 0.06063761;
            } else {
                if (input[4] < 0.1458204) {
                    if (input[6] < -0.1996946) {
                        var83 = -0.06557899;
                    } else {
                        var83 = 0.039941687;
                    }
                } else {
                    if (input[6] < -0.1951485) {
                        var83 = 0.02527627;
                    } else {
                        var83 = -0.052632127;
                    }
                }
            }
        }
    }
    var var84;
    if (input[3] < -0.2624162) {
        if (input[15] < 0.2921785) {
            if (input[1] < 0.1062806) {
                var84 = -0.112583764;
            } else {
                if (input[12] < 0.1934781) {
                    if (input[17] < 2.181995) {
                        var84 = 0.018972231;
                    } else {
                        var84 = -0.072689064;
                    }
                } else {
                    var84 = 0.055137035;
                }
            }
        } else {
            var84 = 0.048471946;
        }
    } else {
        if (input[2] < 2.135387) {
            var84 = -0.040354762;
        } else {
            if (input[0] < -0.2210851) {
                if (input[6] < -0.2339939) {
                    var84 = -0.076311104;
                } else {
                    var84 = 0.062033724;
                }
            } else {
                if (input[14] < 2.332517) {
                    var84 = 0.1497369;
                } else {
                    if (input[17] < 2.233836) {
                        var84 = -0.06958008;
                    } else {
                        var84 = 0.062509805;
                    }
                }
            }
        }
    }
    var var85;
    if (input[2] < 1.653515) {
        var85 = 0.051959626;
    } else {
        if (input[14] < 2.159554) {
            if (input[7] < 0.7499105) {
                if (input[17] < 2.064593) {
                    if (input[3] < -0.3303752) {
                        var85 = 0.070417434;
                    } else {
                        var85 = -0.06435647;
                    }
                } else {
                    var85 = -0.122348234;
                }
            } else {
                var85 = 0.01640567;
            }
        } else {
            if (input[12] < 0.2065493) {
                if (input[15] < 0.260144) {
                    if (input[16] < 0.1278299) {
                        var85 = 0.10908528;
                    } else {
                        var85 = -0.0435067;
                    }
                } else {
                    if (input[1] < 0.1134226) {
                        var85 = -0.067556016;
                    } else {
                        var85 = 0.043516256;
                    }
                }
            } else {
                var85 = -0.07677593;
            }
        }
    }
    var var86;
    if (input[3] < -0.2624162) {
        if (input[15] < 0.2842217) {
            if (input[1] < 0.1062806) {
                var86 = -0.11593394;
            } else {
                if (input[14] < 2.33749) {
                    if (input[1] < 0.5201896) {
                        var86 = 0.112193055;
                    } else {
                        var86 = -0.0462024;
                    }
                } else {
                    if (input[11] < 2.530046) {
                        var86 = -0.10926702;
                    } else {
                        var86 = 0.033906735;
                    }
                }
            }
        } else {
            if (input[8] < 1.345888) {
                var86 = 0.0841029;
            } else {
                var86 = -0.017020252;
            }
        }
    } else {
        if (input[6] < -0.1332386) {
            if (input[15] < 0.2627702) {
                if (input[6] < -0.2356659) {
                    var86 = -0.0009347737;
                } else {
                    var86 = 0.10403215;
                }
            } else {
                if (input[8] < 1.860754) {
                    var86 = -0.062123027;
                } else {
                    var86 = 0.044296492;
                }
            }
        } else {
            var86 = -0.03481677;
        }
    }
    var var87;
    if (input[9] < 0.08887912) {
        if (input[16] < -0.2649003) {
            if (input[4] < 0.0339947) {
                var87 = 0.010319525;
            } else {
                var87 = 0.11762053;
            }
        } else {
            if (input[4] < 0.3272637) {
                if (input[15] < 0.03288612) {
                    var87 = -0.015748575;
                } else {
                    var87 = -0.08663353;
                }
            } else {
                if (input[17] < 2.124743) {
                    var87 = -0.031059314;
                } else {
                    var87 = 0.08089909;
                }
            }
        }
    } else {
        if (input[7] < 0.1043526) {
            if (input[13] < -0.1073612) {
                if (input[16] < -0.4066954) {
                    if (input[6] < -0.1815607) {
                        var87 = -0.025390234;
                    } else {
                        var87 = 0.065165475;
                    }
                } else {
                    var87 = -0.07756667;
                }
            } else {
                var87 = 0.0695892;
            }
        } else {
            if (input[2] < 2.303731) {
                if (input[12] < 0.1957022) {
                    var87 = -0.14805502;
                } else {
                    var87 = 0.00083914626;
                }
            } else {
                if (input[11] < 2.400272) {
                    var87 = 0.05461407;
                } else {
                    var87 = -0.033274405;
                }
            }
        }
    }
    var var88;
    if (input[11] < 2.430201) {
        if (input[2] < 2.303731) {
            if (input[12] < 0.1957022) {
                if (input[15] < 0.0216704) {
                    if (input[0] < -0.5713729) {
                        var88 = -0.045105763;
                    } else {
                        var88 = 0.06681284;
                    }
                } else {
                    var88 = -0.118239604;
                }
            } else {
                if (input[9] < 0.09226666) {
                    if (input[0] < -0.2217615) {
                        var88 = 0.009585299;
                    } else {
                        var88 = 0.10661007;
                    }
                } else {
                    if (input[6] < -0.1996946) {
                        var88 = -0.04796236;
                    } else {
                        var88 = 0.041332982;
                    }
                }
            }
        } else {
            var88 = 0.055952035;
        }
    } else {
        var88 = -0.040693194;
    }
    var var89;
    if (input[12] < 0.2558995) {
        if (input[5] < 1.839811) {
            if (input[3] < -0.3327239) {
                var89 = 0.10647589;
            } else {
                if (input[5] < 1.457887) {
                    var89 = 0.036071226;
                } else {
                    var89 = -0.04033362;
                }
            }
        } else {
            if (input[3] < -0.6613371) {
                var89 = -0.08204952;
            } else {
                if (input[4] < 0.3590814) {
                    if (input[14] < 2.324444) {
                        var89 = -0.06855286;
                    } else {
                        var89 = 0.007832716;
                    }
                } else {
                    var89 = 0.06928318;
                }
            }
        }
    } else {
        var89 = -0.041607406;
    }
    var var90;
    if (input[10] < 0.1899946) {
        if (input[14] < 2.33749) {
            if (input[9] < 0.09038337) {
                if (input[9] < 0.08342929) {
                    var90 = -0.03332138;
                } else {
                    if (input[7] < 0.2343174) {
                        var90 = -0.0010392884;
                    } else {
                        var90 = 0.1225033;
                    }
                }
            } else {
                if (input[6] < -0.1836796) {
                    if (input[7] < -0.06350213) {
                        var90 = 0.0059992406;
                    } else {
                        var90 = -0.08399694;
                    }
                } else {
                    var90 = 0.03576295;
                }
            }
        } else {
            var90 = -0.090605855;
        }
    } else {
        if (input[13] < 0.2633481) {
            if (input[7] < 0.2725033) {
                var90 = 0.08702886;
            } else {
                var90 = 0.01171792;
            }
        } else {
            if (input[16] < 0.1167921) {
                var90 = -0.071952194;
            } else {
                if (input[10] < 0.5454574) {
                    var90 = -0.020347234;
                } else {
                    var90 = 0.054602586;
                }
            }
        }
    }
    var var91;
    if (input[10] < -0.163907) {
        var91 = -0.04694861;
    } else {
        if (input[17] < 2.010259) {
            if (input[4] < -0.1958025) {
                var91 = -0.003349555;
            } else {
                var91 = 0.07962902;
            }
        } else {
            if (input[12] < 0.2065493) {
                if (input[14] < 2.15698) {
                    var91 = -0.061160993;
                } else {
                    if (input[15] < 0.260144) {
                        var91 = 0.058957666;
                    } else {
                        var91 = -0.018656217;
                    }
                }
            } else {
                var91 = -0.0808528;
            }
        }
    }
    var var92;
    if (input[3] < -0.2624162) {
        if (input[8] < 1.854954) {
            if (input[14] < 2.15698) {
                if (input[15] < 0.2868239) {
                    if (input[14] < 2.14823) {
                        var92 = -0.07779134;
                    } else {
                        var92 = 0.0025556576;
                    }
                } else {
                    if (input[16] < -0.5376349) {
                        var92 = -0.018158264;
                    } else {
                        var92 = 0.07529101;
                    }
                }
            } else {
                var92 = 0.06741564;
            }
        } else {
            if (input[17] < 2.280328) {
                if (input[12] < 0.1934781) {
                    var92 = -0.10384773;
                } else {
                    var92 = -0.019971535;
                }
            } else {
                var92 = 0.021919742;
            }
        }
    } else {
        if (input[14] < 2.330391) {
            if (input[13] < -0.1007832) {
                var92 = 0.023534177;
            } else {
                var92 = -0.0679286;
            }
        } else {
            if (input[13] < -0.08306877) {
                var92 = 0.0038713347;
            } else {
                var92 = 0.0840652;
            }
        }
    }
    var var93;
    if (input[11] < 2.430201) {
        if (input[1] < 0.1134226) {
            if (input[13] < -0.1007832) {
                if (input[1] < 0.09913446) {
                    if (input[16] < -0.3901946) {
                        var93 = 0.015981127;
                    } else {
                        var93 = -0.078408495;
                    }
                } else {
                    var93 = 0.07081161;
                }
            } else {
                var93 = -0.05865415;
            }
        } else {
            if (input[1] < 0.5201896) {
                if (input[15] < 0.2627702) {
                    var93 = 0.120641045;
                } else {
                    var93 = -0.030680139;
                }
            } else {
                if (input[5] < 1.872065) {
                    var93 = 0.02806379;
                } else {
                    var93 = -0.06190421;
                }
            }
        }
    } else {
        var93 = -0.04209412;
    }
    var var94;
    if (input[0] < -0.5713729) {
        var94 = -0.04550314;
    } else {
        if (input[1] < 0.3889817) {
            if (input[15] < 0.248047) {
                var94 = -0.065601915;
            } else {
                if (input[15] < 0.260144) {
                    var94 = 0.061798442;
                } else {
                    if (input[11] < 1.771062) {
                        var94 = 0.044520523;
                    } else {
                        var94 = -0.03115791;
                    }
                }
            }
        } else {
            if (input[6] < -0.6765319) {
                var94 = 0.00006638812;
            } else {
                var94 = 0.0743793;
            }
        }
    }
    var var95;
    if (input[3] < -0.2500715) {
        if (input[0] < -0.2202836) {
            if (input[16] < -0.01060963) {
                if (input[1] < 0.1134226) {
                    if (input[17] < 1.87981) {
                        var95 = 0.047060423;
                    } else {
                        var95 = -0.07529434;
                    }
                } else {
                    var95 = 0.08147901;
                }
            } else {
                if (input[2] < 2.021461) {
                    if (input[14] < 2.15698) {
                        var95 = -0.03301418;
                    } else {
                        var95 = 0.07063923;
                    }
                } else {
                    var95 = -0.07560237;
                }
            }
        } else {
            if (input[9] < 0.1368448) {
                var95 = -0.07928738;
            } else {
                var95 = 0.012737725;
            }
        }
    } else {
        if (input[14] < 2.330391) {
            if (input[13] < -0.1043052) {
                var95 = 0.028810153;
            } else {
                var95 = -0.0452375;
            }
        } else {
            if (input[8] < 1.866611) {
                var95 = 0.009206303;
            } else {
                var95 = 0.076313406;
            }
        }
    }
    var var96;
    if (input[13] < -0.1127578) {
        if (input[11] < 1.776376) {
            if (input[8] < 1.345888) {
                var96 = 0.05973568;
            } else {
                var96 = -0.03159282;
            }
        } else {
            var96 = -0.075584754;
        }
    } else {
        if (input[0] < -0.2273137) {
            if (input[2] < 2.021461) {
                if (input[17] < 2.124743) {
                    var96 = -0.017798143;
                } else {
                    var96 = 0.06201481;
                }
            } else {
                if (input[17] < 2.26667) {
                    var96 = -0.10265571;
                } else {
                    var96 = 0.017456722;
                }
            }
        } else {
            if (input[9] < 0.08887912) {
                var96 = 0.07462705;
            } else {
                if (input[7] < -0.03166136) {
                    var96 = 0.07508797;
                } else {
                    if (input[16] < -0.2715628) {
                        var96 = -0.057721198;
                    } else {
                        var96 = 0.04136549;
                    }
                }
            }
        }
    }
    var var97;
    if (input[15] < -0.1492399) {
        var97 = -0.04234977;
    } else {
        if (input[4] < 0.6405324) {
            if (input[11] < 2.21862) {
                if (input[16] < -0.507953) {
                    if (input[8] < 1.345888) {
                        var97 = 0.052147288;
                    } else {
                        var97 = -0.030556567;
                    }
                } else {
                    if (input[1] < 0.2513219) {
                        var97 = -0.11170027;
                    } else {
                        var97 = 0.0051677804;
                    }
                }
            } else {
                if (input[0] < -0.2150551) {
                    if (input[12] < 0.2027505) {
                        var97 = 0.01633633;
                    } else {
                        var97 = -0.0674853;
                    }
                } else {
                    if (input[1] < 0.1180685) {
                        var97 = 0.09000248;
                    } else {
                        var97 = 0.0076637124;
                    }
                }
            }
        } else {
            var97 = 0.06381364;
        }
    }
    var var98;
    if (input[0] < -0.1994369) {
        if (input[11] < 2.338711) {
            if (input[17] < 2.217906) {
                if (input[2] < 2.021461) {
                    if (input[0] < -0.2390407) {
                        var98 = 0.037123982;
                    } else {
                        var98 = -0.027897248;
                    }
                } else {
                    var98 = -0.067029364;
                }
            } else {
                if (input[9] < 0.08887912) {
                    var98 = 0.0877058;
                } else {
                    if (input[2] < 2.296302) {
                        var98 = -0.018221872;
                    } else {
                        var98 = 0.013898998;
                    }
                }
            }
        } else {
            if (input[17] < 2.374795) {
                var98 = -0.07765793;
            } else {
                var98 = 0.012671926;
            }
        }
    } else {
        var98 = 0.03537163;
    }
    var var99;
    if (input[15] < 0.248047) {
        if (input[1] < 0.3717174) {
            var99 = -0.06990742;
        } else {
            if (input[0] < -0.5713729) {
                var99 = -0.04331222;
            } else {
                if (input[15] < 0.0216704) {
                    var99 = 0.051974732;
                } else {
                    var99 = -0.012040082;
                }
            }
        }
    } else {
        if (input[15] < 0.260144) {
            var99 = 0.061563082;
        } else {
            if (input[6] < -0.2076645) {
                if (input[1] < 0.1134226) {
                    if (input[10] < -0.135542) {
                        var99 = 0.0011882744;
                    } else {
                        var99 = -0.09743533;
                    }
                } else {
                    var99 = 0.0370292;
                }
            } else {
                if (input[12] < 0.2390534) {
                    if (input[1] < 0.1087692) {
                        var99 = 0.109546445;
                    } else {
                        var99 = -0.010684538;
                    }
                } else {
                    var99 = -0.030978426;
                }
            }
        }
    }
    var var100;
    var100 = sigmoid(var0 + var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 + var12 + var13 + var14 + var15 + var16 + var17 + var18 + var19 + var20 + var21 + var22 + var23 + var24 + var25 + var26 + var27 + var28 + var29 + var30 + var31 + var32 + var33 + var34 + var35 + var36 + var37 + var38 + var39 + var40 + var41 + var42 + var43 + var44 + var45 + var46 + var47 + var48 + var49 + var50 + var51 + var52 + var53 + var54 + var55 + var56 + var57 + var58 + var59 + var60 + var61 + var62 + var63 + var64 + var65 + var66 + var67 + var68 + var69 + var70 + var71 + var72 + var73 + var74 + var75 + var76 + var77 + var78 + var79 + var80 + var81 + var82 + var83 + var84 + var85 + var86 + var87 + var88 + var89 + var90 + var91 + var92 + var93 + var94 + var95 + var96 + var97 + var98 + var99);
    return [1.0 - var100, var100];
}
function sigmoid(x) {
    if (x < 0.0) {
        var z = Math.exp(x);
        return z / (1.0 + z);
    }
    return 1.0 / (1.0 + Math.exp(-x));
}

    return score(features);
}
