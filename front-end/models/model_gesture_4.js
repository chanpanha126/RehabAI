// XGBoost Model for Gesture 4: ShoulderAbductionLeft
// Accuracy: 99.73%
// Trained on 23735 samples

export function evaluateGesture4(features) {
function score(input) {
    var var0;
    if (input[5] < 2.10261) {
        if (input[11] < 2.156058) {
            if (input[10] < 0.420561) {
                if (input[2] < 1.948392) {
                    if (input[8] < 1.882046) {
                        var0 = -0.59750783;
                    } else {
                        var0 = 0.3;
                    }
                } else {
                    if (input[11] < 2.123226) {
                        var0 = 0.4463545;
                    } else {
                        var0 = 0.041301064;
                    }
                }
            } else {
                if (input[5] < 2.06222) {
                    if (input[7] < -0.03541327) {
                        var0 = 0.23076925;
                    } else {
                        var0 = 0.59152764;
                    }
                } else {
                    if (input[2] < 2.003217) {
                        var0 = -0.5566265;
                    } else {
                        var0 = -0.264;
                    }
                }
            }
        } else {
            if (input[11] < 2.158105) {
                if (input[2] < 2.124101) {
                    var0 = 0.34285718;
                } else {
                    if (input[10] < 0.2073801) {
                        var0 = 0.0;
                    } else {
                        var0 = -0.5314286;
                    }
                }
            } else {
                var0 = -0.59770113;
            }
        }
    } else {
        if (input[7] < -0.2985263) {
            if (input[8] < 2.301894) {
                if (input[3] < -0.4706574) {
                    var0 = -0.5710843;
                } else {
                    if (input[9] < 0.3648999) {
                        var0 = 0.4884956;
                    } else {
                        var0 = -0.30169493;
                    }
                }
            } else {
                if (input[8] < 2.510136) {
                    if (input[5] < 2.375968) {
                        var0 = 0.44000003;
                    } else {
                        var0 = -0.5900827;
                    }
                } else {
                    if (input[0] < -0.2822151) {
                        var0 = 0.5225807;
                    } else {
                        var0 = -0.3;
                    }
                }
            }
        } else {
            if (input[16] < -0.2876481) {
                if (input[8] < 2.289286) {
                    if (input[0] < -0.1112476) {
                        var0 = 0.5813954;
                    } else {
                        var0 = -0.40000004;
                    }
                } else {
                    if (input[5] < 2.634625) {
                        var0 = -0.5409836;
                    } else {
                        var0 = 0.3;
                    }
                }
            } else {
                if (input[4] < -0.06616273) {
                    if (input[2] < 2.635611) {
                        var0 = 0.5314741;
                    } else {
                        var0 = -0.53846157;
                    }
                } else {
                    if (input[15] < 0.7519654) {
                        var0 = 0.589242;
                    } else {
                        var0 = 0.47083333;
                    }
                }
            }
        }
    }
    var var1;
    if (input[5] < 2.094163) {
        if (input[4] < 0.1762872) {
            if (input[17] < 1.9945) {
                if (input[5] < 2.087682) {
                    if (input[10] < 0.4244364) {
                        var1 = -0.4886651;
                    } else {
                        var1 = 0.4342477;
                    }
                } else {
                    if (input[3] < -0.1839669) {
                        var1 = 0.32223618;
                    } else {
                        var1 = -0.22782262;
                    }
                }
            } else {
                if (input[11] < 2.136796) {
                    if (input[2] < 1.938712) {
                        var1 = -0.44774765;
                    } else {
                        var1 = 0.33345535;
                    }
                } else {
                    if (input[5] < 2.088304) {
                        var1 = -0.48599237;
                    } else {
                        var1 = 0.1213136;
                    }
                }
            }
        } else {
            if (input[11] < 2.124135) {
                if (input[5] < 2.06222) {
                    if (input[4] < 0.1782835) {
                        var1 = 0.0915043;
                    } else {
                        var1 = 0.45495337;
                    }
                } else {
                    if (input[2] < 2.003217) {
                        var1 = -0.42826685;
                    } else {
                        var1 = -0.15595326;
                    }
                }
            } else {
                if (input[13] < -0.04571047) {
                    if (input[3] < -0.4191972) {
                        var1 = 0.42526612;
                    } else {
                        var1 = -0.35460776;
                    }
                } else {
                    if (input[14] < 2.09995) {
                        var1 = -0.35360518;
                    } else {
                        var1 = 0.5178257;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.2985263) {
            if (input[8] < 2.301894) {
                if (input[11] < 2.322301) {
                    if (input[6] < -0.1584969) {
                        var1 = 0.20502433;
                    } else {
                        var1 = -0.5053409;
                    }
                } else {
                    if (input[3] < -0.4706574) {
                        var1 = -0.4450517;
                    } else {
                        var1 = 0.25968608;
                    }
                }
            } else {
                if (input[8] < 2.510136) {
                    if (input[5] < 2.375968) {
                        var1 = 0.35700548;
                    } else {
                        var1 = -0.4578991;
                    }
                } else {
                    if (input[9] < 0.04186686) {
                        var1 = 0.41035572;
                    } else {
                        var1 = -0.1804169;
                    }
                }
            }
        } else {
            if (input[4] < -0.05914892) {
                if (input[6] < -0.2129865) {
                    if (input[5] < 2.611917) {
                        var1 = 0.40660438;
                    } else {
                        var1 = -0.29292804;
                    }
                } else {
                    if (input[15] < 0.3646882) {
                        var1 = 0.24169737;
                    } else {
                        var1 = -0.43403146;
                    }
                }
            } else {
                if (input[13] < -0.07025629) {
                    if (input[11] < 2.1354) {
                        var1 = 0.35265708;
                    } else {
                        var1 = -0.4240513;
                    }
                } else {
                    if (input[0] < -0.5918816) {
                        var1 = -0.34423804;
                    } else {
                        var1 = 0.45169702;
                    }
                }
            }
        }
    }
    var var2;
    if (input[5] < 2.094163) {
        if (input[4] < 0.1762872) {
            if (input[17] < 1.9945) {
                if (input[5] < 2.085058) {
                    if (input[10] < 0.4244364) {
                        var2 = -0.42475432;
                    } else {
                        var2 = 0.37394804;
                    }
                } else {
                    if (input[0] < -0.1387572) {
                        var2 = 0.16185725;
                    } else {
                        var2 = -0.34303558;
                    }
                }
            } else {
                if (input[11] < 2.152424) {
                    if (input[0] < -0.1179881) {
                        var2 = 0.055056825;
                    } else {
                        var2 = 0.43606332;
                    }
                } else {
                    if (input[3] < -0.1861245) {
                        var2 = 0.43045017;
                    } else {
                        var2 = -0.4135491;
                    }
                }
            }
        } else {
            if (input[11] < 2.124135) {
                if (input[8] < 2.079515) {
                    if (input[4] < 0.1793765) {
                        var2 = 0.11151135;
                    } else {
                        var2 = 0.39529273;
                    }
                } else {
                    if (input[11] < 2.080573) {
                        var2 = -0.4050549;
                    } else {
                        var2 = 0.36080012;
                    }
                }
            } else {
                if (input[13] < -0.04571047) {
                    if (input[15] < 0.2652703) {
                        var2 = -0.29121152;
                    } else {
                        var2 = 0.16427934;
                    }
                } else {
                    if (input[14] < 2.102722) {
                        var2 = -0.17988475;
                    } else {
                        var2 = 0.42074263;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.2985263) {
            if (input[8] < 2.301894) {
                if (input[9] < 0.3648999) {
                    if (input[3] < -0.4706574) {
                        var2 = -0.38370737;
                    } else {
                        var2 = 0.3289336;
                    }
                } else {
                    if (input[5] < 2.373999) {
                        var2 = -0.46792474;
                    } else {
                        var2 = -0.07215227;
                    }
                }
            } else {
                if (input[8] < 2.510136) {
                    if (input[5] < 2.375968) {
                        var2 = 0.30551153;
                    } else {
                        var2 = -0.39652565;
                    }
                } else {
                    if (input[10] < 0.1199708) {
                        var2 = -0.17413773;
                    } else {
                        var2 = 0.355413;
                    }
                }
            }
        } else {
            if (input[4] < -0.05745028) {
                if (input[3] < -0.1836001) {
                    if (input[17] < 2.660752) {
                        var2 = 0.38520017;
                    } else {
                        var2 = 0.052194573;
                    }
                } else {
                    if (input[11] < 2.153508) {
                        var2 = 0.20632988;
                    } else {
                        var2 = -0.47560176;
                    }
                }
            } else {
                if (input[13] < -0.07025629) {
                    if (input[11] < 2.1354) {
                        var2 = 0.2967237;
                    } else {
                        var2 = -0.35317695;
                    }
                } else {
                    if (input[0] < -0.5918816) {
                        var2 = -0.2958516;
                    } else {
                        var2 = 0.3881662;
                    }
                }
            }
        }
    }
    var var3;
    if (input[5] < 2.090173) {
        if (input[11] < 2.142235) {
            if (input[10] < 0.464147) {
                if (input[17] < 2.007081) {
                    if (input[16] < 0.5446725) {
                        var3 = -0.34439492;
                    } else {
                        var3 = 0.5528424;
                    }
                } else {
                    if (input[12] < 0.2663945) {
                        var3 = 0.023398902;
                    } else {
                        var3 = 0.3880041;
                    }
                }
            } else {
                if (input[5] < 2.050033) {
                    var3 = 0.3787582;
                } else {
                    if (input[11] < 2.080573) {
                        var3 = -0.35608637;
                    } else {
                        var3 = 0.32061452;
                    }
                }
            }
        } else {
            if (input[5] < 2.089453) {
                if (input[5] < 2.085058) {
                    if (input[11] < 2.156058) {
                        var3 = -0.47217038;
                    } else {
                        var3 = -0.36406046;
                    }
                } else {
                    if (input[2] < 2.125799) {
                        var3 = -0.03996355;
                    } else {
                        var3 = -0.42915982;
                    }
                }
            } else {
                if (input[2] < 2.127803) {
                    if (input[14] < 2.069917) {
                        var3 = -0.24960276;
                    } else {
                        var3 = 0.39644238;
                    }
                } else {
                    var3 = -0.36200425;
                }
            }
        }
    } else {
        if (input[7] < -0.2985263) {
            if (input[8] < 2.301894) {
                if (input[6] < -0.1350729) {
                    if (input[3] < -0.4706574) {
                        var3 = -0.34636396;
                    } else {
                        var3 = 0.13907155;
                    }
                } else {
                    var3 = -0.44057602;
                }
            } else {
                if (input[8] < 2.510136) {
                    if (input[5] < 2.375968) {
                        var3 = 0.2689534;
                    } else {
                        var3 = -0.36093807;
                    }
                } else {
                    if (input[10] < 0.1199708) {
                        var3 = -0.14862514;
                    } else {
                        var3 = 0.31529778;
                    }
                }
            }
        } else {
            if (input[4] < -0.05914892) {
                if (input[3] < -0.1839669) {
                    if (input[5] < 2.617466) {
                        var3 = 0.3087848;
                    } else {
                        var3 = -0.3453241;
                    }
                } else {
                    if (input[2] < 2.12959) {
                        var3 = 0.31651208;
                    } else {
                        var3 = -0.35773927;
                    }
                }
            } else {
                if (input[0] < -0.5804332) {
                    var3 = -0.30160293;
                } else {
                    if (input[17] < 2.418927) {
                        var3 = 0.3000471;
                    } else {
                        var3 = 0.37079024;
                    }
                }
            }
        }
    }
    var var4;
    if (input[5] < 2.11378) {
        if (input[11] < 2.153508) {
            if (input[10] < 0.464147) {
                if (input[2] < 1.942883) {
                    if (input[13] < 0.2722498) {
                        var4 = -0.37054625;
                    } else {
                        var4 = 0.17242417;
                    }
                } else {
                    if (input[13] < -0.06496227) {
                        var4 = -0.27330795;
                    } else {
                        var4 = 0.121737264;
                    }
                }
            } else {
                if (input[8] < 2.079515) {
                    var4 = 0.3520958;
                } else {
                    if (input[11] < 2.075017) {
                        var4 = -0.36189932;
                    } else {
                        var4 = 0.14179982;
                    }
                }
            }
        } else {
            if (input[3] < -0.1861245) {
                if (input[2] < 2.135411) {
                    var4 = 0.35670528;
                } else {
                    var4 = -0.5348302;
                }
            } else {
                if (input[2] < 2.125456) {
                    if (input[0] < -0.1387572) {
                        var4 = 0.40948924;
                    } else {
                        var4 = -0.32711297;
                    }
                } else {
                    if (input[3] < -0.1836001) {
                        var4 = -0.5493059;
                    } else {
                        var4 = -0.35635576;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.2878156) {
            if (input[11] < 2.324035) {
                if (input[0] < -0.2643903) {
                    var4 = 0.2228848;
                } else {
                    if (input[13] < 0.4668042) {
                        var4 = -0.37712672;
                    } else {
                        var4 = -0.08269042;
                    }
                }
            } else {
                if (input[2] < 2.356388) {
                    if (input[6] < -0.1350729) {
                        var4 = 0.27483863;
                    } else {
                        var4 = -0.3541252;
                    }
                } else {
                    if (input[8] < 2.259222) {
                        var4 = 0.27554557;
                    } else {
                        var4 = -0.24859814;
                    }
                }
            }
        } else {
            if (input[16] < -0.3196026) {
                if (input[0] < -0.3657028) {
                    var4 = 0.3273024;
                } else {
                    var4 = -0.56357235;
                }
            } else {
                if (input[15] < 0.7519654) {
                    if (input[1] < 0.5378584) {
                        var4 = 0.3333004;
                    } else {
                        var4 = 0.26250857;
                    }
                } else {
                    if (input[0] < -0.03829886) {
                        var4 = -1.190583;
                    } else {
                        var4 = 0.34077275;
                    }
                }
            }
        }
    }
    var var5;
    if (input[5] < 2.090173) {
        if (input[11] < 2.141517) {
            if (input[10] < 0.464147) {
                if (input[14] < 2.074205) {
                    if (input[4] < 0.1782835) {
                        var5 = -0.30933237;
                    } else {
                        var5 = 0.13815685;
                    }
                } else {
                    if (input[11] < 2.124135) {
                        var5 = 0.3381573;
                    } else {
                        var5 = -0.04958357;
                    }
                }
            } else {
                if (input[5] < 2.050033) {
                    var5 = 0.33701542;
                } else {
                    if (input[11] < 2.080573) {
                        var5 = -0.28055334;
                    } else {
                        var5 = 0.27295527;
                    }
                }
            }
        } else {
            if (input[0] < -0.143456) {
                if (input[13] < -0.05071239) {
                    if (input[16] < -0.3322406) {
                        var5 = -0.067753695;
                    } else {
                        var5 = -0.3700794;
                    }
                } else {
                    if (input[1] < 0.1806968) {
                        var5 = -0.24608842;
                    } else {
                        var5 = 0.46412387;
                    }
                }
            } else {
                if (input[5] < 2.087682) {
                    if (input[13] < 0.1792072) {
                        var5 = -0.31390435;
                    } else {
                        var5 = -0.40030876;
                    }
                } else {
                    if (input[4] < -0.07699468) {
                        var5 = -0.40883797;
                    } else {
                        var5 = 0.08798772;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.05914892) {
            if (input[11] < 2.152424) {
                if (input[9] < 0.1848348) {
                    if (input[11] < 2.132003) {
                        var5 = -0.06152702;
                    } else {
                        var5 = -0.86674786;
                    }
                } else {
                    if (input[17] < 1.979057) {
                        var5 = 0.16378613;
                    } else {
                        var5 = 0.412614;
                    }
                }
            } else {
                if (input[1] < 0.1004802) {
                    if (input[3] < -0.4706574) {
                        var5 = -0.31591728;
                    } else {
                        var5 = 0.33854786;
                    }
                } else {
                    if (input[11] < 2.324035) {
                        var5 = -0.2654016;
                    } else {
                        var5 = -0.004007716;
                    }
                }
            }
        } else {
            if (input[17] < 2.418927) {
                if (input[5] < 2.371819) {
                    if (input[12] < 0.4733077) {
                        var5 = 0.31199586;
                    } else {
                        var5 = -0.15139045;
                    }
                } else {
                    if (input[0] < -0.3066201) {
                        var5 = -2.0810068;
                    } else {
                        var5 = 0.26624048;
                    }
                }
            } else {
                if (input[1] < 0.1524816) {
                    var5 = -0.19859494;
                } else {
                    var5 = 0.33569485;
                }
            }
        }
    }
    var var6;
    if (input[5] < 2.11378) {
        if (input[1] < 0.1788697) {
            if (input[16] < -0.2512242) {
                if (input[14] < 2.112044) {
                    var6 = 0.36421174;
                } else {
                    if (input[16] < -0.2657458) {
                        var6 = -0.34454685;
                    } else {
                        var6 = -0.052061755;
                    }
                }
            } else {
                if (input[2] < 2.111955) {
                    var6 = -0.763036;
                } else {
                    if (input[11] < 2.158105) {
                        var6 = -0.40679142;
                    } else {
                        var6 = -0.32382604;
                    }
                }
            }
        } else {
            if (input[0] < -0.1290658) {
                if (input[16] < -0.2816514) {
                    if (input[9] < 0.1308429) {
                        var6 = -0.46613544;
                    } else {
                        var6 = 0.2546925;
                    }
                } else {
                    if (input[12] < 0.1799283) {
                        var6 = 0.22141413;
                    } else {
                        var6 = -0.024133999;
                    }
                }
            } else {
                if (input[10] < 0.18003) {
                    if (input[2] < 2.128834) {
                        var6 = -0.6065862;
                    } else {
                        var6 = 0.3469827;
                    }
                } else {
                    if (input[4] < -0.07429902) {
                        var6 = -0.24067883;
                    } else {
                        var6 = 0.33081102;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.06134259) {
            if (input[1] < 0.1004802) {
                if (input[3] < -0.4706574) {
                    var6 = -0.29610595;
                } else {
                    var6 = 0.32718596;
                }
            } else {
                if (input[3] < -0.3155195) {
                    if (input[5] < 2.634625) {
                        var6 = -0.38306072;
                    } else {
                        var6 = 0.29512638;
                    }
                } else {
                    if (input[11] < 2.322301) {
                        var6 = -0.33873186;
                    } else {
                        var6 = 0.12118191;
                    }
                }
            }
        } else {
            if (input[1] < 0.4832348) {
                if (input[13] < -0.05852425) {
                    var6 = -0.22250822;
                } else {
                    var6 = 0.32502145;
                }
            } else {
                if (input[7] < 0.01565787) {
                    if (input[11] < 2.324035) {
                        var6 = -0.8596663;
                    } else {
                        var6 = 0.28169498;
                    }
                } else {
                    if (input[5] < 2.373999) {
                        var6 = 0.3268822;
                    } else {
                        var6 = 0.20305765;
                    }
                }
            }
        }
    }
    var var7;
    if (input[5] < 2.089453) {
        if (input[11] < 2.143254) {
            if (input[10] < 0.464147) {
                if (input[17] < 2.010988) {
                    if (input[16] < 0.5446725) {
                        var7 = -0.26326162;
                    } else {
                        var7 = 0.52170056;
                    }
                } else {
                    if (input[12] < 0.2663945) {
                        var7 = 0.017231982;
                    } else {
                        var7 = 0.31383803;
                    }
                }
            } else {
                if (input[5] < 2.050033) {
                    var7 = 0.3205676;
                } else {
                    if (input[14] < 2.129463) {
                        var7 = -0.32101998;
                    } else {
                        var7 = 0.10582264;
                    }
                }
            }
        } else {
            if (input[0] < -0.143456) {
                if (input[16] < -0.07039256) {
                    var7 = -0.3177818;
                } else {
                    var7 = 0.3310082;
                }
            } else {
                if (input[14] < 2.076937) {
                    if (input[3] < -0.1832297) {
                        var7 = -0.44432446;
                    } else {
                        var7 = -0.113741875;
                    }
                } else {
                    if (input[5] < 2.088831) {
                        var7 = -0.33887574;
                    } else {
                        var7 = -0.14616966;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.05604974) {
            if (input[11] < 2.152424) {
                if (input[9] < 0.1848348) {
                    if (input[2] < 2.123257) {
                        var7 = -0.031567875;
                    } else {
                        var7 = -0.543764;
                    }
                } else {
                    if (input[3] < -0.1839669) {
                        var7 = 0.3450206;
                    } else {
                        var7 = 0.07939732;
                    }
                }
            } else {
                if (input[1] < 0.1004802) {
                    if (input[3] < -0.4706574) {
                        var7 = -0.27882746;
                    } else {
                        var7 = 0.31186247;
                    }
                } else {
                    if (input[14] < 2.093536) {
                        var7 = -0.3827392;
                    } else {
                        var7 = -0.019763853;
                    }
                }
            }
        } else {
            if (input[17] < 2.418927) {
                if (input[5] < 2.371819) {
                    if (input[3] < -0.1765486) {
                        var7 = 0.29042205;
                    } else {
                        var7 = 0.019225245;
                    }
                } else {
                    if (input[0] < -0.3066201) {
                        var7 = -0.57137364;
                    } else {
                        var7 = 0.22481017;
                    }
                }
            } else {
                if (input[16] < -0.296365) {
                    var7 = -0.12764736;
                } else {
                    var7 = 0.31837207;
                }
            }
        }
    }
    var var8;
    if (input[11] < 2.333317) {
        if (input[7] < 0.01565787) {
            if (input[8] < 1.877306) {
                if (input[16] < -0.2438487) {
                    if (input[13] < -0.05612351) {
                        var8 = -0.34451875;
                    } else {
                        var8 = 0.37390968;
                    }
                } else {
                    var8 = -0.34543464;
                }
            } else {
                if (input[3] < -0.1839669) {
                    if (input[13] < -0.06496227) {
                        var8 = -0.2152613;
                    } else {
                        var8 = 0.22471;
                    }
                } else {
                    if (input[14] < 2.32403) {
                        var8 = -0.12997554;
                    } else {
                        var8 = -0.72190255;
                    }
                }
            }
        } else {
            if (input[16] < -0.283686) {
                if (input[9] < 0.1362537) {
                    if (input[8] < 1.906875) {
                        var8 = -0.38014472;
                    } else {
                        var8 = 0.17718287;
                    }
                } else {
                    if (input[10] < 0.1910487) {
                        var8 = 0.4066621;
                    } else {
                        var8 = -0.26150507;
                    }
                }
            } else {
                if (input[6] < -0.5832384) {
                    if (input[5] < 2.050033) {
                        var8 = 0.35369438;
                    } else {
                        var8 = -0.2896865;
                    }
                } else {
                    if (input[12] < 0.1509494) {
                        var8 = 0.10584764;
                    } else {
                        var8 = 0.3412508;
                    }
                }
            }
        }
    } else {
        if (input[1] < 0.1561756) {
            if (input[17] < 2.598191) {
                if (input[3] < -0.4706574) {
                    var8 = -0.26274252;
                } else {
                    var8 = 0.3040158;
                }
            } else {
                if (input[14] < 2.718132) {
                    if (input[3] < -0.3014109) {
                        var8 = -0.47150385;
                    } else {
                        var8 = 0.25343943;
                    }
                } else {
                    if (input[0] < -0.2786303) {
                        var8 = 0.18285914;
                    } else {
                        var8 = -0.24031533;
                    }
                }
            }
        } else {
            if (input[11] < 2.408961) {
                if (input[5] < 2.373999) {
                    var8 = 0.3142892;
                } else {
                    if (input[8] < 2.339401) {
                        var8 = 0.07022358;
                    } else {
                        var8 = -0.4531161;
                    }
                }
            } else {
                if (input[7] < -0.2546319) {
                    var8 = -0.2782416;
                } else {
                    var8 = 0.31448704;
                }
            }
        }
    }
    var var9;
    if (input[11] < 2.324035) {
        if (input[3] < -0.1811383) {
            if (input[8] < 1.892447) {
                if (input[14] < 2.097884) {
                    if (input[8] < 1.825042) {
                        var9 = 0.27892408;
                    } else {
                        var9 = -0.29405648;
                    }
                } else {
                    if (input[9] < 0.1012877) {
                        var9 = -0.2477841;
                    } else {
                        var9 = 0.2815684;
                    }
                }
            } else {
                if (input[7] < -0.03541327) {
                    if (input[11] < 2.031481) {
                        var9 = -0.7954632;
                    } else {
                        var9 = 0.11853487;
                    }
                } else {
                    if (input[6] < -0.5832384) {
                        var9 = -0.094810784;
                    } else {
                        var9 = 0.2849089;
                    }
                }
            }
        } else {
            if (input[1] < 0.4905577) {
                if (input[16] < -0.2512242) {
                    if (input[11] < 2.127802) {
                        var9 = 0.30058032;
                    } else {
                        var9 = -0.26541552;
                    }
                } else {
                    if (input[0] < -0.1367571) {
                        var9 = -0.0753756;
                    } else {
                        var9 = -0.3453549;
                    }
                }
            } else {
                var9 = 0.30997366;
            }
        }
    } else {
        if (input[4] < -0.06134259) {
            if (input[8] < 2.299176) {
                if (input[0] < -0.03464274) {
                    if (input[3] < -0.4706574) {
                        var9 = -0.24712893;
                    } else {
                        var9 = 0.27925253;
                    }
                } else {
                    if (input[11] < 2.328007) {
                        var9 = 0.27861315;
                    } else {
                        var9 = -0.3678082;
                    }
                }
            } else {
                if (input[3] < -0.3155195) {
                    if (input[8] < 2.515746) {
                        var9 = -0.35940233;
                    } else {
                        var9 = 0.11412995;
                    }
                } else {
                    if (input[4] < -0.07375525) {
                        var9 = -0.056868587;
                    } else {
                        var9 = 0.32132816;
                    }
                }
            }
        } else {
            if (input[1] < 0.5378584) {
                if (input[13] < -0.0531868) {
                    var9 = -0.0841762;
                } else {
                    if (input[11] < 2.326538) {
                        var9 = 0.09892771;
                    } else {
                        var9 = 0.30929765;
                    }
                }
            } else {
                if (input[7] < 0.07029051) {
                    if (input[2] < 2.344672) {
                        var9 = 0.27776274;
                    } else {
                        var9 = -0.38693088;
                    }
                } else {
                    var9 = 0.30631968;
                }
            }
        }
    }
    var var10;
    if (input[11] < 2.324035) {
        if (input[9] < 0.09331235) {
            if (input[11] < 2.075017) {
                if (input[6] < -0.4458719) {
                    if (input[3] < -0.4526371) {
                        var10 = -0.17352344;
                    } else {
                        var10 = -0.48770046;
                    }
                } else {
                    if (input[10] < 0.3858147) {
                        var10 = -0.47550997;
                    } else {
                        var10 = 0.3177698;
                    }
                }
            } else {
                if (input[1] < 0.2096903) {
                    if (input[6] < -0.5676342) {
                        var10 = 0.66000175;
                    } else {
                        var10 = 0.40406647;
                    }
                } else {
                    if (input[10] < 0.1893135) {
                        var10 = 0.04069;
                    } else {
                        var10 = 0.3173592;
                    }
                }
            }
        } else {
            if (input[9] < 0.1012877) {
                if (input[3] < -0.4125773) {
                    if (input[5] < 1.970664) {
                        var10 = 0.055996418;
                    } else {
                        var10 = 0.39608505;
                    }
                } else {
                    if (input[2] < 2.131344) {
                        var10 = -0.46847218;
                    } else {
                        var10 = 0.20672923;
                    }
                }
            } else {
                if (input[12] < 0.1668749) {
                    if (input[17] < 2.036849) {
                        var10 = 0.38422325;
                    } else {
                        var10 = 0.08247165;
                    }
                } else {
                    if (input[12] < 0.2663945) {
                        var10 = -0.21521243;
                    } else {
                        var10 = 0.032706726;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.06134259) {
            if (input[8] < 2.244371) {
                var10 = 0.28884163;
            } else {
                if (input[16] < 0.6617604) {
                    if (input[0] < -0.03464274) {
                        var10 = 0.029217595;
                    } else {
                        var10 = -0.22242434;
                    }
                } else {
                    if (input[5] < 2.375968) {
                        var10 = 0.36534074;
                    } else {
                        var10 = -0.0383541;
                    }
                }
            }
        } else {
            if (input[1] < 0.5378584) {
                if (input[13] < -0.05256709) {
                    var10 = -0.06400215;
                } else {
                    if (input[11] < 2.326538) {
                        var10 = 0.085422024;
                    } else {
                        var10 = 0.30593687;
                    }
                }
            } else {
                if (input[7] < 0.07029051) {
                    if (input[2] < 2.344672) {
                        var10 = 0.26660958;
                    } else {
                        var10 = -0.3448914;
                    }
                } else {
                    var10 = 0.3007604;
                }
            }
        }
    }
    var var11;
    if (input[8] < 2.520382) {
        if (input[3] < -0.1850964) {
            if (input[8] < 1.892447) {
                if (input[14] < 2.097098) {
                    if (input[4] < 0.07391644) {
                        var11 = 0.32252398;
                    } else {
                        var11 = -0.2616587;
                    }
                } else {
                    if (input[9] < 0.1012877) {
                        var11 = -0.14706428;
                    } else {
                        var11 = 0.20444517;
                    }
                }
            } else {
                if (input[13] < -0.07025629) {
                    if (input[17] < 2.598191) {
                        var11 = 0.018897632;
                    } else {
                        var11 = -0.31428635;
                    }
                } else {
                    if (input[6] < -0.5832384) {
                        var11 = -0.08838404;
                    } else {
                        var11 = 0.18598765;
                    }
                }
            }
        } else {
            if (input[1] < 0.4905577) {
                if (input[5] < 2.083522) {
                    if (input[16] < -0.283686) {
                        var11 = -0.00966377;
                    } else {
                        var11 = -0.33294556;
                    }
                } else {
                    if (input[11] < 2.149319) {
                        var11 = 0.092338555;
                    } else {
                        var11 = -0.11470664;
                    }
                }
            } else {
                var11 = 0.30325717;
            }
        }
    } else {
        if (input[10] < 0.1784208) {
            if (input[12] < 0.1706722) {
                if (input[14] < 2.718132) {
                    var11 = -0.3726755;
                } else {
                    var11 = -0.06370237;
                }
            } else {
                var11 = 0.21242368;
            }
        } else {
            var11 = 0.30339083;
        }
    }
    var var12;
    if (input[8] < 2.520382) {
        if (input[10] < 0.6107997) {
            if (input[14] < 2.072394) {
                if (input[10] < 0.4120008) {
                    if (input[9] < 0.1895024) {
                        var12 = -0.33955708;
                    } else {
                        var12 = -0.059999283;
                    }
                } else {
                    if (input[6] < -0.4488177) {
                        var12 = -0.17787908;
                    } else {
                        var12 = 0.29909724;
                    }
                }
            } else {
                if (input[11] < 2.123226) {
                    if (input[11] < 2.075017) {
                        var12 = -0.096929826;
                    } else {
                        var12 = 0.29091874;
                    }
                } else {
                    if (input[5] < 2.087682) {
                        var12 = -0.079756;
                    } else {
                        var12 = 0.08081598;
                    }
                }
            }
        } else {
            var12 = 0.2977003;
        }
    } else {
        if (input[10] < 0.1784208) {
            if (input[14] < 2.718132) {
                var12 = -0.31506416;
            } else {
                if (input[0] < -0.2806026) {
                    var12 = 0.19949982;
                } else {
                    var12 = -0.07538261;
                }
            }
        } else {
            var12 = 0.30045485;
        }
    }
    var var13;
    if (input[8] < 2.520382) {
        if (input[3] < -0.1850964) {
            if (input[5] < 2.018692) {
                if (input[13] < -0.05782884) {
                    if (input[12] < 0.2663945) {
                        var13 = -0.38279197;
                    } else {
                        var13 = 0.1776329;
                    }
                } else {
                    if (input[1] < 0.2239829) {
                        var13 = 0.23658623;
                    } else {
                        var13 = -0.061502878;
                    }
                }
            } else {
                if (input[13] < -0.06496227) {
                    if (input[12] < 0.1832692) {
                        var13 = -0.2576428;
                    } else {
                        var13 = 0.11608677;
                    }
                } else {
                    if (input[6] < -0.5832384) {
                        var13 = -0.067643315;
                    } else {
                        var13 = 0.17837465;
                    }
                }
            }
        } else {
            if (input[1] < 0.1792857) {
                if (input[16] < -0.2849392) {
                    if (input[1] < 0.09217256) {
                        var13 = -0.22293423;
                    } else {
                        var13 = 0.23979528;
                    }
                } else {
                    if (input[14] < 2.05473) {
                        var13 = -0.17916295;
                    } else {
                        var13 = -0.3291731;
                    }
                }
            } else {
                if (input[11] < 2.141517) {
                    if (input[9] < 0.2030293) {
                        var13 = 0.3654963;
                    } else {
                        var13 = 0.04244467;
                    }
                } else {
                    if (input[5] < 2.087682) {
                        var13 = -0.2808886;
                    } else {
                        var13 = -0.01547228;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.1784208) {
            if (input[12] < 0.1532608) {
                var13 = -0.2287016;
            } else {
                var13 = 0.11598786;
            }
        } else {
            var13 = 0.29757848;
        }
    }
    var var14;
    if (input[5] < 2.634625) {
        if (input[16] < 0.8088496) {
            if (input[17] < 2.014581) {
                if (input[10] < 0.4192165) {
                    if (input[9] < 0.1895024) {
                        var14 = -0.23497431;
                    } else {
                        var14 = -0.03372191;
                    }
                } else {
                    if (input[15] < 0.2220006) {
                        var14 = 0.007198858;
                    } else {
                        var14 = 0.29514876;
                    }
                }
            } else {
                if (input[5] < 1.969027) {
                    if (input[14] < 2.108974) {
                        var14 = 0.20145567;
                    } else {
                        var14 = -0.33066493;
                    }
                } else {
                    if (input[8] < 2.31081) {
                        var14 = 0.08598753;
                    } else {
                        var14 = -0.09312127;
                    }
                }
            }
        } else {
            if (input[6] < -0.6388019) {
                var14 = -0.1373286;
            } else {
                var14 = 0.2918522;
            }
        }
    } else {
        var14 = 0.29145488;
    }
    var var15;
    if (input[12] < 0.1687881) {
        if (input[9] < 0.1049315) {
            if (input[9] < 0.09331235) {
                if (input[11] < 2.008394) {
                    if (input[13] < 0.2649466) {
                        var15 = -0.31701538;
                    } else {
                        var15 = 0.1502052;
                    }
                } else {
                    if (input[1] < 0.1561756) {
                        var15 = -0.080240294;
                    } else {
                        var15 = 0.2251606;
                    }
                }
            } else {
                if (input[2] < 2.127069) {
                    if (input[16] < -0.2592635) {
                        var15 = -0.3863153;
                    } else {
                        var15 = 0.19635957;
                    }
                } else {
                    if (input[9] < 0.09700789) {
                        var15 = 0.42579824;
                    } else {
                        var15 = -0.062072355;
                    }
                }
            }
        } else {
            if (input[16] < -0.2816514) {
                var15 = -0.05239253;
            } else {
                var15 = 0.3436979;
            }
        }
    } else {
        if (input[15] < 0.2642343) {
            if (input[11] < 2.140443) {
                if (input[1] < 0.3837353) {
                    if (input[9] < 0.1362537) {
                        var15 = -0.38734037;
                    } else {
                        var15 = -0.2378357;
                    }
                } else {
                    var15 = -0.015286059;
                }
            } else {
                if (input[13] < -0.06737872) {
                    var15 = -0.3430067;
                } else {
                    var15 = 0.31907037;
                }
            }
        } else {
            if (input[7] < 0.01565787) {
                if (input[2] < 2.120021) {
                    if (input[9] < -0.01714486) {
                        var15 = 0.16025604;
                    } else {
                        var15 = -0.31572843;
                    }
                } else {
                    if (input[11] < 2.13581) {
                        var15 = 0.25928763;
                    } else {
                        var15 = -0.022827337;
                    }
                }
            } else {
                if (input[9] < 0.1308429) {
                    if (input[9] < 0.03419752) {
                        var15 = 0.26300567;
                    } else {
                        var15 = -0.2290548;
                    }
                } else {
                    if (input[10] < 0.1815784) {
                        var15 = -0.24006537;
                    } else {
                        var15 = 0.28666994;
                    }
                }
            }
        }
    }
    var var16;
    if (input[5] < 2.634625) {
        if (input[7] < -0.3580525) {
            var16 = -0.3179419;
        } else {
            if (input[6] < -0.2135652) {
                if (input[11] < 2.075017) {
                    if (input[1] < 0.3971142) {
                        var16 = -0.28788504;
                    } else {
                        var16 = 0.031230338;
                    }
                } else {
                    if (input[11] < 2.122123) {
                        var16 = 0.27926356;
                    } else {
                        var16 = 0.034225915;
                    }
                }
            } else {
                if (input[7] < 0.01690694) {
                    if (input[11] < 2.322301) {
                        var16 = -0.17348246;
                    } else {
                        var16 = 0.036006216;
                    }
                } else {
                    var16 = 0.28648722;
                }
            }
        }
    } else {
        var16 = 0.2836155;
    }
    var var17;
    if (input[5] < 2.634625) {
        if (input[7] < -0.3148971) {
            if (input[3] < -0.1034364) {
                if (input[17] < 2.131697) {
                    if (input[8] < 1.99823) {
                        var17 = -0.09786295;
                    } else {
                        var17 = -0.39720327;
                    }
                } else {
                    if (input[2] < 2.359941) {
                        var17 = 0.094464034;
                    } else {
                        var17 = -0.26105428;
                    }
                }
            } else {
                if (input[6] < -0.1454355) {
                    var17 = -0.31315583;
                } else {
                    if (input[5] < 2.375968) {
                        var17 = 0.28730628;
                    } else {
                        var17 = -0.20766804;
                    }
                }
            }
        } else {
            if (input[4] < -0.08197019) {
                if (input[8] < 2.294634) {
                    if (input[14] < 2.074205) {
                        var17 = -0.18959622;
                    } else {
                        var17 = 0.24368094;
                    }
                } else {
                    var17 = -0.312461;
                }
            } else {
                if (input[1] < 0.1561756) {
                    if (input[5] < 2.602829) {
                        var17 = -0.41075838;
                    } else {
                        var17 = 0.048156496;
                    }
                } else {
                    if (input[2] < 2.354945) {
                        var17 = -0.0026748057;
                    } else {
                        var17 = 0.2723631;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.3039868) {
            var17 = 0.07558348;
        } else {
            var17 = 0.28330228;
        }
    }
    var var18;
    if (input[10] < 0.6107997) {
        if (input[3] < -0.178226) {
            if (input[13] < -0.05726122) {
                if (input[2] < 2.127069) {
                    if (input[14] < 2.103844) {
                        var18 = 0.2403771;
                    } else {
                        var18 = -0.4004028;
                    }
                } else {
                    if (input[2] < 2.132684) {
                        var18 = 0.3999385;
                    } else {
                        var18 = -0.044366196;
                    }
                }
            } else {
                if (input[11] < 2.080573) {
                    if (input[6] < -0.4557327) {
                        var18 = -0.28923914;
                    } else {
                        var18 = 0.00014347551;
                    }
                } else {
                    if (input[4] < -0.07173939) {
                        var18 = -0.015490691;
                    } else {
                        var18 = 0.15155643;
                    }
                }
            }
        } else {
            if (input[11] < 2.322301) {
                if (input[1] < 0.4905577) {
                    if (input[15] < 0.369111) {
                        var18 = 0.0152369775;
                    } else {
                        var18 = -0.30737615;
                    }
                } else {
                    var18 = 0.26609498;
                }
            } else {
                if (input[6] < -0.1454355) {
                    var18 = -0.39552137;
                } else {
                    if (input[7] < -0.3148971) {
                        var18 = -0.020995896;
                    } else {
                        var18 = 0.20329523;
                    }
                }
            }
        }
    } else {
        var18 = 0.28235093;
    }
    var var19;
    if (input[10] < 0.6107997) {
        if (input[17] < 2.817699) {
            if (input[5] < 1.970664) {
                if (input[14] < 2.109825) {
                    if (input[7] < 0.0113661) {
                        var19 = -0.22669749;
                    } else {
                        var19 = 0.2689864;
                    }
                } else {
                    if (input[2] < 2.122502) {
                        var19 = -0.35219595;
                    } else {
                        var19 = -0.07282803;
                    }
                }
            } else {
                if (input[12] < 0.1687881) {
                    if (input[9] < 0.1012877) {
                        var19 = 0.041083492;
                    } else {
                        var19 = 0.29857638;
                    }
                } else {
                    if (input[15] < 0.2642343) {
                        var19 = -0.2794903;
                    } else {
                        var19 = 0.0056470498;
                    }
                }
            }
        } else {
            if (input[1] < 0.1329032) {
                var19 = 0.08577062;
            } else {
                var19 = 0.27329957;
            }
        }
    } else {
        var19 = 0.27583238;
    }
    var var20;
    if (input[3] < -0.4125773) {
        if (input[11] < 2.080573) {
            if (input[5] < 2.003355) {
                if (input[0] < -0.3990634) {
                    var20 = -0.22620305;
                } else {
                    var20 = 0.3025316;
                }
            } else {
                if (input[8] < 1.973493) {
                    var20 = 0.24457698;
                } else {
                    if (input[17] < 2.012017) {
                        var20 = 0.13084613;
                    } else {
                        var20 = -0.31422397;
                    }
                }
            }
        } else {
            if (input[9] < 0.138732) {
                if (input[7] < -0.369829) {
                    var20 = -0.18245903;
                } else {
                    var20 = 0.33069113;
                }
            } else {
                var20 = -0.20486708;
            }
        }
    } else {
        if (input[9] < 0.01633202) {
            var20 = 0.28131598;
        } else {
            if (input[12] < 0.2663945) {
                if (input[9] < 0.1429186) {
                    if (input[16] < -0.2816514) {
                        var20 = -0.13967083;
                    } else {
                        var20 = 0.053092778;
                    }
                } else {
                    if (input[10] < 0.1760567) {
                        var20 = 0.17720905;
                    } else {
                        var20 = -0.31933;
                    }
                }
            } else {
                if (input[11] < 2.141517) {
                    if (input[2] < 2.122909) {
                        var20 = 0.02382247;
                    } else {
                        var20 = 0.30349565;
                    }
                } else {
                    if (input[0] < -0.1440609) {
                        var20 = 0.14105338;
                    } else {
                        var20 = -0.07843304;
                    }
                }
            }
        }
    }
    var var21;
    if (input[1] < 0.1788697) {
        if (input[6] < -0.2561148) {
            if (input[17] < 2.668064) {
                if (input[7] < -0.369829) {
                    var21 = -0.17180961;
                } else {
                    if (input[3] < -0.285962) {
                        var21 = 0.27768323;
                    } else {
                        var21 = -0.018864254;
                    }
                }
            } else {
                if (input[6] < -0.2645073) {
                    if (input[14] < 2.718132) {
                        var21 = -0.4124078;
                    } else {
                        var21 = -0.011915264;
                    }
                } else {
                    var21 = 0.26046273;
                }
            }
        } else {
            if (input[15] < 0.3822942) {
                if (input[15] < 0.3299821) {
                    if (input[10] < 0.1689312) {
                        var21 = 0.19080302;
                    } else {
                        var21 = -0.29986808;
                    }
                } else {
                    if (input[2] < 2.602242) {
                        var21 = 0.21284029;
                    } else {
                        var21 = -0.08134044;
                    }
                }
            } else {
                if (input[4] < -0.07429902) {
                    if (input[0] < -0.2806026) {
                        var21 = -0.5728344;
                    } else {
                        var21 = -0.29871926;
                    }
                } else {
                    if (input[2] < 2.162554) {
                        var21 = -0.26496074;
                    } else {
                        var21 = 0.12124058;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.408961) {
            if (input[8] < 2.339401) {
                if (input[10] < 0.1760567) {
                    if (input[1] < 0.1803833) {
                        var21 = -0.05612104;
                    } else {
                        var21 = 0.3023293;
                    }
                } else {
                    if (input[13] < 0.4084785) {
                        var21 = -0.018034542;
                    } else {
                        var21 = 0.107416004;
                    }
                }
            } else {
                if (input[0] < -0.3066201) {
                    var21 = -0.36664945;
                } else {
                    var21 = 0.15719952;
                }
            }
        } else {
            var21 = 0.284091;
        }
    }
    var var22;
    if (input[4] < -0.07317898) {
        if (input[11] < 2.141517) {
            if (input[9] < 0.2045274) {
                if (input[1] < 0.1780757) {
                    var22 = -0.1664321;
                } else {
                    if (input[2] < 2.131344) {
                        var22 = 0.32168823;
                    } else {
                        var22 = 0.038223952;
                    }
                }
            } else {
                if (input[5] < 2.090173) {
                    if (input[9] < 0.2196055) {
                        var22 = -0.3122284;
                    } else {
                        var22 = -0.042597476;
                    }
                } else {
                    var22 = 0.17531426;
                }
            }
        } else {
            if (input[14] < 2.072394) {
                if (input[15] < 0.6017552) {
                    if (input[0] < -0.1458603) {
                        var22 = 0.023536758;
                    } else {
                        var22 = -0.3799967;
                    }
                } else {
                    if (input[0] < -0.1387572) {
                        var22 = 0.5668879;
                    } else {
                        var22 = -0.16686302;
                    }
                }
            } else {
                if (input[5] < 2.088831) {
                    if (input[17] < 1.979057) {
                        var22 = 0.23306502;
                    } else {
                        var22 = -0.31775835;
                    }
                } else {
                    if (input[11] < 2.152424) {
                        var22 = 0.31041223;
                    } else {
                        var22 = -0.04388773;
                    }
                }
            }
        }
    } else {
        if (input[5] < 2.018692) {
            if (input[16] < -0.2816514) {
                if (input[9] < 0.1362537) {
                    if (input[0] < -0.2484727) {
                        var22 = 0.25137493;
                    } else {
                        var22 = -0.32980567;
                    }
                } else {
                    if (input[8] < 1.825042) {
                        var22 = 0.014019667;
                    } else {
                        var22 = 0.2141499;
                    }
                }
            } else {
                if (input[12] < 0.1883886) {
                    if (input[9] < 0.09846279) {
                        var22 = 0.00870327;
                    } else {
                        var22 = 0.30389333;
                    }
                } else {
                    if (input[4] < 0.2220427) {
                        var22 = -0.31368983;
                    } else {
                        var22 = 0.24935673;
                    }
                }
            }
        } else {
            if (input[1] < 0.4812404) {
                if (input[10] < 0.2300313) {
                    if (input[12] < 0.1824703) {
                        var22 = -0.04518707;
                    } else {
                        var22 = 0.11501441;
                    }
                } else {
                    if (input[3] < -0.1777455) {
                        var22 = 0.3079791;
                    } else {
                        var22 = -0.18586996;
                    }
                }
            } else {
                if (input[5] < 2.330077) {
                    if (input[11] < 2.080573) {
                        var22 = -0.18266825;
                    } else {
                        var22 = 0.322962;
                    }
                } else {
                    if (input[11] < 2.408961) {
                        var22 = -0.2932858;
                    } else {
                        var22 = 0.23104583;
                    }
                }
            }
        }
    }
    var var23;
    if (input[4] < -0.07173939) {
        if (input[5] < 2.083522) {
            var23 = -0.28053167;
        } else {
            if (input[11] < 2.143254) {
                if (input[9] < 0.2045274) {
                    if (input[9] < 0.1921139) {
                        var23 = 0.12319981;
                    } else {
                        var23 = 0.3336169;
                    }
                } else {
                    if (input[5] < 2.091469) {
                        var23 = -0.28196913;
                    } else {
                        var23 = 0.19224165;
                    }
                }
            } else {
                if (input[14] < 2.050117) {
                    if (input[11] < 2.146672) {
                        var23 = 0.0338265;
                    } else {
                        var23 = -0.49765894;
                    }
                } else {
                    if (input[15] < 0.529924) {
                        var23 = -0.08078532;
                    } else {
                        var23 = 0.07605137;
                    }
                }
            }
        }
    } else {
        if (input[8] < 1.906875) {
            if (input[15] < 0.2390505) {
                if (input[2] < 2.119267) {
                    if (input[16] < -0.2657458) {
                        var23 = -0.30445147;
                    } else {
                        var23 = 0.17777006;
                    }
                } else {
                    if (input[17] < 2.039895) {
                        var23 = 0.33567604;
                    } else {
                        var23 = -0.1752808;
                    }
                }
            } else {
                if (input[9] < 0.1362537) {
                    if (input[17] < 2.017564) {
                        var23 = -0.075720936;
                    } else {
                        var23 = -0.3406891;
                    }
                } else {
                    if (input[16] < -0.2694648) {
                        var23 = 0.25478724;
                    } else {
                        var23 = -0.23130918;
                    }
                }
            }
        } else {
            if (input[9] < 0.1308429) {
                if (input[5] < 2.003355) {
                    var23 = 0.29119742;
                } else {
                    if (input[6] < -0.3017032) {
                        var23 = -0.10044051;
                    } else {
                        var23 = 0.25027952;
                    }
                }
            } else {
                if (input[5] < 2.330077) {
                    if (input[12] < 0.1883886) {
                        var23 = 0.36422843;
                    } else {
                        var23 = 0.11956772;
                    }
                } else {
                    if (input[11] < 2.325088) {
                        var23 = -0.2940483;
                    } else {
                        var23 = 0.23913167;
                    }
                }
            }
        }
    }
    var var24;
    if (input[10] < 0.6107997) {
        if (input[14] < 2.072394) {
            if (input[11] < 2.144628) {
                if (input[5] < 2.087682) {
                    if (input[13] < 0.3578992) {
                        var24 = -0.16519041;
                    } else {
                        var24 = 0.09711709;
                    }
                } else {
                    if (input[9] < 0.2045274) {
                        var24 = 0.26658785;
                    } else {
                        var24 = -0.21218227;
                    }
                }
            } else {
                if (input[15] < 0.519838) {
                    if (input[3] < -0.1828936) {
                        var24 = -0.60157335;
                    } else {
                        var24 = -0.0703129;
                    }
                } else {
                    if (input[1] < 0.1818711) {
                        var24 = 0.05336203;
                    } else {
                        var24 = -0.21939167;
                    }
                }
            }
        } else {
            if (input[11] < 2.123226) {
                if (input[8] < 2.079515) {
                    if (input[4] < -0.0756643) {
                        var24 = -0.04090001;
                    } else {
                        var24 = 0.25503;
                    }
                } else {
                    if (input[14] < 2.129463) {
                        var24 = -0.23544097;
                    } else {
                        var24 = 0.15040335;
                    }
                }
            } else {
                if (input[2] < 2.117833) {
                    if (input[16] < -0.2657458) {
                        var24 = -0.3310139;
                    } else {
                        var24 = 0.06208606;
                    }
                } else {
                    if (input[2] < 2.134072) {
                        var24 = 0.09462359;
                    } else {
                        var24 = -0.018760147;
                    }
                }
            }
        }
    } else {
        var24 = 0.25155357;
    }
    var var25;
    if (input[3] < -0.06884018) {
        if (input[6] < -0.1350729) {
            if (input[6] < -0.1372693) {
                if (input[9] < 0.379652) {
                    if (input[17] < 2.018126) {
                        var25 = -0.035953946;
                    } else {
                        var25 = 0.030437157;
                    }
                } else {
                    if (input[10] < 0.2546643) {
                        var25 = -0.35467106;
                    } else {
                        var25 = 0.07132756;
                    }
                }
            } else {
                if (input[11] < 2.320537) {
                    var25 = -0.18467242;
                } else {
                    var25 = 0.32715327;
                }
            }
        } else {
            if (input[7] < 0.01565787) {
                var25 = -0.35002413;
            } else {
                if (input[8] < 2.31081) {
                    var25 = 0.20393221;
                } else {
                    var25 = -0.0507623;
                }
            }
        }
    } else {
        if (input[2] < 2.311973) {
            var25 = 0.31660986;
        } else {
            if (input[2] < 2.329566) {
                var25 = -0.24777797;
            } else {
                var25 = 0.02217738;
            }
        }
    }
    var var26;
    if (input[7] < -0.3580525) {
        var26 = -0.2406378;
    } else {
        if (input[10] < 0.08523455) {
            var26 = 0.24409182;
        } else {
            if (input[1] < 0.1788697) {
                if (input[17] < 2.743148) {
                    if (input[0] < -0.2806026) {
                        var26 = -0.45461935;
                    } else {
                        var26 = -0.06334645;
                    }
                } else {
                    if (input[3] < -0.3370658) {
                        var26 = -0.10945086;
                    } else {
                        var26 = 0.269361;
                    }
                }
            } else {
                if (input[2] < 2.3651) {
                    if (input[5] < 2.380316) {
                        var26 = 0.014684074;
                    } else {
                        var26 = -0.21892883;
                    }
                } else {
                    var26 = 0.26926735;
                }
            }
        }
    }
    var var27;
    if (input[12] < 0.1668749) {
        if (input[9] < 0.1049315) {
            if (input[9] < 0.09331235) {
                if (input[9] < 0.0551752) {
                    if (input[9] < 0.0257874) {
                        var27 = 0.061447725;
                    } else {
                        var27 = -0.18243694;
                    }
                } else {
                    var27 = 0.30579337;
                }
            } else {
                if (input[6] < -0.5460761) {
                    var27 = 0.21454367;
                } else {
                    if (input[16] < -0.2657458) {
                        var27 = -0.3213288;
                    } else {
                        var27 = 0.007715517;
                    }
                }
            }
        } else {
            var27 = 0.2826905;
        }
    } else {
        if (input[15] < 0.2642343) {
            if (input[11] < 2.140443) {
                if (input[12] < 0.1799283) {
                    var27 = -0.33202505;
                } else {
                    if (input[4] < 0.3311633) {
                        var27 = -0.23424548;
                    } else {
                        var27 = 0.077285424;
                    }
                }
            } else {
                if (input[13] < -0.06737872) {
                    var27 = -0.23716728;
                } else {
                    var27 = 0.27767786;
                }
            }
        } else {
            if (input[4] < 0.3005949) {
                if (input[8] < 1.902019) {
                    if (input[1] < 0.415504) {
                        var27 = -0.21736504;
                    } else {
                        var27 = 0.2095682;
                    }
                } else {
                    if (input[11] < 2.13581) {
                        var27 = 0.13922386;
                    } else {
                        var27 = -0.0063458825;
                    }
                }
            } else {
                if (input[17] < 2.031263) {
                    if (input[9] < 0.2178555) {
                        var27 = 0.00048240242;
                    } else {
                        var27 = 0.16340174;
                    }
                } else {
                    var27 = 0.31911385;
                }
            }
        }
    }
    var var28;
    if (input[17] < 1.885599) {
        if (input[4] < 0.1793765) {
            if (input[13] < 0.1514587) {
                var28 = -0.032575194;
            } else {
                if (input[4] < -0.07429902) {
                    var28 = -0.07730299;
                } else {
                    var28 = -0.32157284;
                }
            }
        } else {
            var28 = 0.19149834;
        }
    } else {
        if (input[14] < 2.026503) {
            if (input[8] < 1.885604) {
                var28 = 0.063139535;
            } else {
                var28 = 0.2743697;
            }
        } else {
            if (input[13] < 0.4613981) {
                if (input[13] < 0.4084785) {
                    if (input[13] < 0.3879468) {
                        var28 = 0.010935705;
                    } else {
                        var28 = -0.23267592;
                    }
                } else {
                    if (input[2] < 2.127803) {
                        var28 = 0.28102693;
                    } else {
                        var28 = 0.056595914;
                    }
                }
            } else {
                if (input[5] < 2.099541) {
                    if (input[9] < -0.0159542) {
                        var28 = -0.0856265;
                    } else {
                        var28 = -0.31390238;
                    }
                } else {
                    if (input[5] < 2.375968) {
                        var28 = 0.14742549;
                    } else {
                        var28 = -0.13349082;
                    }
                }
            }
        }
    }
    var var29;
    if (input[5] < 2.634625) {
        if (input[7] < -0.3580525) {
            var29 = -0.24313505;
        } else {
            if (input[10] < 0.08523455) {
                var29 = 0.22820544;
            } else {
                if (input[13] < -0.07025629) {
                    if (input[15] < 0.272199) {
                        var29 = -0.28533313;
                    } else {
                        var29 = 0.04535164;
                    }
                } else {
                    if (input[11] < 2.153508) {
                        var29 = 0.026807552;
                    } else {
                        var29 = -0.034711193;
                    }
                }
            }
        }
    } else {
        var29 = 0.22549884;
    }
    var var30;
    if (input[2] < 2.120021) {
        if (input[1] < 0.3971142) {
            if (input[11] < 2.031481) {
                if (input[8] < 1.973493) {
                    if (input[8] < 1.877306) {
                        var30 = -0.19941483;
                    } else {
                        var30 = 0.20100585;
                    }
                } else {
                    if (input[17] < 2.002901) {
                        var30 = -0.018965296;
                    } else {
                        var30 = -0.37989587;
                    }
                }
            } else {
                if (input[9] < 0.09331235) {
                    var30 = 0.27439094;
                } else {
                    if (input[9] < 0.2150583) {
                        var30 = -0.22509485;
                    } else {
                        var30 = 0.13095522;
                    }
                }
            }
        } else {
            if (input[11] < 2.025547) {
                var30 = 0.26771626;
            } else {
                if (input[9] < -0.01827611) {
                    if (input[0] < -0.5918816) {
                        var30 = -0.1384381;
                    } else {
                        var30 = 0.22943194;
                    }
                } else {
                    var30 = -0.25716028;
                }
            }
        }
    } else {
        if (input[15] < 0.2366577) {
            if (input[5] < 2.375968) {
                if (input[16] < -0.3012204) {
                    var30 = -0.12816855;
                } else {
                    if (input[14] < 2.100592) {
                        var30 = -0.0050956355;
                    } else {
                        var30 = 0.30518496;
                    }
                }
            } else {
                if (input[9] < 0.02419219) {
                    if (input[5] < 2.602829) {
                        var30 = -0.070703246;
                    } else {
                        var30 = 0.26418924;
                    }
                } else {
                    if (input[3] < -0.3344435) {
                        var30 = -0.25633672;
                    } else {
                        var30 = 0.16470918;
                    }
                }
            }
        } else {
            if (input[15] < 0.2642343) {
                if (input[11] < 2.140443) {
                    if (input[14] < 2.102722) {
                        var30 = -0.28455898;
                    } else {
                        var30 = -0.025479915;
                    }
                } else {
                    if (input[13] < -0.05071239) {
                        var30 = -0.19859074;
                    } else {
                        var30 = 0.16714;
                    }
                }
            } else {
                if (input[11] < 2.13581) {
                    if (input[5] < 2.025027) {
                        var30 = -0.097968996;
                    } else {
                        var30 = 0.25338596;
                    }
                } else {
                    if (input[4] < 0.3005949) {
                        var30 = -0.0037869576;
                    } else {
                        var30 = 0.2884975;
                    }
                }
            }
        }
    }
    var var31;
    if (input[14] < 2.074205) {
        if (input[2] < 2.136617) {
            if (input[8] < 1.993883) {
                if (input[4] < 0.1782835) {
                    if (input[15] < 0.6087447) {
                        var31 = -0.17927827;
                    } else {
                        var31 = 0.2281602;
                    }
                } else {
                    if (input[10] < 0.4081376) {
                        var31 = -0.10059734;
                    } else {
                        var31 = 0.26369694;
                    }
                }
            } else {
                if (input[14] < 2.060808) {
                    if (input[11] < 2.145909) {
                        var31 = 0.2865365;
                    } else {
                        var31 = 0.005040688;
                    }
                } else {
                    if (input[15] < 0.5403172) {
                        var31 = -0.23035085;
                    } else {
                        var31 = 0.20413812;
                    }
                }
            }
        } else {
            if (input[7] < -0.2678979) {
                var31 = -0.40400028;
            } else {
                var31 = 0.0039554886;
            }
        }
    } else {
        if (input[14] < 2.085208) {
            if (input[5] < 2.087682) {
                if (input[0] < -0.2442916) {
                    if (input[12] < 0.09274827) {
                        var31 = 0.043367963;
                    } else {
                        var31 = 0.16555126;
                    }
                } else {
                    var31 = -0.24249737;
                }
            } else {
                if (input[17] < 1.981413) {
                    var31 = 0.028744902;
                } else {
                    var31 = 0.31431034;
                }
            }
        } else {
            if (input[17] < 2.018126) {
                if (input[11] < 2.122123) {
                    if (input[1] < 0.1726803) {
                        var31 = -0.06464911;
                    } else {
                        var31 = 0.24673437;
                    }
                } else {
                    if (input[17] < 1.999653) {
                        var31 = 0.15172759;
                    } else {
                        var31 = -0.25393742;
                    }
                }
            } else {
                if (input[5] < 1.970664) {
                    if (input[9] < 0.1049315) {
                        var31 = -0.23411529;
                    } else {
                        var31 = 0.11247686;
                    }
                } else {
                    if (input[4] < 0.303126) {
                        var31 = 0.016052596;
                    } else {
                        var31 = 0.22988449;
                    }
                }
            }
        }
    }
    var var32;
    if (input[14] < 2.718132) {
        if (input[17] < 2.668064) {
            if (input[17] < 2.418927) {
                if (input[8] < 2.339401) {
                    if (input[2] < 2.358206) {
                        var32 = 0.009258826;
                    } else {
                        var32 = -0.18652666;
                    }
                } else {
                    var32 = -0.25406033;
                }
            } else {
                var32 = 0.2675724;
            }
        } else {
            if (input[3] < -0.3014109) {
                if (input[4] < -0.07375525) {
                    if (input[9] < 0.03884695) {
                        var32 = -0.5930158;
                    } else {
                        var32 = -0.15640958;
                    }
                } else {
                    if (input[3] < -0.3241569) {
                        var32 = -0.22685334;
                    } else {
                        var32 = 0.0641053;
                    }
                }
            } else {
                var32 = 0.23876566;
            }
        }
    } else {
        if (input[4] < -0.0756643) {
            if (input[8] < 2.510136) {
                if (input[4] < -0.07873682) {
                    var32 = -0.23549958;
                } else {
                    var32 = -0.0029409984;
                }
            } else {
                var32 = 0.17833853;
            }
        } else {
            var32 = 0.26094052;
        }
    }
    var var33;
    if (input[2] < 2.152025) {
        if (input[11] < 2.158105) {
            if (input[2] < 2.135951) {
                if (input[2] < 2.120021) {
                    if (input[7] < -0.03541327) {
                        var33 = -0.14574745;
                    } else {
                        var33 = 0.019890722;
                    }
                } else {
                    if (input[0] < -0.1440609) {
                        var33 = 0.19791694;
                    } else {
                        var33 = 0.008321578;
                    }
                }
            } else {
                if (input[14] < 2.100332) {
                    if (input[0] < -0.1983569) {
                        var33 = -0.08219199;
                    } else {
                        var33 = -0.288679;
                    }
                } else {
                    if (input[9] < 0.1308429) {
                        var33 = -0.13671733;
                    } else {
                        var33 = 0.18967311;
                    }
                }
            }
        } else {
            if (input[7] < -0.1544746) {
                var33 = -0.30422533;
            } else {
                var33 = -0.08454772;
            }
        }
    } else {
        if (input[5] < 2.330077) {
            if (input[8] < 1.882046) {
                var33 = -0.12086643;
            } else {
                if (input[4] < 0.1260297) {
                    if (input[14] < 2.097884) {
                        var33 = -0.28331873;
                    } else {
                        var33 = 0.2054785;
                    }
                } else {
                    var33 = 0.33792737;
                }
            }
        } else {
            if (input[11] < 2.322301) {
                if (input[8] < 2.31081) {
                    if (input[14] < 2.308985) {
                        var33 = -0.25119305;
                    } else {
                        var33 = 0.24086842;
                    }
                } else {
                    var33 = -0.33057305;
                }
            } else {
                if (input[5] < 2.375968) {
                    if (input[8] < 2.289286) {
                        var33 = -0.10804745;
                    } else {
                        var33 = 0.26311296;
                    }
                } else {
                    if (input[8] < 2.289286) {
                        var33 = 0.2127527;
                    } else {
                        var33 = -0.08929305;
                    }
                }
            }
        }
    }
    var var34;
    if (input[14] < 2.718132) {
        if (input[17] < 2.668064) {
            if (input[17] < 2.418927) {
                if (input[8] < 2.339401) {
                    if (input[1] < 0.512127) {
                        var34 = -0.004959332;
                    } else {
                        var34 = 0.23501629;
                    }
                } else {
                    var34 = -0.22923253;
                }
            } else {
                var34 = 0.24758403;
            }
        } else {
            if (input[3] < -0.3014109) {
                if (input[13] < 0.2364878) {
                    if (input[4] < -0.07375525) {
                        var34 = -0.40747282;
                    } else {
                        var34 = -0.14082636;
                    }
                } else {
                    var34 = 0.025571607;
                }
            } else {
                var34 = 0.22791399;
            }
        }
    } else {
        if (input[4] < -0.0756643) {
            if (input[7] < -0.3203184) {
                var34 = 0.20557125;
            } else {
                if (input[15] < 0.2426997) {
                    var34 = -0.20643233;
                } else {
                    var34 = -0.012787548;
                }
            }
        } else {
            var34 = 0.2509884;
        }
    }
    var var35;
    if (input[17] < 1.885599) {
        if (input[1] < 0.3754036) {
            if (input[13] < 0.1613026) {
                var35 = -0.040555112;
            } else {
                var35 = -0.25005215;
            }
        } else {
            var35 = 0.05397785;
        }
    } else {
        if (input[14] < 2.026503) {
            var35 = 0.21453428;
        } else {
            if (input[13] < 0.4613981) {
                if (input[13] < 0.4084785) {
                    if (input[13] < 0.3879468) {
                        var35 = 0.008493306;
                    } else {
                        var35 = -0.18297699;
                    }
                } else {
                    if (input[12] < 0.3290855) {
                        var35 = -0.047355488;
                    } else {
                        var35 = 0.16238876;
                    }
                }
            } else {
                if (input[0] < -0.02837474) {
                    if (input[15] < 0.3707558) {
                        var35 = -0.013885711;
                    } else {
                        var35 = -0.2305569;
                    }
                } else {
                    var35 = 0.24536377;
                }
            }
        }
    }
    var var36;
    if (input[9] < 0.3648999) {
        if (input[2] < 2.152025) {
            if (input[11] < 2.158105) {
                if (input[13] < -0.06737872) {
                    if (input[4] < 0.08192574) {
                        var36 = -0.29276615;
                    } else {
                        var36 = 0.036921576;
                    }
                } else {
                    if (input[14] < 2.074205) {
                        var36 = -0.03717753;
                    } else {
                        var36 = 0.048567772;
                    }
                }
            } else {
                var36 = -0.28097546;
            }
        } else {
            if (input[5] < 2.375968) {
                if (input[6] < -0.1350729) {
                    if (input[8] < 1.885604) {
                        var36 = -0.07043175;
                    } else {
                        var36 = 0.2462381;
                    }
                } else {
                    if (input[2] < 2.304224) {
                        var36 = 0.23498426;
                    } else {
                        var36 = -0.18141782;
                    }
                }
            } else {
                if (input[3] < -0.1089861) {
                    if (input[3] < -0.3014109) {
                        var36 = -0.05751381;
                    } else {
                        var36 = 0.25634575;
                    }
                } else {
                    if (input[6] < -0.1372693) {
                        var36 = -0.3408762;
                    } else {
                        var36 = 0.0067440043;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.107207) {
            if (input[5] < 2.377722) {
                var36 = -0.38853696;
            } else {
                var36 = -0.103492804;
            }
        } else {
            if (input[3] < -0.105981) {
                if (input[1] < 0.1988256) {
                    if (input[8] < 2.280036) {
                        var36 = -0.17468515;
                    } else {
                        var36 = 0.26407114;
                    }
                } else {
                    var36 = -0.32336056;
                }
            } else {
                if (input[17] < 2.116833) {
                    var36 = -0.045298517;
                } else {
                    var36 = 0.33223197;
                }
            }
        }
    }
    var var37;
    if (input[8] < 1.912002) {
        if (input[15] < 0.2390505) {
            if (input[9] < 0.1012877) {
                if (input[9] < 0.09331235) {
                    if (input[0] < -0.3843487) {
                        var37 = -0.15035735;
                    } else {
                        var37 = 0.2459164;
                    }
                } else {
                    if (input[6] < -0.5460761) {
                        var37 = 0.12953101;
                    } else {
                        var37 = -0.26059368;
                    }
                }
            } else {
                var37 = 0.25145474;
            }
        } else {
            if (input[9] < 0.2172751) {
                if (input[11] < 2.139695) {
                    if (input[13] < 0.2392486) {
                        var37 = -0.2817906;
                    } else {
                        var37 = 0.06784146;
                    }
                } else {
                    if (input[9] < 0.1321732) {
                        var37 = -0.17660224;
                    } else {
                        var37 = 0.20718522;
                    }
                }
            } else {
                if (input[1] < 0.09510513) {
                    var37 = -0.16223009;
                } else {
                    var37 = 0.2320993;
                }
            }
        }
    } else {
        if (input[5] < 2.003355) {
            var37 = 0.26106367;
        } else {
            if (input[11] < 2.075017) {
                if (input[8] < 1.973493) {
                    var37 = 0.19992939;
                } else {
                    if (input[17] < 2.012017) {
                        var37 = 0.11881389;
                    } else {
                        var37 = -0.25066236;
                    }
                }
            } else {
                if (input[5] < 2.052744) {
                    if (input[17] < 2.025028) {
                        var37 = -0.119930334;
                    } else {
                        var37 = 0.29673204;
                    }
                } else {
                    if (input[5] < 2.085058) {
                        var37 = -0.07625108;
                    } else {
                        var37 = 0.020110652;
                    }
                }
            }
        }
    }
    var var38;
    if (input[3] < -0.178226) {
        if (input[3] < -0.1832297) {
            if (input[17] < 2.016191) {
                if (input[0] < -0.1440609) {
                    if (input[15] < 0.5157478) {
                        var38 = -0.0796679;
                    } else {
                        var38 = 0.16820419;
                    }
                } else {
                    if (input[11] < 2.143919) {
                        var38 = 0.028828284;
                    } else {
                        var38 = -0.29768085;
                    }
                }
            } else {
                if (input[12] < 0.2663945) {
                    if (input[0] < -0.1983569) {
                        var38 = 0.016245132;
                    } else {
                        var38 = -0.13485087;
                    }
                } else {
                    if (input[11] < 2.154701) {
                        var38 = 0.2791241;
                    } else {
                        var38 = 0.00869524;
                    }
                }
            }
        } else {
            if (input[2] < 2.126716) {
                if (input[5] < 2.083522) {
                    var38 = -0.19062151;
                } else {
                    if (input[6] < -0.2174757) {
                        var38 = -0.02453323;
                    } else {
                        var38 = 0.33034968;
                    }
                }
            } else {
                if (input[4] < -0.06943943) {
                    if (input[11] < 2.148604) {
                        var38 = 0.07148022;
                    } else {
                        var38 = -0.2792466;
                    }
                } else {
                    if (input[14] < 2.050117) {
                        var38 = 0.29502788;
                    } else {
                        var38 = -0.02781659;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.1454355) {
            if (input[12] < 0.3227375) {
                if (input[0] < -0.1218736) {
                    var38 = -0.16493973;
                } else {
                    var38 = 0.2163051;
                }
            } else {
                var38 = -0.31014884;
            }
        } else {
            if (input[2] < 2.358206) {
                if (input[4] < -0.08302689) {
                    if (input[17] < 2.102761) {
                        var38 = -0.09324272;
                    } else {
                        var38 = 0.27124912;
                    }
                } else {
                    if (input[3] < -0.07115942) {
                        var38 = -0.18025146;
                    } else {
                        var38 = 0.124363735;
                    }
                }
            } else {
                if (input[3] < -0.1034364) {
                    if (input[16] < -0.2849392) {
                        var38 = -0.038877837;
                    } else {
                        var38 = -0.44575748;
                    }
                } else {
                    var38 = 0.18387505;
                }
            }
        }
    }
    var var39;
    if (input[8] < 1.902019) {
        if (input[15] < 0.2390505) {
            if (input[9] < 0.1049315) {
                if (input[0] < -0.2409447) {
                    if (input[1] < 0.229133) {
                        var39 = 0.2400154;
                    } else {
                        var39 = -0.17430949;
                    }
                } else {
                    var39 = -0.24032335;
                }
            } else {
                var39 = 0.23531212;
            }
        } else {
            if (input[9] < 0.1362537) {
                var39 = -0.28334603;
            } else {
                if (input[16] < -0.2737047) {
                    if (input[7] < 0.06613585) {
                        var39 = 0.06288655;
                    } else {
                        var39 = 0.24261999;
                    }
                } else {
                    if (input[4] < 0.2100555) {
                        var39 = -0.2728164;
                    } else {
                        var39 = 0.13541849;
                    }
                }
            }
        }
    } else {
        if (input[5] < 2.003355) {
            var39 = 0.24857222;
        } else {
            if (input[2] < 2.003217) {
                if (input[17] < 2.049344) {
                    if (input[3] < -0.4498132) {
                        var39 = 0.19255288;
                    } else {
                        var39 = -0.23953256;
                    }
                } else {
                    if (input[14] < 2.134635) {
                        var39 = -0.27444637;
                    } else {
                        var39 = 0.065681644;
                    }
                }
            } else {
                if (input[4] < -0.07173939) {
                    if (input[5] < 2.083522) {
                        var39 = -0.24600607;
                    } else {
                        var39 = -0.009597418;
                    }
                } else {
                    if (input[14] < 2.092746) {
                        var39 = 0.16464162;
                    } else {
                        var39 = 0.017399795;
                    }
                }
            }
        }
    }
    var var40;
    if (input[14] < 2.718132) {
        if (input[17] < 2.668064) {
            if (input[17] < 2.418927) {
                if (input[5] < 2.375968) {
                    if (input[11] < 2.322301) {
                        var40 = -0.008425839;
                    } else {
                        var40 = 0.12396257;
                    }
                } else {
                    if (input[8] < 2.289286) {
                        var40 = 0.12805557;
                    } else {
                        var40 = -0.20875323;
                    }
                }
            } else {
                var40 = 0.22160195;
            }
        } else {
            if (input[3] < -0.3014109) {
                if (input[13] < 0.2364878) {
                    if (input[4] < -0.07375525) {
                        var40 = -0.35394955;
                    } else {
                        var40 = -0.11506056;
                    }
                } else {
                    var40 = 0.026142793;
                }
            } else {
                var40 = 0.18942775;
            }
        }
    } else {
        if (input[3] < -0.3344435) {
            if (input[8] < 2.510136) {
                var40 = -0.19632734;
            } else {
                if (input[1] < 0.1247363) {
                    var40 = 0.22010024;
                } else {
                    var40 = 0.05990651;
                }
            }
        } else {
            var40 = 0.24704699;
        }
    }
    var var41;
    if (input[0] < -0.1387572) {
        if (input[9] < 0.2084323) {
            if (input[16] < -0.2816514) {
                if (input[12] < 0.1824703) {
                    if (input[0] < -0.2385466) {
                        var41 = 0.05888909;
                    } else {
                        var41 = -0.27341068;
                    }
                } else {
                    if (input[10] < 0.1912903) {
                        var41 = 0.15622494;
                    } else {
                        var41 = -0.28757086;
                    }
                }
            } else {
                if (input[14] < 2.076937) {
                    if (input[2] < 2.130938) {
                        var41 = 0.012350423;
                    } else {
                        var41 = -0.16493562;
                    }
                } else {
                    if (input[4] < 0.2700555) {
                        var41 = 0.122496836;
                    } else {
                        var41 = -0.049811322;
                    }
                }
            }
        } else {
            if (input[2] < 2.126716) {
                if (input[3] < -0.1824713) {
                    var41 = 0.020994002;
                } else {
                    var41 = 0.35484365;
                }
            } else {
                var41 = -0.047443558;
            }
        }
    } else {
        if (input[11] < 2.122123) {
            if (input[9] < 0.2115147) {
                var41 = -0.08316264;
            } else {
                var41 = 0.24867101;
            }
        } else {
            if (input[6] < -0.1454355) {
                if (input[4] < -0.07526994) {
                    var41 = -0.30358797;
                } else {
                    if (input[9] < 0.2022036) {
                        var41 = 0.16312952;
                    } else {
                        var41 = -0.1839694;
                    }
                }
            } else {
                if (input[2] < 2.358206) {
                    if (input[1] < 0.2001164) {
                        var41 = 0.13126379;
                    } else {
                        var41 = -0.07381014;
                    }
                } else {
                    if (input[10] < 0.2537086) {
                        var41 = -0.30078012;
                    } else {
                        var41 = 0.11677639;
                    }
                }
            }
        }
    }
    var var42;
    if (input[11] < 2.153508) {
        if (input[6] < -0.2153809) {
            if (input[9] < 0.2038038) {
                if (input[15] < 0.5253075) {
                    if (input[11] < 2.147265) {
                        var42 = 0.009208322;
                    } else {
                        var42 = -0.30393136;
                    }
                } else {
                    if (input[0] < -0.143456) {
                        var42 = 0.2882974;
                    } else {
                        var42 = -0.009224765;
                    }
                }
            } else {
                if (input[2] < 2.127407) {
                    if (input[11] < 2.121345) {
                        var42 = 0.15391399;
                    } else {
                        var42 = -0.2547741;
                    }
                } else {
                    if (input[11] < 2.146672) {
                        var42 = 0.25591633;
                    } else {
                        var42 = 0.033480268;
                    }
                }
            }
        } else {
            if (input[4] < -0.07069238) {
                if (input[2] < 2.130938) {
                    if (input[0] < -0.1387572) {
                        var42 = 0.22259781;
                    } else {
                        var42 = -0.07992409;
                    }
                } else {
                    if (input[7] < -0.2747199) {
                        var42 = 0.066674344;
                    } else {
                        var42 = -0.3135024;
                    }
                }
            } else {
                if (input[5] < 2.080566) {
                    var42 = 0.059159577;
                } else {
                    var42 = 0.33151233;
                }
            }
        }
    } else {
        if (input[14] < 2.0955) {
            if (input[12] < 0.3964142) {
                var42 = -0.3224805;
            } else {
                var42 = 0.007869112;
            }
        } else {
            if (input[11] < 2.158105) {
                var42 = 0.27246138;
            } else {
                if (input[5] < 2.10261) {
                    var42 = -0.26919195;
                } else {
                    if (input[5] < 2.330077) {
                        var42 = 0.22873962;
                    } else {
                        var42 = -0.029116884;
                    }
                }
            }
        }
    }
    var var43;
    if (input[10] < 0.2463419) {
        if (input[16] < 0.5367772) {
            if (input[11] < 2.122123) {
                if (input[4] < -0.0756643) {
                    var43 = -0.057727367;
                } else {
                    var43 = 0.23322298;
                }
            } else {
                if (input[0] < -0.03001728) {
                    if (input[7] < -0.2702799) {
                        var43 = 0.044902336;
                    } else {
                        var43 = -0.044629432;
                    }
                } else {
                    var43 = -0.24213217;
                }
            }
        } else {
            if (input[14] < 2.056215) {
                var43 = 0.11502779;
            } else {
                if (input[1] < 0.1795499) {
                    var43 = -0.03544158;
                } else {
                    var43 = -0.30667606;
                }
            }
        }
    } else {
        if (input[10] < 0.2617418) {
            if (input[11] < 2.151285) {
                if (input[4] < -0.0756643) {
                    var43 = 0.01784078;
                } else {
                    var43 = 0.32429597;
                }
            } else {
                if (input[4] < -0.08027947) {
                    if (input[2] < 2.353847) {
                        var43 = 0.20815258;
                    } else {
                        var43 = -0.08825001;
                    }
                } else {
                    if (input[0] < -0.1440609) {
                        var43 = 0.11654555;
                    } else {
                        var43 = -0.20798641;
                    }
                }
            }
        } else {
            if (input[2] < 2.354945) {
                if (input[5] < 2.375968) {
                    if (input[1] < 0.1819977) {
                        var43 = -0.17189245;
                    } else {
                        var43 = 0.037365526;
                    }
                } else {
                    if (input[1] < 0.5456758) {
                        var43 = -0.26996323;
                    } else {
                        var43 = -0.05657326;
                    }
                }
            } else {
                var43 = 0.23557524;
            }
        }
    }
    var var44;
    if (input[6] < -0.6388019) {
        if (input[11] < 2.080573) {
            var44 = -0.21895012;
        } else {
            var44 = -0.051294602;
        }
    } else {
        if (input[4] < -0.08729105) {
            if (input[9] < 0.3566573) {
                if (input[5] < 2.375968) {
                    if (input[11] < 2.315386) {
                        var44 = -0.07762018;
                    } else {
                        var44 = 0.2338446;
                    }
                } else {
                    if (input[0] < -0.2822151) {
                        var44 = 0.051720034;
                    } else {
                        var44 = -0.24484514;
                    }
                }
            } else {
                var44 = -0.36548197;
            }
        } else {
            if (input[14] < 2.718132) {
                if (input[17] < 2.660752) {
                    if (input[11] < 2.322301) {
                        var44 = -0.00035364146;
                    } else {
                        var44 = 0.09099334;
                    }
                } else {
                    if (input[3] < -0.3014109) {
                        var44 = -0.22705121;
                    } else {
                        var44 = 0.17413726;
                    }
                }
            } else {
                if (input[15] < 0.1680761) {
                    var44 = -0.06489656;
                } else {
                    var44 = 0.2350101;
                }
            }
        }
    }
    var var45;
    if (input[7] < -0.3148971) {
        if (input[3] < -0.1034364) {
            if (input[17] < 2.131697) {
                var45 = -0.29688296;
            } else {
                if (input[13] < -0.06082493) {
                    if (input[2] < 2.359941) {
                        var45 = -0.020430753;
                    } else {
                        var45 = -0.26049158;
                    }
                } else {
                    if (input[0] < -0.03464274) {
                        var45 = 0.12628774;
                    } else {
                        var45 = -0.0753334;
                    }
                }
            }
        } else {
            if (input[9] < 0.3648999) {
                if (input[5] < 2.375968) {
                    var45 = 0.24242231;
                } else {
                    var45 = -0.12316383;
                }
            } else {
                var45 = -0.13968182;
            }
        }
    } else {
        if (input[6] < -0.6388019) {
            if (input[11] < 2.080573) {
                var45 = -0.1998511;
            } else {
                var45 = -0.043552164;
            }
        } else {
            if (input[16] < 0.724304) {
                if (input[13] < 0.4538512) {
                    if (input[3] < -0.6647195) {
                        var45 = 0.3174292;
                    } else {
                        var45 = 0.009731638;
                    }
                } else {
                    if (input[17] < 2.010102) {
                        var45 = 0.13119589;
                    } else {
                        var45 = -0.1649166;
                    }
                }
            } else {
                if (input[7] < 0.06056791) {
                    var45 = 0.21876208;
                } else {
                    var45 = 0.049603287;
                }
            }
        }
    }
    var var46;
    if (input[3] < -0.1787524) {
        if (input[3] < -0.1832297) {
            if (input[14] < 2.076937) {
                if (input[11] < 2.147265) {
                    if (input[9] < 0.2052633) {
                        var46 = 0.043243803;
                    } else {
                        var46 = -0.26943693;
                    }
                } else {
                    if (input[4] < -0.06943943) {
                        var46 = -0.27103925;
                    } else {
                        var46 = 0.22356974;
                    }
                }
            } else {
                if (input[12] < 0.2663945) {
                    if (input[9] < 0.138732) {
                        var46 = 0.016843343;
                    } else {
                        var46 = -0.20662615;
                    }
                } else {
                    if (input[0] < -0.1412541) {
                        var46 = 0.24142234;
                    } else {
                        var46 = -0.017649848;
                    }
                }
            }
        } else {
            if (input[2] < 2.132281) {
                if (input[0] < -0.1387572) {
                    if (input[15] < 0.519838) {
                        var46 = -0.06575412;
                    } else {
                        var46 = 0.2822278;
                    }
                } else {
                    if (input[9] < 0.2022036) {
                        var46 = 0.14378989;
                    } else {
                        var46 = -0.2253759;
                    }
                }
            } else {
                var46 = -0.20855884;
            }
        }
    } else {
        if (input[1] < 0.1818711) {
            if (input[0] < -0.120859) {
                var46 = -0.25566646;
            } else {
                var46 = 0.034659225;
            }
        } else {
            if (input[2] < 2.304224) {
                var46 = 0.2291043;
            } else {
                if (input[8] < 2.31081) {
                    if (input[2] < 2.358206) {
                        var46 = 0.04849598;
                    } else {
                        var46 = -0.21337439;
                    }
                } else {
                    if (input[11] < 2.322301) {
                        var46 = -0.2737304;
                    } else {
                        var46 = -0.035288896;
                    }
                }
            }
        }
    }
    var var47;
    if (input[7] < -0.3148971) {
        if (input[5] < 2.375968) {
            if (input[8] < 2.294634) {
                if (input[17] < 2.116833) {
                    var47 = -0.24316001;
                } else {
                    if (input[12] < 0.4733077) {
                        var47 = -0.057862934;
                    } else {
                        var47 = 0.19658332;
                    }
                }
            } else {
                var47 = 0.230998;
            }
        } else {
            if (input[11] < 2.77267) {
                if (input[12] < 0.6227523) {
                    if (input[8] < 2.289286) {
                        var47 = -0.085154355;
                    } else {
                        var47 = -0.25166085;
                    }
                } else {
                    var47 = -0.0067326454;
                }
            } else {
                var47 = 0.10741899;
            }
        }
    } else {
        if (input[5] < 1.970664) {
            if (input[14] < 2.109825) {
                if (input[7] < -0.01587861) {
                    var47 = -0.12735036;
                } else {
                    var47 = 0.1855933;
                }
            } else {
                var47 = -0.21674357;
            }
        } else {
            if (input[14] < 2.098552) {
                if (input[8] < 1.902019) {
                    if (input[4] < 0.0913685) {
                        var47 = 0.010015581;
                    } else {
                        var47 = -0.2259541;
                    }
                } else {
                    if (input[11] < 2.153508) {
                        var47 = 0.018261066;
                    } else {
                        var47 = -0.17342143;
                    }
                }
            } else {
                if (input[8] < 2.31081) {
                    if (input[2] < 2.117833) {
                        var47 = -0.03079526;
                    } else {
                        var47 = 0.1048515;
                    }
                } else {
                    if (input[9] < 0.0289804) {
                        var47 = 0.07438195;
                    } else {
                        var47 = -0.10485912;
                    }
                }
            }
        }
    }
    var var48;
    if (input[0] < -0.143456) {
        if (input[15] < 0.5157478) {
            if (input[12] < 0.3407567) {
                if (input[9] < 0.1848348) {
                    if (input[12] < 0.1883886) {
                        var48 = 0.023204006;
                    } else {
                        var48 = -0.09190895;
                    }
                } else {
                    if (input[3] < -0.1865176) {
                        var48 = 0.24158959;
                    } else {
                        var48 = -0.016890457;
                    }
                }
            } else {
                if (input[1] < 0.180823) {
                    var48 = -0.39467567;
                } else {
                    var48 = 0.10095859;
                }
            }
        } else {
            if (input[11] < 2.15032) {
                var48 = 0.28840533;
            } else {
                if (input[3] < -0.1861245) {
                    if (input[15] < 0.5483892) {
                        var48 = -0.1220032;
                    } else {
                        var48 = 0.2332604;
                    }
                } else {
                    var48 = -0.22210763;
                }
            }
        }
    } else {
        if (input[11] < 2.143254) {
            if (input[15] < 0.3334272) {
                if (input[11] < 2.122123) {
                    var48 = -0.025443338;
                } else {
                    var48 = -0.21271078;
                }
            } else {
                if (input[12] < 0.369374) {
                    if (input[9] < 0.1936993) {
                        var48 = 0.015483111;
                    } else {
                        var48 = 0.26023996;
                    }
                } else {
                    if (input[14] < 2.05473) {
                        var48 = 0.21616046;
                    } else {
                        var48 = -0.12924075;
                    }
                }
            }
        } else {
            if (input[6] < -0.2171069) {
                if (input[17] < 2.019241) {
                    if (input[1] < 0.1806968) {
                        var48 = 0.08704509;
                    } else {
                        var48 = -0.34130085;
                    }
                } else {
                    if (input[15] < 0.5445852) {
                        var48 = 0.110469446;
                    } else {
                        var48 = 0.025199248;
                    }
                }
            } else {
                if (input[2] < 2.127069) {
                    if (input[17] < 1.943031) {
                        var48 = -0.24044926;
                    } else {
                        var48 = 0.16791584;
                    }
                } else {
                    if (input[8] < 2.280036) {
                        var48 = -0.1363088;
                    } else {
                        var48 = 0.005386187;
                    }
                }
            }
        }
    }
    var var49;
    if (input[9] < 0.379652) {
        if (input[6] < -0.6366308) {
            if (input[14] < 2.117664) {
                var49 = -0.20327091;
            } else {
                var49 = 0.028881805;
            }
        } else {
            if (input[9] < -0.02372335) {
                if (input[8] < 2.106408) {
                    if (input[17] < 1.979057) {
                        var49 = -0.049166314;
                    } else {
                        var49 = 0.3054096;
                    }
                } else {
                    if (input[3] < -0.6596826) {
                        var49 = -0.18590459;
                    } else {
                        var49 = 0.010247613;
                    }
                }
            } else {
                if (input[12] < 0.1824703) {
                    if (input[16] < -0.2816514) {
                        var49 = -0.16684803;
                    } else {
                        var49 = 0.028109565;
                    }
                } else {
                    if (input[12] < 0.1883886) {
                        var49 = 0.15586197;
                    } else {
                        var49 = -0.005174635;
                    }
                }
            }
        }
    } else {
        if (input[9] < 0.3922458) {
            if (input[14] < 2.230457) {
                var49 = -0.22524017;
            } else {
                var49 = -0.049143452;
            }
        } else {
            var49 = 0.08726512;
        }
    }
    var var50;
    if (input[11] < 2.075017) {
        if (input[6] < -0.4557327) {
            if (input[3] < -0.6647195) {
                var50 = -0.011470636;
            } else {
                var50 = -0.25289056;
            }
        } else {
            if (input[1] < 0.3957981) {
                var50 = -0.21825172;
            } else {
                if (input[15] < 0.3605486) {
                    if (input[16] < -0.01755439) {
                        var50 = 0.018865451;
                    } else {
                        var50 = 0.24209447;
                    }
                } else {
                    if (input[7] < -0.03541327) {
                        var50 = -0.18442686;
                    } else {
                        var50 = 0.05426504;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.4125773) {
            if (input[9] < -0.2319593) {
                var50 = -0.062189728;
            } else {
                if (input[17] < 2.017564) {
                    var50 = -0.05037446;
                } else {
                    if (input[7] < -0.2827667) {
                        var50 = -0.012371845;
                    } else {
                        var50 = 0.26337826;
                    }
                }
            }
        } else {
            if (input[11] < 2.123226) {
                if (input[6] < -0.2166017) {
                    var50 = 0.21483351;
                } else {
                    var50 = -0.025866745;
                }
            } else {
                if (input[2] < 2.120021) {
                    if (input[9] < 0.1012877) {
                        var50 = -0.22148111;
                    } else {
                        var50 = -0.0062764683;
                    }
                } else {
                    if (input[2] < 2.130938) {
                        var50 = 0.042079784;
                    } else {
                        var50 = -0.022079606;
                    }
                }
            }
        }
    }
    var var51;
    if (input[3] < -0.06884018) {
        if (input[6] < -0.1350729) {
            if (input[6] < -0.1372693) {
                if (input[7] < -0.31334) {
                    if (input[3] < -0.1034364) {
                        var51 = -0.14341894;
                    } else {
                        var51 = 0.06049125;
                    }
                } else {
                    if (input[0] < -0.1179881) {
                        var51 = -0.0018855255;
                    } else {
                        var51 = 0.15952142;
                    }
                }
            } else {
                if (input[11] < 2.324035) {
                    var51 = -0.06269775;
                } else {
                    var51 = 0.23136178;
                }
            }
        } else {
            if (input[5] < 2.330077) {
                var51 = -0.037761163;
            } else {
                var51 = -0.2502628;
            }
        }
    } else {
        if (input[2] < 2.311973) {
            var51 = 0.25044003;
        } else {
            var51 = -0.16084616;
        }
    }
    var var52;
    if (input[8] < 2.49051) {
        if (input[2] < 2.611219) {
            if (input[17] < 2.418927) {
                if (input[8] < 2.339401) {
                    if (input[1] < 0.512127) {
                        var52 = -0.0055626878;
                    } else {
                        var52 = 0.1968883;
                    }
                } else {
                    var52 = -0.18281873;
                }
            } else {
                if (input[16] < -0.2389521) {
                    var52 = -0.0301253;
                } else {
                    var52 = 0.21081175;
                }
            }
        } else {
            if (input[16] < -0.131059) {
                var52 = 0.026292708;
            } else {
                var52 = -0.2159523;
            }
        }
    } else {
        if (input[12] < 0.1706722) {
            if (input[10] < 0.1743566) {
                var52 = -0.15411238;
            } else {
                var52 = 0.089807265;
            }
        } else {
            if (input[12] < 0.2623494) {
                var52 = 0.20804515;
            } else {
                var52 = 0.025838308;
            }
        }
    }
    var var53;
    if (input[4] < 0.3177055) {
        if (input[16] < -0.3012204) {
            if (input[11] < 2.13581) {
                if (input[12] < 0.1832692) {
                    var53 = -0.19283874;
                } else {
                    if (input[1] < 0.2060926) {
                        var53 = 0.31021884;
                    } else {
                        var53 = -0.007938904;
                    }
                }
            } else {
                if (input[12] < 0.1883886) {
                    if (input[10] < 0.1898751) {
                        var53 = -0.24679329;
                    } else {
                        var53 = 0.17717268;
                    }
                } else {
                    var53 = -0.33505967;
                }
            }
        } else {
            if (input[16] < -0.2860918) {
                if (input[0] < -0.03001728) {
                    if (input[5] < 2.022131) {
                        var53 = -0.02490435;
                    } else {
                        var53 = 0.24040051;
                    }
                } else {
                    var53 = -0.1462645;
                }
            } else {
                if (input[5] < 2.089453) {
                    if (input[2] < 2.125799) {
                        var53 = -0.0054055694;
                    } else {
                        var53 = -0.20249297;
                    }
                } else {
                    if (input[11] < 2.147265) {
                        var53 = 0.122408874;
                    } else {
                        var53 = 0.0017527469;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.13581) {
            if (input[16] < -0.2657458) {
                var53 = -0.20543627;
            } else {
                var53 = 0.107994385;
            }
        } else {
            var53 = 0.26464328;
        }
    }
    var var54;
    if (input[0] < -0.143456) {
        if (input[15] < 0.5157478) {
            if (input[14] < 2.080762) {
                if (input[1] < 0.180823) {
                    var54 = -0.3352737;
                } else {
                    if (input[6] < -0.4557327) {
                        var54 = -0.20470962;
                    } else {
                        var54 = 0.03073031;
                    }
                }
            } else {
                if (input[12] < 0.3039618) {
                    if (input[10] < 0.1898751) {
                        var54 = -0.043486293;
                    } else {
                        var54 = 0.044893302;
                    }
                } else {
                    var54 = 0.23063067;
                }
            }
        } else {
            if (input[11] < 2.15032) {
                var54 = 0.2718794;
            } else {
                if (input[17] < 1.938784) {
                    if (input[4] < -0.07793036) {
                        var54 = 0.002223257;
                    } else {
                        var54 = -0.18929738;
                    }
                } else {
                    var54 = 0.17365403;
                }
            }
        }
    } else {
        if (input[0] < -0.1426577) {
            if (input[1] < 0.180823) {
                var54 = 0.15191905;
            } else {
                if (input[6] < -0.2171069) {
                    var54 = -0.37710312;
                } else {
                    var54 = -0.043916028;
                }
            }
        } else {
            if (input[1] < 0.1797476) {
                if (input[11] < 2.151285) {
                    if (input[17] < 2.008866) {
                        var54 = -0.13441476;
                    } else {
                        var54 = 0.089184724;
                    }
                } else {
                    var54 = -0.22390735;
                }
            } else {
                if (input[1] < 0.1803833) {
                    if (input[3] < -0.1804052) {
                        var54 = 0.2554788;
                    } else {
                        var54 = -0.16169633;
                    }
                } else {
                    if (input[9] < 0.207078) {
                        var54 = -0.07335218;
                    } else {
                        var54 = 0.019559065;
                    }
                }
            }
        }
    }
    var var55;
    if (input[10] < 0.1689312) {
        if (input[13] < -0.1041391) {
            if (input[9] < 0.0289804) {
                var55 = 0.08100515;
            } else {
                var55 = -0.13918075;
            }
        } else {
            if (input[15] < 0.3675369) {
                var55 = 0.22740632;
            } else {
                var55 = 0.022416433;
            }
        }
    } else {
        if (input[4] < -0.08729105) {
            if (input[7] < -0.3203184) {
                var55 = 0.10563968;
            } else {
                var55 = -0.25317603;
            }
        } else {
            if (input[1] < 0.1561756) {
                if (input[4] < -0.07375525) {
                    if (input[9] < 0.03202783) {
                        var55 = -0.21682078;
                    } else {
                        var55 = -0.026472708;
                    }
                } else {
                    var55 = 0.027593277;
                }
            } else {
                if (input[11] < 2.320537) {
                    if (input[2] < 2.311973) {
                        var55 = -0.00252672;
                    } else {
                        var55 = -0.25307328;
                    }
                } else {
                    if (input[1] < 0.1997068) {
                        var55 = 0.14040554;
                    } else {
                        var55 = -0.014390833;
                    }
                }
            }
        }
    }
    var var56;
    if (input[3] < -0.07115942) {
        if (input[6] < -0.1350729) {
            if (input[11] < 2.075017) {
                if (input[8] < 1.973493) {
                    if (input[10] < 0.4061104) {
                        var56 = -0.16288453;
                    } else {
                        var56 = 0.19460668;
                    }
                } else {
                    if (input[17] < 2.012017) {
                        var56 = 0.061010413;
                    } else {
                        var56 = -0.16334805;
                    }
                }
            } else {
                if (input[3] < -0.4125773) {
                    if (input[6] < -0.6366308) {
                        var56 = -0.02807591;
                    } else {
                        var56 = 0.18712151;
                    }
                } else {
                    if (input[11] < 2.122123) {
                        var56 = 0.14402361;
                    } else {
                        var56 = -0.0049548275;
                    }
                }
            }
        } else {
            var56 = -0.23009972;
        }
    } else {
        if (input[2] < 2.311973) {
            var56 = 0.22391506;
        } else {
            var56 = -0.13654745;
        }
    }
    var var57;
    if (input[0] < -0.1387572) {
        if (input[12] < 0.3808358) {
            if (input[9] < 0.2045274) {
                if (input[2] < 2.130562) {
                    if (input[2] < 2.120021) {
                        var57 = -0.027731577;
                    } else {
                        var57 = 0.16156004;
                    }
                } else {
                    if (input[17] < 2.014581) {
                        var57 = -0.19286056;
                    } else {
                        var57 = 0.015583738;
                    }
                }
            } else {
                var57 = -0.2547665;
            }
        } else {
            if (input[1] < 0.1819977) {
                if (input[11] < 2.153508) {
                    if (input[8] < 1.993883) {
                        var57 = 0.09070158;
                    } else {
                        var57 = 0.27284795;
                    }
                } else {
                    if (input[1] < 0.1806968) {
                        var57 = -0.17995918;
                    } else {
                        var57 = 0.17221819;
                    }
                }
            } else {
                if (input[5] < 2.085854) {
                    var57 = 0.2628989;
                } else {
                    if (input[9] < 0.207078) {
                        var57 = -0.26006314;
                    } else {
                        var57 = 0.07117279;
                    }
                }
            }
        }
    } else {
        if (input[1] < 0.1819977) {
            if (input[4] < -0.07526994) {
                var57 = -0.23206027;
            } else {
                if (input[9] < 0.2022036) {
                    if (input[2] < 2.127803) {
                        var57 = 0.28019944;
                    } else {
                        var57 = -0.17978743;
                    }
                } else {
                    if (input[15] < 0.3925745) {
                        var57 = -0.04678844;
                    } else {
                        var57 = -0.19897301;
                    }
                }
            }
        } else {
            if (input[2] < 2.358206) {
                if (input[8] < 2.294634) {
                    if (input[4] < -0.08729105) {
                        var57 = -0.22093366;
                    } else {
                        var57 = 0.15560302;
                    }
                } else {
                    if (input[5] < 2.377722) {
                        var57 = 0.054120686;
                    } else {
                        var57 = -0.26016313;
                    }
                }
            } else {
                if (input[3] < -0.105981) {
                    var57 = -0.24952587;
                } else {
                    var57 = 0.049554285;
                }
            }
        }
    }
    var var58;
    if (input[4] < 0.3177055) {
        if (input[16] < -0.3012204) {
            if (input[11] < 2.13581) {
                if (input[12] < 0.1832692) {
                    var58 = -0.17373477;
                } else {
                    if (input[1] < 0.2022841) {
                        var58 = 0.28116623;
                    } else {
                        var58 = -0.008504138;
                    }
                }
            } else {
                if (input[2] < 2.152025) {
                    if (input[7] < -0.2131342) {
                        var58 = 0.010956829;
                    } else {
                        var58 = -0.28806254;
                    }
                } else {
                    if (input[4] < 0.1260297) {
                        var58 = -0.10521898;
                    } else {
                        var58 = 0.21529791;
                    }
                }
            }
        } else {
            if (input[0] < -0.143456) {
                if (input[15] < 0.5157478) {
                    if (input[15] < 0.4791657) {
                        var58 = 0.032698322;
                    } else {
                        var58 = -0.14369678;
                    }
                } else {
                    if (input[11] < 2.15032) {
                        var58 = 0.25464982;
                    } else {
                        var58 = -0.003630171;
                    }
                }
            } else {
                if (input[8] < 1.993883) {
                    if (input[6] < -0.2148649) {
                        var58 = -0.18788688;
                    } else {
                        var58 = -0.009834835;
                    }
                } else {
                    if (input[2] < 2.126716) {
                        var58 = 0.0985273;
                    } else {
                        var58 = -0.035097547;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.13581) {
            if (input[16] < -0.2657458) {
                var58 = -0.17998664;
            } else {
                var58 = 0.090574846;
            }
        } else {
            var58 = 0.24239361;
        }
    }
    var var59;
    if (input[10] < 0.1689312) {
        if (input[13] < -0.08618366) {
            if (input[9] < 0.0289804) {
                var59 = 0.05565394;
            } else {
                var59 = -0.10862869;
            }
        } else {
            if (input[15] < 0.3675369) {
                var59 = 0.20667687;
            } else {
                var59 = 0.017911842;
            }
        }
    } else {
        if (input[1] < 0.1788697) {
            if (input[8] < 2.49051) {
                if (input[16] < -0.2512242) {
                    var59 = 0.018840376;
                } else {
                    if (input[17] < 2.73876) {
                        var59 = -0.2370459;
                    } else {
                        var59 = -0.01220697;
                    }
                }
            } else {
                if (input[8] < 2.50215) {
                    var59 = 0.15139727;
                } else {
                    if (input[14] < 2.718132) {
                        var59 = -0.12300224;
                    } else {
                        var59 = 0.05483473;
                    }
                }
            }
        } else {
            if (input[2] < 2.3651) {
                if (input[2] < 2.359941) {
                    if (input[8] < 2.339401) {
                        var59 = 0.0055017024;
                    } else {
                        var59 = -0.16124348;
                    }
                } else {
                    var59 = -0.19432358;
                }
            } else {
                var59 = 0.18812667;
            }
        }
    }
    var var60;
    if (input[11] < 2.010963) {
        var60 = -0.1385255;
    } else {
        if (input[9] < 0.09331235) {
            if (input[8] < 1.973493) {
                var60 = 0.23736547;
            } else {
                if (input[3] < -0.3014109) {
                    if (input[17] < 2.01376) {
                        var60 = 0.19197959;
                    } else {
                        var60 = -0.039466325;
                    }
                } else {
                    var60 = 0.20211495;
                }
            }
        } else {
            if (input[12] < 0.154308) {
                if (input[6] < -0.5277131) {
                    var60 = 0.034471292;
                } else {
                    var60 = -0.25083676;
                }
            } else {
                if (input[12] < 0.1668749) {
                    var60 = 0.21709882;
                } else {
                    if (input[9] < 0.1296435) {
                        var60 = -0.20579046;
                    } else {
                        var60 = 0.00079041143;
                    }
                }
            }
        }
    }
    var var61;
    if (input[17] < 2.112313) {
        if (input[11] < 2.158105) {
            if (input[1] < 0.180249) {
                if (input[5] < 2.090173) {
                    if (input[16] < -0.2512242) {
                        var61 = 0.1053826;
                    } else {
                        var61 = -0.19960271;
                    }
                } else {
                    if (input[9] < 0.1907612) {
                        var61 = 0.0036750264;
                    } else {
                        var61 = 0.25584823;
                    }
                }
            } else {
                if (input[8] < 2.011312) {
                    if (input[14] < 2.091115) {
                        var61 = -0.036612354;
                    } else {
                        var61 = 0.04127965;
                    }
                } else {
                    if (input[14] < 2.091928) {
                        var61 = 0.031093298;
                    } else {
                        var61 = -0.20761816;
                    }
                }
            }
        } else {
            if (input[8] < 2.294634) {
                if (input[3] < -0.1839669) {
                    var61 = -0.0100626275;
                } else {
                    var61 = -0.2229815;
                }
            } else {
                var61 = 0.0062920195;
            }
        }
    } else {
        if (input[5] < 2.075577) {
            var61 = 0.21790992;
        } else {
            if (input[11] < 2.320537) {
                if (input[3] < -0.06884018) {
                    var61 = -0.23106323;
                } else {
                    if (input[8] < 2.3158) {
                        var61 = 0.17527564;
                    } else {
                        var61 = -0.059244215;
                    }
                }
            } else {
                if (input[8] < 2.294634) {
                    if (input[2] < 2.358206) {
                        var61 = 0.25245932;
                    } else {
                        var61 = -0.05464226;
                    }
                } else {
                    if (input[5] < 2.375968) {
                        var61 = 0.12419183;
                    } else {
                        var61 = -0.038162358;
                    }
                }
            }
        }
    }
    var var62;
    if (input[9] < 0.2022036) {
        if (input[9] < 0.1954591) {
            if (input[0] < -0.1403011) {
                if (input[4] < -0.07838758) {
                    if (input[1] < 0.1806968) {
                        var62 = 0.020239228;
                    } else {
                        var62 = 0.21726583;
                    }
                } else {
                    if (input[7] < -0.269053) {
                        var62 = -0.1830875;
                    } else {
                        var62 = 0.0049979705;
                    }
                }
            } else {
                if (input[4] < -0.06943943) {
                    var62 = -0.27436572;
                } else {
                    var62 = 0.090164855;
                }
            }
        } else {
            if (input[11] < 2.154701) {
                if (input[14] < 2.050117) {
                    if (input[8] < 2.001297) {
                        var62 = -0.054758184;
                    } else {
                        var62 = 0.21336824;
                    }
                } else {
                    if (input[2] < 2.123644) {
                        var62 = 0.01482442;
                    } else {
                        var62 = 0.26327157;
                    }
                }
            } else {
                var62 = -0.14189284;
            }
        }
    } else {
        if (input[8] < 1.992283) {
            if (input[16] < -0.2737047) {
                var62 = 0.1424437;
            } else {
                if (input[6] < -0.2140269) {
                    if (input[2] < 2.126716) {
                        var62 = -0.27772567;
                    } else {
                        var62 = -0.035302054;
                    }
                } else {
                    var62 = -0.0071111484;
                }
            }
        } else {
            if (input[12] < 0.3808358) {
                if (input[8] < 2.005682) {
                    if (input[17] < 2.017564) {
                        var62 = -0.24363841;
                    } else {
                        var62 = -0.012463212;
                    }
                } else {
                    var62 = 0.14748426;
                }
            } else {
                if (input[2] < 2.304224) {
                    if (input[17] < 1.955907) {
                        var62 = -0.08567237;
                    } else {
                        var62 = 0.18600239;
                    }
                } else {
                    if (input[11] < 2.320537) {
                        var62 = -0.191317;
                    } else {
                        var62 = 0.0057297596;
                    }
                }
            }
        }
    }
    var var63;
    if (input[5] < 1.970664) {
        if (input[14] < 2.109825) {
            var63 = 0.034966033;
        } else {
            var63 = -0.18117246;
        }
    } else {
        if (input[17] < 2.025695) {
            if (input[15] < 0.5483892) {
                if (input[11] < 2.151285) {
                    if (input[13] < 0.4084785) {
                        var63 = -0.058792565;
                    } else {
                        var63 = 0.12964885;
                    }
                } else {
                    var63 = -0.223255;
                }
            } else {
                if (input[1] < 0.1824314) {
                    if (input[17] < 1.955907) {
                        var63 = 0.005728077;
                    } else {
                        var63 = 0.20759808;
                    }
                } else {
                    if (input[8] < 1.993883) {
                        var63 = -0.20139691;
                    } else {
                        var63 = 0.02814227;
                    }
                }
            }
        } else {
            if (input[4] < 0.303126) {
                if (input[17] < 2.041873) {
                    if (input[11] < 2.137984) {
                        var63 = 0.13659382;
                    } else {
                        var63 = -0.04109644;
                    }
                } else {
                    if (input[16] < -0.291344) {
                        var63 = -0.16270712;
                    } else {
                        var63 = 0.024817435;
                    }
                }
            } else {
                if (input[11] < 2.136796) {
                    var63 = 0.027690787;
                } else {
                    var63 = 0.22344695;
                }
            }
        }
    }
    var var64;
    if (input[10] < 0.1631017) {
        if (input[7] < -0.3166338) {
            var64 = -0.022009877;
        } else {
            if (input[9] < 0.03013267) {
                var64 = 0.20371345;
            } else {
                var64 = 0.00896941;
            }
        }
    } else {
        if (input[14] < 2.72071) {
            if (input[14] < 2.701116) {
                if (input[2] < 2.3651) {
                    if (input[2] < 2.359941) {
                        var64 = -0.003614389;
                    } else {
                        var64 = -0.16747224;
                    }
                } else {
                    if (input[8] < 2.50215) {
                        var64 = 0.16943692;
                    } else {
                        var64 = 0.029001253;
                    }
                }
            } else {
                if (input[0] < -0.2806026) {
                    var64 = -0.20809102;
                } else {
                    var64 = -0.006184514;
                }
            }
        } else {
            if (input[4] < -0.0756643) {
                var64 = -0.05420975;
            } else {
                var64 = 0.18394512;
            }
        }
    }
    var var65;
    if (input[2] < 2.003217) {
        if (input[1] < 0.3971142) {
            if (input[3] < -0.4526371) {
                var65 = 0.072700955;
            } else {
                var65 = -0.2294601;
            }
        } else {
            if (input[16] < 0.2488978) {
                if (input[12] < 0.09787771) {
                    var65 = 0.23645285;
                } else {
                    var65 = -0.04029347;
                }
            } else {
                if (input[5] < 2.050033) {
                    var65 = 0.04939423;
                } else {
                    var65 = -0.19637412;
                }
            }
        }
    } else {
        if (input[11] < 2.124135) {
            if (input[5] < 2.077983) {
                if (input[0] < -0.5918816) {
                    var65 = 0.052096482;
                } else {
                    var65 = 0.19311719;
                }
            } else {
                var65 = -0.037880868;
            }
        } else {
            if (input[2] < 2.120021) {
                if (input[4] < 0.2579846) {
                    var65 = -0.20586236;
                } else {
                    if (input[12] < 0.154308) {
                        var65 = -0.119847074;
                    } else {
                        var65 = 0.15756936;
                    }
                }
            } else {
                if (input[10] < 0.2463419) {
                    if (input[13] < 0.3879468) {
                        var65 = 0.0070912293;
                    } else {
                        var65 = -0.13701385;
                    }
                } else {
                    if (input[10] < 0.2632348) {
                        var65 = 0.12182445;
                    } else {
                        var65 = -0.01327952;
                    }
                }
            }
        }
    }
    var var66;
    if (input[12] < 0.5325511) {
        if (input[2] < 2.152025) {
            if (input[11] < 2.158105) {
                if (input[13] < -0.06496227) {
                    if (input[11] < 2.13581) {
                        var66 = 0.081510834;
                    } else {
                        var66 = -0.20499045;
                    }
                } else {
                    if (input[14] < 2.092746) {
                        var66 = -0.015886521;
                    } else {
                        var66 = 0.060219977;
                    }
                }
            } else {
                var66 = -0.18633546;
            }
        } else {
            if (input[5] < 2.375968) {
                if (input[16] < 0.3374497) {
                    if (input[9] < 0.3566573) {
                        var66 = 0.10421832;
                    } else {
                        var66 = -0.16957119;
                    }
                } else {
                    var66 = 0.22251622;
                }
            } else {
                if (input[9] < 0.0289804) {
                    if (input[4] < -0.07375525) {
                        var66 = 0.004312778;
                    } else {
                        var66 = 0.18859874;
                    }
                } else {
                    if (input[3] < -0.3049593) {
                        var66 = -0.13458417;
                    } else {
                        var66 = 0.038421266;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.328007) {
            var66 = -0.15852177;
        } else {
            if (input[17] < 2.121461) {
                if (input[8] < 2.289286) {
                    var66 = -0.1709484;
                } else {
                    var66 = 0.005405452;
                }
            } else {
                var66 = 0.13050467;
            }
        }
    }
    var var67;
    if (input[0] < -0.1387572) {
        if (input[7] < -0.2724791) {
            if (input[3] < -0.1869081) {
                if (input[7] < -0.3039868) {
                    if (input[8] < 2.505455) {
                        var67 = -0.07786647;
                    } else {
                        var67 = 0.09638886;
                    }
                } else {
                    var67 = 0.23641996;
                }
            } else {
                if (input[2] < 2.124537) {
                    if (input[13] < 0.2861353) {
                        var67 = 0.27132785;
                    } else {
                        var67 = 0.019592727;
                    }
                } else {
                    if (input[14] < 2.074205) {
                        var67 = -0.10842949;
                    } else {
                        var67 = 0.10947515;
                    }
                }
            }
        } else {
            if (input[4] < -0.07173939) {
                if (input[17] < 1.983371) {
                    if (input[11] < 2.144628) {
                        var67 = 0.028437415;
                    } else {
                        var67 = -0.23090474;
                    }
                } else {
                    if (input[3] < -0.3014109) {
                        var67 = -0.09411055;
                    } else {
                        var67 = 0.15118186;
                    }
                }
            } else {
                if (input[11] < 2.139695) {
                    if (input[12] < 0.1883886) {
                        var67 = 0.0009593264;
                    } else {
                        var67 = -0.1482826;
                    }
                } else {
                    if (input[3] < -0.3641546) {
                        var67 = -0.032899246;
                    } else {
                        var67 = 0.14998694;
                    }
                }
            }
        }
    } else {
        if (input[16] < -0.2860918) {
            if (input[9] < 0.3566573) {
                var67 = 0.16713041;
            } else {
                var67 = -0.089491315;
            }
        } else {
            if (input[10] < 0.2463419) {
                if (input[15] < 0.6489607) {
                    if (input[1] < 0.1950299) {
                        var67 = -0.19270529;
                    } else {
                        var67 = -0.013656397;
                    }
                } else {
                    if (input[4] < -0.08302689) {
                        var67 = 0.04464731;
                    } else {
                        var67 = -0.17307077;
                    }
                }
            } else {
                if (input[16] < 0.613963) {
                    if (input[8] < 2.31081) {
                        var67 = 0.15155514;
                    } else {
                        var67 = -0.0881957;
                    }
                } else {
                    if (input[0] < -0.03001728) {
                        var67 = -0.14893742;
                    } else {
                        var67 = 0.11238967;
                    }
                }
            }
        }
    }
    var var68;
    if (input[17] < 1.916033) {
        if (input[2] < 2.134528) {
            if (input[17] < 1.881312) {
                var68 = -0.04224159;
            } else {
                var68 = 0.22476225;
            }
        } else {
            var68 = -0.101567104;
        }
    } else {
        if (input[3] < -0.185492) {
            if (input[12] < 0.2663945) {
                if (input[9] < 0.138732) {
                    if (input[12] < 0.1832692) {
                        var68 = -0.019837225;
                    } else {
                        var68 = 0.07433465;
                    }
                } else {
                    if (input[5] < 2.050033) {
                        var68 = -0.008243165;
                    } else {
                        var68 = -0.23566079;
                    }
                }
            } else {
                if (input[14] < 2.074205) {
                    if (input[1] < 0.1806968) {
                        var68 = -0.16706322;
                    } else {
                        var68 = 0.1291049;
                    }
                } else {
                    if (input[3] < -0.3035955) {
                        var68 = 0.015535339;
                    } else {
                        var68 = 0.23997924;
                    }
                }
            }
        } else {
            if (input[11] < 2.137984) {
                if (input[1] < 0.1806968) {
                    var68 = -0.0016975085;
                } else {
                    var68 = 0.17828532;
                }
            } else {
                if (input[3] < -0.1832297) {
                    if (input[17] < 2.019241) {
                        var68 = -0.17472298;
                    } else {
                        var68 = 0.07615052;
                    }
                } else {
                    if (input[2] < 2.126716) {
                        var68 = 0.07698873;
                    } else {
                        var68 = -0.04077409;
                    }
                }
            }
        }
    }
    var var69;
    if (input[8] < 1.843375) {
        if (input[13] < -0.05726122) {
            var69 = -0.18379188;
        } else {
            if (input[9] < 0.1012877) {
                if (input[17] < 2.030394) {
                    var69 = -0.0024718049;
                } else {
                    var69 = -0.16788885;
                }
            } else {
                var69 = 0.15252022;
            }
        }
    } else {
        if (input[6] < -0.6366308) {
            if (input[14] < 2.117664) {
                var69 = -0.13980907;
            } else {
                var69 = -0.0066018878;
            }
        } else {
            if (input[9] < -0.02372335) {
                if (input[5] < 2.075577) {
                    var69 = 0.28801677;
                } else {
                    var69 = -0.067917444;
                }
            } else {
                if (input[11] < 2.029831) {
                    if (input[7] < -0.03052739) {
                        var69 = -0.20534793;
                    } else {
                        var69 = 0.15801705;
                    }
                } else {
                    if (input[3] < -0.4125773) {
                        var69 = 0.1279258;
                    } else {
                        var69 = 0.00208;
                    }
                }
            }
        }
    }
    var var70;
    if (input[0] < -0.1394258) {
        if (input[7] < -0.2724791) {
            if (input[2] < 2.124537) {
                if (input[17] < 1.973404) {
                    var70 = 0.23143792;
                } else {
                    var70 = -0.0008587469;
                }
            } else {
                if (input[5] < 2.089453) {
                    if (input[11] < 2.141517) {
                        var70 = 0.03459981;
                    } else {
                        var70 = -0.18866171;
                    }
                } else {
                    if (input[3] < -0.1839669) {
                        var70 = 0.11753468;
                    } else {
                        var70 = -0.09195422;
                    }
                }
            }
        } else {
            if (input[10] < 0.1898751) {
                if (input[16] < -0.3098207) {
                    if (input[9] < 0.1362537) {
                        var70 = -0.27058017;
                    } else {
                        var70 = 0.1776455;
                    }
                } else {
                    if (input[11] < 2.668488) {
                        var70 = 0.062325094;
                    } else {
                        var70 = -0.09253874;
                    }
                }
            } else {
                if (input[10] < 0.1910487) {
                    if (input[12] < 0.1824703) {
                        var70 = -0.046740748;
                    } else {
                        var70 = 0.21286024;
                    }
                } else {
                    if (input[16] < -0.2816514) {
                        var70 = -0.14288718;
                    } else {
                        var70 = 0.01006576;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.1454355) {
            if (input[4] < -0.07615431) {
                if (input[10] < 0.2056196) {
                    var70 = -0.0134268;
                } else {
                    var70 = -0.25309485;
                }
            } else {
                if (input[15] < 0.5575635) {
                    if (input[15] < 0.3334272) {
                        var70 = -0.106446855;
                    } else {
                        var70 = 0.11741868;
                    }
                } else {
                    var70 = -0.12553154;
                }
            }
        } else {
            if (input[2] < 2.359941) {
                if (input[8] < 2.299176) {
                    if (input[17] < 2.102761) {
                        var70 = -0.11889166;
                    } else {
                        var70 = 0.13940871;
                    }
                } else {
                    if (input[2] < 2.311973) {
                        var70 = 0.10321805;
                    } else {
                        var70 = -0.15550318;
                    }
                }
            } else {
                var70 = -0.1188497;
            }
        }
    }
    var var71;
    if (input[11] < 2.080573) {
        if (input[6] < -0.4557327) {
            if (input[14] < 2.129463) {
                var71 = -0.22307985;
            } else {
                var71 = 0.059828855;
            }
        } else {
            if (input[7] < -0.03541327) {
                if (input[3] < -0.4506642) {
                    var71 = 0.0639571;
                } else {
                    var71 = -0.19751191;
                }
            } else {
                if (input[10] < 0.4100882) {
                    var71 = 0.005475154;
                } else {
                    var71 = 0.19083391;
                }
            }
        }
    } else {
        if (input[9] < 0.01633202) {
            if (input[13] < -0.01949216) {
                var71 = 0.02084017;
            } else {
                var71 = 0.20530178;
            }
        } else {
            if (input[11] < 2.124135) {
                if (input[10] < 0.1864135) {
                    var71 = 0.03314603;
                } else {
                    var71 = 0.13964432;
                }
            } else {
                if (input[2] < 2.120021) {
                    if (input[9] < 0.1012877) {
                        var71 = -0.19531338;
                    } else {
                        var71 = 0.012152806;
                    }
                } else {
                    if (input[2] < 2.130938) {
                        var71 = 0.036162633;
                    } else {
                        var71 = -0.01817613;
                    }
                }
            }
        }
    }
    var var72;
    if (input[3] < -0.07115942) {
        if (input[6] < -0.1350729) {
            if (input[6] < -0.1372693) {
                if (input[0] < -0.1394258) {
                    if (input[11] < 2.080573) {
                        var72 = -0.04732715;
                    } else {
                        var72 = 0.018952224;
                    }
                } else {
                    if (input[16] < -0.2860918) {
                        var72 = 0.09804275;
                    } else {
                        var72 = -0.06385834;
                    }
                }
            } else {
                if (input[11] < 2.328007) {
                    var72 = 0.010165863;
                } else {
                    var72 = 0.1661712;
                }
            }
        } else {
            var72 = -0.18242642;
        }
    } else {
        if (input[2] < 2.308159) {
            var72 = 0.16587947;
        } else {
            var72 = -0.028984379;
        }
    }
    var var73;
    if (input[15] < 0.2459263) {
        if (input[9] < 0.1049315) {
            if (input[0] < -0.2385466) {
                if (input[5] < 2.077983) {
                    if (input[5] < 1.969027) {
                        var73 = -0.103870295;
                    } else {
                        var73 = 0.13908038;
                    }
                } else {
                    if (input[16] < 0.0407251) {
                        var73 = 0.06511256;
                    } else {
                        var73 = -0.13546044;
                    }
                }
            } else {
                var73 = -0.17751054;
            }
        } else {
            if (input[17] < 2.019866) {
                var73 = 0.033090923;
            } else {
                var73 = 0.19847208;
            }
        }
    } else {
        if (input[15] < 0.2630541) {
            if (input[2] < 2.142253) {
                var73 = -0.21779782;
            } else {
                if (input[12] < 0.1799283) {
                    var73 = -0.112325184;
                } else {
                    var73 = 0.07798954;
                }
            }
        } else {
            if (input[4] < 0.2965336) {
                if (input[8] < 1.902019) {
                    if (input[14] < 2.09745) {
                        var73 = -0.17386316;
                    } else {
                        var73 = -0.012716617;
                    }
                } else {
                    if (input[11] < 2.136796) {
                        var73 = 0.10596118;
                    } else {
                        var73 = -0.01224292;
                    }
                }
            } else {
                var73 = 0.16951753;
            }
        }
    }
    var var74;
    if (input[5] < 2.092916) {
        if (input[12] < 0.1883886) {
            if (input[12] < 0.1832692) {
                if (input[13] < -0.06496227) {
                    var74 = -0.18468425;
                } else {
                    if (input[1] < 0.2143968) {
                        var74 = 0.1254723;
                    } else {
                        var74 = -0.021388387;
                    }
                }
            } else {
                if (input[5] < 2.03501) {
                    var74 = -0.04398002;
                } else {
                    var74 = 0.25611869;
                }
            }
        } else {
            if (input[6] < -0.2153809) {
                if (input[9] < 0.2084323) {
                    if (input[14] < 2.048416) {
                        var74 = 0.031184912;
                    } else {
                        var74 = -0.15586376;
                    }
                } else {
                    if (input[5] < 2.085854) {
                        var74 = -0.059425518;
                    } else {
                        var74 = 0.1518705;
                    }
                }
            } else {
                if (input[0] < -0.1387572) {
                    if (input[12] < 0.4025566) {
                        var74 = 0.013412495;
                    } else {
                        var74 = 0.1991284;
                    }
                } else {
                    if (input[4] < -0.07375525) {
                        var74 = -0.15213928;
                    } else {
                        var74 = 0.05954573;
                    }
                }
            }
        }
    } else {
        if (input[16] < -0.2534331) {
            if (input[6] < -0.1387064) {
                if (input[0] < -0.2806026) {
                    var74 = 0.022775233;
                } else {
                    var74 = -0.15564375;
                }
            } else {
                if (input[11] < 2.324035) {
                    var74 = -0.027966337;
                } else {
                    var74 = 0.12390825;
                }
            }
        } else {
            if (input[6] < -0.2140269) {
                if (input[0] < -0.2806026) {
                    if (input[14] < 2.718132) {
                        var74 = -0.11227634;
                    } else {
                        var74 = 0.13013566;
                    }
                } else {
                    if (input[16] < 0.3565674) {
                        var74 = 0.19723617;
                    } else {
                        var74 = 0.027994195;
                    }
                }
            } else {
                if (input[8] < 2.280036) {
                    if (input[2] < 2.131344) {
                        var74 = 0.001149694;
                    } else {
                        var74 = -0.19337077;
                    }
                } else {
                    if (input[5] < 2.375968) {
                        var74 = 0.08103597;
                    } else {
                        var74 = -0.03506784;
                    }
                }
            }
        }
    }
    var var75;
    if (input[10] < 0.2348086) {
        if (input[13] < 0.2910893) {
            if (input[1] < 0.1806968) {
                if (input[12] < 0.3251424) {
                    if (input[0] < -0.2806026) {
                        var75 = -0.040999565;
                    } else {
                        var75 = 0.06843007;
                    }
                } else {
                    if (input[5] < 2.092916) {
                        var75 = -0.2307164;
                    } else {
                        var75 = -0.05870441;
                    }
                }
            } else {
                if (input[1] < 0.1824314) {
                    if (input[6] < -0.2140269) {
                        var75 = 0.16120538;
                    } else {
                        var75 = -0.0025255014;
                    }
                } else {
                    if (input[17] < 2.01376) {
                        var75 = -0.11689489;
                    } else {
                        var75 = 0.007499245;
                    }
                }
            }
        } else {
            if (input[8] < 2.001297) {
                var75 = -0.19730091;
            } else {
                if (input[5] < 2.621936) {
                    var75 = 0.06951621;
                } else {
                    var75 = -0.08279054;
                }
            }
        }
    } else {
        if (input[2] < 2.122909) {
            if (input[10] < 0.4061104) {
                var75 = -0.1603032;
            } else {
                if (input[0] < -0.3707159) {
                    if (input[3] < -0.4526371) {
                        var75 = 0.036702543;
                    } else {
                        var75 = -0.1522699;
                    }
                } else {
                    var75 = 0.15534002;
                }
            }
        } else {
            if (input[11] < 2.144628) {
                var75 = 0.20961761;
            } else {
                if (input[13] < 0.3804081) {
                    if (input[5] < 2.331637) {
                        var75 = 0.18615513;
                    } else {
                        var75 = 0.009560022;
                    }
                } else {
                    if (input[10] < 0.2463419) {
                        var75 = -0.16054252;
                    } else {
                        var75 = 0.023999542;
                    }
                }
            }
        }
    }
    var var76;
    if (input[6] < -0.6366308) {
        if (input[14] < 2.117664) {
            var76 = -0.12307494;
        } else {
            var76 = -0.022700032;
        }
    } else {
        if (input[9] < -0.02372335) {
            if (input[8] < 2.106408) {
                var76 = 0.19068214;
            } else {
                var76 = -0.07974926;
            }
        } else {
            if (input[2] < 2.120021) {
                if (input[7] < -0.03052739) {
                    if (input[17] < 2.019241) {
                        var76 = -0.0045503248;
                    } else {
                        var76 = -0.17201102;
                    }
                } else {
                    if (input[14] < 2.109825) {
                        var76 = 0.15976502;
                    } else {
                        var76 = -0.12097544;
                    }
                }
            } else {
                if (input[2] < 2.130938) {
                    if (input[0] < -0.1387572) {
                        var76 = 0.0796988;
                    } else {
                        var76 = -0.073649496;
                    }
                } else {
                    if (input[17] < 2.014581) {
                        var76 = -0.08961649;
                    } else {
                        var76 = 0.0065341764;
                    }
                }
            }
        }
    }
    var var77;
    if (input[11] < 2.320537) {
        if (input[11] < 2.153508) {
            if (input[1] < 0.1810349) {
                if (input[4] < -0.08197019) {
                    var77 = -0.13262013;
                } else {
                    if (input[0] < -0.1360898) {
                        var77 = 0.15171486;
                    } else {
                        var77 = -0.0903119;
                    }
                }
            } else {
                if (input[11] < 2.143919) {
                    if (input[11] < 2.139695) {
                        var77 = -0.011842356;
                    } else {
                        var77 = 0.11773568;
                    }
                } else {
                    if (input[0] < -0.143456) {
                        var77 = 0.10230791;
                    } else {
                        var77 = -0.1348084;
                    }
                }
            }
        } else {
            if (input[3] < -0.1861245) {
                var77 = 0.09180814;
            } else {
                if (input[3] < -0.07115942) {
                    if (input[2] < 2.127803) {
                        var77 = 0.025544086;
                    } else {
                        var77 = -0.27101472;
                    }
                } else {
                    var77 = 0.03417954;
                }
            }
        }
    } else {
        if (input[5] < 2.373999) {
            if (input[12] < 0.5222203) {
                var77 = 0.20359214;
            } else {
                var77 = -0.0138899395;
            }
        } else {
            if (input[3] < -0.330715) {
                if (input[9] < 0.01980101) {
                    var77 = 0.06980058;
                } else {
                    if (input[16] < 0.0407251) {
                        var77 = -0.012246135;
                    } else {
                        var77 = -0.19913988;
                    }
                }
            } else {
                if (input[4] < -0.07375525) {
                    if (input[8] < 2.294634) {
                        var77 = 0.068810925;
                    } else {
                        var77 = -0.08227061;
                    }
                } else {
                    var77 = 0.17234015;
                }
            }
        }
    }
    var var78;
    if (input[14] < 2.718132) {
        if (input[14] < 2.692472) {
            if (input[17] < 2.39752) {
                if (input[2] < 2.358206) {
                    if (input[4] < -0.07838758) {
                        var78 = 0.046127617;
                    } else {
                        var78 = -0.016098768;
                    }
                } else {
                    if (input[5] < 2.375968) {
                        var78 = -0.021545224;
                    } else {
                        var78 = -0.18728201;
                    }
                }
            } else {
                if (input[3] < -0.3641546) {
                    var78 = 0.018000863;
                } else {
                    var78 = 0.17351948;
                }
            }
        } else {
            if (input[0] < -0.2806026) {
                var78 = -0.15917327;
            } else {
                var78 = 0.010664074;
            }
        }
    } else {
        if (input[1] < 0.1329032) {
            var78 = -0.023694174;
        } else {
            var78 = 0.15239203;
        }
    }
    var var79;
    if (input[17] < 1.987008) {
        if (input[8] < 1.992283) {
            if (input[4] < -0.07662439) {
                if (input[1] < 0.1819977) {
                    var79 = 0.09550406;
                } else {
                    var79 = -0.08755029;
                }
            } else {
                if (input[11] < 2.145249) {
                    var79 = -0.050325062;
                } else {
                    var79 = -0.24859239;
                }
            }
        } else {
            if (input[15] < 0.5844737) {
                if (input[4] < -0.07069238) {
                    if (input[11] < 2.143919) {
                        var79 = 0.03420166;
                    } else {
                        var79 = -0.15964909;
                    }
                } else {
                    var79 = 0.16197136;
                }
            } else {
                if (input[6] < -0.2157689) {
                    var79 = 0.01486294;
                } else {
                    var79 = 0.18863004;
                }
            }
        }
    } else {
        if (input[17] < 2.047612) {
            if (input[8] < 2.009518) {
                if (input[5] < 2.089453) {
                    if (input[3] < -0.4498132) {
                        var79 = 0.19053274;
                    } else {
                        var79 = 0.0046738805;
                    }
                } else {
                    if (input[11] < 2.153508) {
                        var79 = 0.19645841;
                    } else {
                        var79 = -0.05981015;
                    }
                }
            } else {
                if (input[15] < 0.272199) {
                    var79 = -0.1513704;
                } else {
                    var79 = 0.017323062;
                }
            }
        } else {
            if (input[17] < 2.107207) {
                if (input[4] < 0.1782835) {
                    if (input[6] < -0.4488177) {
                        var79 = -0.2311487;
                    } else {
                        var79 = -0.03537422;
                    }
                } else {
                    var79 = 0.039256558;
                }
            } else {
                if (input[5] < 2.075577) {
                    var79 = 0.13603887;
                } else {
                    if (input[6] < -0.492469) {
                        var79 = -0.17678845;
                    } else {
                        var79 = 0.021305196;
                    }
                }
            }
        }
    }
    var var80;
    if (input[9] < 0.379652) {
        if (input[6] < -0.6366308) {
            if (input[12] < -0.005013235) {
                var80 = -0.020069197;
            } else {
                var80 = -0.10671603;
            }
        } else {
            if (input[9] < -0.01953471) {
                if (input[1] < 0.3971142) {
                    if (input[4] < 0.172263) {
                        var80 = 0.04251263;
                    } else {
                        var80 = -0.06921235;
                    }
                } else {
                    if (input[4] < 0.2700555) {
                        var80 = 0.24164751;
                    } else {
                        var80 = -0.008331081;
                    }
                }
            } else {
                if (input[6] < -0.5277131) {
                    if (input[9] < 0.138732) {
                        var80 = 0.10279352;
                    } else {
                        var80 = -0.09609143;
                    }
                } else {
                    if (input[8] < 1.931836) {
                        var80 = -0.09620062;
                    } else {
                        var80 = 0.0036735414;
                    }
                }
            }
        }
    } else {
        if (input[17] < 2.112313) {
            var80 = -0.115794145;
        } else {
            var80 = -0.016005369;
        }
    }
    var var81;
    if (input[4] < 0.2978477) {
        if (input[11] < 2.136796) {
            if (input[2] < 2.118675) {
                if (input[11] < 2.124135) {
                    if (input[11] < 2.080573) {
                        var81 = -0.043498028;
                    } else {
                        var81 = 0.13680147;
                    }
                } else {
                    var81 = -0.13279043;
                }
            } else {
                if (input[5] < 2.016619) {
                    var81 = -0.05641311;
                } else {
                    if (input[11] < 2.13581) {
                        var81 = 0.19004375;
                    } else {
                        var81 = 0.015750626;
                    }
                }
            }
        } else {
            if (input[5] < 2.087682) {
                if (input[15] < 0.5913451) {
                    if (input[2] < 2.152025) {
                        var81 = -0.19835098;
                    } else {
                        var81 = 0.035565697;
                    }
                } else {
                    var81 = 0.041721083;
                }
            } else {
                if (input[16] < -0.291344) {
                    if (input[1] < 0.1275989) {
                        var81 = 0.019491712;
                    } else {
                        var81 = -0.14149953;
                    }
                } else {
                    if (input[11] < 2.144628) {
                        var81 = 0.12083489;
                    } else {
                        var81 = -0.008798182;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.13581) {
            if (input[2] < 2.135411) {
                var81 = 0.07575294;
            } else {
                var81 = -0.18339805;
            }
        } else {
            var81 = 0.17689194;
        }
    }
    var var82;
    if (input[17] < 1.987008) {
        if (input[12] < 0.3513805) {
            if (input[1] < 0.1814099) {
                var82 = -0.17350453;
            } else {
                if (input[8] < 1.989274) {
                    var82 = -0.063793905;
                } else {
                    var82 = 0.071103126;
                }
            }
        } else {
            if (input[9] < 0.2022036) {
                if (input[11] < 2.147265) {
                    var82 = 0.20242594;
                } else {
                    if (input[4] < -0.06943943) {
                        var82 = -0.073897205;
                    } else {
                        var82 = 0.14079633;
                    }
                }
            } else {
                if (input[15] < 0.5943778) {
                    if (input[5] < 2.092916) {
                        var82 = -0.17195141;
                    } else {
                        var82 = 0.03129861;
                    }
                } else {
                    var82 = 0.06326149;
                }
            }
        }
    } else {
        if (input[10] < 0.5390255) {
            if (input[9] < -0.02372335) {
                if (input[17] < 2.137747) {
                    var82 = 0.21065016;
                } else {
                    var82 = -0.034557234;
                }
            } else {
                if (input[15] < 0.3334272) {
                    if (input[10] < 0.1898751) {
                        var82 = -0.074869014;
                    } else {
                        var82 = 0.030278746;
                    }
                } else {
                    if (input[11] < 2.15032) {
                        var82 = 0.1064752;
                    } else {
                        var82 = -0.0025694491;
                    }
                }
            }
        } else {
            if (input[7] < 0.07029051) {
                if (input[6] < -0.3505886) {
                    var82 = -0.15483174;
                } else {
                    var82 = -0.0031773094;
                }
            } else {
                var82 = 0.08757356;
            }
        }
    }
    var var83;
    if (input[10] < 0.1689312) {
        if (input[7] < -0.3039868) {
            var83 = -0.03299076;
        } else {
            if (input[9] < 0.03013267) {
                var83 = 0.16566506;
            } else {
                var83 = 0.018702954;
            }
        }
    } else {
        if (input[1] < 0.1797476) {
            if (input[14] < 2.72071) {
                if (input[3] < -0.3049593) {
                    var83 = -0.15995045;
                } else {
                    if (input[5] < 2.601894) {
                        var83 = -0.109387435;
                    } else {
                        var83 = 0.095983855;
                    }
                }
            } else {
                var83 = 0.0515456;
            }
        } else {
            if (input[1] < 0.180249) {
                if (input[9] < 0.2015119) {
                    var83 = 0.017282726;
                } else {
                    var83 = 0.14105223;
                }
            } else {
                if (input[14] < 2.098995) {
                    if (input[13] < 0.4084785) {
                        var83 = -0.039270267;
                    } else {
                        var83 = 0.04767507;
                    }
                } else {
                    if (input[9] < 0.3648999) {
                        var83 = 0.040715005;
                    } else {
                        var83 = -0.049665745;
                    }
                }
            }
        }
    }
    var var84;
    if (input[8] < 2.515746) {
        if (input[11] < 2.740582) {
            if (input[5] < 2.602829) {
                if (input[8] < 2.31081) {
                    if (input[3] < -0.1034364) {
                        var84 = -0.001555396;
                    } else {
                        var84 = 0.10689621;
                    }
                } else {
                    if (input[15] < 0.1788081) {
                        var84 = 0.04270995;
                    } else {
                        var84 = -0.098437615;
                    }
                }
            } else {
                if (input[12] < 0.2417849) {
                    var84 = 0.13022782;
                } else {
                    var84 = 0.015245041;
                }
            }
        } else {
            var84 = -0.16533946;
        }
    } else {
        if (input[15] < 0.3274899) {
            var84 = 0.006194902;
        } else {
            var84 = 0.11555123;
        }
    }
    var var85;
    if (input[0] < -0.143456) {
        if (input[15] < 0.5017878) {
            if (input[14] < 2.080762) {
                if (input[1] < 0.3957981) {
                    if (input[5] < 2.088831) {
                        var85 = -0.17841715;
                    } else {
                        var85 = -0.020624354;
                    }
                } else {
                    if (input[14] < 2.060808) {
                        var85 = 0.09348497;
                    } else {
                        var85 = -0.082729;
                    }
                }
            } else {
                if (input[15] < 0.272199) {
                    if (input[12] < 0.1883886) {
                        var85 = 0.018106844;
                    } else {
                        var85 = -0.14719781;
                    }
                } else {
                    if (input[8] < 2.339401) {
                        var85 = 0.1614292;
                    } else {
                        var85 = -0.0020725853;
                    }
                }
            }
        } else {
            if (input[11] < 2.15032) {
                var85 = 0.20772195;
            } else {
                var85 = -0.014604869;
            }
        }
    } else {
        if (input[11] < 2.141517) {
            if (input[10] < 0.1829571) {
                var85 = -0.05639165;
            } else {
                if (input[2] < 2.122909) {
                    var85 = 0.04366477;
                } else {
                    var85 = 0.17821571;
                }
            }
        } else {
            if (input[6] < -0.2171069) {
                if (input[10] < 0.2348086) {
                    var85 = -0.20841731;
                } else {
                    var85 = -0.035390135;
                }
            } else {
                if (input[2] < 2.12959) {
                    if (input[5] < 2.090173) {
                        var85 = -0.020521488;
                    } else {
                        var85 = 0.12378827;
                    }
                } else {
                    if (input[6] < -0.1454355) {
                        var85 = -0.14371534;
                    } else {
                        var85 = 0.007990539;
                    }
                }
            }
        }
    }
    var var86;
    if (input[6] < -0.6366308) {
        var86 = -0.07621236;
    } else {
        if (input[9] < -0.01953471) {
            if (input[5] < 2.075577) {
                if (input[1] < 0.3971142) {
                    var86 = -0.03233387;
                } else {
                    var86 = 0.22049195;
                }
            } else {
                var86 = -0.047971025;
            }
        } else {
            if (input[5] < 2.018692) {
                if (input[17] < 2.030394) {
                    if (input[4] < 0.2100555) {
                        var86 = -0.050882474;
                    } else {
                        var86 = 0.11610043;
                    }
                } else {
                    if (input[9] < 0.1049315) {
                        var86 = -0.16689228;
                    } else {
                        var86 = -0.04024542;
                    }
                }
            } else {
                if (input[11] < 2.13581) {
                    if (input[4] < 0.3054885) {
                        var86 = 0.11701756;
                    } else {
                        var86 = -0.13718945;
                    }
                } else {
                    if (input[4] < 0.2978477) {
                        var86 = -0.012789668;
                    } else {
                        var86 = 0.15911382;
                    }
                }
            }
        }
    }
    var var87;
    if (input[14] < 2.718132) {
        if (input[8] < 2.31081) {
            if (input[17] < 2.274359) {
                if (input[2] < 2.358206) {
                    if (input[14] < 2.278358) {
                        var87 = -0.0028461395;
                    } else {
                        var87 = 0.12276269;
                    }
                } else {
                    if (input[1] < 0.1934489) {
                        var87 = 0.0026806942;
                    } else {
                        var87 = -0.1730977;
                    }
                }
            } else {
                var87 = 0.12229906;
            }
        } else {
            if (input[12] < 0.09552859) {
                var87 = 0.085164286;
            } else {
                if (input[2] < 2.314714) {
                    var87 = 0.022923622;
                } else {
                    if (input[8] < 2.49051) {
                        var87 = -0.16239709;
                    } else {
                        var87 = 0.0025616465;
                    }
                }
            }
        }
    } else {
        if (input[1] < 0.1329032) {
            var87 = -0.015094643;
        } else {
            var87 = 0.13321938;
        }
    }
    var var88;
    if (input[3] < -0.178226) {
        if (input[13] < -0.05678266) {
            if (input[14] < 2.094204) {
                if (input[9] < 0.1296435) {
                    var88 = -0.17193393;
                } else {
                    if (input[13] < -0.07025629) {
                        var88 = 0.008473009;
                    } else {
                        var88 = 0.18479022;
                    }
                }
            } else {
                if (input[0] < -0.2385466) {
                    if (input[5] < 2.464614) {
                        var88 = 0.12824823;
                    } else {
                        var88 = -0.06000377;
                    }
                } else {
                    if (input[10] < 0.1852297) {
                        var88 = 0.014961101;
                    } else {
                        var88 = -0.17069425;
                    }
                }
            }
        } else {
            if (input[11] < 2.080573) {
                if (input[4] < 0.2700555) {
                    if (input[3] < -0.4526371) {
                        var88 = 0.15320867;
                    } else {
                        var88 = -0.07811285;
                    }
                } else {
                    if (input[9] < -0.2319593) {
                        var88 = -0.18181333;
                    } else {
                        var88 = 0.017566606;
                    }
                }
            } else {
                if (input[4] < -0.07173939) {
                    if (input[7] < -0.2702799) {
                        var88 = 0.023219015;
                    } else {
                        var88 = -0.07189033;
                    }
                } else {
                    if (input[4] < 0.2806515) {
                        var88 = 0.15509038;
                    } else {
                        var88 = -0.0021634782;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.1454355) {
            if (input[12] < 0.3328731) {
                var88 = -0.028760908;
            } else {
                var88 = -0.18566372;
            }
        } else {
            if (input[11] < 2.320537) {
                if (input[3] < -0.06884018) {
                    var88 = -0.16275766;
                } else {
                    var88 = 0.040415123;
                }
            } else {
                if (input[12] < 0.5325511) {
                    if (input[5] < 2.375968) {
                        var88 = 0.16052419;
                    } else {
                        var88 = -0.019676356;
                    }
                } else {
                    if (input[1] < 0.1988256) {
                        var88 = 0.025507232;
                    } else {
                        var88 = -0.12146901;
                    }
                }
            }
        }
    }
    var var89;
    if (input[3] < -0.185492) {
        if (input[4] < -0.0756643) {
            if (input[5] < 2.088831) {
                var89 = -0.06803193;
            } else {
                if (input[3] < -0.3277057) {
                    if (input[8] < 2.505455) {
                        var89 = -0.056015395;
                    } else {
                        var89 = 0.079774484;
                    }
                } else {
                    if (input[5] < 2.092916) {
                        var89 = 0.07134137;
                    } else {
                        var89 = 0.20937358;
                    }
                }
            }
        } else {
            if (input[7] < -0.2448077) {
                var89 = -0.14971642;
            } else {
                if (input[11] < 2.140443) {
                    if (input[12] < 0.1883886) {
                        var89 = 0.008065176;
                    } else {
                        var89 = -0.078447;
                    }
                } else {
                    if (input[8] < 2.339401) {
                        var89 = 0.16228873;
                    } else {
                        var89 = -0.0076876185;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.126372) {
            if (input[9] < 0.2022036) {
                if (input[4] < -0.07526994) {
                    var89 = 0.034135003;
                } else {
                    var89 = 0.16734113;
                }
            } else {
                if (input[15] < 0.5403172) {
                    if (input[13] < 0.3879468) {
                        var89 = 0.00089159823;
                    } else {
                        var89 = -0.1706085;
                    }
                } else {
                    if (input[8] < 1.992283) {
                        var89 = -0.075471856;
                    } else {
                        var89 = 0.12591706;
                    }
                }
            }
        } else {
            if (input[5] < 2.096069) {
                if (input[1] < 0.1803833) {
                    var89 = 0.0031618867;
                } else {
                    if (input[11] < 2.144628) {
                        var89 = -0.012466718;
                    } else {
                        var89 = -0.191134;
                    }
                }
            } else {
                if (input[11] < 2.153508) {
                    if (input[10] < 0.1994946) {
                        var89 = 0.012961577;
                    } else {
                        var89 = 0.17088506;
                    }
                } else {
                    if (input[6] < -0.1454355) {
                        var89 = -0.17076936;
                    } else {
                        var89 = 0.0033247806;
                    }
                }
            }
        }
    }
    var var90;
    if (input[7] < -0.3166338) {
        if (input[8] < 2.294634) {
            var90 = -0.142307;
        } else {
            if (input[5] < 2.375968) {
                var90 = 0.1703259;
            } else {
                if (input[17] < 2.213117) {
                    var90 = -0.117242165;
                } else {
                    var90 = 0.023430157;
                }
            }
        }
    } else {
        if (input[10] < 0.1689312) {
            var90 = 0.099912174;
        } else {
            if (input[15] < 0.2642343) {
                if (input[15] < 0.2459263) {
                    if (input[9] < 0.1012877) {
                        var90 = -0.032482833;
                    } else {
                        var90 = 0.13235207;
                    }
                } else {
                    if (input[12] < 0.1799283) {
                        var90 = -0.1665536;
                    } else {
                        var90 = -0.019931663;
                    }
                }
            } else {
                if (input[8] < 1.902019) {
                    if (input[4] < 0.1969246) {
                        var90 = -0.15259987;
                    } else {
                        var90 = 0.04397944;
                    }
                } else {
                    if (input[11] < 2.13581) {
                        var90 = 0.107687145;
                    } else {
                        var90 = 0.0055013555;
                    }
                }
            }
        }
    }
    var var91;
    if (input[8] < 1.843375) {
        if (input[14] < 2.109825) {
            var91 = 0.020611793;
        } else {
            var91 = -0.112723;
        }
    } else {
        if (input[3] < -0.185492) {
            if (input[9] < 0.1954591) {
                if (input[14] < 2.106703) {
                    if (input[17] < 2.036849) {
                        var91 = -0.066038534;
                    } else {
                        var91 = 0.026030796;
                    }
                } else {
                    if (input[9] < 0.06581354) {
                        var91 = 0.006317722;
                    } else {
                        var91 = 0.16402757;
                    }
                }
            } else {
                if (input[5] < 2.089453) {
                    var91 = 0.0034371102;
                } else {
                    var91 = 0.18837385;
                }
            }
        } else {
            if (input[1] < 0.1797476) {
                var91 = -0.107747234;
            } else {
                if (input[1] < 0.180249) {
                    var91 = 0.09503351;
                } else {
                    if (input[3] < -0.1832297) {
                        var91 = -0.06436365;
                    } else {
                        var91 = 0.005687598;
                    }
                }
            }
        }
    }
    var var92;
    if (input[3] < -0.1839669) {
        if (input[9] < 0.2045274) {
            if (input[6] < -0.2645073) {
                if (input[6] < -0.375672) {
                    if (input[6] < -0.4419346) {
                        var92 = -0.013930866;
                    } else {
                        var92 = 0.112198025;
                    }
                } else {
                    if (input[9] < 0.03013267) {
                        var92 = 0.071858965;
                    } else {
                        var92 = -0.11168482;
                    }
                }
            } else {
                if (input[11] < 2.147265) {
                    if (input[5] < 2.088831) {
                        var92 = 0.010203339;
                    } else {
                        var92 = 0.2172872;
                    }
                } else {
                    if (input[17] < 2.021597) {
                        var92 = -0.064909086;
                    } else {
                        var92 = 0.081093304;
                    }
                }
            }
        } else {
            if (input[2] < 2.126372) {
                var92 = -0.15038761;
            } else {
                var92 = 0.027708352;
            }
        }
    } else {
        if (input[10] < 0.1844822) {
            var92 = -0.15379728;
        } else {
            if (input[2] < 2.126716) {
                if (input[11] < 2.146672) {
                    if (input[4] < -0.07662439) {
                        var92 = -0.100055665;
                    } else {
                        var92 = 0.0610318;
                    }
                } else {
                    if (input[6] < -0.2153809) {
                        var92 = 0.017785663;
                    } else {
                        var92 = 0.18663159;
                    }
                }
            } else {
                if (input[11] < 2.320537) {
                    if (input[4] < -0.06943943) {
                        var92 = -0.15695472;
                    } else {
                        var92 = 0.017350305;
                    }
                } else {
                    if (input[4] < -0.08588555) {
                        var92 = -0.0537591;
                    } else {
                        var92 = 0.06394603;
                    }
                }
            }
        }
    }
    var var93;
    if (input[6] < -0.1350729) {
        if (input[6] < -0.1372693) {
            if (input[7] < -0.31334) {
                if (input[1] < 0.1922614) {
                    if (input[5] < 2.377722) {
                        var93 = 0.07720998;
                    } else {
                        var93 = -0.051197734;
                    }
                } else {
                    if (input[5] < 2.375968) {
                        var93 = -0.03849474;
                    } else {
                        var93 = -0.17861639;
                    }
                }
            } else {
                if (input[0] < -0.1179881) {
                    if (input[3] < -0.1777455) {
                        var93 = 0.007153722;
                    } else {
                        var93 = -0.13371599;
                    }
                } else {
                    if (input[12] < 0.4630854) {
                        var93 = 0.16326167;
                    } else {
                        var93 = 0.021739202;
                    }
                }
            }
        } else {
            var93 = 0.10570329;
        }
    } else {
        if (input[2] < 2.311973) {
            var93 = 0.06826549;
        } else {
            var93 = -0.15617733;
        }
    }
    var var94;
    if (input[12] < -0.03620643) {
        var94 = 0.06874724;
    } else {
        if (input[0] < -0.5918816) {
            var94 = -0.11607008;
        } else {
            if (input[9] < -0.01953471) {
                if (input[1] < 0.3971142) {
                    var94 = -0.024182914;
                } else {
                    var94 = 0.15226257;
                }
            } else {
                if (input[12] < 0.1824703) {
                    if (input[16] < -0.2816514) {
                        var94 = -0.1234762;
                    } else {
                        var94 = 0.016142452;
                    }
                } else {
                    if (input[12] < 0.1883886) {
                        var94 = 0.083124384;
                    } else {
                        var94 = -0.0031628066;
                    }
                }
            }
        }
    }
    var var95;
    if (input[11] < 2.080573) {
        if (input[14] < 2.129463) {
            if (input[6] < -0.4557327) {
                var95 = -0.1831234;
            } else {
                if (input[7] < -0.03541327) {
                    var95 = -0.08490856;
                } else {
                    var95 = 0.10443742;
                }
            }
        } else {
            var95 = 0.06420101;
        }
    } else {
        if (input[11] < 2.123226) {
            var95 = 0.1377557;
        } else {
            if (input[2] < 2.120021) {
                if (input[1] < 0.2210853) {
                    var95 = -0.110756114;
                } else {
                    var95 = 0.005687611;
                }
            } else {
                if (input[2] < 2.130938) {
                    if (input[0] < -0.1387572) {
                        var95 = 0.06964972;
                    } else {
                        var95 = -0.065226704;
                    }
                } else {
                    if (input[17] < 2.021597) {
                        var95 = -0.060090374;
                    } else {
                        var95 = 0.002900593;
                    }
                }
            }
        }
    }
    var var96;
    if (input[9] < 0.2022036) {
        if (input[9] < 0.1954591) {
            if (input[0] < -0.1403011) {
                if (input[3] < -0.1850964) {
                    if (input[14] < 2.080762) {
                        var96 = -0.06090013;
                    } else {
                        var96 = 0.013580886;
                    }
                } else {
                    var96 = 0.10075985;
                }
            } else {
                var96 = -0.11203628;
            }
        } else {
            if (input[10] < 0.1994946) {
                var96 = -0.03941999;
            } else {
                if (input[7] < -0.269053) {
                    var96 = 0.15044166;
                } else {
                    var96 = 0.04106417;
                }
            }
        }
    } else {
        if (input[7] < 0.01565787) {
            if (input[7] < -0.2702799) {
                if (input[12] < 0.3808358) {
                    if (input[4] < -0.07526994) {
                        var96 = -0.16201852;
                    } else {
                        var96 = 0.017915672;
                    }
                } else {
                    if (input[2] < 2.358206) {
                        var96 = 0.035226263;
                    } else {
                        var96 = -0.09823547;
                    }
                }
            } else {
                if (input[11] < 2.147952) {
                    var96 = 0.006169956;
                } else {
                    if (input[3] < -0.07115942) {
                        var96 = -0.18931736;
                    } else {
                        var96 = -0.013015865;
                    }
                }
            }
        } else {
            var96 = 0.10133157;
        }
    }
    var var97;
    if (input[10] < 0.2463419) {
        if (input[16] < 0.5168958) {
            if (input[10] < 0.2348086) {
                if (input[16] < 0.2034432) {
                    if (input[2] < 2.135951) {
                        var97 = 0.039886087;
                    } else {
                        var97 = -0.019383682;
                    }
                } else {
                    if (input[0] < -0.143456) {
                        var97 = 0.029417554;
                    } else {
                        var97 = -0.1303034;
                    }
                }
            } else {
                if (input[3] < -0.1798163) {
                    var97 = 0.15044822;
                } else {
                    var97 = -0.021990918;
                }
            }
        } else {
            if (input[12] < 0.3808358) {
                if (input[1] < 0.1805488) {
                    var97 = 0.0028669601;
                } else {
                    var97 = -0.18305735;
                }
            } else {
                var97 = 0.020175029;
            }
        }
    } else {
        if (input[10] < 0.2632348) {
            if (input[11] < 2.156058) {
                var97 = 0.14158675;
            } else {
                if (input[17] < 2.107207) {
                    var97 = -0.07857704;
                } else {
                    var97 = 0.08669085;
                }
            }
        } else {
            if (input[5] < 2.375968) {
                if (input[14] < 2.129463) {
                    if (input[5] < 2.065256) {
                        var97 = 0.007414533;
                    } else {
                        var97 = -0.1415832;
                    }
                } else {
                    if (input[17] < 2.143965) {
                        var97 = 0.21773766;
                    } else {
                        var97 = -0.026147803;
                    }
                }
            } else {
                if (input[17] < 2.38152) {
                    var97 = -0.16232888;
                } else {
                    var97 = 0.017587233;
                }
            }
        }
    }
    var var98;
    if (input[10] < 0.1689312) {
        if (input[10] < 0.1158952) {
            var98 = -0.025097705;
        } else {
            var98 = 0.10264239;
        }
    } else {
        if (input[10] < 0.1898751) {
            if (input[9] < 0.1362537) {
                if (input[16] < -0.3052651) {
                    var98 = -0.22061352;
                } else {
                    if (input[9] < 0.03419752) {
                        var98 = -0.08213924;
                    } else {
                        var98 = 0.09735192;
                    }
                }
            } else {
                if (input[3] < -0.1839669) {
                    if (input[1] < 0.180823) {
                        var98 = -0.05919476;
                    } else {
                        var98 = 0.14085625;
                    }
                } else {
                    if (input[4] < -0.0756643) {
                        var98 = -0.12383613;
                    } else {
                        var98 = -0.028606623;
                    }
                }
            }
        } else {
            if (input[10] < 0.1910487) {
                if (input[9] < 0.1296435) {
                    var98 = -0.04384655;
                } else {
                    if (input[16] < -0.33987) {
                        var98 = 0.18775594;
                    } else {
                        var98 = 0.007805473;
                    }
                }
            } else {
                if (input[16] < -0.3322406) {
                    var98 = -0.11784293;
                } else {
                    if (input[4] < 0.2700555) {
                        var98 = 0.012477725;
                    } else {
                        var98 = -0.050287854;
                    }
                }
            }
        }
    }
    var var99;
    if (input[4] < -0.0723703) {
        if (input[7] < -0.2207825) {
            if (input[3] < -0.1865176) {
                if (input[7] < -0.2985263) {
                    var99 = -0.021334376;
                } else {
                    if (input[4] < -0.0756643) {
                        var99 = 0.17164402;
                    } else {
                        var99 = -0.019336123;
                    }
                }
            } else {
                if (input[12] < 0.3808358) {
                    if (input[11] < 2.143919) {
                        var99 = 0.015428644;
                    } else {
                        var99 = -0.12722883;
                    }
                } else {
                    if (input[17] < 1.955907) {
                        var99 = -0.086404234;
                    } else {
                        var99 = 0.025290648;
                    }
                }
            }
        } else {
            var99 = -0.119920775;
        }
    } else {
        if (input[1] < 0.1822242) {
            if (input[11] < 2.154701) {
                if (input[8] < 2.000481) {
                    var99 = 0.04064002;
                } else {
                    var99 = 0.15885682;
                }
            } else {
                var99 = -0.024692502;
            }
        } else {
            if (input[10] < 0.1891105) {
                if (input[14] < 2.105804) {
                    var99 = -0.14757349;
                } else {
                    var99 = 0.029313022;
                }
            } else {
                if (input[12] < 0.1883886) {
                    if (input[9] < 0.1308429) {
                        var99 = -0.0104080755;
                    } else {
                        var99 = 0.14460985;
                    }
                } else {
                    if (input[11] < 2.325088) {
                        var99 = -0.06256057;
                    } else {
                        var99 = 0.08488667;
                    }
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
