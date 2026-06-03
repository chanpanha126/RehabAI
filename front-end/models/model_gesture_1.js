// XGBoost Model for Gesture 1: ElbowFlexionRight
// Accuracy: 99.91%
// Trained on 21201 samples

export function evaluateGesture1(features) {
function score(input) {
    var var0;
    if (input[11] < 2.210362) {
        if (input[14] < 2.166459) {
            if (input[1] < -0.1185111) {
                var0 = -0.59602654;
            } else {
                if (input[14] < 2.096116) {
                    if (input[5] < 2.069295) {
                        var0 = 0.5403473;
                    } else {
                        var0 = -0.22352943;
                    }
                } else {
                    if (input[0] < -0.4473344) {
                        var0 = 0.5364706;
                    } else {
                        var0 = -0.25990784;
                    }
                }
            }
        } else {
            if (input[12] < 0.2044219) {
                if (input[15] < 0.1747256) {
                    if (input[9] < -0.1181004) {
                        var0 = -0.3089109;
                    } else {
                        var0 = -0.598315;
                    }
                } else {
                    if (input[6] < -0.4034729) {
                        var0 = -0.45000002;
                    } else {
                        var0 = 0.57;
                    }
                }
            } else {
                if (input[6] < -0.3616536) {
                    var0 = -0.5368421;
                } else {
                    var0 = 0.5936508;
                }
            }
        }
    } else {
        if (input[16] < -0.2015721) {
            if (input[15] < -0.003034823) {
                if (input[16] < -0.4201291) {
                    if (input[0] < -0.3809005) {
                        var0 = -0.33333337;
                    } else {
                        var0 = 0.45882356;
                    }
                } else {
                    if (input[10] < -0.0743801) {
                        var0 = 0.0;
                    } else {
                        var0 = -0.5493976;
                    }
                }
            } else {
                if (input[10] < 0.1861622) {
                    if (input[15] < 0.008107064) {
                        var0 = 0.25842696;
                    } else {
                        var0 = 0.5483748;
                    }
                } else {
                    if (input[11] < 2.370959) {
                        var0 = 0.3123967;
                    } else {
                        var0 = -0.50857145;
                    }
                }
            }
        } else {
            if (input[10] < 0.04802527) {
                var0 = -0.5625;
            } else {
                if (input[11] < 2.27886) {
                    var0 = -0.34285718;
                } else {
                    if (input[13] < -0.09412186) {
                        var0 = 0.120000005;
                    } else {
                        var0 = 0.59838086;
                    }
                }
            }
        }
    }
    var var1;
    if (input[11] < 2.210362) {
        if (input[14] < 2.163679) {
            if (input[1] < -0.1185111) {
                var1 = -0.46193776;
            } else {
                if (input[10] < 0.619611) {
                    if (input[1] < 0.560024) {
                        var1 = 0.40870512;
                    } else {
                        var1 = 0.07577736;
                    }
                } else {
                    if (input[9] < -0.006181017) {
                        var1 = 0.35565042;
                    } else {
                        var1 = -0.5276067;
                    }
                }
            }
        } else {
            if (input[12] < 0.2044219) {
                if (input[15] < 0.1747256) {
                    if (input[9] < -0.1181004) {
                        var1 = -0.16851196;
                    } else {
                        var1 = -0.46248648;
                    }
                } else {
                    if (input[6] < -0.4034729) {
                        var1 = -0.363784;
                    } else {
                        var1 = 0.44432086;
                    }
                }
            } else {
                if (input[6] < -0.3616536) {
                    var1 = -0.4220591;
                } else {
                    var1 = 0.4603223;
                }
            }
        }
    } else {
        if (input[16] < -0.2015721) {
            if (input[15] < -0.003034823) {
                if (input[16] < -0.4236394) {
                    var1 = 0.28665376;
                } else {
                    if (input[10] < -0.0743801) {
                        var1 = -0.0020197558;
                    } else {
                        var1 = -0.41288984;
                    }
                }
            } else {
                if (input[10] < 0.1861622) {
                    if (input[4] < 0.03328097) {
                        var1 = 0.380819;
                    } else {
                        var1 = -0.60273373;
                    }
                } else {
                    if (input[7] < -0.03302953) {
                        var1 = -0.32370633;
                    } else {
                        var1 = 0.43683344;
                    }
                }
            }
        } else {
            if (input[10] < 0.04802527) {
                var1 = -0.43927184;
            } else {
                if (input[11] < 2.27886) {
                    var1 = -0.27577645;
                } else {
                    if (input[13] < -0.09412186) {
                        var1 = 0.098638445;
                    } else {
                        var1 = 0.4632415;
                    }
                }
            }
        }
    }
    var var2;
    if (input[11] < 2.210362) {
        if (input[14] < 2.097496) {
            if (input[1] < -0.1185111) {
                var2 = -0.4006577;
            } else {
                if (input[5] < 2.069295) {
                    if (input[1] < 0.5556352) {
                        var2 = 0.3621216;
                    } else {
                        var2 = 0.15244806;
                    }
                } else {
                    if (input[11] < 2.101016) {
                        var2 = 0.42640898;
                    } else {
                        var2 = -0.58901894;
                    }
                }
            }
        } else {
            if (input[12] < 0.2044219) {
                if (input[9] < -0.1100148) {
                    if (input[13] < 0.2806523) {
                        var2 = 0.18794101;
                    } else {
                        var2 = -0.42037266;
                    }
                } else {
                    if (input[15] < 0.1747256) {
                        var2 = -0.3964959;
                    } else {
                        var2 = 0.26974192;
                    }
                }
            } else {
                if (input[6] < -0.3616536) {
                    var2 = -0.3618627;
                } else {
                    var2 = 0.39899874;
                }
            }
        }
    } else {
        if (input[16] < -0.2015721) {
            if (input[14] < 2.415742) {
                if (input[11] < 2.370067) {
                    if (input[9] < 0.06950404) {
                        var2 = 0.028825384;
                    } else {
                        var2 = 0.4296075;
                    }
                } else {
                    if (input[10] < -0.0713496) {
                        var2 = 0.12329159;
                    } else {
                        var2 = -0.32358006;
                    }
                }
            } else {
                if (input[15] < 0.00707935) {
                    if (input[4] < -0.2901087) {
                        var2 = 0.15791188;
                    } else {
                        var2 = -0.36223158;
                    }
                } else {
                    if (input[13] < -0.2812067) {
                        var2 = -0.020850867;
                    } else {
                        var2 = 0.40816703;
                    }
                }
            }
        } else {
            if (input[10] < 0.04802527) {
                var2 = -0.37809163;
            } else {
                if (input[11] < 2.27886) {
                    var2 = -0.22907282;
                } else {
                    if (input[16] < -0.1923837) {
                        var2 = 0.30138186;
                    } else {
                        var2 = 0.40340436;
                    }
                }
            }
        }
    }
    var var3;
    if (input[11] < 2.210362) {
        if (input[5] < 2.311431) {
            if (input[1] < -0.1185111) {
                var3 = -0.36578444;
            } else {
                if (input[14] < 2.096116) {
                    if (input[5] < 2.060065) {
                        var3 = 0.31354195;
                    } else {
                        var3 = -0.029171621;
                    }
                } else {
                    if (input[13] < 0.2804339) {
                        var3 = 0.14449184;
                    } else {
                        var3 = -0.26782495;
                    }
                }
            }
        } else {
            if (input[15] < 0.1786275) {
                if (input[10] < 0.5229385) {
                    var3 = 0.27570257;
                } else {
                    if (input[1] < 0.5568061) {
                        var3 = -0.36982214;
                    } else {
                        var3 = 0.2603795;
                    }
                }
            } else {
                var3 = 0.33262768;
            }
        }
    } else {
        if (input[16] < -0.2015721) {
            if (input[8] < 2.242189) {
                if (input[11] < 2.370067) {
                    if (input[9] < 0.06730008) {
                        var3 = -0.118720464;
                    } else {
                        var3 = 0.33535826;
                    }
                } else {
                    if (input[9] < -0.05374469) {
                        var3 = 0.34197485;
                    } else {
                        var3 = -0.26018786;
                    }
                }
            } else {
                if (input[3] < -0.5070047) {
                    var3 = -0.4275345;
                } else {
                    if (input[15] < -0.003034823) {
                        var3 = -0.07715762;
                    } else {
                        var3 = 0.36615083;
                    }
                }
            }
        } else {
            if (input[10] < 0.04802527) {
                var3 = -0.3401842;
            } else {
                if (input[14] < 2.223252) {
                    if (input[4] < -0.1105905) {
                        var3 = 0.2604391;
                    } else {
                        var3 = -0.31962055;
                    }
                } else {
                    if (input[16] < -0.1923837) {
                        var3 = 0.2669379;
                    } else {
                        var3 = 0.36905435;
                    }
                }
            }
        }
    }
    var var4;
    if (input[17] < 2.21747) {
        if (input[5] < 2.310183) {
            if (input[0] < -0.1542316) {
                if (input[17] < 1.85164) {
                    if (input[11] < 2.102013) {
                        var4 = -0.23552465;
                    } else {
                        var4 = -0.77584606;
                    }
                } else {
                    if (input[13] < 0.2783536) {
                        var4 = 0.20892775;
                    } else {
                        var4 = -0.12800777;
                    }
                }
            } else {
                var4 = 0.35467303;
            }
        } else {
            if (input[14] < 2.214844) {
                if (input[12] < 0.2065973) {
                    if (input[1] < 0.5568061) {
                        var4 = -0.3482164;
                    } else {
                        var4 = 0.26697937;
                    }
                } else {
                    var4 = 0.29922193;
                }
            } else {
                if (input[11] < 2.370959) {
                    if (input[6] < -0.3484732) {
                        var4 = -0.23304206;
                    } else {
                        var4 = 0.27056345;
                    }
                } else {
                    if (input[9] < -0.05281232) {
                        var4 = 0.29725975;
                    } else {
                        var4 = -0.33222234;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.2741332) {
            if (input[0] < -0.3791448) {
                if (input[4] < -0.3106614) {
                    var4 = 0.22565368;
                } else {
                    if (input[6] < -0.3276612) {
                        var4 = -0.57246315;
                    } else {
                        var4 = 0.02804636;
                    }
                }
            } else {
                if (input[6] < -0.3981605) {
                    if (input[1] < -0.06908144) {
                        var4 = -0.41894314;
                    } else {
                        var4 = 0.11582164;
                    }
                } else {
                    if (input[11] < 2.491461) {
                        var4 = -0.29550844;
                    } else {
                        var4 = 0.37467122;
                    }
                }
            }
        } else {
            if (input[15] < -0.159424) {
                var4 = -0.300841;
            } else {
                if (input[10] < -0.06914628) {
                    if (input[2] < 2.479406) {
                        var4 = 0.2828284;
                    } else {
                        var4 = -0.53663665;
                    }
                } else {
                    if (input[7] < -0.3837022) {
                        var4 = 0.007818387;
                    } else {
                        var4 = 0.3477916;
                    }
                }
            }
        }
    }
    var var5;
    if (input[17] < 2.21747) {
        if (input[17] < 2.078336) {
            if (input[10] < -0.1313054) {
                var5 = -0.33268136;
            } else {
                if (input[13] < 0.3281717) {
                    if (input[10] < 0.3773066) {
                        var5 = 0.1874145;
                    } else {
                        var5 = 0.3366227;
                    }
                } else {
                    if (input[14] < 2.098824) {
                        var5 = 0.0695126;
                    } else {
                        var5 = -0.35864276;
                    }
                }
            }
        } else {
            if (input[12] < 0.2044219) {
                if (input[12] < -0.06765227) {
                    if (input[13] < 0.2813947) {
                        var5 = 0.36482397;
                    } else {
                        var5 = -0.36157453;
                    }
                } else {
                    if (input[14] < 2.214844) {
                        var5 = -0.31197906;
                    } else {
                        var5 = -0.06207252;
                    }
                }
            } else {
                if (input[6] < -0.3616536) {
                    var5 = -0.26312405;
                } else {
                    var5 = 0.34064186;
                }
            }
        }
    } else {
        if (input[13] < -0.2621085) {
            if (input[2] < 2.479406) {
                if (input[1] < -0.07457953) {
                    if (input[9] < -0.05134487) {
                        var5 = 0.29260072;
                    } else {
                        var5 = -0.20550479;
                    }
                } else {
                    if (input[0] < -0.37182) {
                        var5 = 0.37897462;
                    } else {
                        var5 = -0.2567999;
                    }
                }
            } else {
                if (input[9] < -0.04645095) {
                    var5 = -0.44959015;
                } else {
                    var5 = 0.29021722;
                }
            }
        } else {
            if (input[15] < -0.159424) {
                var5 = -0.26951578;
            } else {
                if (input[7] < -0.362648) {
                    if (input[0] < -0.3975899) {
                        var5 = 0.28438452;
                    } else {
                        var5 = -0.22780623;
                    }
                } else {
                    var5 = 0.33383596;
                }
            }
        }
    }
    var var6;
    if (input[17] < 2.272088) {
        if (input[0] < -0.1607478) {
            if (input[9] < 0.01367385) {
                if (input[14] < 2.088098) {
                    if (input[16] < 0.1081037) {
                        var6 = 0.33326766;
                    } else {
                        var6 = 0.081127204;
                    }
                } else {
                    if (input[0] < -0.3380354) {
                        var6 = -0.07257206;
                    } else {
                        var6 = 0.23151153;
                    }
                }
            } else {
                if (input[6] < -0.3580154) {
                    if (input[2] < 2.371187) {
                        var6 = -0.32704574;
                    } else {
                        var6 = -0.11914987;
                    }
                } else {
                    if (input[11] < 2.028396) {
                        var6 = -0.49404785;
                    } else {
                        var6 = 0.041479;
                    }
                }
            }
        } else {
            if (input[0] < -0.1542316) {
                if (input[11] < 2.102682) {
                    if (input[4] < 0.1292813) {
                        var6 = 0.045556515;
                    } else {
                        var6 = 0.34140527;
                    }
                } else {
                    var6 = -0.46352842;
                }
            } else {
                var6 = 0.3287792;
            }
        }
    } else {
        if (input[10] < -0.06651527) {
            if (input[9] < -0.04321694) {
                if (input[6] < -0.3447948) {
                    var6 = -0.31549978;
                } else {
                    var6 = 0.06126651;
                }
            } else {
                var6 = 0.30809683;
            }
        } else {
            var6 = 0.32385147;
        }
    }
    var var7;
    if (input[17] < 2.27415) {
        if (input[0] < -0.1607478) {
            if (input[9] < 0.01367385) {
                if (input[14] < 2.088098) {
                    if (input[15] < 0.1181303) {
                        var7 = 0.32236797;
                    } else {
                        var7 = 0.056013215;
                    }
                } else {
                    if (input[6] < -0.4945866) {
                        var7 = -0.25440663;
                    } else {
                        var7 = 0.041337617;
                    }
                }
            } else {
                if (input[6] < -0.3447948) {
                    if (input[15] < 0.1786275) {
                        var7 = -0.31688762;
                    } else {
                        var7 = -0.059002485;
                    }
                } else {
                    if (input[11] < 2.026481) {
                        var7 = -0.47312567;
                    } else {
                        var7 = 0.043970473;
                    }
                }
            }
        } else {
            if (input[0] < -0.1542316) {
                if (input[11] < 2.102682) {
                    if (input[4] < 0.1292813) {
                        var7 = 0.038609024;
                    } else {
                        var7 = 0.31862703;
                    }
                } else {
                    var7 = -0.3780904;
                }
            } else {
                var7 = 0.31955418;
            }
        }
    } else {
        if (input[10] < -0.06651527) {
            if (input[11] < 2.499386) {
                var7 = -0.24694173;
            } else {
                if (input[7] < -0.3193381) {
                    var7 = 0.23075351;
                } else {
                    var7 = 0.06326255;
                }
            }
        } else {
            var7 = 0.31690097;
        }
    }
    var var8;
    if (input[17] < 2.27415) {
        if (input[0] < -0.1542316) {
            if (input[5] < 2.311431) {
                if (input[13] < -0.09412186) {
                    if (input[3] < -0.2589017) {
                        var8 = -0.22688326;
                    } else {
                        var8 = -0.6924801;
                    }
                } else {
                    if (input[10] < 0.5343719) {
                        var8 = 0.12728387;
                    } else {
                        var8 = -0.0976961;
                    }
                }
            } else {
                if (input[14] < 2.214844) {
                    if (input[12] < 0.2065973) {
                        var8 = -0.30893183;
                    } else {
                        var8 = 0.22948322;
                    }
                } else {
                    if (input[9] < -0.05134487) {
                        var8 = 0.26034304;
                    } else {
                        var8 = -0.045067806;
                    }
                }
            }
        } else {
            var8 = 0.31268197;
        }
    } else {
        if (input[10] < -0.06651527) {
            if (input[11] < 2.499386) {
                var8 = -0.21852362;
            } else {
                if (input[7] < -0.3193381) {
                    var8 = 0.20753248;
                } else {
                    var8 = 0.053904813;
                }
            }
        } else {
            var8 = 0.31167507;
        }
    }
    var var9;
    if (input[17] < 2.272088) {
        if (input[0] < -0.1542316) {
            if (input[12] < 0.09897958) {
                if (input[0] < -0.3791448) {
                    if (input[1] < 0.5423638) {
                        var9 = -0.14705555;
                    } else {
                        var9 = 0.34436864;
                    }
                } else {
                    if (input[2] < 1.935035) {
                        var9 = -0.10896252;
                    } else {
                        var9 = 0.18318072;
                    }
                }
            } else {
                if (input[6] < -0.3606194) {
                    if (input[3] < -0.2493072) {
                        var9 = -0.30977955;
                    } else {
                        var9 = -0.05632931;
                    }
                } else {
                    if (input[11] < 2.028396) {
                        var9 = -0.42239457;
                    } else {
                        var9 = 0.024961973;
                    }
                }
            }
        } else {
            var9 = 0.30727643;
        }
    } else {
        if (input[10] < -0.06651527) {
            if (input[9] < -0.04321694) {
                if (input[6] < -0.3447948) {
                    var9 = -0.25199297;
                } else {
                    var9 = 0.07446109;
                }
            } else {
                var9 = 0.24883118;
            }
        } else {
            var9 = 0.30737498;
        }
    }
    var var10;
    if (input[17] < 2.27415) {
        if (input[12] < 0.2584221) {
            if (input[17] < 1.85347) {
                if (input[10] < 0.3744942) {
                    if (input[11] < 2.100791) {
                        var10 = -0.1968851;
                    } else {
                        var10 = -1.1351889;
                    }
                } else {
                    if (input[11] < 2.102013) {
                        var10 = 0.31819364;
                    } else {
                        var10 = -0.40442613;
                    }
                }
            } else {
                if (input[14] < 2.098824) {
                    if (input[11] < 2.028396) {
                        var10 = 0.04807048;
                    } else {
                        var10 = 0.29625878;
                    }
                } else {
                    if (input[12] < 0.2034223) {
                        var10 = -0.10555393;
                    } else {
                        var10 = 0.25676295;
                    }
                }
            }
        } else {
            if (input[0] < -0.1999929) {
                var10 = -0.20297574;
            } else {
                var10 = 0.3146855;
            }
        }
    } else {
        if (input[10] < -0.06651527) {
            if (input[2] < 2.479406) {
                if (input[10] < -0.07351716) {
                    var10 = 0.18124668;
                } else {
                    var10 = 0.017376086;
                }
            } else {
                var10 = -0.19791156;
            }
        } else {
            var10 = 0.30452648;
        }
    }
    var var11;
    if (input[17] < 2.259752) {
        if (input[12] < 0.2584221) {
            if (input[2] < 2.125862) {
                if (input[16] < 0.1164029) {
                    if (input[9] < -0.1200898) {
                        var11 = 0.38859463;
                    } else {
                        var11 = 0.033965047;
                    }
                } else {
                    if (input[7] < 0.165602) {
                        var11 = -0.8005545;
                    } else {
                        var11 = -0.27271155;
                    }
                }
            } else {
                if (input[14] < 2.209412) {
                    if (input[13] < 0.1527962) {
                        var11 = 0.040639214;
                    } else {
                        var11 = -0.30239177;
                    }
                } else {
                    if (input[12] < 0.2024842) {
                        var11 = -0.043855052;
                    } else {
                        var11 = 0.2990852;
                    }
                }
            }
        } else {
            if (input[0] < -0.1999929) {
                var11 = -0.1882796;
            } else {
                var11 = 0.30812252;
            }
        }
    } else {
        if (input[0] < -0.3791448) {
            if (input[15] < 0.00707935) {
                if (input[6] < -0.3246736) {
                    if (input[9] < -0.05034503) {
                        var11 = 0.010980543;
                    } else {
                        var11 = -0.3752898;
                    }
                } else {
                    var11 = 0.080761425;
                }
            } else {
                if (input[16] < -0.4167833) {
                    if (input[2] < 2.479406) {
                        var11 = 0.09027394;
                    } else {
                        var11 = -0.27968493;
                    }
                } else {
                    var11 = 0.2763014;
                }
            }
        } else {
            if (input[3] < -0.5070047) {
                var11 = -0.24611473;
            } else {
                if (input[15] < -0.06819023) {
                    var11 = 0.085654095;
                } else {
                    if (input[9] < -0.05845338) {
                        var11 = 0.1041262;
                    } else {
                        var11 = 0.3124387;
                    }
                }
            }
        }
    }
    var var12;
    if (input[8] < 2.246323) {
        if (input[0] < -0.1542316) {
            if (input[5] < 2.310183) {
                if (input[10] < 0.04802527) {
                    var12 = -0.32045618;
                } else {
                    if (input[11] < 2.011718) {
                        var12 = 0.32590127;
                    } else {
                        var12 = 0.00852733;
                    }
                }
            } else {
                if (input[14] < 2.213649) {
                    if (input[1] < 0.5562287) {
                        var12 = -0.29382697;
                    } else {
                        var12 = 0.21764112;
                    }
                } else {
                    if (input[7] < -0.03879111) {
                        var12 = -0.057954393;
                    } else {
                        var12 = 0.23650362;
                    }
                }
            }
        } else {
            var12 = 0.29582468;
        }
    } else {
        if (input[3] < -0.5070047) {
            var12 = -0.25030813;
        } else {
            if (input[17] < 2.137822) {
                if (input[6] < -0.2870893) {
                    var12 = -0.2762387;
                } else {
                    var12 = 0.23434414;
                }
            } else {
                if (input[10] < -0.07351716) {
                    if (input[9] < -0.04952653) {
                        var12 = -0.28478125;
                    } else {
                        var12 = 0.2696654;
                    }
                } else {
                    if (input[7] < -0.1802775) {
                        var12 = 0.15447529;
                    } else {
                        var12 = 0.31855994;
                    }
                }
            }
        }
    }
    var var13;
    if (input[14] < 2.410822) {
        if (input[12] < 0.2584221) {
            if (input[1] < 0.6142052) {
                if (input[10] < 0.5309329) {
                    if (input[15] < 0.2233113) {
                        var13 = 0.05204267;
                    } else {
                        var13 = -0.18028654;
                    }
                } else {
                    if (input[15] < 0.1747256) {
                        var13 = -0.12757881;
                    } else {
                        var13 = 0.27864838;
                    }
                }
            } else {
                if (input[2] < 1.963905) {
                    var13 = 0.5579785;
                } else {
                    var13 = 0.24819157;
                }
            }
        } else {
            if (input[3] < -0.2357431) {
                var13 = -0.12124864;
            } else {
                var13 = 0.30093202;
            }
        }
    } else {
        if (input[13] < -0.2812067) {
            if (input[8] < 2.267403) {
                if (input[11] < 2.500891) {
                    var13 = -0.29540402;
                } else {
                    var13 = -0.047308285;
                }
            } else {
                var13 = 0.07669707;
            }
        } else {
            if (input[13] < -0.2621085) {
                if (input[2] < 2.479406) {
                    if (input[9] < -0.04783939) {
                        var13 = 0.31523624;
                    } else {
                        var13 = -0.08138351;
                    }
                } else {
                    var13 = -0.29893216;
                }
            } else {
                var13 = 0.30719903;
            }
        }
    }
    var var14;
    if (input[17] < 2.27415) {
        if (input[14] < 2.159351) {
            if (input[10] < 0.619611) {
                if (input[14] < 2.025772) {
                    if (input[10] < 0.373689) {
                        var14 = -0.33683893;
                    } else {
                        var14 = 0.14157288;
                    }
                } else {
                    if (input[1] < 0.5356815) {
                        var14 = 0.3467121;
                    } else {
                        var14 = 0.07267906;
                    }
                }
            } else {
                if (input[9] < -0.006181017) {
                    var14 = 0.18673328;
                } else {
                    var14 = -0.36214018;
                }
            }
        } else {
            if (input[12] < 0.2044219) {
                if (input[14] < 2.298424) {
                    if (input[12] < -0.06765227) {
                        var14 = 0.07733501;
                    } else {
                        var14 = -0.21374825;
                    }
                } else {
                    if (input[7] < -0.03302953) {
                        var14 = -0.021424653;
                    } else {
                        var14 = 0.3119256;
                    }
                }
            } else {
                if (input[6] < -0.3540058) {
                    var14 = 0.0082915705;
                } else {
                    var14 = 0.301257;
                }
            }
        }
    } else {
        if (input[10] < -0.06651527) {
            if (input[11] < 2.499386) {
                var14 = -0.14363864;
            } else {
                var14 = 0.13135691;
            }
        } else {
            var14 = 0.29467353;
        }
    }
    var var15;
    if (input[14] < 2.410822) {
        if (input[5] < 2.310183) {
            if (input[6] < -0.5176935) {
                if (input[1] < 0.5416428) {
                    var15 = -0.30328944;
                } else {
                    var15 = 0.028114295;
                }
            } else {
                if (input[9] < -0.1200898) {
                    if (input[10] < 0.5285215) {
                        var15 = -0.04799785;
                    } else {
                        var15 = 0.3684101;
                    }
                } else {
                    if (input[12] < -0.06456681) {
                        var15 = -0.17420115;
                    } else {
                        var15 = 0.050386135;
                    }
                }
            }
        } else {
            if (input[14] < 2.213649) {
                if (input[10] < 0.5289078) {
                    if (input[6] < -0.3872545) {
                        var15 = -0.15626669;
                    } else {
                        var15 = 0.30508435;
                    }
                } else {
                    if (input[12] < 0.2044219) {
                        var15 = -0.29692397;
                    } else {
                        var15 = -0.010833448;
                    }
                }
            } else {
                if (input[11] < 2.370959) {
                    if (input[17] < 2.129321) {
                        var15 = -0.3159263;
                    } else {
                        var15 = 0.22366725;
                    }
                } else {
                    if (input[10] < -0.0713496) {
                        var15 = 0.083886966;
                    } else {
                        var15 = -0.2829142;
                    }
                }
            }
        }
    } else {
        if (input[13] < -0.2812067) {
            if (input[8] < 2.267403) {
                if (input[3] < -0.4417789) {
                    var15 = -0.061229818;
                } else {
                    var15 = -0.2559791;
                }
            } else {
                var15 = 0.06555261;
            }
        } else {
            if (input[13] < -0.2621085) {
                if (input[2] < 2.479406) {
                    if (input[9] < -0.04783939) {
                        var15 = 0.29536992;
                    } else {
                        var15 = -0.060143095;
                    }
                } else {
                    var15 = -0.2645192;
                }
            } else {
                var15 = 0.30126384;
            }
        }
    }
    var var16;
    if (input[11] < 2.502759) {
        if (input[12] < 0.2584221) {
            if (input[15] < -0.06819023) {
                if (input[0] < -0.3521881) {
                    var16 = -0.31492904;
                } else {
                    var16 = 0.07304985;
                }
            } else {
                if (input[15] < -0.0508147) {
                    if (input[14] < 2.166459) {
                        var16 = 0.3687343;
                    } else {
                        var16 = -0.031401772;
                    }
                } else {
                    if (input[1] < 0.6142052) {
                        var16 = -0.025041873;
                    } else {
                        var16 = 0.37422994;
                    }
                }
            }
        } else {
            if (input[1] < -0.1185111) {
                var16 = -0.038374685;
            } else {
                var16 = 0.29402778;
            }
        }
    } else {
        var16 = 0.29874215;
    }
    var var17;
    if (input[14] < 2.410822) {
        if (input[5] < 2.310183) {
            if (input[10] < 0.04802527) {
                if (input[0] < -0.1578626) {
                    var17 = -0.29908103;
                } else {
                    var17 = 0.18924789;
                }
            } else {
                if (input[11] < 2.011718) {
                    var17 = 0.30810165;
                } else {
                    if (input[11] < 2.023398) {
                        var17 = -0.19658084;
                    } else {
                        var17 = 0.040987164;
                    }
                }
            }
        } else {
            if (input[14] < 2.287264) {
                if (input[15] < 0.1724227) {
                    if (input[9] < 0.1482443) {
                        var17 = -0.31214988;
                    } else {
                        var17 = 0.03141976;
                    }
                } else {
                    if (input[1] < 0.5485161) {
                        var17 = -0.1290286;
                    } else {
                        var17 = 0.30025163;
                    }
                }
            } else {
                if (input[11] < 2.370067) {
                    if (input[7] < -0.1613226) {
                        var17 = 0.07750135;
                    } else {
                        var17 = 0.34774712;
                    }
                } else {
                    if (input[7] < 0.02409225) {
                        var17 = -0.11092583;
                    } else {
                        var17 = 0.32685208;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.008107064) {
            if (input[13] < -0.2812067) {
                if (input[0] < -0.3778352) {
                    var17 = -0.2466531;
                } else {
                    var17 = 0.025110869;
                }
            } else {
                if (input[9] < -0.05198072) {
                    var17 = 0.26010597;
                } else {
                    if (input[6] < -0.3523232) {
                        var17 = -0.2036939;
                    } else {
                        var17 = 0.1711401;
                    }
                }
            }
        } else {
            var17 = 0.29820812;
        }
    }
    var var18;
    if (input[17] < 2.259752) {
        if (input[10] < 0.619611) {
            if (input[10] < 0.6173475) {
                if (input[10] < 0.5353169) {
                    if (input[9] < -0.05198072) {
                        var18 = 0.11412224;
                    } else {
                        var18 = -0.024172321;
                    }
                } else {
                    if (input[2] < 1.915972) {
                        var18 = 0.31129408;
                    } else {
                        var18 = -0.2047693;
                    }
                }
            } else {
                if (input[7] < 0.5492393) {
                    if (input[16] < 0.1164029) {
                        var18 = 0.41089052;
                    } else {
                        var18 = -0.18424529;
                    }
                } else {
                    if (input[1] < 0.5556352) {
                        var18 = 0.3259531;
                    } else {
                        var18 = -0.30045074;
                    }
                }
            }
        } else {
            if (input[9] < -0.006181017) {
                var18 = 0.15559776;
            } else {
                var18 = -0.34391508;
            }
        }
    } else {
        if (input[0] < -0.3791448) {
            if (input[7] < -0.1507745) {
                if (input[6] < -0.3349194) {
                    if (input[9] < -0.05034503) {
                        var18 = 0.16339086;
                    } else {
                        var18 = -0.31439832;
                    }
                } else {
                    if (input[14] < 2.428674) {
                        var18 = -0.053720407;
                    } else {
                        var18 = 0.17751957;
                    }
                }
            } else {
                var18 = 0.23126197;
            }
        } else {
            if (input[1] < -0.0827552) {
                var18 = -0.051650014;
            } else {
                if (input[6] < -0.4431067) {
                    var18 = 0.02716618;
                } else {
                    if (input[9] < -0.0490794) {
                        var18 = 0.13515627;
                    } else {
                        var18 = 0.30958536;
                    }
                }
            }
        }
    }
    var var19;
    if (input[12] < 0.2584221) {
        if (input[12] < 0.2183221) {
            if (input[12] < 0.2034223) {
                if (input[9] < 0.1241493) {
                    if (input[6] < -0.194014) {
                        var19 = 0.025435157;
                    } else {
                        var19 = -0.37288177;
                    }
                } else {
                    if (input[1] < 0.5568061) {
                        var19 = -0.31260833;
                    } else {
                        var19 = 0.2743011;
                    }
                }
            } else {
                if (input[6] < -0.3616536) {
                    var19 = -0.20853223;
                } else {
                    if (input[4] < 0.03624861) {
                        var19 = 0.12428917;
                    } else {
                        var19 = 0.3141901;
                    }
                }
            }
        } else {
            if (input[13] < 0.03326593) {
                if (input[13] < 0.02544549) {
                    if (input[1] < -0.1185111) {
                        var19 = -0.19421221;
                    } else {
                        var19 = 0.20031236;
                    }
                } else {
                    var19 = -0.6330199;
                }
            } else {
                if (input[11] < 2.101016) {
                    if (input[15] < 0.2598106) {
                        var19 = 0.3111916;
                    } else {
                        var19 = 0.034832034;
                    }
                } else {
                    if (input[9] < 0.1905437) {
                        var19 = 0.29118526;
                    } else {
                        var19 = -0.34550902;
                    }
                }
            }
        }
    } else {
        if (input[8] < 1.625303) {
            var19 = 0.016849061;
        } else {
            var19 = 0.28568745;
        }
    }
    var var20;
    if (input[6] < -0.4945866) {
        if (input[14] < 2.163679) {
            var20 = 0.28055382;
        } else {
            if (input[3] < -0.5663518) {
                var20 = -0.32496738;
            } else {
                if (input[9] < -0.1200898) {
                    var20 = 0.18636514;
                } else {
                    var20 = -0.114391826;
                }
            }
        }
    } else {
        if (input[0] < -0.4494827) {
            if (input[10] < 0.5368946) {
                var20 = 0.37787488;
            } else {
                var20 = -0.26263776;
            }
        } else {
            if (input[12] < -0.06536341) {
                if (input[4] < 0.3433854) {
                    if (input[4] < 0.3227012) {
                        var20 = -0.13161752;
                    } else {
                        var20 = -0.6017194;
                    }
                } else {
                    var20 = 0.40276527;
                }
            } else {
                if (input[11] < 2.502759) {
                    if (input[11] < 2.101174) {
                        var20 = 0.064934045;
                    } else {
                        var20 = -0.022606451;
                    }
                } else {
                    if (input[9] < -0.0490794) {
                        var20 = 0.08486858;
                    } else {
                        var20 = 0.29310414;
                    }
                }
            }
        }
    }
    var var21;
    if (input[8] < 2.242189) {
        if (input[15] < -0.06819023) {
            if (input[0] < -0.3550053) {
                var21 = -0.2885812;
            } else {
                var21 = -0.022284625;
            }
        } else {
            if (input[15] < -0.0508147) {
                if (input[14] < 2.166459) {
                    var21 = 0.32435396;
                } else {
                    if (input[10] < 0.5304147) {
                        var21 = 0.2197813;
                    } else {
                        var21 = -0.25760278;
                    }
                }
            } else {
                if (input[3] < -0.4763756) {
                    if (input[1] < 0.5421054) {
                        var21 = -0.23790732;
                    } else {
                        var21 = 0.14677006;
                    }
                } else {
                    if (input[9] < -0.05034503) {
                        var21 = 0.28760684;
                    } else {
                        var21 = -0.004821483;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.5070047) {
            var21 = -0.21021977;
        } else {
            if (input[7] < -0.1573581) {
                if (input[17] < 2.172673) {
                    var21 = -0.2451664;
                } else {
                    if (input[15] < -0.003034823) {
                        var21 = -0.03479967;
                    } else {
                        var21 = 0.20376879;
                    }
                }
            } else {
                if (input[10] < -0.07351716) {
                    if (input[5] < 2.385828) {
                        var21 = 0.19130978;
                    } else {
                        var21 = -0.21167624;
                    }
                } else {
                    var21 = 0.30911928;
                }
            }
        }
    }
    var var22;
    if (input[0] < -0.1542316) {
        if (input[2] < 1.92312) {
            if (input[14] < 2.092674) {
                if (input[0] < -0.3291832) {
                    var22 = 0.28879786;
                } else {
                    var22 = -0.2451342;
                }
            } else {
                if (input[3] < -0.4512887) {
                    if (input[1] < 0.5578759) {
                        var22 = -0.14670211;
                    } else {
                        var22 = 0.2025239;
                    }
                } else {
                    var22 = -0.5238209;
                }
            }
        } else {
            if (input[11] < 2.011718) {
                var22 = 0.28151911;
            } else {
                if (input[8] < 1.708518) {
                    if (input[10] < 0.619611) {
                        var22 = 0.2631549;
                    } else {
                        var22 = -0.1859595;
                    }
                } else {
                    if (input[11] < 2.028396) {
                        var22 = -0.15112321;
                    } else {
                        var22 = 0.0077887983;
                    }
                }
            }
        }
    } else {
        var22 = 0.27045453;
    }
    var var23;
    if (input[12] < 0.2584221) {
        if (input[12] < 0.2183221) {
            if (input[12] < 0.2034223) {
                if (input[12] < 0.1699795) {
                    if (input[3] < -0.2528223) {
                        var23 = 0.02761862;
                    } else {
                        var23 = -0.12735553;
                    }
                } else {
                    if (input[15] < 0.1724227) {
                        var23 = -0.29251885;
                    } else {
                        var23 = 0.17300677;
                    }
                }
            } else {
                if (input[6] < -0.3616536) {
                    var23 = -0.1917958;
                } else {
                    if (input[4] < 0.03624861) {
                        var23 = 0.11186833;
                    } else {
                        var23 = 0.30525878;
                    }
                }
            }
        } else {
            if (input[13] < 0.03326593) {
                if (input[13] < 0.02544549) {
                    if (input[1] < -0.1185111) {
                        var23 = -0.16786659;
                    } else {
                        var23 = 0.15851611;
                    }
                } else {
                    if (input[4] < 0.03328097) {
                        var23 = -0.13441844;
                    } else {
                        var23 = -0.45918217;
                    }
                }
            } else {
                if (input[11] < 2.101016) {
                    if (input[15] < 0.2598106) {
                        var23 = 0.29012042;
                    } else {
                        var23 = 0.013350878;
                    }
                } else {
                    if (input[1] < 0.3992057) {
                        var23 = -0.26203233;
                    } else {
                        var23 = 0.2826735;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.084692) {
            var23 = 0.034821797;
        } else {
            var23 = 0.27211937;
        }
    }
    var var24;
    if (input[15] < -0.06819023) {
        if (input[0] < -0.3535646) {
            var24 = -0.2773316;
        } else {
            var24 = 0.003766416;
        }
    } else {
        if (input[12] < -0.06765227) {
            if (input[10] < 0.5368946) {
                if (input[2] < 2.102309) {
                    if (input[10] < 0.5327463) {
                        var24 = 0.012677239;
                    } else {
                        var24 = -0.1983695;
                    }
                } else {
                    var24 = 0.35404617;
                }
            } else {
                var24 = -0.23139097;
            }
        } else {
            if (input[12] < -0.06456681) {
                if (input[4] < 0.3509291) {
                    if (input[15] < -0.0508147) {
                        var24 = 0.16586408;
                    } else {
                        var24 = -0.3988922;
                    }
                } else {
                    var24 = 0.39685914;
                }
            } else {
                if (input[9] < -0.1100148) {
                    if (input[10] < 0.5309329) {
                        var24 = 0.31636268;
                    } else {
                        var24 = -0.24027829;
                    }
                } else {
                    if (input[0] < -0.4060373) {
                        var24 = -0.32639956;
                    } else {
                        var24 = 0.019887447;
                    }
                }
            }
        }
    }
    var var25;
    if (input[11] < 2.502759) {
        if (input[12] < 0.2584221) {
            if (input[6] < -0.194014) {
                if (input[12] < 0.2570114) {
                    if (input[9] < 0.1932854) {
                        var25 = 0.000680954;
                    } else {
                        var25 = 0.32490778;
                    }
                } else {
                    if (input[9] < 0.1926178) {
                        var25 = 0.2682028;
                    } else {
                        var25 = -0.33158854;
                    }
                }
            } else {
                if (input[11] < 2.102682) {
                    if (input[12] < 0.255064) {
                        var25 = -0.114615865;
                    } else {
                        var25 = 0.25194946;
                    }
                } else {
                    if (input[2] < 2.298463) {
                        var25 = -0.34612238;
                    } else {
                        var25 = 0.057381265;
                    }
                }
            }
        } else {
            if (input[8] < 1.714986) {
                var25 = 0.02899841;
            } else {
                var25 = 0.25951597;
            }
        }
    } else {
        if (input[0] < -0.3778352) {
            var25 = 0.062259316;
        } else {
            var25 = 0.27281678;
        }
    }
    var var26;
    if (input[2] < 1.92312) {
        if (input[14] < 2.092674) {
            if (input[1] < -0.1185111) {
                var26 = -0.23177637;
            } else {
                var26 = 0.27156633;
            }
        } else {
            if (input[3] < -0.4512887) {
                var26 = 0.03001652;
            } else {
                var26 = -0.44085208;
            }
        }
    } else {
        if (input[2] < 1.944709) {
            if (input[2] < 1.935035) {
                if (input[12] < 0.06554911) {
                    if (input[11] < 2.02163) {
                        var26 = -0.70675266;
                    } else {
                        var26 = 0.056911457;
                    }
                } else {
                    if (input[10] < 0.619611) {
                        var26 = 0.33694473;
                    } else {
                        var26 = -0.20883109;
                    }
                }
            } else {
                if (input[9] < -0.005005257) {
                    var26 = 0.42614505;
                } else {
                    if (input[4] < 0.3272592) {
                        var26 = 0.2266878;
                    } else {
                        var26 = -0.2770195;
                    }
                }
            }
        } else {
            if (input[2] < 1.949157) {
                if (input[10] < 0.6190017) {
                    var26 = -0.030297466;
                } else {
                    var26 = -0.42350978;
                }
            } else {
                if (input[1] < 0.5987243) {
                    if (input[10] < 0.5348138) {
                        var26 = 0.015966626;
                    } else {
                        var26 = -0.17450735;
                    }
                } else {
                    var26 = 0.29765883;
                }
            }
        }
    }
    var var27;
    if (input[15] < -0.06819023) {
        if (input[0] < -0.3535646) {
            var27 = -0.26430583;
        } else {
            var27 = 0.00056228664;
        }
    } else {
        if (input[15] < -0.0508147) {
            if (input[6] < -0.5104766) {
                var27 = -0.16656096;
            } else {
                if (input[10] < 0.5368946) {
                    if (input[13] < 0.02703382) {
                        var27 = 0.027131267;
                    } else {
                        var27 = 0.2963224;
                    }
                } else {
                    var27 = -0.12961458;
                }
            }
        } else {
            if (input[12] < -0.06765227) {
                if (input[10] < 0.5328889) {
                    var27 = 0.33180332;
                } else {
                    var27 = -0.20890415;
                }
            } else {
                if (input[12] < -0.0638668) {
                    if (input[4] < 0.3509291) {
                        var27 = -0.34482172;
                    } else {
                        var27 = 0.32831255;
                    }
                } else {
                    if (input[12] < 0.006978919) {
                        var27 = 0.11170486;
                    } else {
                        var27 = -0.0068938322;
                    }
                }
            }
        }
    }
    var var28;
    if (input[7] < -0.1543097) {
        if (input[13] < -0.02568753) {
            if (input[2] < 2.46627) {
                if (input[17] < 2.04829) {
                    if (input[15] < 0.1162083) {
                        var28 = -0.38579026;
                    } else {
                        var28 = 0.1387757;
                    }
                } else {
                    if (input[2] < 2.298463) {
                        var28 = -0.56397086;
                    } else {
                        var28 = -0.25405455;
                    }
                }
            } else {
                if (input[9] < -0.04321694) {
                    if (input[1] < -0.0773728) {
                        var28 = 0.260524;
                    } else {
                        var28 = -0.1946006;
                    }
                } else {
                    var28 = 0.32305142;
                }
            }
        } else {
            if (input[14] < 2.023052) {
                if (input[1] < 0.2847282) {
                    var28 = 0.057409592;
                } else {
                    var28 = -0.30749747;
                }
            } else {
                if (input[4] < -0.01665475) {
                    var28 = -0.068164594;
                } else {
                    var28 = 0.3321011;
                }
            }
        }
    } else {
        if (input[13] < 0.1527962) {
            if (input[13] < 0.03326593) {
                if (input[11] < 2.028396) {
                    if (input[1] < 0.2800249) {
                        var28 = -0.083503895;
                    } else {
                        var28 = -0.37952593;
                    }
                } else {
                    if (input[11] < 2.372478) {
                        var28 = 0.18204376;
                    } else {
                        var28 = -0.103986144;
                    }
                }
            } else {
                if (input[1] < 0.3908895) {
                    if (input[4] < 0.04711714) {
                        var28 = 0.049010232;
                    } else {
                        var28 = 0.3163166;
                    }
                } else {
                    if (input[11] < 2.101174) {
                        var28 = 0.24391675;
                    } else {
                        var28 = -0.29752773;
                    }
                }
            }
        } else {
            if (input[4] < 0.1441492) {
                if (input[10] < 0.3752249) {
                    if (input[11] < 2.101016) {
                        var28 = -0.033321485;
                    } else {
                        var28 = -0.4502091;
                    }
                } else {
                    var28 = 0.017424736;
                }
            } else {
                if (input[14] < 2.097496) {
                    if (input[2] < 1.925248) {
                        var28 = -0.10676959;
                    } else {
                        var28 = 0.12755223;
                    }
                } else {
                    if (input[12] < 0.2024842) {
                        var28 = -0.092793465;
                    } else {
                        var28 = 0.19977501;
                    }
                }
            }
        }
    }
    var var29;
    if (input[17] < 2.259752) {
        if (input[16] < 0.1164029) {
            if (input[11] < 2.372478) {
                if (input[2] < 2.298463) {
                    if (input[2] < 2.258545) {
                        var29 = 0.027572623;
                    } else {
                        var29 = -0.1744586;
                    }
                } else {
                    if (input[2] < 2.38135) {
                        var29 = 0.22607918;
                    } else {
                        var29 = -0.1051208;
                    }
                }
            } else {
                if (input[12] < 0.006978919) {
                    if (input[2] < 2.475827) {
                        var29 = 0.2682324;
                    } else {
                        var29 = -0.06853694;
                    }
                } else {
                    if (input[3] < -0.4659589) {
                        var29 = 0.008817011;
                    } else {
                        var29 = -0.30717432;
                    }
                }
            }
        } else {
            if (input[5] < 1.87908) {
                var29 = 0.007024744;
            } else {
                var29 = -0.3581805;
            }
        }
    } else {
        if (input[0] < -0.3791448) {
            if (input[7] < -0.1507745) {
                if (input[6] < -0.3349194) {
                    if (input[4] < -0.3065926) {
                        var29 = 0.035824142;
                    } else {
                        var29 = -0.2809356;
                    }
                } else {
                    var29 = 0.12184939;
                }
            } else {
                var29 = 0.19417115;
            }
        } else {
            if (input[6] < -0.4148691) {
                var29 = -0.026880225;
            } else {
                if (input[0] < -0.3778352) {
                    if (input[5] < 2.405307) {
                        var29 = -0.063331716;
                    } else {
                        var29 = 0.1983644;
                    }
                } else {
                    var29 = 0.28399852;
                }
            }
        }
    }
    var var30;
    if (input[5] < 1.76939) {
        if (input[2] < 1.935035) {
            if (input[14] < 2.096116) {
                if (input[1] < -0.1185111) {
                    var30 = -0.21799858;
                } else {
                    var30 = 0.18484858;
                }
            } else {
                var30 = -0.3350109;
            }
        } else {
            var30 = 0.21880077;
        }
    } else {
        if (input[11] < 2.011718) {
            var30 = 0.26778403;
        } else {
            if (input[8] < 1.598044) {
                if (input[16] < 0.1081037) {
                    var30 = 0.3391136;
                } else {
                    var30 = 0.07832612;
                }
            } else {
                if (input[11] < 2.028396) {
                    if (input[6] < -0.4023498) {
                        var30 = 0.13715164;
                    } else {
                        var30 = -0.19730724;
                    }
                } else {
                    if (input[11] < 2.101174) {
                        var30 = 0.13132592;
                    } else {
                        var30 = -0.011127024;
                    }
                }
            }
        }
    }
    var var31;
    if (input[10] < 0.619611) {
        if (input[10] < 0.6173475) {
            if (input[13] < 0.3281717) {
                if (input[4] < 0.3480093) {
                    if (input[8] < 2.246323) {
                        var31 = -0.016976478;
                    } else {
                        var31 = 0.12319839;
                    }
                } else {
                    if (input[12] < 0.06150161) {
                        var31 = 0.26310575;
                    } else {
                        var31 = -0.21558936;
                    }
                }
            } else {
                if (input[3] < -0.4109742) {
                    if (input[14] < 2.08894) {
                        var31 = -0.039886314;
                    } else {
                        var31 = -0.33302125;
                    }
                } else {
                    if (input[2] < 1.93258) {
                        var31 = -0.14308025;
                    } else {
                        var31 = 0.2501202;
                    }
                }
            }
        } else {
            if (input[7] < 0.5492393) {
                if (input[16] < 0.1164029) {
                    if (input[5] < 1.950406) {
                        var31 = 0.34748125;
                    } else {
                        var31 = -0.06635164;
                    }
                } else {
                    if (input[7] < 0.2408444) {
                        var31 = -0.2480618;
                    } else {
                        var31 = -0.009873012;
                    }
                }
            } else {
                if (input[6] < -0.2978008) {
                    var31 = -0.27242428;
                } else {
                    if (input[2] < 1.925248) {
                        var31 = -0.049552485;
                    } else {
                        var31 = 0.27427733;
                    }
                }
            }
        }
    } else {
        if (input[12] < 0.06878792) {
            var31 = 0.20410992;
        } else {
            var31 = -0.31162596;
        }
    }
    var var32;
    if (input[17] < 2.259752) {
        if (input[10] < 0.619611) {
            if (input[11] < 2.370959) {
                if (input[2] < 2.298463) {
                    if (input[2] < 2.267957) {
                        var32 = 0.017875504;
                    } else {
                        var32 = -0.1591423;
                    }
                } else {
                    if (input[9] < 0.1241493) {
                        var32 = 0.21634218;
                    } else {
                        var32 = -0.22889672;
                    }
                }
            } else {
                if (input[12] < 0.006978919) {
                    if (input[11] < 2.497774) {
                        var32 = 0.23425211;
                    } else {
                        var32 = -0.08686334;
                    }
                } else {
                    if (input[7] < 0.1140716) {
                        var32 = -0.20112889;
                    } else {
                        var32 = 0.26068193;
                    }
                }
            }
        } else {
            if (input[16] < 0.1031877) {
                var32 = 0.030608179;
            } else {
                var32 = -0.29762352;
            }
        }
    } else {
        if (input[0] < -0.3791448) {
            if (input[7] < -0.2309992) {
                var32 = -0.22105004;
            } else {
                if (input[2] < 2.479406) {
                    var32 = 0.21250622;
                } else {
                    var32 = -0.17022334;
                }
            }
        } else {
            if (input[3] < -0.4990852) {
                var32 = -0.049848124;
            } else {
                if (input[9] < -0.0490794) {
                    var32 = 0.039822385;
                } else {
                    var32 = 0.2612542;
                }
            }
        }
    }
    var var33;
    if (input[15] < -0.06132899) {
        if (input[0] < -0.3535646) {
            var33 = -0.25821406;
        } else {
            var33 = 0.007664363;
        }
    } else {
        if (input[12] < -0.06765227) {
            if (input[10] < 0.5384006) {
                if (input[10] < 0.5328889) {
                    var33 = 0.30975464;
                } else {
                    if (input[8] < 1.984173) {
                        var33 = -0.026182072;
                    } else {
                        var33 = 0.17581874;
                    }
                }
            } else {
                var33 = -0.18800057;
            }
        } else {
            if (input[12] < -0.06536341) {
                if (input[11] < 2.12655) {
                    if (input[10] < 0.5307689) {
                        var33 = 0.039086953;
                    } else {
                        var33 = 0.18074518;
                    }
                } else {
                    if (input[4] < 0.3433854) {
                        var33 = -0.31944913;
                    } else {
                        var33 = 0.19660059;
                    }
                }
            } else {
                if (input[9] < -0.1100148) {
                    if (input[10] < 0.530708) {
                        var33 = 0.31419718;
                    } else {
                        var33 = -0.12082003;
                    }
                } else {
                    if (input[9] < -0.09859768) {
                        var33 = -0.31702948;
                    } else {
                        var33 = 0.011078166;
                    }
                }
            }
        }
    }
    var var34;
    if (input[17] < 1.855228) {
        if (input[11] < 2.102682) {
            if (input[10] < 0.3741347) {
                if (input[8] < 1.830581) {
                    if (input[13] < 0.1514405) {
                        var34 = -0.07848764;
                    } else {
                        var34 = -0.44194037;
                    }
                } else {
                    var34 = 0.19497828;
                }
            } else {
                if (input[11] < 2.102013) {
                    var34 = 0.29902124;
                } else {
                    if (input[2] < 2.125862) {
                        var34 = 0.19202505;
                    } else {
                        var34 = -0.24426275;
                    }
                }
            }
        } else {
            var34 = -0.32124543;
        }
    } else {
        if (input[15] < 0.2270994) {
            if (input[15] < 0.2244651) {
                if (input[12] < 0.2003175) {
                    if (input[9] < 0.1241493) {
                        var34 = 0.009754568;
                    } else {
                        var34 = -0.3022079;
                    }
                } else {
                    if (input[6] < -0.3616536) {
                        var34 = -0.21877785;
                    } else {
                        var34 = 0.2166049;
                    }
                }
            } else {
                if (input[11] < 2.026481) {
                    var34 = -0.3223637;
                } else {
                    var34 = -0.010605733;
                }
            }
        } else {
            var34 = 0.27196175;
        }
    }
    var var35;
    if (input[15] < -0.08544651) {
        var35 = -0.23037213;
    } else {
        if (input[12] < 0.09897958) {
            if (input[3] < -0.4028965) {
                if (input[11] < 2.011718) {
                    var35 = 0.2515572;
                } else {
                    if (input[11] < 2.02163) {
                        var35 = -0.20834889;
                    } else {
                        var35 = 0.010172468;
                    }
                }
            } else {
                if (input[10] < 0.09149217) {
                    if (input[12] < 0.02817179) {
                        var35 = -0.0121018505;
                    } else {
                        var35 = -0.20954384;
                    }
                } else {
                    if (input[3] < -0.2357431) {
                        var35 = 0.25428975;
                    } else {
                        var35 = -0.12173766;
                    }
                }
            }
        } else {
            if (input[11] < 2.372478) {
                if (input[6] < -0.3606194) {
                    if (input[4] < -0.03141789) {
                        var35 = -0.075581335;
                    } else {
                        var35 = -0.26973805;
                    }
                } else {
                    if (input[17] < 2.134903) {
                        var35 = -0.03466053;
                    } else {
                        var35 = 0.2002462;
                    }
                }
            } else {
                if (input[16] < -0.1949826) {
                    var35 = -0.30668035;
                } else {
                    var35 = 0.06115415;
                }
            }
        }
    }
    var var36;
    if (input[16] < 0.1146323) {
        if (input[0] < -0.4504225) {
            if (input[11] < 2.140636) {
                var36 = 0.2823941;
            } else {
                var36 = -0.15162598;
            }
        } else {
            if (input[0] < -0.3778352) {
                if (input[4] < 0.3455277) {
                    if (input[15] < 0.008107064) {
                        var36 = -0.16182819;
                    } else {
                        var36 = 0.19256367;
                    }
                } else {
                    if (input[2] < 2.105613) {
                        var36 = 0.27236715;
                    } else {
                        var36 = 0.06229591;
                    }
                }
            } else {
                if (input[11] < 2.499386) {
                    if (input[11] < 2.370959) {
                        var36 = 0.022422973;
                    } else {
                        var36 = -0.12600748;
                    }
                } else {
                    if (input[6] < -0.4234982) {
                        var36 = -0.16649033;
                    } else {
                        var36 = 0.2858882;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.025365) {
            if (input[7] < 0.1922555) {
                var36 = 0.0122459745;
            } else {
                var36 = 0.18172587;
            }
        } else {
            if (input[2] < 2.018615) {
                var36 = -0.33508542;
            } else {
                var36 = 0.16923034;
            }
        }
    }
    var var37;
    if (input[16] < 0.1021057) {
        if (input[1] < 0.5545402) {
            if (input[10] < 0.5350555) {
                if (input[0] < -0.4494827) {
                    if (input[3] < -0.6151521) {
                        var37 = -0.061289847;
                    } else {
                        var37 = 0.29609606;
                    }
                } else {
                    if (input[16] < 0.03140476) {
                        var37 = 0.018773742;
                    } else {
                        var37 = -0.13816714;
                    }
                }
            } else {
                if (input[14] < 2.166459) {
                    var37 = 0.11339055;
                } else {
                    if (input[1] < 0.5425626) {
                        var37 = -0.26575875;
                    } else {
                        var37 = -0.003108344;
                    }
                }
            }
        } else {
            if (input[6] < -0.2576701) {
                if (input[0] < -0.351336) {
                    if (input[4] < 0.3266098) {
                        var37 = 0.07243413;
                    } else {
                        var37 = -0.25793186;
                    }
                } else {
                    if (input[4] < 0.4148681) {
                        var37 = 0.3135013;
                    } else {
                        var37 = 0.024906961;
                    }
                }
            } else {
                var37 = -0.20842631;
            }
        }
    } else {
        if (input[17] < 2.074407) {
            if (input[6] < -0.4023498) {
                if (input[14] < 2.096116) {
                    if (input[11] < 2.02163) {
                        var37 = -0.12225307;
                    } else {
                        var37 = 0.28970018;
                    }
                } else {
                    var37 = -0.2053053;
                }
            } else {
                if (input[2] < 1.920887) {
                    if (input[7] < 0.5402977) {
                        var37 = 0.079487376;
                    } else {
                        var37 = -0.12412189;
                    }
                } else {
                    if (input[12] < 0.06554911) {
                        var37 = -0.3431346;
                    } else {
                        var37 = -0.09841509;
                    }
                }
            }
        } else {
            if (input[6] < -0.4487655) {
                var37 = -0.31630605;
            } else {
                if (input[15] < 0.1132715) {
                    if (input[14] < 2.098824) {
                        var37 = 0.30955994;
                    } else {
                        var37 = -0.008468336;
                    }
                } else {
                    if (input[6] < -0.3484732) {
                        var37 = 0.18374544;
                    } else {
                        var37 = -0.14843059;
                    }
                }
            }
        }
    }
    var var38;
    if (input[3] < -0.2600113) {
        if (input[12] < 0.2183221) {
            if (input[17] < 2.069503) {
                if (input[13] < 0.3320625) {
                    if (input[10] < 0.04802527) {
                        var38 = -0.15328425;
                    } else {
                        var38 = 0.27902555;
                    }
                } else {
                    var38 = -0.21585312;
                }
            } else {
                if (input[12] < 0.2003175) {
                    if (input[12] < 0.1810082) {
                        var38 = 0.0006128567;
                    } else {
                        var38 = -0.26504758;
                    }
                } else {
                    if (input[6] < -0.3651773) {
                        var38 = -0.1582821;
                    } else {
                        var38 = 0.2738772;
                    }
                }
            }
        } else {
            if (input[13] < 0.03326593) {
                if (input[8] < 1.94983) {
                    var38 = -0.318687;
                } else {
                    var38 = -0.07313;
                }
            } else {
                var38 = 0.122082725;
            }
        }
    } else {
        if (input[11] < 2.100791) {
            var38 = 0.24700995;
        } else {
            if (input[17] < 2.137822) {
                if (input[1] < 0.3992057) {
                    if (input[9] < 0.06550905) {
                        var38 = 0.15333688;
                    } else {
                        var38 = -0.1614123;
                    }
                } else {
                    var38 = 0.23009406;
                }
            } else {
                if (input[6] < -0.2978008) {
                    if (input[16] < -0.208603) {
                        var38 = 0.042405874;
                    } else {
                        var38 = -0.17549358;
                    }
                } else {
                    var38 = 0.27585998;
                }
            }
        }
    }
    var var39;
    if (input[9] < 0.1936356) {
        if (input[17] < 1.85164) {
            if (input[1] < 0.3992057) {
                if (input[11] < 2.101174) {
                    if (input[4] < 0.1319797) {
                        var39 = -0.19991954;
                    } else {
                        var39 = 0.19156604;
                    }
                } else {
                    var39 = -0.26969874;
                }
            } else {
                var39 = 0.1590215;
            }
        } else {
            if (input[12] < 0.2576118) {
                if (input[9] < 0.1921536) {
                    if (input[6] < -0.194014) {
                        var39 = 0.012453363;
                    } else {
                        var39 = -0.16531855;
                    }
                } else {
                    if (input[12] < 0.2573747) {
                        var39 = -0.08959789;
                    } else {
                        var39 = -0.3075921;
                    }
                }
            } else {
                var39 = 0.25345954;
            }
        }
    } else {
        if (input[0] < -0.167685) {
            var39 = -0.11470531;
        } else {
            var39 = 0.26035908;
        }
    }
    var var40;
    if (input[11] < 2.028396) {
        if (input[15] < 0.1126361) {
            if (input[6] < -0.4606948) {
                var40 = -0.15874742;
            } else {
                var40 = 0.26808113;
            }
        } else {
            if (input[14] < 2.096116) {
                if (input[10] < 0.2916531) {
                    if (input[15] < 0.2223878) {
                        var40 = -0.08560001;
                    } else {
                        var40 = -0.31189457;
                    }
                } else {
                    if (input[12] < 0.06554911) {
                        var40 = -0.07234626;
                    } else {
                        var40 = 0.21136177;
                    }
                }
            } else {
                if (input[6] < -0.3820184) {
                    var40 = 0.018080082;
                } else {
                    var40 = -0.3141641;
                }
            }
        }
    } else {
        if (input[11] < 2.101174) {
            if (input[16] < 0.1081037) {
                if (input[15] < 0.2598106) {
                    if (input[10] < 0.619611) {
                        var40 = 0.3017722;
                    } else {
                        var40 = -0.04982977;
                    }
                } else {
                    if (input[3] < -0.2152646) {
                        var40 = 0.018271107;
                    } else {
                        var40 = -0.21189597;
                    }
                }
            } else {
                if (input[8] < 1.667378) {
                    var40 = -0.07596814;
                } else {
                    var40 = -0.27913168;
                }
            }
        } else {
            if (input[9] < 0.1915394) {
                if (input[12] < 0.2044219) {
                    if (input[9] < 0.1241493) {
                        var40 = 0.009856685;
                    } else {
                        var40 = -0.18464178;
                    }
                } else {
                    var40 = 0.25089034;
                }
            } else {
                if (input[13] < 0.1506903) {
                    var40 = 0.21171546;
                } else {
                    if (input[1] < 0.3983185) {
                        var40 = -0.30925146;
                    } else {
                        var40 = 0.05745934;
                    }
                }
            }
        }
    }
    var var41;
    if (input[7] < -0.1543097) {
        if (input[13] < -0.02568753) {
            if (input[0] < -0.2389009) {
                if (input[1] < 0.07943828) {
                    if (input[14] < 2.392356) {
                        var41 = -0.18705973;
                    } else {
                        var41 = 0.01097022;
                    }
                } else {
                    var41 = 0.26181516;
                }
            } else {
                if (input[10] < 0.0994171) {
                    if (input[14] < 2.200727) {
                        var41 = 0.21170574;
                    } else {
                        var41 = -0.275209;
                    }
                } else {
                    var41 = -0.36365926;
                }
            }
        } else {
            if (input[14] < 2.023052) {
                var41 = -0.13501401;
            } else {
                if (input[11] < 2.372478) {
                    var41 = 0.26994556;
                } else {
                    var41 = 0.06620286;
                }
            }
        }
    } else {
        if (input[4] < -0.01436776) {
            if (input[6] < -0.3920166) {
                if (input[10] < -0.0713496) {
                    var41 = -0.26059088;
                } else {
                    var41 = -0.014708707;
                }
            } else {
                if (input[13] < -0.02687569) {
                    if (input[15] < -0.02934759) {
                        var41 = -0.17757733;
                    } else {
                        var41 = 0.24010256;
                    }
                } else {
                    if (input[7] < 0.02409225) {
                        var41 = -0.19946092;
                    } else {
                        var41 = 0.18471162;
                    }
                }
            }
        } else {
            if (input[1] < 0.1950531) {
                if (input[7] < 0.02409225) {
                    var41 = -0.38719973;
                } else {
                    if (input[1] < 0.07943828) {
                        var41 = -0.24808608;
                    } else {
                        var41 = 0.22966358;
                    }
                }
            } else {
                if (input[14] < 2.31249) {
                    if (input[12] < -0.06765227) {
                        var41 = 0.14756145;
                    } else {
                        var41 = -0.021044847;
                    }
                } else {
                    if (input[17] < 2.131908) {
                        var41 = 0.0041152495;
                    } else {
                        var41 = 0.2495214;
                    }
                }
            }
        }
    }
    var var42;
    if (input[15] < -0.08544651) {
        var42 = -0.19617589;
    } else {
        if (input[15] < -0.0508147) {
            if (input[14] < 2.166459) {
                var42 = 0.26020527;
            } else {
                if (input[0] < -0.3769169) {
                    var42 = -0.17044741;
                } else {
                    var42 = 0.14286491;
                }
            }
        } else {
            if (input[3] < -0.4789272) {
                if (input[10] < 0.5328889) {
                    if (input[0] < -0.4372823) {
                        var42 = 0.11096601;
                    } else {
                        var42 = -0.16421337;
                    }
                } else {
                    if (input[6] < -0.314702) {
                        var42 = -0.26621503;
                    } else {
                        var42 = -0.026272353;
                    }
                }
            } else {
                if (input[9] < -0.05034503) {
                    if (input[2] < 2.475827) {
                        var42 = 0.25921127;
                    } else {
                        var42 = 0.0030995633;
                    }
                } else {
                    if (input[1] < -0.07457953) {
                        var42 = -0.18473203;
                    } else {
                        var42 = 0.01107728;
                    }
                }
            }
        }
    }
    var var43;
    if (input[8] < 2.246323) {
        if (input[0] < -0.351336) {
            if (input[2] < 1.93258) {
                var43 = -0.37728798;
            } else {
                if (input[1] < 0.5423638) {
                    if (input[7] < 0.2699058) {
                        var43 = -0.020427262;
                    } else {
                        var43 = -0.21277423;
                    }
                } else {
                    if (input[8] < 1.83795) {
                        var43 = -0.15305533;
                    } else {
                        var43 = 0.21956767;
                    }
                }
            }
        } else {
            if (input[9] < -0.008710084) {
                if (input[5] < 1.76939) {
                    if (input[15] < 0.1137185) {
                        var43 = 0.16000123;
                    } else {
                        var43 = -0.21315344;
                    }
                } else {
                    if (input[13] < 0.3320625) {
                        var43 = 0.28276;
                    } else {
                        var43 = -0.06480087;
                    }
                }
            } else {
                if (input[11] < 2.372478) {
                    if (input[2] < 2.298463) {
                        var43 = -0.02741921;
                    } else {
                        var43 = 0.121602364;
                    }
                } else {
                    if (input[14] < 2.325555) {
                        var43 = -0.27346402;
                    } else {
                        var43 = -0.0025126408;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.395417) {
            if (input[10] < -0.06779604) {
                var43 = -0.24298815;
            } else {
                var43 = 0.1546625;
            }
        } else {
            if (input[7] < -0.1573581) {
                if (input[16] < -0.363471) {
                    var43 = 0.120880745;
                } else {
                    var43 = -0.15937853;
                }
            } else {
                var43 = 0.28996933;
            }
        }
    }
    var var44;
    if (input[11] < 2.500012) {
        if (input[2] < 2.477053) {
            if (input[2] < 2.46627) {
                if (input[2] < 2.38135) {
                    if (input[2] < 2.376252) {
                        var44 = -0.0063017844;
                    } else {
                        var44 = 0.21634163;
                    }
                } else {
                    if (input[11] < 2.368625) {
                        var44 = 0.18524076;
                    } else {
                        var44 = -0.2391764;
                    }
                }
            } else {
                if (input[3] < -0.485357) {
                    var44 = -0.043715928;
                } else {
                    var44 = 0.25339514;
                }
            }
        } else {
            var44 = -0.2519951;
        }
    } else {
        if (input[1] < -0.07457953) {
            if (input[9] < -0.04321694) {
                var44 = -0.3011433;
            } else {
                var44 = 0.25732085;
            }
        } else {
            if (input[16] < -0.363471) {
                var44 = 0.2831567;
            } else {
                var44 = 0.023333699;
            }
        }
    }
    var var45;
    if (input[10] < 0.619611) {
        if (input[10] < 0.6173475) {
            if (input[11] < 2.026481) {
                if (input[6] < -0.4090127) {
                    if (input[2] < 1.93258) {
                        var45 = -0.09192768;
                    } else {
                        var45 = 0.24464394;
                    }
                } else {
                    if (input[2] < 1.920887) {
                        var45 = 0.080081314;
                    } else {
                        var45 = -0.22070403;
                    }
                }
            } else {
                if (input[11] < 2.100791) {
                    if (input[16] < 0.1031877) {
                        var45 = 0.24140637;
                    } else {
                        var45 = -0.11643985;
                    }
                } else {
                    if (input[14] < 1.987457) {
                        var45 = -0.20715986;
                    } else {
                        var45 = 0.0010567802;
                    }
                }
            }
        } else {
            if (input[10] < 0.6190017) {
                if (input[9] < 0.01235408) {
                    if (input[9] < -0.01277679) {
                        var45 = -0.013264722;
                    } else {
                        var45 = 0.27069628;
                    }
                } else {
                    var45 = -0.04046208;
                }
            } else {
                if (input[0] < -0.3316236) {
                    if (input[12] < 0.06878792) {
                        var45 = -0.03266567;
                    } else {
                        var45 = -0.24765672;
                    }
                } else {
                    var45 = 0.17783767;
                }
            }
        }
    } else {
        if (input[12] < 0.06878792) {
            var45 = 0.14367336;
        } else {
            var45 = -0.24421856;
        }
    }
    var var46;
    if (input[9] < 0.1936356) {
        if (input[17] < 1.85164) {
            if (input[4] < 0.1346993) {
                var46 = -0.22629969;
            } else {
                if (input[11] < 2.102682) {
                    if (input[12] < 0.2570114) {
                        var46 = 0.19793604;
                    } else {
                        var46 = 0.0069712014;
                    }
                } else {
                    var46 = -0.2030314;
                }
            }
        } else {
            if (input[11] < 2.011718) {
                var46 = 0.21493405;
            } else {
                if (input[12] < 0.2576118) {
                    if (input[3] < -0.2600113) {
                        var46 = 0.011070945;
                    } else {
                        var46 = -0.05952206;
                    }
                } else {
                    var46 = 0.2208335;
                }
            }
        }
    } else {
        if (input[2] < 2.144776) {
            var46 = 0.21675782;
        } else {
            var46 = -0.006784328;
        }
    }
    var var47;
    if (input[0] < -0.1607478) {
        if (input[6] < -0.194014) {
            if (input[6] < -0.2406968) {
                if (input[1] < 0.1950531) {
                    if (input[11] < 2.475558) {
                        var47 = -0.15690511;
                    } else {
                        var47 = 0.03500036;
                    }
                } else {
                    if (input[14] < 2.209989) {
                        var47 = -0.009987965;
                    } else {
                        var47 = 0.16569713;
                    }
                }
            } else {
                if (input[10] < 0.207403) {
                    if (input[16] < -0.2318878) {
                        var47 = -0.21916743;
                    } else {
                        var47 = 0.22333357;
                    }
                } else {
                    if (input[0] < -0.1948868) {
                        var47 = -0.24428053;
                    } else {
                        var47 = 0.02397124;
                    }
                }
            }
        } else {
            if (input[8] < 1.986629) {
                var47 = 0.03692006;
            } else {
                if (input[4] < -0.03887219) {
                    var47 = -0.012654227;
                } else {
                    var47 = -0.25422424;
                }
            }
        }
    } else {
        if (input[11] < 2.102682) {
            var47 = 0.20157228;
        } else {
            var47 = -0.0008018334;
        }
    }
    var var48;
    if (input[0] < -0.4494827) {
        if (input[2] < 2.118738) {
            if (input[6] < -0.4681743) {
                var48 = 0.023848474;
            } else {
                var48 = 0.24645682;
            }
        } else {
            var48 = -0.11932704;
        }
    } else {
        if (input[12] < -0.06536341) {
            if (input[17] < 2.126495) {
                if (input[7] < 0.245115) {
                    var48 = 0.018789852;
                } else {
                    var48 = -0.29650003;
                }
            } else {
                if (input[1] < 0.5410479) {
                    var48 = -0.0829452;
                } else {
                    var48 = 0.1863829;
                }
            }
        } else {
            if (input[9] < -0.1100148) {
                if (input[6] < -0.4431067) {
                    if (input[2] < 2.105613) {
                        var48 = 0.30264774;
                    } else {
                        var48 = 0.037165232;
                    }
                } else {
                    var48 = -0.22875947;
                }
            } else {
                if (input[9] < -0.07188392) {
                    var48 = -0.26064268;
                } else {
                    if (input[9] < -0.05198072) {
                        var48 = 0.18329303;
                    } else {
                        var48 = -0.0020660155;
                    }
                }
            }
        }
    }
    var var49;
    if (input[12] < 0.2584221) {
        if (input[14] < 1.987457) {
            if (input[11] < 2.101016) {
                var49 = 0.04804853;
            } else {
                var49 = -0.23617847;
            }
        } else {
            if (input[9] < 0.1932854) {
                if (input[9] < 0.1915394) {
                    if (input[15] < 0.2270994) {
                        var49 = -0.0026033786;
                    } else {
                        var49 = 0.22268613;
                    }
                } else {
                    if (input[1] < 0.3962719) {
                        var49 = -0.242235;
                    } else {
                        var49 = -0.06225511;
                    }
                }
            } else {
                if (input[5] < 2.045481) {
                    var49 = 0.26619723;
                } else {
                    var49 = -0.016411697;
                }
            }
        }
    } else {
        var49 = 0.17594963;
    }
    var var50;
    if (input[15] < -0.08544651) {
        var50 = -0.17457667;
    } else {
        if (input[15] < -0.0508147) {
            if (input[14] < 2.166459) {
                var50 = 0.23538147;
            } else {
                var50 = -0.05052783;
            }
        } else {
            if (input[0] < -0.3791448) {
                if (input[4] < 0.3480093) {
                    if (input[0] < -0.4412295) {
                        var50 = 0.028534783;
                    } else {
                        var50 = -0.17424074;
                    }
                } else {
                    var50 = 0.20235834;
                }
            } else {
                if (input[12] < 0.06150161) {
                    if (input[10] < 0.6167709) {
                        var50 = 0.03768929;
                    } else {
                        var50 = 0.23328507;
                    }
                } else {
                    if (input[12] < 0.06554911) {
                        var50 = -0.17366774;
                    } else {
                        var50 = 0.0036875184;
                    }
                }
            }
        }
    }
    var var51;
    if (input[10] < 0.619611) {
        if (input[16] < 0.1164029) {
            if (input[10] < 0.6173475) {
                if (input[1] < 0.5901143) {
                    if (input[6] < -0.3214357) {
                        var51 = -0.018557603;
                    } else {
                        var51 = 0.0323863;
                    }
                } else {
                    if (input[16] < 0.1021057) {
                        var51 = 0.09741757;
                    } else {
                        var51 = -0.27055556;
                    }
                }
            } else {
                if (input[7] < 0.5492393) {
                    if (input[5] < 1.950406) {
                        var51 = 0.27598715;
                    } else {
                        var51 = -0.0734404;
                    }
                } else {
                    if (input[6] < -0.2978008) {
                        var51 = -0.2059118;
                    } else {
                        var51 = 0.102423556;
                    }
                }
            }
        } else {
            var51 = -0.174664;
        }
    } else {
        if (input[9] < -0.003282269) {
            var51 = 0.069667496;
        } else {
            var51 = -0.2228081;
        }
    }
    var var52;
    if (input[17] < 2.259752) {
        if (input[11] < 2.370959) {
            if (input[2] < 2.298463) {
                if (input[13] < -0.09412186) {
                    if (input[9] < 0.06810521) {
                        var52 = -0.31937492;
                    } else {
                        var52 = 0.07495498;
                    }
                } else {
                    if (input[4] < 0.03004733) {
                        var52 = 0.1663104;
                    } else {
                        var52 = -0.0116823;
                    }
                }
            } else {
                if (input[2] < 2.38135) {
                    if (input[9] < 0.1241493) {
                        var52 = 0.26128826;
                    } else {
                        var52 = -0.1523229;
                    }
                } else {
                    if (input[11] < 2.368625) {
                        var52 = 0.17114747;
                    } else {
                        var52 = -0.2404737;
                    }
                }
            }
        } else {
            if (input[9] < -0.03183947) {
                if (input[0] < -0.3753636) {
                    if (input[9] < -0.05374469) {
                        var52 = 0.17058933;
                    } else {
                        var52 = -0.17765158;
                    }
                } else {
                    if (input[1] < -0.0773728) {
                        var52 = -0.18282066;
                    } else {
                        var52 = 0.25556841;
                    }
                }
            } else {
                if (input[7] < -0.03302953) {
                    if (input[1] < 0.1964638) {
                        var52 = -0.29757518;
                    } else {
                        var52 = -0.02395699;
                    }
                } else {
                    var52 = 0.08963647;
                }
            }
        }
    } else {
        if (input[2] < 2.479406) {
            if (input[1] < -0.07457953) {
                if (input[11] < 2.500891) {
                    if (input[9] < -0.04871126) {
                        var52 = 0.0909901;
                    } else {
                        var52 = -0.17156379;
                    }
                } else {
                    var52 = 0.143246;
                }
            } else {
                var52 = 0.25343448;
            }
        } else {
            if (input[4] < -0.2788549) {
                var52 = -0.21230602;
            } else {
                var52 = 0.087475345;
            }
        }
    }
    var var53;
    if (input[15] < -0.08544651) {
        var53 = -0.17805634;
    } else {
        if (input[12] < 0.09897958) {
            if (input[9] < 0.06730008) {
                if (input[14] < 2.088098) {
                    var53 = 0.19114831;
                } else {
                    if (input[0] < -0.2315607) {
                        var53 = -0.00091864273;
                    } else {
                        var53 = 0.20671502;
                    }
                }
            } else {
                var53 = 0.23886494;
            }
        } else {
            if (input[6] < -0.3616536) {
                var53 = -0.22111815;
            } else {
                if (input[10] < 0.3741347) {
                    if (input[0] < -0.2389009) {
                        var53 = 0.12675457;
                    } else {
                        var53 = -0.07298201;
                    }
                } else {
                    if (input[12] < 0.1990489) {
                        var53 = -0.1736276;
                    } else {
                        var53 = 0.166484;
                    }
                }
            }
        }
    }
    var var54;
    if (input[10] < 0.619611) {
        if (input[6] < -0.194014) {
            if (input[15] < 0.2233113) {
                if (input[15] < 0.1724227) {
                    if (input[9] < 0.1241493) {
                        var54 = 0.018573487;
                    } else {
                        var54 = -0.15832129;
                    }
                } else {
                    if (input[4] < 0.0834032) {
                        var54 = 0.06134379;
                    } else {
                        var54 = 0.2514504;
                    }
                }
            } else {
                if (input[4] < 0.1441492) {
                    if (input[12] < 0.217046) {
                        var54 = 0.14641666;
                    } else {
                        var54 = -0.1632087;
                    }
                } else {
                    if (input[14] < 1.987457) {
                        var54 = -0.032157935;
                    } else {
                        var54 = 0.20903619;
                    }
                }
            }
        } else {
            if (input[12] < 0.2561735) {
                if (input[9] < 0.06950404) {
                    var54 = -0.235351;
                } else {
                    if (input[13] < 0.1580747) {
                        var54 = 0.111056216;
                    } else {
                        var54 = -0.18310022;
                    }
                }
            } else {
                var54 = 0.12390847;
            }
        }
    } else {
        if (input[9] < 0.003138444) {
            var54 = 0.025229821;
        } else {
            var54 = -0.19976375;
        }
    }
    var var55;
    if (input[11] < 2.502759) {
        if (input[2] < 2.484531) {
            if (input[14] < 2.398465) {
                if (input[1] < -0.07457953) {
                    if (input[17] < 2.259752) {
                        var55 = -0.22016065;
                    } else {
                        var55 = 0.051120214;
                    }
                } else {
                    if (input[17] < 2.250677) {
                        var55 = -0.0037414785;
                    } else {
                        var55 = 0.18873407;
                    }
                }
            } else {
                if (input[2] < 2.479406) {
                    if (input[9] < -0.04783939) {
                        var55 = 0.22253355;
                    } else {
                        var55 = 0.026464825;
                    }
                } else {
                    var55 = -0.11551762;
                }
            }
        } else {
            var55 = -0.18970089;
        }
    } else {
        var55 = 0.16443466;
    }
    var var56;
    if (input[15] < -0.06132899) {
        var56 = -0.15378287;
    } else {
        if (input[12] < -0.06765227) {
            if (input[10] < 0.533277) {
                var56 = 0.24220406;
            } else {
                var56 = -0.07833882;
            }
        } else {
            if (input[12] < -0.06456681) {
                if (input[13] < 0.2764167) {
                    if (input[10] < 0.5273381) {
                        var56 = -0.17565298;
                    } else {
                        var56 = 0.14424297;
                    }
                } else {
                    var56 = -0.22487688;
                }
            } else {
                if (input[9] < -0.1100148) {
                    if (input[16] < 0.04317033) {
                        var56 = 0.2642092;
                    } else {
                        var56 = -0.10821619;
                    }
                } else {
                    if (input[0] < -0.4060373) {
                        var56 = -0.23202354;
                    } else {
                        var56 = 0.006686425;
                    }
                }
            }
        }
    }
    var var57;
    if (input[12] < 0.2584221) {
        if (input[6] < -0.194014) {
            if (input[15] < 0.2233113) {
                if (input[12] < 0.2003175) {
                    if (input[9] < 0.1241493) {
                        var57 = 0.007730483;
                    } else {
                        var57 = -0.24823172;
                    }
                } else {
                    if (input[6] < -0.3540058) {
                        var57 = -0.113383204;
                    } else {
                        var57 = 0.25555626;
                    }
                }
            } else {
                if (input[11] < 2.025365) {
                    var57 = -0.2617372;
                } else {
                    if (input[6] < -0.2672449) {
                        var57 = 0.12244875;
                    } else {
                        var57 = -0.1330625;
                    }
                }
            }
        } else {
            if (input[5] < 2.069295) {
                var57 = 0.07296533;
            } else {
                if (input[4] < 0.09075678) {
                    var57 = -0.034231607;
                } else {
                    var57 = -0.22567876;
                }
            }
        }
    } else {
        var57 = 0.16419978;
    }
    var var58;
    if (input[4] < 0.3950242) {
        if (input[2] < 1.944709) {
            if (input[11] < 2.02163) {
                if (input[2] < 1.93258) {
                    if (input[6] < -0.3730662) {
                        var58 = -0.29780406;
                    } else {
                        var58 = 0.091293514;
                    }
                } else {
                    var58 = 0.23238231;
                }
            } else {
                if (input[11] < 2.035033) {
                    var58 = 0.29893863;
                } else {
                    var58 = 0.06212077;
                }
            }
        } else {
            if (input[13] < 0.2769953) {
                if (input[0] < -0.4412295) {
                    var58 = 0.2505469;
                } else {
                    if (input[10] < 0.5302477) {
                        var58 = 0.009579367;
                    } else {
                        var58 = -0.12705249;
                    }
                }
            } else {
                if (input[12] < -0.06879868) {
                    if (input[13] < 0.2800869) {
                        var58 = 0.1826376;
                    } else {
                        var58 = -0.024051717;
                    }
                } else {
                    if (input[11] < 2.026481) {
                        var58 = 0.089108944;
                    } else {
                        var58 = -0.20884024;
                    }
                }
            }
        }
    } else {
        if (input[1] < 0.5648397) {
            if (input[10] < 0.6181909) {
                var58 = 0.22869724;
            } else {
                if (input[3] < -0.4659589) {
                    var58 = 0.08095214;
                } else {
                    var58 = -0.16003755;
                }
            }
        } else {
            if (input[6] < -0.3420912) {
                var58 = 0.022561187;
            } else {
                if (input[2] < 1.920887) {
                    var58 = -0.060727544;
                } else {
                    if (input[12] < 0.07005186) {
                        var58 = -0.2753567;
                    } else {
                        var58 = -0.07855264;
                    }
                }
            }
        }
    }
    var var59;
    if (input[13] < -0.09412186) {
        if (input[5] < 2.210082) {
            if (input[9] < 0.06950404) {
                if (input[14] < 2.199785) {
                    var59 = -0.3394156;
                } else {
                    var59 = -0.060176447;
                }
            } else {
                var59 = 0.021655232;
            }
        } else {
            if (input[9] < 0.06810521) {
                if (input[13] < -0.09580181) {
                    if (input[12] < 0.02870946) {
                        var59 = -0.07481241;
                    } else {
                        var59 = 0.13687374;
                    }
                } else {
                    var59 = -0.25537634;
                }
            } else {
                var59 = 0.25188044;
            }
        }
    } else {
        if (input[17] < 2.210215) {
            if (input[11] < 2.372478) {
                if (input[4] < -0.01436776) {
                    if (input[6] < -0.2654123) {
                        var59 = -0.017495077;
                    } else {
                        var59 = 0.27444327;
                    }
                } else {
                    if (input[8] < 2.140098) {
                        var59 = 0.010603876;
                    } else {
                        var59 = -0.14226466;
                    }
                }
            } else {
                var59 = -0.23817916;
            }
        } else {
            var59 = 0.21010008;
        }
    }
    var var60;
    if (input[1] < 0.1950531) {
        if (input[7] < 0.02409225) {
            if (input[0] < -0.2389009) {
                if (input[9] < 0.06730008) {
                    if (input[15] < -0.02934759) {
                        var60 = -0.20929095;
                    } else {
                        var60 = 0.006639549;
                    }
                } else {
                    var60 = 0.21765739;
                }
            } else {
                if (input[8] < 2.005006) {
                    if (input[3] < -0.2571645) {
                        var60 = -0.18560487;
                    } else {
                        var60 = 0.1474937;
                    }
                } else {
                    if (input[15] < 0.1307151) {
                        var60 = -0.30628887;
                    } else {
                        var60 = -0.05492996;
                    }
                }
            }
        } else {
            if (input[6] < -0.188584) {
                if (input[6] < -0.2032473) {
                    var60 = 0.24355447;
                } else {
                    var60 = 0.06196872;
                }
            } else {
                var60 = -0.0872131;
            }
        }
    } else {
        if (input[10] < 0.2064679) {
            var60 = 0.30154082;
        } else {
            if (input[6] < -0.2672449) {
                if (input[16] < 0.1021057) {
                    if (input[1] < 0.5545402) {
                        var60 = 0.026461057;
                    } else {
                        var60 = 0.1724762;
                    }
                } else {
                    if (input[14] < 2.098824) {
                        var60 = 0.007922278;
                    } else {
                        var60 = -0.19206645;
                    }
                }
            } else {
                if (input[3] < -0.4446378) {
                    var60 = 0.1533482;
                } else {
                    if (input[0] < -0.196562) {
                        var60 = -0.20316009;
                    } else {
                        var60 = 0.013856998;
                    }
                }
            }
        }
    }
    var var61;
    if (input[5] < 2.210082) {
        if (input[13] < -0.09412186) {
            if (input[9] < 0.06950404) {
                if (input[14] < 2.199785) {
                    var61 = -0.292023;
                } else {
                    var61 = -0.052786175;
                }
            } else {
                var61 = 0.014399785;
            }
        } else {
            if (input[2] < 1.915972) {
                var61 = 0.18622702;
            } else {
                if (input[2] < 1.92312) {
                    if (input[7] < 0.4612298) {
                        var61 = -0.020037664;
                    } else {
                        var61 = -0.21431099;
                    }
                } else {
                    if (input[8] < 2.005006) {
                        var61 = 0.01236909;
                    } else {
                        var61 = -0.13261433;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.3178167) {
            if (input[9] < -0.05281232) {
                var61 = 0.141638;
            } else {
                if (input[0] < -0.3791448) {
                    if (input[2] < 2.477053) {
                        var61 = -0.047562078;
                    } else {
                        var61 = -0.22849049;
                    }
                } else {
                    if (input[10] < -0.0743801) {
                        var61 = 0.24421848;
                    } else {
                        var61 = -0.04677921;
                    }
                }
            }
        } else {
            if (input[2] < 2.38135) {
                if (input[15] < 0.1108875) {
                    var61 = -0.098960705;
                } else {
                    if (input[11] < 2.370959) {
                        var61 = 0.2139496;
                    } else {
                        var61 = 0.024724802;
                    }
                }
            } else {
                if (input[9] < 0.1228878) {
                    var61 = 0.08058954;
                } else {
                    if (input[6] < -0.229101) {
                        var61 = -0.049763475;
                    } else {
                        var61 = -0.19145928;
                    }
                }
            }
        }
    }
    var var62;
    if (input[2] < 2.298463) {
        if (input[2] < 2.296401) {
            if (input[4] < 0.03004733) {
                if (input[13] < -0.09412186) {
                    if (input[8] < 2.015879) {
                        var62 = -0.16521414;
                    } else {
                        var62 = 0.07895318;
                    }
                } else {
                    var62 = 0.2505346;
                }
            } else {
                if (input[16] < -0.180567) {
                    if (input[1] < 0.2847282) {
                        var62 = -0.28012407;
                    } else {
                        var62 = 0.006558841;
                    }
                } else {
                    if (input[13] < 0.1527962) {
                        var62 = 0.11320362;
                    } else {
                        var62 = -0.018341027;
                    }
                }
            }
        } else {
            if (input[9] < 0.06730008) {
                var62 = -0.36138895;
            } else {
                if (input[15] < 0.1264339) {
                    var62 = -0.12898788;
                } else {
                    var62 = 0.22506383;
                }
            }
        }
    } else {
        if (input[11] < 2.368625) {
            if (input[0] < -0.24256) {
                var62 = -0.026338272;
            } else {
                var62 = 0.26763442;
            }
        } else {
            if (input[7] < -0.03302953) {
                if (input[15] < 0.1173593) {
                    if (input[12] < 0.1513406) {
                        var62 = -0.019628951;
                    } else {
                        var62 = 0.20993392;
                    }
                } else {
                    if (input[13] < -0.02568753) {
                        var62 = -0.23121521;
                    } else {
                        var62 = -0.025926191;
                    }
                }
            } else {
                if (input[11] < 2.372478) {
                    var62 = 0.21810769;
                } else {
                    var62 = 0.045966648;
                }
            }
        }
    }
    var var63;
    if (input[14] < 2.024647) {
        if (input[10] < 0.2916531) {
            var63 = -0.21709819;
        } else {
            if (input[11] < 2.102682) {
                if (input[2] < 2.136343) {
                    if (input[16] < -0.1775205) {
                        var63 = -0.0970756;
                    } else {
                        var63 = 0.2053561;
                    }
                } else {
                    if (input[0] < -0.167685) {
                        var63 = 0.14196287;
                    } else {
                        var63 = -0.23091283;
                    }
                }
            } else {
                var63 = -0.19721581;
            }
        }
    } else {
        if (input[12] < 0.2003175) {
            if (input[9] < 0.1241493) {
                if (input[0] < -0.351336) {
                    if (input[5] < 2.066714) {
                        var63 = -0.14772944;
                    } else {
                        var63 = 0.017381875;
                    }
                } else {
                    if (input[14] < 2.09464) {
                        var63 = 0.14392653;
                    } else {
                        var63 = 0.0058907284;
                    }
                }
            } else {
                var63 = -0.21839248;
            }
        } else {
            if (input[6] < -0.3408213) {
                var63 = -0.020026445;
            } else {
                if (input[9] < 0.1658236) {
                    var63 = 0.24697751;
                } else {
                    var63 = 0.023860052;
                }
            }
        }
    }
    var var64;
    if (input[8] < 2.298111) {
        if (input[0] < -0.4494827) {
            if (input[11] < 2.140636) {
                if (input[16] < 0.05123346) {
                    var64 = 0.20704894;
                } else {
                    var64 = 0.036982425;
                }
            } else {
                var64 = -0.11443176;
            }
        } else {
            if (input[12] < -0.06456681) {
                if (input[17] < 2.126495) {
                    if (input[15] < -0.04790308) {
                        var64 = -0.05148924;
                    } else {
                        var64 = -0.22814377;
                    }
                } else {
                    var64 = 0.063396506;
                }
            } else {
                if (input[9] < -0.1100148) {
                    if (input[16] < 0.04245633) {
                        var64 = 0.23264353;
                    } else {
                        var64 = -0.09811813;
                    }
                } else {
                    if (input[3] < -0.4789272) {
                        var64 = -0.14506188;
                    } else {
                        var64 = 0.0019117561;
                    }
                }
            }
        }
    } else {
        var64 = 0.13149141;
    }
    var var65;
    if (input[11] < 2.028396) {
        if (input[6] < -0.4097307) {
            if (input[6] < -0.4406734) {
                if (input[13] < 0.3302176) {
                    var65 = 0.09551725;
                } else {
                    var65 = -0.12899877;
                }
            } else {
                if (input[11] < 2.019607) {
                    var65 = -0.02472185;
                } else {
                    var65 = 0.2391912;
                }
            }
        } else {
            if (input[15] < 0.1132715) {
                var65 = 0.16578098;
            } else {
                if (input[2] < 1.915972) {
                    var65 = 0.093150295;
                } else {
                    if (input[8] < 1.611543) {
                        var65 = 0.05735652;
                    } else {
                        var65 = -0.18681547;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.084692) {
            if (input[13] < 0.3353739) {
                if (input[5] < 2.09062) {
                    if (input[16] < 0.1047011) {
                        var65 = 0.2656955;
                    } else {
                        var65 = 0.015989026;
                    }
                } else {
                    var65 = -0.0152116995;
                }
            } else {
                var65 = -0.19700283;
            }
        } else {
            if (input[2] < 2.102309) {
                if (input[0] < -0.4473344) {
                    var65 = 0.11023903;
                } else {
                    if (input[0] < -0.4327934) {
                        var65 = -0.25547537;
                    } else {
                        var65 = -0.028983053;
                    }
                }
            } else {
                if (input[2] < 2.117065) {
                    if (input[9] < -0.1100148) {
                        var65 = 0.2063863;
                    } else {
                        var65 = -0.08930802;
                    }
                } else {
                    if (input[6] < -0.395417) {
                        var65 = -0.13803989;
                    } else {
                        var65 = 0.016442768;
                    }
                }
            }
        }
    }
    var var66;
    if (input[17] < 1.855228) {
        if (input[4] < 0.1441492) {
            if (input[9] < 0.1936356) {
                if (input[13] < 0.1527962) {
                    var66 = -0.04049701;
                } else {
                    var66 = -0.22499761;
                }
            } else {
                var66 = 0.04823472;
            }
        } else {
            if (input[14] < 1.991019) {
                if (input[12] < 0.2573747) {
                    var66 = 0.19519788;
                } else {
                    var66 = -0.040044963;
                }
            } else {
                var66 = -0.10988071;
            }
        }
    } else {
        if (input[15] < 0.2270994) {
            if (input[15] < 0.2233113) {
                if (input[14] < 2.088098) {
                    var66 = 0.20768145;
                } else {
                    if (input[12] < 0.2003175) {
                        var66 = -0.008132485;
                    } else {
                        var66 = 0.13533291;
                    }
                }
            } else {
                if (input[12] < 0.2183221) {
                    var66 = 0.07635024;
                } else {
                    var66 = -0.2067729;
                }
            }
        } else {
            var66 = 0.19576158;
        }
    }
    var var67;
    if (input[8] < 2.246323) {
        if (input[1] < 0.1950531) {
            if (input[7] < 0.02029954) {
                if (input[0] < -0.2389009) {
                    if (input[15] < -0.02433417) {
                        var67 = -0.18337405;
                    } else {
                        var67 = 0.027533235;
                    }
                } else {
                    if (input[8] < 2.005006) {
                        var67 = 0.018829172;
                    } else {
                        var67 = -0.2352062;
                    }
                }
            } else {
                if (input[6] < -0.2032473) {
                    var67 = 0.19523627;
                } else {
                    var67 = -0.01294469;
                }
            }
        } else {
            if (input[10] < 0.2064679) {
                var67 = 0.2426671;
            } else {
                if (input[15] < -0.0508147) {
                    if (input[13] < 0.2788654) {
                        var67 = 0.18501501;
                    } else {
                        var67 = 0.011791401;
                    }
                } else {
                    if (input[11] < 2.011718) {
                        var67 = 0.1566102;
                    } else {
                        var67 = -0.0138819255;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.395417) {
            if (input[10] < -0.07042819) {
                var67 = -0.16995448;
            } else {
                var67 = 0.063284904;
            }
        } else {
            if (input[7] < -0.183916) {
                var67 = -0.01909217;
            } else {
                var67 = 0.22663005;
            }
        }
    }
    var var68;
    if (input[6] < -0.4827429) {
        if (input[13] < 0.2772369) {
            var68 = 0.10652287;
        } else {
            var68 = -0.21795906;
        }
    } else {
        if (input[0] < -0.4473344) {
            if (input[9] < -0.1165959) {
                var68 = 0.18876867;
            } else {
                var68 = -0.029390793;
            }
        } else {
            if (input[0] < -0.3791448) {
                if (input[15] < 0.00707935) {
                    if (input[6] < -0.4431067) {
                        var68 = 0.033283737;
                    } else {
                        var68 = -0.20989864;
                    }
                } else {
                    if (input[10] < -0.06914628) {
                        var68 = -0.042300977;
                    } else {
                        var68 = 0.17091036;
                    }
                }
            } else {
                if (input[15] < 0.1154518) {
                    if (input[6] < -0.3276612) {
                        var68 = 0.13679184;
                    } else {
                        var68 = -0.02708512;
                    }
                } else {
                    if (input[11] < 2.370959) {
                        var68 = -0.003276822;
                    } else {
                        var68 = -0.14015354;
                    }
                }
            }
        }
    }
    var var69;
    if (input[1] < -0.07457953) {
        if (input[9] < -0.05134487) {
            var69 = 0.1575211;
        } else {
            if (input[7] < -0.362648) {
                var69 = 0.0866788;
            } else {
                if (input[7] < -0.1100063) {
                    var69 = -0.23590948;
                } else {
                    var69 = 0.0039434326;
                }
            }
        }
    } else {
        if (input[11] < 2.500012) {
            if (input[2] < 2.475827) {
                if (input[17] < 2.242278) {
                    if (input[11] < 2.372478) {
                        var69 = 0.0062049762;
                    } else {
                        var69 = -0.16556503;
                    }
                } else {
                    var69 = 0.20303331;
                }
            } else {
                var69 = -0.20357038;
            }
        } else {
            if (input[6] < -0.3863574) {
                var69 = 0.028839432;
            } else {
                var69 = 0.21614406;
            }
        }
    }
    var var70;
    if (input[2] < 2.298463) {
        if (input[13] < -0.09412186) {
            if (input[9] < 0.06810521) {
                if (input[13] < -0.09736709) {
                    var70 = -0.025413113;
                } else {
                    var70 = -0.2757931;
                }
            } else {
                if (input[5] < 2.135884) {
                    var70 = -0.08733037;
                } else {
                    var70 = 0.1904545;
                }
            }
        } else {
            if (input[4] < 0.03004733) {
                if (input[2] < 2.296401) {
                    var70 = 0.23185726;
                } else {
                    var70 = -0.13265231;
                }
            } else {
                if (input[2] < 2.266427) {
                    if (input[6] < -0.2689822) {
                        var70 = 0.016051875;
                    } else {
                        var70 = -0.07786104;
                    }
                } else {
                    var70 = -0.18302634;
                }
            }
        }
    } else {
        if (input[11] < 2.368625) {
            if (input[3] < -0.2657676) {
                var70 = 0.015771355;
            } else {
                var70 = 0.24674185;
            }
        } else {
            if (input[7] < -0.03302953) {
                if (input[15] < 0.1173593) {
                    if (input[12] < 0.1513406) {
                        var70 = -0.023020627;
                    } else {
                        var70 = 0.159961;
                    }
                } else {
                    if (input[17] < 2.133359) {
                        var70 = -0.22255464;
                    } else {
                        var70 = -0.030652571;
                    }
                }
            } else {
                if (input[11] < 2.372478) {
                    var70 = 0.18543206;
                } else {
                    var70 = 0.048910473;
                }
            }
        }
    }
    var var71;
    if (input[16] < 0.1146323) {
        if (input[2] < 1.93258) {
            if (input[12] < 0.06554911) {
                if (input[12] < 0.06362648) {
                    if (input[6] < -0.3025707) {
                        var71 = 0.18070906;
                    } else {
                        var71 = -0.15306136;
                    }
                } else {
                    var71 = -0.26783633;
                }
            } else {
                if (input[9] < 0.007583891) {
                    var71 = 0.18987012;
                } else {
                    var71 = -0.006474912;
                }
            }
        } else {
            if (input[2] < 1.944709) {
                if (input[9] < -0.005005257) {
                    if (input[1] < 0.5785934) {
                        var71 = 0.25131947;
                    } else {
                        var71 = 0.0642716;
                    }
                } else {
                    var71 = -0.07800033;
                }
            } else {
                if (input[2] < 1.949157) {
                    var71 = -0.20992127;
                } else {
                    if (input[8] < 1.714986) {
                        var71 = 0.1675521;
                    } else {
                        var71 = 0.0023281698;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.075164) {
            var71 = -0.17625654;
        } else {
            var71 = 0.023327243;
        }
    }
    var var72;
    if (input[10] < 0.619611) {
        if (input[0] < -0.351336) {
            if (input[10] < 0.5368946) {
                if (input[10] < 0.5285215) {
                    if (input[11] < 2.475558) {
                        var72 = -0.1872876;
                    } else {
                        var72 = 0.031799242;
                    }
                } else {
                    if (input[6] < -0.4406734) {
                        var72 = 0.16732481;
                    } else {
                        var72 = -0.08929087;
                    }
                }
            } else {
                if (input[9] < -0.006181017) {
                    var72 = -0.22941008;
                } else {
                    var72 = 0.015330471;
                }
            }
        } else {
            if (input[9] < 0.06361096) {
                if (input[5] < 1.838176) {
                    if (input[0] < -0.3396283) {
                        var72 = -0.20089702;
                    } else {
                        var72 = 0.049953897;
                    }
                } else {
                    if (input[13] < 0.3413255) {
                        var72 = 0.22603165;
                    } else {
                        var72 = -0.039025888;
                    }
                }
            } else {
                if (input[9] < 0.06730008) {
                    if (input[3] < -0.2605165) {
                        var72 = 0.07026547;
                    } else {
                        var72 = -0.20627435;
                    }
                } else {
                    if (input[11] < 2.372478) {
                        var72 = 0.034406736;
                    } else {
                        var72 = -0.18121035;
                    }
                }
            }
        }
    } else {
        var72 = -0.11116486;
    }
    var var73;
    if (input[16] < 0.1021057) {
        if (input[1] < 0.5545402) {
            if (input[10] < 0.5343719) {
                if (input[0] < -0.4494827) {
                    var73 = 0.14273496;
                } else {
                    if (input[13] < 0.2769953) {
                        var73 = 0.0059301895;
                    } else {
                        var73 = -0.13895383;
                    }
                }
            } else {
                var73 = -0.12911318;
            }
        } else {
            if (input[0] < -0.351336) {
                var73 = -0.03806211;
            } else {
                if (input[6] < -0.2842302) {
                    var73 = 0.19861878;
                } else {
                    var73 = -0.0212963;
                }
            }
        }
    } else {
        if (input[14] < 2.097496) {
            if (input[17] < 2.075164) {
                if (input[3] < -0.410004) {
                    if (input[12] < 0.06150161) {
                        var73 = 0.029250769;
                    } else {
                        var73 = -0.20591415;
                    }
                } else {
                    if (input[2] < 1.93258) {
                        var73 = -0.02688313;
                    } else {
                        var73 = 0.12663308;
                    }
                }
            } else {
                var73 = 0.14665094;
            }
        } else {
            if (input[9] < -0.01277679) {
                var73 = 0.06482345;
            } else {
                if (input[2] < 1.951235) {
                    var73 = -0.22027443;
                } else {
                    var73 = -0.006118534;
                }
            }
        }
    }
    var var74;
    if (input[17] < 1.855228) {
        if (input[11] < 2.102682) {
            if (input[10] < 0.3741347) {
                if (input[16] < -0.04041607) {
                    var74 = -0.02797163;
                } else {
                    var74 = -0.1826564;
                }
            } else {
                if (input[11] < 2.101508) {
                    var74 = 0.18977511;
                } else {
                    var74 = 0.010943277;
                }
            }
        } else {
            var74 = -0.18051782;
        }
    } else {
        if (input[15] < 0.2270994) {
            if (input[15] < 0.2233113) {
                if (input[12] < 0.2044219) {
                    if (input[9] < 0.1241493) {
                        var74 = 0.003973695;
                    } else {
                        var74 = -0.13080181;
                    }
                } else {
                    var74 = 0.18210433;
                }
            } else {
                if (input[12] < 0.2183221) {
                    var74 = 0.059988238;
                } else {
                    var74 = -0.19162697;
                }
            }
        } else {
            var74 = 0.18051422;
        }
    }
    var var75;
    if (input[6] < -0.4827429) {
        if (input[13] < 0.2772369) {
            var75 = 0.08406507;
        } else {
            var75 = -0.18747415;
        }
    } else {
        if (input[0] < -0.4494827) {
            var75 = 0.12210103;
        } else {
            if (input[0] < -0.3778352) {
                if (input[1] < -0.0773728) {
                    var75 = 0.0973665;
                } else {
                    if (input[2] < 2.084692) {
                        var75 = 0.09052643;
                    } else {
                        var75 = -0.12889832;
                    }
                }
            } else {
                if (input[15] < 0.1126361) {
                    if (input[10] < 0.2041864) {
                        var75 = -0.015332978;
                    } else {
                        var75 = 0.22795422;
                    }
                } else {
                    if (input[11] < 2.028396) {
                        var75 = -0.05539875;
                    } else {
                        var75 = 0.014571032;
                    }
                }
            }
        }
    }
    var var76;
    if (input[14] < 2.398465) {
        if (input[4] < -0.2691382) {
            if (input[9] < -0.04498434) {
                var76 = -0.18895589;
            } else {
                var76 = 0.012687412;
            }
        } else {
            if (input[17] < 2.254382) {
                if (input[2] < 1.915972) {
                    var76 = 0.14754206;
                } else {
                    if (input[10] < 0.619611) {
                        var76 = -0.0037958988;
                    } else {
                        var76 = -0.1378208;
                    }
                }
            } else {
                var76 = 0.1487858;
            }
        }
    } else {
        if (input[2] < 2.479406) {
            if (input[4] < -0.2901087) {
                if (input[17] < 2.266991) {
                    var76 = 0.20851338;
                } else {
                    var76 = 0.051783476;
                }
            } else {
                var76 = 0.015564997;
            }
        } else {
            var76 = -0.10392526;
        }
    }
    var var77;
    if (input[17] < 2.259752) {
        if (input[16] < 0.1146323) {
            if (input[7] < -0.1941406) {
                if (input[9] < 0.06730008) {
                    if (input[10] < -0.07351716) {
                        var77 = 0.09772715;
                    } else {
                        var77 = -0.16310357;
                    }
                } else {
                    if (input[15] < 0.1264339) {
                        var77 = -0.018737836;
                    } else {
                        var77 = 0.14333285;
                    }
                }
            } else {
                if (input[4] < -0.01436776) {
                    if (input[5] < 2.415654) {
                        var77 = 0.12126128;
                    } else {
                        var77 = -0.092239454;
                    }
                } else {
                    if (input[8] < 2.140098) {
                        var77 = 0.010022504;
                    } else {
                        var77 = -0.13370587;
                    }
                }
            }
        } else {
            var77 = -0.12410258;
        }
    } else {
        if (input[0] < -0.3797734) {
            var77 = -0.075702436;
        } else {
            if (input[5] < 2.415654) {
                if (input[15] < 0.00707935) {
                    var77 = 0.20359948;
                } else {
                    var77 = -0.0031627654;
                }
            } else {
                var77 = -0.025767831;
            }
        }
    }
    var var78;
    if (input[17] < 1.855228) {
        if (input[4] < 0.1441492) {
            if (input[11] < 2.100791) {
                var78 = 0.028703569;
            } else {
                if (input[2] < 2.136343) {
                    var78 = -0.05436419;
                } else {
                    var78 = -0.1949028;
                }
            }
        } else {
            if (input[11] < 2.102013) {
                var78 = 0.07239114;
            } else {
                var78 = -0.031209594;
            }
        }
    } else {
        if (input[15] < 0.2270994) {
            if (input[15] < 0.2233113) {
                if (input[14] < 2.088098) {
                    var78 = 0.16960509;
                } else {
                    if (input[12] < 0.2003175) {
                        var78 = -0.006635618;
                    } else {
                        var78 = 0.10529782;
                    }
                }
            } else {
                if (input[0] < -0.2079343) {
                    var78 = 0.053498972;
                } else {
                    var78 = -0.16511172;
                }
            }
        } else {
            var78 = 0.16519223;
        }
    }
    var var79;
    if (input[14] < 2.421957) {
        if (input[13] < -0.09412186) {
            if (input[6] < -0.3540058) {
                if (input[11] < 2.500012) {
                    if (input[15] < -0.003034823) {
                        var79 = -0.13092062;
                    } else {
                        var79 = 0.017356893;
                    }
                } else {
                    if (input[9] < -0.04321694) {
                        var79 = -0.000045060704;
                    } else {
                        var79 = 0.19587551;
                    }
                }
            } else {
                if (input[9] < 0.06810521) {
                    if (input[15] < 0.1264339) {
                        var79 = -0.19110449;
                    } else {
                        var79 = -0.031799987;
                    }
                } else {
                    if (input[2] < 2.265746) {
                        var79 = -0.08420736;
                    } else {
                        var79 = 0.19502981;
                    }
                }
            }
        } else {
            if (input[13] < -0.04455422) {
                if (input[5] < 2.203604) {
                    if (input[8] < 1.997458) {
                        var79 = 0.18840128;
                    } else {
                        var79 = -0.1298013;
                    }
                } else {
                    var79 = 0.19634196;
                }
            } else {
                if (input[11] < 2.370959) {
                    if (input[10] < 0.207403) {
                        var79 = 0.1859447;
                    } else {
                        var79 = -0.007851722;
                    }
                } else {
                    if (input[7] < -0.03302953) {
                        var79 = -0.18563335;
                    } else {
                        var79 = 0.090713695;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.3408213) {
            var79 = -0.032891102;
        } else {
            var79 = 0.16824847;
        }
    }
    var var80;
    if (input[5] < 1.76939) {
        if (input[3] < -0.4333555) {
            var80 = 0.01813764;
        } else {
            var80 = -0.14499122;
        }
    } else {
        if (input[2] < 1.944709) {
            if (input[13] < 0.3260737) {
                if (input[15] < 0.1181303) {
                    var80 = 0.20188679;
                } else {
                    var80 = 0.026315665;
                }
            } else {
                if (input[12] < 0.06554911) {
                    if (input[12] < 0.06362648) {
                        var80 = 0.043700278;
                    } else {
                        var80 = -0.1827122;
                    }
                } else {
                    if (input[11] < 2.023398) {
                        var80 = 0.19136527;
                    } else {
                        var80 = -0.041984346;
                    }
                }
            }
        } else {
            if (input[2] < 1.949157) {
                var80 = -0.19149056;
            } else {
                if (input[15] < 0.1154518) {
                    if (input[15] < 0.008107064) {
                        var80 = -0.0068211723;
                    } else {
                        var80 = 0.13709198;
                    }
                } else {
                    if (input[6] < -0.337051) {
                        var80 = -0.14674523;
                    } else {
                        var80 = 0.009469666;
                    }
                }
            }
        }
    }
    var var81;
    if (input[4] < 0.3950242) {
        if (input[4] < 0.3699078) {
            if (input[16] < 0.1130656) {
                if (input[6] < -0.4464139) {
                    if (input[2] < 2.118738) {
                        var81 = 0.11006472;
                    } else {
                        var81 = -0.10547177;
                    }
                } else {
                    if (input[2] < 2.298463) {
                        var81 = -0.02236107;
                    } else {
                        var81 = 0.027372096;
                    }
                }
            } else {
                var81 = -0.10682951;
            }
        } else {
            if (input[0] < -0.3435166) {
                var81 = -0.025825115;
            } else {
                var81 = 0.15729624;
            }
        }
    } else {
        if (input[1] < 0.5648397) {
            if (input[10] < 0.6181909) {
                var81 = 0.15930876;
            } else {
                var81 = -0.024209192;
            }
        } else {
            if (input[7] < 0.5492393) {
                if (input[11] < 2.025365) {
                    var81 = -0.09835439;
                } else {
                    var81 = -0.002758806;
                }
            } else {
                var81 = -0.19126914;
            }
        }
    }
    var var82;
    if (input[1] < -0.07457953) {
        if (input[12] < 0.02731447) {
            if (input[9] < -0.04783939) {
                var82 = 0.1149751;
            } else {
                var82 = -0.06697965;
            }
        } else {
            if (input[16] < -0.4274294) {
                var82 = 0.003032548;
            } else {
                var82 = -0.18220334;
            }
        }
    } else {
        if (input[11] < 2.500012) {
            if (input[2] < 2.38135) {
                if (input[2] < 2.376252) {
                    if (input[5] < 2.311431) {
                        var82 = 0.010543716;
                    } else {
                        var82 = -0.11539685;
                    }
                } else {
                    if (input[11] < 2.370959) {
                        var82 = 0.19652532;
                    } else {
                        var82 = -0.0017415002;
                    }
                }
            } else {
                if (input[7] < -0.1318034) {
                    if (input[8] < 2.221028) {
                        var82 = -0.20970756;
                    } else {
                        var82 = -0.036347296;
                    }
                } else {
                    if (input[9] < 0.1228878) {
                        var82 = 0.13466907;
                    } else {
                        var82 = -0.10693128;
                    }
                }
            }
        } else {
            if (input[9] < -0.04645095) {
                var82 = 0.05602631;
            } else {
                var82 = 0.18939804;
            }
        }
    }
    var var83;
    if (input[9] < 0.1936356) {
        if (input[17] < 1.85164) {
            if (input[4] < 0.1346993) {
                var83 = -0.14500484;
            } else {
                var83 = -0.019734714;
            }
        } else {
            if (input[14] < 2.096116) {
                if (input[12] < 0.06150161) {
                    var83 = 0.17549852;
                } else {
                    if (input[12] < 0.06554911) {
                        var83 = -0.09163527;
                    } else {
                        var83 = 0.059270848;
                    }
                }
            } else {
                if (input[11] < 2.028396) {
                    if (input[15] < 0.1137185) {
                        var83 = 0.0353149;
                    } else {
                        var83 = -0.20600663;
                    }
                } else {
                    if (input[12] < 0.2003175) {
                        var83 = -0.0039001515;
                    } else {
                        var83 = 0.1151477;
                    }
                }
            }
        }
    } else {
        var83 = 0.09846657;
    }
    var var84;
    if (input[14] < 1.987457) {
        if (input[11] < 2.101016) {
            var84 = 0.08201723;
        } else {
            var84 = -0.16969503;
        }
    } else {
        if (input[9] < 0.1932854) {
            if (input[9] < 0.1915394) {
                if (input[15] < 0.2270994) {
                    if (input[12] < 0.2183221) {
                        var84 = 0.006072578;
                    } else {
                        var84 = -0.09654266;
                    }
                } else {
                    var84 = 0.15547432;
                }
            } else {
                var84 = -0.15399733;
            }
        } else {
            var84 = 0.14434548;
        }
    }
    var var85;
    if (input[1] < -0.07457953) {
        if (input[7] < -0.3377649) {
            var85 = 0.06619998;
        } else {
            if (input[10] < -0.0713496) {
                if (input[0] < -0.3739981) {
                    var85 = -0.20361324;
                } else {
                    var85 = -0.0501592;
                }
            } else {
                var85 = 0.0739987;
            }
        }
    } else {
        if (input[17] < 2.246213) {
            if (input[16] < -0.2296644) {
                if (input[12] < 0.1007646) {
                    if (input[12] < 0.09940647) {
                        var85 = -0.028131692;
                    } else {
                        var85 = -0.18206571;
                    }
                } else {
                    var85 = -0.0018330883;
                }
            } else {
                if (input[8] < 2.212055) {
                    if (input[10] < 0.207403) {
                        var85 = 0.07759251;
                    } else {
                        var85 = -0.008803152;
                    }
                } else {
                    if (input[17] < 2.137822) {
                        var85 = -0.16936353;
                    } else {
                        var85 = 0.041152515;
                    }
                }
            }
        } else {
            if (input[2] < 2.479406) {
                var85 = 0.20580453;
            } else {
                var85 = -0.062857516;
            }
        }
    }
    var var86;
    if (input[13] < -0.09412186) {
        if (input[13] < -0.09580181) {
            if (input[15] < -0.02934759) {
                var86 = -0.14333904;
            } else {
                if (input[5] < 2.210082) {
                    if (input[6] < -0.2328677) {
                        var86 = -0.178532;
                    } else {
                        var86 = 0.055486515;
                    }
                } else {
                    if (input[9] < -0.04645095) {
                        var86 = -0.035823435;
                    } else {
                        var86 = 0.16343957;
                    }
                }
            }
        } else {
            if (input[0] < -0.2389009) {
                var86 = -0.041958198;
            } else {
                var86 = -0.1666792;
            }
        }
    } else {
        if (input[17] < 2.210215) {
            if (input[11] < 2.372478) {
                if (input[4] < -0.01436776) {
                    if (input[7] < -0.1941406) {
                        var86 = -0.013020794;
                    } else {
                        var86 = 0.17951523;
                    }
                } else {
                    if (input[14] < 2.097496) {
                        var86 = 0.025246575;
                    } else {
                        var86 = -0.038186334;
                    }
                }
            } else {
                var86 = -0.15521738;
            }
        } else {
            var86 = 0.15857902;
        }
    }
    var var87;
    if (input[12] < -0.06765227) {
        if (input[10] < 0.5324398) {
            var87 = 0.14308941;
        } else {
            var87 = -0.028915787;
        }
    } else {
        if (input[12] < -0.06536341) {
            if (input[10] < 0.5285215) {
                var87 = -0.15452906;
            } else {
                var87 = -0.013913601;
            }
        } else {
            if (input[9] < -0.1100148) {
                if (input[10] < 0.530708) {
                    var87 = 0.17692044;
                } else {
                    var87 = -0.01977392;
                }
            } else {
                if (input[9] < -0.07188392) {
                    var87 = -0.16345416;
                } else {
                    if (input[9] < -0.05198072) {
                        var87 = 0.12435714;
                    } else {
                        var87 = -0.0058042556;
                    }
                }
            }
        }
    }
    var var88;
    if (input[13] < -0.09412186) {
        if (input[9] < 0.06810521) {
            if (input[3] < -0.2600113) {
                if (input[12] < 0.02942221) {
                    if (input[4] < -0.2901087) {
                        var88 = 0.020556549;
                    } else {
                        var88 = -0.11665288;
                    }
                } else {
                    if (input[10] < 0.09414405) {
                        var88 = 0.110476114;
                    } else {
                        var88 = -0.037299212;
                    }
                }
            } else {
                var88 = -0.19712794;
            }
        } else {
            if (input[2] < 2.283382) {
                var88 = -0.044195846;
            } else {
                var88 = 0.16749233;
            }
        }
    } else {
        if (input[17] < 2.179507) {
            if (input[11] < 2.370959) {
                if (input[10] < 0.207403) {
                    if (input[6] < -0.2654123) {
                        var88 = -0.028770596;
                    } else {
                        var88 = 0.17151229;
                    }
                } else {
                    if (input[11] < 2.368625) {
                        var88 = 0.007907579;
                    } else {
                        var88 = -0.18348286;
                    }
                }
            } else {
                if (input[10] < 0.2051374) {
                    var88 = 0.012763784;
                } else {
                    var88 = -0.17289191;
                }
            }
        } else {
            var88 = 0.12867169;
        }
    }
    var var89;
    if (input[16] < 0.1146323) {
        if (input[12] < -0.06765227) {
            var89 = 0.085323334;
        } else {
            if (input[12] < -0.06456681) {
                if (input[13] < 0.27676) {
                    var89 = -0.009072612;
                } else {
                    var89 = -0.14598499;
                }
            } else {
                if (input[0] < -0.4372823) {
                    var89 = 0.11222851;
                } else {
                    if (input[0] < -0.3797734) {
                        var89 = -0.10426352;
                    } else {
                        var89 = 0.0068564094;
                    }
                }
            }
        }
    } else {
        var89 = -0.08588454;
    }
    var var90;
    if (input[10] < 0.619611) {
        if (input[14] < 2.024647) {
            if (input[16] < -0.1794351) {
                var90 = -0.19022812;
            } else {
                if (input[11] < 2.102682) {
                    if (input[8] < 1.871221) {
                        var90 = -0.014675401;
                    } else {
                        var90 = 0.16688344;
                    }
                } else {
                    var90 = -0.14149806;
                }
            }
        } else {
            if (input[15] < 0.1724227) {
                if (input[9] < 0.1232314) {
                    if (input[9] < 0.1223872) {
                        var90 = 0.0006193765;
                    } else {
                        var90 = 0.12265155;
                    }
                } else {
                    if (input[10] < 0.207403) {
                        var90 = 0.058131997;
                    } else {
                        var90 = -0.14772725;
                    }
                }
            } else {
                var90 = 0.15714377;
            }
        }
    } else {
        var90 = -0.08413074;
    }
    var var91;
    if (input[14] < 2.421957) {
        if (input[7] < -0.1941406) {
            if (input[9] < 0.06730008) {
                if (input[10] < -0.07351716) {
                    var91 = 0.06899287;
                } else {
                    if (input[12] < 0.01555607) {
                        var91 = -0.0151878875;
                    } else {
                        var91 = -0.18229806;
                    }
                }
            } else {
                var91 = 0.08289834;
            }
        } else {
            if (input[4] < -0.01436776) {
                if (input[5] < 2.415654) {
                    if (input[5] < 2.180686) {
                        var91 = -0.03679232;
                    } else {
                        var91 = 0.12749384;
                    }
                } else {
                    var91 = -0.089345485;
                }
            } else {
                if (input[16] < -0.180567) {
                    if (input[17] < 2.131908) {
                        var91 = -0.15853077;
                    } else {
                        var91 = 0.10281096;
                    }
                } else {
                    if (input[1] < 0.2912408) {
                        var91 = 0.16980636;
                    } else {
                        var91 = -0.004552031;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.477053) {
            var91 = 0.1300707;
        } else {
            var91 = -0.05128546;
        }
    }
    var var92;
    if (input[2] < 2.477053) {
        if (input[14] < 2.392356) {
            if (input[16] < -0.2318878) {
                if (input[6] < -0.3459329) {
                    var92 = -0.01280992;
                } else {
                    var92 = -0.13675514;
                }
            } else {
                if (input[8] < 2.212055) {
                    if (input[2] < 2.298463) {
                        var92 = -0.0023241746;
                    } else {
                        var92 = 0.07667173;
                    }
                } else {
                    if (input[17] < 2.13632) {
                        var92 = -0.15050596;
                    } else {
                        var92 = 0.037142053;
                    }
                }
            }
        } else {
            if (input[1] < -0.08117566) {
                var92 = -0.032540657;
            } else {
                if (input[1] < -0.07457953) {
                    var92 = 0.04922403;
                } else {
                    var92 = 0.17469396;
                }
            }
        }
    } else {
        if (input[0] < -0.3769169) {
            var92 = -0.13424751;
        } else {
            var92 = 0.05507631;
        }
    }
    var var93;
    if (input[0] < -0.1607478) {
        if (input[0] < -0.167685) {
            if (input[15] < 0.2270994) {
                if (input[12] < 0.2183221) {
                    if (input[12] < 0.2003175) {
                        var93 = -0.0059556905;
                    } else {
                        var93 = 0.110244125;
                    }
                } else {
                    var93 = -0.1030273;
                }
            } else {
                var93 = 0.1051056;
            }
        } else {
            if (input[2] < 2.136343) {
                var93 = 0.027630826;
            } else {
                var93 = -0.17029904;
            }
        }
    } else {
        var93 = 0.079360425;
    }
    var var94;
    if (input[9] < -0.1165959) {
        if (input[7] < 0.2429949) {
            var94 = 0.16674922;
        } else {
            if (input[1] < 0.5403163) {
                var94 = -0.1411794;
            } else {
                var94 = 0.09401189;
            }
        }
    } else {
        if (input[12] < -0.06536341) {
            var94 = -0.16516183;
        } else {
            if (input[9] < -0.1100148) {
                if (input[10] < 0.530708) {
                    var94 = 0.16425449;
                } else {
                    var94 = -0.021454733;
                }
            } else {
                if (input[15] < -0.02934759) {
                    if (input[3] < -0.447038) {
                        var94 = -0.16162337;
                    } else {
                        var94 = -0.012106708;
                    }
                } else {
                    if (input[0] < -0.2389009) {
                        var94 = 0.021743366;
                    } else {
                        var94 = -0.019494534;
                    }
                }
            }
        }
    }
    var var95;
    if (input[2] < 1.93258) {
        if (input[12] < 0.06554911) {
            if (input[11] < 2.02163) {
                if (input[6] < -0.2930644) {
                    var95 = -0.23740928;
                } else {
                    var95 = -0.0100820195;
                }
            } else {
                if (input[6] < -0.314702) {
                    var95 = 0.198746;
                } else {
                    var95 = -0.1589613;
                }
            }
        } else {
            var95 = 0.11774903;
        }
    } else {
        if (input[2] < 1.944709) {
            if (input[16] < 0.1068961) {
                var95 = 0.19846185;
            } else {
                var95 = -0.030087529;
            }
        } else {
            if (input[10] < 0.5328889) {
                if (input[0] < -0.4372823) {
                    if (input[10] < 0.5289078) {
                        var95 = -0.030051759;
                    } else {
                        var95 = 0.13407893;
                    }
                } else {
                    if (input[10] < 0.5302477) {
                        var95 = 0.005447485;
                    } else {
                        var95 = -0.1535839;
                    }
                }
            } else {
                if (input[8] < 1.667378) {
                    var95 = 0.063755676;
                } else {
                    if (input[9] < 0.01117065) {
                        var95 = -0.1765207;
                    } else {
                        var95 = -0.0048127547;
                    }
                }
            }
        }
    }
    var var96;
    if (input[13] < -0.09412186) {
        if (input[9] < 0.06810521) {
            if (input[0] < -0.2389009) {
                if (input[7] < -0.1058404) {
                    if (input[2] < 2.47136) {
                        var96 = -0.10677876;
                    } else {
                        var96 = 0.010624279;
                    }
                } else {
                    var96 = 0.06973752;
                }
            } else {
                var96 = -0.19752777;
            }
        } else {
            var96 = 0.0754194;
        }
    } else {
        if (input[4] < -0.03887219) {
            if (input[2] < 2.296401) {
                var96 = 0.16843688;
            } else {
                if (input[12] < 0.1513406) {
                    var96 = -0.07374993;
                } else {
                    var96 = 0.1126542;
                }
            }
        } else {
            if (input[15] < -0.04957492) {
                if (input[4] < 0.3134331) {
                    var96 = 0.13465421;
                } else {
                    var96 = 0.010642462;
                }
            } else {
                if (input[14] < 2.098824) {
                    if (input[11] < 2.102013) {
                        var96 = 0.0369815;
                    } else {
                        var96 = -0.10813264;
                    }
                } else {
                    if (input[17] < 2.129321) {
                        var96 = -0.13116078;
                    } else {
                        var96 = 0.03857009;
                    }
                }
            }
        }
    }
    var var97;
    if (input[2] < 1.93258) {
        if (input[11] < 2.02163) {
            if (input[0] < -0.3396283) {
                var97 = -0.20502535;
            } else {
                var97 = 0.052022435;
            }
        } else {
            if (input[6] < -0.314702) {
                var97 = 0.18823294;
            } else {
                var97 = -0.113021255;
            }
        }
    } else {
        if (input[2] < 1.944709) {
            if (input[15] < 0.114167) {
                var97 = -0.019894043;
            } else {
                var97 = 0.1866711;
            }
        } else {
            if (input[13] < 0.2769953) {
                if (input[0] < -0.4372823) {
                    if (input[11] < 2.12655) {
                        var97 = 0.16995241;
                    } else {
                        var97 = 0.04440258;
                    }
                } else {
                    if (input[6] < -0.3911558) {
                        var97 = -0.105333544;
                    } else {
                        var97 = 0.011641087;
                    }
                }
            } else {
                if (input[11] < 2.026481) {
                    var97 = 0.06536268;
                } else {
                    if (input[9] < -0.1181004) {
                        var97 = 0.06192918;
                    } else {
                        var97 = -0.15292038;
                    }
                }
            }
        }
    }
    var var98;
    if (input[11] < 2.028396) {
        if (input[10] < 0.2916531) {
            var98 = -0.17461649;
        } else {
            if (input[14] < 2.096116) {
                if (input[10] < 0.6159513) {
                    if (input[11] < 2.02163) {
                        var98 = 0.18828899;
                    } else {
                        var98 = 0.019791154;
                    }
                } else {
                    if (input[15] < 0.1162083) {
                        var98 = 0.108222;
                    } else {
                        var98 = -0.07010909;
                    }
                }
            } else {
                if (input[17] < 2.074407) {
                    var98 = -0.17295249;
                } else {
                    var98 = -0.02050223;
                }
            }
        }
    } else {
        if (input[11] < 2.101174) {
            if (input[13] < 0.3353739) {
                if (input[2] < 2.136343) {
                    var98 = 0.19215892;
                } else {
                    var98 = -0.005795963;
                }
            } else {
                var98 = -0.13763063;
            }
        } else {
            if (input[9] < 0.1915394) {
                if (input[12] < 0.2065973) {
                    if (input[0] < -0.2389009) {
                        var98 = 0.020036982;
                    } else {
                        var98 = -0.037538607;
                    }
                } else {
                    var98 = 0.16616012;
                }
            } else {
                var98 = -0.1285755;
            }
        }
    }
    var var99;
    if (input[1] < 0.0655039) {
        if (input[11] < 2.475558) {
            if (input[7] < 0.006536629) {
                var99 = -0.1554683;
            } else {
                var99 = 0.014630276;
            }
        } else {
            if (input[2] < 2.477053) {
                if (input[1] < -0.07457953) {
                    if (input[3] < -0.4557459) {
                        var99 = -0.09137718;
                    } else {
                        var99 = 0.060825642;
                    }
                } else {
                    var99 = 0.15796207;
                }
            } else {
                if (input[0] < -0.3791448) {
                    var99 = -0.124795124;
                } else {
                    var99 = 0.007688539;
                }
            }
        }
    } else {
        if (input[2] < 2.298463) {
            if (input[13] < -0.09412186) {
                if (input[13] < -0.09736709) {
                    var99 = 0.05703242;
                } else {
                    var99 = -0.14476286;
                }
            } else {
                if (input[13] < 0.02703382) {
                    if (input[2] < 2.296401) {
                        var99 = 0.19097537;
                    } else {
                        var99 = -0.05743911;
                    }
                } else {
                    if (input[10] < 0.2916531) {
                        var99 = -0.12659863;
                    } else {
                        var99 = 0.005773425;
                    }
                }
            }
        } else {
            if (input[0] < -0.1999929) {
                var99 = 0.20429337;
            } else {
                if (input[2] < 2.38135) {
                    if (input[1] < 0.1950531) {
                        var99 = -0.07744551;
                    } else {
                        var99 = 0.11766841;
                    }
                } else {
                    var99 = -0.10204708;
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
