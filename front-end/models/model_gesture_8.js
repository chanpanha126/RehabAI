// XGBoost Model for Gesture 8: SideTapRight
// Accuracy: 99.87%
// Precision: 99.87%
// Recall: 99.87%
// F1 Score: 99.87%
// Trained on 19846 samples

export function evaluateGesture8(features) {
function score(input) {
    var var0;
    if (input[1] < 0.09390112) {
        if (input[7] < -0.4094131) {
            if (input[8] < 1.970046) {
                var0 = 0.587027;
            } else {
                var0 = -0.120000005;
            }
        } else {
            if (input[9] < 0.3124457) {
                var0 = -0.59702235;
            } else {
                var0 = 0.15;
            }
        }
    } else {
        if (input[1] < 0.3821875) {
            if (input[13] < -0.1018081) {
                if (input[1] < 0.1257793) {
                    var0 = 0.5661972;
                } else {
                    if (input[6] < -0.1877693) {
                        var0 = -0.5653179;
                    } else {
                        var0 = 0.45882356;
                    }
                }
            } else {
                if (input[14] < 1.626949) {
                    if (input[5] < 1.566429) {
                        var0 = 0.45454547;
                    } else {
                        var0 = -0.24000001;
                    }
                } else {
                    if (input[1] < 0.1121282) {
                        var0 = 0.12380953;
                    } else {
                        var0 = 0.57969326;
                    }
                }
            }
        } else {
            if (input[4] < 0.133773) {
                var0 = -0.5961228;
            } else {
                if (input[8] < 1.91008) {
                    if (input[6] < -0.241501) {
                        var0 = 0.13805889;
                    } else {
                        var0 = -0.5416667;
                    }
                } else {
                    if (input[17] < 1.821895) {
                        var0 = -0.5771429;
                    } else {
                        var0 = 0.5384908;
                    }
                }
            }
        }
    }
    var var1;
    if (input[1] < 0.09390112) {
        if (input[7] < -0.4094131) {
            if (input[8] < 1.970046) {
                var1 = 0.45582682;
            } else {
                var1 = -0.098638445;
            }
        } else {
            if (input[4] < -0.3054249) {
                var1 = -0.003650665;
            } else {
                var1 = -0.46285406;
            }
        }
    } else {
        if (input[1] < 0.3791713) {
            if (input[13] < -0.1018081) {
                if (input[1] < 0.1257793) {
                    var1 = 0.4417596;
                } else {
                    if (input[10] < 0.1281687) {
                        var1 = -0.4361703;
                    } else {
                        var1 = 0.42299184;
                    }
                }
            } else {
                if (input[14] < 1.626949) {
                    if (input[5] < 1.571476) {
                        var1 = 0.2958252;
                    } else {
                        var1 = -0.31236824;
                    }
                } else {
                    if (input[1] < 0.1121282) {
                        var1 = 0.08938933;
                    } else {
                        var1 = 0.44713762;
                    }
                }
            }
        } else {
            if (input[4] < 0.133773) {
                if (input[2] < 1.961463) {
                    var1 = 0.271433;
                } else {
                    var1 = -0.46678996;
                }
            } else {
                if (input[8] < 1.91008) {
                    if (input[6] < -0.241501) {
                        var1 = 0.09734764;
                    } else {
                        var1 = -0.41310742;
                    }
                } else {
                    if (input[17] < 1.821895) {
                        var1 = -0.4491396;
                    } else {
                        var1 = 0.40982625;
                    }
                }
            }
        }
    }
    var var2;
    if (input[1] < 0.09390112) {
        if (input[7] < -0.4094131) {
            if (input[8] < 1.970046) {
                var2 = 0.39442503;
            } else {
                var2 = -0.081379995;
            }
        } else {
            if (input[4] < -0.3054249) {
                var2 = -0.002967978;
            } else {
                var2 = -0.4015055;
            }
        }
    } else {
        if (input[1] < 0.3791713) {
            if (input[13] < -0.1018081) {
                if (input[2] < 2.500933) {
                    if (input[2] < 2.092906) {
                        var2 = 0.36353427;
                    } else {
                        var2 = -0.39799687;
                    }
                } else {
                    var2 = 0.39423028;
                }
            } else {
                if (input[17] < 2.01843) {
                    if (input[16] < -0.2447258) {
                        var2 = 0.3897021;
                    } else {
                        var2 = 0.2170883;
                    }
                } else {
                    var2 = 0.4069593;
                }
            }
        } else {
            if (input[7] < -0.06602574) {
                if (input[0] < -0.3426741) {
                    var2 = 0.34339172;
                } else {
                    if (input[4] < 0.133773) {
                        var2 = -0.40364763;
                    } else {
                        var2 = -0.9300036;
                    }
                }
            } else {
                if (input[11] < 2.184273) {
                    if (input[2] < 2.121259) {
                        var2 = 0.120408624;
                    } else {
                        var2 = -0.95125216;
                    }
                } else {
                    if (input[4] < 0.1805748) {
                        var2 = -0.4209546;
                    } else {
                        var2 = 0.4149918;
                    }
                }
            }
        }
    }
    var var3;
    if (input[1] < 0.1121282) {
        if (input[7] < -0.3224007) {
            if (input[2] < 2.171579) {
                var3 = 0.3936213;
            } else {
                if (input[15] < 0.2310027) {
                    var3 = -0.209682;
                } else {
                    if (input[8] < 1.91008) {
                        var3 = 0.0702096;
                    } else {
                        var3 = 0.31860572;
                    }
                }
            }
        } else {
            if (input[1] < 0.09390112) {
                var3 = -0.36656496;
            } else {
                var3 = -0.64721775;
            }
        }
    } else {
        if (input[1] < 0.3821875) {
            if (input[13] < -0.1018081) {
                if (input[2] < 2.500933) {
                    if (input[2] < 2.092906) {
                        var3 = 0.31317693;
                    } else {
                        var3 = -0.36034197;
                    }
                } else {
                    var3 = 0.35254112;
                }
            } else {
                if (input[14] < 1.626949) {
                    if (input[2] < 1.554802) {
                        var3 = 0.3479457;
                    } else {
                        var3 = -0.18545997;
                    }
                } else {
                    if (input[7] < -0.2837897) {
                        var3 = 0.29192588;
                    } else {
                        var3 = 0.3680627;
                    }
                }
            }
        } else {
            if (input[4] < 0.1369467) {
                if (input[2] < 1.968339) {
                    var3 = 0.31195754;
                } else {
                    var3 = -0.3767108;
                }
            } else {
                if (input[8] < 1.91008) {
                    if (input[10] < 0.4994705) {
                        var3 = -0.43737623;
                    } else {
                        var3 = 0.044530816;
                    }
                } else {
                    if (input[17] < 1.829439) {
                        var3 = -0.3630975;
                    } else {
                        var3 = 0.3183146;
                    }
                }
            }
        }
    }
    var var4;
    if (input[1] < 0.1121282) {
        if (input[7] < -0.3224007) {
            if (input[2] < 2.171579) {
                var4 = 0.35986632;
            } else {
                if (input[7] < -0.4094131) {
                    if (input[8] < 1.968107) {
                        var4 = 0.30744812;
                    } else {
                        var4 = -0.112101294;
                    }
                } else {
                    var4 = -0.24390407;
                }
            }
        } else {
            var4 = -0.35572308;
        }
    } else {
        if (input[1] < 0.3791713) {
            if (input[13] < -0.1018081) {
                if (input[2] < 2.500933) {
                    if (input[2] < 2.092906) {
                        var4 = 0.27897468;
                    } else {
                        var4 = -0.33548763;
                    }
                } else {
                    var4 = 0.32342103;
                }
            } else {
                if (input[5] < 1.977553) {
                    if (input[11] < 1.991907) {
                        var4 = 0.30190057;
                    } else {
                        var4 = -0.38425714;
                    }
                } else {
                    var4 = 0.349423;
                }
            }
        } else {
            if (input[6] < -0.3643988) {
                if (input[4] < 0.1210861) {
                    var4 = -0.22203368;
                } else {
                    var4 = 0.36233312;
                }
            } else {
                if (input[3] < -0.2604461) {
                    if (input[17] < 2.116709) {
                        var4 = -0.49172586;
                    } else {
                        var4 = -0.032700934;
                    }
                } else {
                    if (input[17] < 1.668448) {
                        var4 = -0.094483845;
                    } else {
                        var4 = 0.3181207;
                    }
                }
            }
        }
    }
    var var5;
    if (input[8] < 2.441456) {
        if (input[2] < 2.422805) {
            if (input[6] < -0.3172978) {
                if (input[10] < 0.5589083) {
                    if (input[8] < 2.396792) {
                        var5 = 0.3303363;
                    } else {
                        var5 = -0.44935086;
                    }
                } else {
                    if (input[1] < 0.5572718) {
                        var5 = -0.4884769;
                    } else {
                        var5 = 0.3635772;
                    }
                }
            } else {
                if (input[1] < 0.5043879) {
                    if (input[15] < 0.2924361) {
                        var5 = 0.040997226;
                    } else {
                        var5 = 0.3322082;
                    }
                } else {
                    if (input[13] < 0.3618484) {
                        var5 = -0.3948543;
                    } else {
                        var5 = 0.3601698;
                    }
                }
            }
        } else {
            if (input[2] < 2.505946) {
                if (input[4] < 0.133773) {
                    var5 = -0.3408874;
                } else {
                    var5 = -0.55987793;
                }
            } else {
                var5 = 0.28623155;
            }
        }
    } else {
        var5 = 0.33783054;
    }
    var var6;
    if (input[8] < 2.441456) {
        if (input[5] < 2.445275) {
            if (input[11] < 2.184273) {
                if (input[5] < 2.110736) {
                    if (input[16] < -0.2464189) {
                        var6 = 0.2994367;
                    } else {
                        var6 = 0.059431702;
                    }
                } else {
                    if (input[3] < -0.3743268) {
                        var6 = 0.295874;
                    } else {
                        var6 = -0.40548712;
                    }
                }
            } else {
                if (input[2] < 2.422805) {
                    if (input[8] < 2.396792) {
                        var6 = 0.32905868;
                    } else {
                        var6 = -0.23275106;
                    }
                } else {
                    var6 = -0.33786237;
                }
            }
        } else {
            if (input[2] < 2.505946) {
                var6 = -0.34562182;
            } else {
                var6 = 0.2685346;
            }
        }
    } else {
        var6 = 0.32660526;
    }
    var var7;
    if (input[11] < 2.184273) {
        if (input[5] < 2.09394) {
            if (input[6] < -0.287716) {
                if (input[1] < 0.5209091) {
                    if (input[17] < 1.519384) {
                        var7 = 0.063479796;
                    } else {
                        var7 = 0.33472356;
                    }
                } else {
                    if (input[10] < 0.571869) {
                        var7 = -0.44719294;
                    } else {
                        var7 = 0.36199817;
                    }
                }
            } else {
                if (input[16] < -0.2447258) {
                    if (input[11] < 1.615855) {
                        var7 = -0.2898673;
                    } else {
                        var7 = 0.30035126;
                    }
                } else {
                    if (input[13] < -0.06721096) {
                        var7 = -0.58702165;
                    } else {
                        var7 = -0.08629957;
                    }
                }
            }
        } else {
            if (input[3] < -0.1220578) {
                if (input[3] < -0.369543) {
                    if (input[8] < 2.086354) {
                        var7 = 0.292261;
                    } else {
                        var7 = 0.05990082;
                    }
                } else {
                    if (input[8] < 2.091049) {
                        var7 = -0.32639474;
                    } else {
                        var7 = -0.48204648;
                    }
                }
            } else {
                var7 = 0.2967607;
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            var7 = 0.32271075;
        } else {
            if (input[6] < -0.2703514) {
                if (input[5] < 2.53521) {
                    var7 = -0.3402428;
                } else {
                    var7 = 0.25507733;
                }
            } else {
                if (input[1] < 0.1544051) {
                    if (input[8] < 1.970046) {
                        var7 = 0.23726158;
                    } else {
                        var7 = -0.3001695;
                    }
                } else {
                    var7 = 0.31689146;
                }
            }
        }
    }
    var var8;
    if (input[11] < 2.184273) {
        if (input[5] < 2.12481) {
            if (input[6] < -0.3119513) {
                if (input[3] < -0.211822) {
                    if (input[4] < 0.2960815) {
                        var8 = 0.32991785;
                    } else {
                        var8 = 0.06741006;
                    }
                } else {
                    var8 = -0.3162832;
                }
            } else {
                if (input[16] < -0.2464189) {
                    if (input[14] < 1.626949) {
                        var8 = -0.14747947;
                    } else {
                        var8 = 0.30732393;
                    }
                } else {
                    if (input[11] < 1.846951) {
                        var8 = 0.08648983;
                    } else {
                        var8 = -0.19504312;
                    }
                }
            }
        } else {
            if (input[0] < -0.3359791) {
                var8 = 0.24412535;
            } else {
                if (input[1] < 0.09390112) {
                    var8 = -0.30829298;
                } else {
                    var8 = -0.40524858;
                }
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            var8 = 0.31539315;
        } else {
            if (input[6] < -0.2711338) {
                if (input[5] < 2.53521) {
                    var8 = -0.32900375;
                } else {
                    var8 = 0.2361984;
                }
            } else {
                if (input[1] < 0.1544051) {
                    if (input[7] < -0.4094131) {
                        var8 = 0.23094828;
                    } else {
                        var8 = -0.2530077;
                    }
                } else {
                    var8 = 0.31092495;
                }
            }
        }
    }
    var var9;
    if (input[11] < 2.184273) {
        if (input[5] < 2.09394) {
            if (input[6] < -0.288758) {
                if (input[1] < 0.5209091) {
                    if (input[17] < 1.660474) {
                        var9 = 0.13514315;
                    } else {
                        var9 = 0.32041752;
                    }
                } else {
                    if (input[10] < 0.5755756) {
                        var9 = -0.3109299;
                    } else {
                        var9 = 0.3811397;
                    }
                }
            } else {
                if (input[15] < 0.2989162) {
                    if (input[6] < -0.1737308) {
                        var9 = -0.0066931783;
                    } else {
                        var9 = -0.4671931;
                    }
                } else {
                    var9 = 0.3114795;
                }
            }
        } else {
            if (input[3] < -0.1220578) {
                if (input[3] < -0.3743268) {
                    var9 = 0.26235864;
                } else {
                    if (input[11] < 2.180795) {
                        var9 = -0.35385057;
                    } else {
                        var9 = -0.102309085;
                    }
                }
            } else {
                var9 = 0.26628095;
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            var9 = 0.30973947;
        } else {
            if (input[6] < -0.2711338) {
                if (input[5] < 2.53521) {
                    var9 = -0.31937706;
                } else {
                    var9 = 0.22055872;
                }
            } else {
                if (input[1] < 0.1544051) {
                    if (input[5] < 2.1048) {
                        var9 = 0.28019997;
                    } else {
                        var9 = -0.17279083;
                    }
                } else {
                    var9 = 0.30618897;
                }
            }
        }
    }
    var var10;
    if (input[11] < 2.184273) {
        if (input[5] < 2.12481) {
            if (input[4] < 0.2057392) {
                if (input[6] < -0.2285671) {
                    if (input[14] < 1.613451) {
                        var10 = -0.056809895;
                    } else {
                        var10 = 0.30570403;
                    }
                } else {
                    if (input[12] < 0.2267006) {
                        var10 = -0.5534439;
                    } else {
                        var10 = 0.17015365;
                    }
                }
            } else {
                if (input[10] < 0.5022916) {
                    if (input[13] < 0.2473602) {
                        var10 = -0.21413915;
                    } else {
                        var10 = -0.50745296;
                    }
                } else {
                    if (input[4] < 0.2433393) {
                        var10 = 0.24750002;
                    } else {
                        var10 = -0.050457563;
                    }
                }
            }
        } else {
            if (input[0] < -0.3359791) {
                var10 = 0.2087528;
            } else {
                var10 = -0.32974708;
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            if (input[11] < 2.188193) {
                if (input[0] < -0.2718175) {
                    var10 = 0.18202612;
                } else {
                    var10 = 0.010757675;
                }
            } else {
                var10 = 0.30719393;
            }
        } else {
            if (input[0] < -0.2325446) {
                var10 = -0.3110595;
            } else {
                if (input[16] < -0.2419154) {
                    if (input[8] < 1.970046) {
                        var10 = 0.18886235;
                    } else {
                        var10 = -0.28432453;
                    }
                } else {
                    var10 = 0.3024083;
                }
            }
        }
    }
    var var11;
    if (input[15] < 0.1023821) {
        if (input[12] < 0.1752192) {
            if (input[4] < -0.06557272) {
                var11 = -0.08751134;
            } else {
                var11 = 0.31244534;
            }
        } else {
            var11 = -0.23945802;
        }
    } else {
        if (input[15] < 0.2989162) {
            if (input[13] < 0.3645829) {
                if (input[7] < 0.07702699) {
                    if (input[1] < 0.4924694) {
                        var11 = -0.022853633;
                    } else {
                        var11 = 0.22791864;
                    }
                } else {
                    if (input[11] < 2.188193) {
                        var11 = -0.2956346;
                    } else {
                        var11 = 0.27258563;
                    }
                }
            } else {
                if (input[3] < -0.2982324) {
                    if (input[0] < -0.3017664) {
                        var11 = 0.2248838;
                    } else {
                        var11 = 0.51139545;
                    }
                } else {
                    var11 = -0.22252774;
                }
            }
        } else {
            if (input[1] < 0.5043879) {
                var11 = 0.30230924;
            } else {
                if (input[0] < -0.03265514) {
                    var11 = -0.3881073;
                } else {
                    var11 = 0.26478505;
                }
            }
        }
    }
    var var12;
    if (input[8] < 2.42728) {
        if (input[6] < -0.3643988) {
            if (input[11] < 2.399569) {
                var12 = 0.29708558;
            } else {
                var12 = 0.028074915;
            }
        } else {
            if (input[15] < 0.3558986) {
                if (input[13] < 0.3618484) {
                    if (input[3] < -0.2573615) {
                        var12 = -0.15920326;
                    } else {
                        var12 = 0.040085033;
                    }
                } else {
                    if (input[14] < 2.131362) {
                        var12 = 0.43609717;
                    } else {
                        var12 = -0.31056342;
                    }
                }
            } else {
                var12 = 0.2981579;
            }
        }
    } else {
        var12 = 0.2982412;
    }
    var var13;
    if (input[11] < 2.184273) {
        if (input[5] < 2.12481) {
            if (input[6] < -0.3035152) {
                if (input[4] < 0.2960815) {
                    if (input[12] < 0.2820944) {
                        var13 = 0.32431284;
                    } else {
                        var13 = -0.25567248;
                    }
                } else {
                    if (input[10] < 0.571869) {
                        var13 = -0.25542766;
                    } else {
                        var13 = 0.30614597;
                    }
                }
            } else {
                if (input[4] < -0.06606739) {
                    if (input[17] < 1.901403) {
                        var13 = 0.22395861;
                    } else {
                        var13 = -0.083776645;
                    }
                } else {
                    if (input[1] < 0.4924694) {
                        var13 = -0.20275494;
                    } else {
                        var13 = 0.06474838;
                    }
                }
            }
        } else {
            if (input[3] < -0.3718649) {
                var13 = 0.08668007;
            } else {
                var13 = -0.3191403;
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            if (input[11] < 2.188193) {
                var13 = 0.10900103;
            } else {
                var13 = 0.3016035;
            }
        } else {
            if (input[6] < -0.2703514) {
                if (input[5] < 2.53521) {
                    var13 = -0.29775488;
                } else {
                    var13 = 0.16585836;
                }
            } else {
                if (input[10] < -0.1523099) {
                    if (input[5] < 2.1048) {
                        var13 = 0.196487;
                    } else {
                        var13 = -0.2990125;
                    }
                } else {
                    if (input[3] < -0.2513975) {
                        var13 = 0.06849387;
                    } else {
                        var13 = 0.28931665;
                    }
                }
            }
        }
    }
    var var14;
    if (input[15] < 0.1006707) {
        if (input[12] < 0.1752192) {
            if (input[1] < 0.1485295) {
                var14 = -0.0022147507;
            } else {
                var14 = 0.30848098;
            }
        } else {
            var14 = -0.18340117;
        }
    } else {
        if (input[15] < 0.3558986) {
            if (input[11] < 1.846951) {
                if (input[17] < 1.668448) {
                    if (input[13] < 0.2563214) {
                        var14 = 0.076966956;
                    } else {
                        var14 = -0.3324948;
                    }
                } else {
                    if (input[1] < 0.5026001) {
                        var14 = 0.31432244;
                    } else {
                        var14 = -0.26500764;
                    }
                }
            } else {
                if (input[17] < 1.781579) {
                    if (input[5] < 1.860863) {
                        var14 = -0.8205866;
                    } else {
                        var14 = -0.16296883;
                    }
                } else {
                    if (input[2] < 1.797049) {
                        var14 = -0.31650725;
                    } else {
                        var14 = 0.024762616;
                    }
                }
            }
        } else {
            var14 = 0.2946193;
        }
    }
    var var15;
    if (input[5] < 2.521082) {
        if (input[6] < -0.2866084) {
            if (input[5] < 2.12481) {
                if (input[4] < 0.2298453) {
                    if (input[13] < 0.242877) {
                        var15 = 0.2906237;
                    } else {
                        var15 = 0.4010143;
                    }
                } else {
                    if (input[2] < 1.640486) {
                        var15 = -0.53287655;
                    } else {
                        var15 = 0.09423201;
                    }
                }
            } else {
                if (input[3] < -0.3029392) {
                    if (input[7] < 0.08330842) {
                        var15 = -0.26381;
                    } else {
                        var15 = 0.22950639;
                    }
                } else {
                    var15 = 0.25381607;
                }
            }
        } else {
            if (input[15] < 0.2591471) {
                if (input[16] < 0.1462664) {
                    if (input[11] < 1.865359) {
                        var15 = 0.0017139034;
                    } else {
                        var15 = -0.2146735;
                    }
                } else {
                    if (input[15] < 0.1186693) {
                        var15 = 0.44730693;
                    } else {
                        var15 = -0.18805741;
                    }
                }
            } else {
                if (input[16] < 0.0006103515) {
                    if (input[2] < 1.98101) {
                        var15 = 0.048817758;
                    } else {
                        var15 = 0.3271684;
                    }
                } else {
                    if (input[14] < 2.078694) {
                        var15 = -0.34488076;
                    } else {
                        var15 = -0.037351284;
                    }
                }
            }
        }
    } else {
        var15 = 0.29125452;
    }
    var var16;
    if (input[11] < 2.184273) {
        if (input[5] < 2.064425) {
            if (input[10] < 0.1692597) {
                if (input[14] < 2.013682) {
                    var16 = 0.31913957;
                } else {
                    if (input[16] < -0.2456065) {
                        var16 = 0.27792814;
                    } else {
                        var16 = -0.2836849;
                    }
                }
            } else {
                if (input[13] < -0.06764121) {
                    if (input[16] < -0.2440466) {
                        var16 = 0.20769076;
                    } else {
                        var16 = -0.51698273;
                    }
                } else {
                    if (input[5] < 1.856947) {
                        var16 = -0.017376618;
                    } else {
                        var16 = 0.16494803;
                    }
                }
            }
        } else {
            if (input[6] < -0.3354131) {
                if (input[8] < 2.096876) {
                    var16 = 0.27653393;
                } else {
                    var16 = -0.18535651;
                }
            } else {
                if (input[3] < -0.1220578) {
                    if (input[3] < -0.3337207) {
                        var16 = 0.039728764;
                    } else {
                        var16 = -0.32211;
                    }
                } else {
                    var16 = 0.22583278;
                }
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            if (input[11] < 2.188193) {
                var16 = 0.08240132;
            } else {
                var16 = 0.29674214;
            }
        } else {
            if (input[6] < -0.2703514) {
                if (input[5] < 2.51352) {
                    var16 = -0.2816044;
                } else {
                    var16 = 0.06166656;
                }
            } else {
                if (input[10] < -0.1523099) {
                    if (input[5] < 2.1048) {
                        var16 = 0.18610856;
                    } else {
                        var16 = -0.24142909;
                    }
                } else {
                    if (input[6] < -0.1877693) {
                        var16 = 0.036151964;
                    } else {
                        var16 = 0.27554068;
                    }
                }
            }
        }
    }
    var var17;
    if (input[11] < 2.184273) {
        if (input[5] < 2.064425) {
            if (input[10] < 0.167827) {
                if (input[17] < 1.915494) {
                    var17 = 0.31780034;
                } else {
                    if (input[16] < -0.2456065) {
                        var17 = 0.26584974;
                    } else {
                        var17 = -0.27328312;
                    }
                }
            } else {
                if (input[13] < -0.06764121) {
                    if (input[8] < 1.771324) {
                        var17 = 0.23185325;
                    } else {
                        var17 = -0.36857334;
                    }
                } else {
                    if (input[12] < 0.2267006) {
                        var17 = -0.016849916;
                    } else {
                        var17 = 0.16109712;
                    }
                }
            }
        } else {
            if (input[6] < -0.3354131) {
                if (input[8] < 2.096876) {
                    var17 = 0.25824976;
                } else {
                    var17 = -0.16377556;
                }
            } else {
                if (input[3] < -0.1281453) {
                    if (input[12] < 0.07935794) {
                        var17 = -0.011546038;
                    } else {
                        var17 = -0.3155526;
                    }
                } else {
                    var17 = 0.20816593;
                }
            }
        }
    } else {
        if (input[12] < 0.1808012) {
            if (input[11] < 2.188193) {
                var17 = 0.07076896;
            } else {
                var17 = 0.29231104;
            }
        } else {
            if (input[0] < -0.2136127) {
                var17 = -0.26830122;
            } else {
                if (input[16] < -0.2464189) {
                    if (input[7] < -0.4094131) {
                        var17 = 0.18072742;
                    } else {
                        var17 = -0.21430936;
                    }
                } else {
                    var17 = 0.2757815;
                }
            }
        }
    }
    var var18;
    if (input[15] < 0.1084765) {
        if (input[11] < 1.939188) {
            if (input[0] < -0.28983) {
                var18 = 0.27759412;
            } else {
                var18 = -0.2942831;
            }
        } else {
            if (input[12] < 0.09820338) {
                if (input[8] < 1.749729) {
                    var18 = 0.08651731;
                } else {
                    if (input[2] < 2.139833) {
                        var18 = 0.35213655;
                    } else {
                        var18 = 0.20384647;
                    }
                }
            } else {
                if (input[11] < 2.184273) {
                    var18 = -0.16236748;
                } else {
                    var18 = 0.21603079;
                }
            }
        }
    } else {
        if (input[4] < 0.2443461) {
            if (input[1] < 0.4924694) {
                if (input[13] < 0.2563214) {
                    if (input[10] < 0.4994705) {
                        var18 = 0.0042513725;
                    } else {
                        var18 = 0.28097758;
                    }
                } else {
                    if (input[14] < 1.766734) {
                        var18 = -0.37577307;
                    } else {
                        var18 = 0.3689314;
                    }
                }
            } else {
                if (input[1] < 0.5043879) {
                    if (input[5] < 1.733539) {
                        var18 = -0.09719692;
                    } else {
                        var18 = 0.34932536;
                    }
                } else {
                    var18 = -0.18074615;
                }
            }
        } else {
            if (input[14] < 2.104562) {
                var18 = -0.37691236;
            } else {
                if (input[10] < 0.5915527) {
                    if (input[11] < 2.184273) {
                        var18 = -0.1947013;
                    } else {
                        var18 = 0.2438717;
                    }
                } else {
                    if (input[9] < 0.12375) {
                        var18 = 0.37471843;
                    } else {
                        var18 = 0.010387221;
                    }
                }
            }
        }
    }
    var var19;
    if (input[17] < 1.599402) {
        if (input[6] < -0.2856097) {
            if (input[0] < -0.09664018) {
                if (input[5] < 1.63129) {
                    if (input[8] < 1.461837) {
                        var19 = -0.022454903;
                    } else {
                        var19 = 0.3891683;
                    }
                } else {
                    var19 = -0.3093688;
                }
            } else {
                var19 = -0.43349457;
            }
        } else {
            if (input[13] < 0.2454855) {
                if (input[2] < 1.640486) {
                    if (input[2] < 1.554802) {
                        var19 = 0.28087735;
                    } else {
                        var19 = -0.26222032;
                    }
                } else {
                    if (input[0] < -0.1086433) {
                        var19 = -0.29118484;
                    } else {
                        var19 = 0.37489352;
                    }
                }
            } else {
                var19 = -0.42789;
            }
        }
    } else {
        if (input[11] < 1.865359) {
            if (input[4] < 0.237541) {
                if (input[12] < 0.1486327) {
                    var19 = 0.059586577;
                } else {
                    var19 = 0.31729543;
                }
            } else {
                if (input[12] < 0.1913992) {
                    if (input[1] < 0.4924694) {
                        var19 = -0.49582848;
                    } else {
                        var19 = -0.018725725;
                    }
                } else {
                    if (input[5] < 1.733539) {
                        var19 = -0.36460778;
                    } else {
                        var19 = 0.32638067;
                    }
                }
            }
        } else {
            if (input[17] < 1.781579) {
                if (input[6] < -0.1630944) {
                    if (input[9] < 0.1648158) {
                        var19 = -0.019136019;
                    } else {
                        var19 = -0.47672147;
                    }
                } else {
                    var19 = 0.21163869;
                }
            } else {
                if (input[15] < 0.1023821) {
                    if (input[12] < 0.168426) {
                        var19 = 0.2725098;
                    } else {
                        var19 = -0.040250096;
                    }
                } else {
                    if (input[2] < 1.810271) {
                        var19 = -0.25613683;
                    } else {
                        var19 = 0.0420015;
                    }
                }
            }
        }
    }
    var var20;
    if (input[5] < 2.53521) {
        if (input[7] < -0.3244636) {
            if (input[2] < 2.171579) {
                var20 = 0.30452368;
            } else {
                if (input[15] < 0.2408341) {
                    var20 = -0.20236509;
                } else {
                    var20 = 0.09810873;
                }
            }
        } else {
            if (input[1] < 0.1691598) {
                if (input[8] < 1.854966) {
                    if (input[1] < 0.1680833) {
                        var20 = 0.2896814;
                    } else {
                        var20 = -0.24098909;
                    }
                } else {
                    if (input[15] < 0.3032777) {
                        var20 = -0.29608807;
                    } else {
                        var20 = 0.17197579;
                    }
                }
            } else {
                if (input[4] < -0.06657562) {
                    if (input[6] < -0.1737308) {
                        var20 = 0.27957743;
                    } else {
                        var20 = -0.015035165;
                    }
                } else {
                    if (input[15] < 0.1202691) {
                        var20 = 0.1149663;
                    } else {
                        var20 = -0.0551326;
                    }
                }
            }
        }
    } else {
        var20 = 0.27542984;
    }
    var var21;
    if (input[15] < 0.3558986) {
        if (input[13] < 0.3645829) {
            if (input[4] < 0.2443461) {
                if (input[1] < 0.4931629) {
                    if (input[6] < -0.2899882) {
                        var21 = 0.14618897;
                    } else {
                        var21 = -0.03257437;
                    }
                } else {
                    if (input[1] < 0.5026001) {
                        var21 = 0.31695852;
                    } else {
                        var21 = -0.18030086;
                    }
                }
            } else {
                if (input[17] < 2.116709) {
                    var21 = -0.32998043;
                } else {
                    if (input[11] < 2.188193) {
                        var21 = -0.050125938;
                    } else {
                        var21 = 0.26307008;
                    }
                }
            }
        } else {
            if (input[3] < -0.3005792) {
                var21 = 0.31952286;
            } else {
                var21 = -0.11828307;
            }
        }
    } else {
        var21 = 0.27318358;
    }
    var var22;
    if (input[11] < 1.603296) {
        if (input[8] < 1.48904) {
            var22 = 0.063587956;
        } else {
            var22 = -0.4462962;
        }
    } else {
        if (input[4] < 0.2244232) {
            if (input[2] < 1.826975) {
                if (input[9] < 0.1937669) {
                    if (input[11] < 1.624329) {
                        var22 = 0.015612858;
                    } else {
                        var22 = 0.32439503;
                    }
                } else {
                    if (input[4] < -0.06092589) {
                        var22 = 0.20355514;
                    } else {
                        var22 = -0.22061695;
                    }
                }
            } else {
                if (input[17] < 1.781579) {
                    if (input[0] < -0.1400551) {
                        var22 = -0.3703735;
                    } else {
                        var22 = 0.19987309;
                    }
                } else {
                    if (input[1] < 0.1691598) {
                        var22 = -0.06569135;
                    } else {
                        var22 = 0.1604466;
                    }
                }
            }
        } else {
            if (input[2] < 1.640486) {
                if (input[7] < -0.003709334) {
                    var22 = -0.4647211;
                } else {
                    if (input[10] < 0.4994705) {
                        var22 = -0.37976345;
                    } else {
                        var22 = 0.11766885;
                    }
                }
            } else {
                if (input[14] < 1.642755) {
                    if (input[13] < 0.2387443) {
                        var22 = -0.22947274;
                    } else {
                        var22 = 0.3403086;
                    }
                } else {
                    if (input[1] < 0.4903966) {
                        var22 = -0.21947433;
                    } else {
                        var22 = 0.039852336;
                    }
                }
            }
        }
    }
    var var23;
    if (input[16] < 0.1575578) {
        if (input[3] < -0.2513975) {
            if (input[9] < 0.0790737) {
                if (input[8] < 1.761051) {
                    if (input[6] < -0.3312647) {
                        var23 = 0.02174071;
                    } else {
                        var23 = -0.28407687;
                    }
                } else {
                    if (input[5] < 2.12481) {
                        var23 = 0.29050994;
                    } else {
                        var23 = -0.09292081;
                    }
                }
            } else {
                if (input[7] < -0.3015143) {
                    if (input[14] < 2.092244) {
                        var23 = 0.25723913;
                    } else {
                        var23 = -0.030748265;
                    }
                } else {
                    if (input[17] < 2.347098) {
                        var23 = -0.25417492;
                    } else {
                        var23 = 0.0484181;
                    }
                }
            }
        } else {
            if (input[11] < 2.013351) {
                if (input[17] < 1.901403) {
                    if (input[17] < 1.599402) {
                        var23 = -0.04285372;
                    } else {
                        var23 = 0.12792523;
                    }
                } else {
                    if (input[6] < -0.1563015) {
                        var23 = -0.048076704;
                    } else {
                        var23 = -0.5220365;
                    }
                }
            } else {
                if (input[13] < -0.3462992) {
                    var23 = -0.045746297;
                } else {
                    if (input[3] < -0.2421865) {
                        var23 = 0.061417032;
                    } else {
                        var23 = 0.29321632;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.85025) {
            if (input[1] < 0.5560407) {
                var23 = 0.05863667;
            } else {
                var23 = 0.36877003;
            }
        } else {
            var23 = -0.019456161;
        }
    }
    var var24;
    if (input[2] < 1.554802) {
        var24 = 0.27626193;
    } else {
        if (input[11] < 1.609534) {
            var24 = -0.3801913;
        } else {
            if (input[15] < 0.2699487) {
                if (input[11] < 1.634116) {
                    if (input[10] < 0.2040923) {
                        var24 = -0.60447997;
                    } else {
                        var24 = -0.1673706;
                    }
                } else {
                    if (input[3] < -0.1945075) {
                        var24 = 0.020988114;
                    } else {
                        var24 = -0.14061987;
                    }
                }
            } else {
                if (input[8] < 1.880704) {
                    if (input[6] < -0.1690036) {
                        var24 = 0.33231974;
                    } else {
                        var24 = 0.10375906;
                    }
                } else {
                    if (input[5] < 1.96934) {
                        var24 = -0.38028166;
                    } else {
                        var24 = 0.10860244;
                    }
                }
            }
        }
    }
    var var25;
    if (input[5] < 2.53521) {
        if (input[5] < 2.433668) {
            if (input[11] < 2.188193) {
                if (input[5] < 2.12481) {
                    if (input[6] < -0.305334) {
                        var25 = 0.17023681;
                    } else {
                        var25 = -0.011389749;
                    }
                } else {
                    var25 = -0.28929672;
                }
            } else {
                if (input[10] < -0.1523099) {
                    if (input[17] < 1.948831) {
                        var25 = -0.07635017;
                    } else {
                        var25 = 0.019586056;
                    }
                } else {
                    if (input[14] < 2.467913) {
                        var25 = 0.26254666;
                    } else {
                        var25 = 0.052312057;
                    }
                }
            }
        } else {
            if (input[13] < 0.1297099) {
                var25 = -0.26644686;
            } else {
                var25 = -0.07727741;
            }
        }
    } else {
        var25 = 0.25949028;
    }
    var var26;
    if (input[10] < 0.5915527) {
        if (input[4] < 0.2443461) {
            if (input[13] < 0.2683181) {
                if (input[15] < 0.3032777) {
                    if (input[2] < 1.554802) {
                        var26 = 0.26178825;
                    } else {
                        var26 = -0.019534158;
                    }
                } else {
                    var26 = 0.269958;
                }
            } else {
                if (input[1] < 0.5026001) {
                    var26 = 0.29729563;
                } else {
                    var26 = -0.18384969;
                }
            }
        } else {
            if (input[15] < 0.1134087) {
                if (input[10] < 0.5755756) {
                    if (input[10] < 0.5589083) {
                        var26 = 0.1717394;
                    } else {
                        var26 = -0.22464764;
                    }
                } else {
                    if (input[11] < 1.984768) {
                        var26 = 0.34628353;
                    } else {
                        var26 = 0.09089808;
                    }
                }
            } else {
                if (input[11] < 2.188193) {
                    if (input[10] < 0.5895058) {
                        var26 = -0.3177669;
                    } else {
                        var26 = 0.01796923;
                    }
                } else {
                    var26 = 0.21509145;
                }
            }
        }
    } else {
        if (input[17] < 2.116709) {
            var26 = -0.102882944;
        } else {
            var26 = 0.3004503;
        }
    }
    var var27;
    if (input[7] < -0.3244636) {
        if (input[5] < 2.1048) {
            var27 = 0.28612792;
        } else {
            if (input[10] < -0.1486952) {
                var27 = -0.18828408;
            } else {
                var27 = 0.1192479;
            }
        }
    } else {
        if (input[1] < 0.1515034) {
            if (input[8] < 1.854966) {
                var27 = 0.22525197;
            } else {
                if (input[16] < -0.2541347) {
                    var27 = -0.054902323;
                } else {
                    if (input[5] < 2.161814) {
                        var27 = -0.3370174;
                    } else {
                        var27 = -0.0954567;
                    }
                }
            }
        } else {
            if (input[10] < 0.1748945) {
                if (input[13] < -0.07316252) {
                    var27 = 0.056485917;
                } else {
                    var27 = 0.36203897;
                }
            } else {
                if (input[1] < 0.1691598) {
                    if (input[6] < -0.2033704) {
                        var27 = 0.19811192;
                    } else {
                        var27 = -0.29294214;
                    }
                } else {
                    if (input[4] < -0.07775815) {
                        var27 = 0.22701533;
                    } else {
                        var27 = -0.006425051;
                    }
                }
            }
        }
    }
    var var28;
    if (input[15] < 0.1006707) {
        if (input[17] < 1.970626) {
            var28 = -0.039162487;
        } else {
            var28 = 0.25688693;
        }
    } else {
        if (input[3] < -0.2609473) {
            if (input[10] < 0.5895058) {
                if (input[9] < 0.0790737) {
                    if (input[11] < 2.180795) {
                        var28 = -0.0998315;
                    } else {
                        var28 = 0.243712;
                    }
                } else {
                    if (input[1] < 0.3754761) {
                        var28 = 0.09845001;
                    } else {
                        var28 = -0.2718423;
                    }
                }
            } else {
                if (input[12] < 0.1199056) {
                    if (input[14] < 2.131362) {
                        var28 = 0.34179935;
                    } else {
                        var28 = -0.09447884;
                    }
                } else {
                    if (input[3] < -0.2900347) {
                        var28 = -0.042606663;
                    } else {
                        var28 = -0.22206119;
                    }
                }
            }
        } else {
            if (input[3] < -0.2268669) {
                if (input[4] < 0.2467091) {
                    if (input[1] < 0.09390112) {
                        var28 = -0.18375014;
                    } else {
                        var28 = 0.23763643;
                    }
                } else {
                    var28 = -0.17561571;
                }
            } else {
                if (input[11] < 2.013351) {
                    if (input[6] < -0.1737308) {
                        var28 = 0.012192307;
                    } else {
                        var28 = -0.15844879;
                    }
                } else {
                    if (input[10] < -0.1486952) {
                        var28 = 0.0040337527;
                    } else {
                        var28 = 0.29236662;
                    }
                }
            }
        }
    }
    var var29;
    if (input[11] < 1.603296) {
        if (input[0] < -0.1599031) {
            var29 = -0.2945004;
        } else {
            var29 = -0.05657817;
        }
    } else {
        if (input[13] < 0.2454855) {
            if (input[13] < 0.242877) {
                if (input[16] < 0.05010146) {
                    if (input[12] < 0.1843578) {
                        var29 = 0.24594295;
                    } else {
                        var29 = 0.01584631;
                    }
                } else {
                    if (input[10] < 0.4994705) {
                        var29 = -0.28509346;
                    } else {
                        var29 = 0.14187992;
                    }
                }
            } else {
                if (input[7] < -0.003709334) {
                    var29 = -0.3586826;
                } else {
                    if (input[17] < 1.529019) {
                        var29 = 0.46730047;
                    } else {
                        var29 = -0.10732397;
                    }
                }
            }
        } else {
            if (input[10] < 0.5022916) {
                if (input[6] < -0.287716) {
                    if (input[13] < 0.2563214) {
                        var29 = 0.22347717;
                    } else {
                        var29 = -0.18320628;
                    }
                } else {
                    var29 = -0.33014846;
                }
            } else {
                if (input[4] < 0.2368808) {
                    if (input[0] < -0.1916369) {
                        var29 = -0.199386;
                    } else {
                        var29 = 0.24365602;
                    }
                } else {
                    if (input[1] < 0.4903966) {
                        var29 = -0.36054376;
                    } else {
                        var29 = -0.0021319904;
                    }
                }
            }
        }
    }
    var var30;
    if (input[3] < -0.08187494) {
        if (input[3] < -0.1405117) {
            if (input[3] < -0.1730499) {
                if (input[6] < -0.177746) {
                    if (input[7] < -0.2789133) {
                        var30 = 0.10830384;
                    } else {
                        var30 = -0.019189147;
                    }
                } else {
                    if (input[2] < 2.028907) {
                        var30 = -0.34092516;
                    } else {
                        var30 = 0.106383264;
                    }
                }
            } else {
                if (input[13] < -0.06721096) {
                    if (input[8] < 1.880704) {
                        var30 = 0.117295094;
                    } else {
                        var30 = -0.22979063;
                    }
                } else {
                    if (input[12] < 0.2820944) {
                        var30 = 0.30632138;
                    } else {
                        var30 = 0.02837911;
                    }
                }
            }
        } else {
            if (input[9] < 0.2377061) {
                if (input[2] < 1.97656) {
                    var30 = -0.49208042;
                } else {
                    var30 = -0.11554421;
                }
            } else {
                if (input[10] < -0.1486952) {
                    var30 = -0.16229069;
                } else {
                    var30 = 0.18302102;
                }
            }
        }
    } else {
        var30 = 0.23171109;
    }
    var var31;
    if (input[6] < -0.3729921) {
        var31 = 0.23151484;
    } else {
        if (input[0] < -0.1069217) {
            if (input[15] < 0.2649934) {
                if (input[16] < 0.1528192) {
                    if (input[13] < 0.3645829) {
                        var31 = -0.08005397;
                    } else {
                        var31 = 0.1966866;
                    }
                } else {
                    if (input[10] < 0.571869) {
                        var31 = -0.093761966;
                    } else {
                        var31 = 0.20940675;
                    }
                }
            } else {
                if (input[11] < 1.615855) {
                    if (input[2] < 1.560962) {
                        var31 = 0.27121145;
                    } else {
                        var31 = -0.37470528;
                    }
                } else {
                    if (input[6] < -0.1690036) {
                        var31 = 0.2664576;
                    } else {
                        var31 = -0.0033485556;
                    }
                }
            }
        } else {
            if (input[9] < 0.1937669) {
                if (input[13] < 0.2411715) {
                    if (input[2] < 1.640486) {
                        var31 = -0.19607265;
                    } else {
                        var31 = 0.25127357;
                    }
                } else {
                    var31 = 0.45330113;
                }
            } else {
                if (input[5] < 1.733539) {
                    if (input[14] < 1.63432) {
                        var31 = 0.051182237;
                    } else {
                        var31 = -0.2740462;
                    }
                } else {
                    if (input[2] < 1.968339) {
                        var31 = 0.32955903;
                    } else {
                        var31 = -0.11194339;
                    }
                }
            }
        }
    }
    var var32;
    if (input[5] < 2.53521) {
        if (input[2] < 2.422805) {
            if (input[11] < 2.202112) {
                if (input[5] < 2.12481) {
                    if (input[6] < -0.305334) {
                        var32 = 0.14921047;
                    } else {
                        var32 = -0.0072266697;
                    }
                } else {
                    var32 = -0.23910218;
                }
            } else {
                if (input[3] < -0.3305081) {
                    var32 = 0.05048394;
                } else {
                    var32 = 0.2429954;
                }
            }
        } else {
            var32 = -0.23570874;
        }
    } else {
        var32 = 0.23272255;
    }
    var var33;
    if (input[16] < -0.2988509) {
        if (input[5] < 2.1048) {
            var33 = 0.23517548;
        } else {
            var33 = -0.042499147;
        }
    } else {
        if (input[2] < 1.554802) {
            var33 = 0.22516167;
        } else {
            if (input[11] < 1.628183) {
                if (input[6] < -0.2182636) {
                    if (input[13] < -0.03978244) {
                        var33 = -0.3825575;
                    } else {
                        var33 = -0.01582199;
                    }
                } else {
                    var33 = 0.25147676;
                }
            } else {
                if (input[2] < 1.607212) {
                    var33 = 0.23423985;
                } else {
                    if (input[1] < 0.1515034) {
                        var33 = -0.128799;
                    } else {
                        var33 = 0.0062745884;
                    }
                }
            }
        }
    }
    var var34;
    if (input[7] < -0.3244636) {
        if (input[2] < 2.171579) {
            var34 = 0.25613022;
        } else {
            var34 = -0.052835;
        }
    } else {
        if (input[1] < 0.1515034) {
            if (input[8] < 1.854966) {
                var34 = 0.18833727;
            } else {
                if (input[4] < -0.1103286) {
                    var34 = -0.0757166;
                } else {
                    var34 = -0.2966896;
                }
            }
        } else {
            if (input[10] < 0.1748945) {
                if (input[13] < -0.07261127) {
                    var34 = 0.047068376;
                } else {
                    var34 = 0.31106538;
                }
            } else {
                if (input[1] < 0.1691598) {
                    if (input[13] < -0.06367502) {
                        var34 = -0.24564084;
                    } else {
                        var34 = 0.06905014;
                    }
                } else {
                    if (input[7] < -0.3000831) {
                        var34 = 0.21410605;
                    } else {
                        var34 = -0.0015914459;
                    }
                }
            }
        }
    }
    var var35;
    if (input[3] < -0.2609473) {
        if (input[15] < 0.1227413) {
            if (input[12] < 0.122564) {
                if (input[4] < 0.3314527) {
                    if (input[13] < 0.3618484) {
                        var35 = 0.04618404;
                    } else {
                        var35 = 0.34033138;
                    }
                } else {
                    if (input[0] < -0.2442395) {
                        var35 = 0.19473912;
                    } else {
                        var35 = -0.2807384;
                    }
                }
            } else {
                var35 = -0.20998989;
            }
        } else {
            if (input[1] < 0.3754761) {
                if (input[10] < 0.1281687) {
                    var35 = -0.07229348;
                } else {
                    var35 = 0.19662891;
                }
            } else {
                if (input[6] < -0.3643988) {
                    var35 = 0.13395008;
                } else {
                    if (input[17] < 2.335191) {
                        var35 = -0.29176837;
                    } else {
                        var35 = -0.047627557;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.2268669) {
            if (input[4] < 0.2266944) {
                if (input[10] < 0.1180476) {
                    var35 = -0.12838823;
                } else {
                    var35 = 0.28360686;
                }
            } else {
                if (input[17] < 1.668448) {
                    var35 = -0.20686534;
                } else {
                    var35 = 0.18533835;
                }
            }
        } else {
            if (input[11] < 2.013351) {
                if (input[17] < 1.901403) {
                    if (input[17] < 1.781579) {
                        var35 = -0.012800349;
                    } else {
                        var35 = 0.21608602;
                    }
                } else {
                    if (input[14] < 2.006963) {
                        var35 = -0.30097112;
                    } else {
                        var35 = -0.034135465;
                    }
                }
            } else {
                if (input[10] < -0.1486952) {
                    var35 = -0.017727464;
                } else {
                    var35 = 0.27049842;
                }
            }
        }
    }
    var var36;
    if (input[8] < 2.441456) {
        if (input[2] < 2.422805) {
            if (input[11] < 2.202112) {
                if (input[8] < 2.091049) {
                    if (input[6] < -0.3354131) {
                        var36 = 0.22503468;
                    } else {
                        var36 = 0.0003611538;
                    }
                } else {
                    if (input[14] < 2.227087) {
                        var36 = -0.24932359;
                    } else {
                        var36 = -0.06572306;
                    }
                }
            } else {
                var36 = 0.20186615;
            }
        } else {
            var36 = -0.21423131;
        }
    } else {
        var36 = 0.21369657;
    }
    var var37;
    if (input[0] < -0.118867) {
        if (input[17] < 1.515411) {
            if (input[2] < 1.640486) {
                var37 = -0.32993186;
            } else {
                var37 = -0.0553346;
            }
        } else {
            if (input[9] < 0.1788711) {
                if (input[3] < -0.2513975) {
                    if (input[12] < 0.1044923) {
                        var37 = 0.067656554;
                    } else {
                        var37 = -0.09573015;
                    }
                } else {
                    if (input[1] < 0.1515034) {
                        var37 = -0.119977586;
                    } else {
                        var37 = 0.15045457;
                    }
                }
            } else {
                if (input[12] < 0.2278328) {
                    if (input[6] < -0.2804518) {
                        var37 = -0.034326103;
                    } else {
                        var37 = -0.30961606;
                    }
                } else {
                    if (input[0] < -0.1605631) {
                        var37 = -0.2313971;
                    } else {
                        var37 = 0.12569043;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.4994705) {
            if (input[13] < 0.2454855) {
                if (input[17] < 1.519384) {
                    if (input[6] < -0.2827419) {
                        var37 = -0.27555296;
                    } else {
                        var37 = -0.01091499;
                    }
                } else {
                    if (input[0] < -0.1014714) {
                        var37 = -0.01478951;
                    } else {
                        var37 = 0.24150889;
                    }
                }
            } else {
                if (input[6] < -0.2818939) {
                    var37 = -0.05755344;
                } else {
                    var37 = -0.26081884;
                }
            }
        } else {
            if (input[13] < 0.2660079) {
                if (input[4] < 0.2400039) {
                    var37 = 0.32654697;
                } else {
                    var37 = -0.10628589;
                }
            } else {
                if (input[5] < 1.733539) {
                    var37 = -0.277768;
                } else {
                    if (input[11] < 1.742188) {
                        var37 = 0.26143292;
                    } else {
                        var37 = -0.12936246;
                    }
                }
            }
        }
    }
    var var38;
    if (input[10] < 0.5915527) {
        if (input[4] < 0.3253995) {
            if (input[13] < 0.3618484) {
                if (input[16] < 0.08679864) {
                    if (input[1] < 0.4931629) {
                        var38 = -0.005742684;
                    } else {
                        var38 = 0.270445;
                    }
                } else {
                    if (input[9] < 0.0790737) {
                        var38 = 0.0015808417;
                    } else {
                        var38 = -0.28263143;
                    }
                }
            } else {
                var38 = 0.25500914;
            }
        } else {
            if (input[17] < 2.141829) {
                if (input[0] < -0.2575442) {
                    var38 = -0.014304491;
                } else {
                    if (input[14] < 2.128654) {
                        var38 = -0.03631542;
                    } else {
                        var38 = -0.3141607;
                    }
                }
            } else {
                var38 = 0.10662552;
            }
        }
    } else {
        if (input[15] < 0.1227413) {
            var38 = 0.23841612;
        } else {
            var38 = -0.0077027096;
        }
    }
    var var39;
    if (input[4] < 0.2244232) {
        if (input[8] < 1.473498) {
            if (input[2] < 1.620034) {
                if (input[1] < 0.1963128) {
                    var39 = 0.18807216;
                } else {
                    var39 = -0.10820454;
                }
            } else {
                var39 = 0.33126444;
            }
        } else {
            if (input[6] < -0.2295202) {
                if (input[2] < 1.988264) {
                    if (input[11] < 1.642782) {
                        var39 = -0.039392773;
                    } else {
                        var39 = 0.26658574;
                    }
                } else {
                    if (input[12] < 0.1752192) {
                        var39 = 0.11068156;
                    } else {
                        var39 = -0.17435007;
                    }
                }
            } else {
                if (input[2] < 1.97656) {
                    if (input[10] < 0.2040923) {
                        var39 = -0.14953673;
                    } else {
                        var39 = 0.19047873;
                    }
                } else {
                    if (input[15] < 0.2493304) {
                        var39 = -0.05723288;
                    } else {
                        var39 = 0.20731461;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.640486) {
            if (input[6] < -0.2846519) {
                if (input[8] < 1.464986) {
                    var39 = -0.26808658;
                } else {
                    var39 = 0.14453848;
                }
            } else {
                var39 = -0.30352008;
            }
        } else {
            if (input[3] < -0.2080266) {
                if (input[17] < 1.671535) {
                    if (input[14] < 1.642755) {
                        var39 = 0.21272418;
                    } else {
                        var39 = -0.29044557;
                    }
                } else {
                    if (input[3] < -0.2699445) {
                        var39 = -0.024117088;
                    } else {
                        var39 = 0.21435413;
                    }
                }
            } else {
                if (input[9] < 0.1970793) {
                    if (input[6] < -0.2811949) {
                        var39 = 0.32630986;
                    } else {
                        var39 = 0.061160654;
                    }
                } else {
                    if (input[6] < -0.2789682) {
                        var39 = -0.23773251;
                    } else {
                        var39 = 0.22733437;
                    }
                }
            }
        }
    }
    var var40;
    if (input[5] < 2.53521) {
        if (input[10] < 0.5895058) {
            if (input[3] < -0.26415) {
                if (input[9] < 0.09504159) {
                    if (input[10] < 0.5755756) {
                        var40 = -0.08141036;
                    } else {
                        var40 = 0.25902283;
                    }
                } else {
                    if (input[1] < 0.3821875) {
                        var40 = -0.0060000527;
                    } else {
                        var40 = -0.27210948;
                    }
                }
            } else {
                if (input[11] < 1.640588) {
                    if (input[1] < 0.1827934) {
                        var40 = 0.23115401;
                    } else {
                        var40 = -0.12395647;
                    }
                } else {
                    if (input[6] < -0.2033704) {
                        var40 = 0.073904686;
                    } else {
                        var40 = -0.040998254;
                    }
                }
            }
        } else {
            if (input[12] < 0.1199056) {
                if (input[5] < 1.880433) {
                    var40 = 0.26559156;
                } else {
                    var40 = -0.011710753;
                }
            } else {
                var40 = -0.123466395;
            }
        }
    } else {
        var40 = 0.20321321;
    }
    var var41;
    if (input[4] < 0.2244232) {
        if (input[8] < 1.473498) {
            if (input[2] < 1.620034) {
                var41 = 0.058385354;
            } else {
                var41 = 0.29551363;
            }
        } else {
            if (input[12] < 0.223877) {
                if (input[3] < -0.2021412) {
                    if (input[11] < 1.642782) {
                        var41 = -0.17526989;
                    } else {
                        var41 = 0.08940292;
                    }
                } else {
                    var41 = -0.2678031;
                }
            } else {
                if (input[17] < 1.901403) {
                    if (input[11] < 1.615855) {
                        var41 = -0.16518499;
                    } else {
                        var41 = 0.24047105;
                    }
                } else {
                    if (input[2] < 1.97656) {
                        var41 = -0.15238231;
                    } else {
                        var41 = 0.09607728;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.640486) {
            if (input[6] < -0.2846519) {
                if (input[8] < 1.464986) {
                    var41 = -0.24485223;
                } else {
                    var41 = 0.12485317;
                }
            } else {
                var41 = -0.27548262;
            }
        } else {
            if (input[11] < 2.180795) {
                if (input[3] < -0.2080266) {
                    if (input[13] < 0.3572792) {
                        var41 = -0.1618156;
                    } else {
                        var41 = 0.051338483;
                    }
                } else {
                    if (input[0] < -0.09664018) {
                        var41 = 0.15390897;
                    } else {
                        var41 = -0.09253588;
                    }
                }
            } else {
                if (input[1] < 0.549596) {
                    var41 = 0.24513042;
                } else {
                    var41 = -0.058929127;
                }
            }
        }
    }
    var var42;
    if (input[2] < 1.554802) {
        var42 = 0.20610859;
    } else {
        if (input[11] < 1.634116) {
            if (input[6] < -0.2182636) {
                if (input[6] < -0.2295202) {
                    if (input[4] < -0.06092589) {
                        var42 = 0.13758896;
                    } else {
                        var42 = -0.18255219;
                    }
                } else {
                    var42 = -0.29652354;
                }
            } else {
                var42 = 0.18991674;
            }
        } else {
            if (input[16] < -0.2464189) {
                if (input[5] < 2.1048) {
                    if (input[16] < -0.2519177) {
                        var42 = 0.2362897;
                    } else {
                        var42 = 0.067454286;
                    }
                } else {
                    var42 = -0.14080116;
                }
            } else {
                if (input[3] < -0.1405117) {
                    if (input[1] < 0.1515034) {
                        var42 = -0.14751886;
                    } else {
                        var42 = 0.012528597;
                    }
                } else {
                    if (input[9] < 0.2320558) {
                        var42 = -0.27454785;
                    } else {
                        var42 = 0.063024715;
                    }
                }
            }
        }
    }
    var var43;
    if (input[7] < -0.3148045) {
        if (input[13] < -0.07172851) {
            if (input[6] < -0.2182636) {
                var43 = 0.18434584;
            } else {
                if (input[17] < 1.920264) {
                    var43 = -0.21061657;
                } else {
                    var43 = 0.06755063;
                }
            }
        } else {
            if (input[6] < -0.1639789) {
                var43 = 0.24768344;
            } else {
                var43 = 0.062543854;
            }
        }
    } else {
        if (input[1] < 0.1691598) {
            if (input[2] < 1.944952) {
                var43 = 0.09582506;
            } else {
                if (input[14] < 2.009058) {
                    var43 = -0.2534799;
                } else {
                    var43 = -0.048372176;
                }
            }
        } else {
            if (input[1] < 0.3754761) {
                if (input[10] < 0.2040923) {
                    if (input[2] < 1.866936) {
                        var43 = -0.085565075;
                    } else {
                        var43 = 0.1647146;
                    }
                } else {
                    var43 = 0.25233176;
                }
            } else {
                if (input[3] < -0.2067552) {
                    if (input[6] < -0.2818939) {
                        var43 = 0.015066735;
                    } else {
                        var43 = -0.13921079;
                    }
                } else {
                    if (input[9] < 0.1970793) {
                        var43 = 0.20729615;
                    } else {
                        var43 = -0.05517179;
                    }
                }
            }
        }
    }
    var var44;
    if (input[10] < 0.5915527) {
        if (input[4] < 0.3253995) {
            if (input[10] < 0.5755756) {
                if (input[4] < 0.2960815) {
                    if (input[1] < 0.4931629) {
                        var44 = -0.006090703;
                    } else {
                        var44 = 0.103627525;
                    }
                } else {
                    if (input[15] < 0.1006707) {
                        var44 = 0.1245462;
                    } else {
                        var44 = -0.23978105;
                    }
                }
            } else {
                if (input[15] < 0.1170021) {
                    var44 = 0.24698588;
                } else {
                    var44 = -0.059473377;
                }
            }
        } else {
            if (input[15] < 0.10951) {
                var44 = 0.013707467;
            } else {
                if (input[16] < 0.1174601) {
                    var44 = -0.035490453;
                } else {
                    var44 = -0.2472331;
                }
            }
        }
    } else {
        if (input[15] < 0.1192991) {
            var44 = 0.21010853;
        } else {
            var44 = 0.03546302;
        }
    }
    var var45;
    if (input[13] < 0.3618484) {
        if (input[7] < 0.1028694) {
            if (input[12] < 0.09397057) {
                if (input[2] < 2.139833) {
                    var45 = 0.21880008;
                } else {
                    var45 = -0.08469038;
                }
            } else {
                if (input[16] < 0.08679864) {
                    if (input[1] < 0.4931629) {
                        var45 = -0.006061722;
                    } else {
                        var45 = 0.24783571;
                    }
                } else {
                    if (input[14] < 2.278919) {
                        var45 = -0.2559695;
                    } else {
                        var45 = 0.05356807;
                    }
                }
            }
        } else {
            if (input[17] < 2.141829) {
                if (input[15] < 0.1023821) {
                    var45 = 0.019814527;
                } else {
                    var45 = -0.24583998;
                }
            } else {
                var45 = 0.10029489;
            }
        }
    } else {
        if (input[14] < 2.128654) {
            var45 = 0.2575362;
        } else {
            if (input[16] < 0.1462664) {
                var45 = -0.18285877;
            } else {
                var45 = 0.06793736;
            }
        }
    }
    var var46;
    if (input[4] < 0.2244232) {
        if (input[17] < 1.529019) {
            if (input[2] < 1.640486) {
                var46 = 0.2685824;
            } else {
                var46 = 0.008129293;
            }
        } else {
            if (input[15] < 0.2532221) {
                if (input[3] < -0.2163183) {
                    if (input[5] < 1.996826) {
                        var46 = 0.17392126;
                    } else {
                        var46 = -0.11073811;
                    }
                } else {
                    if (input[0] < -0.1583735) {
                        var46 = 0.060981695;
                    } else {
                        var46 = -0.21723115;
                    }
                }
            } else {
                if (input[6] < -0.1563015) {
                    if (input[14] < 1.626949) {
                        var46 = -0.03836444;
                    } else {
                        var46 = 0.17360745;
                    }
                } else {
                    if (input[11] < 2.000494) {
                        var46 = 0.19514407;
                    } else {
                        var46 = -0.20258094;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.640486) {
            if (input[10] < 0.4994705) {
                var46 = -0.24863955;
            } else {
                if (input[7] < -0.003709334) {
                    var46 = -0.23772682;
                } else {
                    var46 = 0.118346386;
                }
            }
        } else {
            if (input[5] < 1.611712) {
                if (input[7] < 0.001546813) {
                    var46 = 0.23296475;
                } else {
                    var46 = 0.032613877;
                }
            } else {
                if (input[5] < 1.733539) {
                    if (input[8] < 1.468186) {
                        var46 = 0.060978897;
                    } else {
                        var46 = -0.23346424;
                    }
                } else {
                    if (input[1] < 0.4903966) {
                        var46 = -0.1477869;
                    } else {
                        var46 = 0.054318793;
                    }
                }
            }
        }
    }
    var var47;
    if (input[17] < 2.357234) {
        if (input[8] < 2.091049) {
            if (input[6] < -0.3354131) {
                var47 = 0.19088635;
            } else {
                if (input[15] < 0.2649934) {
                    if (input[0] < -0.1069217) {
                        var47 = -0.048005495;
                    } else {
                        var47 = 0.06774135;
                    }
                } else {
                    if (input[6] < -0.1563015) {
                        var47 = 0.11799381;
                    } else {
                        var47 = -0.083207056;
                    }
                }
            }
        } else {
            if (input[11] < 2.180795) {
                var47 = -0.21007259;
            } else {
                var47 = -0.039770275;
            }
        }
    } else {
        if (input[15] < 0.1849031) {
            var47 = 0.21225353;
        } else {
            var47 = -0.04664342;
        }
    }
    var var48;
    if (input[10] < 0.5895058) {
        if (input[4] < 0.2361062) {
            if (input[10] < 0.5054752) {
                if (input[13] < 0.2473602) {
                    if (input[15] < 0.3032777) {
                        var48 = 0.004571836;
                    } else {
                        var48 = 0.18603934;
                    }
                } else {
                    if (input[6] < -0.2846519) {
                        var48 = 0.0562185;
                    } else {
                        var48 = -0.24428548;
                    }
                }
            } else {
                var48 = 0.22318086;
            }
        } else {
            if (input[11] < 2.180795) {
                if (input[6] < -0.2789682) {
                    if (input[16] < 0.1528192) {
                        var48 = -0.1875087;
                    } else {
                        var48 = 0.08954965;
                    }
                } else {
                    if (input[5] < 1.851516) {
                        var48 = 0.11408205;
                    } else {
                        var48 = -0.22263412;
                    }
                }
            } else {
                if (input[7] < 0.07549622) {
                    var48 = 0.20252557;
                } else {
                    var48 = -0.07491487;
                }
            }
        }
    } else {
        if (input[12] < 0.1199056) {
            if (input[2] < 1.854055) {
                var48 = 0.20139374;
            } else {
                var48 = 0.05203678;
            }
        } else {
            var48 = -0.07612687;
        }
    }
    var var49;
    if (input[2] < 1.554802) {
        var49 = 0.17309693;
    } else {
        if (input[14] < 1.626949) {
            if (input[6] < -0.219542) {
                if (input[5] < 1.60904) {
                    if (input[12] < 0.2318707) {
                        var49 = -0.28451225;
                    } else {
                        var49 = -0.07996374;
                    }
                } else {
                    var49 = 0.048073474;
                }
            } else {
                var49 = 0.11727081;
            }
        } else {
            if (input[14] < 1.63432) {
                if (input[10] < 0.5022916) {
                    var49 = 0.009521704;
                } else {
                    var49 = 0.21188411;
                }
            } else {
                if (input[16] < -0.2464189) {
                    if (input[5] < 2.1048) {
                        var49 = 0.18925263;
                    } else {
                        var49 = -0.09617584;
                    }
                } else {
                    if (input[11] < 2.188193) {
                        var49 = -0.02169016;
                    } else {
                        var49 = 0.10806549;
                    }
                }
            }
        }
    }
    var var50;
    if (input[13] < 0.3618484) {
        if (input[4] < 0.2400039) {
            if (input[1] < 0.4903966) {
                if (input[1] < 0.4725542) {
                    if (input[10] < 0.4994705) {
                        var50 = -0.007993113;
                    } else {
                        var50 = 0.1822321;
                    }
                } else {
                    var50 = -0.22583665;
                }
            } else {
                if (input[2] < 1.71978) {
                    var50 = -0.031988204;
                } else {
                    var50 = 0.22689526;
                }
            }
        } else {
            if (input[17] < 2.136015) {
                if (input[12] < 0.1864325) {
                    if (input[15] < 0.1071432) {
                        var50 = -0.003723548;
                    } else {
                        var50 = -0.25895438;
                    }
                } else {
                    var50 = 0.007433633;
                }
            } else {
                if (input[10] < 0.5755756) {
                    if (input[1] < 0.549596) {
                        var50 = 0.10118824;
                    } else {
                        var50 = -0.1986273;
                    }
                } else {
                    var50 = 0.16687098;
                }
            }
        }
    } else {
        if (input[5] < 1.869644) {
            var50 = 0.21820176;
        } else {
            if (input[9] < 0.09617412) {
                var50 = 0.052792482;
            } else {
                var50 = -0.14126803;
            }
        }
    }
    var var51;
    if (input[3] < -0.3825592) {
        var51 = 0.15921007;
    } else {
        if (input[3] < -0.2609473) {
            if (input[10] < 0.5755756) {
                if (input[11] < 2.180795) {
                    if (input[4] < 0.194664) {
                        var51 = 0.050974865;
                    } else {
                        var51 = -0.24117328;
                    }
                } else {
                    if (input[15] < 0.1523851) {
                        var51 = 0.11660209;
                    } else {
                        var51 = -0.15913865;
                    }
                }
            } else {
                if (input[9] < 0.09285748) {
                    var51 = 0.2071483;
                } else {
                    if (input[10] < 0.5895058) {
                        var51 = -0.20280106;
                    } else {
                        var51 = 0.04175233;
                    }
                }
            }
        } else {
            if (input[1] < 0.1515034) {
                if (input[7] < -0.3244636) {
                    if (input[2] < 2.171579) {
                        var51 = 0.18486847;
                    } else {
                        var51 = -0.05769665;
                    }
                } else {
                    if (input[10] < 0.1625411) {
                        var51 = -0.043991722;
                    } else {
                        var51 = -0.21506938;
                    }
                }
            } else {
                if (input[10] < 0.1748945) {
                    var51 = 0.21747147;
                } else {
                    if (input[1] < 0.1691598) {
                        var51 = -0.12949458;
                    } else {
                        var51 = 0.028542623;
                    }
                }
            }
        }
    }
    var var52;
    if (input[15] < 0.1006707) {
        var52 = 0.13797347;
    } else {
        if (input[4] < 0.2244232) {
            if (input[17] < 1.901403) {
                if (input[9] < 0.2055717) {
                    if (input[6] < -0.177746) {
                        var52 = 0.07481569;
                    } else {
                        var52 = -0.22985117;
                    }
                } else {
                    var52 = 0.24403848;
                }
            } else {
                if (input[7] < -0.3072) {
                    if (input[1] < 0.1507064) {
                        var52 = -0.044904243;
                    } else {
                        var52 = 0.11022116;
                    }
                } else {
                    if (input[8] < 1.902018) {
                        var52 = -0.25532913;
                    } else {
                        var52 = -0.017325366;
                    }
                }
            }
        } else {
            if (input[2] < 1.640486) {
                if (input[10] < 0.4994705) {
                    var52 = -0.2326126;
                } else {
                    if (input[12] < 0.1651005) {
                        var52 = -0.13948555;
                    } else {
                        var52 = 0.013634459;
                    }
                }
            } else {
                if (input[5] < 1.611712) {
                    if (input[7] < 0.0007475886) {
                        var52 = 0.18145874;
                    } else {
                        var52 = 0.041745577;
                    }
                } else {
                    if (input[0] < -0.09664018) {
                        var52 = -0.006503714;
                    } else {
                        var52 = -0.20099325;
                    }
                }
            }
        }
    }
    var var53;
    if (input[5] < 2.53521) {
        if (input[5] < 2.433668) {
            if (input[6] < -0.3372643) {
                var53 = 0.15012006;
            } else {
                if (input[5] < 1.996826) {
                    if (input[2] < 1.98101) {
                        var53 = -0.0034341596;
                    } else {
                        var53 = 0.20873173;
                    }
                } else {
                    if (input[11] < 2.180795) {
                        var53 = -0.2077841;
                    } else {
                        var53 = 0.0579292;
                    }
                }
            }
        } else {
            var53 = -0.16808845;
        }
    } else {
        var53 = 0.15827803;
    }
    var var54;
    if (input[2] < 1.554802) {
        var54 = 0.15279248;
    } else {
        if (input[11] < 1.609534) {
            var54 = -0.18302488;
        } else {
            if (input[12] < 0.2267006) {
                if (input[3] < -0.1917813) {
                    if (input[3] < -0.2067552) {
                        var54 = -0.025846174;
                    } else {
                        var54 = 0.088459425;
                    }
                } else {
                    var54 = -0.21919055;
                }
            } else {
                if (input[2] < 1.944952) {
                    var54 = 0.23008792;
                } else {
                    if (input[6] < -0.1563015) {
                        var54 = 0.032854684;
                    } else {
                        var54 = -0.10497595;
                    }
                }
            }
        }
    }
    var var55;
    if (input[14] < 1.766734) {
        if (input[11] < 1.742188) {
            if (input[2] < 1.71978) {
                if (input[9] < 0.1970793) {
                    if (input[6] < -0.2818939) {
                        var55 = 0.11607807;
                    } else {
                        var55 = -0.06504265;
                    }
                } else {
                    if (input[4] < 0.2315804) {
                        var55 = -0.080647655;
                    } else {
                        var55 = -0.26976034;
                    }
                }
            } else {
                var55 = 0.17637616;
            }
        } else {
            var55 = -0.23216482;
        }
    } else {
        if (input[11] < 1.846951) {
            if (input[4] < 0.2392369) {
                var55 = 0.24612303;
            } else {
                var55 = 0.058565382;
            }
        } else {
            if (input[8] < 1.761051) {
                if (input[15] < 0.1023821) {
                    var55 = 0.04381439;
                } else {
                    if (input[13] < -0.06262286) {
                        var55 = -0.033599667;
                    } else {
                        var55 = -0.22100784;
                    }
                }
            } else {
                if (input[12] < 0.1057348) {
                    if (input[5] < 2.128487) {
                        var55 = 0.195056;
                    } else {
                        var55 = -0.026832504;
                    }
                } else {
                    if (input[3] < -0.2982324) {
                        var55 = -0.11687771;
                    } else {
                        var55 = 0.021573016;
                    }
                }
            }
        }
    }
    var var56;
    if (input[17] < 2.357234) {
        if (input[5] < 2.12481) {
            if (input[0] < -0.2427312) {
                if (input[8] < 1.733907) {
                    var56 = -0.12899037;
                } else {
                    var56 = 0.20714475;
                }
            } else {
                if (input[14] < 2.128654) {
                    if (input[1] < 0.4931629) {
                        var56 = -0.013058903;
                    } else {
                        var56 = 0.1107563;
                    }
                } else {
                    if (input[0] < -0.2071271) {
                        var56 = -0.21096697;
                    } else {
                        var56 = -0.032760397;
                    }
                }
            }
        } else {
            if (input[11] < 2.188193) {
                var56 = -0.17291243;
            } else {
                var56 = -0.015652312;
            }
        }
    } else {
        if (input[12] < 0.1693098) {
            var56 = 0.16968708;
        } else {
            var56 = 0.011740674;
        }
    }
    var var57;
    if (input[3] < -0.08187494) {
        if (input[3] < -0.1405117) {
            if (input[4] < 0.2244232) {
                if (input[1] < 0.1515034) {
                    if (input[7] < -0.3235669) {
                        var57 = 0.11449986;
                    } else {
                        var57 = -0.16302377;
                    }
                } else {
                    if (input[11] < 1.624329) {
                        var57 = -0.05843287;
                    } else {
                        var57 = 0.089538015;
                    }
                }
            } else {
                if (input[2] < 1.640486) {
                    if (input[4] < 0.2298453) {
                        var57 = -0.06538078;
                    } else {
                        var57 = -0.20436265;
                    }
                } else {
                    if (input[14] < 1.63432) {
                        var57 = 0.1289303;
                    } else {
                        var57 = -0.023452349;
                    }
                }
            }
        } else {
            if (input[12] < 0.289071) {
                var57 = -0.19170775;
            } else {
                var57 = -0.0058185095;
            }
        }
    } else {
        var57 = 0.14390278;
    }
    var var58;
    if (input[16] < 0.1575578) {
        if (input[1] < 0.3754761) {
            if (input[10] < 0.2034659) {
                if (input[6] < -0.2285671) {
                    if (input[10] < 0.1320321) {
                        var58 = -0.045016307;
                    } else {
                        var58 = 0.16827598;
                    }
                } else {
                    if (input[2] < 1.97656) {
                        var58 = -0.10683276;
                    } else {
                        var58 = 0.119167514;
                    }
                }
            } else {
                var58 = 0.20524189;
            }
        } else {
            if (input[7] < -0.003709334) {
                if (input[10] < 0.5054752) {
                    if (input[1] < 0.40255) {
                        var58 = -0.0625675;
                    } else {
                        var58 = -0.247757;
                    }
                } else {
                    var58 = 0.063181505;
                }
            } else {
                if (input[17] < 1.529019) {
                    if (input[13] < 0.2398087) {
                        var58 = -0.117783144;
                    } else {
                        var58 = 0.14375755;
                    }
                } else {
                    if (input[5] < 1.733539) {
                        var58 = -0.21666873;
                    } else {
                        var58 = 0.0021643413;
                    }
                }
            }
        }
    } else {
        var58 = 0.11256075;
    }
    var var59;
    if (input[14] < 1.766734) {
        if (input[1] < 0.1827934) {
            var59 = 0.17232405;
        } else {
            if (input[0] < -0.1069217) {
                if (input[6] < -0.2856097) {
                    if (input[17] < 1.515411) {
                        var59 = -0.1336331;
                    } else {
                        var59 = 0.17731258;
                    }
                } else {
                    if (input[12] < 0.2203308) {
                        var59 = -0.187044;
                    } else {
                        var59 = 0.0017240994;
                    }
                }
            } else {
                if (input[9] < 0.1937669) {
                    if (input[13] < 0.2411715) {
                        var59 = 0.04121473;
                    } else {
                        var59 = 0.25222877;
                    }
                } else {
                    if (input[6] < -0.2798386) {
                        var59 = -0.19297929;
                    } else {
                        var59 = 0.036305852;
                    }
                }
            }
        }
    } else {
        if (input[11] < 1.865359) {
            if (input[13] < 0.2746331) {
                var59 = 0.23436283;
            } else {
                var59 = 0.025882857;
            }
        } else {
            if (input[8] < 1.761051) {
                if (input[0] < -0.2663545) {
                    var59 = 0.0053822845;
                } else {
                    if (input[12] < 0.2203308) {
                        var59 = -0.20749761;
                    } else {
                        var59 = -0.046258796;
                    }
                }
            } else {
                if (input[12] < 0.1057348) {
                    if (input[5] < 2.128487) {
                        var59 = 0.15380733;
                    } else {
                        var59 = -0.0125533715;
                    }
                } else {
                    if (input[1] < 0.3754761) {
                        var59 = 0.027460415;
                    } else {
                        var59 = -0.07758029;
                    }
                }
            }
        }
    }
    var var60;
    if (input[17] < 2.342455) {
        if (input[5] < 2.027845) {
            if (input[8] < 1.902018) {
                if (input[6] < -0.177746) {
                    if (input[1] < 0.1827934) {
                        var60 = 0.11648622;
                    } else {
                        var60 = -0.010170448;
                    }
                } else {
                    if (input[2] < 1.97656) {
                        var60 = -0.14335339;
                    } else {
                        var60 = 0.08147654;
                    }
                }
            } else {
                var60 = 0.17709683;
            }
        } else {
            if (input[17] < 1.945409) {
                var60 = -0.18763539;
            } else {
                if (input[5] < 2.12481) {
                    if (input[3] < -0.3029392) {
                        var60 = 0.12458569;
                    } else {
                        var60 = 0.008960427;
                    }
                } else {
                    if (input[17] < 2.232082) {
                        var60 = -0.03016025;
                    } else {
                        var60 = -0.13868684;
                    }
                }
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            var60 = 0.16625446;
        } else {
            var60 = -0.006128204;
        }
    }
    var var61;
    if (input[10] < 0.5915527) {
        if (input[4] < 0.3253995) {
            if (input[11] < 1.640588) {
                if (input[9] < 0.1919147) {
                    if (input[9] < 0.1708809) {
                        var61 = -0.104786;
                    } else {
                        var61 = 0.10062861;
                    }
                } else {
                    var61 = -0.18905182;
                }
            } else {
                if (input[2] < 1.944952) {
                    if (input[15] < 0.2510701) {
                        var61 = 0.02296566;
                    } else {
                        var61 = 0.21046457;
                    }
                } else {
                    if (input[17] < 1.920264) {
                        var61 = -0.071540676;
                    } else {
                        var61 = 0.03749686;
                    }
                }
            }
        } else {
            if (input[9] < 0.09504159) {
                var61 = -0.012525255;
            } else {
                var61 = -0.14571647;
            }
        }
    } else {
        var61 = 0.1227654;
    }
    var var62;
    if (input[13] < 0.3618484) {
        if (input[3] < -0.26415) {
            if (input[9] < 0.07651681) {
                if (input[8] < 1.733907) {
                    var62 = -0.10605784;
                } else {
                    if (input[16] < 0.1029103) {
                        var62 = -0.027175548;
                    } else {
                        var62 = 0.14001851;
                    }
                }
            } else {
                if (input[17] < 2.335191) {
                    if (input[4] < 0.2122989) {
                        var62 = -0.045611545;
                    } else {
                        var62 = -0.23431495;
                    }
                } else {
                    var62 = 0.028617978;
                }
            }
        } else {
            if (input[1] < 0.4931629) {
                if (input[13] < 0.2454855) {
                    if (input[7] < 0.00218608) {
                        var62 = 0.0018170789;
                    } else {
                        var62 = 0.15295854;
                    }
                } else {
                    if (input[6] < -0.2856097) {
                        var62 = 0.15291467;
                    } else {
                        var62 = -0.15923582;
                    }
                }
            } else {
                if (input[8] < 1.639318) {
                    var62 = 0.19480695;
                } else {
                    var62 = -0.046573013;
                }
            }
        }
    } else {
        if (input[2] < 1.85025) {
            var62 = 0.17437442;
        } else {
            var62 = -0.059371777;
        }
    }
    var var63;
    if (input[14] < 1.626949) {
        if (input[0] < -0.1591519) {
            if (input[2] < 1.560962) {
                var63 = 0.003805503;
            } else {
                var63 = -0.18858883;
            }
        } else {
            if (input[17] < 1.515411) {
                var63 = -0.11216892;
            } else {
                var63 = 0.13425551;
            }
        }
    } else {
        if (input[2] < 1.607212) {
            var63 = 0.15247291;
        } else {
            if (input[11] < 1.640588) {
                if (input[6] < -0.2811949) {
                    var63 = 0.049835075;
                } else {
                    var63 = -0.18302049;
                }
            } else {
                if (input[0] < -0.1014714) {
                    if (input[6] < -0.2818939) {
                        var63 = 0.04218826;
                    } else {
                        var63 = -0.031410616;
                    }
                } else {
                    if (input[6] < -0.2856097) {
                        var63 = -0.1070794;
                    } else {
                        var63 = 0.14904846;
                    }
                }
            }
        }
    }
    var var64;
    if (input[10] < 0.5895058) {
        if (input[4] < 0.2443461) {
            if (input[13] < 0.2683181) {
                if (input[12] < 0.2203308) {
                    if (input[0] < -0.1086433) {
                        var64 = -0.07757046;
                    } else {
                        var64 = 0.031194959;
                    }
                } else {
                    if (input[17] < 1.901403) {
                        var64 = 0.110897966;
                    } else {
                        var64 = -0.030103832;
                    }
                }
            } else {
                var64 = 0.16995384;
            }
        } else {
            if (input[15] < 0.1084765) {
                if (input[2] < 1.791736) {
                    var64 = -0.050253473;
                } else {
                    var64 = 0.12462852;
                }
            } else {
                if (input[11] < 2.180795) {
                    var64 = -0.19955523;
                } else {
                    var64 = 0.03917048;
                }
            }
        }
    } else {
        if (input[15] < 0.1186693) {
            var64 = 0.123511404;
        } else {
            var64 = 0.005401806;
        }
    }
    var var65;
    if (input[11] < 1.651918) {
        if (input[7] < -0.002768936) {
            if (input[5] < 1.566429) {
                if (input[12] < 0.2203308) {
                    var65 = -0.062488478;
                } else {
                    var65 = 0.14674665;
                }
            } else {
                if (input[1] < 0.1869767) {
                    var65 = -0.013023849;
                } else {
                    var65 = -0.23498407;
                }
            }
        } else {
            if (input[9] < 0.1937669) {
                if (input[15] < 0.1815944) {
                    var65 = 0.18083802;
                } else {
                    var65 = 0.014486794;
                }
            } else {
                if (input[10] < 0.4994705) {
                    if (input[16] < 0.05676262) {
                        var65 = -0.17979026;
                    } else {
                        var65 = -0.03465643;
                    }
                } else {
                    var65 = 0.01632363;
                }
            }
        }
    } else {
        if (input[8] < 1.468186) {
            var65 = 0.18796235;
        } else {
            if (input[5] < 1.733539) {
                if (input[4] < 0.2266944) {
                    var65 = 0.10133355;
                } else {
                    if (input[9] < 0.1887462) {
                        var65 = -0.06998506;
                    } else {
                        var65 = -0.23677391;
                    }
                }
            } else {
                if (input[8] < 1.622715) {
                    if (input[12] < 0.1895243) {
                        var65 = -0.00058381155;
                    } else {
                        var65 = 0.20867999;
                    }
                } else {
                    if (input[16] < 0.1528192) {
                        var65 = -0.008151032;
                    } else {
                        var65 = 0.10286903;
                    }
                }
            }
        }
    }
    var var66;
    if (input[14] < 1.626949) {
        if (input[10] < 0.205668) {
            if (input[6] < -0.2285671) {
                var66 = 0.023577038;
            } else {
                var66 = -0.189429;
            }
        } else {
            var66 = 0.029254606;
        }
    } else {
        if (input[1] < 0.3754761) {
            if (input[10] < 0.1885103) {
                if (input[6] < -0.2033704) {
                    if (input[1] < 0.1515034) {
                        var66 = -0.008796801;
                    } else {
                        var66 = 0.18602066;
                    }
                } else {
                    if (input[9] < 0.2055717) {
                        var66 = -0.1690869;
                    } else {
                        var66 = 0.009151404;
                    }
                }
            } else {
                if (input[6] < -0.1802461) {
                    var66 = 0.21827035;
                } else {
                    var66 = 0.050464306;
                }
            }
        } else {
            if (input[3] < -0.2067552) {
                if (input[6] < -0.2818939) {
                    if (input[0] < -0.1728019) {
                        var66 = -0.059396453;
                    } else {
                        var66 = 0.10236895;
                    }
                } else {
                    if (input[12] < 0.1176841) {
                        var66 = 0.07687273;
                    } else {
                        var66 = -0.21465836;
                    }
                }
            } else {
                if (input[9] < 0.1899804) {
                    var66 = 0.19604567;
                } else {
                    if (input[6] < -0.2811949) {
                        var66 = -0.15996;
                    } else {
                        var66 = 0.09924058;
                    }
                }
            }
        }
    }
    var var67;
    if (input[15] < 0.1006707) {
        var67 = 0.11607829;
    } else {
        if (input[7] < -0.3148045) {
            if (input[13] < -0.07261127) {
                if (input[10] < 0.1617108) {
                    if (input[2] < 2.171579) {
                        var67 = 0.16856575;
                    } else {
                        var67 = -0.06400855;
                    }
                } else {
                    var67 = -0.15966515;
                }
            } else {
                if (input[10] < 0.1712102) {
                    var67 = 0.19281487;
                } else {
                    var67 = 0.063276246;
                }
            }
        } else {
            if (input[1] < 0.1691598) {
                if (input[16] < -0.2409983) {
                    var67 = 0.0016663178;
                } else {
                    var67 = -0.17571826;
                }
            } else {
                if (input[4] < -0.06938537) {
                    if (input[10] < 0.1877119) {
                        var67 = -0.03922101;
                    } else {
                        var67 = 0.20291291;
                    }
                } else {
                    if (input[13] < 0.3618484) {
                        var67 = -0.024779057;
                    } else {
                        var67 = 0.0738497;
                    }
                }
            }
        }
    }
    var var68;
    if (input[17] < 2.342455) {
        if (input[5] < 2.032246) {
            if (input[2] < 1.98101) {
                if (input[6] < -0.177746) {
                    if (input[12] < 0.2507521) {
                        var68 = 0.005248108;
                    } else {
                        var68 = 0.18624386;
                    }
                } else {
                    if (input[8] < 1.880704) {
                        var68 = -0.020733476;
                    } else {
                        var68 = -0.17342706;
                    }
                }
            } else {
                var68 = 0.16411963;
            }
        } else {
            if (input[9] < 0.0790737) {
                var68 = 0.019061487;
            } else {
                if (input[6] < -0.1834728) {
                    var68 = -0.18640205;
                } else {
                    var68 = -0.0034393903;
                }
            }
        }
    } else {
        var68 = 0.10031817;
    }
    var var69;
    if (input[15] < 0.2699487) {
        if (input[6] < -0.2068207) {
            if (input[7] < -0.2800021) {
                if (input[1] < 0.1515034) {
                    var69 = 0.00608115;
                } else {
                    var69 = 0.18244672;
                }
            } else {
                if (input[7] < -0.003709334) {
                    if (input[5] < 1.61525) {
                        var69 = -0.1592196;
                    } else {
                        var69 = 0.00033363368;
                    }
                } else {
                    if (input[1] < 0.4679815) {
                        var69 = -0.07587138;
                    } else {
                        var69 = 0.038871966;
                    }
                }
            }
        } else {
            if (input[11] < 2.007869) {
                if (input[12] < 0.2318707) {
                    var69 = -0.19240867;
                } else {
                    var69 = -0.004100132;
                }
            } else {
                if (input[10] < -0.1486952) {
                    var69 = -0.06723207;
                } else {
                    var69 = 0.10047567;
                }
            }
        }
    } else {
        if (input[8] < 1.887141) {
            if (input[11] < 1.615855) {
                var69 = -0.0602387;
            } else {
                if (input[13] < -0.07097752) {
                    var69 = -0.03149311;
                } else {
                    var69 = 0.2035209;
                }
            }
        } else {
            if (input[5] < 1.977553) {
                var69 = -0.11129338;
            } else {
                var69 = 0.06439885;
            }
        }
    }
    var var70;
    if (input[4] < 0.237541) {
        if (input[10] < 0.5054752) {
            if (input[13] < 0.2473602) {
                if (input[16] < 0.05676262) {
                    if (input[15] < 0.2493304) {
                        var70 = -0.045226622;
                    } else {
                        var70 = 0.042795394;
                    }
                } else {
                    if (input[3] < -0.2067552) {
                        var70 = -0.011744726;
                    } else {
                        var70 = 0.22347577;
                    }
                }
            } else {
                var70 = -0.13475388;
            }
        } else {
            var70 = 0.17060003;
        }
    } else {
        if (input[11] < 2.184273) {
            if (input[6] < -0.2789682) {
                if (input[16] < 0.1528192) {
                    if (input[3] < -0.2021412) {
                        var70 = -0.17646068;
                    } else {
                        var70 = -0.00023743899;
                    }
                } else {
                    var70 = 0.068210766;
                }
            } else {
                if (input[2] < 1.85025) {
                    if (input[6] < -0.2495252) {
                        var70 = 0.13214473;
                    } else {
                        var70 = -0.013422292;
                    }
                } else {
                    var70 = -0.12211933;
                }
            }
        } else {
            var70 = 0.11538218;
        }
    }
    var var71;
    if (input[14] < 1.626949) {
        if (input[10] < 0.2034659) {
            if (input[6] < -0.2285671) {
                var71 = 0.009093513;
            } else {
                var71 = -0.164858;
            }
        } else {
            var71 = 0.02175932;
        }
    } else {
        if (input[14] < 1.642755) {
            if (input[2] < 1.644301) {
                var71 = -0.017991116;
            } else {
                var71 = 0.16858746;
            }
        } else {
            if (input[10] < 0.495816) {
                if (input[12] < 0.1864325) {
                    if (input[6] < -0.2818939) {
                        var71 = 0.16580357;
                    } else {
                        var71 = 0.03398135;
                    }
                } else {
                    if (input[13] < 0.2439232) {
                        var71 = 0.019089255;
                    } else {
                        var71 = -0.14057525;
                    }
                }
            } else {
                if (input[1] < 0.4903966) {
                    if (input[3] < -0.2067552) {
                        var71 = -0.19567822;
                    } else {
                        var71 = -0.025135301;
                    }
                } else {
                    if (input[4] < 0.2400039) {
                        var71 = 0.11840413;
                    } else {
                        var71 = -0.019273069;
                    }
                }
            }
        }
    }
    var var72;
    if (input[5] < 1.566429) {
        var72 = 0.07615499;
    } else {
        if (input[11] < 1.615855) {
            var72 = -0.16237324;
        } else {
            if (input[16] < -0.2433261) {
                if (input[5] < 2.1048) {
                    if (input[6] < -0.2033704) {
                        var72 = 0.18029289;
                    } else {
                        var72 = 0.036993552;
                    }
                } else {
                    var72 = -0.081768245;
                }
            } else {
                if (input[6] < -0.1563015) {
                    if (input[1] < 0.1515034) {
                        var72 = -0.11463228;
                    } else {
                        var72 = 0.012257013;
                    }
                } else {
                    if (input[4] < -0.08540982) {
                        var72 = -0.13409166;
                    } else {
                        var72 = -0.0139400875;
                    }
                }
            }
        }
    }
    var var73;
    if (input[4] < 0.2298453) {
        if (input[6] < -0.2818939) {
            if (input[2] < 2.36189) {
                if (input[11] < 1.651918) {
                    var73 = 0.058127794;
                } else {
                    var73 = 0.2227091;
                }
            } else {
                var73 = -0.07622217;
            }
        } else {
            if (input[13] < 0.2439232) {
                if (input[0] < -0.1014714) {
                    if (input[0] < -0.1122848) {
                        var73 = 0.013451786;
                    } else {
                        var73 = -0.098620996;
                    }
                } else {
                    if (input[10] < -0.1486952) {
                        var73 = -0.048456553;
                    } else {
                        var73 = 0.1816624;
                    }
                }
            } else {
                var73 = -0.14735188;
            }
        }
    } else {
        if (input[5] < 1.733539) {
            if (input[12] < 0.1850207) {
                if (input[12] < 0.1728531) {
                    var73 = -0.17108797;
                } else {
                    if (input[9] < 0.1873638) {
                        var73 = 0.17260444;
                    } else {
                        var73 = 0.0083948355;
                    }
                }
            } else {
                var73 = -0.17966408;
            }
        } else {
            if (input[7] < 0.009491663) {
                var73 = 0.11412067;
            } else {
                if (input[0] < -0.2482357) {
                    if (input[5] < 2.12481) {
                        var73 = 0.12288624;
                    } else {
                        var73 = -0.032453753;
                    }
                } else {
                    if (input[10] < 0.5895058) {
                        var73 = -0.09333134;
                    } else {
                        var73 = 0.03973458;
                    }
                }
            }
        }
    }
    var var74;
    if (input[17] < 2.342455) {
        if (input[5] < 2.12481) {
            if (input[0] < -0.2427312) {
                if (input[8] < 1.733907) {
                    var74 = -0.07667575;
                } else {
                    var74 = 0.15003721;
                }
            } else {
                if (input[4] < 0.2400039) {
                    if (input[10] < 0.4994705) {
                        var74 = -0.008121189;
                    } else {
                        var74 = 0.07543638;
                    }
                } else {
                    if (input[13] < 0.3618484) {
                        var74 = -0.14019555;
                    } else {
                        var74 = 0.020797702;
                    }
                }
            }
        } else {
            var74 = -0.092466995;
        }
    } else {
        var74 = 0.08226786;
    }
    var var75;
    if (input[9] < 0.2055717) {
        if (input[6] < -0.1961307) {
            if (input[7] < -0.3121903) {
                var75 = 0.121515565;
            } else {
                if (input[1] < 0.1649296) {
                    var75 = -0.11124473;
                } else {
                    if (input[1] < 0.1827934) {
                        var75 = 0.16158015;
                    } else {
                        var75 = -0.008513245;
                    }
                }
            }
        } else {
            if (input[5] < 1.955603) {
                var75 = -0.19065934;
            } else {
                var75 = 0.026006294;
            }
        }
    } else {
        if (input[8] < 1.887141) {
            if (input[11] < 2.007869) {
                if (input[14] < 1.769279) {
                    var75 = 0.0007105386;
                } else {
                    var75 = 0.18871729;
                }
            } else {
                var75 = 0.008357486;
            }
        } else {
            if (input[10] < 0.1877119) {
                if (input[2] < 1.98101) {
                    var75 = -0.16583128;
                } else {
                    var75 = 0.025425578;
                }
            } else {
                var75 = 0.060769077;
            }
        }
    }
    var var76;
    if (input[1] < 0.1515034) {
        if (input[10] < 0.1617108) {
            if (input[5] < 2.1048) {
                var76 = 0.112914704;
            } else {
                var76 = -0.058380887;
            }
        } else {
            var76 = -0.13707006;
        }
    } else {
        if (input[10] < 0.1728348) {
            var76 = 0.14667498;
        } else {
            if (input[1] < 0.1691598) {
                if (input[10] < 0.1805261) {
                    var76 = -0.000051189345;
                } else {
                    var76 = -0.13357876;
                }
            } else {
                if (input[4] < -0.06938537) {
                    if (input[10] < 0.1877119) {
                        var76 = -0.011902324;
                    } else {
                        var76 = 0.18046455;
                    }
                } else {
                    if (input[7] < 0.00218608) {
                        var76 = -0.033012707;
                    } else {
                        var76 = 0.022985512;
                    }
                }
            }
        }
    }
    var var77;
    if (input[17] < 2.362284) {
        if (input[5] < 2.027845) {
            if (input[2] < 1.97656) {
                if (input[6] < -0.177746) {
                    if (input[4] < 0.2244232) {
                        var77 = 0.059057128;
                    } else {
                        var77 = -0.01751617;
                    }
                } else {
                    if (input[11] < 2.004461) {
                        var77 = 0.00075940177;
                    } else {
                        var77 = -0.17979123;
                    }
                }
            } else {
                var77 = 0.121387325;
            }
        } else {
            if (input[11] < 2.180795) {
                var77 = -0.12573397;
            } else {
                if (input[17] < 2.232082) {
                    var77 = 0.062928736;
                } else {
                    var77 = -0.06327472;
                }
            }
        }
    } else {
        var77 = 0.07536094;
    }
    var var78;
    if (input[9] < 0.02883186) {
        var78 = 0.08521802;
    } else {
        if (input[3] < -0.3409458) {
            if (input[8] < 1.771324) {
                var78 = -0.12285038;
            } else {
                var78 = -0.022361103;
            }
        } else {
            if (input[11] < 2.202112) {
                if (input[5] < 1.998853) {
                    if (input[5] < 1.96934) {
                        var78 = -0.0013266051;
                    } else {
                        var78 = 0.10794776;
                    }
                } else {
                    if (input[11] < 2.180795) {
                        var78 = -0.14186364;
                    } else {
                        var78 = -0.0022046254;
                    }
                }
            } else {
                var78 = 0.09904581;
            }
        }
    }
    var var79;
    if (input[14] < 1.626949) {
        if (input[10] < 0.205668) {
            if (input[6] < -0.2276633) {
                var79 = 0.0033918535;
            } else {
                var79 = -0.14573535;
            }
        } else {
            var79 = 0.027397677;
        }
    } else {
        if (input[14] < 1.642755) {
            if (input[2] < 1.644301) {
                var79 = -0.010351529;
            } else {
                var79 = 0.14994922;
            }
        } else {
            if (input[15] < 0.2612484) {
                if (input[1] < 0.4679815) {
                    if (input[1] < 0.3945627) {
                        var79 = -0.010031013;
                    } else {
                        var79 = -0.1861343;
                    }
                } else {
                    if (input[0] < -0.1069217) {
                        var79 = -0.015346144;
                    } else {
                        var79 = 0.11014313;
                    }
                }
            } else {
                if (input[6] < -0.1586018) {
                    if (input[8] < 1.890404) {
                        var79 = 0.13125432;
                    } else {
                        var79 = -0.00023892184;
                    }
                } else {
                    if (input[1] < 0.172496) {
                        var79 = -0.101924516;
                    } else {
                        var79 = 0.06443279;
                    }
                }
            }
        }
    }
    var var80;
    if (input[12] < 0.1044923) {
        if (input[8] < 1.771324) {
            var80 = -0.053812496;
        } else {
            if (input[14] < 2.135209) {
                var80 = 0.1423362;
            } else {
                var80 = 0.03712159;
            }
        }
    } else {
        if (input[4] < 0.237541) {
            if (input[10] < 0.4994705) {
                if (input[15] < 0.2649934) {
                    if (input[16] < 0.05676262) {
                        var80 = -0.06500421;
                    } else {
                        var80 = 0.052815795;
                    }
                } else {
                    if (input[11] < 1.615855) {
                        var80 = -0.059953555;
                    } else {
                        var80 = 0.072937734;
                    }
                }
            } else {
                if (input[12] < 0.1660562) {
                    var80 = -0.011997511;
                } else {
                    var80 = 0.17503421;
                }
            }
        } else {
            if (input[3] < -0.2021412) {
                if (input[10] < 0.5895058) {
                    if (input[14] < 2.139072) {
                        var80 = -0.17582017;
                    } else {
                        var80 = -0.0073013213;
                    }
                } else {
                    var80 = 0.025735362;
                }
            } else {
                if (input[10] < 0.5218835) {
                    var80 = -0.04759692;
                } else {
                    var80 = 0.12392859;
                }
            }
        }
    }
    var var81;
    if (input[9] < 0.1844056) {
        if (input[11] < 1.865359) {
            if (input[12] < 0.1752192) {
                if (input[4] < 0.2305536) {
                    var81 = 0.06589332;
                } else {
                    var81 = -0.1157661;
                }
            } else {
                if (input[11] < 1.634116) {
                    var81 = -0.011851196;
                } else {
                    var81 = 0.18732722;
                }
            }
        } else {
            if (input[12] < 0.1789005) {
                if (input[11] < 2.188193) {
                    if (input[16] < 0.1462664) {
                        var81 = -0.061984997;
                    } else {
                        var81 = 0.051729646;
                    }
                } else {
                    var81 = 0.15223;
                }
            } else {
                if (input[10] < 0.167827) {
                    var81 = 0.060550123;
                } else {
                    if (input[13] < -0.05807489) {
                        var81 = -0.15132;
                    } else {
                        var81 = -0.045093007;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.2080266) {
            if (input[6] < -0.2834927) {
                var81 = 0.017030546;
            } else {
                var81 = -0.14136632;
            }
        } else {
            if (input[0] < -0.1400551) {
                if (input[14] < 1.885872) {
                    var81 = -0.13710168;
                } else {
                    var81 = -0.008541756;
                }
            } else {
                if (input[6] < -0.2856097) {
                    var81 = -0.07538216;
                } else {
                    if (input[17] < 1.901403) {
                        var81 = 0.09448074;
                    } else {
                        var81 = -0.026711738;
                    }
                }
            }
        }
    }
    var var82;
    if (input[17] < 2.216) {
        if (input[4] < 0.2244232) {
            if (input[6] < -0.2811949) {
                var82 = 0.16456772;
            } else {
                if (input[15] < 0.1946683) {
                    var82 = -0.098986305;
                } else {
                    if (input[6] < -0.2285671) {
                        var82 = 0.119162835;
                    } else {
                        var82 = -0.014873433;
                    }
                }
            }
        } else {
            if (input[7] < -0.003709334) {
                var82 = -0.12317223;
            } else {
                if (input[2] < 1.85025) {
                    if (input[13] < 0.3618484) {
                        var82 = -0.015577977;
                    } else {
                        var82 = 0.13549143;
                    }
                } else {
                    var82 = -0.11102344;
                }
            }
        }
    } else {
        if (input[12] < 0.1789005) {
            var82 = 0.1022454;
        } else {
            var82 = -0.032645147;
        }
    }
    var var83;
    if (input[15] < 0.10951) {
        if (input[11] < 1.958758) {
            var83 = -0.03456778;
        } else {
            var83 = 0.11525684;
        }
    } else {
        if (input[3] < -0.2725759) {
            if (input[13] < 0.3618484) {
                if (input[6] < -0.3119513) {
                    var83 = 0.009920703;
                } else {
                    var83 = -0.1503876;
                }
            } else {
                var83 = 0.033885594;
            }
        } else {
            if (input[9] < 0.177528) {
                if (input[8] < 1.48904) {
                    if (input[6] < -0.2856097) {
                        var83 = 0.05613238;
                    } else {
                        var83 = -0.08613512;
                    }
                } else {
                    if (input[1] < 0.1649296) {
                        var83 = -0.017134927;
                    } else {
                        var83 = 0.17618486;
                    }
                }
            } else {
                if (input[5] < 1.96934) {
                    if (input[6] < -0.2818939) {
                        var83 = 0.039398648;
                    } else {
                        var83 = -0.050639268;
                    }
                } else {
                    if (input[5] < 2.1048) {
                        var83 = 0.10983079;
                    } else {
                        var83 = -0.037074562;
                    }
                }
            }
        }
    }
    var var84;
    if (input[5] < 1.566429) {
        var84 = 0.072405025;
    } else {
        if (input[11] < 1.640588) {
            if (input[3] < -0.2051749) {
                var84 = 0.010868128;
            } else {
                var84 = -0.14001514;
            }
        } else {
            if (input[7] < 0.00218608) {
                if (input[11] < 1.651918) {
                    if (input[11] < 1.642782) {
                        var84 = 0.006540612;
                    } else {
                        var84 = -0.13780065;
                    }
                } else {
                    if (input[8] < 1.468186) {
                        var84 = 0.12905118;
                    } else {
                        var84 = -0.007943264;
                    }
                }
            } else {
                if (input[3] < -0.2080266) {
                    if (input[9] < 0.177528) {
                        var84 = 0.016550496;
                    } else {
                        var84 = -0.10576198;
                    }
                } else {
                    if (input[17] < 1.666237) {
                        var84 = 0.15759434;
                    } else {
                        var84 = 0.03667743;
                    }
                }
            }
        }
    }
    var var85;
    if (input[1] < 0.3821875) {
        if (input[10] < 0.2034659) {
            if (input[17] < 1.920264) {
                if (input[6] < -0.2285671) {
                    var85 = 0.07876186;
                } else {
                    if (input[5] < 1.962971) {
                        var85 = -0.09273623;
                    } else {
                        var85 = 0.033756208;
                    }
                }
            } else {
                if (input[1] < 0.1121282) {
                    var85 = -0.004773381;
                } else {
                    var85 = 0.12296224;
                }
            }
        } else {
            var85 = 0.13679503;
        }
    } else {
        if (input[7] < -0.003709334) {
            if (input[12] < 0.1837633) {
                var85 = -0.03678642;
            } else {
                var85 = -0.13875039;
            }
        } else {
            if (input[13] < 0.2398087) {
                var85 = -0.07311337;
            } else {
                if (input[13] < 0.2454855) {
                    if (input[6] < -0.2818939) {
                        var85 = 0.16652107;
                    } else {
                        var85 = 0.02243509;
                    }
                } else {
                    if (input[5] < 1.733539) {
                        var85 = -0.11876892;
                    } else {
                        var85 = 0.021942262;
                    }
                }
            }
        }
    }
    var var86;
    if (input[4] < 0.2244232) {
        if (input[8] < 1.473498) {
            var86 = 0.13641505;
        } else {
            if (input[14] < 1.65756) {
                if (input[4] < -0.06557272) {
                    var86 = 0.004277209;
                } else {
                    var86 = -0.102519475;
                }
            } else {
                if (input[17] < 1.901403) {
                    if (input[12] < 0.2267006) {
                        var86 = -0.005490283;
                    } else {
                        var86 = 0.17051901;
                    }
                } else {
                    if (input[17] < 1.905973) {
                        var86 = -0.105494246;
                    } else {
                        var86 = 0.019349627;
                    }
                }
            }
        }
    } else {
        if (input[14] < 1.766734) {
            if (input[3] < -0.2080266) {
                if (input[6] < -0.2856097) {
                    var86 = -0.011887353;
                } else {
                    var86 = -0.17454115;
                }
            } else {
                if (input[9] < 0.1899804) {
                    var86 = 0.08923969;
                } else {
                    if (input[7] < 0.002935266) {
                        var86 = -0.118106626;
                    } else {
                        var86 = 0.07523441;
                    }
                }
            }
        } else {
            if (input[16] < 0.08679864) {
                var86 = 0.15287787;
            } else {
                if (input[15] < 0.1216586) {
                    if (input[4] < 0.3314527) {
                        var86 = 0.049271904;
                    } else {
                        var86 = -0.046970528;
                    }
                } else {
                    var86 = -0.114384085;
                }
            }
        }
    }
    var var87;
    if (input[16] < 0.1575578) {
        if (input[10] < 0.5589083) {
            if (input[1] < 0.4931629) {
                if (input[13] < 0.2512048) {
                    if (input[12] < 0.1843578) {
                        var87 = 0.089289345;
                    } else {
                        var87 = -0.0062967823;
                    }
                } else {
                    if (input[2] < 1.71978) {
                        var87 = -0.12872936;
                    } else {
                        var87 = 0.022205727;
                    }
                }
            } else {
                if (input[16] < 0.1011766) {
                    var87 = 0.14994918;
                } else {
                    var87 = -0.014741761;
                }
            }
        } else {
            if (input[10] < 0.5755756) {
                var87 = -0.15904373;
            } else {
                if (input[9] < 0.09285748) {
                    var87 = 0.1026425;
                } else {
                    var87 = -0.07384119;
                }
            }
        }
    } else {
        var87 = 0.06934195;
    }
    var var88;
    if (input[1] < 0.3754761) {
        if (input[10] < 0.2034659) {
            if (input[11] < 1.624329) {
                var88 = -0.07999513;
            } else {
                if (input[1] < 0.1691598) {
                    if (input[7] < -0.3148045) {
                        var88 = 0.03214003;
                    } else {
                        var88 = -0.09740959;
                    }
                } else {
                    if (input[11] < 1.907217) {
                        var88 = -0.006845893;
                    } else {
                        var88 = 0.1301693;
                    }
                }
            }
        } else {
            var88 = 0.12665132;
        }
    } else {
        if (input[7] < -0.003709334) {
            if (input[0] < -0.125313) {
                var88 = -0.027152745;
            } else {
                var88 = -0.13550046;
            }
        } else {
            if (input[13] < 0.2398087) {
                var88 = -0.06592977;
            } else {
                if (input[14] < 1.642755) {
                    var88 = 0.16056827;
                } else {
                    if (input[16] < 0.05676262) {
                        var88 = -0.09469768;
                    } else {
                        var88 = 0.014291367;
                    }
                }
            }
        }
    }
    var var89;
    if (input[7] < 0.1340801) {
        if (input[12] < 0.09820338) {
            if (input[5] < 1.81375) {
                var89 = -0.0142755;
            } else {
                var89 = 0.09476534;
            }
        } else {
            if (input[3] < -0.2982324) {
                if (input[6] < -0.3119513) {
                    var89 = 0.0049069086;
                } else {
                    var89 = -0.09304185;
                }
            } else {
                if (input[9] < 0.1605148) {
                    if (input[12] < 0.139419) {
                        var89 = -0.017080529;
                    } else {
                        var89 = 0.088683024;
                    }
                } else {
                    if (input[12] < 0.1789005) {
                        var89 = -0.0788546;
                    } else {
                        var89 = 0.0049635298;
                    }
                }
            }
        }
    } else {
        var89 = -0.06307778;
    }
    var var90;
    if (input[16] < 0.1575578) {
        if (input[16] < 0.1185908) {
            if (input[1] < 0.4931629) {
                if (input[13] < 0.2660079) {
                    if (input[7] < 0.00218608) {
                        var90 = -0.0070084706;
                    } else {
                        var90 = 0.059733275;
                    }
                } else {
                    var90 = -0.095653266;
                }
            } else {
                if (input[10] < 0.5528185) {
                    var90 = 0.11839972;
                } else {
                    if (input[14] < 2.25497) {
                        var90 = -0.042558264;
                    } else {
                        var90 = 0.02011019;
                    }
                }
            }
        } else {
            if (input[15] < 0.10951) {
                var90 = 0.007445934;
            } else {
                var90 = -0.10769947;
            }
        }
    } else {
        var90 = 0.06165128;
    }
    var var91;
    if (input[10] < 0.5895058) {
        if (input[3] < -0.2609473) {
            if (input[9] < 0.0790737) {
                if (input[8] < 1.771324) {
                    var91 = -0.041357964;
                } else {
                    var91 = 0.05009558;
                }
            } else {
                if (input[1] < 0.3965368) {
                    var91 = -0.01344157;
                } else {
                    var91 = -0.12680946;
                }
            }
        } else {
            if (input[13] < -0.07261127) {
                if (input[10] < 0.1617108) {
                    var91 = 0.03188647;
                } else {
                    var91 = -0.13490446;
                }
            } else {
                if (input[17] < 1.909563) {
                    if (input[17] < 1.901403) {
                        var91 = 0.020559845;
                    } else {
                        var91 = -0.07932158;
                    }
                } else {
                    var91 = 0.12828475;
                }
            }
        }
    } else {
        var91 = 0.055277586;
    }
    var var92;
    if (input[15] < 0.2699487) {
        if (input[7] < 0.00218608) {
            if (input[11] < 1.651918) {
                if (input[15] < 0.1799879) {
                    var92 = 0.0011486507;
                } else {
                    var92 = -0.1356236;
                }
            } else {
                if (input[8] < 1.468186) {
                    var92 = 0.11849529;
                } else {
                    if (input[10] < 0.3788235) {
                        var92 = 0.00883863;
                    } else {
                        var92 = -0.08435018;
                    }
                }
            }
        } else {
            if (input[7] < 0.005002671) {
                var92 = 0.087629884;
            } else {
                if (input[11] < 2.180795) {
                    if (input[13] < 0.3572792) {
                        var92 = -0.07378493;
                    } else {
                        var92 = 0.031962276;
                    }
                } else {
                    var92 = 0.07033079;
                }
            }
        }
    } else {
        if (input[6] < -0.1690036) {
            if (input[4] < -0.06557272) {
                var92 = 0.1717332;
            } else {
                var92 = -0.044648178;
            }
        } else {
            if (input[13] < -0.06721096) {
                var92 = -0.111077644;
            } else {
                var92 = 0.044583824;
            }
        }
    }
    var var93;
    if (input[1] < 0.1515034) {
        if (input[7] < -0.3259765) {
            var93 = 0.03341833;
        } else {
            var93 = -0.09420337;
        }
    } else {
        if (input[1] < 0.1616345) {
            var93 = 0.11052319;
        } else {
            if (input[1] < 0.1691598) {
                var93 = -0.09641771;
            } else {
                if (input[1] < 0.3754761) {
                    if (input[11] < 1.624329) {
                        var93 = -0.021736642;
                    } else {
                        var93 = 0.08907202;
                    }
                } else {
                    if (input[7] < -0.003709334) {
                        var93 = -0.09012872;
                    } else {
                        var93 = 0.0038828945;
                    }
                }
            }
        }
    }
    var var94;
    if (input[6] < -0.1834728) {
        if (input[7] < -0.2789133) {
            if (input[1] < 0.1515034) {
                var94 = -0.0035618134;
            } else {
                var94 = 0.104447834;
            }
        } else {
            if (input[2] < 1.85025) {
                if (input[14] < 1.766734) {
                    if (input[17] < 1.529019) {
                        var94 = 0.017378788;
                    } else {
                        var94 = -0.073206395;
                    }
                } else {
                    if (input[3] < -0.3421981) {
                        var94 = -0.03662583;
                    } else {
                        var94 = 0.11867782;
                    }
                }
            } else {
                if (input[6] < -0.3212921) {
                    var94 = 0.039667867;
                } else {
                    if (input[17] < 2.136015) {
                        var94 = -0.14919943;
                    } else {
                        var94 = -0.0019807466;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.97656) {
            if (input[11] < 2.004461) {
                var94 = -0.013443622;
            } else {
                var94 = -0.14079894;
            }
        } else {
            if (input[15] < 0.2493304) {
                var94 = -0.03378519;
            } else {
                var94 = 0.09779224;
            }
        }
    }
    var var95;
    if (input[5] < 1.566429) {
        var95 = 0.058571357;
    } else {
        if (input[11] < 1.640588) {
            var95 = -0.06576843;
        } else {
            if (input[6] < -0.2068207) {
                if (input[7] < -0.2662861) {
                    var95 = 0.108898796;
                } else {
                    if (input[3] < -0.2067552) {
                        var95 = -0.029964926;
                    } else {
                        var95 = 0.059478022;
                    }
                }
            } else {
                if (input[9] < 0.1994206) {
                    if (input[2] < 1.951496) {
                        var95 = -0.15072401;
                    } else {
                        var95 = -0.01301696;
                    }
                } else {
                    if (input[6] < -0.1586018) {
                        var95 = 0.10002453;
                    } else {
                        var95 = -0.034667853;
                    }
                }
            }
        }
    }
    var var96;
    if (input[16] < 0.1575578) {
        if (input[4] < 0.2400039) {
            if (input[10] < 0.4994705) {
                if (input[15] < 0.2493304) {
                    if (input[16] < 0.05676262) {
                        var96 = -0.07111823;
                    } else {
                        var96 = 0.034551468;
                    }
                } else {
                    if (input[5] < 1.96934) {
                        var96 = 0.0002669156;
                    } else {
                        var96 = 0.089640714;
                    }
                }
            } else {
                if (input[15] < 0.1799879) {
                    if (input[12] < 0.1671794) {
                        var96 = 0.009891051;
                    } else {
                        var96 = 0.13727625;
                    }
                } else {
                    var96 = -0.013168641;
                }
            }
        } else {
            if (input[14] < 2.104562) {
                var96 = -0.107056566;
            } else {
                if (input[0] < -0.2482357) {
                    var96 = 0.050957955;
                } else {
                    if (input[11] < 1.981538) {
                        var96 = 0.04245033;
                    } else {
                        var96 = -0.092750594;
                    }
                }
            }
        }
    } else {
        var96 = 0.059605505;
    }
    var var97;
    if (input[17] < 2.335191) {
        if (input[5] < 2.12481) {
            if (input[6] < -0.3035152) {
                var97 = 0.078498304;
            } else {
                if (input[14] < 2.128654) {
                    if (input[1] < 0.4931629) {
                        var97 = -0.013412987;
                    } else {
                        var97 = 0.0878764;
                    }
                } else {
                    var97 = -0.080185525;
                }
            }
        } else {
            var97 = -0.08737687;
        }
    } else {
        var97 = 0.0626617;
    }
    var var98;
    if (input[4] < 0.2244232) {
        if (input[8] < 1.473498) {
            var98 = 0.11629977;
        } else {
            if (input[12] < 0.2203308) {
                if (input[3] < -0.2246881) {
                    var98 = 0.04014944;
                } else {
                    var98 = -0.10373887;
                }
            } else {
                if (input[17] < 1.901403) {
                    if (input[4] < -0.06557272) {
                        var98 = 0.13479586;
                    } else {
                        var98 = -0.01029272;
                    }
                } else {
                    if (input[17] < 1.920264) {
                        var98 = -0.07540858;
                    } else {
                        var98 = 0.059932247;
                    }
                }
            }
        }
    } else {
        if (input[2] < 1.640486) {
            var98 = -0.1001292;
        } else {
            if (input[0] < -0.1069217) {
                if (input[1] < 0.4924694) {
                    if (input[6] < -0.2818939) {
                        var98 = 0.022007313;
                    } else {
                        var98 = -0.13656181;
                    }
                } else {
                    if (input[4] < 0.289004) {
                        var98 = 0.1025357;
                    } else {
                        var98 = -0.020497067;
                    }
                }
            } else {
                if (input[0] < -0.09664018) {
                    var98 = 0.1119156;
                } else {
                    var98 = -0.053196087;
                }
            }
        }
    }
    var var99;
    if (input[4] < 0.2305536) {
        if (input[6] < -0.2818939) {
            if (input[7] < -0.003709334) {
                var99 = -0.005731631;
            } else {
                var99 = 0.14603363;
            }
        } else {
            if (input[15] < 0.1936663) {
                if (input[3] < -0.2067552) {
                    var99 = -0.13393565;
                } else {
                    var99 = 0.032235432;
                }
            } else {
                if (input[6] < -0.2285671) {
                    var99 = 0.09555777;
                } else {
                    if (input[12] < 0.2267006) {
                        var99 = -0.068933375;
                    } else {
                        var99 = 0.027721304;
                    }
                }
            }
        }
    } else {
        if (input[5] < 1.733539) {
            if (input[14] < 1.63432) {
                var99 = 0.004305589;
            } else {
                var99 = -0.12667412;
            }
        } else {
            if (input[16] < 0.08679864) {
                var99 = 0.07293424;
            } else {
                if (input[13] < 0.3572792) {
                    var99 = -0.07392485;
                } else {
                    if (input[15] < 0.1143965) {
                        var99 = 0.09205715;
                    } else {
                        var99 = -0.034479763;
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
