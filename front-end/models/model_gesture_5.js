// XGBoost Model for Gesture 5: ShoulderAbductionRight
// Accuracy: 99.92%
// Precision: 99.92%
// Recall: 99.92%
// F1 Score: 99.92%
// Trained on 19959 samples

export function evaluateGesture5(features) {
function score(input) {
    var var0;
    if (input[13] < -0.07274116) {
        if (input[17] < 2.1041) {
            if (input[5] < 2.193436) {
                if (input[5] < 2.145476) {
                    var0 = -0.58032787;
                } else {
                    var0 = -0.15;
                }
            } else {
                if (input[9] < 0.06079511) {
                    var0 = -0.5657143;
                } else {
                    if (input[8] < 2.131901) {
                        var0 = 0.32682928;
                    } else {
                        var0 = 0.58064514;
                    }
                }
            }
        } else {
            var0 = -0.59841275;
        }
    } else {
        if (input[0] < -0.4073731) {
            if (input[2] < 2.039698) {
                var0 = 0.5927052;
            } else {
                var0 = -0.59607846;
            }
        } else {
            if (input[12] < 0.2707952) {
                if (input[6] < -0.1039719) {
                    if (input[1] < 0.1324077) {
                        var0 = -0.45000002;
                    } else {
                        var0 = 0.56801796;
                    }
                } else {
                    if (input[4] < 0.1081766) {
                        var0 = -0.52000004;
                    } else {
                        var0 = 0.44000003;
                    }
                }
            } else {
                if (input[16] < 0.1698005) {
                    if (input[10] < 0.3771095) {
                        var0 = 0.22999507;
                    } else {
                        var0 = 0.592278;
                    }
                } else {
                    if (input[2] < 2.427473) {
                        var0 = -0.5865922;
                    } else {
                        var0 = 0.3;
                    }
                }
            }
        }
    }
    var var1;
    if (input[13] < -0.0676212) {
        if (input[17] < 2.118808) {
            if (input[16] < -0.2879585) {
                if (input[0] < -0.193547) {
                    var1 = -0.36795965;
                } else {
                    if (input[5] < 2.335806) {
                        var1 = 0.47823307;
                    } else {
                        var1 = 0.028711345;
                    }
                }
            } else {
                if (input[11] < 2.311251) {
                    if (input[1] < -0.05124176) {
                        var1 = 0.4049904;
                    } else {
                        var1 = -0.4356264;
                    }
                } else {
                    if (input[13] < -0.07274116) {
                        var1 = 0.43462467;
                    } else {
                        var1 = -0.03871205;
                    }
                }
            }
        } else {
            if (input[1] < 0.1928905) {
                var1 = -0.46354946;
            } else {
                var1 = 0.37459093;
            }
        }
    } else {
        if (input[0] < -0.4073731) {
            if (input[2] < 2.039698) {
                var1 = 0.45967975;
            } else {
                var1 = -0.46197307;
            }
        } else {
            if (input[17] < 2.392169) {
                if (input[2] < 2.361993) {
                    if (input[15] < 0.4465356) {
                        var1 = 0.43322036;
                    } else {
                        var1 = 0.0032175265;
                    }
                } else {
                    if (input[14] < 2.394536) {
                        var1 = -0.16937532;
                    } else {
                        var1 = 0.3412949;
                    }
                }
            } else {
                if (input[4] < -0.07610251) {
                    var1 = 0.1467788;
                } else {
                    var1 = 0.4739811;
                }
            }
        }
    }
    var var2;
    if (input[13] < -0.07274116) {
        if (input[17] < 2.099293) {
            if (input[5] < 2.210737) {
                if (input[0] < -0.193547) {
                    if (input[11] < 2.312862) {
                        var2 = -0.4230096;
                    } else {
                        var2 = 0.22901691;
                    }
                } else {
                    var2 = 0.33321106;
                }
            } else {
                if (input[9] < 0.06079511) {
                    var2 = -0.37659156;
                } else {
                    if (input[15] < 0.02246665) {
                        var2 = -0.066911265;
                    } else {
                        var2 = 0.37618953;
                    }
                }
            }
        } else {
            var2 = -0.40195972;
        }
    } else {
        if (input[0] < -0.4073731) {
            if (input[2] < 2.039698) {
                var2 = 0.39834115;
            } else {
                var2 = -0.40069407;
            }
        } else {
            if (input[17] < 2.392169) {
                if (input[14] < 2.453365) {
                    if (input[16] < 0.1698005) {
                        var2 = 0.28589746;
                    } else {
                        var2 = -0.32964304;
                    }
                } else {
                    if (input[6] < -0.1039719) {
                        var2 = -0.9816806;
                    } else {
                        var2 = -0.47694257;
                    }
                }
            } else {
                if (input[4] < -0.07610251) {
                    var2 = 0.12545772;
                } else {
                    var2 = 0.40837547;
                }
            }
        }
    }
    var var3;
    if (input[13] < -0.06343062) {
        if (input[17] < 2.124922) {
            if (input[16] < -0.2879585) {
                if (input[0] < -0.193547) {
                    var3 = -0.27115744;
                } else {
                    if (input[8] < 2.311369) {
                        var3 = 0.3868076;
                    } else {
                        var3 = -0.036881935;
                    }
                }
            } else {
                if (input[11] < 2.311251) {
                    if (input[17] < 2.092287) {
                        var3 = -0.4208641;
                    } else {
                        var3 = 0.22203591;
                    }
                } else {
                    if (input[5] < 2.224903) {
                        var3 = 0.035519604;
                    } else {
                        var3 = 0.35531428;
                    }
                }
            }
        } else {
            if (input[13] < -0.07274116) {
                var3 = -0.36777604;
            } else {
                var3 = 0.33609572;
            }
        }
    } else {
        if (input[0] < -0.4073731) {
            if (input[2] < 2.039698) {
                var3 = 0.36305818;
            } else {
                var3 = -0.36582747;
            }
        } else {
            if (input[12] < 0.2726088) {
                if (input[8] < 1.759382) {
                    if (input[14] < 2.090841) {
                        var3 = 0.3701475;
                    } else {
                        var3 = -1.2625962;
                    }
                } else {
                    if (input[6] < -0.2150403) {
                        var3 = 0.35336155;
                    } else {
                        var3 = 0.12771022;
                    }
                }
            } else {
                if (input[14] < 2.395218) {
                    if (input[2] < 2.360086) {
                        var3 = 0.30105108;
                    } else {
                        var3 = -0.22228555;
                    }
                } else {
                    var3 = 0.39439318;
                }
            }
        }
    }
    var var4;
    if (input[13] < -0.06343062) {
        if (input[17] < 2.124922) {
            if (input[16] < -0.2871848) {
                if (input[5] < 2.340198) {
                    if (input[0] < -0.193547) {
                        var4 = -0.24522655;
                    } else {
                        var4 = 0.3597614;
                    }
                } else {
                    var4 = -0.2950081;
                }
            } else {
                if (input[11] < 2.311251) {
                    if (input[14] < 2.212829) {
                        var4 = -0.42796052;
                    } else {
                        var4 = -0.051349472;
                    }
                } else {
                    if (input[13] < -0.07274116) {
                        var4 = 0.29142687;
                    } else {
                        var4 = -0.095629625;
                    }
                }
            }
        } else {
            if (input[13] < -0.07274116) {
                var4 = -0.34608504;
            } else {
                var4 = 0.30830842;
            }
        }
    } else {
        if (input[17] < 2.392169) {
            if (input[14] < 2.080204) {
                var4 = 0.35761952;
            } else {
                if (input[17] < 2.208495) {
                    if (input[17] < 2.043789) {
                        var4 = 0.21088067;
                    } else {
                        var4 = -0.1886922;
                    }
                } else {
                    if (input[2] < 2.445357) {
                        var4 = 0.2823869;
                    } else {
                        var4 = -0.12654734;
                    }
                }
            }
        } else {
            if (input[1] < 0.1575291) {
                var4 = 0.06377646;
            } else {
                var4 = 0.3504722;
            }
        }
    }
    var var5;
    if (input[13] < -0.06609396) {
        if (input[17] < 2.118808) {
            if (input[10] < -0.0814349) {
                var5 = 0.33966357;
            } else {
                if (input[11] < 2.311251) {
                    if (input[17] < 2.092287) {
                        var5 = -0.320648;
                    } else {
                        var5 = 0.2486612;
                    }
                } else {
                    if (input[5] < 2.224903) {
                        var5 = -0.030137988;
                    } else {
                        var5 = 0.30466798;
                    }
                }
            }
        } else {
            if (input[1] < 0.1928905) {
                var5 = -0.33204344;
            } else {
                var5 = 0.23109336;
            }
        }
    } else {
        if (input[17] < 2.392169) {
            if (input[14] < 2.080204) {
                var5 = 0.33973587;
            } else {
                if (input[14] < 2.453365) {
                    if (input[14] < 2.267532) {
                        var5 = -0.07856168;
                    } else {
                        var5 = 0.17558317;
                    }
                } else {
                    var5 = -0.5500269;
                }
            }
        } else {
            if (input[1] < 0.1575291) {
                var5 = 0.0549956;
            } else {
                var5 = 0.33531725;
            }
        }
    }
    var var6;
    if (input[17] < 2.506727) {
        if (input[14] < 2.509698) {
            if (input[14] < 2.080204) {
                var6 = 0.32756868;
            } else {
                if (input[14] < 2.395218) {
                    if (input[2] < 2.36542) {
                        var6 = 0.07744453;
                    } else {
                        var6 = -0.17496487;
                    }
                } else {
                    if (input[15] < 0.1128054) {
                        var6 = -0.15511596;
                    } else {
                        var6 = 0.34313044;
                    }
                }
            }
        } else {
            if (input[0] < -0.2372002) {
                if (input[10] < 0.1199769) {
                    var6 = -0.3206206;
                } else {
                    var6 = -0.105889894;
                }
            } else {
                var6 = -0.4402893;
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var6 = -0.2749487;
        } else {
            var6 = 0.32496402;
        }
    }
    var var7;
    if (input[17] < 2.506727) {
        if (input[14] < 2.080204) {
            var7 = 0.3189305;
        } else {
            if (input[6] < -0.687412) {
                if (input[11] < 2.059537) {
                    var7 = -0.045989256;
                } else {
                    if (input[9] < 0.09137361) {
                        var7 = 0.34340438;
                    } else {
                        var7 = 0.046622805;
                    }
                }
            } else {
                if (input[2] < 2.157903) {
                    if (input[11] < 2.003103) {
                        var7 = -1.1777725;
                    } else {
                        var7 = -0.31801227;
                    }
                } else {
                    if (input[2] < 2.463909) {
                        var7 = 0.07245439;
                    } else {
                        var7 = -0.31361994;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var7 = -0.25933617;
        } else {
            var7 = 0.3175572;
        }
    }
    var var8;
    if (input[17] < 2.506727) {
        if (input[14] < 2.080204) {
            var8 = 0.3125352;
        } else {
            if (input[6] < -0.687412) {
                if (input[11] < 2.059537) {
                    var8 = -0.036741834;
                } else {
                    if (input[5] < 2.35114) {
                        var8 = 0.32876226;
                    } else {
                        var8 = 0.03331117;
                    }
                }
            } else {
                if (input[2] < 2.160635) {
                    if (input[12] < -0.08893545) {
                        var8 = 0.30540407;
                    } else {
                        var8 = -0.31358626;
                    }
                } else {
                    if (input[1] < 0.4156412) {
                        var8 = -0.042607527;
                    } else {
                        var8 = 0.21868813;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var8 = -0.24401757;
        } else {
            var8 = 0.31214106;
        }
    }
    var var9;
    if (input[17] < 2.506727) {
        if (input[2] < 2.362514) {
            if (input[14] < 2.276239) {
                if (input[17] < 2.132056) {
                    if (input[14] < 2.229367) {
                        var9 = 0.16720693;
                    } else {
                        var9 = -0.19806372;
                    }
                } else {
                    if (input[2] < 2.000849) {
                        var9 = 0.20668346;
                    } else {
                        var9 = -0.31076783;
                    }
                }
            } else {
                var9 = 0.3226056;
            }
        } else {
            if (input[12] < 0.2961881) {
                if (input[12] < 0.2887456) {
                    if (input[17] < 2.324837) {
                        var9 = 0.116800085;
                    } else {
                        var9 = -0.27672583;
                    }
                } else {
                    if (input[10] < 0.3549885) {
                        var9 = 0.392432;
                    } else {
                        var9 = 0.06738577;
                    }
                }
            } else {
                if (input[14] < 2.389682) {
                    if (input[16] < -0.2857858) {
                        var9 = 0.34465516;
                    } else {
                        var9 = -0.49965447;
                    }
                } else {
                    var9 = 0.32397345;
                }
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var9 = -0.2287583;
        } else {
            var9 = 0.30803728;
        }
    }
    var var10;
    if (input[17] < 2.506727) {
        if (input[14] < 2.080204) {
            var10 = 0.30525103;
        } else {
            if (input[7] < 0.6411619) {
                if (input[6] < -0.468061) {
                    if (input[1] < 0.5416745) {
                        var10 = 0.08640158;
                    } else {
                        var10 = -0.1411876;
                    }
                } else {
                    if (input[2] < 2.361144) {
                        var10 = -0.023611182;
                    } else {
                        var10 = -0.3374426;
                    }
                }
            } else {
                if (input[15] < 0.3680492) {
                    if (input[11] < 2.059537) {
                        var10 = -0.23745227;
                    } else {
                        var10 = 0.3292164;
                    }
                } else {
                    if (input[12] < 0.2871916) {
                        var10 = -0.52269816;
                    } else {
                        var10 = 0.06580167;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var10 = -0.21357523;
        } else {
            var10 = 0.3047801;
        }
    }
    var var11;
    if (input[17] < 2.506727) {
        if (input[14] < 2.080204) {
            var11 = 0.30140975;
        } else {
            if (input[8] < 2.072749) {
                if (input[14] < 2.185909) {
                    if (input[1] < 0.5416745) {
                        var11 = 0.24763088;
                    } else {
                        var11 = -0.12853467;
                    }
                } else {
                    if (input[17] < 1.977121) {
                        var11 = -0.79778916;
                    } else {
                        var11 = -0.28307837;
                    }
                }
            } else {
                if (input[14] < 2.213901) {
                    if (input[2] < 2.34694) {
                        var11 = 0.2984814;
                    } else {
                        var11 = -0.4369674;
                    }
                } else {
                    if (input[2] < 2.36896) {
                        var11 = 0.2489388;
                    } else {
                        var11 = -0.016620753;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var11 = -0.19863477;
        } else {
            var11 = 0.30202863;
        }
    }
    var var12;
    if (input[17] < 2.506727) {
        if (input[4] < 0.4591033) {
            if (input[2] < 2.36896) {
                if (input[14] < 2.276239) {
                    if (input[14] < 2.229367) {
                        var12 = 0.054266404;
                    } else {
                        var12 = -0.2226521;
                    }
                } else {
                    if (input[5] < 2.406011) {
                        var12 = 0.30815732;
                    } else {
                        var12 = 0.11078157;
                    }
                }
            } else {
                if (input[15] < 0.1324204) {
                    if (input[1] < 0.5416745) {
                        var12 = -0.32133746;
                    } else {
                        var12 = -0.9784118;
                    }
                } else {
                    if (input[12] < 0.2965919) {
                        var12 = 0.14512694;
                    } else {
                        var12 = -0.40467885;
                    }
                }
            }
        } else {
            if (input[14] < 2.395218) {
                if (input[14] < 2.387166) {
                    if (input[0] < -0.1773417) {
                        var12 = 0.06754814;
                    } else {
                        var12 = 0.3195482;
                    }
                } else {
                    if (input[15] < 0.3864073) {
                        var12 = -0.27292615;
                    } else {
                        var12 = 0.27956378;
                    }
                }
            } else {
                var12 = 0.32396606;
            }
        }
    } else {
        if (input[13] < -0.0845275) {
            var12 = -0.18416426;
        } else {
            var12 = 0.29951495;
        }
    }
    var var13;
    if (input[8] < 2.37691) {
        if (input[6] < -0.687412) {
            if (input[15] < 0.1112356) {
                var13 = 0.30652118;
            } else {
                if (input[4] < 0.5223776) {
                    var13 = -0.11812269;
                } else {
                    var13 = 0.27322206;
                }
            }
        } else {
            if (input[7] < 0.6697765) {
                if (input[15] < 0.1923926) {
                    if (input[0] < -0.208584) {
                        var13 = -0.08873791;
                    } else {
                        var13 = -0.37575483;
                    }
                } else {
                    if (input[15] < 0.2867854) {
                        var13 = 0.29360703;
                    } else {
                        var13 = -0.04741632;
                    }
                }
            } else {
                if (input[13] < 0.3382076) {
                    if (input[15] < 0.3624902) {
                        var13 = 0.3263404;
                    } else {
                        var13 = 0.002035591;
                    }
                } else {
                    var13 = -0.380361;
                }
            }
        }
    } else {
        if (input[13] < -0.07274116) {
            var13 = -0.2616811;
        } else {
            var13 = 0.2975806;
        }
    }
    var var14;
    if (input[8] < 2.37691) {
        if (input[14] < 2.080204) {
            var14 = 0.29419917;
        } else {
            if (input[14] < 2.212829) {
                if (input[10] < 0.3771095) {
                    if (input[15] < 0.2867854) {
                        var14 = 0.0014353705;
                    } else {
                        var14 = -0.45350677;
                    }
                } else {
                    if (input[1] < 0.5355155) {
                        var14 = 0.27426115;
                    } else {
                        var14 = -0.1402199;
                    }
                }
            } else {
                if (input[0] < -0.1047257) {
                    if (input[12] < 0.2959216) {
                        var14 = 0.051131435;
                    } else {
                        var14 = -0.23025304;
                    }
                } else {
                    if (input[11] < 2.299158) {
                        var14 = 0.33269107;
                    } else {
                        var14 = -0.50893945;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.07274116) {
            var14 = -0.2504429;
        } else {
            if (input[4] < -0.01395812) {
                if (input[6] < -0.2862424) {
                    var14 = 0.1878979;
                } else {
                    var14 = -0.030806603;
                }
            } else {
                var14 = 0.29749975;
            }
        }
    }
    var var15;
    if (input[6] < -0.687412) {
        if (input[2] < 1.987562) {
            if (input[3] < -0.5606022) {
                var15 = 0.24301857;
            } else {
                var15 = -0.16784053;
            }
        } else {
            if (input[15] < 0.1424738) {
                var15 = 0.30233127;
            } else {
                var15 = 0.07145396;
            }
        }
    } else {
        if (input[8] < 2.072749) {
            if (input[14] < 2.090841) {
                if (input[12] < 0.05751292) {
                    if (input[1] < 0.5532211) {
                        var15 = 0.25081885;
                    } else {
                        var15 = -0.44389352;
                    }
                } else {
                    if (input[15] < 0.1137889) {
                        var15 = 0.120237626;
                    } else {
                        var15 = 0.34373918;
                    }
                }
            } else {
                if (input[17] < 1.976345) {
                    if (input[6] < -0.3969097) {
                        var15 = 0.29272294;
                    } else {
                        var15 = -0.42816526;
                    }
                } else {
                    if (input[0] < -0.1047257) {
                        var15 = -0.2693504;
                    } else {
                        var15 = 0.28116474;
                    }
                }
            }
        } else {
            if (input[14] < 2.213901) {
                if (input[2] < 2.34694) {
                    if (input[15] < 0.02246665) {
                        var15 = -0.13061209;
                    } else {
                        var15 = 0.29994616;
                    }
                } else {
                    if (input[17] < 2.099293) {
                        var15 = -0.3733938;
                    } else {
                        var15 = 0.045554962;
                    }
                }
            } else {
                if (input[11] < 2.297657) {
                    if (input[11] < 2.267864) {
                        var15 = -0.19389033;
                    } else {
                        var15 = 0.34611076;
                    }
                } else {
                    if (input[1] < 0.1371544) {
                        var15 = -0.21739484;
                    } else {
                        var15 = 0.0645067;
                    }
                }
            }
        }
    }
    var var16;
    if (input[8] < 2.37691) {
        if (input[5] < 2.382052) {
            if (input[7] < 0.7794421) {
                if (input[16] < 0.1698005) {
                    if (input[5] < 2.35651) {
                        var16 = 0.059499413;
                    } else {
                        var16 = -0.12720023;
                    }
                } else {
                    if (input[0] < -0.212242) {
                        var16 = 0.2430298;
                    } else {
                        var16 = -0.34352335;
                    }
                }
            } else {
                if (input[8] < 1.759382) {
                    if (input[3] < -0.4474456) {
                        var16 = -0.28333223;
                    } else {
                        var16 = -0.0016537046;
                    }
                } else {
                    if (input[11] < 2.397389) {
                        var16 = 0.19704658;
                    } else {
                        var16 = 0.38463852;
                    }
                }
            }
        } else {
            if (input[16] < 0.06642205) {
                if (input[15] < 0.1106069) {
                    if (input[1] < 0.05657833) {
                        var16 = -0.23968565;
                    } else {
                        var16 = -0.74714434;
                    }
                } else {
                    if (input[14] < 2.395218) {
                        var16 = -0.38506836;
                    } else {
                        var16 = -0.006113563;
                    }
                }
            } else {
                var16 = 0.3514475;
            }
        }
    } else {
        if (input[13] < -0.07274116) {
            var16 = -0.23001029;
        } else {
            if (input[4] < -0.01395812) {
                if (input[6] < -0.2862424) {
                    var16 = 0.16886011;
                } else {
                    var16 = -0.035935137;
                }
            } else {
                var16 = 0.29137534;
            }
        }
    }
    var var17;
    if (input[4] < -0.008444502) {
        if (input[10] < -0.1218003) {
            var17 = 0.2261721;
        } else {
            if (input[8] < 2.459374) {
                if (input[13] < -0.06343062) {
                    if (input[10] < 0.2094129) {
                        var17 = -0.25019425;
                    } else {
                        var17 = 0.13439211;
                    }
                } else {
                    var17 = -0.4471253;
                }
            } else {
                var17 = 0.17197652;
            }
        }
    } else {
        if (input[14] < 2.395218) {
            if (input[2] < 2.371025) {
                if (input[14] < 2.25484) {
                    if (input[17] < 2.134764) {
                        var17 = 0.047020048;
                    } else {
                        var17 = -0.26768488;
                    }
                } else {
                    var17 = 0.30339822;
                }
            } else {
                if (input[9] < 0.1707428) {
                    if (input[15] < 0.3811692) {
                        var17 = -0.14289905;
                    } else {
                        var17 = 0.17453468;
                    }
                } else {
                    if (input[14] < 2.391081) {
                        var17 = -0.4561308;
                    } else {
                        var17 = 0.18783748;
                    }
                }
            }
        } else {
            if (input[7] < 0.3278773) {
                if (input[15] < 0.1923926) {
                    if (input[2] < 2.367139) {
                        var17 = 0.2658559;
                    } else {
                        var17 = -0.20000912;
                    }
                } else {
                    if (input[7] < -0.04436951) {
                        var17 = 0.10242169;
                    } else {
                        var17 = 0.30591315;
                    }
                }
            } else {
                var17 = 0.30971974;
            }
        }
    }
    var var18;
    if (input[6] < -0.5024325) {
        if (input[5] < 2.358876) {
            if (input[14] < 2.386373) {
                if (input[17] < 2.051304) {
                    if (input[1] < 0.09855931) {
                        var18 = -0.19473805;
                    } else {
                        var18 = 0.29985327;
                    }
                } else {
                    if (input[6] < -0.7109247) {
                        var18 = 0.28578284;
                    } else {
                        var18 = -0.028329218;
                    }
                }
            } else {
                if (input[15] < 0.3792719) {
                    if (input[0] < -0.2096866) {
                        var18 = 0.28365976;
                    } else {
                        var18 = -0.42476308;
                    }
                } else {
                    if (input[3] < -0.4560208) {
                        var18 = -0.03541907;
                    } else {
                        var18 = 0.35114595;
                    }
                }
            }
        } else {
            if (input[12] < 0.2955491) {
                if (input[15] < 0.1128054) {
                    if (input[8] < 2.32686) {
                        var18 = -0.4187576;
                    } else {
                        var18 = 0.24968867;
                    }
                } else {
                    if (input[9] < 0.1701771) {
                        var18 = 0.34096488;
                    } else {
                        var18 = 0.07670225;
                    }
                }
            } else {
                if (input[14] < 2.38766) {
                    var18 = -0.46116963;
                } else {
                    var18 = 0.046695776;
                }
            }
        }
    } else {
        if (input[4] < 0.3358852) {
            if (input[8] < 2.035783) {
                if (input[10] < 0.60533) {
                    if (input[14] < 2.074661) {
                        var18 = 0.18617235;
                    } else {
                        var18 = -0.42386213;
                    }
                } else {
                    if (input[5] < 2.017138) {
                        var18 = 0.24122183;
                    } else {
                        var18 = 0.053068582;
                    }
                }
            } else {
                if (input[11] < 2.283157) {
                    if (input[2] < 2.166153) {
                        var18 = -0.27926254;
                    } else {
                        var18 = 0.15307581;
                    }
                } else {
                    if (input[10] < 0.2260269) {
                        var18 = -0.23543848;
                    } else {
                        var18 = 0.011647303;
                    }
                }
            }
        } else {
            if (input[14] < 2.395218) {
                if (input[14] < 2.386373) {
                    if (input[11] < 2.397886) {
                        var18 = 0.03664311;
                    } else {
                        var18 = 0.40966117;
                    }
                } else {
                    if (input[1] < 0.4003597) {
                        var18 = 0.3762096;
                    } else {
                        var18 = -0.23251027;
                    }
                }
            } else {
                if (input[4] < 0.3824367) {
                    var18 = -0.044097453;
                } else {
                    var18 = 0.2945589;
                }
            }
        }
    }
    var var19;
    if (input[6] < -0.7041381) {
        if (input[8] < 1.759382) {
            var19 = 0.08433795;
        } else {
            var19 = 0.28350765;
        }
    } else {
        if (input[14] < 2.213901) {
            if (input[2] < 2.34694) {
                if (input[16] < 0.03336896) {
                    if (input[4] < 0.08725608) {
                        var19 = -0.09747543;
                    } else {
                        var19 = 0.27172503;
                    }
                } else {
                    if (input[1] < 0.4070966) {
                        var19 = -0.40864202;
                    } else {
                        var19 = -0.018303258;
                    }
                }
            } else {
                if (input[17] < 2.099293) {
                    var19 = -0.35082334;
                } else {
                    if (input[4] < 0.4332584) {
                        var19 = -0.28877982;
                    } else {
                        var19 = 0.25806215;
                    }
                }
            }
        } else {
            if (input[0] < -0.1047257) {
                if (input[12] < 0.2965919) {
                    if (input[8] < 2.19351) {
                        var19 = -0.14007884;
                    } else {
                        var19 = 0.09084992;
                    }
                } else {
                    if (input[14] < 2.38854) {
                        var19 = -0.30520204;
                    } else {
                        var19 = 0.28407276;
                    }
                }
            } else {
                if (input[15] < 0.4707458) {
                    var19 = 0.3271924;
                } else {
                    if (input[1] < 0.2060698) {
                        var19 = -0.35044426;
                    } else {
                        var19 = 0.17822304;
                    }
                }
            }
        }
    }
    var var20;
    if (input[6] < -0.5138596) {
        if (input[5] < 2.358876) {
            if (input[16] < 0.1793141) {
                if (input[11] < 2.311251) {
                    if (input[16] < 0.129746) {
                        var20 = -0.04924686;
                    } else {
                        var20 = 0.2694233;
                    }
                } else {
                    if (input[12] < 0.2965919) {
                        var20 = 0.31318966;
                    } else {
                        var20 = -0.18067221;
                    }
                }
            } else {
                if (input[12] < 0.2652177) {
                    var20 = 0.12215394;
                } else {
                    var20 = -0.3043767;
                }
            }
        } else {
            if (input[12] < 0.2955491) {
                if (input[15] < 0.1150515) {
                    if (input[8] < 2.31444) {
                        var20 = -0.311454;
                    } else {
                        var20 = 0.23050646;
                    }
                } else {
                    if (input[15] < 0.3792719) {
                        var20 = 0.3342712;
                    } else {
                        var20 = 0.07084095;
                    }
                }
            } else {
                if (input[14] < 2.38766) {
                    var20 = -0.39165014;
                } else {
                    var20 = 0.033630304;
                }
            }
        }
    } else {
        if (input[3] < -0.4722629) {
            var20 = -0.2874196;
        } else {
            if (input[7] < 0.5500985) {
                if (input[15] < 0.08466835) {
                    if (input[1] < 0.1287055) {
                        var20 = -0.13834237;
                    } else {
                        var20 = 0.2960857;
                    }
                } else {
                    if (input[15] < 0.1099526) {
                        var20 = -0.34403545;
                    } else {
                        var20 = -0.05831592;
                    }
                }
            } else {
                if (input[15] < 0.3624902) {
                    if (input[13] < 0.2216466) {
                        var20 = 0.3037884;
                    } else {
                        var20 = -0.022377238;
                    }
                } else {
                    if (input[12] < 0.2871916) {
                        var20 = -0.3608433;
                    } else {
                        var20 = 0.0649412;
                    }
                }
            }
        }
    }
    var var21;
    if (input[14] < 2.080204) {
        var21 = 0.27571505;
    } else {
        if (input[8] < 2.035783) {
            if (input[1] < 0.4070966) {
                if (input[6] < -0.5473499) {
                    var21 = 0.17770259;
                } else {
                    if (input[12] < 0.4080989) {
                        var21 = -0.3704675;
                    } else {
                        var21 = 0.059066813;
                    }
                }
            } else {
                if (input[15] < 0.1146012) {
                    if (input[15] < -0.05539852) {
                        var21 = 0.2538956;
                    } else {
                        var21 = -0.35501587;
                    }
                } else {
                    if (input[13] < 0.3393634) {
                        var21 = 0.3056538;
                    } else {
                        var21 = -0.1577784;
                    }
                }
            }
        } else {
            if (input[12] < 0.04878762) {
                var21 = 0.27810737;
            } else {
                if (input[10] < 0.3740663) {
                    if (input[10] < 0.3549885) {
                        var21 = 0.03826376;
                    } else {
                        var21 = -0.11912109;
                    }
                } else {
                    if (input[15] < 0.1128054) {
                        var21 = -0.12253897;
                    } else {
                        var21 = 0.22960119;
                    }
                }
            }
        }
    }
    var var22;
    if (input[17] < 1.975591) {
        if (input[6] < -0.3576439) {
            var22 = 0.27833286;
        } else {
            var22 = 0.09187028;
        }
    } else {
        if (input[14] < 2.213901) {
            if (input[2] < 2.34694) {
                if (input[16] < 0.03223184) {
                    if (input[4] < 0.08725608) {
                        var22 = -0.04250639;
                    } else {
                        var22 = 0.25559145;
                    }
                } else {
                    if (input[16] < 0.1289987) {
                        var22 = -0.15169397;
                    } else {
                        var22 = 0.139567;
                    }
                }
            } else {
                if (input[17] < 2.099293) {
                    var22 = -0.3335115;
                } else {
                    if (input[5] < 2.247809) {
                        var22 = -0.2573811;
                    } else {
                        var22 = 0.21941654;
                    }
                }
            }
        } else {
            if (input[0] < -0.1047257) {
                if (input[12] < 0.2959216) {
                    if (input[12] < 0.2887456) {
                        var22 = -0.026840864;
                    } else {
                        var22 = 0.1812028;
                    }
                } else {
                    if (input[8] < 2.250105) {
                        var22 = 0.020363508;
                    } else {
                        var22 = -0.34929362;
                    }
                }
            } else {
                if (input[15] < 0.4707458) {
                    var22 = 0.31294954;
                } else {
                    if (input[1] < 0.2060698) {
                        var22 = -0.3013883;
                    } else {
                        var22 = 0.1609232;
                    }
                }
            }
        }
    }
    var var23;
    if (input[17] < 2.506727) {
        if (input[14] < 2.509698) {
            if (input[14] < 2.395218) {
                if (input[14] < 2.090841) {
                    if (input[12] < 0.05751292) {
                        var23 = -0.055180408;
                    } else {
                        var23 = 0.28809294;
                    }
                } else {
                    if (input[11] < 2.059537) {
                        var23 = -0.2893011;
                    } else {
                        var23 = -0.012702921;
                    }
                }
            } else {
                if (input[15] < 0.1128054) {
                    if (input[5] < 2.361851) {
                        var23 = 0.21603766;
                    } else {
                        var23 = -0.23182113;
                    }
                } else {
                    if (input[7] < -0.04436951) {
                        var23 = 0.06781045;
                    } else {
                        var23 = 0.29727522;
                    }
                }
            }
        } else {
            if (input[8] < 2.459374) {
                var23 = -0.29279506;
            } else {
                var23 = -0.08508935;
            }
        }
    } else {
        if (input[10] < 0.1696847) {
            var23 = 0.04939642;
        } else {
            var23 = 0.26945162;
        }
    }
    var var24;
    if (input[8] < 2.535394) {
        if (input[2] < 2.463909) {
            if (input[14] < 2.395218) {
                if (input[14] < 2.393229) {
                    if (input[7] < 0.677536) {
                        var24 = -0.022520393;
                    } else {
                        var24 = 0.10253787;
                    }
                } else {
                    if (input[12] < 0.2904216) {
                        var24 = -0.38073465;
                    } else {
                        var24 = 0.24552496;
                    }
                }
            } else {
                if (input[15] < 0.108629) {
                    if (input[5] < 2.35651) {
                        var24 = 0.16510397;
                    } else {
                        var24 = -0.34031957;
                    }
                } else {
                    if (input[1] < 0.5671235) {
                        var24 = 0.25798556;
                    } else {
                        var24 = -0.0403604;
                    }
                }
            }
        } else {
            if (input[17] < 2.484626) {
                if (input[11] < 2.400186) {
                    var24 = 0.007859606;
                } else {
                    if (input[1] < 0.4266428) {
                        var24 = -0.3023096;
                    } else {
                        var24 = -0.06194232;
                    }
                }
            } else {
                var24 = 0.0022644498;
            }
        }
    } else {
        var24 = 0.24830955;
    }
    var var25;
    if (input[17] < 1.975591) {
        if (input[6] < -0.3576439) {
            var25 = 0.2674107;
        } else {
            var25 = 0.05126082;
        }
    } else {
        if (input[6] < -0.5367187) {
            if (input[5] < 2.35651) {
                if (input[14] < 2.267532) {
                    if (input[17] < 2.108728) {
                        var25 = 0.09155186;
                    } else {
                        var25 = -0.19216253;
                    }
                } else {
                    if (input[12] < 0.2969764) {
                        var25 = 0.28005382;
                    } else {
                        var25 = -0.16033088;
                    }
                }
            } else {
                if (input[12] < 0.2955491) {
                    if (input[15] < 0.1180427) {
                        var25 = -0.098191276;
                    } else {
                        var25 = 0.28222367;
                    }
                } else {
                    if (input[17] < 2.331534) {
                        var25 = -0.33950263;
                    } else {
                        var25 = 0.04596334;
                    }
                }
            }
        } else {
            if (input[14] < 2.213901) {
                if (input[2] < 2.34694) {
                    if (input[8] < 2.046057) {
                        var25 = -0.11025394;
                    } else {
                        var25 = 0.11929296;
                    }
                } else {
                    if (input[16] < -0.2857858) {
                        var25 = -0.057674695;
                    } else {
                        var25 = -0.33131966;
                    }
                }
            } else {
                if (input[15] < 0.3855608) {
                    if (input[9] < 0.1609495) {
                        var25 = 0.029704455;
                    } else {
                        var25 = -0.2052411;
                    }
                } else {
                    if (input[4] < 0.1846573) {
                        var25 = -0.0034497941;
                    } else {
                        var25 = 0.33876434;
                    }
                }
            }
        }
    }
    var var26;
    if (input[14] < 2.080204) {
        var26 = 0.25153401;
    } else {
        if (input[8] < 2.301614) {
            if (input[7] < -0.03077204) {
                if (input[13] < 0.135247) {
                    if (input[8] < 2.137482) {
                        var26 = -0.22222947;
                    } else {
                        var26 = 0.065778606;
                    }
                } else {
                    if (input[17] < 2.324837) {
                        var26 = -0.08402665;
                    } else {
                        var26 = -0.5203687;
                    }
                }
            } else {
                if (input[12] < 0.2887456) {
                    if (input[0] < -0.208584) {
                        var26 = 0.012379073;
                    } else {
                        var26 = -0.21481997;
                    }
                } else {
                    if (input[12] < 0.2955491) {
                        var26 = 0.20018554;
                    } else {
                        var26 = -0.0031004094;
                    }
                }
            }
        } else {
            if (input[13] < -0.06147121) {
                var26 = -0.19613482;
            } else {
                if (input[15] < 0.1092642) {
                    if (input[9] < 0.05247108) {
                        var26 = 0.22903514;
                    } else {
                        var26 = -0.22477816;
                    }
                } else {
                    if (input[13] < 0.01408668) {
                        var26 = -0.007964655;
                    } else {
                        var26 = 0.31136528;
                    }
                }
            }
        }
    }
    var var27;
    if (input[15] < -0.04950357) {
        var27 = 0.2444074;
    } else {
        if (input[0] < -0.3844759) {
            if (input[6] < -0.6238582) {
                var27 = 0.03588153;
            } else {
                var27 = -0.264751;
            }
        } else {
            if (input[12] < 0.05145746) {
                var27 = 0.2621323;
            } else {
                if (input[16] < -0.2847922) {
                    if (input[0] < -0.1047257) {
                        var27 = -0.1905565;
                    } else {
                        var27 = 0.20371443;
                    }
                } else {
                    if (input[15] < 0.4465356) {
                        var27 = 0.00089274556;
                    } else {
                        var27 = -0.23183982;
                    }
                }
            }
        }
    }
    var var28;
    if (input[17] < 1.975059) {
        var28 = 0.24278799;
    } else {
        if (input[17] < 2.506727) {
            if (input[2] < 2.455107) {
                if (input[7] < 0.8196383) {
                    if (input[10] < 0.3549885) {
                        var28 = 0.047740743;
                    } else {
                        var28 = -0.068529725;
                    }
                } else {
                    if (input[11] < 2.397389) {
                        var28 = -0.010013396;
                    } else {
                        var28 = 0.38785407;
                    }
                }
            } else {
                if (input[13] < 0.1383098) {
                    if (input[14] < 2.391081) {
                        var28 = -0.38860822;
                    } else {
                        var28 = -0.115096636;
                    }
                } else {
                    if (input[6] < -0.173177) {
                        var28 = 0.25604588;
                    } else {
                        var28 = -0.15102471;
                    }
                }
            }
        } else {
            var28 = 0.2249143;
        }
    }
    var var29;
    if (input[1] < 0.4053647) {
        if (input[10] < 0.3549885) {
            if (input[11] < 2.312862) {
                if (input[16] < -0.2802011) {
                    if (input[14] < 2.212829) {
                        var29 = -0.15849605;
                    } else {
                        var29 = 0.22084464;
                    }
                } else {
                    if (input[15] < 0.08466835) {
                        var29 = -0.054916646;
                    } else {
                        var29 = -0.28866518;
                    }
                }
            } else {
                if (input[15] < 0.3979967) {
                    if (input[2] < 2.451022) {
                        var29 = 0.23185404;
                    } else {
                        var29 = -0.092379496;
                    }
                } else {
                    if (input[13] < 0.135247) {
                        var29 = 0.16730434;
                    } else {
                        var29 = -0.35698557;
                    }
                }
            }
        } else {
            if (input[0] < -0.208584) {
                if (input[14] < 2.383227) {
                    if (input[14] < 2.263111) {
                        var29 = 0.037215516;
                    } else {
                        var29 = 0.34517846;
                    }
                } else {
                    if (input[11] < 2.400186) {
                        var29 = -0.37933654;
                    } else {
                        var29 = -0.06533769;
                    }
                }
            } else {
                if (input[4] < 0.6113924) {
                    if (input[14] < 2.186728) {
                        var29 = 0.09633551;
                    } else {
                        var29 = -0.28710547;
                    }
                } else {
                    var29 = 0.27598;
                }
            }
        }
    } else {
        if (input[9] < 0.1730835) {
            if (input[16] < 0.1403437) {
                if (input[17] < 2.326456) {
                    if (input[2] < 2.455107) {
                        var29 = -0.032743715;
                    } else {
                        var29 = -0.3207106;
                    }
                } else {
                    if (input[11] < 2.396734) {
                        var29 = -0.011991358;
                    } else {
                        var29 = 0.26007885;
                    }
                }
            } else {
                var29 = 0.31065005;
            }
        } else {
            if (input[10] < 0.3766026) {
                if (input[16] < 0.03441185) {
                    var29 = 0.18082385;
                } else {
                    var29 = -0.2692344;
                }
            } else {
                var29 = 0.30090535;
            }
        }
    }
    var var30;
    if (input[14] < 2.090841) {
        if (input[12] < 0.05751292) {
            if (input[1] < 0.5532211) {
                var30 = 0.164189;
            } else {
                var30 = -0.24446549;
            }
        } else {
            if (input[15] < 0.1150515) {
                var30 = 0.04086791;
            } else {
                var30 = 0.29155082;
            }
        }
    } else {
        if (input[11] < 2.059537) {
            if (input[17] < 2.06777) {
                var30 = -0.3386905;
            } else {
                var30 = 0.21056898;
            }
        } else {
            if (input[13] < 0.3275001) {
                if (input[2] < 2.157903) {
                    var30 = -0.2617176;
                } else {
                    if (input[10] < 0.3771095) {
                        var30 = -0.013503054;
                    } else {
                        var30 = 0.10829292;
                    }
                }
            } else {
                var30 = 0.2546783;
            }
        }
    }
    var var31;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.3037097) {
            if (input[15] < 0.2867854) {
                if (input[15] < 0.1265639) {
                    if (input[2] < 2.372276) {
                        var31 = 0.02872442;
                    } else {
                        var31 = -0.19234453;
                    }
                } else {
                    if (input[7] < 0.4130174) {
                        var31 = 0.275146;
                    } else {
                        var31 = -0.007375496;
                    }
                }
            } else {
                if (input[14] < 2.397084) {
                    if (input[10] < 0.3783683) {
                        var31 = -0.11780371;
                    } else {
                        var31 = 0.21630596;
                    }
                } else {
                    var31 = 0.2466996;
                }
            }
        } else {
            if (input[15] < 0.1969747) {
                if (input[10] < 0.09459801) {
                    var31 = 0.015419952;
                } else {
                    if (input[1] < 0.369271) {
                        var31 = -0.3449399;
                    } else {
                        var31 = -0.09984981;
                    }
                }
            } else {
                if (input[9] < 0.3758049) {
                    var31 = 0.2060899;
                } else {
                    if (input[17] < 2.095371) {
                        var31 = -0.22899176;
                    } else {
                        var31 = 0.09978633;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.342581) {
            if (input[4] < 0.6759008) {
                if (input[17] < 2.331534) {
                    if (input[9] < 0.1674867) {
                        var31 = 0.23314832;
                    } else {
                        var31 = -0.044930845;
                    }
                } else {
                    if (input[15] < 0.3811692) {
                        var31 = -0.31876153;
                    } else {
                        var31 = 0.25605226;
                    }
                }
            } else {
                if (input[16] < 0.1437625) {
                    if (input[17] < 2.062224) {
                        var31 = 0.00052690087;
                    } else {
                        var31 = -0.27634862;
                    }
                } else {
                    var31 = 0.19799188;
                }
            }
        } else {
            var31 = 0.26419404;
        }
    }
    var var32;
    if (input[4] < -0.0498997) {
        if (input[16] < -0.2271359) {
            if (input[7] < -0.2671156) {
                if (input[2] < 2.17275) {
                    var32 = -0.16022174;
                } else {
                    if (input[9] < 0.3758049) {
                        var32 = 0.15895164;
                    } else {
                        var32 = -0.12590173;
                    }
                }
            } else {
                var32 = -0.24651328;
            }
        } else {
            if (input[3] < -0.3969615) {
                var32 = -0.018010914;
            } else {
                var32 = 0.16422382;
            }
        }
    } else {
        if (input[10] < 0.09824134) {
            if (input[5] < 2.210737) {
                if (input[9] < 0.07090289) {
                    var32 = -0.28521636;
                } else {
                    var32 = 0.07083458;
                }
            } else {
                if (input[4] < 0.08725608) {
                    if (input[11] < 2.311251) {
                        var32 = -0.1547539;
                    } else {
                        var32 = 0.17930914;
                    }
                } else {
                    if (input[5] < 2.214853) {
                        var32 = 0.029929733;
                    } else {
                        var32 = 0.29854214;
                    }
                }
            }
        } else {
            if (input[1] < 0.1419112) {
                var32 = -0.30572817;
            } else {
                if (input[17] < 2.392169) {
                    if (input[12] < 0.4505137) {
                        var32 = -0.008414365;
                    } else {
                        var32 = 0.15041631;
                    }
                } else {
                    var32 = 0.23905097;
                }
            }
        }
    }
    var var33;
    if (input[6] < -0.423894) {
        if (input[17] < 2.040213) {
            if (input[10] < 0.3766026) {
                if (input[16] < 0.02795479) {
                    if (input[0] < -0.2623533) {
                        var33 = -0.11129727;
                    } else {
                        var33 = 0.25355056;
                    }
                } else {
                    var33 = -0.25906858;
                }
            } else {
                var33 = 0.28735226;
            }
        } else {
            if (input[12] < 0.2965919) {
                if (input[10] < 0.3549885) {
                    if (input[13] < -0.08265787) {
                        var33 = -0.09604511;
                    } else {
                        var33 = 0.26522774;
                    }
                } else {
                    if (input[16] < 0.129746) {
                        var33 = -0.100379735;
                    } else {
                        var33 = 0.09532301;
                    }
                }
            } else {
                if (input[5] < 2.349624) {
                    if (input[10] < 0.2066711) {
                        var33 = -0.13021159;
                    } else {
                        var33 = 0.16595154;
                    }
                } else {
                    if (input[6] < -0.4611767) {
                        var33 = -0.27449116;
                    } else {
                        var33 = 0.067346685;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.254301) {
            if (input[15] < 0.05535782) {
                if (input[5] < 2.232935) {
                    var33 = 0.024387626;
                } else {
                    var33 = 0.23027788;
                }
            } else {
                if (input[15] < 0.392291) {
                    if (input[15] < 0.3855608) {
                        var33 = -0.13942349;
                    } else {
                        var33 = 0.22214524;
                    }
                } else {
                    if (input[2] < 2.407303) {
                        var33 = -0.13095015;
                    } else {
                        var33 = -0.48712283;
                    }
                }
            }
        } else {
            if (input[14] < 2.213901) {
                if (input[2] < 2.34694) {
                    var33 = 0.19791389;
                } else {
                    if (input[16] < -0.2857858) {
                        var33 = 0.026939575;
                    } else {
                        var33 = -0.2877063;
                    }
                }
            } else {
                if (input[2] < 2.455107) {
                    if (input[15] < 0.4707458) {
                        var33 = 0.25517076;
                    } else {
                        var33 = -0.15639731;
                    }
                } else {
                    if (input[9] < 0.1626051) {
                        var33 = 0.14102052;
                    } else {
                        var33 = -0.16046283;
                    }
                }
            }
        }
    }
    var var34;
    if (input[16] < 0.1727158) {
        if (input[16] < 0.1334307) {
            if (input[13] < 0.3393634) {
                if (input[14] < 2.090841) {
                    if (input[15] < 0.1137889) {
                        var34 = -0.04234335;
                    } else {
                        var34 = 0.27088195;
                    }
                } else {
                    if (input[2] < 2.157903) {
                        var34 = -0.25719112;
                    } else {
                        var34 = 0.013338193;
                    }
                }
            } else {
                var34 = -0.2556394;
            }
        } else {
            if (input[12] < 0.278926) {
                if (input[5] < 1.939736) {
                    var34 = 0.0068080467;
                } else {
                    if (input[0] < -0.2051296) {
                        var34 = 0.2904748;
                    } else {
                        var34 = 0.0638405;
                    }
                }
            } else {
                var34 = -0.1018603;
            }
        }
    } else {
        if (input[8] < 2.253232) {
            if (input[0] < -0.208584) {
                var34 = -0.022646159;
            } else {
                var34 = -0.26677978;
            }
        } else {
            if (input[13] < 0.2149605) {
                var34 = 0.20765986;
            } else {
                var34 = 0.031219846;
            }
        }
    }
    var var35;
    if (input[17] < 2.344304) {
        if (input[17] < 2.331534) {
            if (input[4] < 0.6759008) {
                if (input[11] < 2.397886) {
                    if (input[2] < 2.358815) {
                        var35 = 0.02196066;
                    } else {
                        var35 = -0.07343445;
                    }
                } else {
                    if (input[9] < 0.168266) {
                        var35 = 0.28263006;
                    } else {
                        var35 = -0.25341785;
                    }
                }
            } else {
                if (input[16] < 0.1380712) {
                    if (input[17] < 2.063132) {
                        var35 = -0.024539545;
                    } else {
                        var35 = -0.25232443;
                    }
                } else {
                    var35 = 0.14909565;
                }
            }
        } else {
            if (input[9] < 0.1674867) {
                if (input[1] < 0.3415562) {
                    var35 = 0.14787133;
                } else {
                    if (input[2] < 2.453446) {
                        var35 = -0.31840658;
                    } else {
                        var35 = 0.03032697;
                    }
                }
            } else {
                var35 = 0.21010515;
            }
        }
    } else {
        if (input[14] < 2.404304) {
            if (input[17] < 2.346979) {
                if (input[13] < 0.1363243) {
                    var35 = 0.1689148;
                } else {
                    var35 = -0.11858231;
                }
            } else {
                var35 = 0.27648962;
            }
        } else {
            if (input[16] < 0.06642205) {
                if (input[17] < 2.376259) {
                    if (input[12] < 0.2197268) {
                        var35 = -0.31871;
                    } else {
                        var35 = 0.0827702;
                    }
                } else {
                    if (input[10] < 0.1601353) {
                        var35 = -0.18815503;
                    } else {
                        var35 = 0.18215507;
                    }
                }
            } else {
                var35 = 0.276822;
            }
        }
    }
    var var36;
    if (input[6] < -0.4572336) {
        if (input[17] < 2.040213) {
            if (input[10] < 0.3761594) {
                if (input[16] < 0.02795479) {
                    if (input[0] < -0.2623533) {
                        var36 = -0.10052045;
                    } else {
                        var36 = 0.23024581;
                    }
                } else {
                    var36 = -0.25757048;
                }
            } else {
                var36 = 0.27258852;
            }
        } else {
            if (input[12] < 0.2965919) {
                if (input[11] < 2.312862) {
                    if (input[6] < -0.6079501) {
                        var36 = 0.061582774;
                    } else {
                        var36 = -0.20448747;
                    }
                } else {
                    if (input[10] < 0.3549885) {
                        var36 = 0.24328311;
                    } else {
                        var36 = -0.012818202;
                    }
                }
            } else {
                if (input[14] < 2.38854) {
                    if (input[11] < 2.283157) {
                        var36 = 0.01911185;
                    } else {
                        var36 = -0.25122872;
                    }
                } else {
                    var36 = 0.15624784;
                }
            }
        }
    } else {
        if (input[8] < 2.035783) {
            if (input[11] < 2.020623) {
                if (input[9] < 0.00171436) {
                    var36 = -0.1404594;
                } else {
                    var36 = 0.20955707;
                }
            } else {
                if (input[16] < 0.008808272) {
                    var36 = -0.0800869;
                } else {
                    var36 = -0.3088554;
                }
            }
        } else {
            if (input[10] < 0.3727348) {
                if (input[4] < 0.3358852) {
                    if (input[1] < 0.3543082) {
                        var36 = -0.0700905;
                    } else {
                        var36 = -0.3223172;
                    }
                } else {
                    if (input[5] < 2.379686) {
                        var36 = 0.11254215;
                    } else {
                        var36 = -0.10583176;
                    }
                }
            } else {
                if (input[2] < 2.362514) {
                    var36 = 0.29743078;
                } else {
                    if (input[8] < 2.165101) {
                        var36 = -0.2132669;
                    } else {
                        var36 = 0.09222078;
                    }
                }
            }
        }
    }
    var var37;
    if (input[15] < -0.04627562) {
        var37 = 0.19814275;
    } else {
        if (input[8] < 2.050338) {
            if (input[15] < 0.1146012) {
                if (input[13] < 0.2149605) {
                    var37 = -0.0032498154;
                } else {
                    var37 = -0.2934779;
                }
            } else {
                if (input[1] < 0.4070966) {
                    if (input[9] < 0.2422704) {
                        var37 = -0.26024184;
                    } else {
                        var37 = 0.03136633;
                    }
                } else {
                    if (input[13] < 0.3393634) {
                        var37 = 0.25314456;
                    } else {
                        var37 = -0.08786709;
                    }
                }
            }
        } else {
            if (input[10] < 0.3727348) {
                if (input[16] < -0.08729291) {
                    if (input[14] < 2.213901) {
                        var37 = -0.106826164;
                    } else {
                        var37 = 0.039064113;
                    }
                } else {
                    if (input[12] < 0.2675642) {
                        var37 = 0.17854083;
                    } else {
                        var37 = -0.16483939;
                    }
                }
            } else {
                if (input[15] < 0.1399798) {
                    if (input[2] < 2.367139) {
                        var37 = 0.20195419;
                    } else {
                        var37 = -0.09082991;
                    }
                } else {
                    var37 = 0.2997127;
                }
            }
        }
    }
    var var38;
    if (input[1] < 0.1371544) {
        if (input[17] < 2.090501) {
            if (input[10] < 0.09824134) {
                if (input[5] < 2.214853) {
                    if (input[10] < 0.09192781) {
                        var38 = 0.10152127;
                    } else {
                        var38 = -0.2722884;
                    }
                } else {
                    if (input[0] < -0.2641435) {
                        var38 = -0.05985434;
                    } else {
                        var38 = 0.18691792;
                    }
                }
            } else {
                var38 = -0.2087772;
            }
        } else {
            var38 = -0.2554573;
        }
    } else {
        if (input[10] < 0.09824134) {
            var38 = 0.27922148;
        } else {
            if (input[17] < 2.392169) {
                if (input[14] < 2.453365) {
                    if (input[14] < 2.397084) {
                        var38 = -0.008741686;
                    } else {
                        var38 = 0.101947166;
                    }
                } else {
                    var38 = -0.22200023;
                }
            } else {
                var38 = 0.20395394;
            }
        }
    }
    var var39;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.3037097) {
            if (input[11] < 2.402339) {
                if (input[2] < 2.414109) {
                    if (input[15] < 0.1142023) {
                        var39 = -0.045460828;
                    } else {
                        var39 = 0.050090685;
                    }
                } else {
                    if (input[0] < -0.2113573) {
                        var39 = 0.042119212;
                    } else {
                        var39 = -0.28896597;
                    }
                }
            } else {
                if (input[13] < -0.07777701) {
                    var39 = -0.1554805;
                } else {
                    if (input[12] < 0.2961881) {
                        var39 = 0.26699412;
                    } else {
                        var39 = -0.03873453;
                    }
                }
            }
        } else {
            if (input[16] < -0.2826994) {
                if (input[5] < 2.327652) {
                    var39 = 0.15679541;
                } else {
                    var39 = -0.04301203;
                }
            } else {
                if (input[10] < 0.09562366) {
                    var39 = 0.02151993;
                } else {
                    if (input[15] < 0.2045421) {
                        var39 = -0.29280877;
                    } else {
                        var39 = -0.059700403;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.342581) {
            if (input[11] < 2.400186) {
                if (input[17] < 2.330252) {
                    if (input[17] < 2.319168) {
                        var39 = 0.030992867;
                    } else {
                        var39 = 0.27058825;
                    }
                } else {
                    if (input[15] < 0.3792719) {
                        var39 = -0.25653455;
                    } else {
                        var39 = 0.20961761;
                    }
                }
            } else {
                if (input[2] < 2.445357) {
                    var39 = 0.21436906;
                } else {
                    if (input[15] < 0.375734) {
                        var39 = 0.049341686;
                    } else {
                        var39 = -0.24179259;
                    }
                }
            }
        } else {
            var39 = 0.23782353;
        }
    }
    var var40;
    if (input[15] < -0.05539852) {
        var40 = 0.1938743;
    } else {
        if (input[8] < 2.046057) {
            if (input[15] < 0.1146012) {
                if (input[13] < 0.2149605) {
                    var40 = 0.00074520864;
                } else {
                    var40 = -0.26781043;
                }
            } else {
                if (input[1] < 0.4088588) {
                    if (input[14] < 2.185909) {
                        var40 = 0.04612265;
                    } else {
                        var40 = -0.20831808;
                    }
                } else {
                    if (input[13] < 0.3393634) {
                        var40 = 0.26011077;
                    } else {
                        var40 = -0.07725329;
                    }
                }
            }
        } else {
            if (input[2] < 2.358815) {
                if (input[10] < 0.371812) {
                    if (input[2] < 2.316497) {
                        var40 = -0.08017075;
                    } else {
                        var40 = 0.16283536;
                    }
                } else {
                    var40 = 0.28448713;
                }
            } else {
                if (input[14] < 2.212829) {
                    var40 = -0.25881562;
                } else {
                    if (input[12] < 0.4505137) {
                        var40 = -0.013367803;
                    } else {
                        var40 = 0.20863275;
                    }
                }
            }
        }
    }
    var var41;
    if (input[9] < 0.3789709) {
        if (input[12] < 0.4505137) {
            if (input[9] < 0.3703701) {
                if (input[0] < -0.1047257) {
                    if (input[9] < 0.2440669) {
                        var41 = 0.005925713;
                    } else {
                        var41 = -0.22463112;
                    }
                } else {
                    var41 = 0.22016111;
                }
            } else {
                if (input[5] < 2.232935) {
                    var41 = -0.046879284;
                } else {
                    var41 = -0.22227015;
                }
            }
        } else {
            if (input[8] < 2.2665) {
                var41 = 0.24308407;
            } else {
                var41 = -0.09066501;
            }
        }
    } else {
        if (input[17] < 2.095371) {
            var41 = -0.22474;
        } else {
            var41 = 0.037229624;
        }
    }
    var var42;
    if (input[15] < 0.08466835) {
        if (input[1] < 0.1251911) {
            if (input[11] < 2.311251) {
                var42 = -0.25368446;
            } else {
                if (input[6] < -0.5522819) {
                    var42 = 0.22088657;
                } else {
                    var42 = -0.074226156;
                }
            }
        } else {
            if (input[1] < 0.5416745) {
                if (input[2] < 2.362514) {
                    var42 = 0.2546201;
                } else {
                    var42 = 0.071935475;
                }
            } else {
                if (input[13] < 0.3275001) {
                    var42 = -0.15161674;
                } else {
                    var42 = 0.16050693;
                }
            }
        }
    } else {
        if (input[15] < 0.1142023) {
            if (input[11] < 2.311251) {
                var42 = -0.27829587;
            } else {
                if (input[2] < 2.37426) {
                    if (input[15] < 0.108629) {
                        var42 = -0.0463622;
                    } else {
                        var42 = 0.23103778;
                    }
                } else {
                    var42 = -0.23666911;
                }
            }
        } else {
            if (input[13] < 0.1764329) {
                if (input[14] < 2.397084) {
                    if (input[8] < 2.232991) {
                        var42 = 0.01966544;
                    } else {
                        var42 = -0.08530612;
                    }
                } else {
                    if (input[15] < 0.1923926) {
                        var42 = -0.12281915;
                    } else {
                        var42 = 0.22231548;
                    }
                }
            } else {
                if (input[8] < 2.246422) {
                    if (input[2] < 2.395224) {
                        var42 = 0.12645964;
                    } else {
                        var42 = -0.19356357;
                    }
                } else {
                    var42 = 0.26198065;
                }
            }
        }
    }
    var var43;
    if (input[6] < -0.423894) {
        if (input[10] < 0.3556651) {
            if (input[12] < 0.2961881) {
                if (input[11] < 2.312862) {
                    if (input[13] < -0.08156926) {
                        var43 = -0.13667977;
                    } else {
                        var43 = 0.18512915;
                    }
                } else {
                    if (input[9] < 0.1696382) {
                        var43 = 0.27191877;
                    } else {
                        var43 = -0.08124873;
                    }
                }
            } else {
                if (input[8] < 2.234889) {
                    if (input[9] < 0.1690057) {
                        var43 = 0.20473091;
                    } else {
                        var43 = -0.027919285;
                    }
                } else {
                    if (input[8] < 2.251696) {
                        var43 = -0.065100506;
                    } else {
                        var43 = -0.25767112;
                    }
                }
            }
        } else {
            if (input[14] < 2.383227) {
                if (input[15] < 0.1256416) {
                    if (input[14] < 2.090841) {
                        var43 = 0.11955767;
                    } else {
                        var43 = -0.16627146;
                    }
                } else {
                    if (input[12] < 0.3125615) {
                        var43 = 0.2621436;
                    } else {
                        var43 = -0.011135785;
                    }
                }
            } else {
                if (input[11] < 2.375712) {
                    if (input[6] < -0.5756875) {
                        var43 = 0.2046478;
                    } else {
                        var43 = 0.05086529;
                    }
                } else {
                    if (input[0] < -0.1872129) {
                        var43 = -0.24169369;
                    } else {
                        var43 = 0.076074935;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.3358852) {
            if (input[9] < 0.2422704) {
                if (input[9] < 0.1548824) {
                    if (input[2] < 2.316497) {
                        var43 = -0.20592335;
                    } else {
                        var43 = 0.0758116;
                    }
                } else {
                    if (input[17] < 2.344304) {
                        var43 = -0.3455602;
                    } else {
                        var43 = -0.026174521;
                    }
                }
            } else {
                if (input[1] < 0.4003597) {
                    if (input[13] < -0.0644366) {
                        var43 = 0.08165802;
                    } else {
                        var43 = -0.20543301;
                    }
                } else {
                    var43 = 0.23735045;
                }
            }
        } else {
            if (input[2] < 2.360086) {
                var43 = 0.22779244;
            } else {
                if (input[9] < 0.1626051) {
                    if (input[11] < 2.396734) {
                        var43 = -0.122384265;
                    } else {
                        var43 = 0.20745207;
                    }
                } else {
                    if (input[12] < 0.4505137) {
                        var43 = -0.13800782;
                    } else {
                        var43 = 0.17579241;
                    }
                }
            }
        }
    }
    var var44;
    if (input[15] < 0.04894349) {
        if (input[1] < 0.1251911) {
            if (input[11] < 2.311251) {
                var44 = -0.21120761;
            } else {
                if (input[6] < -0.5522819) {
                    var44 = 0.19239928;
                } else {
                    var44 = -0.010764982;
                }
            }
        } else {
            if (input[1] < 0.5416745) {
                var44 = 0.23030896;
            } else {
                var44 = 0.0058734245;
            }
        }
    } else {
        if (input[12] < 0.1012851) {
            if (input[16] < 0.1403437) {
                if (input[17] < 2.043789) {
                    if (input[11] < 2.312862) {
                        var44 = -0.059862897;
                    } else {
                        var44 = 0.17723218;
                    }
                } else {
                    if (input[14] < 2.090841) {
                        var44 = 0.03906719;
                    } else {
                        var44 = -0.18740246;
                    }
                }
            } else {
                var44 = 0.16301669;
            }
        } else {
            if (input[0] < -0.2170308) {
                if (input[11] < 2.375712) {
                    if (input[4] < 0.1846573) {
                        var44 = 0.0046026944;
                    } else {
                        var44 = 0.2421108;
                    }
                } else {
                    if (input[15] < 0.1128054) {
                        var44 = -0.16821304;
                    } else {
                        var44 = 0.18712255;
                    }
                }
            } else {
                if (input[15] < 0.1256416) {
                    var44 = -0.21074955;
                } else {
                    if (input[15] < 0.2867854) {
                        var44 = 0.11912019;
                    } else {
                        var44 = -0.018381;
                    }
                }
            }
        }
    }
    var var45;
    if (input[5] < 2.376931) {
        if (input[7] < 0.8196383) {
            if (input[6] < -0.423894) {
                if (input[11] < 2.401231) {
                    if (input[2] < 2.407303) {
                        var45 = 0.049585275;
                    } else {
                        var45 = -0.048030324;
                    }
                } else {
                    if (input[9] < 0.1707428) {
                        var45 = 0.23705773;
                    } else {
                        var45 = -0.07658205;
                    }
                }
            } else {
                if (input[16] < -0.2784772) {
                    if (input[14] < 2.211369) {
                        var45 = -0.14308882;
                    } else {
                        var45 = 0.16765973;
                    }
                } else {
                    if (input[15] < 0.392291) {
                        var45 = -0.045683607;
                    } else {
                        var45 = -0.31074926;
                    }
                }
            }
        } else {
            if (input[12] < 0.2871916) {
                if (input[15] < 0.1112356) {
                    var45 = 0.14001563;
                } else {
                    var45 = -0.07682009;
                }
            } else {
                var45 = 0.25496656;
            }
        }
    } else {
        if (input[16] < 0.06642205) {
            if (input[12] < 0.2946321) {
                if (input[12] < 0.2871916) {
                    if (input[8] < 2.37691) {
                        var45 = -0.18849665;
                    } else {
                        var45 = 0.08827482;
                    }
                } else {
                    if (input[2] < 2.463909) {
                        var45 = 0.2098632;
                    } else {
                        var45 = -0.05549142;
                    }
                }
            } else {
                if (input[14] < 2.38854) {
                    var45 = -0.26508653;
                } else {
                    var45 = -0.029370442;
                }
            }
        } else {
            var45 = 0.21594729;
        }
    }
    var var46;
    if (input[9] < 0.3789709) {
        if (input[12] < 0.4505137) {
            if (input[6] < -0.1790822) {
                if (input[5] < 2.224903) {
                    if (input[14] < 2.187465) {
                        var46 = 0.029230634;
                    } else {
                        var46 = -0.15406406;
                    }
                } else {
                    if (input[2] < 2.364653) {
                        var46 = 0.15876424;
                    } else {
                        var46 = 0.006883241;
                    }
                }
            } else {
                if (input[2] < 2.358815) {
                    var46 = 0.16024674;
                } else {
                    var46 = -0.20161565;
                }
            }
        } else {
            if (input[17] < 2.093658) {
                var46 = -0.02877297;
            } else {
                var46 = 0.22618437;
            }
        }
    } else {
        if (input[14] < 2.213901) {
            var46 = -0.21609005;
        } else {
            var46 = 0.043413512;
        }
    }
    var var47;
    if (input[4] < -0.04337142) {
        if (input[16] < -0.2271359) {
            if (input[16] < -0.2906042) {
                var47 = -0.026728768;
            } else {
                if (input[5] < 2.307631) {
                    var47 = -0.21994145;
                } else {
                    var47 = -0.06779406;
                }
            }
        } else {
            var47 = 0.065374345;
        }
    } else {
        if (input[10] < 0.3556651) {
            if (input[16] < -0.0891017) {
                if (input[11] < 2.311251) {
                    if (input[16] < -0.2794041) {
                        var47 = 0.08749443;
                    } else {
                        var47 = -0.14070326;
                    }
                } else {
                    if (input[11] < 2.401971) {
                        var47 = 0.16692585;
                    } else {
                        var47 = -0.04310193;
                    }
                }
            } else {
                if (input[11] < 2.397389) {
                    var47 = -0.23136537;
                } else {
                    if (input[9] < 0.168266) {
                        var47 = 0.19052865;
                    } else {
                        var47 = -0.11955702;
                    }
                }
            }
        } else {
            if (input[1] < 0.4053647) {
                if (input[5] < 2.364275) {
                    if (input[9] < 0.2422704) {
                        var47 = -0.17421518;
                    } else {
                        var47 = 0.08659453;
                    }
                } else {
                    if (input[16] < -0.08604829) {
                        var47 = 0.17279662;
                    } else {
                        var47 = -0.018731317;
                    }
                }
            } else {
                if (input[16] < 0.1348924) {
                    if (input[12] < 0.1092973) {
                        var47 = -0.089345746;
                    } else {
                        var47 = 0.07516469;
                    }
                } else {
                    var47 = 0.20758109;
                }
            }
        }
    }
    var var48;
    if (input[1] < 0.1371544) {
        if (input[17] < 2.08782) {
            if (input[13] < -0.09519036) {
                if (input[7] < -0.03982324) {
                    var48 = 0.041456416;
                } else {
                    var48 = 0.19304605;
                }
            } else {
                if (input[11] < 2.311251) {
                    var48 = -0.2227644;
                } else {
                    if (input[6] < -0.5494666) {
                        var48 = 0.20411645;
                    } else {
                        var48 = -0.11173186;
                    }
                }
            }
        } else {
            var48 = -0.198316;
        }
    } else {
        if (input[10] < 0.09824134) {
            var48 = 0.22432692;
        } else {
            if (input[17] < 2.344304) {
                if (input[4] < 0.6807286) {
                    if (input[17] < 2.330252) {
                        var48 = 0.024239564;
                    } else {
                        var48 = -0.098443605;
                    }
                } else {
                    if (input[14] < 2.376531) {
                        var48 = -0.01245257;
                    } else {
                        var48 = -0.2202255;
                    }
                }
            } else {
                if (input[15] < 0.108629) {
                    if (input[3] < -0.4037991) {
                        var48 = 0.029019866;
                    } else {
                        var48 = -0.15834711;
                    }
                } else {
                    if (input[1] < 0.255342) {
                        var48 = -0.046343543;
                    } else {
                        var48 = 0.17177287;
                    }
                }
            }
        }
    }
    var var49;
    if (input[9] < 0.3789709) {
        if (input[8] < 2.023136) {
            if (input[5] < 2.128641) {
                if (input[15] < 0.1281845) {
                    if (input[14] < 2.090841) {
                        var49 = 0.053911585;
                    } else {
                        var49 = -0.1561824;
                    }
                } else {
                    var49 = 0.19290194;
                }
            } else {
                var49 = -0.22652464;
            }
        } else {
            if (input[5] < 2.361851) {
                if (input[16] < 0.1698005) {
                    if (input[10] < 0.371812) {
                        var49 = 0.036132675;
                    } else {
                        var49 = 0.19854428;
                    }
                } else {
                    if (input[0] < -0.2077079) {
                        var49 = -0.010432876;
                    } else {
                        var49 = -0.1968313;
                    }
                }
            } else {
                if (input[17] < 2.311116) {
                    if (input[12] < 0.2935717) {
                        var49 = 0.21097822;
                    } else {
                        var49 = -0.021828093;
                    }
                } else {
                    if (input[3] < -0.3755291) {
                        var49 = -0.15841806;
                    } else {
                        var49 = -0.017278234;
                    }
                }
            }
        }
    } else {
        if (input[14] < 2.213901) {
            var49 = -0.20702279;
        } else {
            var49 = 0.03862866;
        }
    }
    var var50;
    if (input[6] < -0.7109247) {
        var50 = 0.16241786;
    } else {
        if (input[8] < 2.023136) {
            if (input[14] < 2.090841) {
                if (input[12] < 0.06210573) {
                    var50 = -0.08364381;
                } else {
                    var50 = 0.18211725;
                }
            } else {
                if (input[15] < 0.1335447) {
                    var50 = -0.22914927;
                } else {
                    if (input[4] < 0.2373017) {
                        var50 = -0.21194158;
                    } else {
                        var50 = 0.19581881;
                    }
                }
            }
        } else {
            if (input[14] < 2.187465) {
                if (input[15] < 0.08466835) {
                    var50 = -0.03768722;
                } else {
                    var50 = 0.21778038;
                }
            } else {
                if (input[14] < 2.213901) {
                    if (input[1] < 0.2086295) {
                        var50 = 0.1187957;
                    } else {
                        var50 = -0.16898;
                    }
                } else {
                    if (input[11] < 2.297657) {
                        var50 = 0.18381786;
                    } else {
                        var50 = -0.00095701014;
                    }
                }
            }
        }
    }
    var var51;
    if (input[1] < 0.1371544) {
        if (input[6] < -0.5834119) {
            if (input[11] < 2.311251) {
                var51 = -0.09770798;
            } else {
                var51 = 0.18512753;
            }
        } else {
            if (input[5] < 2.224903) {
                if (input[10] < 0.09192781) {
                    var51 = -0.03247356;
                } else {
                    var51 = -0.2410441;
                }
            } else {
                if (input[0] < -0.2641435) {
                    var51 = -0.21149237;
                } else {
                    if (input[5] < 2.253899) {
                        var51 = 0.005754788;
                    } else {
                        var51 = 0.18554197;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.1045144) {
            if (input[13] < 0.2216466) {
                var51 = 0.18823071;
            } else {
                if (input[13] < 0.3275001) {
                    var51 = -0.0980419;
                } else {
                    var51 = 0.17214748;
                }
            }
        } else {
            if (input[15] < 0.1150515) {
                if (input[16] < 0.07130114) {
                    if (input[16] < 0.06565353) {
                        var51 = -0.12369111;
                    } else {
                        var51 = 0.13021776;
                    }
                } else {
                    var51 = -0.20545205;
                }
            } else {
                if (input[9] < 0.1616137) {
                    if (input[5] < 2.368028) {
                        var51 = 0.02097711;
                    } else {
                        var51 = 0.18643856;
                    }
                } else {
                    if (input[12] < 0.2904216) {
                        var51 = -0.17353301;
                    } else {
                        var51 = 0.0022436907;
                    }
                }
            }
        }
    }
    var var52;
    if (input[12] < 0.2955491) {
        if (input[12] < 0.2904216) {
            if (input[9] < 0.1609495) {
                if (input[5] < 2.232935) {
                    if (input[16] < 0.1282299) {
                        var52 = -0.11597925;
                    } else {
                        var52 = 0.07495331;
                    }
                } else {
                    if (input[8] < 2.137482) {
                        var52 = -0.098877005;
                    } else {
                        var52 = 0.084115945;
                    }
                }
            } else {
                if (input[17] < 2.346979) {
                    var52 = -0.21945862;
                } else {
                    var52 = 0.029171942;
                }
            }
        } else {
            if (input[6] < -0.423894) {
                if (input[10] < 0.3569885) {
                    var52 = 0.27235365;
                } else {
                    var52 = -0.024499169;
                }
            } else {
                if (input[11] < 2.400186) {
                    if (input[1] < 0.3820227) {
                        var52 = 0.016272137;
                    } else {
                        var52 = 0.19879276;
                    }
                } else {
                    if (input[3] < -0.2561901) {
                        var52 = -0.29404065;
                    } else {
                        var52 = 0.019090252;
                    }
                }
            }
        }
    } else {
        if (input[8] < 2.246422) {
            if (input[17] < 2.320648) {
                if (input[10] < 0.3771095) {
                    if (input[16] < -0.2784772) {
                        var52 = 0.065906994;
                    } else {
                        var52 = -0.13481925;
                    }
                } else {
                    if (input[5] < 2.134248) {
                        var52 = 0.19693626;
                    } else {
                        var52 = -0.007323406;
                    }
                }
            } else {
                var52 = 0.2100587;
            }
        } else {
            if (input[14] < 2.38854) {
                if (input[5] < 2.347585) {
                    var52 = -0.010564564;
                } else {
                    var52 = -0.25659075;
                }
            } else {
                var52 = 0.046000957;
            }
        }
    }
    var var53;
    if (input[5] < 2.361851) {
        if (input[17] < 2.271492) {
            if (input[2] < 2.358815) {
                if (input[2] < 2.316497) {
                    if (input[6] < -0.3671192) {
                        var53 = 0.020100925;
                    } else {
                        var53 = -0.14821953;
                    }
                } else {
                    if (input[9] < 0.3779187) {
                        var53 = 0.21446364;
                    } else {
                        var53 = -0.103559256;
                    }
                }
            } else {
                if (input[12] < 0.4516816) {
                    if (input[0] < -0.208584) {
                        var53 = 0.070056856;
                    } else {
                        var53 = -0.21741734;
                    }
                } else {
                    var53 = 0.06543662;
                }
            }
        } else {
            if (input[12] < 0.2969764) {
                if (input[15] < 0.3864073) {
                    if (input[9] < 0.1609495) {
                        var53 = 0.19099247;
                    } else {
                        var53 = -0.112882085;
                    }
                } else {
                    var53 = 0.22829692;
                }
            } else {
                var53 = -0.091033176;
            }
        }
    } else {
        if (input[17] < 2.311116) {
            if (input[9] < 0.1609495) {
                var53 = 0.1616267;
            } else {
                var53 = 0.013410575;
            }
        } else {
            if (input[8] < 2.301614) {
                if (input[8] < 2.232991) {
                    if (input[2] < 2.455107) {
                        var53 = 0.16157359;
                    } else {
                        var53 = -0.050603185;
                    }
                } else {
                    if (input[10] < 0.352122) {
                        var53 = 0.013381799;
                    } else {
                        var53 = -0.16804571;
                    }
                }
            } else {
                if (input[15] < 0.108629) {
                    var53 = -0.13865419;
                } else {
                    if (input[1] < 0.2503379) {
                        var53 = -0.0020427676;
                    } else {
                        var53 = 0.20661953;
                    }
                }
            }
        }
    }
    var var54;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.2638147) {
            if (input[11] < 2.402339) {
                if (input[2] < 2.414109) {
                    if (input[9] < 0.3789709) {
                        var54 = 0.014797131;
                    } else {
                        var54 = -0.124897525;
                    }
                } else {
                    if (input[0] < -0.2113573) {
                        var54 = 0.009355688;
                    } else {
                        var54 = -0.20361511;
                    }
                }
            } else {
                if (input[13] < -0.0007198504) {
                    var54 = -0.048923686;
                } else {
                    if (input[8] < 2.234889) {
                        var54 = 0.014120965;
                    } else {
                        var54 = 0.19609974;
                    }
                }
            }
        } else {
            if (input[14] < 2.236722) {
                var54 = 0.011538804;
            } else {
                var54 = -0.18414558;
            }
        }
    } else {
        if (input[5] < 2.376931) {
            if (input[12] < 0.2904216) {
                if (input[9] < 0.1609495) {
                    if (input[8] < 2.155553) {
                        var54 = -0.06267205;
                    } else {
                        var54 = 0.18669218;
                    }
                } else {
                    var54 = -0.18456152;
                }
            } else {
                if (input[9] < 0.168266) {
                    var54 = 0.2609555;
                } else {
                    if (input[12] < 0.4505137) {
                        var54 = -0.04555112;
                    } else {
                        var54 = 0.12257413;
                    }
                }
            }
        } else {
            if (input[17] < 2.326456) {
                if (input[9] < 0.1643516) {
                    var54 = 0.069050826;
                } else {
                    var54 = -0.240941;
                }
            } else {
                if (input[12] < 0.2871916) {
                    var54 = -0.08601994;
                } else {
                    var54 = 0.21185417;
                }
            }
        }
    }
    var var55;
    if (input[11] < 2.396734) {
        if (input[2] < 2.407303) {
            if (input[11] < 2.312862) {
                if (input[13] < -0.08077124) {
                    if (input[13] < -0.09519036) {
                        var55 = 0.034761727;
                    } else {
                        var55 = -0.17958528;
                    }
                } else {
                    if (input[14] < 2.213901) {
                        var55 = -0.025468962;
                    } else {
                        var55 = 0.14607385;
                    }
                }
            } else {
                if (input[13] < 0.2149605) {
                    if (input[6] < -0.2299187) {
                        var55 = 0.24402247;
                    } else {
                        var55 = -0.04912737;
                    }
                } else {
                    if (input[15] < 0.108629) {
                        var55 = -0.15528107;
                    } else {
                        var55 = 0.034908425;
                    }
                }
            }
        } else {
            if (input[12] < 0.2754141) {
                var55 = -0.018776523;
            } else {
                if (input[5] < 2.347585) {
                    var55 = 0.0029657292;
                } else {
                    var55 = -0.23352328;
                }
            }
        }
    } else {
        if (input[14] < 2.386373) {
            if (input[9] < 0.168266) {
                if (input[6] < -0.3383207) {
                    var55 = 0.2471692;
                } else {
                    var55 = 0.056983203;
                }
            } else {
                var55 = -0.11210536;
            }
        } else {
            if (input[15] < 0.3872094) {
                if (input[3] < -0.3266897) {
                    if (input[8] < 2.284908) {
                        var55 = -0.22317208;
                    } else {
                        var55 = 0.03736658;
                    }
                } else {
                    if (input[6] < -0.2008943) {
                        var55 = 0.075391114;
                    } else {
                        var55 = -0.1403541;
                    }
                }
            } else {
                if (input[8] < 2.279753) {
                    if (input[14] < 2.38766) {
                        var55 = -0.05138844;
                    } else {
                        var55 = 0.24109991;
                    }
                } else {
                    var55 = -0.057207007;
                }
            }
        }
    }
    var var56;
    if (input[4] < -0.04337142) {
        if (input[16] < -0.2271359) {
            if (input[16] < -0.2906042) {
                var56 = -0.021008464;
            } else {
                var56 = -0.15933095;
            }
        } else {
            var56 = 0.06141706;
        }
    } else {
        if (input[15] < 0.04894349) {
            if (input[1] < 0.1251911) {
                var56 = -0.008072111;
            } else {
                if (input[1] < 0.5416745) {
                    var56 = 0.1897134;
                } else {
                    var56 = 0.013101189;
                }
            }
        } else {
            if (input[15] < 0.1142023) {
                if (input[17] < 2.043789) {
                    var56 = 0.10147877;
                } else {
                    if (input[17] < 2.372746) {
                        var56 = -0.14479232;
                    } else {
                        var56 = 0.009354899;
                    }
                }
            } else {
                if (input[17] < 2.344304) {
                    if (input[4] < 0.6807286) {
                        var56 = 0.011334116;
                    } else {
                        var56 = -0.14845927;
                    }
                } else {
                    if (input[1] < 0.255342) {
                        var56 = -0.046609342;
                    } else {
                        var56 = 0.19649933;
                    }
                }
            }
        }
    }
    var var57;
    if (input[7] < 0.6104389) {
        if (input[2] < 2.358815) {
            if (input[11] < 2.312862) {
                if (input[16] < 0.1289987) {
                    if (input[12] < 0.1012851) {
                        var57 = -0.10302192;
                    } else {
                        var57 = 0.020244349;
                    }
                } else {
                    var57 = 0.13824767;
                }
            } else {
                if (input[6] < -0.2336033) {
                    var57 = 0.20983507;
                } else {
                    var57 = -0.047354277;
                }
            }
        } else {
            if (input[12] < 0.2961881) {
                if (input[10] < 0.3569885) {
                    if (input[6] < -0.4218412) {
                        var57 = 0.1640394;
                    } else {
                        var57 = -0.089642055;
                    }
                } else {
                    if (input[0] < -0.208584) {
                        var57 = -0.024485687;
                    } else {
                        var57 = -0.18473226;
                    }
                }
            } else {
                if (input[11] < 2.396734) {
                    if (input[16] < -0.2837232) {
                        var57 = -0.039137453;
                    } else {
                        var57 = -0.20777333;
                    }
                } else {
                    var57 = -0.008467518;
                }
            }
        }
    } else {
        if (input[14] < 2.395218) {
            if (input[5] < 2.376931) {
                if (input[14] < 2.393229) {
                    if (input[17] < 2.101579) {
                        var57 = -0.014012308;
                    } else {
                        var57 = 0.17625631;
                    }
                } else {
                    var57 = -0.10691846;
                }
            } else {
                if (input[13] < 0.1395835) {
                    var57 = -0.21265462;
                } else {
                    if (input[0] < -0.1716807) {
                        var57 = 0.12867227;
                    } else {
                        var57 = -0.049506124;
                    }
                }
            }
        } else {
            var57 = 0.18133786;
        }
    }
    var var58;
    if (input[12] < 0.2955491) {
        if (input[12] < 0.2904216) {
            if (input[12] < 0.2737898) {
                if (input[11] < 2.311251) {
                    if (input[14] < 2.090841) {
                        var58 = 0.097917065;
                    } else {
                        var58 = -0.09926084;
                    }
                } else {
                    if (input[14] < 2.404304) {
                        var58 = 0.11777735;
                    } else {
                        var58 = -0.042291652;
                    }
                }
            } else {
                if (input[11] < 2.398371) {
                    var58 = -0.17843848;
                } else {
                    if (input[13] < 0.1383098) {
                        var58 = -0.07332581;
                    } else {
                        var58 = 0.08903441;
                    }
                }
            }
        } else {
            if (input[2] < 2.41691) {
                if (input[17] < 2.331534) {
                    var58 = 0.13312174;
                } else {
                    var58 = -0.14585249;
                }
            } else {
                if (input[5] < 2.376931) {
                    var58 = 0.2358592;
                } else {
                    var58 = 0.030315585;
                }
            }
        }
    } else {
        if (input[5] < 2.347585) {
            if (input[0] < -0.1614316) {
                var58 = 0.1998709;
            } else {
                if (input[9] < 0.2422704) {
                    if (input[1] < 0.4053647) {
                        var58 = -0.20931579;
                    } else {
                        var58 = -0.009354281;
                    }
                } else {
                    if (input[1] < 0.4003597) {
                        var58 = -0.03581178;
                    } else {
                        var58 = 0.21214269;
                    }
                }
            }
        } else {
            if (input[14] < 2.38854) {
                if (input[4] < 0.6010614) {
                    var58 = -0.23368709;
                } else {
                    if (input[5] < 2.374242) {
                        var58 = 0.08181522;
                    } else {
                        var58 = -0.16259152;
                    }
                }
            } else {
                var58 = 0.058464143;
            }
        }
    }
    var var59;
    if (input[15] < 0.04894349) {
        if (input[1] < 0.1251911) {
            if (input[0] < -0.2641435) {
                var59 = -0.11830217;
            } else {
                var59 = 0.062390722;
            }
        } else {
            if (input[1] < 0.5416745) {
                var59 = 0.1748454;
            } else {
                var59 = 0.021034123;
            }
        }
    } else {
        if (input[15] < 0.1150515) {
            if (input[7] < 0.4584951) {
                if (input[2] < 2.37426) {
                    if (input[11] < 2.312862) {
                        var59 = -0.14534447;
                    } else {
                        var59 = 0.03929889;
                    }
                } else {
                    var59 = -0.17545307;
                }
            } else {
                if (input[5] < 2.236422) {
                    var59 = -0.025824634;
                } else {
                    var59 = 0.10616614;
                }
            }
        } else {
            if (input[14] < 2.397084) {
                if (input[14] < 2.185299) {
                    if (input[13] < 0.3393634) {
                        var59 = 0.19782504;
                    } else {
                        var59 = -0.07426544;
                    }
                } else {
                    if (input[16] < -0.2865101) {
                        var59 = 0.086315215;
                    } else {
                        var59 = -0.037328806;
                    }
                }
            } else {
                if (input[13] < 0.01408668) {
                    var59 = -0.0044727256;
                } else {
                    var59 = 0.20083664;
                }
            }
        }
    }
    var var60;
    if (input[8] < 2.459374) {
        if (input[2] < 2.463909) {
            if (input[7] < -0.09014536) {
                if (input[15] < 0.2477022) {
                    var60 = -0.011048028;
                } else {
                    if (input[14] < 2.233577) {
                        var60 = -0.013076749;
                    } else {
                        var60 = -0.17387633;
                    }
                }
            } else {
                if (input[13] < -0.09156694) {
                    var60 = 0.13159241;
                } else {
                    if (input[7] < 0.6824421) {
                        var60 = -0.0061900406;
                    } else {
                        var60 = 0.06284665;
                    }
                }
            }
        } else {
            var60 = -0.16167814;
        }
    } else {
        var60 = 0.121527664;
    }
    var var61;
    if (input[8] < 2.459374) {
        if (input[2] < 2.463909) {
            if (input[7] < -0.09014536) {
                if (input[16] < -0.2271359) {
                    if (input[0] < -0.1047257) {
                        var61 = -0.15633877;
                    } else {
                        var61 = -0.019871859;
                    }
                } else {
                    var61 = 0.0043896222;
                }
            } else {
                if (input[15] < 0.08466835) {
                    if (input[5] < 2.214853) {
                        var61 = -0.017570077;
                    } else {
                        var61 = 0.1587181;
                    }
                } else {
                    if (input[15] < 0.1142023) {
                        var61 = -0.076297216;
                    } else {
                        var61 = 0.01984982;
                    }
                }
            }
        } else {
            var61 = -0.13975556;
        }
    } else {
        var61 = 0.107526734;
    }
    var var62;
    if (input[12] < 0.2955491) {
        if (input[12] < 0.2904216) {
            if (input[0] < -0.208584) {
                if (input[12] < 0.1092973) {
                    if (input[16] < 0.129746) {
                        var62 = -0.03280677;
                    } else {
                        var62 = 0.12207731;
                    }
                } else {
                    if (input[11] < 2.372304) {
                        var62 = 0.037715927;
                    } else {
                        var62 = 0.19531707;
                    }
                }
            } else {
                if (input[0] < -0.1828278) {
                    if (input[8] < 2.250105) {
                        var62 = -0.19510753;
                    } else {
                        var62 = -0.021286268;
                    }
                } else {
                    if (input[6] < -0.1790822) {
                        var62 = 0.11769742;
                    } else {
                        var62 = -0.07988323;
                    }
                }
            }
        } else {
            if (input[2] < 2.41691) {
                if (input[17] < 2.331534) {
                    var62 = 0.11973916;
                } else {
                    var62 = -0.11733497;
                }
            } else {
                if (input[0] < -0.1739942) {
                    var62 = 0.20621204;
                } else {
                    var62 = 0.016003305;
                }
            }
        }
    } else {
        if (input[5] < 2.347585) {
            if (input[14] < 2.213901) {
                if (input[2] < 2.34694) {
                    if (input[17] < 1.978022) {
                        var62 = -0.04866147;
                    } else {
                        var62 = 0.20632075;
                    }
                } else {
                    var62 = -0.16827004;
                }
            } else {
                if (input[1] < 0.2060698) {
                    var62 = -0.07155633;
                } else {
                    var62 = 0.2177812;
                }
            }
        } else {
            if (input[14] < 2.38854) {
                if (input[4] < 0.6010614) {
                    var62 = -0.21174406;
                } else {
                    var62 = -0.0518342;
                }
            } else {
                var62 = 0.051009085;
            }
        }
    }
    var var63;
    if (input[6] < -0.4572336) {
        if (input[5] < 2.358876) {
            if (input[14] < 2.263111) {
                if (input[17] < 2.108728) {
                    if (input[13] < 0.3393634) {
                        var63 = 0.05722682;
                    } else {
                        var63 = -0.12567253;
                    }
                } else {
                    var63 = -0.107628986;
                }
            } else {
                if (input[12] < 0.2961881) {
                    if (input[14] < 2.393229) {
                        var63 = 0.20736831;
                    } else {
                        var63 = 0.044237167;
                    }
                } else {
                    var63 = -0.002923613;
                }
            }
        } else {
            if (input[8] < 2.270184) {
                if (input[14] < 2.386373) {
                    var63 = -0.030641437;
                } else {
                    var63 = -0.1608455;
                }
            } else {
                if (input[15] < 0.1106069) {
                    var63 = -0.03088827;
                } else {
                    var63 = 0.13098727;
                }
            }
        }
    } else {
        if (input[3] < -0.2712049) {
            if (input[1] < 0.1371544) {
                var63 = -0.18070461;
            } else {
                if (input[9] < 0.1548824) {
                    if (input[8] < 2.177315) {
                        var63 = -0.034405094;
                    } else {
                        var63 = 0.12276996;
                    }
                } else {
                    if (input[16] < -0.0891017) {
                        var63 = -0.012601261;
                    } else {
                        var63 = -0.1656591;
                    }
                }
            }
        } else {
            if (input[10] < 0.371812) {
                if (input[14] < 2.212829) {
                    if (input[1] < 0.2421914) {
                        var63 = -0.041983306;
                    } else {
                        var63 = -0.16955484;
                    }
                } else {
                    if (input[1] < 0.4103685) {
                        var63 = 0.115452945;
                    } else {
                        var63 = -0.060272604;
                    }
                }
            } else {
                if (input[0] < -0.1535834) {
                    var63 = -0.022722945;
                } else {
                    var63 = 0.18738106;
                }
            }
        }
    }
    var var64;
    if (input[9] < 0.3789709) {
        if (input[9] < 0.2422704) {
            if (input[0] < -0.1614316) {
                if (input[17] < 2.036933) {
                    var64 = 0.14262879;
                } else {
                    if (input[5] < 2.224903) {
                        var64 = -0.059751227;
                    } else {
                        var64 = 0.015309711;
                    }
                }
            } else {
                if (input[1] < 0.4070966) {
                    var64 = -0.1970308;
                } else {
                    var64 = 0.059284426;
                }
            }
        } else {
            if (input[1] < 0.4003597) {
                if (input[16] < -0.2784772) {
                    if (input[14] < 2.212829) {
                        var64 = -0.02810354;
                    } else {
                        var64 = 0.12868765;
                    }
                } else {
                    var64 = -0.15861005;
                }
            } else {
                var64 = 0.17152613;
            }
        }
    } else {
        var64 = -0.09769954;
    }
    var var65;
    if (input[14] < 2.090841) {
        if (input[13] < 0.3375396) {
            var65 = 0.14760116;
        } else {
            var65 = -0.013912044;
        }
    } else {
        if (input[8] < 2.017858) {
            if (input[4] < 0.2373017) {
                var65 = -0.17693487;
            } else {
                if (input[1] < 0.5886295) {
                    var65 = 0.11143245;
                } else {
                    var65 = -0.13557635;
                }
            }
        } else {
            if (input[14] < 2.187465) {
                if (input[6] < -0.4909391) {
                    var65 = 0.0067388946;
                } else {
                    var65 = 0.15126377;
                }
            } else {
                if (input[5] < 2.224903) {
                    if (input[9] < 0.2422704) {
                        var65 = -0.123303466;
                    } else {
                        var65 = 0.020620387;
                    }
                } else {
                    if (input[2] < 2.339195) {
                        var65 = 0.12488895;
                    } else {
                        var65 = -0.012727148;
                    }
                }
            }
        }
    }
    var var66;
    if (input[13] < -0.08265787) {
        if (input[11] < 2.312862) {
            if (input[9] < 0.06479538) {
                var66 = 0.034552548;
            } else {
                if (input[12] < 0.1012851) {
                    var66 = -0.19978982;
                } else {
                    var66 = -0.019036263;
                }
            }
        } else {
            var66 = 0.062219445;
        }
    } else {
        if (input[15] < 0.09116375) {
            if (input[17] < 2.108728) {
                var66 = 0.16911453;
            } else {
                var66 = 0.024020663;
            }
        } else {
            if (input[17] < 2.344304) {
                if (input[17] < 2.331534) {
                    if (input[9] < 0.168266) {
                        var66 = 0.041010477;
                    } else {
                        var66 = -0.05079656;
                    }
                } else {
                    if (input[9] < 0.1657671) {
                        var66 = -0.143684;
                    } else {
                        var66 = 0.08170647;
                    }
                }
            } else {
                if (input[15] < 0.108629) {
                    var66 = -0.10064773;
                } else {
                    if (input[1] < 0.5671235) {
                        var66 = 0.16099785;
                    } else {
                        var66 = -0.015216235;
                    }
                }
            }
        }
    }
    var var67;
    if (input[16] < 0.2166841) {
        if (input[16] < 0.129746) {
            if (input[9] < 0.05946675) {
                if (input[14] < 2.090841) {
                    var67 = 0.026320979;
                } else {
                    if (input[17] < 2.369721) {
                        var67 = -0.16947363;
                    } else {
                        var67 = 0.0054154517;
                    }
                }
            } else {
                if (input[9] < 0.06479538) {
                    var67 = 0.12906812;
                } else {
                    if (input[10] < 0.3766026) {
                        var67 = -0.0144674545;
                    } else {
                        var67 = 0.08273412;
                    }
                }
            }
        } else {
            if (input[9] < 0.02893039) {
                var67 = 0.15402636;
            } else {
                var67 = 0.014074838;
            }
        }
    } else {
        var67 = -0.094055496;
    }
    var var68;
    if (input[7] < -0.09014536) {
        if (input[11] < 2.312862) {
            if (input[0] < -0.1047257) {
                var68 = -0.12927607;
            } else {
                var68 = -0.008165297;
            }
        } else {
            var68 = 0.015964603;
        }
    } else {
        if (input[15] < 0.3879333) {
            if (input[14] < 2.385759) {
                if (input[8] < 2.19351) {
                    if (input[6] < -0.371802) {
                        var68 = 0.031394426;
                    } else {
                        var68 = -0.11700023;
                    }
                } else {
                    if (input[6] < -0.640889) {
                        var68 = -0.026966475;
                    } else {
                        var68 = 0.15155952;
                    }
                }
            } else {
                if (input[11] < 2.375712) {
                    var68 = 0.084217414;
                } else {
                    if (input[11] < 2.398371) {
                        var68 = -0.16064799;
                    } else {
                        var68 = -0.020128123;
                    }
                }
            }
        } else {
            if (input[14] < 2.213901) {
                var68 = -0.07717134;
            } else {
                if (input[3] < -0.4148544) {
                    var68 = -0.050216995;
                } else {
                    if (input[8] < 2.279753) {
                        var68 = 0.21157737;
                    } else {
                        var68 = 0.0038693552;
                    }
                }
            }
        }
    }
    var var69;
    if (input[7] < 0.6697765) {
        if (input[2] < 2.414109) {
            if (input[11] < 2.311251) {
                if (input[14] < 2.229367) {
                    if (input[14] < 2.213901) {
                        var69 = -0.013807091;
                    } else {
                        var69 = 0.11450738;
                    }
                } else {
                    if (input[8] < 2.158624) {
                        var69 = -0.169016;
                    } else {
                        var69 = -0.044125997;
                    }
                }
            } else {
                if (input[16] < -0.08998464) {
                    if (input[5] < 2.224903) {
                        var69 = -0.009657617;
                    } else {
                        var69 = 0.17833799;
                    }
                } else {
                    if (input[17] < 2.371366) {
                        var69 = -0.093917824;
                    } else {
                        var69 = 0.050234932;
                    }
                }
            }
        } else {
            if (input[6] < -0.423894) {
                if (input[14] < 2.38854) {
                    if (input[12] < 0.2951176) {
                        var69 = 0.051058814;
                    } else {
                        var69 = -0.12523863;
                    }
                } else {
                    var69 = 0.08369714;
                }
            } else {
                var69 = -0.1536308;
            }
        }
    } else {
        if (input[15] < 0.3855608) {
            if (input[9] < 0.1609495) {
                if (input[12] < 0.2871916) {
                    if (input[15] < 0.1172144) {
                        var69 = 0.077465415;
                    } else {
                        var69 = -0.05676163;
                    }
                } else {
                    var69 = 0.16578004;
                }
            } else {
                if (input[11] < 2.401231) {
                    var69 = -0.1437308;
                } else {
                    var69 = 0.042669024;
                }
            }
        } else {
            if (input[7] < 0.7572523) {
                var69 = 0.020457711;
            } else {
                var69 = 0.17039719;
            }
        }
    }
    var var70;
    if (input[1] < 0.1251911) {
        if (input[6] < -0.6051533) {
            var70 = 0.066786386;
        } else {
            if (input[10] < 0.08922081) {
                var70 = 0.0046232855;
            } else {
                var70 = -0.15223429;
            }
        }
    } else {
        if (input[15] < 0.1045144) {
            if (input[17] < 2.093658) {
                var70 = 0.14076838;
            } else {
                var70 = 0.018649707;
            }
        } else {
            if (input[12] < 0.1040668) {
                if (input[16] < 0.1282299) {
                    if (input[13] < 0.2928318) {
                        var70 = -0.032196417;
                    } else {
                        var70 = -0.15233672;
                    }
                } else {
                    var70 = 0.030159432;
                }
            } else {
                if (input[10] < 0.5537991) {
                    if (input[15] < 0.1176574) {
                        var70 = -0.11043828;
                    } else {
                        var70 = 0.012652613;
                    }
                } else {
                    var70 = 0.12518114;
                }
            }
        }
    }
    var var71;
    if (input[9] < 0.3779187) {
        if (input[9] < 0.2422704) {
            if (input[0] < -0.1614316) {
                if (input[17] < 2.040213) {
                    var71 = 0.10875664;
                } else {
                    if (input[12] < 0.2961881) {
                        var71 = 0.00819498;
                    } else {
                        var71 = -0.07397315;
                    }
                }
            } else {
                if (input[1] < 0.4070966) {
                    var71 = -0.16431227;
                } else {
                    var71 = 0.045980815;
                }
            }
        } else {
            if (input[7] < -0.0351704) {
                var71 = -0.031111415;
            } else {
                if (input[2] < 2.356126) {
                    var71 = 0.15208785;
                } else {
                    var71 = -0.00744346;
                }
            }
        }
    } else {
        var71 = -0.0774697;
    }
    var var72;
    if (input[13] < -0.08265787) {
        if (input[12] < 0.1012851) {
            if (input[11] < 2.311251) {
                var72 = -0.1493858;
            } else {
                if (input[12] < 0.09436774) {
                    var72 = -0.102240205;
                } else {
                    var72 = 0.08030438;
                }
            }
        } else {
            var72 = 0.043789513;
        }
    } else {
        if (input[17] < 2.376259) {
            if (input[15] < 0.08466835) {
                var72 = 0.09783852;
            } else {
                if (input[15] < 0.1324204) {
                    if (input[10] < 0.3690408) {
                        var72 = 0.035087347;
                    } else {
                        var72 = -0.08729727;
                    }
                } else {
                    if (input[13] < 0.171623) {
                        var72 = -0.012643177;
                    } else {
                        var72 = 0.13223208;
                    }
                }
            }
        } else {
            var72 = 0.12445153;
        }
    }
    var var73;
    if (input[14] < 2.090841) {
        var73 = 0.0740246;
    } else {
        if (input[8] < 2.050338) {
            if (input[10] < 0.3771095) {
                var73 = -0.13568833;
            } else {
                if (input[15] < 0.1335447) {
                    var73 = -0.10703576;
                } else {
                    var73 = 0.088016376;
                }
            }
        } else {
            if (input[11] < 2.278109) {
                if (input[4] < 0.1601623) {
                    var73 = -0.021814715;
                } else {
                    var73 = 0.17826666;
                }
            } else {
                if (input[14] < 2.212829) {
                    if (input[13] < -0.08649424) {
                        var73 = 0.007473429;
                    } else {
                        var73 = -0.16071631;
                    }
                } else {
                    if (input[11] < 2.290841) {
                        var73 = 0.12532164;
                    } else {
                        var73 = 0.0004811404;
                    }
                }
            }
        }
    }
    var var74;
    if (input[6] < -0.5834119) {
        if (input[2] < 2.372276) {
            if (input[10] < 0.60533) {
                if (input[7] < 0.2131697) {
                    var74 = 0.02967488;
                } else {
                    var74 = 0.1660105;
                }
            } else {
                var74 = -0.011793112;
            }
        } else {
            if (input[11] < 2.396734) {
                if (input[13] < 0.2149605) {
                    var74 = 0.0066191773;
                } else {
                    var74 = -0.11928136;
                }
            } else {
                var74 = 0.05532625;
            }
        }
    } else {
        if (input[1] < 0.1371544) {
            if (input[3] < -0.2872138) {
                if (input[6] < -0.4844449) {
                    var74 = -0.039763935;
                } else {
                    var74 = -0.1449176;
                }
            } else {
                var74 = 0.011298003;
            }
        } else {
            if (input[10] < 0.3528775) {
                if (input[14] < 2.213901) {
                    if (input[0] < -0.01714169) {
                        var74 = 0.003398957;
                    } else {
                        var74 = -0.11853623;
                    }
                } else {
                    if (input[16] < -0.0891017) {
                        var74 = 0.13050234;
                    } else {
                        var74 = -0.04781243;
                    }
                }
            } else {
                if (input[17] < 2.344304) {
                    if (input[14] < 2.393229) {
                        var74 = -0.013523643;
                    } else {
                        var74 = -0.14542486;
                    }
                } else {
                    if (input[15] < 0.1112356) {
                        var74 = -0.030162834;
                    } else {
                        var74 = 0.13255851;
                    }
                }
            }
        }
    }
    var var75;
    if (input[7] < 0.6697765) {
        if (input[0] < -0.2061455) {
            if (input[11] < 2.311251) {
                if (input[16] < 0.124144) {
                    if (input[10] < 0.09768953) {
                        var75 = -0.0233406;
                    } else {
                        var75 = -0.17290893;
                    }
                } else {
                    var75 = 0.091984965;
                }
            } else {
                if (input[16] < -0.23059) {
                    var75 = -0.07112226;
                } else {
                    if (input[13] < 0.135247) {
                        var75 = 0.12362844;
                    } else {
                        var75 = -0.008456152;
                    }
                }
            }
        } else {
            if (input[9] < 0.1650738) {
                var75 = -0.18565643;
            } else {
                if (input[0] < -0.1614316) {
                    var75 = 0.08565222;
                } else {
                    if (input[16] < -0.2879585) {
                        var75 = 0.0650807;
                    } else {
                        var75 = -0.061304696;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.3855608) {
            if (input[9] < 0.1609495) {
                if (input[4] < 0.6759008) {
                    var75 = 0.11910507;
                } else {
                    var75 = -0.012127177;
                }
            } else {
                if (input[16] < -0.09310959) {
                    var75 = 0.031242657;
                } else {
                    var75 = -0.12496858;
                }
            }
        } else {
            var75 = 0.12097003;
        }
    }
    var var76;
    if (input[12] < 0.2951176) {
        if (input[12] < 0.2904216) {
            if (input[9] < 0.1597037) {
                if (input[12] < 0.1012851) {
                    if (input[16] < 0.1282299) {
                        var76 = -0.065050535;
                    } else {
                        var76 = 0.06710198;
                    }
                } else {
                    if (input[10] < 0.3616637) {
                        var76 = 0.14879267;
                    } else {
                        var76 = 0.0073694284;
                    }
                }
            } else {
                if (input[0] < -0.1803919) {
                    var76 = -0.13028835;
                } else {
                    var76 = 0.0006739101;
                }
            }
        } else {
            if (input[2] < 2.41691) {
                if (input[14] < 2.38854) {
                    var76 = 0.025989698;
                } else {
                    var76 = -0.02174259;
                }
            } else {
                if (input[0] < -0.1739942) {
                    var76 = 0.18485539;
                } else {
                    var76 = 0.0242443;
                }
            }
        }
    } else {
        if (input[8] < 2.222052) {
            if (input[0] < -0.1614316) {
                var76 = 0.13892831;
            } else {
                if (input[8] < 2.026778) {
                    var76 = -0.09138839;
                } else {
                    if (input[1] < 0.4003597) {
                        var76 = -0.026977576;
                    } else {
                        var76 = 0.13033344;
                    }
                }
            }
        } else {
            if (input[14] < 2.38854) {
                if (input[13] < 0.1309269) {
                    var76 = -0.024987428;
                } else {
                    var76 = -0.17815585;
                }
            } else {
                var76 = 0.027240979;
            }
        }
    }
    var var77;
    if (input[7] < 0.6824421) {
        if (input[2] < 2.414109) {
            if (input[3] < -0.3363961) {
                if (input[15] < 0.1146012) {
                    if (input[1] < 0.5648136) {
                        var77 = 0.02199327;
                    } else {
                        var77 = -0.1136067;
                    }
                } else {
                    if (input[15] < 0.3966779) {
                        var77 = 0.12427664;
                    } else {
                        var77 = -0.026435453;
                    }
                }
            } else {
                if (input[3] < -0.2805286) {
                    if (input[3] < -0.3062947) {
                        var77 = -0.00869743;
                    } else {
                        var77 = -0.123151176;
                    }
                } else {
                    if (input[15] < 0.2876368) {
                        var77 = 0.085051164;
                    } else {
                        var77 = -0.04122164;
                    }
                }
            }
        } else {
            if (input[0] < -0.2096866) {
                if (input[15] < 0.3914126) {
                    var77 = 0.035277676;
                } else {
                    var77 = -0.0043345843;
                }
            } else {
                if (input[9] < 0.1650738) {
                    var77 = -0.17430755;
                } else {
                    if (input[14] < 2.389682) {
                        var77 = -0.062364955;
                    } else {
                        var77 = 0.055758547;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.3855608) {
            if (input[15] < 0.3680492) {
                var77 = 0.094495825;
            } else {
                if (input[8] < 2.231462) {
                    var77 = 0.023912216;
                } else {
                    if (input[17] < 2.326456) {
                        var77 = -0.13667494;
                    } else {
                        var77 = 0.014166518;
                    }
                }
            }
        } else {
            var77 = 0.11161677;
        }
    }
    var var78;
    if (input[1] < 0.1251911) {
        if (input[6] < -0.5784116) {
            var78 = 0.038149457;
        } else {
            if (input[3] < -0.3864521) {
                var78 = -0.12897995;
            } else {
                var78 = -0.010464707;
            }
        }
    } else {
        if (input[15] < 0.1045144) {
            if (input[17] < 2.093658) {
                var78 = 0.1157365;
            } else {
                var78 = 0.008728156;
            }
        } else {
            if (input[12] < 0.1040668) {
                if (input[14] < 2.090841) {
                    var78 = 0.028672235;
                } else {
                    if (input[11] < 2.312862) {
                        var78 = -0.13680294;
                    } else {
                        var78 = -0.019264285;
                    }
                }
            } else {
                if (input[9] < 0.1548824) {
                    if (input[0] < -0.2096866) {
                        var78 = 0.12107483;
                    } else {
                        var78 = -0.025006512;
                    }
                } else {
                    if (input[8] < 2.232991) {
                        var78 = 0.03280181;
                    } else {
                        var78 = -0.048665006;
                    }
                }
            }
        }
    }
    var var79;
    if (input[8] < 2.050338) {
        if (input[5] < 2.128641) {
            if (input[1] < 0.5912862) {
                var79 = 0.08059484;
            } else {
                var79 = -0.070332415;
            }
        } else {
            if (input[8] < 2.023136) {
                var79 = -0.12882444;
            } else {
                var79 = -0.021918954;
            }
        }
    } else {
        if (input[11] < 2.278109) {
            if (input[7] < -0.03077204) {
                var79 = -0.013777017;
            } else {
                var79 = 0.13871418;
            }
        } else {
            if (input[9] < 0.168266) {
                if (input[17] < 2.330252) {
                    if (input[11] < 2.380152) {
                        var79 = -0.024523301;
                    } else {
                        var79 = 0.12745877;
                    }
                } else {
                    if (input[11] < 2.380152) {
                        var79 = 0.0739255;
                    } else {
                        var79 = -0.070801735;
                    }
                }
            } else {
                if (input[17] < 2.326456) {
                    if (input[16] < -0.2847922) {
                        var79 = 0.05526264;
                    } else {
                        var79 = -0.16920027;
                    }
                } else {
                    var79 = 0.08743665;
                }
            }
        }
    }
    var var80;
    if (input[8] < 2.088269) {
        if (input[1] < 0.4003597) {
            var80 = -0.11187477;
        } else {
            if (input[8] < 2.030891) {
                if (input[16] < 0.124144) {
                    if (input[2] < 2.167756) {
                        var80 = -0.10812491;
                    } else {
                        var80 = -0.008187506;
                    }
                } else {
                    var80 = 0.038512338;
                }
            } else {
                var80 = 0.11787077;
            }
        }
    } else {
        if (input[5] < 2.358876) {
            if (input[3] < -0.3704631) {
                if (input[1] < 0.100942) {
                    var80 = -0.023391802;
                } else {
                    if (input[2] < 2.414109) {
                        var80 = 0.14929113;
                    } else {
                        var80 = 0.020573387;
                    }
                }
            } else {
                if (input[10] < 0.2076861) {
                    if (input[17] < 2.078748) {
                        var80 = 0.010351516;
                    } else {
                        var80 = -0.097282104;
                    }
                } else {
                    if (input[16] < -0.2784772) {
                        var80 = 0.10994935;
                    } else {
                        var80 = -0.030881183;
                    }
                }
            }
        } else {
            if (input[16] < 0.06642205) {
                if (input[16] < -0.09104811) {
                    if (input[2] < 2.415272) {
                        var80 = 0.11172334;
                    } else {
                        var80 = -0.017901033;
                    }
                } else {
                    if (input[14] < 2.387166) {
                        var80 = 0.027731216;
                    } else {
                        var80 = -0.12920532;
                    }
                }
            } else {
                var80 = 0.1118602;
            }
        }
    }
    var var81;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.371802) {
            if (input[13] < 0.135247) {
                if (input[13] < 0.133471) {
                    if (input[8] < 2.224434) {
                        var81 = 0.03306809;
                    } else {
                        var81 = -0.07623911;
                    }
                } else {
                    var81 = 0.12431727;
                }
            } else {
                if (input[17] < 2.324837) {
                    if (input[16] < 0.03336896) {
                        var81 = 0.14184754;
                    } else {
                        var81 = -0.020748358;
                    }
                } else {
                    if (input[11] < 2.380152) {
                        var81 = 0.046585362;
                    } else {
                        var81 = -0.16062284;
                    }
                }
            }
        } else {
            if (input[0] < -0.1143756) {
                if (input[8] < 2.196181) {
                    var81 = -0.1231403;
                } else {
                    var81 = -0.021818474;
                }
            } else {
                var81 = 0.03743031;
            }
        }
    } else {
        if (input[11] < 2.400186) {
            if (input[12] < 0.2871916) {
                if (input[17] < 2.1134) {
                    var81 = 0.045234837;
                } else {
                    var81 = -0.07482088;
                }
            } else {
                if (input[17] < 2.319168) {
                    if (input[2] < 2.364653) {
                        var81 = 0.041789193;
                    } else {
                        var81 = -0.0431216;
                    }
                } else {
                    var81 = 0.16850401;
                }
            }
        } else {
            if (input[17] < 2.326456) {
                var81 = -0.085960284;
            } else {
                var81 = 0.062997356;
            }
        }
    }
    var var82;
    if (input[1] < 0.1251911) {
        if (input[9] < 0.06479538) {
            var82 = 0.028179457;
        } else {
            var82 = -0.07928294;
        }
    } else {
        if (input[15] < 0.1045144) {
            if (input[17] < 2.093658) {
                var82 = 0.095830604;
            } else {
                var82 = 0.012566784;
            }
        } else {
            if (input[13] < 0.3382076) {
                if (input[1] < 0.5742323) {
                    if (input[16] < -0.2847922) {
                        var82 = 0.07644329;
                    } else {
                        var82 = -0.009629586;
                    }
                } else {
                    var82 = 0.09898647;
                }
            } else {
                var82 = -0.081294104;
            }
        }
    }
    var var83;
    if (input[7] < 0.6824421) {
        if (input[16] < 0.1698005) {
            if (input[16] < 0.1282299) {
                if (input[9] < 0.0565554) {
                    var83 = -0.09345946;
                } else {
                    if (input[9] < 0.06479538) {
                        var83 = 0.07783205;
                    } else {
                        var83 = -0.005039296;
                    }
                }
            } else {
                var83 = 0.0825557;
            }
        } else {
            var83 = -0.081181005;
        }
    } else {
        if (input[15] < 0.3829254) {
            if (input[15] < 0.3680492) {
                var83 = 0.07693702;
            } else {
                if (input[5] < 2.382052) {
                    var83 = 0.01181027;
                } else {
                    var83 = -0.09664624;
                }
            }
        } else {
            var83 = 0.08323355;
        }
    }
    var var84;
    if (input[17] < 2.344304) {
        if (input[4] < 0.6807286) {
            if (input[11] < 2.397886) {
                if (input[2] < 2.407303) {
                    if (input[11] < 2.312862) {
                        var84 = -0.011606419;
                    } else {
                        var84 = 0.10161085;
                    }
                } else {
                    if (input[8] < 2.238728) {
                        var84 = -0.027190322;
                    } else {
                        var84 = -0.12576541;
                    }
                }
            } else {
                if (input[9] < 0.1643516) {
                    if (input[17] < 2.328115) {
                        var84 = 0.15430248;
                    } else {
                        var84 = 0.033176556;
                    }
                } else {
                    if (input[10] < 0.3549885) {
                        var84 = 0.024384214;
                    } else {
                        var84 = -0.06288417;
                    }
                }
            }
        } else {
            var84 = -0.08884819;
        }
    } else {
        if (input[15] < 0.108629) {
            var84 = -0.0611419;
        } else {
            if (input[8] < 2.270184) {
                var84 = 0.0045584696;
            } else {
                var84 = 0.1179305;
            }
        }
    }
    var var85;
    if (input[1] < 0.1371544) {
        if (input[11] < 2.311251) {
            var85 = -0.0879189;
        } else {
            if (input[6] < -0.4877378) {
                var85 = 0.07923055;
            } else {
                var85 = -0.059693225;
            }
        }
    } else {
        if (input[14] < 2.213901) {
            if (input[2] < 2.34694) {
                if (input[8] < 2.035783) {
                    if (input[5] < 2.128641) {
                        var85 = 0.028518563;
                    } else {
                        var85 = -0.09051015;
                    }
                } else {
                    var85 = 0.0900525;
                }
            } else {
                var85 = -0.12845698;
            }
        } else {
            if (input[2] < 2.367139) {
                if (input[1] < 0.2086295) {
                    var85 = 0.00692831;
                } else {
                    var85 = 0.16559328;
                }
            } else {
                if (input[11] < 2.396734) {
                    if (input[13] < 0.135247) {
                        var85 = 0.052211974;
                    } else {
                        var85 = -0.08565022;
                    }
                } else {
                    if (input[9] < 0.168266) {
                        var85 = 0.065819055;
                    } else {
                        var85 = -0.050940767;
                    }
                }
            }
        }
    }
    var var86;
    if (input[12] < 0.1012851) {
        if (input[6] < -0.6238582) {
            var86 = 0.048464037;
        } else {
            if (input[5] < 2.224903) {
                if (input[7] < 0.3128026) {
                    var86 = 0.013982245;
                } else {
                    var86 = -0.13719016;
                }
            } else {
                if (input[0] < -0.2641435) {
                    var86 = -0.07304762;
                } else {
                    var86 = 0.08034959;
                }
            }
        }
    } else {
        if (input[15] < 0.2867854) {
            if (input[2] < 2.372276) {
                var86 = 0.13495754;
            } else {
                if (input[13] < 0.22498) {
                    var86 = 0.040621538;
                } else {
                    var86 = -0.073710926;
                }
            }
        } else {
            if (input[14] < 2.396052) {
                if (input[15] < 0.3894425) {
                    if (input[14] < 2.386373) {
                        var86 = 0.0022538546;
                    } else {
                        var86 = -0.094827764;
                    }
                } else {
                    if (input[17] < 2.095371) {
                        var86 = -0.076766156;
                    } else {
                        var86 = 0.057077605;
                    }
                }
            } else {
                var86 = 0.094406195;
            }
        }
    }
    var var87;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.4218412) {
            if (input[11] < 2.398904) {
                if (input[2] < 2.407303) {
                    if (input[15] < 0.1137889) {
                        var87 = -0.04291483;
                    } else {
                        var87 = 0.07548702;
                    }
                } else {
                    var87 = -0.09300839;
                }
            } else {
                var87 = 0.09485798;
            }
        } else {
            if (input[1] < 0.4019573) {
                if (input[16] < -0.2683162) {
                    var87 = 0.027250962;
                } else {
                    if (input[0] < -0.2061455) {
                        var87 = -0.018693356;
                    } else {
                        var87 = -0.1494132;
                    }
                }
            } else {
                var87 = 0.02795222;
            }
        }
    } else {
        if (input[14] < 2.211369) {
            var87 = -0.03000356;
        } else {
            if (input[11] < 2.400186) {
                if (input[15] < 0.3792719) {
                    var87 = 0.006918813;
                } else {
                    if (input[17] < 2.319168) {
                        var87 = 0.023489196;
                    } else {
                        var87 = 0.15635404;
                    }
                }
            } else {
                if (input[16] < -0.0925546) {
                    var87 = 0.052517038;
                } else {
                    var87 = -0.06417169;
                }
            }
        }
    }
    var var88;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.3625965) {
            if (input[15] < 0.1142023) {
                if (input[15] < 0.1023147) {
                    if (input[13] < -0.08265787) {
                        var88 = -0.03538131;
                    } else {
                        var88 = 0.07668847;
                    }
                } else {
                    if (input[12] < 0.1049485) {
                        var88 = -0.113850705;
                    } else {
                        var88 = -0.0150738675;
                    }
                }
            } else {
                if (input[15] < 0.2867854) {
                    if (input[7] < 0.1531241) {
                        var88 = 0.15677519;
                    } else {
                        var88 = 0.025730727;
                    }
                } else {
                    if (input[12] < 0.2961881) {
                        var88 = 0.029536644;
                    } else {
                        var88 = -0.059259266;
                    }
                }
            }
        } else {
            if (input[8] < 2.196181) {
                var88 = -0.09493609;
            } else {
                var88 = 0.0033127437;
            }
        }
    } else {
        if (input[12] < 0.2946321) {
            if (input[8] < 2.19351) {
                var88 = -0.027614307;
            } else {
                if (input[9] < 0.1597037) {
                    var88 = 0.11997146;
                } else {
                    var88 = 0.028132122;
                }
            }
        } else {
            if (input[8] < 2.224434) {
                var88 = 0.05837349;
            } else {
                var88 = -0.08628058;
            }
        }
    }
    var var89;
    if (input[1] < 0.4053647) {
        if (input[10] < 0.3549885) {
            if (input[11] < 2.311251) {
                if (input[16] < -0.277749) {
                    if (input[14] < 2.213901) {
                        var89 = -0.042259376;
                    } else {
                        var89 = 0.10350062;
                    }
                } else {
                    var89 = -0.11850507;
                }
            } else {
                if (input[11] < 2.401971) {
                    if (input[12] < 0.2961881) {
                        var89 = 0.11525883;
                    } else {
                        var89 = -0.050466;
                    }
                } else {
                    var89 = -0.043667693;
                }
            }
        } else {
            if (input[17] < 2.101579) {
                if (input[17] < 1.978022) {
                    var89 = -0.060902983;
                } else {
                    var89 = 0.07882814;
                }
            } else {
                if (input[2] < 2.427473) {
                    var89 = -0.124423094;
                } else {
                    var89 = -0.03915691;
                }
            }
        }
    } else {
        if (input[12] < 0.1040668) {
            if (input[16] < 0.124144) {
                var89 = -0.09253852;
            } else {
                var89 = 0.03351525;
            }
        } else {
            if (input[13] < 0.171623) {
                if (input[15] < 0.3829254) {
                    var89 = -0.054778498;
                } else {
                    var89 = 0.059264466;
                }
            } else {
                if (input[11] < 2.375712) {
                    var89 = 0.15321167;
                } else {
                    var89 = 0.010730468;
                }
            }
        }
    }
    var var90;
    if (input[7] < 0.6824421) {
        if (input[5] < 2.358876) {
            if (input[14] < 2.263111) {
                if (input[2] < 2.358815) {
                    if (input[2] < 2.316497) {
                        var90 = -0.017326767;
                    } else {
                        var90 = 0.0860823;
                    }
                } else {
                    var90 = -0.09343618;
                }
            } else {
                if (input[0] < -0.208584) {
                    var90 = 0.10812055;
                } else {
                    var90 = -0.0025730752;
                }
            }
        } else {
            if (input[7] < -0.04977591) {
                var90 = 0.029873667;
            } else {
                if (input[16] < 0.06162413) {
                    var90 = -0.10329443;
                } else {
                    var90 = 0.0059001087;
                }
            }
        }
    } else {
        if (input[13] < 0.1395835) {
            if (input[13] < 0.132465) {
                var90 = 0.064533;
            } else {
                var90 = -0.059718024;
            }
        } else {
            if (input[4] < 0.6759008) {
                var90 = 0.110130586;
            } else {
                var90 = -0.0032400687;
            }
        }
    }
    var var91;
    if (input[1] < 0.1251911) {
        if (input[5] < 2.232935) {
            var91 = -0.07823889;
        } else {
            var91 = 0.007410549;
        }
    } else {
        if (input[15] < 0.1045144) {
            var91 = 0.07201194;
        } else {
            if (input[12] < 0.1040668) {
                if (input[11] < 2.031723) {
                    var91 = 0.009402649;
                } else {
                    var91 = -0.083013184;
                }
            } else {
                if (input[1] < 0.4266428) {
                    if (input[17] < 2.330252) {
                        var91 = 0.015524607;
                    } else {
                        var91 = -0.046233762;
                    }
                } else {
                    if (input[6] < -0.2761271) {
                        var91 = 0.09597182;
                    } else {
                        var91 = -0.0031597607;
                    }
                }
            }
        }
    }
    var var92;
    if (input[8] < 2.050338) {
        if (input[14] < 2.090841) {
            var92 = 0.04571498;
        } else {
            if (input[9] < 0.2394304) {
                var92 = -0.09884951;
            } else {
                var92 = 0.004831966;
            }
        }
    } else {
        if (input[17] < 2.078748) {
            if (input[12] < 0.09436774) {
                var92 = -0.03219975;
            } else {
                if (input[11] < 2.311251) {
                    var92 = 0.018320415;
                } else {
                    var92 = 0.12695582;
                }
            }
        } else {
            if (input[11] < 2.397886) {
                if (input[2] < 2.407303) {
                    if (input[14] < 2.263111) {
                        var92 = -0.039845277;
                    } else {
                        var92 = 0.06149218;
                    }
                } else {
                    if (input[15] < 0.3886119) {
                        var92 = -0.11605283;
                    } else {
                        var92 = -0.029916715;
                    }
                }
            } else {
                if (input[6] < -0.2299187) {
                    if (input[13] < 0.133471) {
                        var92 = -0.009245534;
                    } else {
                        var92 = 0.08471002;
                    }
                } else {
                    var92 = -0.05615587;
                }
            }
        }
    }
    var var93;
    if (input[7] < 0.4584951) {
        if (input[15] < 0.1142023) {
            if (input[15] < 0.03212815) {
                var93 = 0.015855623;
            } else {
                if (input[17] < 2.369721) {
                    var93 = -0.111030005;
                } else {
                    var93 = -0.02001515;
                }
            }
        } else {
            if (input[9] < 0.1548824) {
                if (input[7] < 0.1531241) {
                    var93 = 0.119554475;
                } else {
                    var93 = 0.0057998043;
                }
            } else {
                if (input[9] < 0.1650738) {
                    if (input[13] < 0.135247) {
                        var93 = 0.004731399;
                    } else {
                        var93 = -0.10917361;
                    }
                } else {
                    if (input[0] < -0.1614316) {
                        var93 = 0.09598426;
                    } else {
                        var93 = -0.024813538;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.060337) {
            var93 = 0.098567985;
        } else {
            if (input[17] < 2.336649) {
                if (input[9] < 0.168266) {
                    if (input[12] < 0.2871916) {
                        var93 = -0.063808255;
                    } else {
                        var93 = 0.09357196;
                    }
                } else {
                    var93 = -0.075474516;
                }
            } else {
                var93 = 0.08525994;
            }
        }
    }
    var var94;
    if (input[3] < -0.2370141) {
        if (input[6] < -0.423894) {
            if (input[3] < -0.3864521) {
                if (input[6] < -0.5494666) {
                    if (input[5] < 2.358876) {
                        var94 = 0.051362842;
                    } else {
                        var94 = -0.0548945;
                    }
                } else {
                    if (input[4] < 0.279641) {
                        var94 = -0.09822973;
                    } else {
                        var94 = 0.0009292249;
                    }
                }
            } else {
                if (input[3] < -0.341573) {
                    var94 = 0.0970638;
                } else {
                    if (input[15] < 0.3701834) {
                        var94 = 0.028503636;
                    } else {
                        var94 = -0.022876112;
                    }
                }
            }
        } else {
            if (input[9] < 0.07188389) {
                var94 = 0.011693691;
            } else {
                if (input[1] < 0.4003597) {
                    if (input[9] < 0.1643516) {
                        var94 = -0.018362308;
                    } else {
                        var94 = -0.12221098;
                    }
                } else {
                    var94 = -0.009981952;
                }
            }
        }
    } else {
        if (input[16] < -0.2784772) {
            var94 = 0.07660146;
        } else {
            if (input[0] < -0.1646056) {
                var94 = 0.046099983;
            } else {
                var94 = -0.05750056;
            }
        }
    }
    var var95;
    if (input[17] < 2.344304) {
        if (input[16] < -0.2847922) {
            var95 = 0.056265198;
        } else {
            if (input[10] < 0.09824134) {
                if (input[8] < 2.131901) {
                    var95 = -0.010769703;
                } else {
                    var95 = 0.07539098;
                }
            } else {
                if (input[13] < -0.04294141) {
                    var95 = -0.09173398;
                } else {
                    if (input[9] < 0.2422704) {
                        var95 = -0.02398463;
                    } else {
                        var95 = 0.06291906;
                    }
                }
            }
        }
    } else {
        if (input[12] < 0.1092973) {
            var95 = -0.030006155;
        } else {
            var95 = 0.09465902;
        }
    }
    var var96;
    if (input[4] < -0.06918833) {
        var96 = -0.05133304;
    } else {
        if (input[9] < 0.2422704) {
            if (input[12] < 0.2961881) {
                if (input[12] < 0.2904216) {
                    if (input[0] < -0.208584) {
                        var96 = 0.018627414;
                    } else {
                        var96 = -0.059899144;
                    }
                } else {
                    if (input[16] < -0.09104811) {
                        var96 = 0.108297385;
                    } else {
                        var96 = -0.02283142;
                    }
                }
            } else {
                if (input[14] < 2.187465) {
                    var96 = 0.005402853;
                } else {
                    var96 = -0.082495496;
                }
            }
        } else {
            if (input[15] < 0.4465356) {
                var96 = 0.08378674;
            } else {
                var96 = -0.009600154;
            }
        }
    }
    var var97;
    if (input[7] < 0.5500985) {
        if (input[6] < -0.2500986) {
            if (input[15] < 0.1172144) {
                if (input[2] < 2.372276) {
                    if (input[11] < 2.311251) {
                        var97 = -0.06594032;
                    } else {
                        var97 = 0.069245584;
                    }
                } else {
                    var97 = -0.094715044;
                }
            } else {
                if (input[15] < 0.2867854) {
                    if (input[7] < 0.1900187) {
                        var97 = 0.113178276;
                    } else {
                        var97 = 0.029659303;
                    }
                } else {
                    if (input[12] < 0.2961881) {
                        var97 = 0.023867778;
                    } else {
                        var97 = -0.05004681;
                    }
                }
            }
        } else {
            var97 = -0.07013238;
        }
    } else {
        if (input[13] < 0.1319292) {
            var97 = 0.07232324;
        } else {
            if (input[13] < 0.1395835) {
                var97 = -0.050322052;
            } else {
                if (input[0] < -0.1828278) {
                    var97 = -0.005397434;
                } else {
                    var97 = 0.08688624;
                }
            }
        }
    }
    var var98;
    if (input[7] < 0.2503104) {
        if (input[13] < -0.08965293) {
            var98 = -0.08472135;
        } else {
            if (input[13] < 0.135247) {
                if (input[3] < -0.3650844) {
                    var98 = 0.10318985;
                } else {
                    if (input[10] < 0.2115782) {
                        var98 = 0.025054775;
                    } else {
                        var98 = -0.067827694;
                    }
                }
            } else {
                if (input[1] < 0.4003597) {
                    var98 = -0.08765928;
                } else {
                    if (input[8] < 2.035783) {
                        var98 = -0.043546617;
                    } else {
                        var98 = 0.06881841;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.057138) {
            var98 = 0.09421929;
        } else {
            if (input[14] < 2.395218) {
                if (input[12] < 0.2904216) {
                    if (input[6] < -0.6079501) {
                        var98 = 0.024817059;
                    } else {
                        var98 = -0.07886146;
                    }
                } else {
                    if (input[9] < 0.168266) {
                        var98 = 0.098533146;
                    } else {
                        var98 = -0.05481982;
                    }
                }
            } else {
                var98 = 0.0906379;
            }
        }
    }
    var var99;
    if (input[1] < 0.1251911) {
        if (input[6] < -0.5116414) {
            var99 = -0.0018531008;
        } else {
            var99 = -0.060130157;
        }
    } else {
        if (input[15] < 0.08466835) {
            var99 = 0.07747742;
        } else {
            if (input[15] < 0.1123484) {
                var99 = -0.057429556;
            } else {
                if (input[14] < 2.397084) {
                    if (input[14] < 2.386373) {
                        var99 = 0.019310977;
                    } else {
                        var99 = -0.03911212;
                    }
                } else {
                    var99 = 0.085725315;
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
