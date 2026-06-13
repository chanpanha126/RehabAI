// XGBoost Model for Gesture 0: ElbowFlexionLeft
// Accuracy: 99.81%
// Precision: 99.81%
// Recall: 99.81%
// F1 Score: 99.81%
// Trained on 16068 samples

export function evaluateGesture0(features) {
function score(input) {
    var var0;
    if (input[6] < -0.06118683) {
        if (input[2] < 1.975285) {
            if (input[1] < 0.4483674) {
                if (input[7] < -0.24831) {
                    if (input[13] < -0.1226937) {
                        var0 = 0.120000005;
                    } else {
                        var0 = 0.5466667;
                    }
                } else {
                    if (input[8] < 1.931738) {
                        var0 = -0.59262514;
                    } else {
                        var0 = 0.48571432;
                    }
                }
            } else {
                if (input[5] < 1.86122) {
                    var0 = -0.54418606;
                } else {
                    if (input[15] < 0.4786344) {
                        var0 = 0.5053691;
                    } else {
                        var0 = -0.52500004;
                    }
                }
            }
        } else {
            if (input[7] < 0.2266188) {
                if (input[15] < 0.4354637) {
                    if (input[14] < 1.920157) {
                        var0 = -0.47368425;
                    } else {
                        var0 = 0.57424337;
                    }
                } else {
                    if (input[3] < -0.08248033) {
                        var0 = -0.51428574;
                    } else {
                        var0 = 0.3;
                    }
                }
            } else {
                var0 = -0.5882353;
            }
        }
    } else {
        if (input[9] < 0.3105538) {
            if (input[12] < 0.3727005) {
                if (input[9] < 0.100744) {
                    if (input[15] < 0.001304243) {
                        var0 = 0.0;
                    } else {
                        var0 = -0.3;
                    }
                } else {
                    var0 = -0.59725875;
                }
            } else {
                if (input[2] < 2.201589) {
                    var0 = -0.41538465;
                } else {
                    var0 = 0.40000004;
                }
            }
        } else {
            if (input[4] < -0.2601832) {
                var0 = 0.0;
            } else {
                var0 = 0.5965318;
            }
        }
    }
    var var1;
    if (input[6] < -0.05810267) {
        if (input[2] < 1.975285) {
            if (input[1] < 0.4483674) {
                if (input[7] < -0.24831) {
                    if (input[13] < -0.1226937) {
                        var1 = 0.098638445;
                    } else {
                        var1 = 0.4286413;
                    }
                } else {
                    if (input[8] < 1.931738) {
                        var1 = -0.45833668;
                    } else {
                        var1 = 0.3878335;
                    }
                }
            } else {
                if (input[8] < 1.745741) {
                    if (input[1] < 0.5103135) {
                        var1 = 0.44601414;
                    } else {
                        var1 = -0.4111254;
                    }
                } else {
                    if (input[12] < 0.2938785) {
                        var1 = 0.4685115;
                    } else {
                        var1 = 0.05326279;
                    }
                }
            }
        } else {
            if (input[7] < 0.2266188) {
                if (input[2] < 2.216422) {
                    if (input[1] < 0.3938462) {
                        var1 = 0.08443184;
                    } else {
                        var1 = 0.44637513;
                    }
                } else {
                    if (input[15] < 0.4354637) {
                        var1 = 0.46706548;
                    } else {
                        var1 = -0.2873793;
                    }
                }
            } else {
                var1 = -0.45725796;
            }
        }
    } else {
        if (input[9] < 0.3105538) {
            if (input[12] < 0.3727005) {
                if (input[11] < 2.137423) {
                    var1 = -0.12741566;
                } else {
                    var1 = -0.46271905;
                }
            } else {
                if (input[2] < 2.201589) {
                    var1 = -0.34020644;
                } else {
                    var1 = 0.32961032;
                }
            }
        } else {
            if (input[4] < -0.2601832) {
                var1 = 0.0;
            } else {
                var1 = 0.4621579;
            }
        }
    }
    var var2;
    if (input[7] < 0.1662924) {
        if (input[2] < 1.975285) {
            if (input[1] < 0.4483674) {
                if (input[7] < -0.2354252) {
                    if (input[5] < 1.6904) {
                        var2 = 0.38814244;
                    } else {
                        var2 = -0.2514553;
                    }
                } else {
                    if (input[8] < 1.931738) {
                        var2 = -0.39768603;
                    } else {
                        var2 = 0.33141392;
                    }
                }
            } else {
                if (input[12] < 0.2305959) {
                    var2 = 0.40902558;
                } else {
                    if (input[1] < 0.5103135) {
                        var2 = 0.38280866;
                    } else {
                        var2 = -0.31670892;
                    }
                }
            }
        } else {
            if (input[6] < -0.03300039) {
                if (input[5] < 2.000952) {
                    if (input[8] < 1.859219) {
                        var2 = -0.66497386;
                    } else {
                        var2 = 0.29649717;
                    }
                } else {
                    if (input[2] < 2.206762) {
                        var2 = 0.29959378;
                    } else {
                        var2 = 0.39979687;
                    }
                }
            } else {
                if (input[9] < 0.3105538) {
                    if (input[12] < 0.3727005) {
                        var2 = -0.39716908;
                    } else {
                        var2 = -0.040023558;
                    }
                } else {
                    if (input[8] < 2.019016) {
                        var2 = -0.032886695;
                    } else {
                        var2 = 0.40115103;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2908909) {
            var2 = 0.39233366;
        } else {
            var2 = -0.4127628;
        }
    }
    var var3;
    if (input[6] < -0.06752288) {
        if (input[2] < 1.975285) {
            if (input[1] < 0.4483674) {
                if (input[7] < -0.220363) {
                    if (input[13] < -0.1226937) {
                        var3 = -0.18182899;
                    } else {
                        var3 = 0.42402065;
                    }
                } else {
                    if (input[8] < 1.931738) {
                        var3 = -0.36831695;
                    } else {
                        var3 = 0.29282513;
                    }
                }
            } else {
                if (input[8] < 1.745741) {
                    if (input[0] < -0.1014286) {
                        var3 = -0.2568588;
                    } else {
                        var3 = 0.37578103;
                    }
                } else {
                    if (input[12] < 0.2743523) {
                        var3 = 0.3656253;
                    } else {
                        var3 = 0.11282687;
                    }
                }
            }
        } else {
            if (input[7] < 0.2266188) {
                if (input[2] < 2.216422) {
                    if (input[1] < 0.3938462) {
                        var3 = -0.015378562;
                    } else {
                        var3 = 0.36435243;
                    }
                } else {
                    if (input[15] < 0.4354637) {
                        var3 = 0.3691241;
                    } else {
                        var3 = -0.31183302;
                    }
                }
            } else {
                var3 = -0.35633996;
            }
        }
    } else {
        if (input[9] < 0.3105538) {
            if (input[15] < 0.3179848) {
                if (input[9] < 0.100744) {
                    if (input[2] < 2.204721) {
                        var3 = -0.06444615;
                    } else {
                        var3 = 0.05877326;
                    }
                } else {
                    if (input[0] < -0.01976058) {
                        var3 = -0.37445295;
                    } else {
                        var3 = -0.22009699;
                    }
                }
            } else {
                if (input[12] < 0.3705599) {
                    var3 = -0.24624419;
                } else {
                    var3 = 0.29053983;
                }
            }
        } else {
            if (input[15] < 0.2901917) {
                var3 = -0.002325739;
            } else {
                var3 = 0.36704448;
            }
        }
    }
    var var4;
    if (input[7] < 0.1662924) {
        if (input[8] < 1.924994) {
            if (input[1] < 0.3963838) {
                if (input[4] < -0.1746255) {
                    if (input[12] < 0.226468) {
                        var4 = 0.41884542;
                    } else {
                        var4 = -0.08018354;
                    }
                } else {
                    if (input[7] < 0.005053417) {
                        var4 = -0.32968542;
                    } else {
                        var4 = 0.27541098;
                    }
                }
            } else {
                if (input[6] < -0.1672333) {
                    if (input[12] < 0.2363087) {
                        var4 = 0.3374858;
                    } else {
                        var4 = -0.17722853;
                    }
                } else {
                    var4 = 0.35464486;
                }
            }
        } else {
            if (input[6] < -0.03744522) {
                if (input[15] < 0.4354637) {
                    if (input[2] < 2.128685) {
                        var4 = 0.21967879;
                    } else {
                        var4 = 0.3438657;
                    }
                } else {
                    if (input[3] < -0.08248033) {
                        var4 = -0.37596387;
                    } else {
                        var4 = 0.2888449;
                    }
                }
            } else {
                if (input[9] < 0.3105538) {
                    if (input[15] < 0.3179848) {
                        var4 = -0.33885998;
                    } else {
                        var4 = 0.007248824;
                    }
                } else {
                    if (input[8] < 2.020743) {
                        var4 = -0.03529441;
                    } else {
                        var4 = 0.3440128;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2908909) {
            var4 = 0.33127403;
        } else {
            var4 = -0.35770112;
        }
    }
    var var5;
    if (input[5] < 2.189435) {
        if (input[6] < -0.09749262) {
            if (input[1] < 0.3963838) {
                if (input[7] < -0.1503583) {
                    if (input[3] < -0.1302391) {
                        var5 = 0.339779;
                    } else {
                        var5 = -0.28884804;
                    }
                } else {
                    if (input[14] < 2.078404) {
                        var5 = -0.14523233;
                    } else {
                        var5 = -1.1505868;
                    }
                }
            } else {
                if (input[2] < 1.942629) {
                    if (input[14] < 1.909514) {
                        var5 = 0.2076378;
                    } else {
                        var5 = -0.24207585;
                    }
                } else {
                    if (input[2] < 2.164963) {
                        var5 = 0.33074346;
                    } else {
                        var5 = -0.26121873;
                    }
                }
            }
        } else {
            if (input[12] < 0.3727005) {
                if (input[2] < 2.137962) {
                    var5 = 0.2128682;
                } else {
                    if (input[0] < -0.01976058) {
                        var5 = -0.34533018;
                    } else {
                        var5 = -0.058112778;
                    }
                }
            } else {
                if (input[2] < 2.201589) {
                    var5 = -0.20943223;
                } else {
                    var5 = 0.28211528;
                }
            }
        }
    } else {
        if (input[6] < -0.04221362) {
            if (input[15] < 0.4354637) {
                if (input[9] < 0.3741764) {
                    if (input[6] < -0.06375383) {
                        var5 = 0.33422506;
                    } else {
                        var5 = 0.19640489;
                    }
                } else {
                    if (input[7] < -0.1995049) {
                        var5 = -0.42640835;
                    } else {
                        var5 = 0.2952496;
                    }
                }
            } else {
                if (input[3] < -0.08248033) {
                    var5 = -0.32827356;
                } else {
                    var5 = 0.25104663;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var5 = -0.33069557;
            } else {
                var5 = 0.32846114;
            }
        }
    }
    var var6;
    if (input[5] < 2.189435) {
        if (input[6] < -0.09749262) {
            if (input[8] < 1.924994) {
                if (input[1] < 0.3978774) {
                    if (input[3] < -0.2520165) {
                        var6 = -0.33819103;
                    } else {
                        var6 = -0.020347383;
                    }
                } else {
                    if (input[6] < -0.1672333) {
                        var6 = 0.03931809;
                    } else {
                        var6 = 0.32340562;
                    }
                }
            } else {
                if (input[11] < 2.106243) {
                    if (input[14] < 1.937283) {
                        var6 = -0.002692995;
                    } else {
                        var6 = 0.3509422;
                    }
                } else {
                    if (input[2] < 2.128685) {
                        var6 = -0.35650682;
                    } else {
                        var6 = 0.2850612;
                    }
                }
            }
        } else {
            if (input[15] < 0.2968352) {
                if (input[11] < 2.135209) {
                    var6 = 0.15486023;
                } else {
                    if (input[9] < 0.3105538) {
                        var6 = -0.3327303;
                    } else {
                        var6 = 0.0447014;
                    }
                }
            } else {
                if (input[2] < 2.204721) {
                    var6 = -0.26153275;
                } else {
                    var6 = 0.35254666;
                }
            }
        }
    } else {
        if (input[6] < -0.04221362) {
            if (input[15] < 0.4354637) {
                if (input[9] < 0.3741764) {
                    if (input[6] < -0.06375383) {
                        var6 = 0.3241637;
                    } else {
                        var6 = 0.16503344;
                    }
                } else {
                    if (input[6] < -0.08105148) {
                        var6 = -0.42082253;
                    } else {
                        var6 = 0.2841886;
                    }
                }
            } else {
                if (input[6] < -0.09749262) {
                    var6 = -0.29182944;
                } else {
                    var6 = 0.17827657;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var6 = -0.31940636;
            } else {
                var6 = 0.31713757;
            }
        }
    }
    var var7;
    if (input[5] < 2.189435) {
        if (input[6] < -0.09749262) {
            if (input[8] < 1.924994) {
                if (input[7] < 0.005053417) {
                    if (input[3] < -0.2462892) {
                        var7 = -0.32800606;
                    } else {
                        var7 = 0.011964492;
                    }
                } else {
                    if (input[2] < 1.923053) {
                        var7 = 0.020934254;
                    } else {
                        var7 = 0.31747597;
                    }
                }
            } else {
                if (input[8] < 2.035454) {
                    if (input[7] < 0.1250412) {
                        var7 = 0.31759036;
                    } else {
                        var7 = -0.23740512;
                    }
                } else {
                    if (input[12] < -0.0073992) {
                        var7 = 0.17628486;
                    } else {
                        var7 = -0.47348765;
                    }
                }
            }
        } else {
            if (input[0] < -0.02075177) {
                if (input[10] < -0.1371851) {
                    var7 = 0.03926626;
                } else {
                    if (input[8] < 1.818561) {
                        var7 = 0.0044897087;
                    } else {
                        var7 = -0.32392564;
                    }
                }
            } else {
                if (input[6] < 0.1516478) {
                    var7 = 0.4093534;
                } else {
                    var7 = -0.22275454;
                }
            }
        }
    } else {
        if (input[6] < -0.04221362) {
            if (input[9] < 0.3786969) {
                if (input[6] < -0.06375383) {
                    if (input[9] < 0.3741764) {
                        var7 = 0.3171863;
                    } else {
                        var7 = -0.07191497;
                    }
                } else {
                    if (input[2] < 2.378714) {
                        var7 = 0.29100686;
                    } else {
                        var7 = -0.4093277;
                    }
                }
            } else {
                if (input[0] < 0.0007408066) {
                    var7 = -0.3553434;
                } else {
                    var7 = 0.25890976;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var7 = -0.3105668;
            } else {
                var7 = 0.30817306;
            }
        }
    }
    var var8;
    if (input[5] < 2.189435) {
        if (input[7] < 0.1250412) {
            if (input[1] < 0.3957707) {
                if (input[0] < -0.3732569) {
                    if (input[17] < 1.891224) {
                        var8 = -0.29817188;
                    } else {
                        var8 = -0.48637778;
                    }
                } else {
                    if (input[4] < 0.178915) {
                        var8 = 0.05713469;
                    } else {
                        var8 = -0.36568773;
                    }
                }
            } else {
                if (input[2] < 1.944554) {
                    if (input[0] < -0.1014286) {
                        var8 = -0.12361703;
                    } else {
                        var8 = 0.32195258;
                    }
                } else {
                    if (input[14] < 2.142834) {
                        var8 = 0.31148234;
                    } else {
                        var8 = 0.19306482;
                    }
                }
            }
        } else {
            var8 = -0.31812313;
        }
    } else {
        if (input[6] < -0.04221362) {
            if (input[9] < 0.3741764) {
                if (input[6] < -0.06375383) {
                    var8 = 0.31195325;
                } else {
                    if (input[2] < 2.378714) {
                        var8 = 0.26788276;
                    } else {
                        var8 = -0.34619978;
                    }
                }
            } else {
                if (input[0] < 0.0007408066) {
                    var8 = -0.41180393;
                } else {
                    var8 = 0.27290934;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var8 = -0.30310875;
            } else {
                var8 = 0.3004762;
            }
        }
    }
    var var9;
    if (input[5] < 2.189435) {
        if (input[6] < -0.09749262) {
            if (input[8] < 1.931738) {
                if (input[7] < 0.0002555195) {
                    if (input[8] < 1.837809) {
                        var9 = 0.04008511;
                    } else {
                        var9 = -0.26356402;
                    }
                } else {
                    if (input[5] < 1.86122) {
                        var9 = -0.3056357;
                    } else {
                        var9 = 0.1667022;
                    }
                }
            } else {
                if (input[1] < 0.3843877) {
                    var9 = 0.33172262;
                } else {
                    if (input[1] < 0.3963838) {
                        var9 = -0.19482571;
                    } else {
                        var9 = 0.2631721;
                    }
                }
            }
        } else {
            if (input[12] < 0.3568171) {
                if (input[9] < 0.3105538) {
                    if (input[8] < 1.818561) {
                        var9 = 0.06964619;
                    } else {
                        var9 = -0.31189057;
                    }
                } else {
                    var9 = 0.08725313;
                }
            } else {
                if (input[2] < 2.204721) {
                    var9 = -0.24377213;
                } else {
                    var9 = 0.34889293;
                }
            }
        }
    } else {
        if (input[6] < -0.04221362) {
            if (input[9] < 0.3741764) {
                if (input[6] < -0.06375383) {
                    var9 = 0.30799633;
                } else {
                    if (input[2] < 2.378714) {
                        var9 = 0.2532818;
                    } else {
                        var9 = -0.30097842;
                    }
                }
            } else {
                if (input[0] < 0.0007408066) {
                    var9 = -0.37554872;
                } else {
                    var9 = 0.25688276;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var9 = -0.29628074;
            } else {
                var9 = 0.2932782;
            }
        }
    }
    var var10;
    if (input[8] < 2.329141) {
        if (input[7] < 0.1250412) {
            if (input[4] < 0.2791482) {
                if (input[2] < 1.975285) {
                    if (input[3] < -0.1676013) {
                        var10 = -0.3079057;
                    } else {
                        var10 = 0.022467546;
                    }
                } else {
                    if (input[6] < -0.03300039) {
                        var10 = 0.13519946;
                    } else {
                        var10 = -0.22003222;
                    }
                }
            } else {
                var10 = 0.30509672;
            }
        } else {
            var10 = -0.30543885;
        }
    } else {
        if (input[10] < 0.148889) {
            var10 = 0.0019979782;
        } else {
            var10 = 0.30241314;
        }
    }
    var var11;
    if (input[5] < 2.189435) {
        if (input[11] < 2.11717) {
            if (input[2] < 1.977961) {
                if (input[7] < 0.07164165) {
                    if (input[3] < -0.1480516) {
                        var11 = -0.23956244;
                    } else {
                        var11 = 0.08030211;
                    }
                } else {
                    if (input[15] < 0.4028045) {
                        var11 = 0.31089687;
                    } else {
                        var11 = -0.09199193;
                    }
                }
            } else {
                if (input[14] < 1.956352) {
                    if (input[9] < -0.07214493) {
                        var11 = -0.5127007;
                    } else {
                        var11 = 0.22853546;
                    }
                } else {
                    if (input[0] < -0.3732569) {
                        var11 = 0.058651414;
                    } else {
                        var11 = 0.323373;
                    }
                }
            }
        } else {
            if (input[0] < -0.09919777) {
                if (input[0] < -0.4044799) {
                    var11 = 0.269811;
                } else {
                    if (input[6] < -0.162075) {
                        var11 = -0.55611473;
                    } else {
                        var11 = -0.19341953;
                    }
                }
            } else {
                if (input[3] < -0.05781984) {
                    if (input[7] < -0.1236022) {
                        var11 = 0.33919948;
                    } else {
                        var11 = -0.13331588;
                    }
                } else {
                    if (input[2] < 2.206762) {
                        var11 = -0.26982585;
                    } else {
                        var11 = 0.092898995;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.05602983) {
            if (input[9] < 0.3741764) {
                if (input[6] < -0.06375383) {
                    var11 = 0.30268362;
                } else {
                    if (input[16] < 0.08181135) {
                        var11 = -0.082030535;
                    } else {
                        var11 = 0.17196956;
                    }
                }
            } else {
                if (input[0] < 0.0007408066) {
                    var11 = -0.3516572;
                } else {
                    var11 = 0.21748097;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var11 = -0.28879902;
            } else {
                var11 = 0.28288138;
            }
        }
    }
    var var12;
    if (input[5] < 2.189435) {
        if (input[7] < 0.1250412) {
            if (input[1] < 0.3957707) {
                if (input[3] < -0.3986849) {
                    if (input[11] < 2.11717) {
                        var12 = -0.18235433;
                    } else {
                        var12 = -0.43296653;
                    }
                } else {
                    if (input[12] < 0.001766866) {
                        var12 = 0.27972808;
                    } else {
                        var12 = -0.053787183;
                    }
                }
            } else {
                if (input[2] < 1.947101) {
                    if (input[0] < -0.1014286) {
                        var12 = -0.07849951;
                    } else {
                        var12 = 0.29535636;
                    }
                } else {
                    if (input[14] < 2.142834) {
                        var12 = 0.29921517;
                    } else {
                        var12 = 0.077514976;
                    }
                }
            }
        } else {
            var12 = -0.2929691;
        }
    } else {
        if (input[6] < -0.06375383) {
            if (input[9] < 0.3741764) {
                var12 = 0.30027837;
            } else {
                if (input[0] < 0.0007408066) {
                    var12 = -0.31444156;
                } else {
                    var12 = 0.17941551;
                }
            }
        } else {
            if (input[0] < -0.1014286) {
                var12 = -0.29278556;
            } else {
                var12 = 0.28043717;
            }
        }
    }
    var var13;
    if (input[11] < 2.254505) {
        if (input[2] < 2.167256) {
            if (input[7] < 0.07164165) {
                if (input[5] < 2.091283) {
                    if (input[2] < 1.970749) {
                        var13 = -0.114660315;
                    } else {
                        var13 = 0.14057605;
                    }
                } else {
                    if (input[16] < -0.007478971) {
                        var13 = -0.114811964;
                    } else {
                        var13 = -0.41523996;
                    }
                }
            } else {
                if (input[15] < 0.4028045) {
                    var13 = 0.29950386;
                } else {
                    var13 = -0.06468078;
                }
            }
        } else {
            if (input[0] < -0.09919777) {
                if (input[6] < -0.238316) {
                    var13 = 0.21527047;
                } else {
                    if (input[7] < -0.1231984) {
                        var13 = -0.56663984;
                    } else {
                        var13 = -0.286107;
                    }
                }
            } else {
                if (input[2] < 2.208315) {
                    if (input[1] < 0.0917062) {
                        var13 = -0.27254584;
                    } else {
                        var13 = 0.2622941;
                    }
                } else {
                    var13 = 0.25091502;
                }
            }
        }
    } else {
        if (input[6] < -0.06375383) {
            if (input[9] < 0.3741764) {
                var13 = 0.29852146;
            } else {
                if (input[0] < 0.0007408066) {
                    var13 = -0.28063846;
                } else {
                    var13 = 0.168263;
                }
            }
        } else {
            if (input[0] < -0.01976058) {
                var13 = -0.28420553;
            } else {
                var13 = 0.30163923;
            }
        }
    }
    var var14;
    if (input[11] < 2.254505) {
        if (input[2] < 2.167256) {
            if (input[7] < 0.0702138) {
                if (input[0] < -0.3732569) {
                    if (input[0] < -0.5904821) {
                        var14 = 0.15768541;
                    } else {
                        var14 = -0.34278443;
                    }
                } else {
                    if (input[13] < 0.307813) {
                        var14 = 0.078655265;
                    } else {
                        var14 = -0.25691307;
                    }
                }
            } else {
                if (input[15] < 0.4354637) {
                    if (input[6] < -0.170787) {
                        var14 = 0.32031554;
                    } else {
                        var14 = -0.03624401;
                    }
                } else {
                    var14 = -0.22185647;
                }
            }
        } else {
            if (input[0] < -0.09919777) {
                if (input[6] < -0.238316) {
                    var14 = 0.20116195;
                } else {
                    var14 = -0.35687083;
                }
            } else {
                if (input[2] < 2.208315) {
                    if (input[1] < 0.0917062) {
                        var14 = -0.23664756;
                    } else {
                        var14 = 0.23308805;
                    }
                } else {
                    var14 = 0.23328936;
                }
            }
        }
    } else {
        if (input[6] < -0.06375383) {
            if (input[9] < 0.3741764) {
                var14 = 0.2960064;
            } else {
                if (input[0] < 0.0007408066) {
                    var14 = -0.25123248;
                } else {
                    var14 = 0.15518506;
                }
            }
        } else {
            if (input[0] < -0.01976058) {
                var14 = -0.2706923;
            } else {
                var14 = 0.29230314;
            }
        }
    }
    var var15;
    if (input[11] < 2.254505) {
        if (input[15] < 0.3204894) {
            if (input[12] < 0.001766866) {
                if (input[11] < 2.113538) {
                    if (input[14] < 1.956352) {
                        var15 = -0.20152839;
                    } else {
                        var15 = 0.26059705;
                    }
                } else {
                    if (input[1] < 0.3988909) {
                        var15 = -0.38984284;
                    } else {
                        var15 = 0.22396387;
                    }
                }
            } else {
                if (input[1] < 0.5711617) {
                    if (input[13] < 0.2469336) {
                        var15 = -0.06181898;
                    } else {
                        var15 = -0.30587813;
                    }
                } else {
                    var15 = 0.24938111;
                }
            }
        } else {
            if (input[1] < 0.5116877) {
                if (input[10] < 0.5555911) {
                    if (input[16] < 0.5629417) {
                        var15 = 0.35457134;
                    } else {
                        var15 = -0.1437706;
                    }
                } else {
                    if (input[10] < 0.5588718) {
                        var15 = 0.0017649056;
                    } else {
                        var15 = -0.2996296;
                    }
                }
            } else {
                if (input[17] < 1.796156) {
                    var15 = -0.28415245;
                } else {
                    var15 = 0.14388737;
                }
            }
        }
    } else {
        if (input[6] < -0.06375383) {
            if (input[15] < 0.4083663) {
                var15 = 0.29325137;
            } else {
                if (input[7] < -0.2249056) {
                    var15 = -0.20050332;
                } else {
                    var15 = 0.0707252;
                }
            }
        } else {
            if (input[0] < -0.01976058) {
                var15 = -0.25429663;
            } else {
                var15 = 0.2798104;
            }
        }
    }
    var var16;
    if (input[8] < 2.329141) {
        if (input[7] < 0.1250412) {
            if (input[1] < 0.3978774) {
                if (input[0] < -0.3732569) {
                    if (input[15] < 0.02301564) {
                        var16 = -0.32751954;
                    } else {
                        var16 = -0.04876012;
                    }
                } else {
                    if (input[0] < -0.1651388) {
                        var16 = 0.11847696;
                    } else {
                        var16 = -0.055020493;
                    }
                }
            } else {
                if (input[2] < 1.944554) {
                    if (input[3] < -0.1480516) {
                        var16 = -0.038454406;
                    } else {
                        var16 = 0.27487284;
                    }
                } else {
                    if (input[17] < 2.079193) {
                        var16 = 0.28240567;
                    } else {
                        var16 = 0.07435006;
                    }
                }
            }
        } else {
            var16 = -0.26308143;
        }
    } else {
        if (input[10] < 0.1581953) {
            var16 = 0.07700373;
        } else {
            var16 = 0.2823909;
        }
    }
    var var17;
    if (input[2] < 2.209949) {
        if (input[2] < 2.167256) {
            if (input[13] < -0.1226937) {
                if (input[4] < -0.1746255) {
                    var17 = 0.030774318;
                } else {
                    if (input[2] < 2.165637) {
                        var17 = -0.3626924;
                    } else {
                        var17 = -0.06289084;
                    }
                }
            } else {
                if (input[6] < -0.3235544) {
                    if (input[1] < 0.4483674) {
                        var17 = -0.10133497;
                    } else {
                        var17 = 0.2642949;
                    }
                } else {
                    if (input[16] < 0.5629417) {
                        var17 = 0.13938506;
                    } else {
                        var17 = -0.22858632;
                    }
                }
            }
        } else {
            if (input[0] < -0.09919777) {
                var17 = -0.34387708;
            } else {
                if (input[1] < 0.0917062) {
                    if (input[2] < 2.204721) {
                        var17 = -0.27703497;
                    } else {
                        var17 = 0.051557478;
                    }
                } else {
                    var17 = 0.22104475;
                }
            }
        }
    } else {
        if (input[7] < 0.1179172) {
            if (input[13] < -0.03265894) {
                if (input[1] < 0.1569824) {
                    var17 = 0.28237072;
                } else {
                    if (input[6] < -0.1467531) {
                        var17 = 0.17343083;
                    } else {
                        var17 = -0.16493711;
                    }
                }
            } else {
                var17 = 0.28057316;
            }
        } else {
            if (input[9] < 0.09026833) {
                var17 = 0.15674667;
            } else {
                var17 = -0.23304473;
            }
        }
    }
    var var18;
    if (input[2] < 2.209949) {
        if (input[3] < -0.1302391) {
            if (input[0] < -0.09919777) {
                if (input[11] < 2.125523) {
                    if (input[2] < 1.970749) {
                        var18 = -0.09692566;
                    } else {
                        var18 = 0.13584618;
                    }
                } else {
                    if (input[14] < 1.970385) {
                        var18 = 0.28943694;
                    } else {
                        var18 = -0.20887096;
                    }
                }
            } else {
                if (input[0] < -0.09040909) {
                    if (input[12] < 0.3145737) {
                        var18 = 0.3402169;
                    } else {
                        var18 = -0.034850016;
                    }
                } else {
                    if (input[8] < 1.519682) {
                        var18 = -0.21680808;
                    } else {
                        var18 = 0.041517194;
                    }
                }
            }
        } else {
            if (input[0] < -0.02114974) {
                if (input[7] < -0.24831) {
                    var18 = -0.08615586;
                } else {
                    var18 = -0.2864248;
                }
            } else {
                var18 = 0.022477325;
            }
        }
    } else {
        if (input[7] < 0.1179172) {
            if (input[6] < -0.1467531) {
                var18 = 0.27930376;
            } else {
                if (input[2] < 2.341856) {
                    var18 = 0.2799689;
                } else {
                    if (input[1] < 0.2455769) {
                        var18 = -0.23310928;
                    } else {
                        var18 = 0.2001515;
                    }
                }
            }
        } else {
            if (input[9] < 0.1220544) {
                var18 = 0.11943187;
            } else {
                var18 = -0.21567808;
            }
        }
    }
    var var19;
    if (input[2] < 2.209949) {
        if (input[1] < 0.3938462) {
            if (input[1] < 0.3871033) {
                if (input[15] < -0.06365126) {
                    var19 = -0.311615;
                } else {
                    if (input[6] < -0.1762814) {
                        var19 = 0.16150455;
                    } else {
                        var19 = -0.078328304;
                    }
                }
            } else {
                var19 = -0.27603906;
            }
        } else {
            if (input[12] < 0.3386326) {
                if (input[5] < 1.86122) {
                    var19 = -0.21265756;
                } else {
                    if (input[5] < 2.021163) {
                        var19 = 0.17984797;
                    } else {
                        var19 = -0.07507801;
                    }
                }
            } else {
                var19 = -0.23051734;
            }
        }
    } else {
        if (input[7] < 0.1250412) {
            if (input[3] < -0.2289037) {
                var19 = 0.27187997;
            } else {
                if (input[0] < -0.1014286) {
                    var19 = -0.1694726;
                } else {
                    if (input[6] < -0.1055461) {
                        var19 = -0.13585763;
                    } else {
                        var19 = 0.2716713;
                    }
                }
            }
        } else {
            if (input[14] < 2.361979) {
                var19 = -0.20324427;
            } else {
                var19 = 0.073968425;
            }
        }
    }
    var var20;
    if (input[8] < 2.334363) {
        if (input[15] < -0.08395509) {
            if (input[12] < -0.01520495) {
                var20 = 0.17721343;
            } else {
                var20 = -0.306626;
            }
        } else {
            if (input[8] < 2.043516) {
                if (input[8] < 1.957287) {
                    if (input[9] < 0.1923451) {
                        var20 = -0.15589997;
                    } else {
                        var20 = 0.0382274;
                    }
                } else {
                    if (input[6] < -0.05325172) {
                        var20 = 0.23856048;
                    } else {
                        var20 = -0.0752836;
                    }
                }
            } else {
                if (input[6] < -0.4569803) {
                    var20 = 0.19500467;
                } else {
                    if (input[11] < 2.113538) {
                        var20 = 0.03518184;
                    } else {
                        var20 = -0.22426556;
                    }
                }
            }
        }
    } else {
        var20 = 0.24781163;
    }
    var var21;
    if (input[2] < 2.209949) {
        if (input[7] < 0.0702138) {
            if (input[0] < -0.3732569) {
                if (input[16] < 0.1175551) {
                    var21 = -0.32303336;
                } else {
                    var21 = -0.036896333;
                }
            } else {
                if (input[13] < 0.2919175) {
                    if (input[16] < 0.1767097) {
                        var21 = -0.024644222;
                    } else {
                        var21 = 0.18317686;
                    }
                } else {
                    if (input[3] < -0.1480516) {
                        var21 = -0.27305222;
                    } else {
                        var21 = 0.19643898;
                    }
                }
            }
        } else {
            if (input[6] < -0.170787) {
                if (input[15] < 0.3893044) {
                    var21 = 0.34517932;
                } else {
                    var21 = -0.19949989;
                }
            } else {
                if (input[9] < 0.1923451) {
                    var21 = -0.19946952;
                } else {
                    var21 = 0.05041511;
                }
            }
        }
    } else {
        if (input[7] < 0.1250412) {
            if (input[15] < 0.4083663) {
                if (input[6] < -0.06375383) {
                    var21 = 0.2714468;
                } else {
                    if (input[11] < 2.33848) {
                        var21 = 0.20637189;
                    } else {
                        var21 = -0.17339742;
                    }
                }
            } else {
                var21 = 0.03469296;
            }
        } else {
            if (input[11] < 2.477913) {
                var21 = -0.17179897;
            } else {
                var21 = 0.012579546;
            }
        }
    }
    var var22;
    if (input[15] < 0.3204894) {
        if (input[2] < 2.209949) {
            if (input[13] < -0.1226937) {
                if (input[16] < -0.1321592) {
                    if (input[16] < -0.1948224) {
                        var22 = -0.15417425;
                    } else {
                        var22 = 0.06624836;
                    }
                } else {
                    var22 = -0.31025642;
                }
            } else {
                if (input[7] < -0.220363) {
                    var22 = 0.30239737;
                } else {
                    if (input[4] < -0.0580909) {
                        var22 = -0.27239615;
                    } else {
                        var22 = 0.00030994983;
                    }
                }
            }
        } else {
            if (input[6] < -0.09749262) {
                var22 = 0.2507211;
            } else {
                if (input[15] < 0.1499203) {
                    var22 = -0.18022491;
                } else {
                    var22 = 0.07742003;
                }
            }
        }
    } else {
        if (input[10] < 0.5588718) {
            if (input[1] < 0.5116877) {
                if (input[1] < 0.08860824) {
                    var22 = -0.16402963;
                } else {
                    if (input[16] < 0.5226377) {
                        var22 = 0.34545472;
                    } else {
                        var22 = -0.115445934;
                    }
                }
            } else {
                if (input[17] < 1.796156) {
                    var22 = -0.23556088;
                } else {
                    var22 = 0.21333355;
                }
            }
        } else {
            var22 = -0.2526367;
        }
    }
    var var23;
    if (input[5] < 2.446036) {
        if (input[8] < 2.043516) {
            if (input[15] < -0.08395509) {
                var23 = -0.24315496;
            } else {
                if (input[0] < -0.1651388) {
                    if (input[11] < 2.132149) {
                        var23 = 0.20352082;
                    } else {
                        var23 = -0.14465791;
                    }
                } else {
                    if (input[3] < -0.2462892) {
                        var23 = -0.25662354;
                    } else {
                        var23 = 0.02228298;
                    }
                }
            }
        } else {
            if (input[1] < 0.3988909) {
                if (input[11] < 2.113538) {
                    if (input[9] < -0.07077794) {
                        var23 = -0.16013423;
                    } else {
                        var23 = 0.22313634;
                    }
                } else {
                    if (input[11] < 2.315457) {
                        var23 = -0.3261852;
                    } else {
                        var23 = -0.02199129;
                    }
                }
            } else {
                if (input[0] < -0.3784855) {
                    var23 = 0.19794299;
                } else {
                    var23 = 0.011941308;
                }
            }
        }
    } else {
        var23 = 0.22568007;
    }
    var var24;
    if (input[4] < -0.1746255) {
        if (input[3] < -0.05781984) {
            if (input[7] < -0.2354252) {
                var24 = 0.2685061;
            } else {
                var24 = 0.049161304;
            }
        } else {
            var24 = -0.10709481;
        }
    } else {
        if (input[4] < -0.0580909) {
            if (input[6] < -0.1787243) {
                var24 = 0.11628486;
            } else {
                if (input[3] < -0.1824108) {
                    var24 = 0.090414494;
                } else {
                    if (input[6] < -0.08808783) {
                        var24 = -0.30986613;
                    } else {
                        var24 = -0.01729182;
                    }
                }
            }
        } else {
            if (input[0] < -0.100632) {
                if (input[1] < 0.08978257) {
                    if (input[6] < -0.1387011) {
                        var24 = -0.41625297;
                    } else {
                        var24 = -0.040740043;
                    }
                } else {
                    if (input[3] < -0.1590271) {
                        var24 = 0.03211284;
                    } else {
                        var24 = -0.2223921;
                    }
                }
            } else {
                if (input[13] < -0.1137752) {
                    if (input[14] < 2.008083) {
                        var24 = -0.21997516;
                    } else {
                        var24 = 0.10883124;
                    }
                } else {
                    if (input[2] < 2.167256) {
                        var24 = 0.28579813;
                    } else {
                        var24 = 0.06210935;
                    }
                }
            }
        }
    }
    var var25;
    if (input[0] < -0.366821) {
        if (input[1] < 0.3988909) {
            if (input[10] < 0.3945737) {
                if (input[12] < -0.001340856) {
                    if (input[11] < 2.11717) {
                        var25 = 0.23941922;
                    } else {
                        var25 = -0.25322303;
                    }
                } else {
                    if (input[2] < 2.0852) {
                        var25 = -0.25049984;
                    } else {
                        var25 = -0.04834515;
                    }
                }
            } else {
                if (input[11] < 2.093345) {
                    var25 = 0.076021194;
                } else {
                    var25 = -0.3882524;
                }
            }
        } else {
            var25 = 0.20743938;
        }
    } else {
        if (input[9] < 0.112396) {
            if (input[0] < -0.3648442) {
                if (input[11] < 2.104794) {
                    var25 = 0.16236216;
                } else {
                    var25 = -0.1264934;
                }
            } else {
                var25 = 0.27923977;
            }
        } else {
            if (input[9] < 0.1901928) {
                if (input[7] < -0.07491295) {
                    var25 = 0.18263032;
                } else {
                    if (input[11] < 1.89105) {
                        var25 = -0.002968819;
                    } else {
                        var25 = -0.27929232;
                    }
                }
            } else {
                if (input[15] < 0.3284619) {
                    if (input[3] < -0.1824108) {
                        var25 = 0.14461593;
                    } else {
                        var25 = -0.059060287;
                    }
                } else {
                    if (input[1] < 0.5116877) {
                        var25 = 0.27223182;
                    } else {
                        var25 = -0.072988205;
                    }
                }
            }
        }
    }
    var var26;
    if (input[4] < -0.1746255) {
        if (input[3] < -0.05781984) {
            if (input[7] < -0.2354252) {
                var26 = 0.253607;
            } else {
                var26 = 0.050955657;
            }
        } else {
            var26 = -0.083053336;
        }
    } else {
        if (input[4] < -0.0580909) {
            if (input[15] < 0.1619651) {
                var26 = 0.094826065;
            } else {
                if (input[3] < -0.1796828) {
                    var26 = 0.04817248;
                } else {
                    if (input[13] < -0.04938516) {
                        var26 = -0.28322428;
                    } else {
                        var26 = -0.026666481;
                    }
                }
            }
        } else {
            if (input[0] < -0.100632) {
                if (input[1] < 0.08978257) {
                    if (input[5] < 2.035368) {
                        var26 = -0.34648037;
                    } else {
                        var26 = 0.017568793;
                    }
                } else {
                    if (input[4] < -0.05400297) {
                        var26 = 0.28303227;
                    } else {
                        var26 = -0.018080698;
                    }
                }
            } else {
                if (input[3] < -0.1710825) {
                    if (input[12] < 0.3056689) {
                        var26 = 0.20819667;
                    } else {
                        var26 = -0.25949773;
                    }
                } else {
                    if (input[16] < -0.1179603) {
                        var26 = 0.007808062;
                    } else {
                        var26 = 0.298168;
                    }
                }
            }
        }
    }
    var var27;
    if (input[16] < 0.3397055) {
        if (input[7] < -0.1218338) {
            if (input[6] < -0.1762814) {
                if (input[13] < -0.1137752) {
                    var27 = 0.02071595;
                } else {
                    var27 = 0.24974252;
                }
            } else {
                if (input[0] < -0.1139839) {
                    var27 = -0.2260562;
                } else {
                    if (input[6] < -0.1556651) {
                        var27 = -0.16467921;
                    } else {
                        var27 = 0.08389321;
                    }
                }
            }
        } else {
            if (input[1] < 0.3938462) {
                if (input[17] < 1.980811) {
                    if (input[11] < 2.113538) {
                        var27 = -0.09451557;
                    } else {
                        var27 = -0.2849357;
                    }
                } else {
                    if (input[3] < -0.2413324) {
                        var27 = 0.12693201;
                    } else {
                        var27 = -0.10244191;
                    }
                }
            } else {
                if (input[2] < 1.947101) {
                    if (input[11] < 1.89105) {
                        var27 = 0.07406291;
                    } else {
                        var27 = -0.23772234;
                    }
                } else {
                    if (input[5] < 2.086572) {
                        var27 = 0.24371424;
                    } else {
                        var27 = -0.019253409;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.1623473) {
            if (input[15] < -0.07344887) {
                if (input[3] < -0.3998991) {
                    var27 = -0.026778692;
                } else {
                    var27 = -0.17249584;
                }
            } else {
                if (input[5] < 2.082961) {
                    if (input[10] < 0.5424515) {
                        var27 = 0.18807451;
                    } else {
                        var27 = 0.3944205;
                    }
                } else {
                    var27 = 0.027323335;
                }
            }
        } else {
            if (input[13] < 0.3285195) {
                var27 = 0.057257302;
            } else {
                var27 = -0.25809327;
            }
        }
    }
    var var28;
    if (input[5] < 1.873271) {
        if (input[5] < 1.669318) {
            if (input[12] < 0.2244842) {
                var28 = 0.24957682;
            } else {
                var28 = -0.10842961;
            }
        } else {
            if (input[15] < 0.353978) {
                if (input[2] < 1.764643) {
                    var28 = 0.034914512;
                } else {
                    var28 = -0.26520038;
                }
            } else {
                if (input[1] < 0.5103135) {
                    var28 = 0.157278;
                } else {
                    var28 = -0.16180277;
                }
            }
        }
    } else {
        if (input[14] < 1.909514) {
            if (input[9] < 0.1901928) {
                var28 = 0.016782854;
            } else {
                var28 = 0.31241423;
            }
        } else {
            if (input[2] < 1.970749) {
                if (input[2] < 1.836246) {
                    var28 = 0.20218508;
                } else {
                    if (input[7] < 0.0702138) {
                        var28 = -0.22521685;
                    } else {
                        var28 = -0.002639529;
                    }
                }
            } else {
                if (input[1] < 0.3938462) {
                    if (input[1] < 0.3856762) {
                        var28 = 0.025232505;
                    } else {
                        var28 = -0.15233552;
                    }
                } else {
                    if (input[7] < 0.1751316) {
                        var28 = 0.210113;
                    } else {
                        var28 = -0.13139537;
                    }
                }
            }
        }
    }
    var var29;
    if (input[16] < 0.1465969) {
        if (input[0] < -0.3732569) {
            if (input[9] < -0.07214493) {
                var29 = -0.041998938;
            } else {
                var29 = -0.23725179;
            }
        } else {
            if (input[12] < 0.2175839) {
                if (input[11] < 2.113538) {
                    var29 = 0.26574984;
                } else {
                    if (input[12] < -0.05514102) {
                        var29 = -0.15512288;
                    } else {
                        var29 = 0.1578953;
                    }
                }
            } else {
                if (input[15] < 0.3022452) {
                    if (input[0] < -0.165699) {
                        var29 = 0.13544087;
                    } else {
                        var29 = -0.13218154;
                    }
                } else {
                    if (input[9] < 0.2513413) {
                        var29 = -0.03330142;
                    } else {
                        var29 = 0.17387918;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.1590271) {
            if (input[9] < 0.1901928) {
                if (input[14] < 1.956352) {
                    if (input[7] < 0.07164165) {
                        var29 = -0.20506503;
                    } else {
                        var29 = 0.11435552;
                    }
                } else {
                    if (input[11] < 2.113538) {
                        var29 = 0.23576154;
                    } else {
                        var29 = -0.07885888;
                    }
                }
            } else {
                if (input[17] < 1.757661) {
                    var29 = -0.13661127;
                } else {
                    if (input[17] < 1.944642) {
                        var29 = 0.33016697;
                    } else {
                        var29 = 0.031523634;
                    }
                }
            }
        } else {
            if (input[0] < -0.09561503) {
                if (input[15] < 0.3331112) {
                    var29 = -0.24106102;
                } else {
                    var29 = -0.017802525;
                }
            } else {
                var29 = 0.14728919;
            }
        }
    }
    var var30;
    if (input[5] < 2.446036) {
        if (input[2] < 2.167256) {
            if (input[11] < 2.159709) {
                if (input[14] < 2.082894) {
                    if (input[12] < 0.3320762) {
                        var30 = 0.031485427;
                    } else {
                        var30 = -0.18163659;
                    }
                } else {
                    if (input[13] < 0.2167169) {
                        var30 = -0.2595965;
                    } else {
                        var30 = 0.06595123;
                    }
                }
            } else {
                var30 = 0.26135725;
            }
        } else {
            if (input[6] < -0.1516554) {
                if (input[11] < 2.159709) {
                    var30 = 0.012249997;
                } else {
                    var30 = 0.18471451;
                }
            } else {
                if (input[7] < -0.3083954) {
                    if (input[3] < -0.05781984) {
                        var30 = 0.1737049;
                    } else {
                        var30 = -0.030727562;
                    }
                } else {
                    if (input[3] < -0.09779533) {
                        var30 = -0.26055905;
                    } else {
                        var30 = -0.050147068;
                    }
                }
            }
        }
    } else {
        var30 = 0.18386656;
    }
    var var31;
    if (input[2] < 2.128685) {
        if (input[11] < 2.11717) {
            if (input[8] < 1.931738) {
                if (input[3] < -0.1676013) {
                    if (input[10] < 0.5578143) {
                        var31 = -0.25381562;
                    } else {
                        var31 = 0.053657394;
                    }
                } else {
                    if (input[6] < -0.170787) {
                        var31 = 0.14865682;
                    } else {
                        var31 = -0.09757387;
                    }
                }
            } else {
                if (input[13] < 0.2143801) {
                    if (input[3] < -0.4018117) {
                        var31 = -0.012057439;
                    } else {
                        var31 = 0.26730397;
                    }
                } else {
                    if (input[11] < 2.079042) {
                        var31 = 0.12589024;
                    } else {
                        var31 = -0.20112844;
                    }
                }
            }
        } else {
            var31 = -0.2401915;
        }
    } else {
        if (input[14] < 1.970385) {
            var31 = 0.25051132;
        } else {
            if (input[14] < 1.980722) {
                if (input[1] < 0.0917062) {
                    if (input[9] < 0.2402512) {
                        var31 = -0.3368239;
                    } else {
                        var31 = -0.07675293;
                    }
                } else {
                    var31 = 0.19703405;
                }
            } else {
                if (input[3] < -0.1824108) {
                    if (input[6] < -0.09749262) {
                        var31 = 0.24336691;
                    } else {
                        var31 = -0.11356803;
                    }
                } else {
                    if (input[0] < -0.1139839) {
                        var31 = -0.21817736;
                    } else {
                        var31 = 0.042016745;
                    }
                }
            }
        }
    }
    var var32;
    if (input[11] < 2.159709) {
        if (input[12] < 0.3262874) {
            if (input[7] < 0.07164165) {
                if (input[14] < 2.078404) {
                    if (input[13] < 0.2791338) {
                        var32 = 0.03498182;
                    } else {
                        var32 = -0.09850076;
                    }
                } else {
                    var32 = -0.2107389;
                }
            } else {
                if (input[16] < 0.188866) {
                    var32 = 0.049298592;
                } else {
                    var32 = 0.18774816;
                }
            }
        } else {
            if (input[14] < 1.980722) {
                var32 = -0.23750918;
            } else {
                if (input[12] < 0.3386326) {
                    var32 = 0.09113013;
                } else {
                    var32 = -0.14734316;
                }
            }
        }
    } else {
        if (input[6] < -0.1467531) {
            var32 = 0.21687658;
        } else {
            if (input[0] < -0.1139839) {
                var32 = -0.18646225;
            } else {
                if (input[8] < 1.989772) {
                    var32 = 0.23942572;
                } else {
                    if (input[13] < -0.3119192) {
                        var32 = 0.055463914;
                    } else {
                        var32 = -0.08990109;
                    }
                }
            }
        }
    }
    var var33;
    if (input[16] < 0.3397055) {
        if (input[7] < -0.1218338) {
            if (input[7] < -0.1240756) {
                if (input[9] < 0.2123637) {
                    if (input[3] < -0.1302391) {
                        var33 = 0.19741294;
                    } else {
                        var33 = -0.056365643;
                    }
                } else {
                    if (input[6] < -0.1556651) {
                        var33 = -0.21400289;
                    } else {
                        var33 = 0.008587581;
                    }
                }
            } else {
                if (input[10] < 0.05346368) {
                    var33 = -0.034828033;
                } else {
                    var33 = 0.23771799;
                }
            }
        } else {
            if (input[4] < 0.1370119) {
                if (input[14] < 2.042246) {
                    var33 = -0.22604062;
                } else {
                    var33 = -0.040465243;
                }
            } else {
                if (input[9] < 0.2095988) {
                    if (input[10] < 0.3930976) {
                        var33 = 0.043586712;
                    } else {
                        var33 = -0.13672741;
                    }
                } else {
                    var33 = 0.18260053;
                }
            }
        }
    } else {
        if (input[3] < -0.1623473) {
            if (input[15] < -0.07344887) {
                var33 = -0.09930695;
            } else {
                if (input[5] < 2.082961) {
                    var33 = 0.2490056;
                } else {
                    var33 = 0.037370212;
                }
            }
        } else {
            if (input[13] < 0.3311763) {
                var33 = 0.04239988;
            } else {
                var33 = -0.18975209;
            }
        }
    }
    var var34;
    if (input[4] < -0.0580909) {
        if (input[4] < -0.1746255) {
            if (input[3] < -0.05781984) {
                if (input[7] < -0.2354252) {
                    var34 = 0.19202612;
                } else {
                    var34 = 0.013017757;
                }
            } else {
                var34 = -0.075902335;
            }
        } else {
            if (input[15] < 0.1636263) {
                var34 = 0.026193555;
            } else {
                if (input[15] < 0.2557863) {
                    var34 = -0.23826171;
                } else {
                    if (input[13] < -0.08495174) {
                        var34 = -0.19586968;
                    } else {
                        var34 = 0.117440104;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.100632) {
            if (input[1] < 0.08978257) {
                if (input[7] < -0.1503583) {
                    var34 = 0.041454453;
                } else {
                    var34 = -0.2522353;
                }
            } else {
                if (input[5] < 1.867732) {
                    var34 = -0.19053356;
                } else {
                    if (input[9] < 0.1923451) {
                        var34 = -0.020564193;
                    } else {
                        var34 = 0.12668711;
                    }
                }
            }
        } else {
            if (input[13] < -0.1137752) {
                if (input[15] < 0.3022452) {
                    var34 = -0.12680896;
                } else {
                    var34 = 0.025163101;
                }
            } else {
                if (input[6] < -0.1467531) {
                    if (input[2] < 2.167256) {
                        var34 = 0.24172671;
                    } else {
                        var34 = 0.05426934;
                    }
                } else {
                    if (input[14] < 1.98909) {
                        var34 = -0.146557;
                    } else {
                        var34 = 0.13406941;
                    }
                }
            }
        }
    }
    var var35;
    if (input[7] < 0.0702138) {
        if (input[16] < 0.4783801) {
            if (input[0] < -0.3732569) {
                var35 = -0.16070078;
            } else {
                if (input[12] < 0.2175839) {
                    if (input[16] < 0.08450779) {
                        var35 = 0.21993476;
                    } else {
                        var35 = -0.013660005;
                    }
                } else {
                    if (input[16] < 0.1664344) {
                        var35 = -0.053482737;
                    } else {
                        var35 = 0.15061396;
                    }
                }
            }
        } else {
            var35 = -0.16450976;
        }
    } else {
        if (input[6] < -0.170787) {
            if (input[15] < 0.3778188) {
                var35 = 0.23449013;
            } else {
                var35 = -0.06483216;
            }
        } else {
            var35 = -0.060515635;
        }
    }
    var var36;
    if (input[5] < 1.865078) {
        if (input[12] < 0.226468) {
            if (input[10] < 0.0601885) {
                var36 = 0.16766272;
            } else {
                var36 = -0.1010089;
            }
        } else {
            var36 = -0.1907109;
        }
    } else {
        if (input[1] < 0.3988909) {
            if (input[10] < 0.3945737) {
                if (input[2] < 1.970749) {
                    var36 = -0.18712248;
                } else {
                    if (input[12] < 0.3056689) {
                        var36 = 0.08184036;
                    } else {
                        var36 = -0.020113055;
                    }
                }
            } else {
                if (input[11] < 2.104794) {
                    var36 = 0.071195394;
                } else {
                    var36 = -0.26092318;
                }
            }
        } else {
            if (input[10] < 0.5555911) {
                if (input[1] < 0.5116877) {
                    var36 = 0.21634589;
                } else {
                    var36 = -0.0033018016;
                }
            } else {
                if (input[15] < 0.3022452) {
                    var36 = 0.10603439;
                } else {
                    if (input[10] < 0.5588718) {
                        var36 = -0.0035537665;
                    } else {
                        var36 = -0.1942984;
                    }
                }
            }
        }
    }
    var var37;
    if (input[0] < -0.366821) {
        if (input[7] < -0.02287015) {
            if (input[1] < 0.3843877) {
                var37 = 0.035394784;
            } else {
                if (input[16] < 0.03439357) {
                    var37 = -0.025549732;
                } else {
                    if (input[15] < 0.02039501) {
                        var37 = -0.2579257;
                    } else {
                        var37 = -0.058850043;
                    }
                }
            }
        } else {
            if (input[16] < 0.03439357) {
                var37 = -0.051637672;
            } else {
                var37 = 0.16508749;
            }
        }
    } else {
        if (input[9] < 0.1111177) {
            var37 = 0.20883784;
        } else {
            if (input[8] < 1.866046) {
                if (input[2] < 2.167256) {
                    if (input[13] < -0.1226937) {
                        var37 = -0.13693793;
                    } else {
                        var37 = 0.068785705;
                    }
                } else {
                    if (input[0] < -0.09919777) {
                        var37 = -0.22552301;
                    } else {
                        var37 = 0.03696103;
                    }
                }
            } else {
                if (input[15] < 0.2884973) {
                    if (input[7] < -0.1152279) {
                        var37 = -0.03415895;
                    } else {
                        var37 = -0.22057517;
                    }
                } else {
                    if (input[7] < -0.3083954) {
                        var37 = 0.107701205;
                    } else {
                        var37 = -0.041285228;
                    }
                }
            }
        }
    }
    var var38;
    if (input[2] < 1.988044) {
        if (input[11] < 1.89105) {
            if (input[6] < -0.170787) {
                if (input[15] < 0.3992234) {
                    if (input[5] < 1.86122) {
                        var38 = 0.03179398;
                    } else {
                        var38 = 0.19028129;
                    }
                } else {
                    var38 = -0.02165642;
                }
            } else {
                if (input[15] < 0.3430658) {
                    if (input[12] < 0.2175839) {
                        var38 = 0.006177977;
                    } else {
                        var38 = -0.21671286;
                    }
                } else {
                    var38 = 0.114045806;
                }
            }
        } else {
            if (input[8] < 1.897218) {
                var38 = -0.2125147;
            } else {
                var38 = 0.00053955853;
            }
        }
    } else {
        if (input[11] < 2.10903) {
            if (input[13] < 0.3121467) {
                var38 = 0.22096379;
            } else {
                var38 = -0.09451691;
            }
        } else {
            if (input[14] < 1.970385) {
                var38 = 0.15930736;
            } else {
                if (input[14] < 1.976698) {
                    var38 = -0.19574423;
                } else {
                    if (input[10] < 0.3902099) {
                        var38 = 0.028661648;
                    } else {
                        var38 = -0.114495374;
                    }
                }
            }
        }
    }
    var var39;
    if (input[2] < 2.208315) {
        if (input[2] < 2.167256) {
            if (input[11] < 2.159709) {
                if (input[10] < 0.04710223) {
                    var39 = 0.14543416;
                } else {
                    if (input[7] < 0.07305782) {
                        var39 = -0.032702677;
                    } else {
                        var39 = 0.14082745;
                    }
                }
            } else {
                var39 = 0.19158226;
            }
        } else {
            if (input[6] < -0.1467531) {
                var39 = 0.0062532634;
            } else {
                var39 = -0.20780696;
            }
        }
    } else {
        if (input[14] < 2.241046) {
            var39 = 0.14746095;
        } else {
            if (input[13] < -0.03265894) {
                var39 = -0.13247488;
            } else {
                var39 = 0.11517997;
            }
        }
    }
    var var40;
    if (input[4] < -0.0580909) {
        if (input[4] < -0.1746255) {
            if (input[3] < -0.05781984) {
                var40 = 0.143003;
            } else {
                var40 = -0.05635827;
            }
        } else {
            if (input[13] < -0.08495174) {
                var40 = -0.18638837;
            } else {
                if (input[16] < 0.1175551) {
                    var40 = 0.09969739;
                } else {
                    var40 = -0.15364945;
                }
            }
        }
    } else {
        if (input[0] < -0.100632) {
            if (input[10] < 0.06496245) {
                if (input[9] < 0.2402512) {
                    var40 = -0.20049207;
                } else {
                    var40 = -0.0148247015;
                }
            } else {
                if (input[7] < -0.1503583) {
                    var40 = 0.1618763;
                } else {
                    if (input[5] < 1.873271) {
                        var40 = -0.1396478;
                    } else {
                        var40 = -0.00101403;
                    }
                }
            }
        } else {
            if (input[3] < -0.1710825) {
                if (input[12] < 0.3056689) {
                    if (input[11] < 2.153601) {
                        var40 = 0.16713719;
                    } else {
                        var40 = 0.042957652;
                    }
                } else {
                    if (input[12] < 0.3262874) {
                        var40 = -0.037380233;
                    } else {
                        var40 = -0.18925415;
                    }
                }
            } else {
                if (input[7] < -0.1326276) {
                    var40 = -0.031566087;
                } else {
                    var40 = 0.24142826;
                }
            }
        }
    }
    var var41;
    if (input[7] < -0.1503583) {
        if (input[3] < -0.1302391) {
            if (input[16] < -0.1655386) {
                var41 = -0.012172624;
            } else {
                if (input[8] < 1.783396) {
                    var41 = 0.23263106;
                } else {
                    var41 = 0.010902224;
                }
            }
        } else {
            if (input[6] < -0.08808783) {
                var41 = -0.16370662;
            } else {
                var41 = 0.053461265;
            }
        }
    } else {
        if (input[1] < 0.08860824) {
            var41 = -0.17138326;
        } else {
            if (input[0] < -0.09919777) {
                if (input[15] < 0.3204894) {
                    if (input[3] < -0.1824108) {
                        var41 = 0.01025216;
                    } else {
                        var41 = -0.11498061;
                    }
                } else {
                    if (input[13] < 0.2791338) {
                        var41 = 0.21435185;
                    } else {
                        var41 = -0.06469941;
                    }
                }
            } else {
                if (input[3] < -0.1744854) {
                    var41 = -0.029520227;
                } else {
                    var41 = 0.21026692;
                }
            }
        }
    }
    var var42;
    if (input[15] < 0.4288504) {
        if (input[15] < 0.3284619) {
            if (input[2] < 1.970749) {
                if (input[12] < 0.226468) {
                    if (input[7] < -0.220363) {
                        var42 = 0.14486924;
                    } else {
                        var42 = -0.058342334;
                    }
                } else {
                    var42 = -0.17035267;
                }
            } else {
                if (input[11] < 2.10903) {
                    if (input[13] < 0.3121467) {
                        var42 = 0.15927407;
                    } else {
                        var42 = -0.08065367;
                    }
                } else {
                    if (input[10] < 0.3908162) {
                        var42 = 0.018895641;
                    } else {
                        var42 = -0.1240099;
                    }
                }
            }
        } else {
            if (input[11] < 1.89105) {
                if (input[16] < 0.473792) {
                    var42 = 0.19275957;
                } else {
                    var42 = 0.0055802055;
                }
            } else {
                var42 = -0.005438374;
            }
        }
    } else {
        var42 = -0.09874639;
    }
    var var43;
    if (input[7] < 0.0702138) {
        if (input[11] < 2.159709) {
            if (input[7] < -0.1503583) {
                if (input[3] < -0.1710825) {
                    var43 = 0.20028879;
                } else {
                    if (input[9] < 0.2123637) {
                        var43 = 0.08708279;
                    } else {
                        var43 = -0.15663867;
                    }
                }
            } else {
                if (input[11] < 2.155105) {
                    if (input[0] < -0.100632) {
                        var43 = -0.0637407;
                    } else {
                        var43 = 0.09064697;
                    }
                } else {
                    if (input[3] < -0.1710825) {
                        var43 = -0.24408115;
                    } else {
                        var43 = 0.044899456;
                    }
                }
            }
        } else {
            if (input[7] < -0.128735) {
                if (input[15] < 0.2918368) {
                    var43 = -0.1093562;
                } else {
                    var43 = 0.07359081;
                }
            } else {
                var43 = 0.16136777;
            }
        }
    } else {
        if (input[6] < -0.170787) {
            if (input[15] < 0.3245374) {
                var43 = 0.18225732;
            } else {
                var43 = 0.015135673;
            }
        } else {
            var43 = -0.05236918;
        }
    }
    var var44;
    if (input[17] < 1.753616) {
        if (input[17] < 1.712063) {
            if (input[6] < -0.1314955) {
                var44 = 0.10126639;
            } else {
                var44 = -0.06783363;
            }
        } else {
            if (input[7] < -0.1224815) {
                var44 = -0.17902216;
            } else {
                var44 = -0.047640596;
            }
        }
    } else {
        if (input[17] < 1.776334) {
            var44 = 0.14643519;
        } else {
            if (input[14] < 1.980722) {
                if (input[14] < 1.909514) {
                    var44 = 0.0837812;
                } else {
                    if (input[6] < -0.1641947) {
                        var44 = -0.1517938;
                    } else {
                        var44 = 0.0153578585;
                    }
                }
            } else {
                if (input[16] < 0.03143512) {
                    if (input[4] < 0.175192) {
                        var44 = -0.07911141;
                    } else {
                        var44 = 0.090112925;
                    }
                } else {
                    if (input[10] < 0.05346368) {
                        var44 = -0.06474229;
                    } else {
                        var44 = 0.112630986;
                    }
                }
            }
        }
    }
    var var45;
    if (input[17] < 1.757661) {
        if (input[12] < 0.2175839) {
            var45 = 0.06602644;
        } else {
            if (input[12] < 0.3030012) {
                if (input[3] < -0.1480516) {
                    var45 = -0.18425903;
                } else {
                    var45 = -0.04788177;
                }
            } else {
                var45 = 0.009637391;
            }
        }
    } else {
        if (input[17] < 1.776334) {
            var45 = 0.13191465;
        } else {
            if (input[7] < -0.1224815) {
                if (input[11] < 2.155105) {
                    var45 = 0.16977395;
                } else {
                    if (input[11] < 2.159709) {
                        var45 = -0.1316024;
                    } else {
                        var45 = 0.061247423;
                    }
                }
            } else {
                if (input[11] < 2.11717) {
                    if (input[12] < -0.02872051) {
                        var45 = 0.13362733;
                    } else {
                        var45 = -0.044364784;
                    }
                } else {
                    if (input[14] < 2.148711) {
                        var45 = -0.15674834;
                    } else {
                        var45 = 0.076488815;
                    }
                }
            }
        }
    }
    var var46;
    if (input[1] < 0.3938462) {
        if (input[7] < -0.1218338) {
            if (input[2] < 2.167256) {
                if (input[17] < 1.753616) {
                    if (input[9] < 0.2123637) {
                        var46 = 0.06648241;
                    } else {
                        var46 = -0.10960176;
                    }
                } else {
                    if (input[6] < -0.1556651) {
                        var46 = -0.04147987;
                    } else {
                        var46 = 0.18766437;
                    }
                }
            } else {
                if (input[2] < 2.204721) {
                    if (input[6] < -0.1467531) {
                        var46 = 0.018195163;
                    } else {
                        var46 = -0.19666295;
                    }
                } else {
                    if (input[8] < 2.035454) {
                        var46 = 0.13946323;
                    } else {
                        var46 = -0.07320741;
                    }
                }
            }
        } else {
            if (input[5] < 2.056952) {
                var46 = -0.19122806;
            } else {
                if (input[1] < 0.3843877) {
                    var46 = 0.110140145;
                } else {
                    if (input[7] < -0.03138135) {
                        var46 = -0.14444365;
                    } else {
                        var46 = 0.028506134;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.940264) {
            if (input[11] < 1.89105) {
                if (input[5] < 1.873271) {
                    var46 = -0.053072117;
                } else {
                    if (input[3] < -0.1623473) {
                        var46 = 0.18204439;
                    } else {
                        var46 = -0.039526634;
                    }
                }
            } else {
                var46 = -0.14440875;
            }
        } else {
            if (input[11] < 2.125523) {
                var46 = 0.16948584;
            } else {
                var46 = 0.016711032;
            }
        }
    }
    var var47;
    if (input[1] < 0.3938462) {
        if (input[5] < 2.033378) {
            if (input[13] < -0.05996623) {
                if (input[3] < -0.1623473) {
                    var47 = 0.069757216;
                } else {
                    if (input[12] < 0.2228343) {
                        var47 = 0.046833225;
                    } else {
                        var47 = -0.121364765;
                    }
                }
            } else {
                var47 = -0.18413812;
            }
        } else {
            if (input[8] < 2.045113) {
                if (input[13] < 0.2143801) {
                    if (input[1] < 0.0917062) {
                        var47 = -0.00027773553;
                    } else {
                        var47 = 0.19265202;
                    }
                } else {
                    var47 = -0.083264545;
                }
            } else {
                if (input[17] < 2.055006) {
                    var47 = -0.1501584;
                } else {
                    var47 = 0.009473727;
                }
            }
        }
    } else {
        if (input[2] < 1.947101) {
            if (input[11] < 1.89105) {
                if (input[16] < 0.5226377) {
                    if (input[15] < 0.3992234) {
                        var47 = 0.12452686;
                    } else {
                        var47 = 0.023476753;
                    }
                } else {
                    var47 = -0.051303264;
                }
            } else {
                var47 = -0.116406165;
            }
        } else {
            if (input[5] < 2.086572) {
                var47 = 0.16509889;
            } else {
                var47 = 0.015634002;
            }
        }
    }
    var var48;
    if (input[6] < -0.05602983) {
        if (input[3] < -0.1302391) {
            if (input[7] < -0.1503583) {
                if (input[8] < 1.783396) {
                    var48 = 0.14468202;
                } else {
                    var48 = 0.017536597;
                }
            } else {
                if (input[11] < 2.159709) {
                    if (input[7] < -0.1240756) {
                        var48 = -0.09956201;
                    } else {
                        var48 = 0.014848868;
                    }
                } else {
                    if (input[4] < -0.05400297) {
                        var48 = 0.14139238;
                    } else {
                        var48 = 0.029112712;
                    }
                }
            }
        } else {
            var48 = -0.10746569;
        }
    } else {
        if (input[0] < -0.02114974) {
            var48 = -0.17580327;
        } else {
            var48 = 0.09458378;
        }
    }
    var var49;
    if (input[16] < 0.1767097) {
        if (input[15] < 0.3146721) {
            if (input[12] < 0.2175839) {
                if (input[0] < -0.3721255) {
                    if (input[17] < 2.013758) {
                        var49 = -0.11700465;
                    } else {
                        var49 = -0.0012021726;
                    }
                } else {
                    if (input[16] < 0.1175551) {
                        var49 = 0.16848958;
                    } else {
                        var49 = -0.041045383;
                    }
                }
            } else {
                if (input[7] < -0.1218338) {
                    if (input[7] < -0.1298878) {
                        var49 = -0.08223205;
                    } else {
                        var49 = 0.042449333;
                    }
                } else {
                    var49 = -0.14363122;
                }
            }
        } else {
            if (input[12] < 0.3386326) {
                var49 = 0.11006739;
            } else {
                var49 = -0.018569339;
            }
        }
    } else {
        if (input[1] < 0.3843877) {
            var49 = 0.15182665;
        } else {
            if (input[9] < 0.1923451) {
                if (input[6] < -0.3937329) {
                    var49 = 0.045607552;
                } else {
                    if (input[0] < -0.3656934) {
                        var49 = -0.13300726;
                    } else {
                        var49 = -0.02820045;
                    }
                }
            } else {
                if (input[16] < 0.5226377) {
                    var49 = 0.10662158;
                } else {
                    var49 = -0.012530346;
                }
            }
        }
    }
    var var50;
    if (input[5] < 1.865078) {
        if (input[8] < 1.506984) {
            var50 = 0.04836223;
        } else {
            var50 = -0.14494492;
        }
    } else {
        if (input[14] < 1.909514) {
            var50 = 0.109149754;
        } else {
            if (input[2] < 1.970749) {
                if (input[12] < 0.246355) {
                    var50 = 0.033064913;
                } else {
                    var50 = -0.14040451;
                }
            } else {
                if (input[11] < 2.10903) {
                    if (input[15] < 0.02039501) {
                        var50 = -0.007867207;
                    } else {
                        var50 = 0.17741162;
                    }
                } else {
                    if (input[10] < 0.3908162) {
                        var50 = 0.020173155;
                    } else {
                        var50 = -0.09902052;
                    }
                }
            }
        }
    }
    var var51;
    if (input[1] < 0.3938462) {
        if (input[1] < 0.3871033) {
            if (input[5] < 2.033378) {
                if (input[7] < -0.1265331) {
                    if (input[4] < -0.05541456) {
                        var51 = 0.051234875;
                    } else {
                        var51 = -0.099904805;
                    }
                } else {
                    var51 = -0.16619569;
                }
            } else {
                if (input[13] < -0.06502916) {
                    if (input[3] < -0.1699317) {
                        var51 = -0.07240489;
                    } else {
                        var51 = 0.06645963;
                    }
                } else {
                    if (input[8] < 2.043516) {
                        var51 = 0.1611049;
                    } else {
                        var51 = -0.014788423;
                    }
                }
            }
        } else {
            var51 = -0.119410716;
        }
    } else {
        if (input[5] < 1.873271) {
            var51 = -0.0678726;
        } else {
            if (input[10] < 0.5588718) {
                if (input[5] < 2.021163) {
                    var51 = 0.15096682;
                } else {
                    var51 = 0.016419888;
                }
            } else {
                var51 = -0.04680486;
            }
        }
    }
    var var52;
    if (input[4] < 0.2791482) {
        if (input[0] < -0.3732569) {
            var52 = -0.103150845;
        } else {
            if (input[13] < 0.2791338) {
                if (input[11] < 2.113538) {
                    if (input[10] < 0.3707551) {
                        var52 = -0.03730992;
                    } else {
                        var52 = 0.17462651;
                    }
                } else {
                    if (input[14] < 1.970385) {
                        var52 = 0.15486328;
                    } else {
                        var52 = -0.038615063;
                    }
                }
            } else {
                if (input[14] < 1.909514) {
                    var52 = 0.016303992;
                } else {
                    var52 = -0.11237373;
                }
            }
        }
    } else {
        var52 = 0.082905605;
    }
    var var53;
    if (input[2] < 2.128685) {
        if (input[11] < 2.11717) {
            if (input[12] < 0.226468) {
                if (input[15] < -0.009530085) {
                    if (input[14] < 2.002971) {
                        var53 = -0.11857941;
                    } else {
                        var53 = 0.053743295;
                    }
                } else {
                    if (input[4] < 0.175192) {
                        var53 = 0.00089177187;
                    } else {
                        var53 = 0.18560928;
                    }
                }
            } else {
                if (input[16] < 0.3698858) {
                    var53 = -0.116683625;
                } else {
                    var53 = 0.020068945;
                }
            }
        } else {
            var53 = -0.14494859;
        }
    } else {
        if (input[3] < -0.1824108) {
            if (input[6] < -0.1218946) {
                var53 = 0.16301379;
            } else {
                var53 = -0.02292512;
            }
        } else {
            if (input[9] < 0.2371251) {
                var53 = -0.10822743;
            } else {
                if (input[14] < 1.993289) {
                    if (input[6] < -0.1556651) {
                        var53 = -0.028421529;
                    } else {
                        var53 = 0.13220799;
                    }
                } else {
                    if (input[10] < 0.06496245) {
                        var53 = -0.10716991;
                    } else {
                        var53 = 0.055700053;
                    }
                }
            }
        }
    }
    var var54;
    if (input[0] < -0.100632) {
        if (input[0] < -0.1651388) {
            if (input[0] < -0.366821) {
                if (input[7] < -0.02287015) {
                    if (input[16] < 0.05056449) {
                        var54 = 0.015370539;
                    } else {
                        var54 = -0.1343737;
                    }
                } else {
                    var54 = 0.06836572;
                }
            } else {
                if (input[11] < 2.132149) {
                    var54 = 0.15496227;
                } else {
                    var54 = 0.014465253;
                }
            }
        } else {
            if (input[8] < 1.837809) {
                if (input[6] < -0.1556651) {
                    if (input[7] < 0.0702138) {
                        var54 = -0.09745942;
                    } else {
                        var54 = 0.03496735;
                    }
                } else {
                    var54 = 0.10202148;
                }
            } else {
                var54 = -0.1432088;
            }
        }
    } else {
        if (input[4] < -0.0580909) {
            if (input[10] < 0.0601885) {
                if (input[2] < 2.16638) {
                    var54 = 0.09294152;
                } else {
                    var54 = -0.01729002;
                }
            } else {
                var54 = -0.124496065;
            }
        } else {
            if (input[3] < -0.1710825) {
                if (input[12] < 0.3056689) {
                    var54 = 0.102621965;
                } else {
                    var54 = -0.12936307;
                }
            } else {
                if (input[10] < 0.06496245) {
                    var54 = 0.0060504023;
                } else {
                    var54 = 0.20175423;
                }
            }
        }
    }
    var var55;
    if (input[4] < -0.1746255) {
        var55 = 0.06931695;
    } else {
        if (input[4] < -0.0580909) {
            if (input[10] < 0.0601885) {
                var55 = -0.012280585;
            } else {
                var55 = -0.13433534;
            }
        } else {
            if (input[0] < -0.100632) {
                if (input[16] < 0.3397055) {
                    if (input[5] < 2.037452) {
                        var55 = -0.072184026;
                    } else {
                        var55 = 0.005772896;
                    }
                } else {
                    if (input[6] < -0.170787) {
                        var55 = 0.0929067;
                    } else {
                        var55 = -0.06356156;
                    }
                }
            } else {
                if (input[13] < -0.1137752) {
                    var55 = -0.05199371;
                } else {
                    if (input[6] < -0.1467531) {
                        var55 = 0.14279273;
                    } else {
                        var55 = -0.015340715;
                    }
                }
            }
        }
    }
    var var56;
    if (input[2] < 2.208315) {
        if (input[2] < 2.167256) {
            if (input[6] < -0.1556651) {
                if (input[3] < -0.1699317) {
                    if (input[14] < 2.01106) {
                        var56 = -0.13032256;
                    } else {
                        var56 = 0.01794742;
                    }
                } else {
                    if (input[10] < 0.5555911) {
                        var56 = 0.10590153;
                    } else {
                        var56 = -0.0505141;
                    }
                }
            } else {
                if (input[17] < 1.753616) {
                    var56 = -0.07280216;
                } else {
                    if (input[11] < 2.155105) {
                        var56 = 0.18412457;
                    } else {
                        var56 = 0.04334632;
                    }
                }
            }
        } else {
            if (input[3] < -0.1699317) {
                var56 = -0.16364942;
            } else {
                var56 = -0.032299627;
            }
        }
    } else {
        if (input[14] < 2.241046) {
            var56 = 0.10721575;
        } else {
            var56 = -0.011945646;
        }
    }
    var var57;
    if (input[2] < 2.208315) {
        if (input[2] < 2.167256) {
            if (input[6] < -0.1556651) {
                if (input[11] < 2.113538) {
                    if (input[12] < 0.2282198) {
                        var57 = 0.08153466;
                    } else {
                        var57 = -0.037220083;
                    }
                } else {
                    if (input[5] < 2.035368) {
                        var57 = 0.06296167;
                    } else {
                        var57 = -0.14577325;
                    }
                }
            } else {
                if (input[17] < 1.757661) {
                    var57 = -0.05874381;
                } else {
                    if (input[13] < -0.07775131) {
                        var57 = 0.029024689;
                    } else {
                        var57 = 0.1560432;
                    }
                }
            }
        } else {
            if (input[3] < -0.1676013) {
                var57 = -0.1408363;
            } else {
                var57 = -0.028251829;
            }
        }
    } else {
        if (input[14] < 2.241046) {
            var57 = 0.09225984;
        } else {
            var57 = -0.00995669;
        }
    }
    var var58;
    if (input[1] < 0.0917062) {
        if (input[14] < 1.970385) {
            if (input[3] < -0.1368874) {
                var58 = 0.13906355;
            } else {
                var58 = -0.043433815;
            }
        } else {
            if (input[14] < 2.01106) {
                if (input[12] < 0.3056689) {
                    var58 = 0.023728512;
                } else {
                    if (input[13] < -0.08123849) {
                        var58 = -0.035638493;
                    } else {
                        var58 = -0.20513727;
                    }
                }
            } else {
                if (input[6] < -0.03300039) {
                    var58 = 0.07552208;
                } else {
                    var58 = -0.008213366;
                }
            }
        }
    } else {
        if (input[10] < 0.08118371) {
            var58 = 0.14131576;
        } else {
            if (input[7] < -0.02287015) {
                if (input[4] < 0.175192) {
                    if (input[13] < 0.1485437) {
                        var58 = -0.004571483;
                    } else {
                        var58 = -0.13435824;
                    }
                } else {
                    var58 = 0.014829522;
                }
            } else {
                if (input[9] < 0.100744) {
                    var58 = 0.099187426;
                } else {
                    if (input[9] < 0.1923451) {
                        var58 = -0.11148546;
                    } else {
                        var58 = 0.069000356;
                    }
                }
            }
        }
    }
    var var59;
    if (input[7] < 0.0702138) {
        if (input[2] < 2.204721) {
            if (input[14] < 2.078404) {
                if (input[13] < 0.2919175) {
                    if (input[2] < 2.167256) {
                        var59 = 0.03567442;
                    } else {
                        var59 = -0.094444804;
                    }
                } else {
                    var59 = -0.09987323;
                }
            } else {
                var59 = -0.14282347;
            }
        } else {
            if (input[14] < 2.238467) {
                var59 = 0.1037479;
            } else {
                var59 = -0.0034590054;
            }
        }
    } else {
        if (input[6] < -0.1729447) {
            var59 = 0.08523562;
        } else {
            var59 = -0.0016250914;
        }
    }
    var var60;
    if (input[6] < -0.1314955) {
        if (input[11] < 2.159709) {
            if (input[7] < -0.1503583) {
                var60 = 0.08941497;
            } else {
                if (input[3] < -0.1699317) {
                    if (input[12] < 0.3077321) {
                        var60 = -0.011070777;
                    } else {
                        var60 = -0.15657973;
                    }
                } else {
                    if (input[3] < -0.1623473) {
                        var60 = 0.111074224;
                    } else {
                        var60 = -0.04737587;
                    }
                }
            }
        } else {
            var60 = 0.09850934;
        }
    } else {
        if (input[0] < -0.02114974) {
            if (input[6] < -0.05810267) {
                var60 = -0.011158445;
            } else {
                var60 = -0.1438549;
            }
        } else {
            var60 = 0.056020007;
        }
    }
    var var61;
    if (input[16] < 0.09158892) {
        if (input[15] < 0.3146721) {
            if (input[12] < 0.2175839) {
                if (input[0] < -0.3726775) {
                    var61 = -0.06644471;
                } else {
                    var61 = 0.14292727;
                }
            } else {
                if (input[16] < -0.1376664) {
                    var61 = 0.003939661;
                } else {
                    if (input[16] < 0.01505256) {
                        var61 = -0.15063617;
                    } else {
                        var61 = -0.039308324;
                    }
                }
            }
        } else {
            var61 = 0.052823547;
        }
    } else {
        if (input[9] < 0.2371251) {
            if (input[6] < -0.1467531) {
                if (input[7] < -0.0655243) {
                    var61 = 0.11200815;
                } else {
                    if (input[7] < -0.02323334) {
                        var61 = -0.10032349;
                    } else {
                        var61 = 0.04782057;
                    }
                }
            } else {
                var61 = -0.09082606;
            }
        } else {
            var61 = 0.10287329;
        }
    }
    var var62;
    if (input[5] < 1.867732) {
        if (input[0] < -0.09620591) {
            var62 = -0.087973885;
        } else {
            var62 = 0.0028198992;
        }
    } else {
        if (input[17] < 1.776334) {
            if (input[8] < 1.818561) {
                var62 = 0.15295514;
            } else {
                var62 = -0.028230097;
            }
        } else {
            if (input[17] < 2.042351) {
                if (input[8] < 2.045113) {
                    if (input[13] < 0.2811909) {
                        var62 = 0.02276749;
                    } else {
                        var62 = -0.0772325;
                    }
                } else {
                    var62 = -0.09370409;
                }
            } else {
                var62 = 0.05069732;
            }
        }
    }
    var var63;
    if (input[9] < 0.1168059) {
        if (input[0] < -0.3662348) {
            if (input[4] < 0.175192) {
                var63 = -0.08632464;
            } else {
                if (input[0] < -0.37051) {
                    var63 = 0.110129856;
                } else {
                    var63 = -0.057950653;
                }
            }
        } else {
            var63 = 0.13904722;
        }
    } else {
        if (input[8] < 1.866046) {
            if (input[5] < 1.865078) {
                var63 = -0.06459488;
            } else {
                if (input[10] < 0.06496245) {
                    if (input[16] < 0.09158892) {
                        var63 = -0.13926171;
                    } else {
                        var63 = 0.03579845;
                    }
                } else {
                    if (input[17] < 1.776334) {
                        var63 = 0.13671215;
                    } else {
                        var63 = 0.0058874832;
                    }
                }
            }
        } else {
            if (input[15] < 0.2884973) {
                var63 = -0.13372529;
            } else {
                var63 = 0.018535702;
            }
        }
    }
    var var64;
    if (input[12] < 0.2282198) {
        if (input[11] < 2.106243) {
            if (input[4] < 0.1443314) {
                var64 = 0.0067602326;
            } else {
                var64 = 0.108906664;
            }
        } else {
            if (input[10] < 0.3919313) {
                var64 = 0.07017837;
            } else {
                var64 = -0.08368499;
            }
        }
    } else {
        if (input[5] < 1.873271) {
            var64 = -0.087364584;
        } else {
            if (input[9] < 0.1923451) {
                var64 = -0.088511124;
            } else {
                if (input[14] < 1.970385) {
                    var64 = 0.13816196;
                } else {
                    if (input[1] < 0.0917062) {
                        var64 = -0.05287056;
                    } else {
                        var64 = 0.058644358;
                    }
                }
            }
        }
    }
    var var65;
    if (input[4] < -0.1746255) {
        var65 = 0.05645819;
    } else {
        if (input[4] < -0.0580909) {
            if (input[10] < 0.0601885) {
                var65 = -0.009600144;
            } else {
                var65 = -0.1200974;
            }
        } else {
            if (input[0] < -0.100632) {
                if (input[0] < -0.1651388) {
                    if (input[15] < 0.02563756) {
                        var65 = -0.026016993;
                    } else {
                        var65 = 0.09114514;
                    }
                } else {
                    if (input[8] < 1.783396) {
                        var65 = 0.003595758;
                    } else {
                        var65 = -0.09908745;
                    }
                }
            } else {
                if (input[3] < -0.1710825) {
                    var65 = -0.015929163;
                } else {
                    var65 = 0.105120264;
                }
            }
        }
    }
    var var66;
    if (input[15] < 0.4054182) {
        if (input[15] < 0.3146721) {
            if (input[6] < -0.170787) {
                if (input[0] < -0.3656934) {
                    if (input[12] < -0.03331596) {
                        var66 = 0.040442795;
                    } else {
                        var66 = -0.07827875;
                    }
                } else {
                    var66 = 0.091153435;
                }
            } else {
                if (input[3] < -0.1824108) {
                    var66 = 0.04094653;
                } else {
                    if (input[13] < -0.07330759) {
                        var66 = -0.010128364;
                    } else {
                        var66 = -0.11158779;
                    }
                }
            }
        } else {
            if (input[7] < 0.05732803) {
                var66 = 0.10568129;
            } else {
                var66 = -0.010066666;
            }
        }
    } else {
        var66 = -0.058594454;
    }
    var var67;
    if (input[7] < 0.0702138) {
        if (input[13] < 0.2919175) {
            if (input[8] < 2.045113) {
                if (input[1] < 0.0917062) {
                    if (input[14] < 2.01106) {
                        var67 = -0.04302416;
                    } else {
                        var67 = 0.04667481;
                    }
                } else {
                    if (input[2] < 1.988044) {
                        var67 = -0.033827383;
                    } else {
                        var67 = 0.115796395;
                    }
                }
            } else {
                var67 = -0.07011544;
            }
        } else {
            var67 = -0.08073654;
        }
    } else {
        var67 = 0.048833787;
    }
    var var68;
    if (input[0] < -0.09919777) {
        if (input[10] < 0.06496245) {
            if (input[16] < 0.09878774) {
                var68 = -0.1336842;
            } else {
                var68 = -0.0002744317;
            }
        } else {
            if (input[10] < 0.06882242) {
                var68 = 0.10176469;
            } else {
                if (input[14] < 2.01341) {
                    if (input[3] < -0.1699317) {
                        var68 = -0.08427456;
                    } else {
                        var68 = 0.018015614;
                    }
                } else {
                    if (input[11] < 2.11717) {
                        var68 = 0.07693432;
                    } else {
                        var68 = -0.024033837;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.1836756) {
            if (input[7] < -0.2775567) {
                var68 = 0.030715195;
            } else {
                var68 = -0.0623133;
            }
        } else {
            var68 = 0.098563746;
        }
    }
    var var69;
    if (input[16] < 0.1465969) {
        if (input[14] < 1.970385) {
            if (input[8] < 1.730234) {
                var69 = -0.006694139;
            } else {
                var69 = 0.081331104;
            }
        } else {
            if (input[10] < 0.06496245) {
                if (input[0] < -0.09919777) {
                    var69 = -0.15686691;
                } else {
                    var69 = 0.032531355;
                }
            } else {
                if (input[8] < 2.045113) {
                    if (input[6] < -0.1467531) {
                        var69 = -0.01667829;
                    } else {
                        var69 = 0.10388832;
                    }
                } else {
                    var69 = -0.06998374;
                }
            }
        }
    } else {
        if (input[14] < 1.961267) {
            if (input[17] < 1.776334) {
                var69 = 0.029230652;
            } else {
                var69 = -0.056292478;
            }
        } else {
            if (input[5] < 2.086572) {
                var69 = 0.1357965;
            } else {
                var69 = -0.024246939;
            }
        }
    }
    var var70;
    if (input[12] < 0.2282198) {
        if (input[11] < 2.106243) {
            if (input[4] < 0.1443314) {
                var70 = 0.022342741;
            } else {
                var70 = 0.09603686;
            }
        } else {
            if (input[17] < 1.980811) {
                var70 = -0.093859315;
            } else {
                var70 = 0.05689804;
            }
        }
    } else {
        if (input[16] < 0.09158892) {
            if (input[15] < 0.2833481) {
                var70 = -0.10975168;
            } else {
                if (input[6] < -0.1467531) {
                    var70 = -0.050992172;
                } else {
                    var70 = 0.051552046;
                }
            }
        } else {
            if (input[6] < -0.1556651) {
                if (input[14] < 1.9153) {
                    var70 = 0.022234354;
                } else {
                    var70 = -0.0819565;
                }
            } else {
                var70 = 0.07991617;
            }
        }
    }
    var var71;
    if (input[6] < -0.05810267) {
        if (input[12] < 0.3386326) {
            if (input[2] < 2.128685) {
                if (input[7] < 0.0702138) {
                    if (input[1] < 0.3856762) {
                        var71 = 0.013077181;
                    } else {
                        var71 = -0.06337761;
                    }
                } else {
                    var71 = 0.05532575;
                }
            } else {
                if (input[13] < -0.06502916) {
                    if (input[1] < 0.08978257) {
                        var71 = 0.06466098;
                    } else {
                        var71 = -0.057647396;
                    }
                } else {
                    var71 = 0.14952981;
                }
            }
        } else {
            var71 = -0.055406485;
        }
    } else {
        var71 = -0.051607627;
    }
    var var72;
    if (input[2] < 2.167256) {
        if (input[7] < -0.1208126) {
            if (input[13] < -0.1137752) {
                var72 = -0.017891876;
            } else {
                if (input[2] < 2.16638) {
                    if (input[17] < 1.779853) {
                        var72 = 0.028175328;
                    } else {
                        var72 = 0.13304996;
                    }
                } else {
                    var72 = -0.01492111;
                }
            }
        } else {
            if (input[4] < 0.175192) {
                var72 = -0.086817116;
            } else {
                if (input[3] < -0.3998991) {
                    var72 = 0.08665788;
                } else {
                    if (input[11] < 1.89105) {
                        var72 = 0.03508479;
                    } else {
                        var72 = -0.07313001;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.204721) {
            var72 = -0.10561053;
        } else {
            var72 = 0.034698978;
        }
    }
    var var73;
    if (input[12] < 0.2175839) {
        if (input[10] < 0.3908162) {
            var73 = 0.08289996;
        } else {
            if (input[11] < 2.113538) {
                var73 = 0.033071004;
            } else {
                var73 = -0.067066416;
            }
        }
    } else {
        if (input[5] < 1.867732) {
            var73 = -0.07733684;
        } else {
            if (input[8] < 1.866046) {
                if (input[1] < 0.0917062) {
                    if (input[10] < 0.06496245) {
                        var73 = -0.056593064;
                    } else {
                        var73 = 0.055963997;
                    }
                } else {
                    if (input[13] < 0.2811909) {
                        var73 = 0.1190706;
                    } else {
                        var73 = -0.01592615;
                    }
                }
            } else {
                if (input[15] < 0.2901917) {
                    var73 = -0.08767071;
                } else {
                    var73 = 0.010345181;
                }
            }
        }
    }
    var var74;
    if (input[4] < -0.1746255) {
        var74 = 0.04990466;
    } else {
        if (input[4] < -0.0580909) {
            var74 = -0.07206508;
        } else {
            if (input[0] < -0.100632) {
                if (input[12] < 0.246355) {
                    if (input[17] < 1.891224) {
                        var74 = 0.06660304;
                    } else {
                        var74 = -0.021076458;
                    }
                } else {
                    if (input[6] < -0.1556651) {
                        var74 = -0.08814101;
                    } else {
                        var74 = 0.013098382;
                    }
                }
            } else {
                if (input[3] < -0.1710825) {
                    var74 = -0.0031097606;
                } else {
                    var74 = 0.09173409;
                }
            }
        }
    }
    var var75;
    if (input[9] < 0.247187) {
        if (input[6] < -0.1314955) {
            if (input[7] < -0.1224815) {
                if (input[12] < 0.3056689) {
                    var75 = 0.106171995;
                } else {
                    var75 = 0.013339115;
                }
            } else {
                if (input[4] < 0.175192) {
                    var75 = -0.056397434;
                } else {
                    if (input[13] < 0.2791338) {
                        var75 = 0.06767796;
                    } else {
                        var75 = -0.0151374275;
                    }
                }
            }
        } else {
            var75 = -0.04681746;
        }
    } else {
        if (input[2] < 2.204721) {
            var75 = -0.07030071;
        } else {
            var75 = 0.040045142;
        }
    }
    var var76;
    if (input[2] < 2.167256) {
        if (input[6] < -0.1556651) {
            if (input[11] < 2.11717) {
                if (input[13] < 0.274725) {
                    if (input[4] < 0.175192) {
                        var76 = -0.011420465;
                    } else {
                        var76 = 0.10273322;
                    }
                } else {
                    if (input[9] < 0.1923451) {
                        var76 = -0.060645297;
                    } else {
                        var76 = 0.015578243;
                    }
                }
            } else {
                var76 = -0.072808154;
            }
        } else {
            if (input[17] < 1.738085) {
                var76 = -0.032051746;
            } else {
                if (input[12] < 0.3077321) {
                    var76 = 0.12703687;
                } else {
                    var76 = 0.014876739;
                }
            }
        }
    } else {
        if (input[2] < 2.208315) {
            var76 = -0.09235166;
        } else {
            var76 = 0.033482414;
        }
    }
    var var77;
    if (input[4] < -0.1746255) {
        var77 = 0.045984272;
    } else {
        if (input[3] < -0.1623473) {
            if (input[16] < 0.3343667) {
                if (input[10] < 0.3930976) {
                    if (input[16] < -0.07334617) {
                        var77 = -0.044685133;
                    } else {
                        var77 = 0.045850504;
                    }
                } else {
                    var77 = -0.08250501;
                }
            } else {
                var77 = 0.07307135;
            }
        } else {
            if (input[15] < 0.3204894) {
                var77 = -0.096206866;
            } else {
                var77 = -0.0007690942;
            }
        }
    }
    var var78;
    if (input[17] < 1.712063) {
        var78 = 0.047854785;
    } else {
        if (input[3] < -0.1623473) {
            if (input[3] < -0.1699317) {
                if (input[14] < 2.01106) {
                    if (input[0] < -0.1001669) {
                        var78 = -0.09961609;
                    } else {
                        var78 = 0.025635332;
                    }
                } else {
                    if (input[10] < 0.3908162) {
                        var78 = 0.08103748;
                    } else {
                        var78 = -0.017122762;
                    }
                }
            } else {
                var78 = 0.06836808;
            }
        } else {
            if (input[2] < 2.204721) {
                var78 = -0.097738475;
            } else {
                var78 = 0.015191543;
            }
        }
    }
    var var79;
    if (input[2] < 2.167256) {
        if (input[6] < -0.1556651) {
            if (input[7] < 0.0702138) {
                if (input[17] < 1.776334) {
                    var79 = 0.043172732;
                } else {
                    if (input[12] < -0.03331596) {
                        var79 = 0.008467551;
                    } else {
                        var79 = -0.09031117;
                    }
                }
            } else {
                var79 = 0.06502465;
            }
        } else {
            if (input[17] < 1.738085) {
                var79 = -0.025260212;
            } else {
                if (input[12] < 0.3077321) {
                    var79 = 0.10596269;
                } else {
                    var79 = 0.016658852;
                }
            }
        }
    } else {
        if (input[11] < 2.24582) {
            var79 = -0.08939397;
        } else {
            var79 = 0.018318921;
        }
    }
    var var80;
    if (input[12] < 0.2175839) {
        if (input[0] < -0.366821) {
            if (input[4] < 0.1764174) {
                var80 = -0.03994951;
            } else {
                var80 = 0.025663787;
            }
        } else {
            var80 = 0.07612674;
        }
    } else {
        if (input[16] < 0.1664344) {
            if (input[12] < 0.3145737) {
                if (input[11] < 2.155105) {
                    if (input[2] < 1.947101) {
                        var80 = -0.06146927;
                    } else {
                        var80 = 0.04823438;
                    }
                } else {
                    var80 = -0.114083745;
                }
            } else {
                if (input[8] < 1.844847) {
                    var80 = 0.05566656;
                } else {
                    var80 = -0.04664451;
                }
            }
        } else {
            var80 = 0.03704191;
        }
    }
    var var81;
    if (input[6] < -0.1762814) {
        if (input[15] < 0.02563756) {
            if (input[2] < 2.094572) {
                var81 = -0.052418727;
            } else {
                var81 = 0.03040383;
            }
        } else {
            var81 = 0.0732508;
        }
    } else {
        if (input[2] < 2.167256) {
            if (input[5] < 1.865078) {
                var81 = -0.05218916;
            } else {
                if (input[10] < 0.06496245) {
                    var81 = -0.030237384;
                } else {
                    if (input[13] < 0.2811909) {
                        var81 = 0.09893437;
                    } else {
                        var81 = -0.006914309;
                    }
                }
            }
        } else {
            if (input[15] < 0.2833481) {
                var81 = -0.09748942;
            } else {
                var81 = 0.010422828;
            }
        }
    }
    var var82;
    if (input[4] < -0.1746255) {
        var82 = 0.048044916;
    } else {
        if (input[13] < -0.09427895) {
            var82 = -0.06651037;
        } else {
            if (input[0] < -0.100632) {
                if (input[12] < 0.246355) {
                    if (input[1] < 0.3988909) {
                        var82 = -0.01245545;
                    } else {
                        var82 = 0.06305897;
                    }
                } else {
                    if (input[16] < 0.149761) {
                        var82 = -0.08741243;
                    } else {
                        var82 = -0.0036939709;
                    }
                }
            } else {
                if (input[2] < 2.16638) {
                    var82 = 0.099713676;
                } else {
                    var82 = -0.013543674;
                }
            }
        }
    }
    var var83;
    if (input[9] < 0.1143521) {
        if (input[10] < 0.3912145) {
            var83 = 0.06648766;
        } else {
            var83 = -0.0023676716;
        }
    } else {
        if (input[14] < 1.999471) {
            if (input[9] < 0.2371251) {
                if (input[6] < -0.1467531) {
                    if (input[1] < 0.5103135) {
                        var83 = 0.059720516;
                    } else {
                        var83 = -0.039292257;
                    }
                } else {
                    var83 = -0.061529435;
                }
            } else {
                var83 = 0.058808178;
            }
        } else {
            if (input[12] < 0.3056689) {
                var83 = -0.09420958;
            } else {
                var83 = 0.0017511357;
            }
        }
    }
    var var84;
    if (input[4] < -0.1746255) {
        var84 = 0.04293554;
    } else {
        if (input[4] < -0.0580909) {
            var84 = -0.07078635;
        } else {
            if (input[0] < -0.100632) {
                if (input[5] < 2.037452) {
                    if (input[1] < 0.3938462) {
                        var84 = -0.08362049;
                    } else {
                        var84 = 0.0061455145;
                    }
                } else {
                    if (input[1] < 0.3856762) {
                        var84 = 0.0731485;
                    } else {
                        var84 = -0.038635366;
                    }
                }
            } else {
                if (input[3] < -0.1710825) {
                    var84 = -0.018902387;
                } else {
                    var84 = 0.08532199;
                }
            }
        }
    }
    var var85;
    if (input[8] < 2.045113) {
        if (input[13] < 0.274725) {
            if (input[1] < 0.0917062) {
                if (input[14] < 1.970385) {
                    var85 = 0.04249931;
                } else {
                    if (input[14] < 2.01106) {
                        var85 = -0.07674039;
                    } else {
                        var85 = 0.0298678;
                    }
                }
            } else {
                if (input[6] < -0.3235544) {
                    var85 = 0.01243846;
                } else {
                    var85 = 0.11813855;
                }
            }
        } else {
            var85 = -0.04019656;
        }
    } else {
        var85 = -0.035441656;
    }
    var var86;
    if (input[9] < 0.1093898) {
        if (input[7] < -0.02287015) {
            var86 = -0.0067589744;
        } else {
            var86 = 0.068965785;
        }
    } else {
        if (input[8] < 1.866046) {
            if (input[5] < 1.86122) {
                var86 = -0.044870064;
            } else {
                if (input[9] < 0.247187) {
                    if (input[7] < 0.05732803) {
                        var86 = 0.07512596;
                    } else {
                        var86 = -0.011929533;
                    }
                } else {
                    var86 = -0.02866988;
                }
            }
        } else {
            var86 = -0.06030886;
        }
    }
    var var87;
    if (input[12] < 0.2282198) {
        if (input[11] < 2.113538) {
            if (input[17] < 1.921944) {
                var87 = 0.0919052;
            } else {
                var87 = -0.008116261;
            }
        } else {
            var87 = -0.030442348;
        }
    } else {
        if (input[16] < 0.1664344) {
            if (input[15] < 0.2557863) {
                var87 = -0.07329583;
            } else {
                if (input[6] < -0.1467531) {
                    var87 = -0.04217538;
                } else {
                    var87 = 0.042939138;
                }
            }
        } else {
            var87 = 0.027731905;
        }
    }
    var var88;
    if (input[12] < 0.001766866) {
        if (input[17] < 1.96174) {
            var88 = 0.003042974;
        } else {
            var88 = 0.044899426;
        }
    } else {
        if (input[7] < -0.1218338) {
            if (input[3] < -0.1368874) {
                if (input[14] < 1.993289) {
                    var88 = 0.068588175;
                } else {
                    var88 = -0.009393793;
                }
            } else {
                var88 = -0.045016922;
            }
        } else {
            if (input[1] < 0.3938462) {
                var88 = -0.093364194;
            } else {
                if (input[10] < 0.55446) {
                    var88 = 0.03139776;
                } else {
                    var88 = -0.018234825;
                }
            }
        }
    }
    var var89;
    if (input[2] < 2.208315) {
        if (input[2] < 2.167256) {
            if (input[6] < -0.1556651) {
                if (input[11] < 2.11717) {
                    if (input[13] < 0.274725) {
                        var89 = 0.04969575;
                    } else {
                        var89 = -0.029144613;
                    }
                } else {
                    var89 = -0.06626635;
                }
            } else {
                if (input[17] < 1.757661) {
                    var89 = -0.022182269;
                } else {
                    var89 = 0.07681453;
                }
            }
        } else {
            var89 = -0.0779962;
        }
    } else {
        var89 = 0.040912315;
    }
    var var90;
    if (input[4] < -0.1746255) {
        var90 = 0.04209721;
    } else {
        if (input[3] < -0.1623473) {
            if (input[16] < 0.3698858) {
                if (input[7] < -0.1218338) {
                    if (input[16] < 0.01505256) {
                        var90 = -0.019401776;
                    } else {
                        var90 = 0.06318138;
                    }
                } else {
                    if (input[3] < -0.3998991) {
                        var90 = 0.01429646;
                    } else {
                        var90 = -0.08322923;
                    }
                }
            } else {
                var90 = 0.07035474;
            }
        } else {
            var90 = -0.0601874;
        }
    }
    var var91;
    if (input[1] < 0.3988909) {
        if (input[3] < -0.3974801) {
            var91 = -0.054811828;
        } else {
            if (input[9] < 0.2123637) {
                var91 = 0.06906975;
            } else {
                if (input[5] < 2.033378) {
                    var91 = -0.07138247;
                } else {
                    if (input[4] < -0.0580909) {
                        var91 = -0.03620185;
                    } else {
                        var91 = 0.03764981;
                    }
                }
            }
        }
    } else {
        if (input[17] < 1.812502) {
            var91 = -0.010448696;
        } else {
            var91 = 0.06314762;
        }
    }
    var var92;
    if (input[9] < 0.1200345) {
        if (input[0] < -0.3700358) {
            var92 = -0.004397955;
        } else {
            var92 = 0.055340115;
        }
    } else {
        if (input[15] < 0.3146721) {
            if (input[14] < 1.993289) {
                if (input[9] < 0.2371251) {
                    var92 = -0.02982818;
                } else {
                    var92 = 0.042289868;
                }
            } else {
                if (input[12] < 0.3056689) {
                    var92 = -0.08260982;
                } else {
                    var92 = -0.016527873;
                }
            }
        } else {
            if (input[7] < 0.05732803) {
                var92 = 0.06401929;
            } else {
                var92 = -0.031074313;
            }
        }
    }
    var var93;
    if (input[4] < -0.1746255) {
        var93 = 0.039807595;
    } else {
        if (input[4] < -0.0580909) {
            var93 = -0.054802813;
        } else {
            if (input[10] < 0.06496245) {
                var93 = -0.03794428;
            } else {
                if (input[0] < -0.1039892) {
                    if (input[7] < 0.0702138) {
                        var93 = -0.02360096;
                    } else {
                        var93 = 0.034281593;
                    }
                } else {
                    var93 = 0.08022128;
                }
            }
        }
    }
    var var94;
    if (input[12] < 0.2282198) {
        if (input[11] < 2.106243) {
            var94 = 0.05988712;
        } else {
            var94 = -0.013696104;
        }
    } else {
        if (input[16] < 0.149761) {
            if (input[15] < 0.3146721) {
                if (input[16] < 0.01505256) {
                    var94 = -0.06565897;
                } else {
                    var94 = -0.00885152;
                }
            } else {
                var94 = 0.02395391;
            }
        } else {
            var94 = 0.02465654;
        }
    }
    var var95;
    if (input[12] < 0.001766866) {
        var95 = 0.032836974;
    } else {
        if (input[4] < -0.1746255) {
            var95 = 0.03825062;
        } else {
            if (input[3] < -0.1623473) {
                if (input[3] < -0.1699317) {
                    if (input[7] < -0.1265331) {
                        var95 = 0.050621156;
                    } else {
                        var95 = -0.065676704;
                    }
                } else {
                    var95 = 0.05028345;
                }
            } else {
                var95 = -0.064116456;
            }
        }
    }
    var var96;
    if (input[2] < 2.208315) {
        if (input[8] < 1.854708) {
            if (input[1] < 0.5103135) {
                if (input[1] < 0.0917062) {
                    if (input[12] < 0.3056689) {
                        var96 = 0.03234551;
                    } else {
                        var96 = -0.04594174;
                    }
                } else {
                    var96 = 0.079546586;
                }
            } else {
                var96 = -0.03288897;
            }
        } else {
            if (input[11] < 2.11717) {
                var96 = 0.01650102;
            } else {
                var96 = -0.089005545;
            }
        }
    } else {
        var96 = 0.039408956;
    }
    var var97;
    if (input[14] < 2.01341) {
        if (input[3] < -0.1699317) {
            if (input[6] < -0.1556651) {
                var97 = -0.08499059;
            } else {
                var97 = 0.016232248;
            }
        } else {
            if (input[3] < -0.1623473) {
                var97 = 0.061077215;
            } else {
                var97 = -0.020985749;
            }
        }
    } else {
        if (input[8] < 2.045113) {
            if (input[17] < 1.871515) {
                var97 = -0.005340119;
            } else {
                var97 = 0.07943015;
            }
        } else {
            var97 = -0.023663668;
        }
    }
    var var98;
    if (input[9] < 0.1200345) {
        if (input[10] < 0.3919313) {
            var98 = 0.056058627;
        } else {
            var98 = -0.0036568546;
        }
    } else {
        if (input[2] < 2.167256) {
            if (input[14] < 1.978583) {
                if (input[11] < 1.89105) {
                    var98 = 0.012482259;
                } else {
                    var98 = -0.056765594;
                }
            } else {
                var98 = 0.04591308;
            }
        } else {
            var98 = -0.051558558;
        }
    }
    var var99;
    if (input[2] < 2.204721) {
        if (input[9] < 0.247187) {
            if (input[2] < 2.128685) {
                if (input[11] < 1.89105) {
                    if (input[5] < 1.86122) {
                        var99 = -0.028573608;
                    } else {
                        var99 = 0.053993467;
                    }
                } else {
                    if (input[12] < -0.01364995) {
                        var99 = 0.0045514167;
                    } else {
                        var99 = -0.06490154;
                    }
                }
            } else {
                var99 = 0.04051707;
            }
        } else {
            var99 = -0.05205494;
        }
    } else {
        var99 = 0.03612818;
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
