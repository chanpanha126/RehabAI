// XGBoost Model for Gesture 6: ShoulderForwardElevation
// Accuracy: 99.66%
// Trained on 25295 samples

export function evaluateGesture6(features) {
function score(input) {
    var var0;
    if (input[10] < 0.2005333) {
        if (input[1] < 0.03473753) {
            if (input[2] < 2.139387) {
                var0 = -0.5846154;
            } else {
                if (input[0] < -0.2490104) {
                    if (input[3] < -0.2791505) {
                        var0 = 0.5341338;
                    } else {
                        var0 = -0.28444445;
                    }
                } else {
                    var0 = 0.59678715;
                }
            }
        } else {
            if (input[9] < 0.02070227) {
                var0 = 0.5910113;
            } else {
                if (input[9] < 0.158386) {
                    if (input[2] < 2.526545) {
                        var0 = -0.2710921;
                    } else {
                        var0 = 0.5606558;
                    }
                } else {
                    if (input[7] < 0.3641735) {
                        var0 = -0.598408;
                    } else {
                        var0 = 0.32307696;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[12] < 0.1925444) {
                if (input[7] < 0.1014395) {
                    if (input[11] < 1.947956) {
                        var0 = -0.30407244;
                    } else {
                        var0 = 0.50342053;
                    }
                } else {
                    if (input[2] < 2.038541) {
                        var0 = 0.537321;
                    } else {
                        var0 = 0.25855264;
                    }
                }
            } else {
                var0 = -0.59590447;
            }
        } else {
            if (input[1] < 0.1314784) {
                if (input[4] < 0.1948377) {
                    var0 = -0.55789477;
                } else {
                    var0 = -0.06666667;
                }
            } else {
                if (input[1] < 0.198329) {
                    if (input[6] < 0.09200309) {
                        var0 = 0.45964915;
                    } else {
                        var0 = -0.30731708;
                    }
                } else {
                    if (input[10] < 0.2047498) {
                        var0 = 0.31304348;
                    } else {
                        var0 = 0.59941834;
                    }
                }
            }
        }
    }
    var var1;
    if (input[10] < 0.2005333) {
        if (input[1] < 0.03473753) {
            if (input[2] < 2.139387) {
                var1 = -0.45419297;
            } else {
                if (input[0] < -0.2490104) {
                    if (input[0] < -0.3065954) {
                        var1 = 0.38619128;
                    } else {
                        var1 = -0.3477977;
                    }
                } else {
                    var1 = 0.4624553;
                }
            }
        } else {
            if (input[9] < 0.02070227) {
                var1 = 0.4585294;
            } else {
                if (input[9] < 0.158386) {
                    if (input[3] < -0.1778569) {
                        var1 = -0.26288626;
                    } else {
                        var1 = 0.1270091;
                    }
                } else {
                    if (input[7] < 0.3355377) {
                        var1 = -0.46423045;
                    } else {
                        var1 = 0.115957186;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[9] < 0.158386) {
                if (input[13] < 0.1567188) {
                    if (input[15] < -0.15246) {
                        var1 = -0.46831593;
                    } else {
                        var1 = 0.48688498;
                    }
                } else {
                    if (input[2] < 2.020056) {
                        var1 = 0.45038304;
                    } else {
                        var1 = 0.22569193;
                    }
                }
            } else {
                if (input[0] < -0.08814994) {
                    if (input[11] < 1.81685) {
                        var1 = 0.13095456;
                    } else {
                        var1 = -0.4880133;
                    }
                } else {
                    if (input[9] < 0.1907522) {
                        var1 = 0.15781595;
                    } else {
                        var1 = 0.4843888;
                    }
                }
            }
        } else {
            if (input[1] < 0.1314784) {
                if (input[13] < 0.09437134) {
                    var1 = -0.44192868;
                } else {
                    var1 = -0.05229661;
                }
            } else {
                if (input[10] < 0.2133373) {
                    if (input[6] < 0.07730176) {
                        var1 = 0.33874848;
                    } else {
                        var1 = -0.37913015;
                    }
                } else {
                    if (input[1] < 0.2012329) {
                        var1 = 0.37371874;
                    } else {
                        var1 = 0.46449023;
                    }
                }
            }
        }
    }
    var var2;
    if (input[10] < 0.2005333) {
        if (input[1] < 0.03473753) {
            if (input[2] < 2.139387) {
                var2 = -0.3927781;
            } else {
                if (input[2] < 2.331598) {
                    if (input[1] < 0.003234064) {
                        var2 = 0.27757528;
                    } else {
                        var2 = -0.41889152;
                    }
                } else {
                    var2 = 0.4270695;
                }
            }
        } else {
            if (input[0] < -0.214659) {
                if (input[14] < 2.296482) {
                    if (input[12] < 0.2208903) {
                        var2 = -0.165438;
                    } else {
                        var2 = 0.58004594;
                    }
                } else {
                    var2 = 0.39829835;
                }
            } else {
                if (input[2] < 2.676048) {
                    if (input[10] < 0.1885276) {
                        var2 = -0.4091188;
                    } else {
                        var2 = -0.1554897;
                    }
                } else {
                    var2 = 0.41656318;
                }
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[9] < 0.158386) {
                if (input[0] < -0.3405941) {
                    if (input[4] < 0.1522898) {
                        var2 = -0.2872842;
                    } else {
                        var2 = 0.21576184;
                    }
                } else {
                    var2 = 0.41533718;
                }
            } else {
                if (input[0] < -0.08814994) {
                    if (input[11] < 1.81685) {
                        var2 = 0.09806853;
                    } else {
                        var2 = -0.4133782;
                    }
                } else {
                    if (input[11] < 1.792652) {
                        var2 = -0.061338734;
                    } else {
                        var2 = 0.37094826;
                    }
                }
            }
        } else {
            if (input[1] < 0.1596987) {
                if (input[0] < -0.2398767) {
                    var2 = 0.3371483;
                } else {
                    if (input[0] < -0.1575038) {
                        var2 = -0.45616636;
                    } else {
                        var2 = 0.31433004;
                    }
                }
            } else {
                if (input[1] < 0.198329) {
                    if (input[6] < 0.09200309) {
                        var2 = 0.32219088;
                    } else {
                        var2 = -0.24412389;
                    }
                } else {
                    if (input[15] < -0.2133928) {
                        var2 = 0.047390137;
                    } else {
                        var2 = 0.40260804;
                    }
                }
            }
        }
    }
    var var3;
    if (input[10] < 0.2047498) {
        if (input[1] < 0.03473753) {
            if (input[2] < 2.139387) {
                var3 = -0.35660693;
            } else {
                if (input[0] < -0.2490104) {
                    if (input[3] < -0.2770397) {
                        var3 = 0.29222596;
                    } else {
                        var3 = -0.2577134;
                    }
                } else {
                    var3 = 0.3715075;
                }
            }
        } else {
            if (input[9] < 0.07510573) {
                if (input[17] < 2.149778) {
                    if (input[6] < -0.09542629) {
                        var3 = -0.2926152;
                    } else {
                        var3 = 0.15834522;
                    }
                } else {
                    if (input[4] < 0.393789) {
                        var3 = 0.37262684;
                    } else {
                        var3 = -0.3503263;
                    }
                }
            } else {
                if (input[2] < 2.676048) {
                    if (input[0] < -0.2307312) {
                        var3 = 0.39104256;
                    } else {
                        var3 = -0.36052406;
                    }
                } else {
                    var3 = 0.36413884;
                }
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[12] < 0.1925444) {
                if (input[0] < -0.3608074) {
                    if (input[16] < 0.08365622) {
                        var3 = -0.41504347;
                    } else {
                        var3 = 0.13305391;
                    }
                } else {
                    if (input[3] < -0.08196123) {
                        var3 = 0.3138976;
                    } else {
                        var3 = -0.0015705783;
                    }
                }
            } else {
                var3 = -0.3629462;
            }
        } else {
            if (input[1] < 0.1314784) {
                if (input[4] < 0.1948377) {
                    var3 = -0.33153278;
                } else {
                    var3 = 0.009914484;
                }
            } else {
                if (input[1] < 0.2012329) {
                    if (input[13] < 0.08007745) {
                        var3 = -0.15602477;
                    } else {
                        var3 = 0.302553;
                    }
                } else {
                    var3 = 0.3690842;
                }
            }
        }
    }
    var var4;
    if (input[10] < 0.2047498) {
        if (input[1] < 0.03473753) {
            if (input[9] < 0.236585) {
                if (input[2] < 2.294523) {
                    if (input[15] < -0.1239093) {
                        var4 = 0.18660241;
                    } else {
                        var4 = -0.43882307;
                    }
                } else {
                    if (input[0] < -0.3065954) {
                        var4 = 0.33806732;
                    } else {
                        var4 = -0.17345068;
                    }
                }
            } else {
                var4 = 0.34775805;
            }
        } else {
            if (input[9] < 0.1515849) {
                if (input[14] < 2.310684) {
                    if (input[8] < 1.954502) {
                        var4 = 0.1765658;
                    } else {
                        var4 = -0.19651529;
                    }
                } else {
                    var4 = 0.35700497;
                }
            } else {
                if (input[7] < 0.3355377) {
                    if (input[2] < 2.676048) {
                        var4 = -0.34864092;
                    } else {
                        var4 = 0.2026238;
                    }
                } else {
                    if (input[3] < -0.04649566) {
                        var4 = 0.48084146;
                    } else {
                        var4 = -0.23046996;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[2] < 2.038541) {
                if (input[3] < -0.08196123) {
                    if (input[0] < -0.3563769) {
                        var4 = 0.044813067;
                    } else {
                        var4 = 0.35192826;
                    }
                } else {
                    if (input[0] < -0.08814994) {
                        var4 = -0.31051657;
                    } else {
                        var4 = 0.23816706;
                    }
                }
            } else {
                if (input[9] < -0.08496729) {
                    if (input[10] < 0.5619929) {
                        var4 = 0.28333074;
                    } else {
                        var4 = -0.4721899;
                    }
                } else {
                    if (input[14] < 1.85563) {
                        var4 = -0.73947483;
                    } else {
                        var4 = -0.28157824;
                    }
                }
            }
        } else {
            if (input[1] < 0.2012329) {
                if (input[13] < 0.100007) {
                    if (input[5] < 2.292515) {
                        var4 = -0.31696892;
                    } else {
                        var4 = 0.3032645;
                    }
                } else {
                    if (input[13] < 0.4155674) {
                        var4 = 0.35471016;
                    } else {
                        var4 = -0.60303813;
                    }
                }
            } else {
                var4 = 0.347613;
            }
        }
    }
    var var5;
    if (input[10] < 0.2047498) {
        if (input[1] < 0.03473753) {
            if (input[2] < 2.331598) {
                if (input[1] < 0.003234064) {
                    if (input[9] < 0.236585) {
                        var5 = 0.027572112;
                    } else {
                        var5 = 0.33099046;
                    }
                } else {
                    if (input[0] < -0.3088126) {
                        var5 = 0.22354436;
                    } else {
                        var5 = -0.3647997;
                    }
                }
            } else {
                var5 = 0.3622098;
            }
        } else {
            if (input[9] < 0.1515849) {
                if (input[14] < 2.310684) {
                    if (input[3] < -0.1778569) {
                        var5 = -0.14933604;
                    } else {
                        var5 = 0.17959194;
                    }
                } else {
                    var5 = 0.33703294;
                }
            } else {
                if (input[7] < 0.3355377) {
                    if (input[2] < 2.676048) {
                        var5 = -0.33389986;
                    } else {
                        var5 = 0.1838926;
                    }
                } else {
                    if (input[3] < -0.04649566) {
                        var5 = 0.39754117;
                    } else {
                        var5 = -0.20694679;
                    }
                }
            }
        }
    } else {
        if (input[17] < 1.949417) {
            if (input[2] < 2.020056) {
                if (input[7] < 0.07736038) {
                    if (input[11] < 1.947956) {
                        var5 = -0.21559949;
                    } else {
                        var5 = 0.34476915;
                    }
                } else {
                    if (input[3] < -0.5227023) {
                        var5 = -0.25028995;
                    } else {
                        var5 = 0.28582206;
                    }
                }
            } else {
                if (input[11] < 2.14454) {
                    if (input[10] < 0.5668745) {
                        var5 = -0.05507594;
                    } else {
                        var5 = -0.5687352;
                    }
                } else {
                    var5 = 0.33302236;
                }
            }
        } else {
            if (input[1] < 0.2012329) {
                if (input[0] < -0.2307312) {
                    var5 = 0.32965645;
                } else {
                    if (input[5] < 2.292515) {
                        var5 = -0.32332918;
                    } else {
                        var5 = 0.26816857;
                    }
                }
            } else {
                var5 = 0.33656418;
            }
        }
    }
    var var6;
    if (input[10] < 0.2047498) {
        if (input[6] < 0.09200309) {
            if (input[9] < 0.2760571) {
                if (input[0] < -0.214659) {
                    if (input[14] < 2.32858) {
                        var6 = 0.011673318;
                    } else {
                        var6 = 0.34611225;
                    }
                } else {
                    if (input[13] < 0.14464) {
                        var6 = -0.32994094;
                    } else {
                        var6 = 0.1859823;
                    }
                }
            } else {
                var6 = 0.3248473;
            }
        } else {
            if (input[11] < 2.332286) {
                var6 = 0.14010899;
            } else {
                var6 = -0.32825738;
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[9] < 0.1684542) {
                if (input[3] < -0.325475) {
                    if (input[11] < 2.036443) {
                        var6 = 0.23725039;
                    } else {
                        var6 = -0.15798998;
                    }
                } else {
                    if (input[4] < 0.1179979) {
                        var6 = -0.21534981;
                    } else {
                        var6 = 0.29999912;
                    }
                }
            } else {
                if (input[0] < -0.08814994) {
                    if (input[11] < 1.806713) {
                        var6 = 0.05800589;
                    } else {
                        var6 = -0.34899545;
                    }
                } else {
                    if (input[9] < 0.1907522) {
                        var6 = -0.15321507;
                    } else {
                        var6 = 0.32738307;
                    }
                }
            }
        } else {
            if (input[1] < 0.2012329) {
                if (input[5] < 2.20184) {
                    if (input[13] < 0.4155674) {
                        var6 = 0.34442505;
                    } else {
                        var6 = -0.083395906;
                    }
                } else {
                    if (input[5] < 2.292515) {
                        var6 = -0.39013335;
                    } else {
                        var6 = 0.3014661;
                    }
                }
            } else {
                var6 = 0.32364035;
            }
        }
    }
    var var7;
    if (input[10] < 0.2047498) {
        if (input[6] < 0.09521208) {
            if (input[3] < -0.2851965) {
                if (input[15] < -0.1733308) {
                    var7 = -0.37822556;
                } else {
                    if (input[0] < -0.2451466) {
                        var7 = 0.26083645;
                    } else {
                        var7 = 0.8006752;
                    }
                }
            } else {
                if (input[9] < 0.2760571) {
                    if (input[13] < -0.02817309) {
                        var7 = -0.26429728;
                    } else {
                        var7 = -0.021605;
                    }
                } else {
                    var7 = 0.3154699;
                }
            }
        } else {
            if (input[11] < 2.353365) {
                var7 = -0.0040882574;
            } else {
                var7 = -0.31938595;
            }
        }
    } else {
        if (input[17] < 1.939274) {
            if (input[9] < 0.158386) {
                if (input[0] < -0.3405941) {
                    if (input[2] < 2.054677) {
                        var7 = -0.02713732;
                    } else {
                        var7 = 0.35074753;
                    }
                } else {
                    if (input[11] < 2.083605) {
                        var7 = 0.3273322;
                    } else {
                        var7 = 0.23866864;
                    }
                }
            } else {
                if (input[0] < -0.07917222) {
                    if (input[0] < -0.107618) {
                        var7 = -0.33134252;
                    } else {
                        var7 = -0.06821907;
                    }
                } else {
                    if (input[9] < 0.1876063) {
                        var7 = 0.06748829;
                    } else {
                        var7 = 0.3239528;
                    }
                }
            }
        } else {
            if (input[1] < 0.2012329) {
                if (input[0] < -0.2307312) {
                    var7 = 0.2938259;
                } else {
                    if (input[8] < 2.025137) {
                        var7 = 0.37286687;
                    } else {
                        var7 = -0.27591577;
                    }
                }
            } else {
                if (input[5] < 1.952727) {
                    if (input[0] < -0.2759615) {
                        var7 = 0.27380574;
                    } else {
                        var7 = -0.19323596;
                    }
                } else {
                    var7 = 0.31915006;
                }
            }
        }
    }
    var var8;
    if (input[10] < 0.2047498) {
        if (input[6] < 0.09521208) {
            if (input[0] < -0.0577703) {
                if (input[0] < -0.214659) {
                    if (input[12] < 0.2208903) {
                        var8 = 0.016934926;
                    } else {
                        var8 = 0.4082698;
                    }
                } else {
                    if (input[13] < 0.14464) {
                        var8 = -0.3253006;
                    } else {
                        var8 = 0.16025582;
                    }
                }
            } else {
                var8 = 0.30885333;
            }
        } else {
            if (input[7] < 0.3580175) {
                var8 = -0.31291613;
            } else {
                var8 = 0.007688836;
            }
        }
    } else {
        if (input[17] < 1.939274) {
            if (input[2] < 2.030415) {
                if (input[7] < 0.09324928) {
                    if (input[15] < -0.1693783) {
                        var8 = -0.41802144;
                    } else {
                        var8 = 0.06894817;
                    }
                } else {
                    if (input[3] < -0.5227023) {
                        var8 = -0.19700505;
                    } else {
                        var8 = 0.237793;
                    }
                }
            } else {
                if (input[3] < -0.3167458) {
                    if (input[6] < -0.2424446) {
                        var8 = 0.08713311;
                    } else {
                        var8 = -0.4623771;
                    }
                } else {
                    if (input[0] < -0.1648609) {
                        var8 = 0.29087016;
                    } else {
                        var8 = -0.13465133;
                    }
                }
            }
        } else {
            if (input[1] < 0.2012329) {
                if (input[0] < -0.2307312) {
                    var8 = 0.2774139;
                } else {
                    if (input[8] < 2.025137) {
                        var8 = 0.32291666;
                    } else {
                        var8 = -0.21723446;
                    }
                }
            } else {
                if (input[17] < 1.949417) {
                    if (input[12] < 0.3616124) {
                        var8 = 0.28004172;
                    } else {
                        var8 = -0.19557042;
                    }
                } else {
                    var8 = 0.31362164;
                }
            }
        }
    }
    var var9;
    if (input[10] < 0.2047498) {
        if (input[6] < 0.09521208) {
            if (input[3] < -0.2851965) {
                if (input[15] < -0.1733308) {
                    var9 = -0.33288562;
                } else {
                    if (input[2] < 2.29018) {
                        var9 = -0.08983946;
                    } else {
                        var9 = 0.3503062;
                    }
                }
            } else {
                if (input[0] < -0.0577703) {
                    if (input[8] < 2.305999) {
                        var9 = -0.09931432;
                    } else {
                        var9 = 0.24914697;
                    }
                } else {
                    var9 = 0.29963017;
                }
            }
        } else {
            if (input[16] < 0.3749827) {
                var9 = -0.30772457;
            } else {
                var9 = -0.001212802;
            }
        }
    } else {
        if (input[11] < 2.14454) {
            if (input[9] < 0.1684542) {
                if (input[3] < -0.3167458) {
                    if (input[6] < -0.2193533) {
                        var9 = 0.09587841;
                    } else {
                        var9 = -0.23739788;
                    }
                } else {
                    if (input[3] < -0.07832652) {
                        var9 = 0.286856;
                    } else {
                        var9 = -0.056762855;
                    }
                }
            } else {
                if (input[0] < -0.08814994) {
                    if (input[13] < 0.5079228) {
                        var9 = -0.22866707;
                    } else {
                        var9 = -0.5613925;
                    }
                } else {
                    if (input[2] < 1.801698) {
                        var9 = -0.27397558;
                    } else {
                        var9 = 0.2537863;
                    }
                }
            }
        } else {
            if (input[1] < 0.2012329) {
                if (input[5] < 2.292515) {
                    if (input[5] < 2.20184) {
                        var9 = 0.21321896;
                    } else {
                        var9 = -0.32384104;
                    }
                } else {
                    var9 = 0.282874;
                }
            } else {
                var9 = 0.30843288;
            }
        }
    }
    var var10;
    if (input[11] < 2.673528) {
        if (input[13] < 0.1600372) {
            if (input[2] < 2.388284) {
                if (input[0] < -0.2425216) {
                    if (input[2] < 2.297593) {
                        var10 = -0.30192453;
                    } else {
                        var10 = 0.19674297;
                    }
                } else {
                    if (input[2] < 2.239662) {
                        var10 = -0.15859503;
                    } else {
                        var10 = 0.24722606;
                    }
                }
            } else {
                if (input[0] < -0.2603845) {
                    var10 = 0.2789645;
                } else {
                    if (input[10] < 0.2101723) {
                        var10 = -0.30455697;
                    } else {
                        var10 = -0.08496887;
                    }
                }
            }
        } else {
            if (input[2] < 2.331598) {
                if (input[11] < 2.036443) {
                    if (input[3] < -0.08196123) {
                        var10 = 0.29700536;
                    } else {
                        var10 = -0.06335201;
                    }
                } else {
                    if (input[3] < -0.3586525) {
                        var10 = -0.18173891;
                    } else {
                        var10 = 0.051599987;
                    }
                }
            } else {
                if (input[6] < 0.1052229) {
                    if (input[17] < 2.027615) {
                        var10 = 0.42028415;
                    } else {
                        var10 = 0.31590056;
                    }
                } else {
                    if (input[10] < 0.1168249) {
                        var10 = -0.23559615;
                    } else {
                        var10 = 0.0103041325;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.1319172) {
            var10 = -0.13130404;
        } else {
            var10 = 0.30533886;
        }
    }
    var var11;
    if (input[11] < 2.673528) {
        if (input[6] < 0.1532583) {
            if (input[0] < -0.06154767) {
                if (input[9] < 0.1515849) {
                    if (input[5] < 1.808109) {
                        var11 = 0.25583366;
                    } else {
                        var11 = 0.03166295;
                    }
                } else {
                    if (input[14] < 1.722314) {
                        var11 = 0.013220858;
                    } else {
                        var11 = -0.29069948;
                    }
                }
            } else {
                if (input[9] < 0.1876063) {
                    var11 = 0.010966444;
                } else {
                    if (input[11] < 2.551323) {
                        var11 = 0.30740815;
                    } else {
                        var11 = 0.08186914;
                    }
                }
            }
        } else {
            if (input[2] < 1.782735) {
                var11 = -0.61167705;
            } else {
                if (input[1] < 0.2154144) {
                    var11 = -0.29923368;
                } else {
                    var11 = 0.19399415;
                }
            }
        }
    } else {
        if (input[10] < 0.1426543) {
            var11 = -0.09870363;
        } else {
            var11 = 0.30227822;
        }
    }
    var var12;
    if (input[11] < 2.669521) {
        if (input[7] < 0.75253) {
            if (input[13] < 0.6426922) {
                if (input[12] < 0.1383272) {
                    if (input[2] < 2.331598) {
                        var12 = 0.01348037;
                    } else {
                        var12 = 0.26695254;
                    }
                } else {
                    if (input[9] < 0.2760571) {
                        var12 = -0.18099305;
                    } else {
                        var12 = 0.26206905;
                    }
                }
            } else {
                if (input[0] < -0.07917222) {
                    if (input[10] < 0.6144063) {
                        var12 = -0.5234088;
                    } else {
                        var12 = 0.12526031;
                    }
                } else {
                    var12 = 0.19485854;
                }
            }
        } else {
            if (input[3] < -0.5227023) {
                if (input[11] < 2.030539) {
                    var12 = 0.25571212;
                } else {
                    var12 = -0.72424054;
                }
            } else {
                if (input[17] < 1.460249) {
                    if (input[0] < -0.08814994) {
                        var12 = -0.37133813;
                    } else {
                        var12 = 0.28875875;
                    }
                } else {
                    if (input[15] < -0.3058789) {
                        var12 = 0.15266408;
                    } else {
                        var12 = 0.32052362;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.09459572) {
            var12 = -0.16183926;
        } else {
            var12 = 0.29976347;
        }
    }
    var var13;
    if (input[11] < 2.669521) {
        if (input[7] < 0.75253) {
            if (input[4] < 0.6057047) {
                if (input[10] < 0.5413209) {
                    if (input[3] < -0.3728538) {
                        var13 = -0.20006956;
                    } else {
                        var13 = -0.00036712576;
                    }
                } else {
                    if (input[12] < -0.1072017) {
                        var13 = -0.06897551;
                    } else {
                        var13 = 0.2867492;
                    }
                }
            } else {
                if (input[1] < 0.5433449) {
                    var13 = 0.24661261;
                } else {
                    if (input[1] < 0.5782073) {
                        var13 = -0.46735236;
                    } else {
                        var13 = 0.003973399;
                    }
                }
            }
        } else {
            if (input[3] < -0.5227023) {
                if (input[11] < 2.030539) {
                    var13 = 0.23296037;
                } else {
                    if (input[7] < 0.8396606) {
                        var13 = -0.14355959;
                    } else {
                        var13 = -0.51135236;
                    }
                }
            } else {
                if (input[17] < 1.460249) {
                    if (input[0] < -0.08814994) {
                        var13 = -0.3307399;
                    } else {
                        var13 = 0.27131712;
                    }
                } else {
                    if (input[15] < -0.3058789) {
                        var13 = 0.12890187;
                    } else {
                        var13 = 0.3130198;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.1319172) {
            var13 = -0.12531051;
        } else {
            var13 = 0.2969105;
        }
    }
    var var14;
    if (input[11] < 2.679499) {
        if (input[6] < 0.1532583) {
            if (input[0] < -0.05553738) {
                if (input[9] < 0.1684542) {
                    if (input[5] < 1.808109) {
                        var14 = 0.20232062;
                    } else {
                        var14 = 0.015105946;
                    }
                } else {
                    if (input[12] < 0.1421088) {
                        var14 = -0.0005511883;
                    } else {
                        var14 = -0.2723914;
                    }
                }
            } else {
                var14 = 0.2952305;
            }
        } else {
            if (input[8] < 1.563712) {
                var14 = -0.017775988;
            } else {
                if (input[0] < -0.008302059) {
                    var14 = -0.30765122;
                } else {
                    var14 = -0.06885482;
                }
            }
        }
    } else {
        if (input[10] < 0.1742712) {
            var14 = 0.03309904;
        } else {
            var14 = 0.29337314;
        }
    }
    var var15;
    if (input[8] < 2.310433) {
        if (input[0] < -0.05553738) {
            if (input[9] < 0.1515849) {
                if (input[2] < 2.020056) {
                    if (input[0] < -0.3563769) {
                        var15 = -0.003102318;
                    } else {
                        var15 = 0.31036592;
                    }
                } else {
                    if (input[12] < 0.2208903) {
                        var15 = -0.030106748;
                    } else {
                        var15 = 0.310512;
                    }
                }
            } else {
                if (input[17] < 1.637204) {
                    if (input[9] < 0.1907522) {
                        var15 = -0.12131814;
                    } else {
                        var15 = 0.26330867;
                    }
                } else {
                    if (input[9] < 0.2948155) {
                        var15 = -0.29079983;
                    } else {
                        var15 = 0.21155567;
                    }
                }
            }
        } else {
            if (input[6] < 0.1662963) {
                if (input[5] < 2.324107) {
                    var15 = 0.29191127;
                } else {
                    var15 = 0.070002005;
                }
            } else {
                var15 = -0.13759972;
            }
        }
    } else {
        if (input[9] < 0.1892311) {
            var15 = 0.30131876;
        } else {
            if (input[1] < 0.1911284) {
                var15 = -0.2550521;
            } else {
                var15 = 0.24235968;
            }
        }
    }
    var var16;
    if (input[2] < 2.526545) {
        if (input[2] < 2.409317) {
            if (input[2] < 2.331598) {
                if (input[6] < -0.2360006) {
                    if (input[15] < -0.1693783) {
                        var16 = -0.024123346;
                    } else {
                        var16 = 0.27025157;
                    }
                } else {
                    if (input[3] < -0.3728538) {
                        var16 = -0.5239448;
                    } else {
                        var16 = -0.01834398;
                    }
                }
            } else {
                if (input[11] < 2.4439) {
                    var16 = 0.33296868;
                } else {
                    var16 = -0.20676759;
                }
            }
        } else {
            if (input[4] < 0.268915) {
                var16 = -0.31374684;
            } else {
                var16 = 0.17185143;
            }
        }
    } else {
        if (input[10] < 0.1643794) {
            var16 = -0.22372115;
        } else {
            var16 = 0.29518995;
        }
    }
    var var17;
    if (input[7] < 0.75253) {
        if (input[7] < 0.4934687) {
            if (input[13] < 0.1600372) {
                if (input[16] < 0.09449288) {
                    if (input[0] < -0.2425216) {
                        var17 = -0.12554558;
                    } else {
                        var17 = 0.11281899;
                    }
                } else {
                    if (input[0] < -0.3095694) {
                        var17 = 0.2997755;
                    } else {
                        var17 = -0.242503;
                    }
                }
            } else {
                if (input[3] < -0.3521377) {
                    if (input[5] < 1.889709) {
                        var17 = 0.24642736;
                    } else {
                        var17 = -0.35752064;
                    }
                } else {
                    if (input[3] < -0.278134) {
                        var17 = 0.3137528;
                    } else {
                        var17 = 0.063848734;
                    }
                }
            }
        } else {
            if (input[6] < -0.2437326) {
                if (input[0] < -0.5486825) {
                    var17 = -0.28526938;
                } else {
                    if (input[9] < -0.2708696) {
                        var17 = 0.03500458;
                    } else {
                        var17 = 0.31433952;
                    }
                }
            } else {
                if (input[2] < 2.331598) {
                    if (input[6] < -0.07713617) {
                        var17 = -0.26030466;
                    } else {
                        var17 = 0.026756749;
                    }
                } else {
                    var17 = 0.28585157;
                }
            }
        }
    } else {
        if (input[3] < -0.5227023) {
            if (input[11] < 2.030539) {
                var17 = 0.21070497;
            } else {
                if (input[1] < 0.5076681) {
                    var17 = -0.10817171;
                } else {
                    var17 = -0.41644642;
                }
            }
        } else {
            if (input[17] < 1.62304) {
                if (input[0] < -0.08814994) {
                    if (input[0] < -0.09630191) {
                        var17 = -0.032627504;
                    } else {
                        var17 = -0.28211617;
                    }
                } else {
                    var17 = 0.2559127;
                }
            } else {
                if (input[15] < -0.3058789) {
                    if (input[4] < 0.8129845) {
                        var17 = -0.11721313;
                    } else {
                        var17 = 0.21912335;
                    }
                } else {
                    var17 = 0.31018543;
                }
            }
        }
    }
    var var18;
    if (input[13] < -0.03759649) {
        if (input[3] < -0.2925492) {
            if (input[10] < -0.04610868) {
                if (input[5] < 2.121927) {
                    var18 = -0.62589115;
                } else {
                    var18 = 0.17879948;
                }
            } else {
                if (input[6] < -0.1992962) {
                    var18 = 0.31142786;
                } else {
                    var18 = 0.07081606;
                }
            }
        } else {
            if (input[9] < -0.03021878) {
                if (input[13] < -0.1338883) {
                    var18 = -0.6456425;
                } else {
                    var18 = -0.28324777;
                }
            } else {
                if (input[8] < 1.954502) {
                    if (input[9] < 0.06058512) {
                        var18 = -0.12929918;
                    } else {
                        var18 = 0.3713833;
                    }
                } else {
                    if (input[4] < -0.08492389) {
                        var18 = 0.044034332;
                    } else {
                        var18 = -0.31518787;
                    }
                }
            }
        }
    } else {
        if (input[15] < -0.1672182) {
            if (input[12] < -0.137949) {
                if (input[3] < -0.5227023) {
                    if (input[4] < 0.5540928) {
                        var18 = 0.1535076;
                    } else {
                        var18 = -0.2593739;
                    }
                } else {
                    if (input[14] < 1.796545) {
                        var18 = -0.14470625;
                    } else {
                        var18 = 0.29335564;
                    }
                }
            } else {
                if (input[10] < 0.5131308) {
                    if (input[13] < 0.1600372) {
                        var18 = -0.2932516;
                    } else {
                        var18 = 0.28458408;
                    }
                } else {
                    if (input[2] < 2.054677) {
                        var18 = -0.5180774;
                    } else {
                        var18 = 0.20162578;
                    }
                }
            }
        } else {
            if (input[0] < -0.3095694) {
                if (input[14] < 1.863186) {
                    if (input[5] < 1.80971) {
                        var18 = 0.19186021;
                    } else {
                        var18 = -0.2202786;
                    }
                } else {
                    if (input[3] < -0.3728538) {
                        var18 = -0.11011835;
                    } else {
                        var18 = 0.33455065;
                    }
                }
            } else {
                if (input[1] < 0.09469236) {
                    if (input[2] < 2.331598) {
                        var18 = -0.22706354;
                    } else {
                        var18 = 0.18712723;
                    }
                } else {
                    if (input[16] < 0.03677078) {
                        var18 = 0.22203045;
                    } else {
                        var18 = 0.009105543;
                    }
                }
            }
        }
    }
    var var19;
    if (input[2] < 2.526545) {
        if (input[2] < 2.411961) {
            if (input[2] < 2.331598) {
                if (input[0] < -0.05553738) {
                    if (input[3] < -0.2791505) {
                        var19 = 0.04336246;
                    } else {
                        var19 = -0.05667566;
                    }
                } else {
                    var19 = 0.28019142;
                }
            } else {
                if (input[11] < 2.4439) {
                    var19 = 0.31973094;
                } else {
                    var19 = -0.17738266;
                }
            }
        } else {
            if (input[1] < 0.2313703) {
                var19 = -0.29908186;
            } else {
                var19 = 0.09616948;
            }
        }
    } else {
        if (input[10] < 0.1643794) {
            if (input[12] < 0.2520353) {
                var19 = -0.05738197;
            } else {
                var19 = -0.21358557;
            }
        } else {
            var19 = 0.28762162;
        }
    }
    var var20;
    if (input[13] < -0.08770269) {
        if (input[6] < -0.2193533) {
            if (input[10] < -0.04610868) {
                if (input[5] < 2.118694) {
                    var20 = -0.47731352;
                } else {
                    var20 = 0.039388116;
                }
            } else {
                var20 = 0.29796073;
            }
        } else {
            if (input[11] < 2.27552) {
                if (input[3] < -0.1875741) {
                    var20 = -0.22476056;
                } else {
                    var20 = 0.31973198;
                }
            } else {
                if (input[2] < 2.29916) {
                    if (input[16] < -0.1613259) {
                        var20 = -0.41886225;
                    } else {
                        var20 = -0.1305192;
                    }
                } else {
                    if (input[0] < -0.301717) {
                        var20 = 0.20040219;
                    } else {
                        var20 = -0.22382896;
                    }
                }
            }
        }
    } else {
        if (input[16] < -0.1124557) {
            if (input[9] < 0.06058512) {
                if (input[2] < 2.296067) {
                    var20 = -0.24573284;
                } else {
                    var20 = 0.17158616;
                }
            } else {
                if (input[9] < 0.07676548) {
                    if (input[3] < -0.2441425) {
                        var20 = -0.10905461;
                    } else {
                        var20 = 0.5410025;
                    }
                } else {
                    if (input[10] < 0.1147564) {
                        var20 = -0.22277157;
                    } else {
                        var20 = 0.17369708;
                    }
                }
            }
        } else {
            if (input[13] < 0.01163872) {
                if (input[8] < 1.933403) {
                    if (input[3] < -0.278134) {
                        var20 = 0.30904722;
                    } else {
                        var20 = -0.096223965;
                    }
                } else {
                    if (input[2] < 2.526545) {
                        var20 = -0.34164333;
                    } else {
                        var20 = -0.031247186;
                    }
                }
            } else {
                if (input[15] < -0.1551727) {
                    if (input[9] < -0.1113536) {
                        var20 = 0.0856485;
                    } else {
                        var20 = -0.189565;
                    }
                } else {
                    if (input[3] < -0.2736205) {
                        var20 = 0.15079093;
                    } else {
                        var20 = 0.0067859543;
                    }
                }
            }
        }
    }
    var var21;
    if (input[2] < 2.526545) {
        if (input[5] < 2.20184) {
            if (input[2] < 2.294523) {
                if (input[5] < 2.146864) {
                    if (input[1] < 0.103873) {
                        var21 = -0.15063857;
                    } else {
                        var21 = 0.023866694;
                    }
                } else {
                    if (input[12] < 0.06762778) {
                        var21 = 0.22617908;
                    } else {
                        var21 = -0.30474228;
                    }
                }
            } else {
                if (input[12] < 0.05482084) {
                    if (input[3] < -0.2700669) {
                        var21 = 0.21337588;
                    } else {
                        var21 = -0.18983606;
                    }
                } else {
                    var21 = 0.38141972;
                }
            }
        } else {
            if (input[1] < 0.2366872) {
                if (input[9] < -0.01948627) {
                    var21 = 0.27806967;
                } else {
                    if (input[11] < 2.342972) {
                        var21 = 0.18584771;
                    } else {
                        var21 = -0.31270224;
                    }
                }
            } else {
                var21 = 0.25710067;
            }
        }
    } else {
        if (input[10] < 0.1643794) {
            var21 = -0.16910678;
        } else {
            var21 = 0.28047097;
        }
    }
    var var22;
    if (input[0] < -0.05553738) {
        if (input[6] < 0.02063039) {
            if (input[3] < -0.1778569) {
                if (input[0] < -0.2249129) {
                    if (input[9] < 0.07073097) {
                        var22 = -0.00498411;
                    } else {
                        var22 = 0.30750352;
                    }
                } else {
                    if (input[2] < 2.309478) {
                        var22 = -0.25808814;
                    } else {
                        var22 = 0.09470048;
                    }
                }
            } else {
                if (input[9] < 0.06349123) {
                    if (input[0] < -0.214659) {
                        var22 = 0.4450567;
                    } else {
                        var22 = -0.21670295;
                    }
                } else {
                    if (input[10] < 0.1943788) {
                        var22 = -0.17521967;
                    } else {
                        var22 = 0.0894203;
                    }
                }
            }
        } else {
            if (input[9] < 0.1937793) {
                if (input[12] < 0.1512287) {
                    if (input[3] < -0.06918821) {
                        var22 = -0.10140676;
                    } else {
                        var22 = -0.43031695;
                    }
                } else {
                    if (input[0] < -0.104146) {
                        var22 = -0.25921914;
                    } else {
                        var22 = 0.1900369;
                    }
                }
            } else {
                if (input[17] < 1.618225) {
                    var22 = 0.3124079;
                } else {
                    if (input[16] < 0.3895283) {
                        var22 = -0.25860497;
                    } else {
                        var22 = 0.17117375;
                    }
                }
            }
        }
    } else {
        if (input[6] < 0.2654131) {
            if (input[11] < 2.551323) {
                var22 = 0.2700447;
            } else {
                var22 = 0.0595196;
            }
        } else {
            var22 = -0.11654206;
        }
    }
    var var23;
    if (input[15] < -0.1693783) {
        if (input[12] < -0.137949) {
            if (input[15] < -0.275564) {
                if (input[11] < 2.036443) {
                    if (input[12] < -0.1898781) {
                        var23 = 0.26334712;
                    } else {
                        var23 = 0.035617378;
                    }
                } else {
                    if (input[11] < 2.056424) {
                        var23 = -0.18873638;
                    } else {
                        var23 = 0.20737046;
                    }
                }
            } else {
                var23 = 0.3144369;
            }
        } else {
            if (input[0] < -0.3585004) {
                if (input[4] < 0.4820215) {
                    if (input[1] < 0.4609259) {
                        var23 = -0.20727642;
                    } else {
                        var23 = -0.4699386;
                    }
                } else {
                    var23 = 0.223781;
                }
            } else {
                if (input[6] < -0.2437326) {
                    if (input[0] < -0.3211535) {
                        var23 = 0.27851084;
                    } else {
                        var23 = -0.06056034;
                    }
                } else {
                    if (input[14] < 1.858899) {
                        var23 = -0.24390334;
                    } else {
                        var23 = 0.16316772;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.2437326) {
            if (input[4] < 0.125505) {
                if (input[11] < 2.266809) {
                    var23 = -0.26004434;
                } else {
                    var23 = 0.19813257;
                }
            } else {
                if (input[11] < 2.088246) {
                    var23 = 0.33352032;
                } else {
                    var23 = -0.13259871;
                }
            }
        } else {
            if (input[3] < -0.3482999) {
                if (input[9] < -0.03974559) {
                    if (input[10] < 0.5389131) {
                        var23 = -0.4073989;
                    } else {
                        var23 = 0.011851554;
                    }
                } else {
                    var23 = 0.24169308;
                }
            } else {
                if (input[3] < -0.2851965) {
                    if (input[17] < 1.627252) {
                        var23 = -0.079564445;
                    } else {
                        var23 = 0.24598667;
                    }
                } else {
                    if (input[1] < 0.103873) {
                        var23 = -0.13738541;
                    } else {
                        var23 = 0.029887255;
                    }
                }
            }
        }
    }
    var var24;
    if (input[13] < -0.09889338) {
        if (input[6] < -0.2193533) {
            if (input[10] < -0.04610868) {
                if (input[16] < -0.3716307) {
                    var24 = -0.08872081;
                } else {
                    var24 = -0.3259869;
                }
            } else {
                var24 = 0.26607862;
            }
        } else {
            if (input[8] < 1.860348) {
                var24 = 0.099831656;
            } else {
                if (input[2] < 2.29916) {
                    if (input[0] < -0.2365361) {
                        var24 = -0.37712258;
                    } else {
                        var24 = -0.09583485;
                    }
                } else {
                    var24 = -0.07323027;
                }
            }
        }
    } else {
        if (input[7] < -0.1383907) {
            if (input[12] < 0.08640764) {
                if (input[9] < 0.06058512) {
                    var24 = -0.053518087;
                } else {
                    var24 = 0.58334863;
                }
            } else {
                if (input[13] < -0.03759649) {
                    var24 = -0.25284234;
                } else {
                    var24 = 0.27820227;
                }
            }
        } else {
            if (input[13] < -0.007248254) {
                if (input[8] < 1.945144) {
                    if (input[11] < 2.286493) {
                        var24 = -0.19831173;
                    } else {
                        var24 = 0.13736406;
                    }
                } else {
                    var24 = -0.32448676;
                }
            } else {
                if (input[14] < 2.32858) {
                    if (input[16] < 0.4293531) {
                        var24 = 0.044076707;
                    } else {
                        var24 = -0.045116678;
                    }
                } else {
                    if (input[6] < 0.127582) {
                        var24 = 0.27454838;
                    } else {
                        var24 = -0.05363367;
                    }
                }
            }
        }
    }
    var var25;
    if (input[2] < 1.801698) {
        if (input[15] < 0.0760949) {
            if (input[1] < 0.5859874) {
                if (input[8] < 1.568124) {
                    if (input[5] < 1.55869) {
                        var25 = -0.03155734;
                    } else {
                        var25 = 0.32218975;
                    }
                } else {
                    var25 = -0.111276284;
                }
            } else {
                var25 = -0.28172886;
            }
        } else {
            if (input[1] < 0.55054) {
                if (input[6] < 0.06244084) {
                    var25 = -0.58035916;
                } else {
                    var25 = -0.09767893;
                }
            } else {
                var25 = 0.027003331;
            }
        }
    } else {
        if (input[11] < 1.824765) {
            if (input[4] < 0.587167) {
                if (input[16] < 0.08919352) {
                    var25 = 0.023931226;
                } else {
                    var25 = 0.37334514;
                }
            } else {
                var25 = -0.03139862;
            }
        } else {
            if (input[1] < 0.5782073) {
                if (input[1] < 0.5353647) {
                    if (input[9] < -0.08103539) {
                        var25 = 0.14380343;
                    } else {
                        var25 = -0.022794597;
                    }
                } else {
                    if (input[17] < 1.875761) {
                        var25 = -0.19087426;
                    } else {
                        var25 = 0.2289812;
                    }
                }
            } else {
                if (input[3] < -0.5227023) {
                    if (input[4] < 0.8190764) {
                        var25 = 0.0507781;
                    } else {
                        var25 = -0.30927792;
                    }
                } else {
                    var25 = 0.29875368;
                }
            }
        }
    }
    var var26;
    if (input[0] < -0.05553738) {
        if (input[9] < 0.1684542) {
            if (input[8] < 1.556111) {
                if (input[12] < -0.1072017) {
                    var26 = -0.003564126;
                } else {
                    var26 = 0.31076965;
                }
            } else {
                if (input[6] < -0.09937902) {
                    if (input[3] < -0.2072623) {
                        var26 = -0.0089724;
                    } else {
                        var26 = -0.26791248;
                    }
                } else {
                    if (input[0] < -0.2425216) {
                        var26 = -0.22457463;
                    } else {
                        var26 = 0.13010614;
                    }
                }
            }
        } else {
            if (input[0] < -0.107618) {
                if (input[2] < 2.493668) {
                    var26 = -0.29429618;
                } else {
                    var26 = -0.081494205;
                }
            } else {
                if (input[13] < 0.5807586) {
                    if (input[15] < 0.06917504) {
                        var26 = 0.23739226;
                    } else {
                        var26 = -0.09240535;
                    }
                } else {
                    if (input[10] < 0.5712649) {
                        var26 = -0.5715341;
                    } else {
                        var26 = -0.102080524;
                    }
                }
            }
        }
    } else {
        if (input[14] < 2.354999) {
            var26 = 0.2601233;
        } else {
            if (input[1] < 0.1861399) {
                var26 = -0.15476944;
            } else {
                var26 = 0.105299555;
            }
        }
    }
    var var27;
    if (input[0] < -0.07917222) {
        if (input[9] < 0.158386) {
            if (input[5] < 1.75968) {
                if (input[14] < 1.831079) {
                    var27 = 0.28427622;
                } else {
                    var27 = 0.03700705;
                }
            } else {
                if (input[14] < 1.858899) {
                    if (input[0] < -0.3339799) {
                        var27 = -0.15670578;
                    } else {
                        var27 = 0.25058636;
                    }
                } else {
                    if (input[8] < 1.681635) {
                        var27 = 0.27245754;
                    } else {
                        var27 = 0.017701494;
                    }
                }
            }
        } else {
            if (input[2] < 1.822764) {
                if (input[6] < -0.001090583) {
                    if (input[0] < -0.1194672) {
                        var27 = -0.18338741;
                    } else {
                        var27 = 0.25440964;
                    }
                } else {
                    if (input[9] < 0.1907522) {
                        var27 = -0.22475109;
                    } else {
                        var27 = 0.130679;
                    }
                }
            } else {
                if (input[0] < -0.08617444) {
                    if (input[2] < 2.500825) {
                        var27 = -0.30146632;
                    } else {
                        var27 = -0.03417967;
                    }
                } else {
                    if (input[12] < 0.1383272) {
                        var27 = 0.21229681;
                    } else {
                        var27 = -0.2747188;
                    }
                }
            }
        }
    } else {
        if (input[11] < 1.806713) {
            if (input[10] < 0.5712649) {
                var27 = -0.32647312;
            } else {
                var27 = 0.06762094;
            }
        } else {
            if (input[14] < 2.354999) {
                if (input[6] < -0.01235539) {
                    var27 = 0.036805436;
                } else {
                    var27 = 0.28937477;
                }
            } else {
                if (input[1] < 0.2154144) {
                    var27 = -0.18550685;
                } else {
                    var27 = 0.16050212;
                }
            }
        }
    }
    var var28;
    if (input[14] < 2.32858) {
        if (input[5] < 2.222138) {
            if (input[2] < 2.294523) {
                if (input[5] < 2.146864) {
                    if (input[7] < -0.287073) {
                        var28 = -0.3142404;
                    } else {
                        var28 = 0.004955411;
                    }
                } else {
                    if (input[12] < 0.03955249) {
                        var28 = 0.2445017;
                    } else {
                        var28 = -0.26394358;
                    }
                }
            } else {
                if (input[15] < -0.02822228) {
                    if (input[0] < -0.3111897) {
                        var28 = 0.30918926;
                    } else {
                        var28 = -0.07532507;
                    }
                } else {
                    var28 = 0.32417673;
                }
            }
        } else {
            if (input[0] < -0.3065954) {
                var28 = 0.25860727;
            } else {
                if (input[1] < 0.2293716) {
                    if (input[15] < 0.004846659) {
                        var28 = -0.3122971;
                    } else {
                        var28 = -0.01975347;
                    }
                } else {
                    var28 = 0.18812796;
                }
            }
        }
    } else {
        if (input[9] < 0.1779871) {
            var28 = 0.2691452;
        } else {
            if (input[10] < 0.2215514) {
                var28 = -0.22180657;
            } else {
                var28 = 0.16493675;
            }
        }
    }
    var var29;
    if (input[0] < -0.214659) {
        if (input[6] < -0.07713617) {
            if (input[9] < 0.04394805) {
                if (input[15] < -0.05811152) {
                    if (input[3] < -0.2700669) {
                        var29 = 0.013419337;
                    } else {
                        var29 = -0.20953791;
                    }
                } else {
                    if (input[2] < 2.281997) {
                        var29 = -0.050119482;
                    } else {
                        var29 = 0.73977715;
                    }
                }
            } else {
                if (input[7] < -0.05745009) {
                    if (input[6] < -0.1262583) {
                        var29 = -0.28653494;
                    } else {
                        var29 = 0.2593892;
                    }
                } else {
                    if (input[3] < -0.2647325) {
                        var29 = 0.18477903;
                    } else {
                        var29 = -0.29507875;
                    }
                }
            }
        } else {
            if (input[3] < -0.1778569) {
                if (input[2] < 2.285258) {
                    if (input[16] < 0.01339899) {
                        var29 = 0.09008239;
                    } else {
                        var29 = -0.3128328;
                    }
                } else {
                    var29 = 0.36858428;
                }
            } else {
                if (input[13] < -0.03759649) {
                    var29 = -0.12335662;
                } else {
                    if (input[10] < 0.1858156) {
                        var29 = 0.41863236;
                    } else {
                        var29 = -0.063746095;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.1885276) {
            if (input[1] < -0.01000104) {
                var29 = 0.15956943;
            } else {
                var29 = -0.35787767;
            }
        } else {
            if (input[1] < 0.5174433) {
                if (input[3] < -0.2092829) {
                    if (input[8] < 2.125006) {
                        var29 = -0.23005998;
                    } else {
                        var29 = 0.15420395;
                    }
                } else {
                    if (input[16] < 0.09175771) {
                        var29 = -0.03554653;
                    } else {
                        var29 = 0.26507705;
                    }
                }
            } else {
                if (input[9] < 0.1907522) {
                    if (input[10] < 0.5435748) {
                        var29 = -0.28270528;
                    } else {
                        var29 = 0.0073583354;
                    }
                } else {
                    if (input[1] < 0.5191073) {
                        var29 = -0.03361074;
                    } else {
                        var29 = 0.26417193;
                    }
                }
            }
        }
    }
    var var30;
    if (input[15] < -0.1733308) {
        if (input[12] < -0.137949) {
            if (input[15] < -0.275564) {
                if (input[12] < -0.2299698) {
                    var30 = 0.2400344;
                } else {
                    if (input[15] < -0.3058789) {
                        var30 = -0.32658988;
                    } else {
                        var30 = -0.010726681;
                    }
                }
            } else {
                var30 = 0.2905375;
            }
        } else {
            if (input[0] < -0.3525001) {
                if (input[17] < 1.939274) {
                    if (input[11] < 2.09717) {
                        var30 = -0.34591264;
                    } else {
                        var30 = 0.16851966;
                    }
                } else {
                    var30 = 0.18106955;
                }
            } else {
                if (input[11] < 2.068072) {
                    var30 = 0.20893957;
                } else {
                    if (input[17] < 1.59125) {
                        var30 = -0.2604397;
                    } else {
                        var30 = 0.06132942;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.2437326) {
            if (input[4] < 0.125505) {
                if (input[0] < -0.3346177) {
                    var30 = -0.22221157;
                } else {
                    var30 = 0.1733864;
                }
            } else {
                if (input[5] < 1.825844) {
                    var30 = -0.13124806;
                } else {
                    var30 = 0.3161394;
                }
            }
        } else {
            if (input[3] < -0.3482999) {
                if (input[9] < -0.03974559) {
                    if (input[4] < 0.4922558) {
                        var30 = -0.33817485;
                    } else {
                        var30 = 0.047554485;
                    }
                } else {
                    var30 = 0.21473572;
                }
            } else {
                if (input[0] < -0.3440311) {
                    if (input[12] < -0.1004562) {
                        var30 = -0.18679899;
                    } else {
                        var30 = 0.28930032;
                    }
                } else {
                    if (input[9] < -0.08834896) {
                        var30 = 0.29869825;
                    } else {
                        var30 = -0.006494262;
                    }
                }
            }
        }
    }
    var var31;
    if (input[7] < 0.7362524) {
        if (input[7] < 0.4870835) {
            if (input[15] < -0.1693783) {
                if (input[12] < -0.137949) {
                    if (input[10] < 0.5269575) {
                        var31 = -0.17867343;
                    } else {
                        var31 = 0.24869028;
                    }
                } else {
                    if (input[0] < -0.3596537) {
                        var31 = -0.3177253;
                    } else {
                        var31 = 0.0035990926;
                    }
                }
            } else {
                if (input[9] < -0.06190303) {
                    if (input[13] < 0.1843041) {
                        var31 = 0.052104943;
                    } else {
                        var31 = 0.30369705;
                    }
                } else {
                    if (input[10] < 0.5435748) {
                        var31 = 0.008261302;
                    } else {
                        var31 = 0.20371203;
                    }
                }
            }
        } else {
            if (input[1] < 0.492957) {
                if (input[11] < 2.314734) {
                    if (input[14] < 2.173474) {
                        var31 = 0.0899861;
                    } else {
                        var31 = 0.5703758;
                    }
                } else {
                    if (input[15] < 0.02075163) {
                        var31 = -0.22120641;
                    } else {
                        var31 = 0.20175986;
                    }
                }
            } else {
                if (input[2] < 2.054677) {
                    if (input[2] < 2.043456) {
                        var31 = -0.08277827;
                    } else {
                        var31 = -0.38609716;
                    }
                } else {
                    var31 = 0.28561482;
                }
            }
        }
    } else {
        if (input[3] < -0.5227023) {
            if (input[11] < 2.030539) {
                var31 = 0.1939898;
            } else {
                if (input[4] < 0.6963339) {
                    var31 = -0.059556454;
                } else {
                    var31 = -0.28531414;
                }
            }
        } else {
            if (input[17] < 1.62304) {
                if (input[9] < 0.1779871) {
                    if (input[0] < -0.1341432) {
                        var31 = -0.06399748;
                    } else {
                        var31 = -0.24576649;
                    }
                } else {
                    var31 = 0.21102558;
                }
            } else {
                if (input[15] < -0.3058789) {
                    var31 = -0.018854704;
                } else {
                    var31 = 0.2938896;
                }
            }
        }
    }
    var var32;
    if (input[2] < 2.294523) {
        if (input[0] < -0.214659) {
            if (input[3] < -0.1923062) {
                if (input[12] < 0.2323596) {
                    if (input[15] < 0.01067353) {
                        var32 = -0.00021657035;
                    } else {
                        var32 = -0.24814588;
                    }
                } else {
                    var32 = 0.2908217;
                }
            } else {
                if (input[8] < 2.04639) {
                    if (input[15] < 0.004846659) {
                        var32 = -0.060247164;
                    } else {
                        var32 = 0.38712043;
                    }
                } else {
                    if (input[2] < 2.29159) {
                        var32 = -0.30924284;
                    } else {
                        var32 = 0.24792372;
                    }
                }
            }
        } else {
            if (input[9] < 0.09423487) {
                var32 = -0.36176956;
            } else {
                if (input[0] < -0.09013086) {
                    if (input[9] < 0.158386) {
                        var32 = 0.22499906;
                    } else {
                        var32 = -0.18277898;
                    }
                } else {
                    if (input[2] < 1.801698) {
                        var32 = -0.12788042;
                    } else {
                        var32 = 0.19032301;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.3111897) {
            var32 = 0.29855356;
        } else {
            if (input[10] < 0.2133373) {
                if (input[1] < -0.03273844) {
                    var32 = 0.26985517;
                } else {
                    if (input[10] < 0.01560943) {
                        var32 = -0.23535354;
                    } else {
                        var32 = 0.011053721;
                    }
                }
            } else {
                if (input[1] < 0.1823999) {
                    var32 = 0.054439235;
                } else {
                    var32 = 0.26825085;
                }
            }
        }
    }
    var var33;
    if (input[4] < -0.1056698) {
        if (input[6] < -0.2193533) {
            if (input[10] < -0.04610868) {
                var33 = -0.21341561;
            } else {
                var33 = 0.24325296;
            }
        } else {
            if (input[8] < 1.87102) {
                var33 = -0.039280206;
            } else {
                var33 = -0.30060652;
            }
        }
    } else {
        if (input[16] < -0.1204001) {
            if (input[5] < 2.141249) {
                if (input[9] < 0.06058512) {
                    if (input[3] < -0.2874977) {
                        var33 = 0.17625447;
                    } else {
                        var33 = -0.20957415;
                    }
                } else {
                    if (input[12] < 0.08469307) {
                        var33 = 0.4124249;
                    } else {
                        var33 = 0.16494086;
                    }
                }
            } else {
                if (input[2] < 2.251794) {
                    var33 = -0.20393248;
                } else {
                    var33 = 0.12147969;
                }
            }
        } else {
            if (input[13] < -0.007248254) {
                if (input[6] < -0.1734916) {
                    var33 = 0.20311013;
                } else {
                    if (input[16] < -0.06901158) {
                        var33 = -0.055901553;
                    } else {
                        var33 = -0.28063935;
                    }
                }
            } else {
                if (input[14] < 2.32858) {
                    if (input[2] < 2.411961) {
                        var33 = 0.009902494;
                    } else {
                        var33 = -0.2410668;
                    }
                } else {
                    if (input[6] < 0.009253022) {
                        var33 = 0.2571276;
                    } else {
                        var33 = -0.030221071;
                    }
                }
            }
        }
    }
    var var34;
    if (input[1] < -0.07148194) {
        if (input[3] < -0.2724238) {
            var34 = 0.299265;
        } else {
            if (input[0] < -0.3058303) {
                var34 = -0.20958617;
            } else {
                var34 = 0.17268723;
            }
        }
    } else {
        if (input[1] < 0.5742223) {
            if (input[1] < 0.5408822) {
                if (input[7] < 0.6761003) {
                    if (input[8] < 1.582411) {
                        var34 = 0.08461842;
                    } else {
                        var34 = -0.026996946;
                    }
                } else {
                    if (input[6] < -0.4281446) {
                        var34 = -0.018615544;
                    } else {
                        var34 = 0.29209;
                    }
                }
            } else {
                if (input[10] < 0.5356719) {
                    if (input[10] < 0.5204443) {
                        var34 = -0.006565126;
                    } else {
                        var34 = 0.22842272;
                    }
                } else {
                    if (input[0] < -0.07917222) {
                        var34 = -0.2001125;
                    } else {
                        var34 = 0.11957487;
                    }
                }
            }
        } else {
            if (input[3] < -0.5227023) {
                if (input[1] < 0.6088977) {
                    var34 = 0.050240625;
                } else {
                    var34 = -0.24313307;
                }
            } else {
                if (input[2] < 1.809612) {
                    if (input[1] < 0.5859874) {
                        var34 = 0.1869834;
                    } else {
                        var34 = -0.18038282;
                    }
                } else {
                    var34 = 0.28436717;
                }
            }
        }
    }
    var var35;
    if (input[2] < 2.28058) {
        if (input[5] < 2.141249) {
            if (input[7] < -0.1699723) {
                if (input[8] < 2.005707) {
                    var35 = 0.09004724;
                } else {
                    var35 = 0.32589403;
                }
            } else {
                if (input[2] < 2.041447) {
                    if (input[11] < 2.056424) {
                        var35 = -0.011049586;
                    } else {
                        var35 = 0.18533088;
                    }
                } else {
                    if (input[3] < -0.1853803) {
                        var35 = -0.111554675;
                    } else {
                        var35 = 0.08670223;
                    }
                }
            }
        } else {
            var35 = -0.24752893;
        }
    } else {
        if (input[15] < -0.05811152) {
            if (input[9] < -0.0358799) {
                var35 = 0.2748991;
            } else {
                if (input[3] < -0.2713766) {
                    if (input[8] < 1.891325) {
                        var35 = 0.24918829;
                    } else {
                        var35 = -0.08381465;
                    }
                } else {
                    if (input[6] < -0.1296514) {
                        var35 = -0.27043074;
                    } else {
                        var35 = 0.17070857;
                    }
                }
            }
        } else {
            if (input[9] < 0.04394805) {
                if (input[12] < 0.02908047) {
                    var35 = 0.06506176;
                } else {
                    var35 = 0.620035;
                }
            } else {
                if (input[12] < 0.07958815) {
                    if (input[16] < 0.2411673) {
                        var35 = 0.06459288;
                    } else {
                        var35 = -0.26756117;
                    }
                } else {
                    if (input[9] < 0.05920528) {
                        var35 = -0.18497835;
                    } else {
                        var35 = 0.18507122;
                    }
                }
            }
        }
    }
    var var36;
    if (input[0] < -0.214659) {
        if (input[12] < -0.06513183) {
            if (input[6] < -0.2231357) {
                if (input[3] < -0.3272809) {
                    if (input[11] < 2.09717) {
                        var36 = -0.051567543;
                    } else {
                        var36 = 0.22665733;
                    }
                } else {
                    if (input[10] < -0.04610868) {
                        var36 = -0.16386883;
                    } else {
                        var36 = 0.23459506;
                    }
                }
            } else {
                if (input[9] < -0.08361879) {
                    if (input[3] < -0.3148825) {
                        var36 = -0.12476484;
                    } else {
                        var36 = 0.2558159;
                    }
                } else {
                    if (input[2] < 2.322481) {
                        var36 = -0.26412413;
                    } else {
                        var36 = 0.1908437;
                    }
                }
            }
        } else {
            if (input[10] < 0.5413209) {
                if (input[0] < -0.3585004) {
                    if (input[6] < -0.2397503) {
                        var36 = 0.069629826;
                    } else {
                        var36 = -0.28800252;
                    }
                } else {
                    if (input[2] < 2.043456) {
                        var36 = 0.28749365;
                    } else {
                        var36 = 0.03635535;
                    }
                }
            } else {
                var36 = 0.27782974;
            }
        }
    } else {
        if (input[10] < 0.1858156) {
            if (input[10] < -0.01862014) {
                var36 = 0.15398093;
            } else {
                var36 = -0.30837113;
            }
        } else {
            if (input[12] < 0.0933965) {
                var36 = 0.23331851;
            } else {
                if (input[9] < 0.1907522) {
                    if (input[3] < -0.06249162) {
                        var36 = 0.030486012;
                    } else {
                        var36 = -0.16324903;
                    }
                } else {
                    if (input[0] < -0.09944342) {
                        var36 = -0.20451635;
                    } else {
                        var36 = 0.21233709;
                    }
                }
            }
        }
    }
    var var37;
    if (input[2] < 2.294523) {
        if (input[8] < 1.582411) {
            if (input[0] < -0.09808612) {
                if (input[2] < 2.043456) {
                    if (input[8] < 1.572712) {
                        var37 = 0.29465106;
                    } else {
                        var37 = 0.082959935;
                    }
                } else {
                    if (input[10] < 0.5204443) {
                        var37 = -0.35969397;
                    } else {
                        var37 = 0.097518586;
                    }
                }
            } else {
                if (input[9] < 0.1876063) {
                    if (input[9] < 0.1684542) {
                        var37 = 0.20121242;
                    } else {
                        var37 = -0.16941448;
                    }
                } else {
                    if (input[11] < 1.792652) {
                        var37 = -0.035789162;
                    } else {
                        var37 = 0.26270065;
                    }
                }
            }
        } else {
            if (input[17] < 1.595208) {
                if (input[2] < 1.999273) {
                    if (input[2] < 1.836799) {
                        var37 = 0.028510872;
                    } else {
                        var37 = 0.18762957;
                    }
                } else {
                    if (input[17] < 1.573481) {
                        var37 = -0.16910554;
                    } else {
                        var37 = -0.4979231;
                    }
                }
            } else {
                if (input[0] < -0.214659) {
                    if (input[3] < -0.1923062) {
                        var37 = -0.013174425;
                    } else {
                        var37 = 0.16285825;
                    }
                } else {
                    if (input[0] < -0.09013086) {
                        var37 = -0.25185737;
                    } else {
                        var37 = 0.075301275;
                    }
                }
            }
        }
    } else {
        if (input[9] < 0.06759129) {
            if (input[12] < 0.0192818) {
                if (input[0] < -0.3111897) {
                    var37 = 0.28021303;
                } else {
                    if (input[2] < 2.32985) {
                        var37 = -0.14035521;
                    } else {
                        var37 = 0.16821843;
                    }
                }
            } else {
                var37 = 0.3499436;
            }
        } else {
            if (input[15] < -0.01968046) {
                var37 = -0.2602736;
            } else {
                if (input[11] < 2.418099) {
                    var37 = 0.23387058;
                } else {
                    if (input[13] < 0.1544556) {
                        var37 = -0.18520665;
                    } else {
                        var37 = 0.08408366;
                    }
                }
            }
        }
    }
    var var38;
    if (input[1] < 0.5742223) {
        if (input[6] < -0.4150616) {
            if (input[10] < 0.6023796) {
                if (input[1] < 0.5213787) {
                    var38 = 0.288683;
                } else {
                    var38 = 0.0580532;
                }
            } else {
                if (input[2] < 2.020056) {
                    var38 = 0.13944018;
                } else {
                    var38 = -0.19454488;
                }
            }
        } else {
            if (input[3] < -0.3666009) {
                if (input[17] < 1.77553) {
                    if (input[11] < 2.04423) {
                        var38 = 0.18609971;
                    } else {
                        var38 = -0.0835593;
                    }
                } else {
                    if (input[9] < -0.03974559) {
                        var38 = -0.30654234;
                    } else {
                        var38 = 0.193646;
                    }
                }
            } else {
                if (input[6] < -0.2451154) {
                    if (input[10] < 0.5375653) {
                        var38 = 0.2246124;
                    } else {
                        var38 = -0.12947214;
                    }
                } else {
                    if (input[10] < 0.5668745) {
                        var38 = 0.0029705614;
                    } else {
                        var38 = -0.19684207;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.5227023) {
            if (input[1] < 0.6088977) {
                var38 = 0.049350984;
            } else {
                var38 = -0.2179525;
            }
        } else {
            if (input[2] < 1.809612) {
                if (input[0] < -0.07784932) {
                    if (input[6] < -0.0299241) {
                        var38 = 0.01062192;
                    } else {
                        var38 = -0.18982475;
                    }
                } else {
                    var38 = 0.18238774;
                }
            } else {
                if (input[1] < 0.5859874) {
                    var38 = 0.079768874;
                } else {
                    var38 = 0.28095713;
                }
            }
        }
    }
    var var39;
    if (input[7] < 0.7362524) {
        if (input[6] < -0.4281446) {
            var39 = 0.2558743;
        } else {
            if (input[15] < -0.1693783) {
                if (input[8] < 1.585759) {
                    if (input[11] < 2.052706) {
                        var39 = 0.2533994;
                    } else {
                        var39 = -0.068600416;
                    }
                } else {
                    if (input[11] < 2.058228) {
                        var39 = -0.22223397;
                    } else {
                        var39 = 0.032277938;
                    }
                }
            } else {
                if (input[7] < 0.4870835) {
                    if (input[3] < -0.2700669) {
                        var39 = 0.12404379;
                    } else {
                        var39 = -0.014130537;
                    }
                } else {
                    if (input[3] < -0.325475) {
                        var39 = -0.20717515;
                    } else {
                        var39 = -0.019720748;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.5227023) {
            if (input[11] < 2.030539) {
                var39 = 0.16608904;
            } else {
                if (input[7] < 0.8948545) {
                    var39 = -0.054021385;
                } else {
                    var39 = -0.22540082;
                }
            }
        } else {
            if (input[17] < 1.62304) {
                if (input[0] < -0.08617444) {
                    var39 = -0.16220117;
                } else {
                    var39 = 0.18901272;
                }
            } else {
                if (input[15] < -0.3058789) {
                    var39 = -0.04861693;
                } else {
                    var39 = 0.27402887;
                }
            }
        }
    }
    var var40;
    if (input[4] < -0.1056698) {
        if (input[5] < 2.121927) {
            if (input[2] < 2.297593) {
                if (input[17] < 1.915644) {
                    var40 = -0.023475261;
                } else {
                    var40 = -0.30096772;
                }
            } else {
                var40 = 0.019377226;
            }
        } else {
            if (input[15] < -0.112852) {
                var40 = 0.16586529;
            } else {
                var40 = -0.060546283;
            }
        }
    } else {
        if (input[7] < -0.08655895) {
            if (input[1] < 0.103873) {
                if (input[3] < -0.2660694) {
                    var40 = 0.14462315;
                } else {
                    if (input[12] < 0.05482084) {
                        var40 = -0.21275017;
                    } else {
                        var40 = -0.058386747;
                    }
                }
            } else {
                if (input[12] < 0.08640764) {
                    if (input[15] < 0.03908866) {
                        var40 = 0.3608345;
                    } else {
                        var40 = 0.08353058;
                    }
                } else {
                    if (input[11] < 2.304043) {
                        var40 = -0.20227818;
                    } else {
                        var40 = 0.22020727;
                    }
                }
            }
        } else {
            if (input[13] < 0.05142874) {
                if (input[6] < -0.1719792) {
                    if (input[2] < 2.300531) {
                        var40 = 0.22707194;
                    } else {
                        var40 = 0.05081019;
                    }
                } else {
                    if (input[7] < -0.04829197) {
                        var40 = 0.051150586;
                    } else {
                        var40 = -0.257084;
                    }
                }
            } else {
                if (input[4] < 0.06703366) {
                    if (input[10] < 0.1168249) {
                        var40 = -0.051619723;
                    } else {
                        var40 = 0.29884827;
                    }
                } else {
                    if (input[2] < 2.331598) {
                        var40 = 0.0007101217;
                    } else {
                        var40 = 0.15379173;
                    }
                }
            }
        }
    }
    var var41;
    if (input[9] < -0.08361879) {
        if (input[10] < 0.4992206) {
            var41 = 0.28130996;
        } else {
            if (input[11] < 2.09717) {
                if (input[12] < -0.09728467) {
                    if (input[9] < -0.1113536) {
                        var41 = 0.021676937;
                    } else {
                        var41 = -0.33507508;
                    }
                } else {
                    if (input[7] < 0.5881752) {
                        var41 = 0.28226534;
                    } else {
                        var41 = -0.017323263;
                    }
                }
            } else {
                var41 = 0.2784796;
            }
        }
    } else {
        if (input[3] < -0.3750864) {
            if (input[9] < -0.04198604) {
                var41 = -0.25128075;
            } else {
                var41 = -0.04637572;
            }
        } else {
            if (input[9] < -0.07794149) {
                if (input[0] < -0.3440311) {
                    if (input[3] < -0.325475) {
                        var41 = -0.044393122;
                    } else {
                        var41 = 0.1712331;
                    }
                } else {
                    if (input[0] < -0.3382261) {
                        var41 = -0.29559693;
                    } else {
                        var41 = -0.011511996;
                    }
                }
            } else {
                if (input[10] < 0.5435748) {
                    if (input[3] < -0.2925492) {
                        var41 = 0.07719676;
                    } else {
                        var41 = -0.025501216;
                    }
                } else {
                    if (input[5] < 1.55869) {
                        var41 = -0.10615854;
                    } else {
                        var41 = 0.1933064;
                    }
                }
            }
        }
    }
    var var42;
    if (input[4] < -0.1056698) {
        if (input[6] < -0.2193533) {
            if (input[10] < -0.04610868) {
                var42 = -0.16843562;
            } else {
                var42 = 0.19791919;
            }
        } else {
            if (input[10] < -0.03771137) {
                var42 = -0.042183626;
            } else {
                var42 = -0.24480717;
            }
        }
    } else {
        if (input[7] < -0.08655895) {
            if (input[1] < 0.103873) {
                if (input[11] < 2.298174) {
                    var42 = -0.20193456;
                } else {
                    var42 = 0.08614537;
                }
            } else {
                if (input[6] < -0.1262583) {
                    var42 = -0.102590814;
                } else {
                    if (input[10] < 0.1046727) {
                        var42 = -0.070514284;
                    } else {
                        var42 = 0.25778404;
                    }
                }
            }
        } else {
            if (input[13] < 0.05142874) {
                if (input[6] < -0.1659169) {
                    if (input[4] < 0.0182895) {
                        var42 = 0.21825907;
                    } else {
                        var42 = 0.009824695;
                    }
                } else {
                    if (input[0] < -0.2384457) {
                        var42 = -0.3104603;
                    } else {
                        var42 = -0.0508842;
                    }
                }
            } else {
                if (input[4] < 0.09587333) {
                    if (input[16] < 0.1072437) {
                        var42 = 0.2730581;
                    } else {
                        var42 = -0.0054785786;
                    }
                } else {
                    if (input[15] < 0.06237449) {
                        var42 = 0.013737703;
                    } else {
                        var42 = -0.07533386;
                    }
                }
            }
        }
    }
    var var43;
    if (input[0] < -0.07917222) {
        if (input[6] < 0.02063039) {
            if (input[14] < 2.32858) {
                if (input[5] < 2.27831) {
                    if (input[11] < 1.81685) {
                        var43 = 0.14596689;
                    } else {
                        var43 = -0.0017435185;
                    }
                } else {
                    if (input[0] < -0.3036071) {
                        var43 = -0.020828968;
                    } else {
                        var43 = -0.22771448;
                    }
                }
            } else {
                var43 = 0.19864516;
            }
        } else {
            if (input[9] < 0.2016405) {
                if (input[17] < 1.517141) {
                    if (input[9] < 0.1806368) {
                        var43 = -0.19054218;
                    } else {
                        var43 = 0.18110526;
                    }
                } else {
                    var43 = -0.29959524;
                }
            } else {
                var43 = 0.08443145;
            }
        }
    } else {
        if (input[11] < 1.806713) {
            if (input[10] < 0.5712649) {
                var43 = -0.23608837;
            } else {
                var43 = 0.10914183;
            }
        } else {
            if (input[11] < 2.306794) {
                if (input[6] < -0.01235539) {
                    var43 = 0.045201365;
                } else {
                    var43 = 0.26078388;
                }
            } else {
                var43 = -0.0016137216;
            }
        }
    }
    var var44;
    if (input[1] < -0.07148194) {
        if (input[3] < -0.2724238) {
            var44 = 0.22578427;
        } else {
            var44 = 0.010430833;
        }
    } else {
        if (input[10] < 0.01560943) {
            if (input[3] < -0.2874977) {
                if (input[2] < 2.29018) {
                    if (input[2] < 2.285258) {
                        var44 = 0.03007995;
                    } else {
                        var44 = -0.24643977;
                    }
                } else {
                    var44 = 0.2415062;
                }
            } else {
                if (input[0] < -0.3111897) {
                    if (input[5] < 2.085875) {
                        var44 = -0.04675252;
                    } else {
                        var44 = 0.20473789;
                    }
                } else {
                    var44 = -0.27016458;
                }
            }
        } else {
            if (input[9] < 0.04394805) {
                if (input[2] < 2.281997) {
                    if (input[1] < 0.3860047) {
                        var44 = -0.19178258;
                    } else {
                        var44 = 0.030081548;
                    }
                } else {
                    if (input[12] < 0.02323069) {
                        var44 = 0.05992921;
                    } else {
                        var44 = 0.41924116;
                    }
                }
            } else {
                if (input[12] < 0.05322614) {
                    if (input[6] < -0.07238885) {
                        var44 = -0.2565305;
                    } else {
                        var44 = 0.010959907;
                    }
                } else {
                    if (input[4] < 0.2009672) {
                        var44 = 0.09598757;
                    } else {
                        var44 = -0.03469975;
                    }
                }
            }
        }
    }
    var var45;
    if (input[11] < 2.036443) {
        if (input[11] < 1.947956) {
            if (input[0] < -0.3563769) {
                var45 = -0.29975882;
            } else {
                if (input[1] < 0.5141349) {
                    var45 = 0.23150317;
                } else {
                    if (input[17] < 1.62304) {
                        var45 = 0.014756311;
                    } else {
                        var45 = -0.24468777;
                    }
                }
            }
        } else {
            if (input[9] < -0.2708696) {
                var45 = 0.061332583;
            } else {
                if (input[14] < 1.976361) {
                    var45 = 0.28164968;
                } else {
                    var45 = 0.054448377;
                }
            }
        }
    } else {
        if (input[5] < 1.773148) {
            if (input[11] < 2.050715) {
                if (input[1] < 0.5076681) {
                    var45 = 0.20220749;
                } else {
                    var45 = -0.16967848;
                }
            } else {
                if (input[0] < -0.5282634) {
                    var45 = -0.5414344;
                } else {
                    if (input[13] < 0.5245752) {
                        var45 = -0.014383105;
                    } else {
                        var45 = -0.23345003;
                    }
                }
            }
        } else {
            if (input[8] < 1.560354) {
                var45 = 0.22434525;
            } else {
                if (input[9] < -0.2708696) {
                    var45 = 0.24678265;
                } else {
                    if (input[9] < -0.2663697) {
                        var45 = -0.25107795;
                    } else {
                        var45 = -0.0061885477;
                    }
                }
            }
        }
    }
    var var46;
    if (input[0] < -0.07917222) {
        if (input[12] < 0.1383272) {
            if (input[9] < 0.1876063) {
                if (input[9] < 0.06759129) {
                    if (input[6] < -0.09203893) {
                        var46 = -0.0068190265;
                    } else {
                        var46 = 0.17148623;
                    }
                } else {
                    if (input[16] < 0.03165092) {
                        var46 = 0.08723472;
                    } else {
                        var46 = -0.12464694;
                    }
                }
            } else {
                var46 = 0.24985613;
            }
        } else {
            if (input[17] < 2.094767) {
                if (input[14] < 1.576267) {
                    var46 = 0.17372711;
                } else {
                    if (input[9] < 0.1999109) {
                        var46 = -0.28885147;
                    } else {
                        var46 = -0.053535253;
                    }
                }
            } else {
                if (input[5] < 2.146864) {
                    if (input[10] < 0.1168249) {
                        var46 = -0.105615266;
                    } else {
                        var46 = 0.2653186;
                    }
                } else {
                    var46 = -0.16536453;
                }
            }
        }
    } else {
        if (input[11] < 1.806713) {
            if (input[10] < 0.5712649) {
                var46 = -0.19505465;
            } else {
                var46 = 0.09735642;
            }
        } else {
            if (input[11] < 2.312728) {
                if (input[6] < -0.01235539) {
                    var46 = 0.04200783;
                } else {
                    var46 = 0.24686952;
                }
            } else {
                var46 = -0.0055019;
            }
        }
    }
    var var47;
    if (input[11] < 2.036443) {
        if (input[11] < 1.947956) {
            if (input[0] < -0.3563769) {
                var47 = -0.2778948;
            } else {
                if (input[1] < 0.5123811) {
                    var47 = 0.23109089;
                } else {
                    if (input[17] < 1.62304) {
                        var47 = 0.029726567;
                    } else {
                        var47 = -0.21889368;
                    }
                }
            }
        } else {
            if (input[11] < 2.030539) {
                var47 = 0.27113956;
            } else {
                if (input[1] < 0.5183283) {
                    var47 = 0.13000663;
                } else {
                    var47 = 0.006727203;
                }
            }
        }
    } else {
        if (input[5] < 1.773148) {
            if (input[11] < 2.04423) {
                var47 = 0.09554514;
            } else {
                if (input[5] < 1.75968) {
                    var47 = 0.023045093;
                } else {
                    var47 = -0.34097096;
                }
            }
        } else {
            if (input[9] < -0.2708696) {
                var47 = 0.22792996;
            } else {
                if (input[11] < 2.056424) {
                    if (input[3] < -0.3540816) {
                        var47 = -0.16808563;
                    } else {
                        var47 = 0.2306135;
                    }
                } else {
                    if (input[0] < -0.3544745) {
                        var47 = 0.18666525;
                    } else {
                        var47 = -0.014129971;
                    }
                }
            }
        }
    }
    var var48;
    if (input[2] < 2.294523) {
        if (input[14] < 2.148541) {
            if (input[14] < 2.094266) {
                if (input[4] < 0.1522898) {
                    if (input[6] < -0.06129197) {
                        var48 = -0.20449881;
                    } else {
                        var48 = 0.16465804;
                    }
                } else {
                    if (input[10] < 0.4992206) {
                        var48 = 0.1482351;
                    } else {
                        var48 = -0.012960256;
                    }
                }
            } else {
                if (input[1] < 0.1334677) {
                    if (input[1] < 0.103873) {
                        var48 = -0.029192131;
                    } else {
                        var48 = 0.24281128;
                    }
                } else {
                    var48 = -0.16481134;
                }
            }
        } else {
            if (input[12] < 0.2208903) {
                if (input[11] < 2.347461) {
                    if (input[0] < -0.2271461) {
                        var48 = -0.2660184;
                    } else {
                        var48 = -0.0286099;
                    }
                } else {
                    if (input[0] < -0.2365361) {
                        var48 = 0.18631308;
                    } else {
                        var48 = 0.017064502;
                    }
                }
            } else {
                if (input[0] < -0.2425216) {
                    var48 = -0.1872632;
                } else {
                    var48 = 0.23123804;
                }
            }
        }
    } else {
        if (input[0] < -0.3111897) {
            var48 = 0.24931234;
        } else {
            if (input[15] < -0.02822228) {
                if (input[9] < 0.05920528) {
                    if (input[6] < -0.141463) {
                        var48 = -0.05273499;
                    } else {
                        var48 = 0.26570824;
                    }
                } else {
                    var48 = -0.21686356;
                }
            } else {
                if (input[11] < 2.418099) {
                    var48 = 0.25521305;
                } else {
                    if (input[2] < 2.510397) {
                        var48 = -0.1785175;
                    } else {
                        var48 = 0.058846045;
                    }
                }
            }
        }
    }
    var var49;
    if (input[1] < 0.5742223) {
        if (input[1] < 0.5353647) {
            if (input[16] < 0.6122356) {
                if (input[6] < -0.4281446) {
                    var49 = 0.23158608;
                } else {
                    if (input[15] < -0.2881549) {
                        var49 = -0.23110892;
                    } else {
                        var49 = -0.0044312114;
                    }
                }
            } else {
                if (input[10] < 0.6023796) {
                    if (input[13] < 0.5146555) {
                        var49 = -0.02356639;
                    } else {
                        var49 = 0.27358747;
                    }
                } else {
                    var49 = -0.00040406227;
                }
            }
        } else {
            if (input[16] < 0.4452705) {
                if (input[0] < -0.3675452) {
                    if (input[2] < 2.016878) {
                        var49 = 0.09615121;
                    } else {
                        var49 = -0.23660871;
                    }
                } else {
                    if (input[2] < 1.782735) {
                        var49 = -0.10946674;
                    } else {
                        var49 = 0.19432312;
                    }
                }
            } else {
                if (input[10] < 0.5938036) {
                    if (input[7] < 0.7471417) {
                        var49 = -0.26910818;
                    } else {
                        var49 = 0.03840551;
                    }
                } else {
                    if (input[15] < -0.2953774) {
                        var49 = -0.12945364;
                    } else {
                        var49 = 0.080689624;
                    }
                }
            }
        }
    } else {
        if (input[6] < 0.02063039) {
            if (input[13] < 0.7616876) {
                if (input[2] < 2.020056) {
                    var49 = 0.2539562;
                } else {
                    var49 = 0.068776436;
                }
            } else {
                if (input[2] < 1.992771) {
                    if (input[7] < 0.9890397) {
                        var49 = -0.0009637455;
                    } else {
                        var49 = -0.119091265;
                    }
                } else {
                    var49 = 0.120874636;
                }
            }
        } else {
            var49 = -0.108414605;
        }
    }
    var var50;
    if (input[1] < -0.05158274) {
        if (input[3] < -0.2713766) {
            var50 = 0.23997565;
        } else {
            var50 = -0.060884092;
        }
    } else {
        if (input[2] < 2.041447) {
            if (input[11] < 2.056424) {
                if (input[0] < -0.3585004) {
                    if (input[13] < 0.2943994) {
                        var50 = -0.24143572;
                    } else {
                        var50 = -0.003929974;
                    }
                } else {
                    if (input[3] < -0.07832652) {
                        var50 = 0.23359726;
                    } else {
                        var50 = -0.0131540075;
                    }
                }
            } else {
                if (input[14] < 1.823786) {
                    if (input[11] < 2.071669) {
                        var50 = -0.10070323;
                    } else {
                        var50 = 0.0132433;
                    }
                } else {
                    if (input[1] < 0.5554234) {
                        var50 = 0.27015808;
                    } else {
                        var50 = -0.0151531715;
                    }
                }
            }
        } else {
            if (input[5] < 1.828483) {
                if (input[11] < 2.09717) {
                    if (input[3] < -0.325475) {
                        var50 = -0.30766165;
                    } else {
                        var50 = -0.034202613;
                    }
                } else {
                    var50 = 0.21548302;
                }
            } else {
                if (input[9] < -0.0358799) {
                    if (input[11] < 2.06484) {
                        var50 = -0.089645475;
                    } else {
                        var50 = 0.2288532;
                    }
                } else {
                    if (input[11] < 2.281612) {
                        var50 = -0.14258264;
                    } else {
                        var50 = -0.0037903115;
                    }
                }
            }
        }
    }
    var var51;
    if (input[0] < -0.09013086) {
        if (input[9] < 0.1758749) {
            if (input[8] < 1.556111) {
                if (input[0] < -0.09808612) {
                    if (input[12] < -0.09304199) {
                        var51 = 0.008311803;
                    } else {
                        var51 = 0.23460002;
                    }
                } else {
                    var51 = -0.049622953;
                }
            } else {
                if (input[14] < 2.321254) {
                    if (input[0] < -0.214659) {
                        var51 = 0.001312703;
                    } else {
                        var51 = -0.12072902;
                    }
                } else {
                    var51 = 0.1981495;
                }
            }
        } else {
            if (input[4] < 0.5077098) {
                var51 = -0.25001475;
            } else {
                var51 = -0.06719799;
            }
        }
    } else {
        if (input[2] < 1.801698) {
            if (input[15] < 0.0760949) {
                if (input[6] < -0.001090583) {
                    var51 = 0.18599007;
                } else {
                    if (input[9] < 0.1907522) {
                        var51 = -0.14662182;
                    } else {
                        var51 = 0.11785018;
                    }
                }
            } else {
                if (input[4] < 0.4855815) {
                    var51 = -0.22947583;
                } else {
                    var51 = 0.08278887;
                }
            }
        } else {
            if (input[9] < 0.1779871) {
                var51 = -0.16067559;
            } else {
                if (input[10] < 0.1714936) {
                    var51 = 0.0037424928;
                } else {
                    var51 = 0.27536044;
                }
            }
        }
    }
    var var52;
    if (input[7] < 0.2780622) {
        if (input[11] < 2.325156) {
            if (input[10] < 0.1683377) {
                if (input[7] < -0.04305273) {
                    if (input[1] < 0.1096714) {
                        var52 = -0.07099013;
                    } else {
                        var52 = 0.16519156;
                    }
                } else {
                    if (input[3] < -0.2770397) {
                        var52 = 0.17866719;
                    } else {
                        var52 = -0.21433526;
                    }
                }
            } else {
                if (input[11] < 2.060711) {
                    if (input[2] < 2.032955) {
                        var52 = 0.033020295;
                    } else {
                        var52 = -0.20552781;
                    }
                } else {
                    var52 = 0.28161696;
                }
            }
        } else {
            if (input[2] < 2.388284) {
                if (input[13] < 0.01629428) {
                    var52 = 0.007956419;
                } else {
                    var52 = 0.2791766;
                }
            } else {
                if (input[2] < 2.526545) {
                    var52 = -0.18115273;
                } else {
                    var52 = 0.06102234;
                }
            }
        }
    } else {
        if (input[2] < 2.331598) {
            if (input[11] < 2.04423) {
                if (input[9] < 0.1684542) {
                    if (input[10] < 0.5712649) {
                        var52 = 0.26894972;
                    } else {
                        var52 = 0.025231276;
                    }
                } else {
                    if (input[9] < 0.1806368) {
                        var52 = -0.19012971;
                    } else {
                        var52 = 0.13297816;
                    }
                }
            } else {
                if (input[9] < 0.06759129) {
                    if (input[3] < -0.2215574) {
                        var52 = -0.074385606;
                    } else {
                        var52 = 0.10046732;
                    }
                } else {
                    if (input[9] < 0.1937793) {
                        var52 = -0.27418274;
                    } else {
                        var52 = -0.012430909;
                    }
                }
            }
        } else {
            if (input[2] < 2.416957) {
                var52 = 0.2220385;
            } else {
                var52 = 0.01578734;
            }
        }
    }
    var var53;
    if (input[8] < 1.582411) {
        if (input[15] < 0.07397691) {
            if (input[1] < 0.4985326) {
                if (input[1] < 0.495198) {
                    if (input[0] < -0.5282634) {
                        var53 = 0.016638482;
                    } else {
                        var53 = 0.19716004;
                    }
                } else {
                    var53 = -0.25147244;
                }
            } else {
                if (input[1] < 0.5263088) {
                    if (input[0] < -0.3553542) {
                        var53 = 0.040260956;
                    } else {
                        var53 = 0.26939058;
                    }
                } else {
                    if (input[2] < 1.828053) {
                        var53 = 0.13961926;
                    } else {
                        var53 = -0.05593324;
                    }
                }
            }
        } else {
            if (input[9] < 0.1844837) {
                var53 = -0.21973118;
            } else {
                if (input[1] < 0.5353647) {
                    var53 = -0.08217469;
                } else {
                    var53 = 0.1509343;
                }
            }
        }
    } else {
        if (input[14] < 1.863186) {
            if (input[7] < 0.7429302) {
                if (input[9] < 0.1937793) {
                    if (input[1] < 0.4907506) {
                        var53 = 0.013983508;
                    } else {
                        var53 = -0.21728519;
                    }
                } else {
                    var53 = 0.12657075;
                }
            } else {
                if (input[2] < 2.020056) {
                    var53 = 0.21407835;
                } else {
                    var53 = -0.07679834;
                }
            }
        } else {
            if (input[8] < 1.692519) {
                if (input[16] < 0.4547636) {
                    var53 = 0.25427762;
                } else {
                    var53 = 0.057917636;
                }
            } else {
                if (input[3] < -0.3666009) {
                    if (input[1] < 0.5159065) {
                        var53 = 0.14536734;
                    } else {
                        var53 = -0.17010354;
                    }
                } else {
                    if (input[3] < -0.2925492) {
                        var53 = 0.19074103;
                    } else {
                        var53 = -0.017278621;
                    }
                }
            }
        }
    }
    var var54;
    if (input[12] < 0.1383272) {
        if (input[0] < -0.08617444) {
            if (input[9] < 0.1731942) {
                if (input[6] < -0.09203893) {
                    if (input[3] < -0.2072623) {
                        var54 = 0.011382728;
                    } else {
                        var54 = -0.16374873;
                    }
                } else {
                    if (input[2] < 2.287186) {
                        var54 = 0.02822299;
                    } else {
                        var54 = 0.26349694;
                    }
                }
            } else {
                if (input[1] < 0.5191073) {
                    var54 = 0.07717196;
                } else {
                    var54 = -0.21998014;
                }
            }
        } else {
            if (input[17] < 1.333883) {
                var54 = 0.0108402865;
            } else {
                var54 = 0.21093069;
            }
        }
    } else {
        if (input[17] < 2.094767) {
            if (input[6] < -0.01235539) {
                if (input[5] < 1.644328) {
                    var54 = -0.049013402;
                } else {
                    var54 = -0.25710517;
                }
            } else {
                if (input[11] < 1.792652) {
                    var54 = -0.18148424;
                } else {
                    if (input[3] < -0.05717978) {
                        var54 = -0.040464446;
                    } else {
                        var54 = 0.19566815;
                    }
                }
            }
        } else {
            if (input[11] < 2.358479) {
                if (input[9] < 0.06349123) {
                    var54 = -0.0949745;
                } else {
                    var54 = 0.22794192;
                }
            } else {
                if (input[2] < 2.500825) {
                    var54 = -0.1572027;
                } else {
                    var54 = 0.00008972021;
                }
            }
        }
    }
    var var55;
    if (input[1] < 0.5742223) {
        if (input[2] < 2.294523) {
            if (input[14] < 2.156288) {
                if (input[15] < -0.04728865) {
                    if (input[3] < -0.2647325) {
                        var55 = 0.007721804;
                    } else {
                        var55 = -0.2608862;
                    }
                } else {
                    if (input[9] < 0.04394805) {
                        var55 = 0.27597818;
                    } else {
                        var55 = 0.013096815;
                    }
                }
            } else {
                if (input[0] < -0.2398767) {
                    var55 = -0.23187588;
                } else {
                    if (input[10] < 0.1834308) {
                        var55 = 0.02325046;
                    } else {
                        var55 = -0.272698;
                    }
                }
            }
        } else {
            if (input[0] < -0.3103853) {
                var55 = 0.21727191;
            } else {
                if (input[15] < -0.05811152) {
                    if (input[9] < -0.02180291) {
                        var55 = 0.071573645;
                    } else {
                        var55 = -0.17344135;
                    }
                } else {
                    if (input[9] < 0.07073097) {
                        var55 = 0.27925172;
                    } else {
                        var55 = -0.033681978;
                    }
                }
            }
        }
    } else {
        if (input[11] < 1.824765) {
            if (input[1] < 0.615223) {
                var55 = 0.033714112;
            } else {
                var55 = -0.10518106;
            }
        } else {
            if (input[3] < -0.5227023) {
                var55 = -0.06527832;
            } else {
                var55 = 0.21305782;
            }
        }
    }
    var var56;
    if (input[1] < -0.05158274) {
        if (input[3] < -0.2713766) {
            var56 = 0.20003444;
        } else {
            var56 = -0.01582392;
        }
    } else {
        if (input[10] < 0.01560943) {
            if (input[3] < -0.2874977) {
                if (input[4] < -0.2031943) {
                    if (input[5] < 2.103864) {
                        var56 = -0.16510548;
                    } else {
                        var56 = 0.018277029;
                    }
                } else {
                    var56 = 0.20937371;
                }
            } else {
                if (input[0] < -0.3111897) {
                    var56 = 0.062524445;
                } else {
                    var56 = -0.25539643;
                }
            }
        } else {
            if (input[12] < 0.1040334) {
                if (input[10] < 0.1191656) {
                    if (input[17] < 1.889072) {
                        var56 = -0.07512358;
                    } else {
                        var56 = 0.1780626;
                    }
                } else {
                    if (input[1] < 0.1174339) {
                        var56 = -0.23754717;
                    } else {
                        var56 = 0.014252675;
                    }
                }
            } else {
                if (input[10] < 0.1252251) {
                    if (input[15] < 0.06511871) {
                        var56 = -0.23600289;
                    } else {
                        var56 = -0.027700426;
                    }
                } else {
                    if (input[8] < 2.109722) {
                        var56 = -0.027878055;
                    } else {
                        var56 = 0.1659312;
                    }
                }
            }
        }
    }
    var var57;
    if (input[1] < -0.05158274) {
        if (input[3] < -0.2713766) {
            var57 = 0.1842916;
        } else {
            var57 = -0.013260691;
        }
    } else {
        if (input[1] < 0.103873) {
            if (input[2] < 2.287186) {
                if (input[11] < 2.327532) {
                    if (input[9] < 0.03975521) {
                        var57 = -0.050844718;
                    } else {
                        var57 = -0.23913443;
                    }
                } else {
                    var57 = 0.072502986;
                }
            } else {
                if (input[15] < -0.03286098) {
                    if (input[3] < -0.2874977) {
                        var57 = 0.12292593;
                    } else {
                        var57 = -0.096110545;
                    }
                } else {
                    var57 = 0.2619066;
                }
            }
        } else {
            if (input[16] < -0.06901158) {
                if (input[9] < 0.07905138) {
                    if (input[1] < 0.1096714) {
                        var57 = 0.012163395;
                    } else {
                        var57 = 0.25076494;
                    }
                } else {
                    var57 = -0.12300125;
                }
            } else {
                if (input[13] < 0.01163872) {
                    if (input[10] < 0.1252251) {
                        var57 = -0.2178901;
                    } else {
                        var57 = -0.049964853;
                    }
                } else {
                    if (input[3] < -0.3285684) {
                        var57 = -0.024532417;
                    } else {
                        var57 = 0.023646673;
                    }
                }
            }
        }
    }
    var var58;
    if (input[9] < -0.08496729) {
        if (input[12] < -0.09728467) {
            if (input[11] < 2.09717) {
                if (input[9] < -0.1113536) {
                    if (input[15] < -0.275564) {
                        var58 = -0.018375764;
                    } else {
                        var58 = 0.20945378;
                    }
                } else {
                    if (input[10] < 0.5245819) {
                        var58 = 0.057697684;
                    } else {
                        var58 = -0.26682508;
                    }
                }
            } else {
                var58 = 0.21918313;
            }
        } else {
            if (input[4] < 0.563706) {
                var58 = 0.24383652;
            } else {
                var58 = 0.06092866;
            }
        }
    } else {
        if (input[15] < -0.1693783) {
            var58 = -0.17595553;
        } else {
            if (input[6] < -0.2397503) {
                if (input[4] < 0.125505) {
                    var58 = -0.032735832;
                } else {
                    var58 = 0.23541197;
                }
            } else {
                if (input[3] < -0.3272809) {
                    if (input[12] < -0.01933098) {
                        var58 = -0.20158583;
                    } else {
                        var58 = -0.021053897;
                    }
                } else {
                    if (input[12] < -0.07729158) {
                        var58 = -0.1388507;
                    } else {
                        var58 = 0.007819105;
                    }
                }
            }
        }
    }
    var var59;
    if (input[2] < 2.294523) {
        if (input[2] < 2.285258) {
            if (input[2] < 2.28058) {
                if (input[17] < 1.971369) {
                    if (input[14] < 2.099924) {
                        var59 = -0.008003508;
                    } else {
                        var59 = 0.14527577;
                    }
                } else {
                    if (input[11] < 2.277228) {
                        var59 = 0.09999172;
                    } else {
                        var59 = -0.1638632;
                    }
                }
            } else {
                if (input[3] < -0.2020435) {
                    if (input[6] < -0.1279499) {
                        var59 = -0.0061120093;
                    } else {
                        var59 = 0.32807824;
                    }
                } else {
                    var59 = -0.13187873;
                }
            }
        } else {
            if (input[6] < -0.07713617) {
                if (input[8] < 2.102454) {
                    if (input[1] < 0.103873) {
                        var59 = -0.08040433;
                    } else {
                        var59 = -0.28350008;
                    }
                } else {
                    var59 = -0.0023140302;
                }
            } else {
                if (input[12] < 0.1082703) {
                    var59 = 0.2335049;
                } else {
                    var59 = -0.06678647;
                }
            }
        }
    } else {
        if (input[10] < 0.2133373) {
            if (input[0] < -0.2249129) {
                if (input[6] < -0.145147) {
                    if (input[9] < -0.02180291) {
                        var59 = 0.118617125;
                    } else {
                        var59 = -0.11707892;
                    }
                } else {
                    var59 = 0.24189553;
                }
            } else {
                if (input[12] < 0.06762778) {
                    var59 = -0.20475669;
                } else {
                    if (input[2] < 2.414567) {
                        var59 = 0.13333747;
                    } else {
                        var59 = -0.12417941;
                    }
                }
            }
        } else {
            var59 = 0.18542938;
        }
    }
    var var60;
    if (input[0] < -0.05553738) {
        if (input[0] < -0.214659) {
            if (input[6] < -0.07713617) {
                if (input[10] < 0.5269575) {
                    if (input[10] < 0.4992206) {
                        var60 = 0.000871173;
                    } else {
                        var60 = -0.14631039;
                    }
                } else {
                    if (input[12] < -0.07729158) {
                        var60 = 0.008843558;
                    } else {
                        var60 = 0.18600671;
                    }
                }
            } else {
                if (input[13] < -0.03759649) {
                    var60 = -0.17003268;
                } else {
                    if (input[3] < -0.1923062) {
                        var60 = -0.042744987;
                    } else {
                        var60 = 0.203953;
                    }
                }
            }
        } else {
            if (input[1] < 0.1596987) {
                var60 = -0.24531548;
            } else {
                if (input[9] < 0.1656477) {
                    if (input[16] < 0.1441405) {
                        var60 = 0.029913321;
                    } else {
                        var60 = 0.19870809;
                    }
                } else {
                    if (input[0] < -0.107618) {
                        var60 = -0.20847227;
                    } else {
                        var60 = -0.0048135314;
                    }
                }
            }
        }
    } else {
        var60 = 0.12949675;
    }
    var var61;
    if (input[6] < -0.2258994) {
        if (input[14] < 2.159811) {
            if (input[0] < -0.3477351) {
                if (input[14] < 1.933871) {
                    if (input[13] < 0.3247804) {
                        var61 = -0.16342685;
                    } else {
                        var61 = 0.022747356;
                    }
                } else {
                    if (input[7] < 0.1905639) {
                        var61 = 0.0119411545;
                    } else {
                        var61 = 0.22673771;
                    }
                }
            } else {
                var61 = 0.20445287;
            }
        } else {
            var61 = -0.14622696;
        }
    } else {
        if (input[3] < -0.3272809) {
            if (input[10] < 0.5365557) {
                var61 = -0.18898427;
            } else {
                var61 = -0.054098886;
            }
        } else {
            if (input[3] < -0.2749218) {
                if (input[12] < -0.06266712) {
                    if (input[9] < -0.09095858) {
                        var61 = 0.09193502;
                    } else {
                        var61 = -0.09561143;
                    }
                } else {
                    if (input[9] < -0.0206003) {
                        var61 = 0.24744743;
                    } else {
                        var61 = 0.038319767;
                    }
                }
            } else {
                if (input[6] < -0.1262583) {
                    if (input[2] < 2.331598) {
                        var61 = -0.16896366;
                    } else {
                        var61 = 0.14060803;
                    }
                } else {
                    if (input[0] < -0.2451466) {
                        var61 = -0.20152292;
                    } else {
                        var61 = 0.016432784;
                    }
                }
            }
        }
    }
    var var62;
    if (input[12] < -0.2299698) {
        var62 = 0.1492728;
    } else {
        if (input[15] < -0.3058789) {
            var62 = -0.16997735;
        } else {
            if (input[10] < 0.6107512) {
                if (input[15] < -0.2953774) {
                    if (input[10] < 0.5564461) {
                        var62 = 0.22241734;
                    } else {
                        var62 = 0.0008065326;
                    }
                } else {
                    if (input[15] < -0.2881549) {
                        var62 = -0.21124342;
                    } else {
                        var62 = -0.0021374153;
                    }
                }
            } else {
                if (input[17] < 1.460249) {
                    var62 = -0.043044716;
                } else {
                    if (input[3] < -0.5127777) {
                        var62 = 0.06308192;
                    } else {
                        var62 = 0.22735156;
                    }
                }
            }
        }
    }
    var var63;
    if (input[9] < 0.04394805) {
        if (input[15] < -0.04728865) {
            if (input[14] < 2.169668) {
                if (input[3] < -0.2686606) {
                    if (input[2] < 2.054677) {
                        var63 = -0.0051863412;
                    } else {
                        var63 = 0.110947244;
                    }
                } else {
                    if (input[9] < 0.04162003) {
                        var63 = -0.22660658;
                    } else {
                        var63 = 0.09162643;
                    }
                }
            } else {
                if (input[10] < 0.01949771) {
                    if (input[16] < 0.5004749) {
                        var63 = 0.05800151;
                    } else {
                        var63 = -0.11839053;
                    }
                } else {
                    var63 = 0.23126271;
                }
            }
        } else {
            if (input[13] < 0.1810747) {
                var63 = -0.023205414;
            } else {
                var63 = 0.28396723;
            }
        }
    } else {
        if (input[12] < 0.05322614) {
            if (input[1] < 0.08037997) {
                var63 = 0.035651848;
            } else {
                if (input[10] < 0.1683377) {
                    var63 = -0.25512686;
                } else {
                    if (input[9] < 0.06759129) {
                        var63 = 0.045587525;
                    } else {
                        var63 = -0.14622557;
                    }
                }
            }
        } else {
            if (input[16] < 0.4452705) {
                if (input[0] < -0.214659) {
                    if (input[0] < -0.2425216) {
                        var63 = -0.16347834;
                    } else {
                        var63 = 0.13831387;
                    }
                } else {
                    if (input[0] < -0.107618) {
                        var63 = -0.12946561;
                    } else {
                        var63 = 0.06740358;
                    }
                }
            } else {
                if (input[11] < 2.347461) {
                    if (input[0] < -0.09013086) {
                        var63 = -0.259454;
                    } else {
                        var63 = -0.018900432;
                    }
                } else {
                    var63 = 0.15280987;
                }
            }
        }
    }
    var var64;
    if (input[13] < -0.09889338) {
        if (input[6] < -0.2193533) {
            var64 = 0.03915348;
        } else {
            var64 = -0.15750329;
        }
    } else {
        if (input[1] < 0.003234064) {
            if (input[3] < -0.2700669) {
                var64 = 0.22101901;
            } else {
                var64 = -0.080548555;
            }
        } else {
            if (input[10] < 0.01560943) {
                var64 = -0.18285218;
            } else {
                if (input[3] < -0.05204852) {
                    if (input[11] < 2.036443) {
                        var64 = 0.07841445;
                    } else {
                        var64 = -0.00301036;
                    }
                } else {
                    if (input[9] < 0.1844837) {
                        var64 = -0.21845679;
                    } else {
                        var64 = 0.049080454;
                    }
                }
            }
        }
    }
    var var65;
    if (input[9] < -0.1113536) {
        if (input[11] < 2.06484) {
            if (input[15] < -0.275564) {
                if (input[11] < 2.030539) {
                    var65 = 0.17348221;
                } else {
                    if (input[14] < 1.933871) {
                        var65 = -0.12216941;
                    } else {
                        var65 = 0.09879013;
                    }
                }
            } else {
                if (input[8] < 1.705576) {
                    var65 = 0.19812082;
                } else {
                    var65 = 0.03639617;
                }
            }
        } else {
            var65 = 0.23909143;
        }
    } else {
        if (input[15] < -0.1832269) {
            if (input[1] < 0.510483) {
                var65 = -0.027459543;
            } else {
                var65 = -0.19907567;
            }
        } else {
            if (input[16] < 0.5004749) {
                if (input[9] < -0.06373662) {
                    if (input[3] < -0.3424572) {
                        var65 = 0.022249416;
                    } else {
                        var65 = 0.21413606;
                    }
                } else {
                    if (input[0] < -0.3585004) {
                        var65 = -0.112422235;
                    } else {
                        var65 = 0.014687459;
                    }
                }
            } else {
                if (input[7] < 0.5730495) {
                    if (input[10] < 0.1812043) {
                        var65 = 0.034013003;
                    } else {
                        var65 = -0.1590225;
                    }
                } else {
                    if (input[3] < -0.3129203) {
                        var65 = -0.09638476;
                    } else {
                        var65 = 0.076322794;
                    }
                }
            }
        }
    }
    var var66;
    if (input[13] < 0.07494086) {
        if (input[9] < 0.06198429) {
            if (input[2] < 2.29018) {
                if (input[6] < -0.06996595) {
                    if (input[10] < 0.1147564) {
                        var66 = -0.07257523;
                    } else {
                        var66 = -0.28558677;
                    }
                } else {
                    var66 = 0.09033977;
                }
            } else {
                if (input[10] < -0.03337649) {
                    var66 = 0.13120116;
                } else {
                    var66 = -0.03617743;
                }
            }
        } else {
            if (input[16] < -0.02818193) {
                if (input[12] < 0.08469307) {
                    var66 = 0.21474005;
                } else {
                    if (input[1] < 0.1233349) {
                        var66 = -0.15117648;
                    } else {
                        var66 = 0.13797109;
                    }
                }
            } else {
                if (input[15] < 0.05848103) {
                    var66 = -0.17343172;
                } else {
                    var66 = -0.022580743;
                }
            }
        }
    } else {
        if (input[9] < 0.06058512) {
            if (input[6] < -0.09203893) {
                if (input[3] < -0.2072623) {
                    if (input[15] < -0.05811152) {
                        var66 = 0.0061177397;
                    } else {
                        var66 = 0.14740473;
                    }
                } else {
                    var66 = -0.16576868;
                }
            } else {
                if (input[17] < 1.98928) {
                    var66 = 0.2617413;
                } else {
                    var66 = 0.06659938;
                }
            }
        } else {
            if (input[9] < 0.08489256) {
                if (input[3] < -0.2294678) {
                    var66 = 0.15854795;
                } else {
                    if (input[1] < 0.1837042) {
                        var66 = -0.22939806;
                    } else {
                        var66 = -0.017336756;
                    }
                }
            } else {
                if (input[9] < 0.158386) {
                    var66 = 0.1723993;
                } else {
                    if (input[0] < -0.107618) {
                        var66 = -0.19740374;
                    } else {
                        var66 = 0.00966924;
                    }
                }
            }
        }
    }
    var var67;
    if (input[6] < -0.2258994) {
        if (input[8] < 1.585759) {
            if (input[14] < 1.85563) {
                if (input[11] < 2.060711) {
                    var67 = 0.22537997;
                } else {
                    var67 = 0.06278054;
                }
            } else {
                var67 = -0.047287058;
            }
        } else {
            if (input[14] < 1.846167) {
                if (input[13] < 0.5697368) {
                    if (input[9] < -0.2663697) {
                        var67 = -0.278457;
                    } else {
                        var67 = -0.09280646;
                    }
                } else {
                    if (input[11] < 2.04423) {
                        var67 = 0.1829958;
                    } else {
                        var67 = -0.0064162835;
                    }
                }
            } else {
                if (input[15] < -0.178102) {
                    if (input[12] < -0.1171558) {
                        var67 = 0.05575261;
                    } else {
                        var67 = -0.15988919;
                    }
                } else {
                    if (input[10] < 0.5365557) {
                        var67 = 0.16705331;
                    } else {
                        var67 = -0.047562577;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.3272809) {
            if (input[2] < 2.016878) {
                var67 = -0.03159107;
            } else {
                var67 = -0.16587575;
            }
        } else {
            if (input[13] < -0.09889338) {
                if (input[3] < -0.2874977) {
                    var67 = -0.014327353;
                } else {
                    var67 = -0.14728254;
                }
            } else {
                if (input[3] < -0.2700669) {
                    if (input[16] < 0.653627) {
                        var67 = 0.10108997;
                    } else {
                        var67 = -0.11679194;
                    }
                } else {
                    if (input[6] < -0.1372999) {
                        var67 = -0.14843152;
                    } else {
                        var67 = 0.00049733825;
                    }
                }
            }
        }
    }
    var var68;
    if (input[4] < -0.05195121) {
        if (input[9] < 0.06349123) {
            if (input[3] < -0.2874977) {
                if (input[10] < -0.04610868) {
                    var68 = -0.121452376;
                } else {
                    var68 = 0.09180077;
                }
            } else {
                var68 = -0.22203292;
            }
        } else {
            if (input[12] < 0.08321148) {
                var68 = 0.1774733;
            } else {
                var68 = -0.114222445;
            }
        }
    } else {
        if (input[2] < 1.801698) {
            if (input[12] < 0.1383272) {
                if (input[1] < 0.5392094) {
                    var68 = 0.14386605;
                } else {
                    if (input[6] < 0.009253022) {
                        var68 = 0.033399593;
                    } else {
                        var68 = -0.12707753;
                    }
                }
            } else {
                if (input[4] < 0.4855815) {
                    var68 = -0.22195035;
                } else {
                    var68 = 0.04586543;
                }
            }
        } else {
            if (input[0] < -0.09013086) {
                if (input[9] < 0.1731942) {
                    if (input[8] < 1.556111) {
                        var68 = 0.13900846;
                    } else {
                        var68 = 0.0049597602;
                    }
                } else {
                    if (input[12] < 0.1473363) {
                        var68 = -0.20583545;
                    } else {
                        var68 = -0.056729082;
                    }
                }
            } else {
                if (input[9] < 0.1779871) {
                    var68 = -0.098305136;
                } else {
                    if (input[10] < 0.2047498) {
                        var68 = 0.002788527;
                    } else {
                        var68 = 0.23896416;
                    }
                }
            }
        }
    }
    var var69;
    if (input[1] < 0.5742223) {
        if (input[1] < 0.5408822) {
            if (input[16] < 0.6718271) {
                if (input[6] < -0.4281446) {
                    var69 = 0.17602117;
                } else {
                    if (input[15] < -0.275564) {
                        var69 = -0.10183772;
                    } else {
                        var69 = -0.0020264338;
                    }
                }
            } else {
                if (input[1] < 0.492957) {
                    var69 = 0.02361873;
                } else {
                    var69 = 0.22376423;
                }
            }
        } else {
            if (input[14] < 1.87659) {
                if (input[0] < -0.08107927) {
                    if (input[4] < 0.5933139) {
                        var69 = -0.058531396;
                    } else {
                        var69 = -0.18643184;
                    }
                } else {
                    var69 = 0.052798085;
                }
            } else {
                if (input[4] < 0.3729476) {
                    var69 = -0.015972069;
                } else {
                    var69 = 0.12560113;
                }
            }
        }
    } else {
        if (input[2] < 1.809612) {
            var69 = -0.031963997;
        } else {
            if (input[3] < -0.5227023) {
                var69 = -0.052047532;
            } else {
                var69 = 0.19667704;
            }
        }
    }
    var var70;
    if (input[8] < 1.726125) {
        if (input[10] < 0.4992206) {
            var70 = 0.224396;
        } else {
            if (input[14] < 1.871075) {
                if (input[11] < 2.09717) {
                    if (input[2] < 2.045773) {
                        var70 = -0.0023659063;
                    } else {
                        var70 = -0.18998191;
                    }
                } else {
                    var70 = 0.18444821;
                }
            } else {
                if (input[12] < -0.1898781) {
                    var70 = -0.03690676;
                } else {
                    var70 = 0.23147094;
                }
            }
        }
    } else {
        if (input[3] < -0.3482999) {
            if (input[11] < 2.058228) {
                if (input[6] < -0.4150616) {
                    if (input[12] < -0.2227753) {
                        var70 = -0.11860217;
                    } else {
                        var70 = 0.13927408;
                    }
                } else {
                    if (input[9] < -0.04198604) {
                        var70 = -0.19497061;
                    } else {
                        var70 = 0.017231556;
                    }
                }
            } else {
                var70 = 0.113428265;
            }
        } else {
            if (input[10] < 0.3939797) {
                if (input[6] < -0.09937902) {
                    if (input[5] < 2.11611) {
                        var70 = -0.11844843;
                    } else {
                        var70 = 0.019958608;
                    }
                } else {
                    if (input[17] < 1.98928) {
                        var70 = 0.07836226;
                    } else {
                        var70 = -0.06924162;
                    }
                }
            } else {
                var70 = 0.19827645;
            }
        }
    }
    var var71;
    if (input[9] < -0.08262152) {
        if (input[10] < 0.4992206) {
            var71 = 0.21521996;
        } else {
            if (input[5] < 1.773148) {
                if (input[13] < 0.5641978) {
                    if (input[11] < 2.049083) {
                        var71 = -0.007164916;
                    } else {
                        var71 = -0.293013;
                    }
                } else {
                    var71 = 0.12430715;
                }
            } else {
                if (input[5] < 1.813554) {
                    if (input[16] < 0.6838672) {
                        var71 = 0.24304383;
                    } else {
                        var71 = -0.08814771;
                    }
                } else {
                    if (input[12] < -0.137949) {
                        var71 = 0.055089254;
                    } else {
                        var71 = -0.12686889;
                    }
                }
            }
        }
    } else {
        if (input[15] < -0.1693783) {
            var71 = -0.14691418;
        } else {
            if (input[16] < 0.5004749) {
                if (input[10] < 0.1683377) {
                    if (input[1] < 0.1400709) {
                        var71 = 0.004680628;
                    } else {
                        var71 = -0.20165318;
                    }
                } else {
                    if (input[15] < 0.07397691) {
                        var71 = 0.08707707;
                    } else {
                        var71 = -0.05503023;
                    }
                }
            } else {
                if (input[11] < 2.347461) {
                    if (input[7] < 0.5788185) {
                        var71 = -0.15868518;
                    } else {
                        var71 = 0.025693906;
                    }
                } else {
                    if (input[15] < -0.003858185) {
                        var71 = -0.05487631;
                    } else {
                        var71 = 0.16719092;
                    }
                }
            }
        }
    }
    var var72;
    if (input[9] < 0.04394805) {
        if (input[0] < -0.234324) {
            if (input[9] < 0.03013747) {
                if (input[2] < 2.32985) {
                    if (input[1] < 0.3860047) {
                        var72 = -0.062006243;
                    } else {
                        var72 = 0.024870647;
                    }
                } else {
                    var72 = 0.1563974;
                }
            } else {
                var72 = -0.1630512;
            }
        } else {
            if (input[12] < 0.02323069) {
                var72 = -0.11559104;
            } else {
                if (input[14] < 2.077038) {
                    var72 = 0.06822494;
                } else {
                    var72 = 0.27621016;
                }
            }
        }
    } else {
        if (input[12] < 0.05322614) {
            if (input[1] < 0.08037997) {
                var72 = 0.012735161;
            } else {
                if (input[13] < 0.07494086) {
                    var72 = -0.23511285;
                } else {
                    if (input[16] < 0.2825119) {
                        var72 = 0.04457464;
                    } else {
                        var72 = -0.1459165;
                    }
                }
            }
        } else {
            if (input[4] < 0.1646299) {
                if (input[8] < 1.933403) {
                    if (input[14] < 2.099924) {
                        var72 = 0.05696218;
                    } else {
                        var72 = 0.2357514;
                    }
                } else {
                    if (input[11] < 2.298174) {
                        var72 = -0.12783828;
                    } else {
                        var72 = 0.06540689;
                    }
                }
            } else {
                if (input[11] < 2.347461) {
                    if (input[0] < -0.107618) {
                        var72 = -0.17744994;
                    } else {
                        var72 = 0.011536119;
                    }
                } else {
                    if (input[9] < 0.07320127) {
                        var72 = 0.17837602;
                    } else {
                        var72 = -0.004868162;
                    }
                }
            }
        }
    }
    var var73;
    if (input[1] < -0.05158274) {
        var73 = 0.11547126;
    } else {
        if (input[3] < -0.02207346) {
            if (input[9] < 0.1892311) {
                if (input[3] < -0.06249162) {
                    if (input[8] < 1.585759) {
                        var73 = 0.07970919;
                    } else {
                        var73 = -0.008864728;
                    }
                } else {
                    if (input[10] < 0.5978668) {
                        var73 = -0.1484595;
                    } else {
                        var73 = 0.061580677;
                    }
                }
            } else {
                if (input[1] < 0.4730671) {
                    var73 = -0.07201409;
                } else {
                    var73 = 0.18448491;
                }
            }
        } else {
            var73 = -0.109923705;
        }
    }
    var var74;
    if (input[2] < 2.294523) {
        if (input[0] < -0.05553738) {
            if (input[6] < -0.2258994) {
                if (input[12] < -0.1004562) {
                    if (input[12] < -0.1171558) {
                        var74 = 0.019854568;
                    } else {
                        var74 = -0.1545697;
                    }
                } else {
                    if (input[4] < 0.1522898) {
                        var74 = -0.054790188;
                    } else {
                        var74 = 0.16807924;
                    }
                }
            } else {
                if (input[0] < -0.2425216) {
                    if (input[4] < 0.342757) {
                        var74 = -0.18324041;
                    } else {
                        var74 = -0.0035659836;
                    }
                } else {
                    if (input[16] < 0.5758057) {
                        var74 = 0.018405436;
                    } else {
                        var74 = -0.11585392;
                    }
                }
            }
        } else {
            var74 = 0.1385743;
        }
    } else {
        if (input[9] < 0.06759129) {
            if (input[6] < -0.162904) {
                if (input[1] < 0.003234064) {
                    if (input[5] < 2.079432) {
                        var74 = 0.00612601;
                    } else {
                        var74 = 0.168632;
                    }
                } else {
                    if (input[10] < 0.01560943) {
                        var74 = -0.16301781;
                    } else {
                        var74 = -0.0031608753;
                    }
                }
            } else {
                if (input[12] < 0.0192818) {
                    var74 = 0.06137372;
                } else {
                    var74 = 0.21289153;
                }
            }
        } else {
            if (input[15] < -0.01968046) {
                var74 = -0.14186125;
            } else {
                if (input[13] < 0.1364476) {
                    var74 = -0.069948;
                } else {
                    var74 = 0.12050068;
                }
            }
        }
    }
    var var75;
    if (input[1] < -0.07148194) {
        var75 = 0.11617453;
    } else {
        if (input[3] < -0.02030828) {
            if (input[14] < 2.321254) {
                if (input[11] < 2.036443) {
                    if (input[11] < 1.947956) {
                        var75 = -0.01062897;
                    } else {
                        var75 = 0.18395868;
                    }
                } else {
                    if (input[5] < 1.78105) {
                        var75 = -0.110763066;
                    } else {
                        var75 = -0.004920477;
                    }
                }
            } else {
                var75 = 0.12049984;
            }
        } else {
            var75 = -0.10224694;
        }
    }
    var var76;
    if (input[8] < 1.585759) {
        if (input[3] < -0.5048006) {
            var76 = 0.18297724;
        } else {
            if (input[1] < 0.4985326) {
                if (input[14] < 1.834517) {
                    var76 = 0.07276066;
                } else {
                    var76 = -0.19093956;
                }
            } else {
                if (input[0] < -0.09808612) {
                    if (input[16] < 0.653627) {
                        var76 = 0.19127399;
                    } else {
                        var76 = -0.10135058;
                    }
                } else {
                    if (input[0] < -0.08814994) {
                        var76 = -0.16685034;
                    } else {
                        var76 = 0.035696253;
                    }
                }
            }
        }
    } else {
        if (input[17] < 1.595208) {
            if (input[4] < 0.5384368) {
                var76 = -0.024181386;
            } else {
                var76 = -0.16769347;
            }
        } else {
            if (input[3] < -0.5227023) {
                if (input[14] < 1.933871) {
                    if (input[12] < -0.1898781) {
                        var76 = -0.21205236;
                    } else {
                        var76 = -0.022574754;
                    }
                } else {
                    if (input[2] < 1.978514) {
                        var76 = -0.084516734;
                    } else {
                        var76 = 0.18736595;
                    }
                }
            } else {
                if (input[9] < -0.1207261) {
                    if (input[10] < 0.6248038) {
                        var76 = 0.24014008;
                    } else {
                        var76 = 0.03223575;
                    }
                } else {
                    if (input[3] < -0.3560611) {
                        var76 = -0.13467506;
                    } else {
                        var76 = 0.008138073;
                    }
                }
            }
        }
    }
    var var77;
    if (input[1] < 0.5742223) {
        if (input[2] < 2.28058) {
            if (input[1] < 0.1096714) {
                if (input[0] < -0.2289039) {
                    if (input[13] < -0.057128) {
                        var77 = -0.04764067;
                    } else {
                        var77 = -0.21590571;
                    }
                } else {
                    if (input[2] < 2.266712) {
                        var77 = -0.09621502;
                    } else {
                        var77 = 0.13084394;
                    }
                }
            } else {
                if (input[7] < -0.05745009) {
                    if (input[0] < -0.2384457) {
                        var77 = -0.052022357;
                    } else {
                        var77 = 0.17094198;
                    }
                } else {
                    if (input[5] < 2.066574) {
                        var77 = -0.004910856;
                    } else {
                        var77 = -0.16735338;
                    }
                }
            }
        } else {
            if (input[2] < 2.285258) {
                if (input[1] < 0.103873) {
                    var77 = -0.0056933905;
                } else {
                    var77 = 0.18760663;
                }
            } else {
                if (input[2] < 2.287186) {
                    var77 = -0.17020856;
                } else {
                    if (input[6] < -0.09359723) {
                        var77 = -0.011702052;
                    } else {
                        var77 = 0.11107757;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.59141) {
            var77 = 0.14759767;
        } else {
            if (input[11] < 1.824765) {
                var77 = -0.07461677;
            } else {
                if (input[3] < -0.5048006) {
                    var77 = -0.01936103;
                } else {
                    var77 = 0.110536054;
                }
            }
        }
    }
    var var78;
    if (input[1] < 0.003234064) {
        if (input[12] < -0.05869648) {
            if (input[3] < -0.2997492) {
                var78 = 0.068445966;
            } else {
                var78 = -0.10165172;
            }
        } else {
            if (input[2] < 2.29916) {
                var78 = 0.028888604;
            } else {
                var78 = 0.17891683;
            }
        }
    } else {
        if (input[10] < 0.01560943) {
            var78 = -0.15344685;
        } else {
            if (input[0] < -0.214659) {
                if (input[6] < -0.07548603) {
                    if (input[3] < -0.2020435) {
                        var78 = 0.014527691;
                    } else {
                        var78 = -0.09434922;
                    }
                } else {
                    if (input[11] < 2.281612) {
                        var78 = -0.13631274;
                    } else {
                        var78 = 0.1561514;
                    }
                }
            } else {
                if (input[10] < 0.1683377) {
                    var78 = -0.2142964;
                } else {
                    if (input[1] < 0.5141349) {
                        var78 = 0.086880445;
                    } else {
                        var78 = -0.026088173;
                    }
                }
            }
        }
    }
    var var79;
    if (input[8] < 1.572712) {
        if (input[15] < 0.07397691) {
            if (input[2] < 2.043456) {
                if (input[0] < -0.09808612) {
                    var79 = 0.22027679;
                } else {
                    if (input[0] < -0.08814994) {
                        var79 = -0.12676056;
                    } else {
                        var79 = 0.10098263;
                    }
                }
            } else {
                if (input[7] < 0.5678138) {
                    var79 = -0.12604177;
                } else {
                    var79 = 0.08990937;
                }
            }
        } else {
            if (input[0] < -0.08107927) {
                var79 = -0.15153384;
            } else {
                var79 = 0.028399747;
            }
        }
    } else {
        if (input[14] < 1.871075) {
            if (input[10] < 0.4992206) {
                if (input[5] < 1.863355) {
                    var79 = 0.17636564;
                } else {
                    var79 = -0.15852746;
                }
            } else {
                if (input[10] < 0.6072288) {
                    if (input[9] < 0.1937793) {
                        var79 = -0.12789267;
                    } else {
                        var79 = 0.06086485;
                    }
                } else {
                    if (input[15] < -0.2953774) {
                        var79 = -0.043891564;
                    } else {
                        var79 = 0.14100313;
                    }
                }
            }
        } else {
            if (input[8] < 1.692519) {
                var79 = 0.20369193;
            } else {
                if (input[3] < -0.370856) {
                    if (input[1] < 0.5159065) {
                        var79 = 0.10117888;
                    } else {
                        var79 = -0.12808652;
                    }
                } else {
                    if (input[9] < -0.0358799) {
                        var79 = 0.18122278;
                    } else {
                        var79 = -0.008215383;
                    }
                }
            }
        }
    }
    var var80;
    if (input[9] < 0.04394805) {
        if (input[15] < -0.04728865) {
            if (input[11] < 2.304043) {
                if (input[0] < -0.2603845) {
                    if (input[11] < 2.09717) {
                        var80 = -0.00630569;
                    } else {
                        var80 = 0.09789336;
                    }
                } else {
                    var80 = -0.19910838;
                }
            } else {
                if (input[6] < -0.1334558) {
                    if (input[0] < -0.3103853) {
                        var80 = 0.13282186;
                    } else {
                        var80 = -0.048189722;
                    }
                } else {
                    var80 = 0.22179556;
                }
            }
        } else {
            if (input[16] < 0.350181) {
                var80 = 0.04534976;
            } else {
                var80 = 0.18193209;
            }
        }
    } else {
        if (input[12] < 0.05322614) {
            if (input[1] < 0.08037997) {
                var80 = 0.024646992;
            } else {
                if (input[10] < 0.1683377) {
                    var80 = -0.19871287;
                } else {
                    var80 = -0.044482395;
                }
            }
        } else {
            if (input[5] < 2.146864) {
                if (input[4] < 0.1338625) {
                    if (input[2] < 2.275088) {
                        var80 = 0.032229267;
                    } else {
                        var80 = 0.17961328;
                    }
                } else {
                    if (input[3] < -0.1760793) {
                        var80 = -0.14205538;
                    } else {
                        var80 = 0.0065782242;
                    }
                }
            } else {
                if (input[1] < 0.1788179) {
                    if (input[2] < 2.292923) {
                        var80 = -0.18275525;
                    } else {
                        var80 = -0.03173527;
                    }
                } else {
                    var80 = 0.06506665;
                }
            }
        }
    }
    var var81;
    if (input[12] < 0.1383272) {
        if (input[0] < -0.08617444) {
            if (input[9] < 0.06759129) {
                if (input[6] < -0.09203893) {
                    if (input[3] < -0.2072623) {
                        var81 = 0.010576195;
                    } else {
                        var81 = -0.13262285;
                    }
                } else {
                    if (input[14] < 2.094266) {
                        var81 = 0.0043101865;
                    } else {
                        var81 = 0.15231648;
                    }
                }
            } else {
                if (input[11] < 1.81685) {
                    var81 = 0.057603203;
                } else {
                    if (input[7] < -0.1321621) {
                        var81 = 0.04731691;
                    } else {
                        var81 = -0.13032033;
                    }
                }
            }
        } else {
            if (input[6] < 0.001916255) {
                var81 = 0.18419595;
            } else {
                var81 = -0.0016931932;
            }
        }
    } else {
        if (input[15] < 0.09209667) {
            if (input[17] < 2.104558) {
                if (input[1] < 0.5353647) {
                    var81 = -0.18063197;
                } else {
                    var81 = -0.008915519;
                }
            } else {
                var81 = 0.062382776;
            }
        } else {
            if (input[5] < 2.118694) {
                if (input[2] < 2.146072) {
                    var81 = 0.027447194;
                } else {
                    var81 = 0.13641027;
                }
            } else {
                var81 = -0.04418621;
            }
        }
    }
    var var82;
    if (input[13] < 0.07494086) {
        if (input[14] < 2.159811) {
            if (input[10] < 0.1147564) {
                if (input[9] < -0.03021878) {
                    var82 = -0.014245867;
                } else {
                    if (input[11] < 2.286493) {
                        var82 = -0.012160239;
                    } else {
                        var82 = 0.17138466;
                    }
                }
            } else {
                if (input[6] < -0.07238885) {
                    if (input[9] < 0.05728223) {
                        var82 = -0.21493877;
                    } else {
                        var82 = -0.03083086;
                    }
                } else {
                    var82 = 0.111266024;
                }
            }
        } else {
            if (input[9] < 0.06759129) {
                var82 = -0.16536811;
            } else {
                if (input[0] < -0.2200833) {
                    var82 = 0.102758296;
                } else {
                    var82 = -0.106054895;
                }
            }
        }
    } else {
        if (input[2] < 2.32985) {
            if (input[7] < 0.2361166) {
                if (input[11] < 1.947956) {
                    if (input[16] < 0.08919352) {
                        var82 = -0.13733172;
                    } else {
                        var82 = 0.06762991;
                    }
                } else {
                    if (input[6] < -0.2730854) {
                        var82 = 0.007139165;
                    } else {
                        var82 = 0.15370774;
                    }
                }
            } else {
                if (input[4] < 0.361714) {
                    if (input[1] < 0.1492391) {
                        var82 = 0.0019901397;
                    } else {
                        var82 = -0.15842374;
                    }
                } else {
                    if (input[10] < 0.5356719) {
                        var82 = 0.07046751;
                    } else {
                        var82 = -0.019422852;
                    }
                }
            }
        } else {
            if (input[2] < 2.392264) {
                var82 = 0.1492617;
            } else {
                var82 = 0.014657102;
            }
        }
    }
    var var83;
    if (input[2] < 2.043456) {
        if (input[11] < 2.056424) {
            if (input[10] < 0.5225091) {
                if (input[4] < 0.1522898) {
                    var83 = -0.071362026;
                } else {
                    if (input[1] < 0.5123811) {
                        var83 = 0.20524007;
                    } else {
                        var83 = 0.026663462;
                    }
                }
            } else {
                if (input[16] < 0.08919352) {
                    var83 = -0.16350862;
                } else {
                    if (input[9] < 0.1907522) {
                        var83 = -0.026081221;
                    } else {
                        var83 = 0.16516268;
                    }
                }
            }
        } else {
            if (input[14] < 1.823786) {
                var83 = -0.027834307;
            } else {
                if (input[6] < -0.2337312) {
                    var83 = 0.22227661;
                } else {
                    var83 = -0.0028625317;
                }
            }
        }
    } else {
        if (input[2] < 2.054677) {
            if (input[12] < -0.07729158) {
                if (input[5] < 1.81149) {
                    var83 = -0.023533983;
                } else {
                    var83 = -0.21001525;
                }
            } else {
                var83 = 0.020036973;
            }
        } else {
            if (input[9] < -0.0358799) {
                var83 = 0.18717767;
            } else {
                if (input[15] < -0.0704274) {
                    if (input[0] < -0.3042646) {
                        var83 = 0.00070667313;
                    } else {
                        var83 = -0.14746146;
                    }
                } else {
                    if (input[2] < 2.28058) {
                        var83 = -0.04645946;
                    } else {
                        var83 = 0.05735233;
                    }
                }
            }
        }
    }
    var var84;
    if (input[1] < 0.5742223) {
        if (input[12] < 0.1215528) {
            if (input[17] < 1.579304) {
                if (input[10] < 0.5225091) {
                    var84 = -0.05745804;
                } else {
                    if (input[12] < -0.1030883) {
                        var84 = -0.017407503;
                    } else {
                        var84 = 0.16863592;
                    }
                }
            } else {
                if (input[5] < 1.773148) {
                    if (input[13] < 0.5641978) {
                        var84 = -0.1735116;
                    } else {
                        var84 = 0.13323255;
                    }
                } else {
                    if (input[1] < 0.5353647) {
                        var84 = 0.019429507;
                    } else {
                        var84 = -0.079485014;
                    }
                }
            }
        } else {
            if (input[16] < 0.4917786) {
                if (input[9] < 0.06759129) {
                    var84 = -0.09866727;
                } else {
                    if (input[11] < 1.792652) {
                        var84 = -0.081026584;
                    } else {
                        var84 = 0.06421678;
                    }
                }
            } else {
                var84 = -0.16244856;
            }
        }
    } else {
        if (input[11] < 1.81685) {
            var84 = -0.023164736;
        } else {
            if (input[3] < -0.5127777) {
                var84 = 0.0018780302;
            } else {
                var84 = 0.13478543;
            }
        }
    }
    var var85;
    if (input[6] < -0.2258994) {
        if (input[11] < 2.06484) {
            if (input[0] < -0.3596537) {
                if (input[16] < 0.1829603) {
                    var85 = -0.12762612;
                } else {
                    if (input[9] < -0.2663697) {
                        var85 = -0.058822658;
                    } else {
                        var85 = 0.06752276;
                    }
                }
            } else {
                var85 = 0.15186346;
            }
        } else {
            if (input[3] < -0.3410424) {
                var85 = 0.18013631;
            } else {
                if (input[6] < -0.2410296) {
                    var85 = -0.063664;
                } else {
                    var85 = 0.06794504;
                }
            }
        }
    } else {
        if (input[3] < -0.3113216) {
            if (input[16] < 0.4239573) {
                var85 = 0.03275358;
            } else {
                if (input[17] < 1.579304) {
                    var85 = 0.017793462;
                } else {
                    var85 = -0.16591492;
                }
            }
        } else {
            if (input[9] < -0.0358799) {
                if (input[6] < -0.2005629) {
                    var85 = 0.030692622;
                } else {
                    var85 = 0.16680345;
                }
            } else {
                if (input[12] < -0.05869648) {
                    var85 = -0.1185445;
                } else {
                    if (input[3] < -0.2874977) {
                        var85 = 0.12567954;
                    } else {
                        var85 = -0.00911461;
                    }
                }
            }
        }
    }
    var var86;
    if (input[7] < 0.5788185) {
        if (input[1] < 0.5454578) {
            if (input[16] < 0.5614079) {
                if (input[1] < 0.5174433) {
                    if (input[2] < 1.942569) {
                        var86 = 0.12866096;
                    } else {
                        var86 = -0.006153567;
                    }
                } else {
                    if (input[10] < 0.5269575) {
                        var86 = -0.14726888;
                    } else {
                        var86 = -0.01248495;
                    }
                }
            } else {
                var86 = -0.120713696;
            }
        } else {
            if (input[2] < 1.850452) {
                var86 = 0.022651898;
            } else {
                var86 = 0.13428731;
            }
        }
    } else {
        if (input[3] < -0.5364696) {
            var86 = -0.10790821;
        } else {
            if (input[1] < 0.5353647) {
                if (input[17] < 1.600017) {
                    var86 = 0.0067953896;
                } else {
                    if (input[13] < 0.4714986) {
                        var86 = -0.019299574;
                    } else {
                        var86 = 0.21891557;
                    }
                }
            } else {
                if (input[11] < 2.071669) {
                    if (input[12] < -0.2227753) {
                        var86 = -0.04538519;
                    } else {
                        var86 = 0.0848112;
                    }
                } else {
                    var86 = -0.11168108;
                }
            }
        }
    }
    var var87;
    if (input[0] < -0.214659) {
        if (input[6] < -0.09937902) {
            if (input[3] < -0.2700669) {
                if (input[15] < -0.103376) {
                    if (input[14] < 2.159811) {
                        var87 = 0.014083876;
                    } else {
                        var87 = -0.09957611;
                    }
                } else {
                    if (input[13] < 0.2768913) {
                        var87 = 0.004097932;
                    } else {
                        var87 = 0.17316341;
                    }
                }
            } else {
                if (input[5] < 2.079432) {
                    var87 = -0.18830334;
                } else {
                    if (input[15] < -0.05811152) {
                        var87 = -0.09995685;
                    } else {
                        var87 = 0.05189707;
                    }
                }
            }
        } else {
            if (input[11] < 2.281612) {
                var87 = -0.09865918;
            } else {
                if (input[1] < 0.169138) {
                    if (input[12] < 0.1191476) {
                        var87 = 0.13902967;
                    } else {
                        var87 = -0.039622948;
                    }
                } else {
                    var87 = -0.08378818;
                }
            }
        }
    } else {
        if (input[0] < -0.09013086) {
            if (input[1] < 0.1596987) {
                var87 = -0.1862335;
            } else {
                if (input[9] < 0.1731942) {
                    if (input[16] < 0.1441405) {
                        var87 = -0.041664574;
                    } else {
                        var87 = 0.14790256;
                    }
                } else {
                    var87 = -0.1451076;
                }
            }
        } else {
            if (input[11] < 1.806713) {
                if (input[3] < -0.03475559) {
                    var87 = -0.12532638;
                } else {
                    var87 = 0.032136735;
                }
            } else {
                if (input[11] < 1.852099) {
                    var87 = 0.18778487;
                } else {
                    if (input[0] < -0.06510723) {
                        var87 = -0.03687969;
                    } else {
                        var87 = 0.06491218;
                    }
                }
            }
        }
    }
    var var88;
    if (input[9] < 0.04394805) {
        if (input[0] < -0.234324) {
            if (input[2] < 2.32985) {
                if (input[3] < -0.2700669) {
                    if (input[0] < -0.330065) {
                        var88 = -0.005367666;
                    } else {
                        var88 = 0.06779605;
                    }
                } else {
                    var88 = -0.14699997;
                }
            } else {
                var88 = 0.12717228;
            }
        } else {
            if (input[12] < 0.02323069) {
                var88 = -0.08423975;
            } else {
                var88 = 0.18980233;
            }
        }
    } else {
        if (input[12] < 0.05322614) {
            if (input[10] < 0.1683377) {
                if (input[14] < 2.094266) {
                    var88 = -0.20482849;
                } else {
                    var88 = -0.035707574;
                }
            } else {
                var88 = 0.0042163036;
            }
        } else {
            if (input[16] < 0.4917786) {
                if (input[11] < 2.408481) {
                    if (input[2] < 2.275088) {
                        var88 = 0.0010281291;
                    } else {
                        var88 = 0.12309941;
                    }
                } else {
                    var88 = -0.10198936;
                }
            } else {
                if (input[11] < 2.345351) {
                    if (input[0] < -0.08814994) {
                        var88 = -0.18105899;
                    } else {
                        var88 = 0.00025848192;
                    }
                } else {
                    var88 = 0.08974096;
                }
            }
        }
    }
    var var89;
    if (input[1] < 0.1096714) {
        if (input[2] < 2.287186) {
            if (input[0] < -0.2307312) {
                if (input[9] < -0.02677725) {
                    var89 = 0.008092589;
                } else {
                    var89 = -0.19720757;
                }
            } else {
                if (input[11] < 2.306794) {
                    var89 = 0.090383455;
                } else {
                    var89 = -0.054849315;
                }
            }
        } else {
            if (input[15] < -0.03642572) {
                if (input[3] < -0.2874977) {
                    var89 = 0.08475167;
                } else {
                    if (input[0] < -0.3065954) {
                        var89 = 0.033005185;
                    } else {
                        var89 = -0.1315059;
                    }
                }
            } else {
                var89 = 0.14532024;
            }
        }
    } else {
        if (input[7] < -0.05745009) {
            if (input[9] < 0.07905138) {
                if (input[3] < -0.2242607) {
                    var89 = 0.0071116113;
                } else {
                    var89 = 0.20403114;
                }
            } else {
                var89 = -0.045199532;
            }
        } else {
            if (input[13] < 0.07494086) {
                if (input[3] < -0.1853803) {
                    var89 = -0.19453003;
                } else {
                    var89 = 0.0053492235;
                }
            } else {
                if (input[10] < 0.4992206) {
                    if (input[10] < 0.3939797) {
                        var89 = 0.007848473;
                    } else {
                        var89 = 0.1808359;
                    }
                } else {
                    if (input[11] < 2.09717) {
                        var89 = -0.015999287;
                    } else {
                        var89 = 0.15984388;
                    }
                }
            }
        }
    }
    var var90;
    if (input[1] < 0.5742223) {
        if (input[8] < 2.289305) {
            if (input[14] < 2.202911) {
                if (input[5] < 2.121927) {
                    if (input[6] < 0.05721967) {
                        var90 = -0.012692379;
                    } else {
                        var90 = 0.10682802;
                    }
                } else {
                    if (input[3] < -0.2345341) {
                        var90 = -0.0069633075;
                    } else {
                        var90 = 0.12321663;
                    }
                }
            } else {
                if (input[0] < -0.234324) {
                    if (input[1] < 0.1286105) {
                        var90 = -0.05827604;
                    } else {
                        var90 = 0.1312784;
                    }
                } else {
                    if (input[12] < 0.1691098) {
                        var90 = -0.15475117;
                    } else {
                        var90 = 0.0024578976;
                    }
                }
            }
        } else {
            var90 = 0.07734631;
        }
    } else {
        if (input[2] < 1.809612) {
            var90 = -0.008685817;
        } else {
            if (input[9] < -0.2663697) {
                var90 = 0.016197827;
            } else {
                var90 = 0.12410967;
            }
        }
    }
    var var91;
    if (input[9] < -0.1079903) {
        if (input[15] < -0.275564) {
            if (input[1] < 0.5630385) {
                if (input[14] < 1.933871) {
                    if (input[14] < 1.858899) {
                        var91 = 0.016018594;
                    } else {
                        var91 = -0.20490062;
                    }
                } else {
                    if (input[2] < 1.978514) {
                        var91 = -0.048553675;
                    } else {
                        var91 = 0.17224662;
                    }
                }
            } else {
                if (input[6] < -0.4150616) {
                    var91 = 0.024696624;
                } else {
                    var91 = 0.106329635;
                }
            }
        } else {
            var91 = 0.16644676;
        }
    } else {
        if (input[15] < -0.1693783) {
            if (input[7] < 0.4024927) {
                var91 = -0.14309429;
            } else {
                var91 = -0.008573542;
            }
        } else {
            if (input[6] < -0.2258994) {
                if (input[3] < -0.3540816) {
                    var91 = -0.021362776;
                } else {
                    if (input[2] < 2.045773) {
                        var91 = 0.15725791;
                    } else {
                        var91 = 0.005048504;
                    }
                }
            } else {
                if (input[3] < -0.325475) {
                    var91 = -0.10915713;
                } else {
                    if (input[3] < -0.2874977) {
                        var91 = 0.06445106;
                    } else {
                        var91 = -0.007764626;
                    }
                }
            }
        }
    }
    var var92;
    if (input[2] < 2.043456) {
        if (input[8] < 1.769586) {
            if (input[3] < -0.06722029) {
                if (input[15] < -0.275564) {
                    if (input[1] < 0.5630385) {
                        var92 = -0.025459655;
                    } else {
                        var92 = 0.113772675;
                    }
                } else {
                    if (input[7] < 0.08669824) {
                        var92 = -0.015807519;
                    } else {
                        var92 = 0.18943901;
                    }
                }
            } else {
                if (input[9] < 0.1907522) {
                    if (input[14] < 1.576267) {
                        var92 = 0.032392133;
                    } else {
                        var92 = -0.101409666;
                    }
                } else {
                    var92 = 0.07971295;
                }
            }
        } else {
            if (input[3] < -0.3586525) {
                if (input[1] < 0.5213787) {
                    var92 = -0.00791237;
                } else {
                    var92 = -0.14207673;
                }
            } else {
                var92 = 0.021311808;
            }
        }
    } else {
        if (input[11] < 2.09717) {
            if (input[5] < 1.838039) {
                if (input[5] < 1.813554) {
                    if (input[1] < 0.501293) {
                        var92 = -0.13046442;
                    } else {
                        var92 = 0.06198155;
                    }
                } else {
                    var92 = -0.182462;
                }
            } else {
                var92 = 0.037275117;
            }
        } else {
            if (input[10] < 0.2296836) {
                if (input[0] < -0.214659) {
                    if (input[1] < 0.169138) {
                        var92 = 0.020437062;
                    } else {
                        var92 = -0.11032569;
                    }
                } else {
                    if (input[0] < -0.1856291) {
                        var92 = -0.14599542;
                    } else {
                        var92 = -0.011001673;
                    }
                }
            } else {
                var92 = 0.140858;
            }
        }
    }
    var var93;
    if (input[4] < -0.05195121) {
        if (input[6] < -0.2152457) {
            var93 = 0.032432348;
        } else {
            if (input[9] < 0.06349123) {
                var93 = -0.15392998;
            } else {
                var93 = 0.015846781;
            }
        }
    } else {
        if (input[7] < -0.08655895) {
            var93 = 0.09958074;
        } else {
            if (input[12] < 0.1383272) {
                if (input[0] < -0.08617444) {
                    if (input[9] < 0.06759129) {
                        var93 = 0.014583166;
                    } else {
                        var93 = -0.06899948;
                    }
                } else {
                    if (input[6] < 0.001916255) {
                        var93 = 0.15995304;
                    } else {
                        var93 = -0.004539608;
                    }
                }
            } else {
                if (input[6] < 0.06244084) {
                    if (input[5] < 2.112723) {
                        var93 = -0.11479231;
                    } else {
                        var93 = 0.027680418;
                    }
                } else {
                    var93 = 0.05586168;
                }
            }
        }
    }
    var var94;
    if (input[11] < 2.036443) {
        if (input[11] < 1.947956) {
            if (input[7] < 0.06732554) {
                if (input[2] < 1.934638) {
                    var94 = -0.031769063;
                } else {
                    var94 = -0.15553859;
                }
            } else {
                if (input[13] < 0.5841841) {
                    if (input[3] < -0.05520913) {
                        var94 = 0.13832285;
                    } else {
                        var94 = 0.025336731;
                    }
                } else {
                    if (input[16] < 0.6325742) {
                        var94 = -0.10113265;
                    } else {
                        var94 = 0.011853188;
                    }
                }
            }
        } else {
            var94 = 0.15741298;
        }
    } else {
        if (input[5] < 1.78105) {
            if (input[11] < 2.050715) {
                var94 = 0.05104852;
            } else {
                if (input[0] < -0.5282634) {
                    var94 = -0.16914614;
                } else {
                    var94 = -0.04925705;
                }
            }
        } else {
            if (input[11] < 2.040769) {
                if (input[1] < 0.5174433) {
                    var94 = 0.024244986;
                } else {
                    var94 = -0.16196054;
                }
            } else {
                if (input[9] < -0.1079903) {
                    if (input[15] < -0.2881549) {
                        var94 = -0.031169033;
                    } else {
                        var94 = 0.19040954;
                    }
                } else {
                    if (input[3] < -0.3264522) {
                        var94 = -0.086911485;
                    } else {
                        var94 = 0.0051050596;
                    }
                }
            }
        }
    }
    var var95;
    if (input[8] < 1.585759) {
        if (input[4] < 0.587167) {
            if (input[7] < 0.5730495) {
                if (input[7] < 0.5465593) {
                    if (input[15] < 0.07397691) {
                        var95 = 0.0952753;
                    } else {
                        var95 = -0.049076695;
                    }
                } else {
                    var95 = -0.11799586;
                }
            } else {
                var95 = 0.17838053;
            }
        } else {
            if (input[0] < -0.08617444) {
                var95 = -0.09059273;
            } else {
                var95 = 0.027317164;
            }
        }
    } else {
        if (input[14] < 1.846167) {
            if (input[13] < 0.5989843) {
                if (input[15] < -0.1482038) {
                    var95 = -0.16054365;
                } else {
                    if (input[7] < 0.06732554) {
                        var95 = -0.10284441;
                    } else {
                        var95 = 0.088747755;
                    }
                }
            } else {
                var95 = 0.053951945;
            }
        } else {
            if (input[1] < 0.559449) {
                if (input[12] < -0.1898781) {
                    if (input[14] < 1.933871) {
                        var95 = -0.14010757;
                    } else {
                        var95 = 0.019899258;
                    }
                } else {
                    if (input[5] < 1.889709) {
                        var95 = 0.112254284;
                    } else {
                        var95 = -0.010502215;
                    }
                }
            } else {
                var95 = 0.093580574;
            }
        }
    }
    var var96;
    if (input[11] < 2.030539) {
        if (input[11] < 1.947956) {
            if (input[16] < 0.08919352) {
                var96 = -0.10089628;
            } else {
                if (input[9] < 0.1907522) {
                    if (input[3] < -0.06249162) {
                        var96 = 0.08609149;
                    } else {
                        var96 = -0.054384466;
                    }
                } else {
                    var96 = 0.13485722;
                }
            }
        } else {
            var96 = 0.17797959;
        }
    } else {
        if (input[5] < 1.78105) {
            if (input[11] < 2.050715) {
                var96 = 0.007919755;
            } else {
                if (input[8] < 1.577565) {
                    var96 = -0.157982;
                } else {
                    var96 = -0.0411027;
                }
            }
        } else {
            if (input[5] < 1.803072) {
                if (input[2] < 2.030415) {
                    var96 = -0.007325522;
                } else {
                    var96 = 0.14769001;
                }
            } else {
                if (input[5] < 1.822437) {
                    if (input[4] < 0.563706) {
                        var96 = 0.021327801;
                    } else {
                        var96 = -0.1492504;
                    }
                } else {
                    if (input[17] < 1.77553) {
                        var96 = 0.07986939;
                    } else {
                        var96 = -0.009238672;
                    }
                }
            }
        }
    }
    var var97;
    if (input[2] < 2.294523) {
        if (input[0] < -0.08107927) {
            if (input[0] < -0.214659) {
                if (input[3] < -0.1923062) {
                    if (input[15] < 0.01067353) {
                        var97 = 0.000021272686;
                    } else {
                        var97 = -0.12869702;
                    }
                } else {
                    if (input[15] < 0.006882259) {
                        var97 = -0.035048548;
                    } else {
                        var97 = 0.15623872;
                    }
                }
            } else {
                if (input[2] < 1.828053) {
                    if (input[15] < 0.07397691) {
                        var97 = 0.060153037;
                    } else {
                        var97 = -0.082373135;
                    }
                } else {
                    var97 = -0.13982373;
                }
            }
        } else {
            if (input[11] < 1.806713) {
                var97 = -0.02034292;
            } else {
                var97 = 0.12988874;
            }
        }
    } else {
        if (input[9] < 0.07073097) {
            if (input[6] < -0.162904) {
                if (input[1] < 0.003234064) {
                    var97 = 0.083219714;
                } else {
                    var97 = -0.08344584;
                }
            } else {
                var97 = 0.14129503;
            }
        } else {
            if (input[10] < 0.190945) {
                var97 = -0.10702974;
            } else {
                var97 = 0.04708606;
            }
        }
    }
    var var98;
    if (input[8] < 1.585759) {
        if (input[7] < 0.5041527) {
            if (input[15] < 0.07397691) {
                if (input[2] < 1.828053) {
                    var98 = 0.16638765;
                } else {
                    if (input[7] < 0.4024927) {
                        var98 = -0.021123318;
                    } else {
                        var98 = 0.07556935;
                    }
                }
            } else {
                var98 = -0.022216814;
            }
        } else {
            if (input[16] < 0.5675827) {
                var98 = -0.09637594;
            } else {
                if (input[1] < 0.5353647) {
                    var98 = 0.16858323;
                } else {
                    if (input[0] < -0.08814994) {
                        var98 = -0.102270804;
                    } else {
                        var98 = 0.022746287;
                    }
                }
            }
        }
    } else {
        if (input[17] < 1.707336) {
            if (input[1] < 0.4907506) {
                var98 = 0.06141627;
            } else {
                if (input[11] < 2.04423) {
                    if (input[17] < 1.627252) {
                        var98 = 0.096442215;
                    } else {
                        var98 = -0.0974799;
                    }
                } else {
                    if (input[7] < 0.521985) {
                        var98 = -0.005745828;
                    } else {
                        var98 = -0.15147515;
                    }
                }
            }
        } else {
            if (input[8] < 1.720262) {
                var98 = 0.14041038;
            } else {
                if (input[3] < -0.3482999) {
                    if (input[13] < 0.7616876) {
                        var98 = -0.09291011;
                    } else {
                        var98 = 0.043434933;
                    }
                } else {
                    if (input[10] < 0.218539) {
                        var98 = -0.0075848196;
                    } else {
                        var98 = 0.13535869;
                    }
                }
            }
        }
    }
    var var99;
    if (input[1] < 0.103873) {
        if (input[2] < 2.287186) {
            if (input[3] < -0.2791505) {
                var99 = 0.019305697;
            } else {
                if (input[0] < -0.2289039) {
                    var99 = -0.17356431;
                } else {
                    var99 = -0.026582105;
                }
            }
        } else {
            if (input[12] < -0.06011815) {
                var99 = -0.04602183;
            } else {
                if (input[5] < 2.118694) {
                    var99 = 0.15317273;
                } else {
                    var99 = -0.014236754;
                }
            }
        }
    } else {
        if (input[7] < -0.07943334) {
            if (input[2] < 2.254359) {
                var99 = 0.008638356;
            } else {
                var99 = 0.11909052;
            }
        } else {
            if (input[13] < 0.07494086) {
                if (input[16] < 0.01339899) {
                    var99 = -0.007154434;
                } else {
                    var99 = -0.1463338;
                }
            } else {
                if (input[4] < 0.2009672) {
                    if (input[0] < -0.3553542) {
                        var99 = -0.05431991;
                    } else {
                        var99 = 0.14999056;
                    }
                } else {
                    if (input[14] < 2.208579) {
                        var99 = 0.009452902;
                    } else {
                        var99 = -0.0632708;
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
