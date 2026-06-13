// XGBoost Model for Gesture 2: ShoulderFlexionLeft
// Accuracy: 99.88%
// Precision: 99.88%
// Recall: 99.88%
// F1 Score: 99.88%
// Trained on 44584 samples

export function evaluateGesture2(features) {
function score(input) {
    var var0;
    if (input[8] < 2.307058) {
        if (input[9] < 0.004940425) {
            if (input[8] < 1.891008) {
                if (input[0] < -0.3743254) {
                    var0 = -0.59432626;
                } else {
                    var0 = 0.45882356;
                }
            } else {
                if (input[0] < -0.4537559) {
                    if (input[7] < 0.09177062) {
                        var0 = -0.57798165;
                    } else {
                        var0 = 0.32494384;
                    }
                } else {
                    var0 = 0.5988484;
                }
            }
        } else {
            if (input[15] < 0.2621636) {
                if (input[16] < 0.6690357) {
                    if (input[0] < -0.08452855) {
                        var0 = -0.55364645;
                    } else {
                        var0 = 0.18237886;
                    }
                } else {
                    if (input[11] < 2.430416) {
                        var0 = 0.5412372;
                    } else {
                        var0 = -0.31428576;
                    }
                }
            } else {
                if (input[9] < 0.1490773) {
                    if (input[3] < -0.3479285) {
                        var0 = 0.23333335;
                    } else {
                        var0 = -0.5917933;
                    }
                } else {
                    if (input[5] < 2.100418) {
                        var0 = -0.22079678;
                    } else {
                        var0 = 0.51979595;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.102439) {
            if (input[3] < -0.3497865) {
                if (input[6] < -0.3596465) {
                    var0 = 0.50769234;
                } else {
                    var0 = -0.33333337;
                }
            } else {
                if (input[2] < 2.671136) {
                    var0 = -0.5917432;
                } else {
                    var0 = 0.3818182;
                }
            }
        } else {
            if (input[2] < 2.518099) {
                if (input[5] < 2.486625) {
                    if (input[1] < 0.1986625) {
                        var0 = -0.42000002;
                    } else {
                        var0 = 0.56309015;
                    }
                } else {
                    if (input[10] < 0.4126082) {
                        var0 = -0.5;
                    } else {
                        var0 = 0.54545456;
                    }
                }
            } else {
                var0 = 0.59952736;
            }
        }
    }
    var var1;
    if (input[8] < 2.307058) {
        if (input[1] < 0.4009889) {
            if (input[2] < 2.17439) {
                if (input[4] < 0.1760592) {
                    if (input[10] < 0.4135966) {
                        var1 = -0.47541988;
                    } else {
                        var1 = 0.33268332;
                    }
                } else {
                    if (input[0] < -0.3554429) {
                        var1 = 0.45421982;
                    } else {
                        var1 = -0.31935972;
                    }
                }
            } else {
                if (input[7] < -0.03030185) {
                    if (input[5] < 2.381189) {
                        var1 = 0.31164888;
                    } else {
                        var1 = -0.38992348;
                    }
                } else {
                    if (input[8] < 2.271676) {
                        var1 = -0.46952906;
                    } else {
                        var1 = 0.32699695;
                    }
                }
            }
        } else {
            if (input[4] < 0.1760592) {
                var1 = -0.46609885;
            } else {
                if (input[0] < -0.4537559) {
                    if (input[7] < 0.09177062) {
                        var1 = -0.44970623;
                    } else {
                        var1 = 0.21929704;
                    }
                } else {
                    if (input[6] < -0.2357107) {
                        var1 = 0.47467273;
                    } else {
                        var1 = 0.23635422;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.102439) {
            if (input[2] < 2.661785) {
                var1 = -0.4612875;
            } else {
                if (input[7] < -0.3212084) {
                    var1 = -0.39474872;
                } else {
                    var1 = 0.4363962;
                }
            }
        } else {
            if (input[2] < 2.518099) {
                if (input[5] < 2.486625) {
                    if (input[1] < 0.1999779) {
                        var1 = -0.084638104;
                    } else {
                        var1 = 0.44078514;
                    }
                } else {
                    if (input[10] < 0.4126082) {
                        var1 = -0.37998062;
                    } else {
                        var1 = 0.42782876;
                    }
                }
            } else {
                var1 = 0.4643214;
            }
        }
    }
    var var2;
    if (input[8] < 2.304724) {
        if (input[9] < 0.004940425) {
            if (input[8] < 1.891008) {
                if (input[0] < -0.3743254) {
                    var2 = -0.40134427;
                } else {
                    var2 = 0.30292255;
                }
            } else {
                if (input[0] < -0.4537559) {
                    if (input[11] < 2.056809) {
                        var2 = 0.27456674;
                    } else {
                        var2 = -0.21727112;
                    }
                } else {
                    var2 = 0.40746787;
                }
            }
        } else {
            if (input[1] < 0.4105926) {
                if (input[0] < -0.08452855) {
                    if (input[6] < -0.2572749) {
                        var2 = -0.06376623;
                    } else {
                        var2 = -0.39861763;
                    }
                } else {
                    if (input[15] < 0.4095179) {
                        var2 = 0.30787367;
                    } else {
                        var2 = -0.4575781;
                    }
                }
            } else {
                if (input[15] < 0.1741198) {
                    if (input[2] < 1.851128) {
                        var2 = 0.23592587;
                    } else {
                        var2 = -0.43541646;
                    }
                } else {
                    if (input[1] < 0.5255324) {
                        var2 = 0.3869451;
                    } else {
                        var2 = -0.18452772;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.102439) {
            if (input[2] < 2.661785) {
                var2 = -0.402327;
            } else {
                if (input[7] < -0.3212084) {
                    var2 = -0.33881575;
                } else {
                    var2 = 0.36994708;
                }
            }
        } else {
            if (input[2] < 2.518099) {
                if (input[5] < 2.479166) {
                    if (input[1] < 0.1999779) {
                        var2 = -0.06061958;
                    } else {
                        var2 = 0.40378875;
                    }
                } else {
                    if (input[0] < -0.2655832) {
                        var2 = -0.13272536;
                    } else {
                        var2 = 0.4559871;
                    }
                }
            } else {
                if (input[8] < 2.307058) {
                    var2 = 0.6056434;
                } else {
                    var2 = 0.40312096;
                }
            }
        }
    }
    var var3;
    if (input[8] < 2.304724) {
        if (input[9] < 0.004940425) {
            if (input[8] < 1.891008) {
                if (input[0] < -0.3743254) {
                    var3 = -0.3657681;
                } else {
                    var3 = 0.26864168;
                }
            } else {
                if (input[0] < -0.4537559) {
                    if (input[4] < 0.3182591) {
                        var3 = 0.13639931;
                    } else {
                        var3 = -0.45134768;
                    }
                } else {
                    var3 = 0.371041;
                }
            }
        } else {
            if (input[1] < 0.4090325) {
                if (input[2] < 2.17439) {
                    if (input[0] < -0.08452855) {
                        var3 = -0.3737266;
                    } else {
                        var3 = -0.54415923;
                    }
                } else {
                    if (input[7] < -0.03030185) {
                        var3 = 0.1246382;
                    } else {
                        var3 = -0.35407743;
                    }
                }
            } else {
                if (input[15] < 0.1809705) {
                    if (input[2] < 1.851128) {
                        var3 = 0.3345138;
                    } else {
                        var3 = -0.39081794;
                    }
                } else {
                    if (input[4] < 0.2644782) {
                        var3 = 0.37906367;
                    } else {
                        var3 = 0.083871365;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.102439) {
            if (input[2] < 2.661785) {
                var3 = -0.36643988;
            } else {
                if (input[7] < -0.3212084) {
                    var3 = -0.30074507;
                } else {
                    var3 = 0.32762143;
                }
            }
        } else {
            if (input[2] < 2.518099) {
                if (input[5] < 2.486625) {
                    if (input[1] < 0.3684651) {
                        var3 = 0.16603047;
                    } else {
                        var3 = 0.37221405;
                    }
                } else {
                    if (input[10] < 0.4126082) {
                        var3 = -0.29792112;
                    } else {
                        var3 = 0.35155392;
                    }
                }
            } else {
                var3 = 0.36969277;
            }
        }
    }
    var var4;
    if (input[13] < 0.4151159) {
        if (input[17] < 2.226639) {
            if (input[17] < 1.674314) {
                if (input[4] < 0.1760592) {
                    if (input[2] < 2.17439) {
                        var4 = -0.35328466;
                    } else {
                        var4 = 0.47123787;
                    }
                } else {
                    if (input[10] < 0.543152) {
                        var4 = 0.26278567;
                    } else {
                        var4 = -0.26704255;
                    }
                }
            } else {
                if (input[11] < 2.319927) {
                    if (input[15] < 0.4338227) {
                        var4 = 0.17476419;
                    } else {
                        var4 = -0.36344677;
                    }
                } else {
                    if (input[6] < -0.3380147) {
                        var4 = 0.17645536;
                    } else {
                        var4 = -0.2925172;
                    }
                }
            }
        } else {
            if (input[2] < 2.518099) {
                if (input[2] < 2.442063) {
                    if (input[13] < -0.1205623) {
                        var4 = -0.24943072;
                    } else {
                        var4 = 0.3483556;
                    }
                } else {
                    if (input[3] < -0.3479285) {
                        var4 = 0.22005497;
                    } else {
                        var4 = -0.3528133;
                    }
                }
            } else {
                if (input[7] < -0.3212084) {
                    var4 = -0.29504293;
                } else {
                    var4 = 0.34819835;
                }
            }
        }
    } else {
        if (input[6] < -0.2397189) {
            if (input[9] < -0.2421837) {
                if (input[1] < 0.5178216) {
                    if (input[7] < 0.1039426) {
                        var4 = -0.60798323;
                    } else {
                        var4 = 0.3258967;
                    }
                } else {
                    if (input[8] < 2.034105) {
                        var4 = -0.072390966;
                    } else {
                        var4 = -0.480948;
                    }
                }
            } else {
                if (input[12] < 0.2484773) {
                    if (input[0] < -0.587382) {
                        var4 = -0.17400384;
                    } else {
                        var4 = 0.34610397;
                    }
                } else {
                    if (input[15] < 0.2621636) {
                        var4 = -0.35282332;
                    } else {
                        var4 = 0.25442404;
                    }
                }
            }
        } else {
            if (input[6] < -0.1913758) {
                if (input[16] < 0.7278038) {
                    if (input[0] < -0.3194774) {
                        var4 = 0.26994258;
                    } else {
                        var4 = -0.37386015;
                    }
                } else {
                    if (input[1] < 0.5255324) {
                        var4 = 0.35423252;
                    } else {
                        var4 = -0.31947967;
                    }
                }
            } else {
                var4 = 0.3551311;
            }
        }
    }
    var var5;
    if (input[13] < 0.405693) {
        if (input[17] < 1.674314) {
            if (input[4] < 0.1656586) {
                if (input[2] < 2.17439) {
                    if (input[0] < -0.08452855) {
                        var5 = -0.3355423;
                    } else {
                        var5 = -0.40706822;
                    }
                } else {
                    var5 = 0.39420322;
                }
            } else {
                if (input[4] < 0.2580619) {
                    if (input[10] < 0.3890499) {
                        var5 = -0.1253083;
                    } else {
                        var5 = 0.3588683;
                    }
                } else {
                    if (input[13] < 0.2694984) {
                        var5 = 0.33807164;
                    } else {
                        var5 = -0.25321937;
                    }
                }
            }
        } else {
            if (input[7] < -0.03171678) {
                if (input[2] < 2.246351) {
                    if (input[7] < -0.1656383) {
                        var5 = -0.31359577;
                    } else {
                        var5 = 0.14498729;
                    }
                } else {
                    if (input[5] < 2.376746) {
                        var5 = 0.38966;
                    } else {
                        var5 = 0.049929086;
                    }
                }
            } else {
                if (input[1] < 0.4090325) {
                    if (input[3] < -0.3497865) {
                        var5 = -0.1447957;
                    } else {
                        var5 = -0.3422291;
                    }
                } else {
                    if (input[15] < -0.0573114) {
                        var5 = -0.14790873;
                    } else {
                        var5 = 0.30958253;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.2385264) {
            if (input[9] < -0.2421837) {
                if (input[11] < 2.046304) {
                    if (input[5] < 2.057998) {
                        var5 = 0.3610185;
                    } else {
                        var5 = -0.46890613;
                    }
                } else {
                    if (input[8] < 2.042243) {
                        var5 = -0.33005643;
                    } else {
                        var5 = 0.24332586;
                    }
                }
            } else {
                if (input[12] < 0.2484773) {
                    if (input[0] < -0.587382) {
                        var5 = -0.15288043;
                    } else {
                        var5 = 0.31516427;
                    }
                } else {
                    if (input[7] < 0.05454982) {
                        var5 = 0.21539281;
                    } else {
                        var5 = -0.57877237;
                    }
                }
            }
        } else {
            if (input[6] < -0.1913758) {
                if (input[16] < 0.7547066) {
                    if (input[8] < 2.316534) {
                        var5 = -0.3433873;
                    } else {
                        var5 = 0.2806691;
                    }
                } else {
                    var5 = 0.3204272;
                }
            } else {
                if (input[4] < -0.0445907) {
                    var5 = 0.04843653;
                } else {
                    var5 = 0.33960316;
                }
            }
        }
    }
    var var6;
    if (input[2] < 2.518099) {
        if (input[1] < 0.4090325) {
            if (input[2] < 1.977272) {
                if (input[17] < 1.942938) {
                    var6 = -0.33022332;
                } else {
                    var6 = -0.004030047;
                }
            } else {
                if (input[7] < -0.02753406) {
                    if (input[6] < -0.2556134) {
                        var6 = 0.25646445;
                    } else {
                        var6 = -0.077366814;
                    }
                } else {
                    if (input[6] < -0.3843476) {
                        var6 = 0.20615229;
                    } else {
                        var6 = -0.32948804;
                    }
                }
            }
        } else {
            if (input[5] < 2.188689) {
                if (input[15] < -0.1394486) {
                    if (input[7] < 0.08800379) {
                        var6 = -0.34953132;
                    } else {
                        var6 = -0.7126631;
                    }
                } else {
                    if (input[11] < 2.132579) {
                        var6 = 0.15798846;
                    } else {
                        var6 = -0.35734367;
                    }
                }
            } else {
                if (input[2] < 2.39083) {
                    var6 = 0.33265534;
                } else {
                    var6 = -0.29305944;
                }
            }
        }
    } else {
        if (input[7] < -0.3212084) {
            var6 = -0.27551174;
        } else {
            var6 = 0.33018366;
        }
    }
    var var7;
    if (input[2] < 2.518099) {
        if (input[0] < -0.3019356) {
            if (input[3] < -0.4607451) {
                if (input[7] < 0.08800379) {
                    if (input[13] < 0.3882965) {
                        var7 = -0.3450118;
                    } else {
                        var7 = 0.036522686;
                    }
                } else {
                    if (input[1] < 0.5407966) {
                        var7 = 0.019394442;
                    } else {
                        var7 = 0.33364487;
                    }
                }
            } else {
                if (input[2] < 2.442063) {
                    var7 = 0.3306698;
                } else {
                    var7 = -0.29556227;
                }
            }
        } else {
            if (input[2] < 2.17439) {
                if (input[7] < 0.02195331) {
                    if (input[13] < 0.6671706) {
                        var7 = -0.32165724;
                    } else {
                        var7 = 0.24436985;
                    }
                } else {
                    if (input[6] < -0.2803644) {
                        var7 = -0.13398075;
                    } else {
                        var7 = 0.2892588;
                    }
                }
            } else {
                if (input[3] < -0.2823173) {
                    if (input[3] < -0.3444718) {
                        var7 = 0.01749696;
                    } else {
                        var7 = -0.32195517;
                    }
                } else {
                    if (input[15] < 0.4338227) {
                        var7 = 0.21364039;
                    } else {
                        var7 = -0.19251603;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.3212084) {
            var7 = -0.25468233;
        } else {
            var7 = 0.321501;
        }
    }
    var var8;
    if (input[1] < -0.1065064) {
        if (input[2] < 2.237725) {
            if (input[8] < 1.973918) {
                if (input[2] < 2.17439) {
                    var8 = -0.31248963;
                } else {
                    var8 = -0.40783587;
                }
            } else {
                var8 = 0.07160081;
            }
        } else {
            if (input[14] < 2.100028) {
                var8 = 0.32208726;
            } else {
                var8 = -0.124737136;
            }
        }
    } else {
        if (input[2] < 2.518099) {
            if (input[2] < 2.419785) {
                if (input[7] < 0.1309062) {
                    if (input[2] < 2.18055) {
                        var8 = -0.067668825;
                    } else {
                        var8 = 0.20128126;
                    }
                } else {
                    if (input[1] < 0.5298869) {
                        var8 = -0.3265183;
                    } else {
                        var8 = 0.05122528;
                    }
                }
            } else {
                if (input[3] < -0.3444718) {
                    if (input[0] < -0.2781561) {
                        var8 = 0.21309687;
                    } else {
                        var8 = -0.3595787;
                    }
                } else {
                    if (input[16] < 0.7547066) {
                        var8 = -0.31850678;
                    } else {
                        var8 = 0.22752844;
                    }
                }
            }
        } else {
            if (input[7] < -0.3212084) {
                var8 = -0.23578463;
            } else {
                var8 = 0.31515965;
            }
        }
    }
    var var9;
    if (input[0] < -0.2942165) {
        if (input[3] < -0.4656969) {
            if (input[7] < 0.09177062) {
                if (input[1] < 0.298332) {
                    var9 = 0.23017375;
                } else {
                    var9 = -0.33218095;
                }
            } else {
                if (input[4] < 0.3182591) {
                    if (input[0] < -0.587382) {
                        var9 = 0.047246974;
                    } else {
                        var9 = 0.33307207;
                    }
                } else {
                    if (input[11] < 2.039389) {
                        var9 = 0.27640015;
                    } else {
                        var9 = -0.2740708;
                    }
                }
            }
        } else {
            if (input[6] < -0.5098867) {
                var9 = -0.25999635;
            } else {
                if (input[9] < 0.0356515) {
                    if (input[12] < 0.1407228) {
                        var9 = 0.31263041;
                    } else {
                        var9 = 0.11655028;
                    }
                } else {
                    if (input[1] < 0.3927424) {
                        var9 = -0.28324297;
                    } else {
                        var9 = 0.2802457;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.17439) {
            if (input[4] < 0.1823163) {
                var9 = -0.31535873;
            } else {
                if (input[5] < 1.905577) {
                    if (input[6] < -0.2803644) {
                        var9 = -0.06811414;
                    } else {
                        var9 = 0.33694026;
                    }
                } else {
                    if (input[3] < -0.1698373) {
                        var9 = 0.33283362;
                    } else {
                        var9 = -0.4654509;
                    }
                }
            }
        } else {
            if (input[3] < -0.2712604) {
                if (input[8] < 2.271676) {
                    if (input[16] < 0.7784909) {
                        var9 = -0.32729456;
                    } else {
                        var9 = 0.3202995;
                    }
                } else {
                    if (input[1] < 0.1080659) {
                        var9 = -0.32584292;
                    } else {
                        var9 = 0.13918233;
                    }
                }
            } else {
                if (input[12] < 0.4114046) {
                    if (input[7] < 0.1634102) {
                        var9 = 0.28427598;
                    } else {
                        var9 = -0.31372252;
                    }
                } else {
                    if (input[6] < -0.05416803) {
                        var9 = -0.33783025;
                    } else {
                        var9 = 0.075126365;
                    }
                }
            }
        }
    }
    var var10;
    if (input[1] < -0.1065064) {
        if (input[2] < 2.246351) {
            if (input[8] < 1.973918) {
                var10 = -0.31315136;
            } else {
                var10 = 0.1198388;
            }
        } else {
            var10 = 0.28740445;
        }
    } else {
        if (input[2] < 2.518099) {
            if (input[2] < 2.419785) {
                if (input[7] < 0.1634102) {
                    if (input[5] < 2.183333) {
                        var10 = -0.022234924;
                    } else {
                        var10 = 0.18523003;
                    }
                } else {
                    var10 = -0.31188858;
                }
            } else {
                if (input[3] < -0.3444718) {
                    if (input[2] < 2.513822) {
                        var10 = 0.13213414;
                    } else {
                        var10 = -0.3004477;
                    }
                } else {
                    if (input[9] < 0.1098558) {
                        var10 = -0.31699532;
                    } else {
                        var10 = -0.07489854;
                    }
                }
            }
        } else {
            if (input[7] < -0.3212084) {
                var10 = -0.23355785;
            } else {
                var10 = 0.30766368;
            }
        }
    }
    var var11;
    if (input[0] < -0.2942165) {
        if (input[3] < -0.4656969) {
            if (input[7] < 0.09177062) {
                if (input[1] < 0.298332) {
                    var11 = 0.19337802;
                } else {
                    var11 = -0.32040733;
                }
            } else {
                if (input[4] < 0.3182591) {
                    if (input[15] < -0.1394486) {
                        var11 = -0.30200827;
                    } else {
                        var11 = 0.17686898;
                    }
                } else {
                    if (input[0] < -0.4726554) {
                        var11 = -0.2380553;
                    } else {
                        var11 = 0.23196465;
                    }
                }
            }
        } else {
            if (input[6] < -0.5098867) {
                var11 = -0.24210474;
            } else {
                if (input[3] < -0.3519866) {
                    var11 = 0.30976167;
                } else {
                    if (input[9] < 0.004940425) {
                        var11 = 0.29357213;
                    } else {
                        var11 = -0.19263975;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.17439) {
            if (input[4] < 0.1823163) {
                var11 = -0.31048873;
            } else {
                if (input[5] < 1.837902) {
                    var11 = 0.349079;
                } else {
                    if (input[6] < -0.2789393) {
                        var11 = -0.46257383;
                    } else {
                        var11 = 0.084117174;
                    }
                }
            }
        } else {
            if (input[3] < -0.2712604) {
                if (input[8] < 2.271676) {
                    if (input[16] < 0.7784909) {
                        var11 = -0.32419437;
                    } else {
                        var11 = 0.26056474;
                    }
                } else {
                    if (input[1] < 0.1080659) {
                        var11 = -0.3095647;
                    } else {
                        var11 = 0.09576667;
                    }
                }
            } else {
                if (input[7] < -0.3988132) {
                    if (input[4] < -0.2698194) {
                        var11 = -0.36111322;
                    } else {
                        var11 = 0.21903844;
                    }
                } else {
                    if (input[3] < -0.06078222) {
                        var11 = 0.07572921;
                    } else {
                        var11 = 0.45303652;
                    }
                }
            }
        }
    }
    var var12;
    if (input[5] < 1.631353) {
        var12 = -0.30219495;
    } else {
        if (input[2] < 2.518099) {
            if (input[7] < 0.1634102) {
                if (input[5] < 2.381189) {
                    if (input[5] < 2.183333) {
                        var12 = -0.025089165;
                    } else {
                        var12 = 0.1824582;
                    }
                } else {
                    if (input[8] < 2.346013) {
                        var12 = -0.27085692;
                    } else {
                        var12 = 0.049712256;
                    }
                }
            } else {
                var12 = -0.30852047;
            }
        } else {
            if (input[7] < -0.3212084) {
                var12 = -0.20151083;
            } else {
                var12 = 0.3026552;
            }
        }
    }
    var var13;
    if (input[1] < 0.4009889) {
        if (input[2] < 2.17439) {
            if (input[4] < 0.1656586) {
                var13 = -0.3056811;
            } else {
                if (input[8] < 1.92821) {
                    var13 = -0.21682025;
                } else {
                    var13 = 0.28528973;
                }
            }
        } else {
            if (input[4] < 0.09958803) {
                if (input[12] < 0.4114046) {
                    if (input[9] < 0.09887823) {
                        var13 = 0.022466794;
                    } else {
                        var13 = 0.25939113;
                    }
                } else {
                    if (input[3] < -0.06078222) {
                        var13 = -0.31091395;
                    } else {
                        var13 = 0.07641218;
                    }
                }
            } else {
                if (input[8] < 2.264731) {
                    var13 = -0.31167126;
                } else {
                    if (input[0] < -0.2101693) {
                        var13 = -0.14675264;
                    } else {
                        var13 = 0.27051285;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.1760592) {
            var13 = -0.28945652;
        } else {
            if (input[4] < 0.2598566) {
                if (input[4] < 0.2580619) {
                    var13 = 0.31529322;
                } else {
                    if (input[0] < -0.1192398) {
                        var13 = -0.036150493;
                    } else {
                        var13 = 0.30472296;
                    }
                }
            } else {
                if (input[1] < 0.5476063) {
                    if (input[15] < -0.1394486) {
                        var13 = -0.3565126;
                    } else {
                        var13 = 0.04315973;
                    }
                } else {
                    var13 = 0.29949453;
                }
            }
        }
    }
    var var14;
    if (input[0] < -0.2942165) {
        if (input[3] < -0.4656969) {
            if (input[4] < 0.3043144) {
                if (input[2] < 2.169925) {
                    if (input[7] < 0.1011593) {
                        var14 = -0.26988629;
                    } else {
                        var14 = -0.6670471;
                    }
                } else {
                    var14 = 0.21655859;
                }
            } else {
                if (input[16] < 0.3908112) {
                    if (input[15] < -0.1394486) {
                        var14 = -0.33350405;
                    } else {
                        var14 = 0.34535244;
                    }
                } else {
                    if (input[2] < 2.02312) {
                        var14 = 0.22712815;
                    } else {
                        var14 = -0.18073069;
                    }
                }
            }
        } else {
            if (input[6] < -0.5098867) {
                var14 = -0.20299366;
            } else {
                if (input[9] < 0.009312551) {
                    var14 = 0.3037639;
                } else {
                    if (input[3] < -0.3497865) {
                        var14 = 0.25474387;
                    } else {
                        var14 = -0.17423946;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.0504236) {
            if (input[6] < -0.259354) {
                if (input[8] < 2.280836) {
                    if (input[0] < -0.2447799) {
                        var14 = -0.20704193;
                    } else {
                        var14 = -1.0306791;
                    }
                } else {
                    if (input[1] < 0.102321) {
                        var14 = -0.167357;
                    } else {
                        var14 = 0.18672913;
                    }
                }
            } else {
                var14 = -0.3036938;
            }
        } else {
            if (input[2] < 2.18055) {
                if (input[7] < 0.02562146) {
                    if (input[12] < 0.3140548) {
                        var14 = -0.18270686;
                    } else {
                        var14 = -0.46193513;
                    }
                } else {
                    if (input[6] < -0.2803644) {
                        var14 = -0.06506537;
                    } else {
                        var14 = 0.24982403;
                    }
                }
            } else {
                if (input[14] < 2.145088) {
                    if (input[2] < 2.365464) {
                        var14 = 0.24159594;
                    } else {
                        var14 = -0.26550493;
                    }
                } else {
                    if (input[8] < 2.174136) {
                        var14 = -0.16633138;
                    } else {
                        var14 = 0.06975212;
                    }
                }
            }
        }
    }
    var var15;
    if (input[2] < 2.518099) {
        if (input[1] < -0.1065064) {
            if (input[2] < 2.237725) {
                if (input[8] < 1.967875) {
                    var15 = -0.30337662;
                } else {
                    var15 = -0.06102091;
                }
            } else {
                if (input[12] < 0.3862176) {
                    var15 = 0.24251777;
                } else {
                    var15 = 0.029390488;
                }
            }
        } else {
            if (input[7] < 0.1309062) {
                if (input[0] < -0.2093631) {
                    if (input[0] < -0.2790148) {
                        var15 = 0.07466188;
                    } else {
                        var15 = -0.19260302;
                    }
                } else {
                    if (input[2] < 2.246351) {
                        var15 = -0.0018074405;
                    } else {
                        var15 = 0.22575302;
                    }
                }
            } else {
                if (input[8] < 2.075521) {
                    var15 = -0.2995249;
                } else {
                    var15 = -0.0840406;
                }
            }
        }
    } else {
        if (input[7] < -0.3212084) {
            var15 = -0.18357404;
        } else {
            var15 = 0.2978139;
        }
    }
    var var16;
    if (input[1] < -0.1055216) {
        if (input[2] < 2.246351) {
            if (input[8] < 1.973918) {
                var16 = -0.30857736;
            } else {
                var16 = 0.105866954;
            }
        } else {
            var16 = 0.26789266;
        }
    } else {
        if (input[3] < -0.06078222) {
            if (input[12] < 0.4114046) {
                if (input[10] < 0.08641133) {
                    if (input[2] < 2.17439) {
                        var16 = -0.25159174;
                    } else {
                        var16 = 0.30461612;
                    }
                } else {
                    if (input[6] < -0.2519739) {
                        var16 = 0.047875647;
                    } else {
                        var16 = -0.110036545;
                    }
                }
            } else {
                if (input[15] < 0.334266) {
                    var16 = -0.9788084;
                } else {
                    if (input[4] < -0.2607036) {
                        var16 = -0.3563316;
                    } else {
                        var16 = 0.107203;
                    }
                }
            }
        } else {
            if (input[2] < 2.207068) {
                if (input[7] < -0.3988132) {
                    var16 = -0.3381837;
                } else {
                    var16 = 0.031715803;
                }
            } else {
                if (input[17] < 2.031078) {
                    if (input[7] < -0.3875488) {
                        var16 = -0.17865296;
                    } else {
                        var16 = 0.40971854;
                    }
                } else {
                    if (input[5] < 2.068172) {
                        var16 = 0.8390728;
                    } else {
                        var16 = 0.2374111;
                    }
                }
            }
        }
    }
    var var17;
    if (input[2] < 2.518099) {
        if (input[13] < 0.683242) {
            if (input[5] < 2.381189) {
                if (input[8] < 2.174136) {
                    if (input[2] < 2.342463) {
                        var17 = -0.019609712;
                    } else {
                        var17 = -0.3199624;
                    }
                } else {
                    if (input[6] < -0.3873572) {
                        var17 = -0.11042673;
                    } else {
                        var17 = 0.2838707;
                    }
                }
            } else {
                if (input[8] < 2.346013) {
                    if (input[0] < -0.2781561) {
                        var17 = -0.09744866;
                    } else {
                        var17 = -0.36961704;
                    }
                } else {
                    if (input[0] < -0.2648972) {
                        var17 = -0.11095527;
                    } else {
                        var17 = 0.25676394;
                    }
                }
            }
        } else {
            if (input[7] < 0.1108653) {
                var17 = 0.32642427;
            } else {
                if (input[0] < -0.4726554) {
                    if (input[0] < -0.5997012) {
                        var17 = 0.20753661;
                    } else {
                        var17 = -0.31288362;
                    }
                } else {
                    var17 = 0.2475876;
                }
            }
        }
    } else {
        if (input[7] < -0.3212084) {
            var17 = -0.17300738;
        } else {
            var17 = 0.29471093;
        }
    }
    var var18;
    if (input[7] < -0.2055921) {
        if (input[2] < 2.207068) {
            if (input[13] < -0.3224252) {
                if (input[1] < -0.094382) {
                    var18 = -0.2532269;
                } else {
                    var18 = 0.08868306;
                }
            } else {
                var18 = -0.30693653;
            }
        } else {
            if (input[3] < -0.06078222) {
                if (input[12] < 0.4239712) {
                    if (input[1] < 0.07622232) {
                        var18 = 0.2792393;
                    } else {
                        var18 = -0.1077585;
                    }
                } else {
                    if (input[8] < 2.346013) {
                        var18 = -0.3180973;
                    } else {
                        var18 = 0.20610222;
                    }
                }
            } else {
                if (input[14] < 2.184239) {
                    if (input[9] < 0.3155991) {
                        var18 = 0.020152852;
                    } else {
                        var18 = -0.38911408;
                    }
                } else {
                    if (input[1] < -0.103854) {
                        var18 = -0.30504796;
                    } else {
                        var18 = 0.4879813;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.09749398) {
            if (input[12] < 0.3140548) {
                if (input[4] < -0.06615886) {
                    if (input[11] < 2.30037) {
                        var18 = 0.2671351;
                    } else {
                        var18 = -0.16197899;
                    }
                } else {
                    if (input[2] < 2.17439) {
                        var18 = -0.22798742;
                    } else {
                        var18 = 0.32968986;
                    }
                }
            } else {
                if (input[15] < 0.3455419) {
                    if (input[11] < 2.164363) {
                        var18 = 0.21643788;
                    } else {
                        var18 = -0.57630235;
                    }
                } else {
                    if (input[1] < -0.06427199) {
                        var18 = 0.85106075;
                    } else {
                        var18 = 0.28474903;
                    }
                }
            }
        } else {
            if (input[4] < 0.1559838) {
                if (input[1] < 0.3375601) {
                    if (input[10] < 0.3522842) {
                        var18 = 0.072869286;
                    } else {
                        var18 = -1.2392616;
                    }
                } else {
                    if (input[8] < 2.276468) {
                        var18 = -0.2938998;
                    } else {
                        var18 = 0.017672084;
                    }
                }
            } else {
                if (input[7] < 0.2026235) {
                    if (input[2] < 2.037958) {
                        var18 = -0.0018378841;
                    } else {
                        var18 = 0.20910405;
                    }
                } else {
                    if (input[17] < 2.167711) {
                        var18 = -0.2886918;
                    } else {
                        var18 = -0.0010547364;
                    }
                }
            }
        }
    }
    var var19;
    if (input[13] < 0.683242) {
        if (input[2] < 2.518099) {
            if (input[10] < -0.1173321) {
                if (input[7] < -0.2951684) {
                    var19 = -0.2933519;
                } else {
                    var19 = -0.03480502;
                }
            } else {
                if (input[5] < 2.381189) {
                    if (input[14] < 2.287731) {
                        var19 = 0.025739744;
                    } else {
                        var19 = -0.15075167;
                    }
                } else {
                    if (input[8] < 2.346013) {
                        var19 = -0.2037812;
                    } else {
                        var19 = 0.012294446;
                    }
                }
            }
        } else {
            if (input[7] < -0.3093528) {
                var19 = -0.1300663;
            } else {
                var19 = 0.28723368;
            }
        }
    } else {
        if (input[7] < 0.1108653) {
            var19 = 0.31434932;
        } else {
            if (input[0] < -0.4726554) {
                if (input[14] < 1.855673) {
                    var19 = 0.1543344;
                } else {
                    var19 = -0.2812212;
                }
            } else {
                var19 = 0.23551522;
            }
        }
    }
    var var20;
    if (input[7] < -0.2055921) {
        if (input[2] < 2.207068) {
            if (input[13] < -0.3224252) {
                if (input[1] < -0.094382) {
                    var20 = -0.2170968;
                } else {
                    var20 = 0.10317912;
                }
            } else {
                var20 = -0.30274224;
            }
        } else {
            if (input[3] < -0.06078222) {
                if (input[12] < 0.4239712) {
                    if (input[1] < 0.07622232) {
                        var20 = 0.2629457;
                    } else {
                        var20 = -0.07384988;
                    }
                } else {
                    if (input[8] < 2.346013) {
                        var20 = -0.27572507;
                    } else {
                        var20 = 0.17653161;
                    }
                }
            } else {
                if (input[17] < 2.004957) {
                    if (input[12] < 0.5003657) {
                        var20 = -0.024926253;
                    } else {
                        var20 = -0.3671001;
                    }
                } else {
                    if (input[1] < -0.103854) {
                        var20 = -0.27468315;
                    } else {
                        var20 = 0.40987292;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.270789) {
            if (input[3] < -0.3479285) {
                if (input[3] < -0.3538537) {
                    if (input[1] < 0.5476063) {
                        var20 = -0.025132125;
                    } else {
                        var20 = 0.28273344;
                    }
                } else {
                    if (input[15] < 0.1730041) {
                        var20 = -0.0068087857;
                    } else {
                        var20 = 0.36130884;
                    }
                }
            } else {
                if (input[16] < 0.5993162) {
                    if (input[1] < 0.41351) {
                        var20 = -0.25093725;
                    } else {
                        var20 = 0.21965416;
                    }
                } else {
                    if (input[1] < 0.3739935) {
                        var20 = -0.10884292;
                    } else {
                        var20 = 0.31670755;
                    }
                }
            }
        } else {
            if (input[4] < 0.2644782) {
                if (input[12] < 0.3068546) {
                    if (input[15] < 0.02997826) {
                        var20 = -0.42075917;
                    } else {
                        var20 = 0.25845876;
                    }
                } else {
                    if (input[15] < 0.3307059) {
                        var20 = -0.2832092;
                    } else {
                        var20 = 0.329401;
                    }
                }
            } else {
                if (input[3] < -0.1617502) {
                    if (input[16] < -0.01345924) {
                        var20 = 0.35419497;
                    } else {
                        var20 = -0.292192;
                    }
                } else {
                    if (input[15] < 0.211142) {
                        var20 = -0.16811109;
                    } else {
                        var20 = 0.31824875;
                    }
                }
            }
        }
    }
    var var21;
    if (input[2] < 2.518099) {
        if (input[13] < 0.683242) {
            if (input[15] < -0.1240037) {
                if (input[2] < 2.030506) {
                    if (input[14] < 1.950358) {
                        var21 = -0.1791411;
                    } else {
                        var21 = 0.09179658;
                    }
                } else {
                    if (input[10] < 0.5370268) {
                        var21 = -0.19572674;
                    } else {
                        var21 = -0.3668509;
                    }
                }
            } else {
                if (input[7] < 0.1145587) {
                    if (input[9] < -0.2559603) {
                        var21 = 0.3322695;
                    } else {
                        var21 = -0.011480943;
                    }
                } else {
                    if (input[1] < 0.5407966) {
                        var21 = -0.29883087;
                    } else {
                        var21 = 0.15908694;
                    }
                }
            }
        } else {
            if (input[7] < 0.1108653) {
                var21 = 0.30321115;
            } else {
                if (input[15] < -0.08683313) {
                    var21 = 0.22141965;
                } else {
                    if (input[2] < 2.030506) {
                        var21 = -0.23505425;
                    } else {
                        var21 = -0.014948205;
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.3061892) {
            var21 = -0.087806925;
        } else {
            var21 = 0.28305003;
        }
    }
    var var22;
    if (input[1] < -0.1055216) {
        if (input[2] < 2.246351) {
            if (input[8] < 1.962198) {
                var22 = -0.2938852;
            } else {
                var22 = -0.020909233;
            }
        } else {
            var22 = 0.2268897;
        }
    } else {
        if (input[1] < 0.5476063) {
            if (input[4] < 0.3224951) {
                if (input[0] < -0.2093631) {
                    if (input[0] < -0.2380911) {
                        var22 = 0.020049041;
                    } else {
                        var22 = -0.26565614;
                    }
                } else {
                    if (input[2] < 2.405049) {
                        var22 = 0.030031137;
                    } else {
                        var22 = 0.29760206;
                    }
                }
            } else {
                var22 = -0.2947463;
            }
        } else {
            var22 = 0.275808;
        }
    }
    var var23;
    if (input[4] < -0.2729278) {
        if (input[2] < 2.246351) {
            if (input[1] < -0.09849825) {
                if (input[12] < 0.539195) {
                    if (input[5] < 2.135431) {
                        var23 = -0.30188322;
                    } else {
                        var23 = -0.0132991485;
                    }
                } else {
                    var23 = 0.17620397;
                }
            } else {
                if (input[14] < 2.184239) {
                    var23 = -0.31534284;
                } else {
                    if (input[5] < 2.057998) {
                        var23 = 0.37942192;
                    } else {
                        var23 = -0.21981679;
                    }
                }
            }
        } else {
            var23 = 0.26946077;
        }
    } else {
        if (input[3] < -0.06078222) {
            if (input[4] < -0.102439) {
                if (input[6] < -0.04491886) {
                    if (input[0] < -0.01059317) {
                        var23 = -0.25358692;
                    } else {
                        var23 = 0.054757085;
                    }
                } else {
                    if (input[8] < 1.943127) {
                        var23 = -0.023744319;
                    } else {
                        var23 = 0.33902332;
                    }
                }
            } else {
                if (input[5] < 1.837902) {
                    var23 = 0.31106734;
                } else {
                    if (input[11] < 1.981264) {
                        var23 = -0.13420527;
                    } else {
                        var23 = 0.030714016;
                    }
                }
            }
        } else {
            if (input[14] < 2.184239) {
                if (input[2] < 2.212811) {
                    var23 = -0.29738867;
                } else {
                    var23 = 0.2115296;
                }
            } else {
                if (input[5] < 2.068172) {
                    var23 = 0.41585746;
                } else {
                    if (input[4] < -0.2671341) {
                        var23 = -0.23498558;
                    } else {
                        var23 = 0.19535632;
                    }
                }
            }
        }
    }
    var var24;
    if (input[2] < 2.518099) {
        if (input[13] < 0.683242) {
            if (input[15] < -0.1394486) {
                var24 = -0.3116097;
            } else {
                if (input[11] < 2.430416) {
                    if (input[2] < 2.287115) {
                        var24 = -0.027650863;
                    } else {
                        var24 = 0.074333526;
                    }
                } else {
                    if (input[11] < 2.493072) {
                        var24 = -0.35881454;
                    } else {
                        var24 = -0.02601959;
                    }
                }
            }
        } else {
            if (input[7] < 0.1108653) {
                var24 = 0.29092658;
            } else {
                if (input[15] < -0.08683313) {
                    var24 = 0.19516347;
                } else {
                    if (input[9] < -0.2421837) {
                        var24 = -0.20961332;
                    } else {
                        var24 = -0.028947314;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.09593987) {
            var24 = -0.024187336;
        } else {
            var24 = 0.27529287;
        }
    }
    var var25;
    if (input[10] < -0.1187155) {
        var25 = -0.2672468;
    } else {
        if (input[5] < 1.837902) {
            if (input[1] < -0.06427199) {
                var25 = -0.15923908;
            } else {
                var25 = 0.29763782;
            }
        } else {
            if (input[2] < 1.977272) {
                if (input[6] < -0.2074243) {
                    if (input[1] < 0.5298869) {
                        var25 = -0.21727309;
                    } else {
                        var25 = 0.2501132;
                    }
                } else {
                    var25 = 0.32612368;
                }
            } else {
                if (input[11] < 2.04213) {
                    if (input[15] < -0.1394486) {
                        var25 = -0.2559691;
                    } else {
                        var25 = 0.26749316;
                    }
                } else {
                    if (input[15] < 0.06606733) {
                        var25 = -0.09412606;
                    } else {
                        var25 = 0.02528247;
                    }
                }
            }
        }
    }
    var var26;
    if (input[9] < 0.05236205) {
        if (input[3] < -0.4607451) {
            if (input[12] < -0.100145) {
                if (input[4] < 0.3043144) {
                    if (input[13] < 0.335457) {
                        var26 = 0.21170983;
                    } else {
                        var26 = -0.45362318;
                    }
                } else {
                    if (input[15] < -0.1240037) {
                        var26 = -0.14421758;
                    } else {
                        var26 = 0.22269149;
                    }
                }
            } else {
                if (input[17] < 1.68552) {
                    if (input[9] < -0.2421837) {
                        var26 = -0.2152089;
                    } else {
                        var26 = 0.28935224;
                    }
                } else {
                    if (input[17] < 2.143124) {
                        var26 = -0.3401286;
                    } else {
                        var26 = 0.18459006;
                    }
                }
            }
        } else {
            if (input[6] < -0.2150607) {
                if (input[9] < 0.004940425) {
                    var26 = 0.2938499;
                } else {
                    if (input[15] < 0.02521181) {
                        var26 = -0.32339996;
                    } else {
                        var26 = 0.22196046;
                    }
                }
            } else {
                var26 = -0.2485422;
            }
        }
    } else {
        if (input[15] < 0.08207233) {
            if (input[0] < -0.2403695) {
                if (input[2] < 2.346812) {
                    if (input[5] < 2.183333) {
                        var26 = -0.3108549;
                    } else {
                        var26 = 0.27810213;
                    }
                } else {
                    var26 = -0.2611211;
                }
            } else {
                if (input[3] < -0.2635604) {
                    if (input[12] < 0.0834493) {
                        var26 = -0.15276484;
                    } else {
                        var26 = -0.6171098;
                    }
                } else {
                    if (input[1] < 0.1866574) {
                        var26 = -0.18753383;
                    } else {
                        var26 = -0.017714879;
                    }
                }
            }
        } else {
            if (input[0] < -0.2127114) {
                if (input[2] < 2.287115) {
                    if (input[2] < 2.17439) {
                        var26 = -0.27061942;
                    } else {
                        var26 = -0.53453064;
                    }
                } else {
                    if (input[3] < -0.3630188) {
                        var26 = -0.43365932;
                    } else {
                        var26 = 0.018046726;
                    }
                }
            } else {
                if (input[4] < -0.2744323) {
                    if (input[2] < 2.246351) {
                        var26 = -0.22497874;
                    } else {
                        var26 = 0.19859713;
                    }
                } else {
                    if (input[11] < 2.303651) {
                        var26 = 0.007851351;
                    } else {
                        var26 = 0.1416174;
                    }
                }
            }
        }
    }
    var var27;
    if (input[7] < 0.1634102) {
        if (input[7] < -0.2055921) {
            if (input[2] < 2.199291) {
                var27 = -0.289603;
            } else {
                if (input[6] < -0.04491886) {
                    if (input[0] < -0.2380911) {
                        var27 = 0.088254;
                    } else {
                        var27 = -0.0896104;
                    }
                } else {
                    if (input[5] < 2.098228) {
                        var27 = -0.20335306;
                    } else {
                        var27 = 0.2993932;
                    }
                }
            }
        } else {
            if (input[3] < -0.2712604) {
                if (input[4] < 0.1543271) {
                    if (input[4] < 0.108665) {
                        var27 = 0.005936707;
                    } else {
                        var27 = -0.33513907;
                    }
                } else {
                    if (input[2] < 2.408076) {
                        var27 = -0.007937502;
                    } else {
                        var27 = 0.29439342;
                    }
                }
            } else {
                if (input[8] < 2.105556) {
                    if (input[5] < 2.251112) {
                        var27 = 0.070951685;
                    } else {
                        var27 = -0.49524465;
                    }
                } else {
                    var27 = 0.3203464;
                }
            }
        }
    } else {
        var27 = -0.25842145;
    }
    var var28;
    if (input[1] < 0.5476063) {
        if (input[4] < 0.3224951) {
            if (input[13] < 0.683242) {
                if (input[6] < -0.05258163) {
                    if (input[10] < -0.0691809) {
                        var28 = -0.22705737;
                    } else {
                        var28 = -0.0033142024;
                    }
                } else {
                    if (input[7] < -0.3841964) {
                        var28 = -0.0051009296;
                    } else {
                        var28 = 0.28034067;
                    }
                }
            } else {
                if (input[7] < 0.1108653) {
                    var28 = 0.2760561;
                } else {
                    var28 = -0.026588097;
                }
            }
        } else {
            var28 = -0.28254387;
        }
    } else {
        var28 = 0.2578961;
    }
    var var29;
    if (input[2] < 2.518099) {
        if (input[2] < 2.358805) {
            if (input[5] < 2.183333) {
                if (input[0] < -0.1163382) {
                    if (input[9] < 0.05422041) {
                        var29 = 0.018853463;
                    } else {
                        var29 = -0.23288806;
                    }
                } else {
                    if (input[12] < 0.3055396) {
                        var29 = 0.18216516;
                    } else {
                        var29 = -0.05014572;
                    }
                }
            } else {
                if (input[15] < 0.0504236) {
                    if (input[5] < 2.201922) {
                        var29 = -0.25798908;
                    } else {
                        var29 = 0.25269124;
                    }
                } else {
                    if (input[6] < 0.003166453) {
                        var29 = 0.23994164;
                    } else {
                        var29 = -0.22476023;
                    }
                }
            }
        } else {
            if (input[16] < -0.03535936) {
                if (input[17] < 2.479005) {
                    if (input[15] < 0.3845255) {
                        var29 = 0.23772518;
                    } else {
                        var29 = -0.13956352;
                    }
                } else {
                    var29 = -0.27562967;
                }
            } else {
                if (input[2] < 2.405969) {
                    if (input[6] < -0.3873572) {
                        var29 = -0.551882;
                    } else {
                        var29 = -0.14740482;
                    }
                } else {
                    if (input[9] < 0.1098558) {
                        var29 = -0.13165985;
                    } else {
                        var29 = 0.12000776;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.1569756) {
            var29 = -0.08121963;
        } else {
            var29 = 0.2602072;
        }
    }
    var var30;
    if (input[3] < -0.06078222) {
        if (input[12] < 0.4114046) {
            if (input[0] < -0.08452855) {
                if (input[6] < -0.2420253) {
                    if (input[2] < 1.859357) {
                        var30 = 0.2316842;
                    } else {
                        var30 = 0.0042098262;
                    }
                } else {
                    if (input[5] < 1.905577) {
                        var30 = 0.1657731;
                    } else {
                        var30 = -0.1682813;
                    }
                }
            } else {
                if (input[7] < -0.1209465) {
                    if (input[15] < 0.3845255) {
                        var30 = 0.28637627;
                    } else {
                        var30 = -0.18266582;
                    }
                } else {
                    if (input[3] < -0.1150965) {
                        var30 = -0.43702817;
                    } else {
                        var30 = 0.029966218;
                    }
                }
            }
        } else {
            if (input[4] < -0.2671341) {
                var30 = -0.29507938;
            } else {
                if (input[13] < -0.2521242) {
                    if (input[2] < 2.228469) {
                        var30 = 0.846968;
                    } else {
                        var30 = 0.20281994;
                    }
                } else {
                    if (input[15] < 0.3590172) {
                        var30 = -0.35342833;
                    } else {
                        var30 = 0.050594635;
                    }
                }
            }
        }
    } else {
        if (input[14] < 2.184239) {
            if (input[2] < 2.21612) {
                var30 = -0.30811974;
            } else {
                var30 = 0.15506041;
            }
        } else {
            if (input[3] < -0.02404176) {
                if (input[1] < -0.103854) {
                    var30 = -0.20264244;
                } else {
                    if (input[17] < 2.004957) {
                        var30 = 0.028235158;
                    } else {
                        var30 = 0.3753936;
                    }
                }
            } else {
                var30 = -0.23401456;
            }
        }
    }
    var var31;
    if (input[2] < 1.977272) {
        if (input[2] < 1.859357) {
            if (input[3] < -0.1683284) {
                if (input[1] < 0.5114267) {
                    if (input[15] < 0.2721651) {
                        var31 = -0.17463152;
                    } else {
                        var31 = 0.18747553;
                    }
                } else {
                    var31 = 0.30841413;
                }
            } else {
                if (input[11] < 1.833174) {
                    if (input[16] < -0.01345924) {
                        var31 = 0.13210215;
                    } else {
                        var31 = -0.38591504;
                    }
                } else {
                    var31 = 0.23923473;
                }
            }
        } else {
            if (input[6] < -0.2133744) {
                if (input[10] < 0.5849806) {
                    if (input[17] < 1.337206) {
                        var31 = 0.02525086;
                    } else {
                        var31 = -0.32180524;
                    }
                } else {
                    var31 = 0.18204133;
                }
            } else {
                var31 = 0.24557166;
            }
        }
    } else {
        if (input[11] < 2.046304) {
            if (input[12] < -0.1475303) {
                if (input[13] < 0.3217023) {
                    var31 = 0.18929805;
                } else {
                    if (input[3] < -0.6909494) {
                        var31 = -0.02154744;
                    } else {
                        var31 = -0.3401157;
                    }
                }
            } else {
                if (input[0] < -0.3644271) {
                    if (input[16] < 0.8015873) {
                        var31 = 0.2791902;
                    } else {
                        var31 = 0.10957538;
                    }
                } else {
                    var31 = 0.050363418;
                }
            }
        } else {
            if (input[4] < 0.31011) {
                if (input[4] < 0.1543271) {
                    if (input[4] < 0.1013839) {
                        var31 = 0.020074453;
                    } else {
                        var31 = -0.14783312;
                    }
                } else {
                    if (input[15] < 0.1670507) {
                        var31 = -0.035251934;
                    } else {
                        var31 = 0.2962193;
                    }
                }
            } else {
                if (input[8] < 2.062453) {
                    if (input[11] < 2.063825) {
                        var31 = -0.025078556;
                    } else {
                        var31 = -0.44567984;
                    }
                } else {
                    if (input[9] < -0.03017007) {
                        var31 = 0.23381506;
                    } else {
                        var31 = 0.039337665;
                    }
                }
            }
        }
    }
    var var32;
    if (input[0] < -0.2781561) {
        if (input[9] < 0.09887823) {
            if (input[15] < 0.2482548) {
                if (input[3] < -0.4607451) {
                    if (input[12] < -0.100145) {
                        var32 = 0.06992624;
                    } else {
                        var32 = -0.14530146;
                    }
                } else {
                    if (input[3] < -0.3497865) {
                        var32 = 0.2950618;
                    } else {
                        var32 = -0.024292586;
                    }
                }
            } else {
                if (input[15] < 0.298201) {
                    if (input[16] < 0.4725004) {
                        var32 = -0.5214574;
                    } else {
                        var32 = 0.102294706;
                    }
                } else {
                    var32 = 0.2707932;
                }
            }
        } else {
            if (input[12] < 0.2061413) {
                if (input[7] < -0.03443782) {
                    var32 = -0.19643535;
                } else {
                    var32 = 0.21244507;
                }
            } else {
                var32 = 0.34237733;
            }
        }
    } else {
        if (input[0] < -0.2638045) {
            if (input[1] < 0.3661432) {
                if (input[8] < 2.308898) {
                    if (input[17] < 2.115891) {
                        var32 = -0.08060359;
                    } else {
                        var32 = -0.3875043;
                    }
                } else {
                    if (input[7] < -0.03171678) {
                        var32 = 0.2898739;
                    } else {
                        var32 = -0.13931535;
                    }
                }
            } else {
                if (input[3] < -0.340672) {
                    if (input[13] < 0.1399109) {
                        var32 = -0.09220314;
                    } else {
                        var32 = -0.37366262;
                    }
                } else {
                    if (input[16] < 0.5993162) {
                        var32 = -0.23026802;
                    } else {
                        var32 = 0.15118113;
                    }
                }
            }
        } else {
            if (input[8] < 2.420179) {
                if (input[11] < 2.430416) {
                    if (input[17] < 1.671075) {
                        var32 = -0.10760172;
                    } else {
                        var32 = 0.02573072;
                    }
                } else {
                    var32 = -0.31271294;
                }
            } else {
                var32 = 0.3369231;
            }
        }
    }
    var var33;
    if (input[15] < -0.130593) {
        if (input[16] < 0.5491599) {
            if (input[16] < 0.1304278) {
                var33 = -0.073629566;
            } else {
                var33 = -0.26641217;
            }
        } else {
            var33 = -0.02667482;
        }
    } else {
        if (input[9] < -0.2559603) {
            if (input[17] < 1.574321) {
                var33 = -0.20983803;
            } else {
                var33 = 0.28484288;
            }
        } else {
            if (input[0] < -0.5997012) {
                if (input[6] < -0.6385441) {
                    var33 = 0.2096104;
                } else {
                    if (input[13] < 0.3404428) {
                        var33 = 0.025843283;
                    } else {
                        var33 = -0.48226345;
                    }
                }
            } else {
                if (input[0] < -0.2790148) {
                    if (input[9] < 0.1003691) {
                        var33 = 0.038622815;
                    } else {
                        var33 = 0.32929194;
                    }
                } else {
                    if (input[15] < 0.06606733) {
                        var33 = -0.2199833;
                    } else {
                        var33 = -0.00019013586;
                    }
                }
            }
        }
    }
    var var34;
    if (input[4] < 0.3182591) {
        if (input[13] < 0.683242) {
            if (input[9] < 0.05236205) {
                if (input[0] < -0.2525772) {
                    if (input[0] < -0.2907739) {
                        var34 = 0.04903785;
                    } else {
                        var34 = -0.30526495;
                    }
                } else {
                    if (input[12] < 0.07456549) {
                        var34 = -0.22937603;
                    } else {
                        var34 = 0.33045223;
                    }
                }
            } else {
                if (input[0] < -0.2109447) {
                    if (input[2] < 2.289761) {
                        var34 = -0.35071898;
                    } else {
                        var34 = -0.02133888;
                    }
                } else {
                    if (input[12] < 0.3055396) {
                        var34 = 0.0962623;
                    } else {
                        var34 = -0.03127669;
                    }
                }
            }
        } else {
            var34 = 0.25269866;
        }
    } else {
        if (input[1] < 0.5407966) {
            if (input[0] < -0.5997012) {
                var34 = 0.112678476;
            } else {
                var34 = -0.27332726;
            }
        } else {
            var34 = 0.1549114;
        }
    }
    var var35;
    if (input[2] < 2.18055) {
        if (input[4] < 0.1760592) {
            if (input[1] < 0.1003114) {
                if (input[13] < -0.0197266) {
                    if (input[10] < 0.09058227) {
                        var35 = -0.2568056;
                    } else {
                        var35 = -0.021882154;
                    }
                } else {
                    if (input[12] < 0.3232447) {
                        var35 = 0.31182885;
                    } else {
                        var35 = -0.21014148;
                    }
                }
            } else {
                if (input[13] < 0.02230614) {
                    var35 = 0.020847289;
                } else {
                    if (input[10] < 0.08641133) {
                        var35 = 0.048103247;
                    } else {
                        var35 = -0.32361895;
                    }
                }
            }
        } else {
            if (input[10] < 0.5308664) {
                var35 = 0.284578;
            } else {
                if (input[6] < -0.2074243) {
                    if (input[12] < 0.2554081) {
                        var35 = -0.015781622;
                    } else {
                        var35 = -0.25476426;
                    }
                } else {
                    var35 = 0.26704794;
                }
            }
        }
    } else {
        if (input[11] < 2.260348) {
            var35 = 0.28297248;
        } else {
            if (input[12] < 0.1582172) {
                if (input[14] < 2.119669) {
                    if (input[0] < -0.2525772) {
                        var35 = -0.4035605;
                    } else {
                        var35 = 0.031394318;
                    }
                } else {
                    if (input[2] < 2.438569) {
                        var35 = 0.2390553;
                    } else {
                        var35 = -0.057628464;
                    }
                }
            } else {
                if (input[15] < 0.1796661) {
                    if (input[3] < -0.2519962) {
                        var35 = -0.32427728;
                    } else {
                        var35 = 0.16008304;
                    }
                } else {
                    if (input[4] < 0.1523937) {
                        var35 = -0.02301132;
                    } else {
                        var35 = 0.19787653;
                    }
                }
            }
        }
    }
    var var36;
    if (input[8] < 2.346013) {
        if (input[3] < -0.06078222) {
            if (input[12] < 0.4033061) {
                if (input[9] < 0.2378038) {
                    if (input[12] < 0.3068546) {
                        var36 = 0.00039319522;
                    } else {
                        var36 = -0.12539062;
                    }
                } else {
                    if (input[5] < 2.023337) {
                        var36 = 0.055392195;
                    } else {
                        var36 = 0.26245445;
                    }
                }
            } else {
                if (input[13] < -0.2521242) {
                    if (input[4] < -0.2671341) {
                        var36 = -0.2466701;
                    } else {
                        var36 = 0.5338345;
                    }
                } else {
                    if (input[9] < 0.3453269) {
                        var36 = -0.29158473;
                    } else {
                        var36 = 0.18848091;
                    }
                }
            }
        } else {
            if (input[14] < 2.184239) {
                if (input[5] < 2.068172) {
                    var36 = -0.281815;
                } else {
                    var36 = 0.099750586;
                }
            } else {
                if (input[3] < -0.02404176) {
                    if (input[1] < -0.1034131) {
                        var36 = -0.10636172;
                    } else {
                        var36 = 0.2886951;
                    }
                } else {
                    var36 = -0.2293251;
                }
            }
        }
    } else {
        if (input[0] < -0.2638045) {
            if (input[1] < 0.3684651) {
                if (input[4] < -0.102439) {
                    var36 = -0.122424446;
                } else {
                    var36 = 0.28539747;
                }
            } else {
                if (input[10] < 0.4126082) {
                    var36 = -0.2810549;
                } else {
                    var36 = 0.17464817;
                }
            }
        } else {
            if (input[1] < 0.1986625) {
                var36 = -0.19445609;
            } else {
                if (input[11] < 2.297279) {
                    var36 = 0.10143125;
                } else {
                    var36 = 0.32596636;
                }
            }
        }
    }
    var var37;
    if (input[8] < 2.346013) {
        if (input[5] < 2.381189) {
            if (input[7] < 0.1236965) {
                if (input[2] < 2.411202) {
                    if (input[14] < 2.287731) {
                        var37 = 0.013728089;
                    } else {
                        var37 = -0.140041;
                    }
                } else {
                    if (input[11] < 2.393005) {
                        var37 = 0.01765431;
                    } else {
                        var37 = 0.2794199;
                    }
                }
            } else {
                var37 = -0.21638152;
            }
        } else {
            if (input[0] < -0.2781561) {
                if (input[9] < 0.09887823) {
                    if (input[0] < -0.2804113) {
                        var37 = -0.20591731;
                    } else {
                        var37 = 0.1693788;
                    }
                } else {
                    if (input[12] < 0.2061413) {
                        var37 = -0.019413542;
                    } else {
                        var37 = 0.28511167;
                    }
                }
            } else {
                if (input[5] < 2.481935) {
                    if (input[16] < -0.1212226) {
                        var37 = 0.14827436;
                    } else {
                        var37 = -0.37529328;
                    }
                } else {
                    if (input[9] < 0.09887823) {
                        var37 = 0.26217717;
                    } else {
                        var37 = -0.1305312;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.2638045) {
            if (input[1] < 0.3684651) {
                if (input[4] < -0.102439) {
                    var37 = -0.10567217;
                } else {
                    var37 = 0.27114397;
                }
            } else {
                if (input[10] < 0.4126082) {
                    var37 = -0.26098242;
                } else {
                    var37 = 0.16089332;
                }
            }
        } else {
            if (input[1] < 0.1986625) {
                var37 = -0.16953984;
            } else {
                if (input[11] < 2.297279) {
                    var37 = 0.08727616;
                } else {
                    var37 = 0.3065079;
                }
            }
        }
    }
    var var38;
    if (input[15] < -0.1394486) {
        var38 = -0.2190815;
    } else {
        if (input[7] < 0.1145587) {
            if (input[9] < -0.2559603) {
                if (input[17] < 1.591208) {
                    var38 = -0.16664198;
                } else {
                    var38 = 0.2767404;
                }
            } else {
                if (input[0] < -0.587382) {
                    if (input[6] < -0.6242719) {
                        var38 = 0.025308058;
                    } else {
                        var38 = -0.38697943;
                    }
                } else {
                    if (input[4] < 0.2992961) {
                        var38 = 0.0040340377;
                    } else {
                        var38 = 0.24710725;
                    }
                }
            }
        } else {
            if (input[1] < 0.5204947) {
                var38 = -0.24647745;
            } else {
                var38 = 0.063488916;
            }
        }
    }
    var var39;
    if (input[2] < 2.17439) {
        if (input[4] < 0.1656586) {
            var39 = -0.27570885;
        } else {
            if (input[4] < 0.2580619) {
                if (input[10] < 0.3890499) {
                    var39 = -0.050759997;
                } else {
                    var39 = 0.2783508;
                }
            } else {
                if (input[16] < -0.01345924) {
                    var39 = 0.32631934;
                } else {
                    if (input[9] < 0.1709309) {
                        var39 = 0.002025781;
                    } else {
                        var39 = -0.18592995;
                    }
                }
            }
        }
    } else {
        if (input[11] < 2.164363) {
            var39 = 0.3304972;
        } else {
            if (input[17] < 1.699851) {
                var39 = 0.27807114;
            } else {
                if (input[2] < 2.18055) {
                    if (input[12] < 0.3124632) {
                        var39 = 0.16573992;
                    } else {
                        var39 = -0.36224347;
                    }
                } else {
                    if (input[9] < 0.004940425) {
                        var39 = 0.25071684;
                    } else {
                        var39 = 0.003971188;
                    }
                }
            }
        }
    }
    var var40;
    if (input[15] < 0.005563278) {
        if (input[14] < 2.037492) {
            if (input[8] < 2.045644) {
                if (input[6] < -0.5098867) {
                    if (input[6] < -0.6242719) {
                        var40 = 0.020858198;
                    } else {
                        var40 = -0.24315917;
                    }
                } else {
                    var40 = 0.21553153;
                }
            } else {
                if (input[15] < -0.1394486) {
                    var40 = -0.18332602;
                } else {
                    if (input[5] < 2.054711) {
                        var40 = 0.010763385;
                    } else {
                        var40 = 0.25464416;
                    }
                }
            }
        } else {
            if (input[17] < 2.125023) {
                if (input[16] < 0.06963892) {
                    var40 = -0.031988494;
                } else {
                    var40 = -0.32515588;
                }
            } else {
                if (input[9] < -0.03017007) {
                    var40 = 0.17949703;
                } else {
                    var40 = -0.104799874;
                }
            }
        }
    } else {
        if (input[9] < 0.05422041) {
            if (input[4] < -0.102439) {
                if (input[0] < -0.2525772) {
                    if (input[1] < 0.07622232) {
                        var40 = 0.2122485;
                    } else {
                        var40 = -0.373727;
                    }
                } else {
                    var40 = 0.23912491;
                }
            } else {
                if (input[7] < 0.1086078) {
                    if (input[10] < 0.114619) {
                        var40 = -0.033509824;
                    } else {
                        var40 = 0.26168686;
                    }
                } else {
                    var40 = -0.12747894;
                }
            }
        } else {
            if (input[0] < -0.2109447) {
                if (input[2] < 2.289761) {
                    if (input[1] < 0.0807955) {
                        var40 = -0.06949131;
                    } else {
                        var40 = -0.40807185;
                    }
                } else {
                    if (input[2] < 2.342463) {
                        var40 = 0.23270129;
                    } else {
                        var40 = -0.054196652;
                    }
                }
            } else {
                if (input[8] < 2.105556) {
                    if (input[6] < -0.2803644) {
                        var40 = -0.17681187;
                    } else {
                        var40 = 0.028187215;
                    }
                } else {
                    if (input[11] < 2.30037) {
                        var40 = -0.033445485;
                    } else {
                        var40 = 0.26231307;
                    }
                }
            }
        }
    }
    var var41;
    if (input[12] < 0.510573) {
        if (input[3] < -0.06442265) {
            if (input[12] < 0.3068546) {
                if (input[9] < 0.2199192) {
                    if (input[6] < -0.2428079) {
                        var41 = 0.01723045;
                    } else {
                        var41 = -0.12828973;
                    }
                } else {
                    if (input[4] < -0.06615886) {
                        var41 = 0.032683875;
                    } else {
                        var41 = 0.2866308;
                    }
                }
            } else {
                if (input[11] < 2.164363) {
                    if (input[11] < 1.833174) {
                        var41 = -0.22215524;
                    } else {
                        var41 = 0.28063783;
                    }
                } else {
                    if (input[7] < -0.1669167) {
                        var41 = -0.0057103643;
                    } else {
                        var41 = -0.26028764;
                    }
                }
            }
        } else {
            if (input[4] < -0.2744323) {
                var41 = -0.20512791;
            } else {
                if (input[1] < -0.103854) {
                    var41 = -0.1613729;
                } else {
                    if (input[14] < 2.184239) {
                        var41 = 0.013117576;
                    } else {
                        var41 = 0.30797267;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.212811) {
            if (input[17] < 2.084706) {
                var41 = -0.11238839;
            } else {
                var41 = 0.19779122;
            }
        } else {
            var41 = -0.3074386;
        }
    }
    var var42;
    if (input[2] < 1.851128) {
        if (input[9] < 0.2120294) {
            if (input[7] < 0.01359072) {
                var42 = -0.094435506;
            } else {
                var42 = 0.28656542;
            }
        } else {
            if (input[3] < -0.1635378) {
                var42 = -0.29948878;
            } else {
                var42 = 0.056651913;
            }
        }
    } else {
        if (input[2] < 1.977272) {
            if (input[6] < -0.2789393) {
                if (input[14] < 1.624311) {
                    var42 = -0.025750766;
                } else {
                    if (input[11] < 1.977019) {
                        var42 = -0.3224141;
                    } else {
                        var42 = -0.031848934;
                    }
                }
            } else {
                if (input[5] < 1.905577) {
                    var42 = 0.28318048;
                } else {
                    var42 = -0.24507196;
                }
            }
        } else {
            if (input[4] < 0.3182591) {
                if (input[11] < 2.063825) {
                    if (input[9] < -0.2421837) {
                        var42 = -0.005161577;
                    } else {
                        var42 = 0.2782209;
                    }
                } else {
                    if (input[2] < 2.162431) {
                        var42 = -0.23091653;
                    } else {
                        var42 = 0.01141454;
                    }
                }
            } else {
                if (input[11] < 2.051404) {
                    var42 = 0.071873255;
                } else {
                    if (input[5] < 2.188689) {
                        var42 = -0.25462586;
                    } else {
                        var42 = -0.04592394;
                    }
                }
            }
        }
    }
    var var43;
    if (input[8] < 2.31089) {
        if (input[2] < 2.513822) {
            if (input[2] < 2.506435) {
                if (input[5] < 2.381189) {
                    if (input[2] < 2.411202) {
                        var43 = -0.006093151;
                    } else {
                        var43 = 0.16371876;
                    }
                } else {
                    var43 = -0.2598819;
                }
            } else {
                if (input[15] < 0.2310787) {
                    var43 = -0.110155635;
                } else {
                    if (input[12] < 0.2708127) {
                        var43 = 0.32469505;
                    } else {
                        var43 = 0.08537368;
                    }
                }
            }
        } else {
            if (input[3] < -0.3555219) {
                if (input[15] < 0.2917387) {
                    if (input[1] < 0.3655282) {
                        var43 = -0.45321682;
                    } else {
                        var43 = -0.1925543;
                    }
                } else {
                    var43 = 0.038304593;
                }
            } else {
                if (input[9] < 0.10577) {
                    var43 = 0.34290123;
                } else {
                    var43 = -0.14158495;
                }
            }
        }
    } else {
        if (input[2] < 2.365464) {
            var43 = 0.26579806;
        } else {
            if (input[11] < 2.493072) {
                if (input[17] < 1.953226) {
                    if (input[8] < 2.346013) {
                        var43 = -0.16177355;
                    } else {
                        var43 = 0.09524175;
                    }
                } else {
                    var43 = -0.34703022;
                }
            } else {
                if (input[16] < 0.5170185) {
                    if (input[14] < 2.440067) {
                        var43 = -0.10305917;
                    } else {
                        var43 = 0.134039;
                    }
                } else {
                    if (input[5] < 2.491502) {
                        var43 = 0.27715486;
                    } else {
                        var43 = 0.05163497;
                    }
                }
            }
        }
    }
    var var44;
    if (input[0] < -0.005734436) {
        if (input[6] < -0.05258163) {
            if (input[13] < -0.02985343) {
                if (input[15] < 0.1270777) {
                    if (input[9] < 0.06144128) {
                        var44 = 0.23841451;
                    } else {
                        var44 = -0.11837086;
                    }
                } else {
                    if (input[9] < 0.33067) {
                        var44 = -0.27887845;
                    } else {
                        var44 = 0.09660465;
                    }
                }
            } else {
                if (input[16] < 0.06554231) {
                    if (input[12] < 0.3318617) {
                        var44 = 0.10250308;
                    } else {
                        var44 = -0.07452101;
                    }
                } else {
                    if (input[3] < -0.06078222) {
                        var44 = -0.022022432;
                    } else {
                        var44 = 0.21301349;
                    }
                }
            }
        } else {
            if (input[7] < -0.3988132) {
                var44 = -0.17382412;
            } else {
                if (input[16] < -0.4169774) {
                    if (input[17] < 2.031078) {
                        var44 = -0.21056245;
                    } else {
                        var44 = 0.08654673;
                    }
                } else {
                    if (input[15] < 0.25197) {
                        var44 = -0.19594827;
                    } else {
                        var44 = 0.17892672;
                    }
                }
            }
        }
    } else {
        var44 = -0.20229225;
    }
    var var45;
    if (input[16] < 0.9486089) {
        if (input[15] < -0.130593) {
            var45 = -0.1924134;
        } else {
            if (input[9] < -0.2559603) {
                if (input[17] < 1.591208) {
                    var45 = -0.1164934;
                } else {
                    var45 = 0.2520042;
                }
            } else {
                if (input[7] < 0.1108653) {
                    if (input[6] < -0.6385441) {
                        var45 = 0.2739675;
                    } else {
                        var45 = -0.003975214;
                    }
                } else {
                    if (input[8] < 2.050897) {
                        var45 = -0.2202346;
                    } else {
                        var45 = 0.0060429936;
                    }
                }
            }
        }
    } else {
        var45 = 0.22037841;
    }
    var var46;
    if (input[12] < 0.510573) {
        if (input[3] < -0.2635604) {
            if (input[0] < -0.2403695) {
                if (input[0] < -0.2525772) {
                    if (input[3] < -0.3387127) {
                        var46 = 0.012652888;
                    } else {
                        var46 = -0.17135069;
                    }
                } else {
                    if (input[12] < 0.07456549) {
                        var46 = -0.2019725;
                    } else {
                        var46 = 0.22346391;
                    }
                }
            } else {
                if (input[7] < -0.07682507) {
                    if (input[12] < 0.1110251) {
                        var46 = -0.06523326;
                    } else {
                        var46 = -0.3902426;
                    }
                } else {
                    if (input[2] < 2.408076) {
                        var46 = -0.18233281;
                    } else {
                        var46 = 0.13398027;
                    }
                }
            }
        } else {
            if (input[12] < 0.2907534) {
                if (input[17] < 1.679398) {
                    if (input[7] < 0.06082601) {
                        var46 = -0.09208915;
                    } else {
                        var46 = 0.15088731;
                    }
                } else {
                    if (input[13] < -0.04905465) {
                        var46 = -0.16194333;
                    } else {
                        var46 = 0.23965766;
                    }
                }
            } else {
                if (input[15] < 0.2445841) {
                    if (input[17] < 1.692458) {
                        var46 = 0.16115959;
                    } else {
                        var46 = -0.31224155;
                    }
                } else {
                    if (input[5] < 2.028323) {
                        var46 = -0.16708344;
                    } else {
                        var46 = 0.054955028;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.212811) {
            if (input[1] < -0.1006322) {
                var46 = -0.10953955;
            } else {
                var46 = 0.15938213;
            }
        } else {
            var46 = -0.27095944;
        }
    }
    var var47;
    if (input[10] < 0.114619) {
        if (input[0] < -0.2478182) {
            if (input[11] < 2.275945) {
                var47 = -0.18318272;
            } else {
                if (input[15] < 0.06165489) {
                    var47 = 0.019951481;
                } else {
                    var47 = 0.28727835;
                }
            }
        } else {
            if (input[3] < -0.147935) {
                if (input[9] < 0.05236205) {
                    var47 = 0.09625193;
                } else {
                    if (input[3] < -0.2654782) {
                        var47 = -0.06729231;
                    } else {
                        var47 = -0.42750844;
                    }
                }
            } else {
                if (input[12] < 0.3140548) {
                    if (input[9] < 0.2284386) {
                        var47 = -0.13151088;
                    } else {
                        var47 = 0.2758673;
                    }
                } else {
                    if (input[6] < -0.05954073) {
                        var47 = -0.19413021;
                    } else {
                        var47 = 0.017173754;
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.3021007) {
            if (input[0] < -0.2781561) {
                if (input[15] < 0.298201) {
                    if (input[9] < 0.1010132) {
                        var47 = -0.024752865;
                    } else {
                        var47 = 0.19690134;
                    }
                } else {
                    var47 = 0.28018218;
                }
            } else {
                if (input[2] < 2.408076) {
                    var47 = -0.31921142;
                } else {
                    if (input[4] < 0.1543271) {
                        var47 = -0.103604734;
                    } else {
                        var47 = 0.16456842;
                    }
                }
            }
        } else {
            if (input[11] < 2.303651) {
                if (input[6] < -0.2803644) {
                    if (input[2] < 1.851128) {
                        var47 = 0.18765189;
                    } else {
                        var47 = -0.27587438;
                    }
                } else {
                    if (input[5] < 1.905577) {
                        var47 = 0.2190005;
                    } else {
                        var47 = -0.0071679153;
                    }
                }
            } else {
                if (input[15] < 0.02521181) {
                    if (input[12] < 0.06618593) {
                        var47 = 0.0041194395;
                    } else {
                        var47 = -0.23884976;
                    }
                } else {
                    if (input[4] < 0.2509181) {
                        var47 = 0.28847006;
                    } else {
                        var47 = -0.044175036;
                    }
                }
            }
        }
    }
    var var48;
    if (input[8] < 2.346013) {
        if (input[2] < 2.358805) {
            if (input[2] < 2.293503) {
                if (input[14] < 2.043207) {
                    if (input[2] < 2.18055) {
                        var48 = 0.008087243;
                    } else {
                        var48 = 0.24821943;
                    }
                } else {
                    if (input[15] < 0.06606733) {
                        var48 = -0.18072407;
                    } else {
                        var48 = -0.012772603;
                    }
                }
            } else {
                if (input[14] < 2.188111) {
                    var48 = 0.27985266;
                } else {
                    if (input[9] < 0.09387054) {
                        var48 = 0.22216217;
                    } else {
                        var48 = -0.2402656;
                    }
                }
            }
        } else {
            if (input[5] < 2.481935) {
                if (input[2] < 2.513822) {
                    if (input[0] < -0.2790148) {
                        var48 = 0.13369095;
                    } else {
                        var48 = -0.09245615;
                    }
                } else {
                    if (input[10] < 0.4085395) {
                        var48 = -0.010950535;
                    } else {
                        var48 = -0.3039381;
                    }
                }
            } else {
                if (input[3] < -0.3555219) {
                    var48 = -0.24971499;
                } else {
                    var48 = 0.2780095;
                }
            }
        }
    } else {
        if (input[0] < -0.2655832) {
            if (input[1] < 0.3684651) {
                if (input[4] < -0.102439) {
                    var48 = -0.051475365;
                } else {
                    var48 = 0.25235644;
                }
            } else {
                if (input[11] < 2.505838) {
                    var48 = -0.2213809;
                } else {
                    var48 = 0.026165405;
                }
            }
        } else {
            if (input[1] < 0.1986625) {
                var48 = -0.14308408;
            } else {
                if (input[11] < 2.297279) {
                    var48 = 0.05800444;
                } else {
                    var48 = 0.27864844;
                }
            }
        }
    }
    var var49;
    if (input[1] < 0.5407966) {
        if (input[4] < 0.3182591) {
            if (input[13] < 0.683242) {
                if (input[10] < 0.5642681) {
                    if (input[5] < 1.905577) {
                        var49 = 0.12204448;
                    } else {
                        var49 = -0.0042643556;
                    }
                } else {
                    if (input[8] < 2.034105) {
                        var49 = -0.23792908;
                    } else {
                        var49 = 0.19540246;
                    }
                }
            } else {
                var49 = 0.20650934;
            }
        } else {
            if (input[11] < 2.051404) {
                var49 = 0.05255262;
            } else {
                var49 = -0.23733702;
            }
        }
    } else {
        if (input[4] < 0.3018864) {
            var49 = -0.058976293;
        } else {
            var49 = 0.2367009;
        }
    }
    var var50;
    if (input[4] < -0.2713585) {
        if (input[12] < 0.4239712) {
            if (input[1] < -0.1065064) {
                var50 = 0.037896696;
            } else {
                var50 = 0.22384466;
            }
        } else {
            if (input[5] < 2.057998) {
                if (input[15] < 0.5462608) {
                    var50 = -0.16208695;
                } else {
                    if (input[8] < 1.900763) {
                        var50 = 0.24783403;
                    } else {
                        var50 = 0.0021571845;
                    }
                }
            } else {
                if (input[10] < -0.07521134) {
                    var50 = -0.2679404;
                } else {
                    if (input[2] < 2.237725) {
                        var50 = 0.0747135;
                    } else {
                        var50 = -0.18580037;
                    }
                }
            }
        }
    } else {
        if (input[15] < 0.3496813) {
            if (input[12] < 0.3318617) {
                if (input[3] < -0.143307) {
                    if (input[6] < -0.2428079) {
                        var50 = 0.0079214005;
                    } else {
                        var50 = -0.10292695;
                    }
                } else {
                    if (input[7] < -0.1209465) {
                        var50 = 0.22877096;
                    } else {
                        var50 = -0.15203702;
                    }
                }
            } else {
                if (input[1] < 0.09858648) {
                    var50 = 0.13640805;
                } else {
                    if (input[1] < 0.2016773) {
                        var50 = -0.32833913;
                    } else {
                        var50 = -0.0029311564;
                    }
                }
            }
        } else {
            if (input[8] < 1.92821) {
                if (input[3] < -0.06078222) {
                    if (input[4] < 0.2674507) {
                        var50 = -0.20356776;
                    } else {
                        var50 = 0.15631789;
                    }
                } else {
                    if (input[2] < 2.21064) {
                        var50 = -0.09185415;
                    } else {
                        var50 = 0.20112368;
                    }
                }
            } else {
                if (input[0] < -0.2127114) {
                    var50 = -0.106147684;
                } else {
                    if (input[7] < -0.3787393) {
                        var50 = -0.06885284;
                    } else {
                        var50 = 0.24190466;
                    }
                }
            }
        }
    }
    var var51;
    if (input[8] < 2.346013) {
        if (input[2] < 2.358805) {
            if (input[2] < 2.293503) {
                if (input[10] < 0.114619) {
                    if (input[3] < -0.2635604) {
                        var51 = -0.19972382;
                    } else {
                        var51 = -0.0042913803;
                    }
                } else {
                    if (input[2] < 2.162431) {
                        var51 = -0.014468222;
                    } else {
                        var51 = 0.1568287;
                    }
                }
            } else {
                if (input[9] < 0.09387054) {
                    var51 = 0.25105065;
                } else {
                    if (input[15] < 0.3223133) {
                        var51 = -0.21803613;
                    } else {
                        var51 = 0.2077147;
                    }
                }
            }
        } else {
            if (input[14] < 2.134284) {
                var51 = -0.24908556;
            } else {
                if (input[0] < -0.2127114) {
                    if (input[0] < -0.2781561) {
                        var51 = 0.025750183;
                    } else {
                        var51 = -0.19461504;
                    }
                } else {
                    if (input[1] < 0.3408778) {
                        var51 = 0.16881837;
                    } else {
                        var51 = -0.22456644;
                    }
                }
            }
        }
    } else {
        if (input[16] < 0.6176001) {
            if (input[5] < 2.486625) {
                if (input[1] < 0.1999779) {
                    var51 = -0.051656857;
                } else {
                    var51 = 0.23098181;
                }
            } else {
                if (input[2] < 2.513822) {
                    var51 = -0.22117494;
                } else {
                    if (input[9] < 0.02317094) {
                        var51 = -0.010851225;
                    } else {
                        var51 = 0.17128342;
                    }
                }
            }
        } else {
            if (input[0] < -0.2744471) {
                var51 = 0.041528862;
            } else {
                var51 = 0.24377742;
            }
        }
    }
    var var52;
    if (input[0] < -0.005734436) {
        if (input[3] < -0.02404176) {
            if (input[3] < -0.06078222) {
                if (input[7] < -0.3841964) {
                    if (input[12] < 0.4114046) {
                        var52 = 0.17014492;
                    } else {
                        var52 = -0.26830897;
                    }
                } else {
                    if (input[1] < 0.07622232) {
                        var52 = 0.17801774;
                    } else {
                        var52 = -0.0029221296;
                    }
                }
            } else {
                if (input[14] < 2.184239) {
                    var52 = -0.16872835;
                } else {
                    if (input[2] < 2.212811) {
                        var52 = 0.27029037;
                    } else {
                        var52 = -0.012900413;
                    }
                }
            }
        } else {
            var52 = -0.18511713;
        }
    } else {
        var52 = -0.18153736;
    }
    var var53;
    if (input[5] < 2.481935) {
        if (input[2] < 2.513822) {
            if (input[14] < 2.349576) {
                if (input[16] < 0.8866) {
                    if (input[14] < 2.287731) {
                        var53 = 0.00090177025;
                    } else {
                        var53 = -0.113324694;
                    }
                } else {
                    var53 = 0.20009187;
                }
            } else {
                if (input[13] < 0.5730949) {
                    if (input[3] < -0.3444718) {
                        var53 = 0.26842847;
                    } else {
                        var53 = -0.05230724;
                    }
                } else {
                    if (input[16] < 0.8504567) {
                        var53 = -0.24523975;
                    } else {
                        var53 = 0.033139322;
                    }
                }
            }
        } else {
            if (input[15] < 0.2849031) {
                if (input[3] < -0.3555219) {
                    if (input[1] < 0.3655282) {
                        var53 = -0.32286102;
                    } else {
                        var53 = -0.11340787;
                    }
                } else {
                    var53 = -0.007243578;
                }
            } else {
                var53 = 0.036402512;
            }
        }
    } else {
        if (input[3] < -0.3555219) {
            var53 = -0.1350286;
        } else {
            if (input[11] < 2.509427) {
                if (input[0] < -0.2655832) {
                    var53 = -0.19696788;
                } else {
                    var53 = 0.20390879;
                }
            } else {
                if (input[4] < -0.102439) {
                    var53 = -0.07655534;
                } else {
                    var53 = 0.2727399;
                }
            }
        }
    }
    var var54;
    if (input[12] < 0.5003657) {
        if (input[3] < -0.06442265) {
            if (input[12] < 0.4033061) {
                if (input[0] < -0.08452855) {
                    if (input[10] < 0.114619) {
                        var54 = -0.067055486;
                    } else {
                        var54 = 0.012458081;
                    }
                } else {
                    if (input[4] < -0.04308297) {
                        var54 = 0.21196038;
                    } else {
                        var54 = -0.16342694;
                    }
                }
            } else {
                if (input[10] < -0.1081249) {
                    if (input[4] < -0.2651071) {
                        var54 = -0.19851868;
                    } else {
                        var54 = 0.3450187;
                    }
                } else {
                    if (input[9] < 0.3392383) {
                        var54 = -0.2731178;
                    } else {
                        var54 = -0.009902334;
                    }
                }
            }
        } else {
            if (input[2] < 2.21064) {
                if (input[14] < 2.184239) {
                    var54 = -0.21660118;
                } else {
                    if (input[0] < -0.01059317) {
                        var54 = -0.053919137;
                    } else {
                        var54 = 0.19590905;
                    }
                }
            } else {
                if (input[1] < -0.1034131) {
                    var54 = 0.000003823448;
                } else {
                    var54 = 0.24951886;
                }
            }
        }
    } else {
        if (input[2] < 2.212811) {
            if (input[4] < -0.276436) {
                var54 = -0.13467792;
            } else {
                if (input[9] < 0.3232074) {
                    var54 = 0.13481165;
                } else {
                    var54 = 0.031251453;
                }
            }
        } else {
            var54 = -0.22775401;
        }
    }
    var var55;
    if (input[15] < -0.1240037) {
        if (input[17] < 1.800078) {
            var55 = -0.19032313;
        } else {
            var55 = 0.017581232;
        }
    } else {
        if (input[9] < -0.2559603) {
            var55 = 0.19831434;
        } else {
            if (input[0] < -0.5997012) {
                if (input[6] < -0.6385441) {
                    var55 = 0.1498377;
                } else {
                    if (input[13] < 0.3428571) {
                        var55 = -0.011937609;
                    } else {
                        var55 = -0.32363203;
                    }
                }
            } else {
                if (input[9] < 0.05236205) {
                    if (input[16] < 0.7905288) {
                        var55 = 0.08594025;
                    } else {
                        var55 = -0.12688917;
                    }
                } else {
                    if (input[15] < 0.08207233) {
                        var55 = -0.15312597;
                    } else {
                        var55 = -0.0025950784;
                    }
                }
            }
        }
    }
    var var56;
    if (input[8] < 2.346013) {
        if (input[4] < 0.1543271) {
            if (input[4] < 0.1013839) {
                if (input[2] < 2.17439) {
                    var56 = -0.23388864;
                } else {
                    if (input[11] < 2.164363) {
                        var56 = 0.26515746;
                    } else {
                        var56 = 0.0014070335;
                    }
                }
            } else {
                if (input[3] < -0.2962103) {
                    if (input[0] < -0.2117956) {
                        var56 = -0.2317031;
                    } else {
                        var56 = 0.019863365;
                    }
                } else {
                    var56 = 0.16769469;
                }
            }
        } else {
            if (input[8] < 2.280836) {
                if (input[5] < 1.837902) {
                    var56 = 0.22370477;
                } else {
                    if (input[16] < -0.01345924) {
                        var56 = 0.15107842;
                    } else {
                        var56 = -0.029004795;
                    }
                }
            } else {
                if (input[11] < 2.403602) {
                    var56 = 0.2626697;
                } else {
                    var56 = 0.046690654;
                }
            }
        }
    } else {
        if (input[4] < -0.102439) {
            var56 = -0.08744459;
        } else {
            if (input[1] < 0.3684651) {
                if (input[11] < 2.297279) {
                    var56 = -0.011266183;
                } else {
                    var56 = 0.24407265;
                }
            } else {
                if (input[0] < -0.2655832) {
                    if (input[15] < 0.25197) {
                        var56 = -0.0230236;
                    } else {
                        var56 = -0.19250068;
                    }
                } else {
                    var56 = 0.20412162;
                }
            }
        }
    }
    var var57;
    if (input[16] < 0.9486089) {
        if (input[15] < -0.130593) {
            var57 = -0.1486929;
        } else {
            if (input[12] < -0.100145) {
                if (input[4] < 0.3043144) {
                    if (input[16] < 0.208973) {
                        var57 = 0.07953776;
                    } else {
                        var57 = -0.2870254;
                    }
                } else {
                    if (input[4] < 0.3182591) {
                        var57 = 0.2479093;
                    } else {
                        var57 = -0.08229213;
                    }
                }
            } else {
                if (input[15] < -0.0573114) {
                    if (input[0] < -0.4537559) {
                        var57 = -0.24181904;
                    } else {
                        var57 = -0.0020701177;
                    }
                } else {
                    if (input[1] < 0.5334302) {
                        var57 = -0.0018584002;
                    } else {
                        var57 = 0.17488846;
                    }
                }
            }
        }
    } else {
        var57 = 0.17845134;
    }
    var var58;
    if (input[1] < -0.103854) {
        if (input[2] < 2.237725) {
            var58 = -0.2094476;
        } else {
            var58 = 0.108164;
        }
    } else {
        if (input[5] < 1.837902) {
            var58 = 0.16514981;
        } else {
            if (input[5] < 1.988168) {
                if (input[16] < -0.01345924) {
                    var58 = 0.19616038;
                } else {
                    if (input[5] < 1.905577) {
                        var58 = -0.00026738012;
                    } else {
                        var58 = -0.2554258;
                    }
                }
            } else {
                if (input[14] < 2.043207) {
                    if (input[8] < 2.045644) {
                        var58 = 0.010562094;
                    } else {
                        var58 = 0.15770361;
                    }
                } else {
                    if (input[6] < -0.4350005) {
                        var58 = -0.14848213;
                    } else {
                        var58 = 0.00965118;
                    }
                }
            }
        }
    }
    var var59;
    if (input[1] < 0.5407966) {
        if (input[4] < 0.3224951) {
            if (input[15] < -0.1240037) {
                if (input[1] < 0.5158872) {
                    var59 = 0.023147546;
                } else {
                    var59 = -0.19657062;
                }
            } else {
                if (input[6] < -0.6385441) {
                    if (input[4] < 0.3182591) {
                        var59 = 0.2508348;
                    } else {
                        var59 = -0.026639352;
                    }
                } else {
                    if (input[0] < -0.5997012) {
                        var59 = -0.15734509;
                    } else {
                        var59 = 0.0032604614;
                    }
                }
            }
        } else {
            var59 = -0.18120721;
        }
    } else {
        if (input[4] < 0.3018864) {
            var59 = -0.049713258;
        } else {
            var59 = 0.21136671;
        }
    }
    var var60;
    if (input[0] < -0.005734436) {
        if (input[5] < 2.481935) {
            if (input[2] < 2.513822) {
                if (input[16] < 0.8627123) {
                    if (input[16] < 0.8253269) {
                        var60 = 0.0064940588;
                    } else {
                        var60 = -0.14527059;
                    }
                } else {
                    var60 = 0.17955181;
                }
            } else {
                if (input[3] < -0.3567779) {
                    var60 = -0.28871202;
                } else {
                    if (input[0] < -0.2781561) {
                        var60 = 0.10284858;
                    } else {
                        var60 = -0.24304798;
                    }
                }
            }
        } else {
            if (input[3] < -0.3555219) {
                var60 = -0.11019491;
            } else {
                if (input[10] < 0.4029759) {
                    if (input[10] < 0.3890499) {
                        var60 = 0.030169865;
                    } else {
                        var60 = -0.14533886;
                    }
                } else {
                    if (input[5] < 2.491502) {
                        var60 = 0.26398563;
                    } else {
                        var60 = -0.031836007;
                    }
                }
            }
        }
    } else {
        var60 = -0.15780795;
    }
    var var61;
    if (input[7] < -0.2008044) {
        if (input[2] < 2.199291) {
            var61 = -0.22655763;
        } else {
            if (input[0] < -0.2540881) {
                if (input[14] < 2.086607) {
                    var61 = -0.36498648;
                } else {
                    if (input[12] < 0.1003907) {
                        var61 = 0.046838406;
                    } else {
                        var61 = -0.036819562;
                    }
                }
            } else {
                if (input[0] < -0.2478182) {
                    if (input[0] < -0.2525772) {
                        var61 = 0.0042570652;
                    } else {
                        var61 = 0.26430523;
                    }
                } else {
                    if (input[6] < -0.1446764) {
                        var61 = -0.13463219;
                    } else {
                        var61 = 0.010029894;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.07736126) {
            var61 = 0.2026192;
        } else {
            if (input[15] < 0.3496813) {
                if (input[12] < 0.3232447) {
                    if (input[13] < 0.1357654) {
                        var61 = 0.16759153;
                    } else {
                        var61 = -0.010851396;
                    }
                } else {
                    if (input[13] < 0.1138792) {
                        var61 = -0.21876717;
                    } else {
                        var61 = -0.022972398;
                    }
                }
            } else {
                if (input[13] < 0.1945839) {
                    var61 = 0.23274237;
                } else {
                    if (input[3] < -0.1654891) {
                        var61 = -0.06580398;
                    } else {
                        var61 = 0.19369192;
                    }
                }
            }
        }
    }
    var var62;
    if (input[12] < 0.510573) {
        if (input[16] < -0.3800975) {
            if (input[14] < 2.195239) {
                var62 = -0.18646573;
            } else {
                var62 = 0.05487635;
            }
        } else {
            if (input[6] < -0.05416803) {
                if (input[4] < -0.102439) {
                    if (input[1] < 0.07622232) {
                        var62 = 0.026743898;
                    } else {
                        var62 = -0.164244;
                    }
                } else {
                    if (input[5] < 1.837902) {
                        var62 = 0.19639844;
                    } else {
                        var62 = 0.0040182867;
                    }
                }
            } else {
                if (input[17] < 2.0022) {
                    if (input[2] < 2.246351) {
                        var62 = -0.13791712;
                    } else {
                        var62 = 0.15693736;
                    }
                } else {
                    if (input[0] < -0.0167635) {
                        var62 = -0.094842605;
                    } else {
                        var62 = 0.25555202;
                    }
                }
            }
        }
    } else {
        if (input[2] < 2.212811) {
            var62 = 0.03941389;
        } else {
            var62 = -0.21128334;
        }
    }
    var var63;
    if (input[0] < -0.242495) {
        if (input[0] < -0.2525772) {
            if (input[14] < 1.864306) {
                if (input[12] < -0.1475303) {
                    var63 = -0.12386855;
                } else {
                    if (input[17] < 1.651161) {
                        var63 = 0.2527971;
                    } else {
                        var63 = 0.06195591;
                    }
                }
            } else {
                if (input[8] < 2.042243) {
                    if (input[1] < 0.07622232) {
                        var63 = 0.18430072;
                    } else {
                        var63 = -0.15605493;
                    }
                } else {
                    if (input[11] < 2.063825) {
                        var63 = 0.17199087;
                    } else {
                        var63 = -0.0313936;
                    }
                }
            }
        } else {
            if (input[10] < 0.09654386) {
                var63 = -0.16889463;
            } else {
                if (input[12] < 0.07235249) {
                    var63 = -0.025031956;
                } else {
                    var63 = 0.2670861;
                }
            }
        }
    } else {
        if (input[0] < -0.2137339) {
            if (input[8] < 2.29175) {
                if (input[0] < -0.2380911) {
                    if (input[1] < 0.08903217) {
                        var63 = -0.22447678;
                    } else {
                        var63 = 0.12782688;
                    }
                } else {
                    if (input[10] < 0.3585816) {
                        var63 = -0.2947951;
                    } else {
                        var63 = -0.073029235;
                    }
                }
            } else {
                var63 = 0.14658503;
            }
        } else {
            if (input[6] < -0.4194137) {
                if (input[17] < 2.248903) {
                    if (input[1] < 0.3393776) {
                        var63 = 0.28260866;
                    } else {
                        var63 = -0.041361686;
                    }
                } else {
                    var63 = -0.099470355;
                }
            } else {
                if (input[6] < -0.2803644) {
                    if (input[10] < 0.3564315) {
                        var63 = 0.18769619;
                    } else {
                        var63 = -0.20492056;
                    }
                } else {
                    if (input[3] < -0.1698373) {
                        var63 = 0.1611502;
                    } else {
                        var63 = -0.017534366;
                    }
                }
            }
        }
    }
    var var64;
    if (input[8] < 2.346013) {
        if (input[9] < 0.3052695) {
            if (input[1] < 0.07622232) {
                if (input[2] < 2.25441) {
                    if (input[3] < -0.06163715) {
                        var64 = -0.14429064;
                    } else {
                        var64 = 0.15925926;
                    }
                } else {
                    var64 = 0.22028254;
                }
            } else {
                if (input[4] < -0.102439) {
                    if (input[0] < -0.2525772) {
                        var64 = -0.27217698;
                    } else {
                        var64 = 0.013300323;
                    }
                } else {
                    if (input[5] < 1.837902) {
                        var64 = 0.19158377;
                    } else {
                        var64 = 0.00024139351;
                    }
                }
            }
        } else {
            if (input[14] < 2.180659) {
                if (input[1] < 0.1999779) {
                    if (input[15] < 0.3845255) {
                        var64 = -0.022820467;
                    } else {
                        var64 = -0.28433612;
                    }
                } else {
                    if (input[15] < 0.375255) {
                        var64 = -0.019859986;
                    } else {
                        var64 = 0.16064554;
                    }
                }
            } else {
                if (input[16] < -0.2148102) {
                    if (input[11] < 2.303651) {
                        var64 = -0.046256296;
                    } else {
                        var64 = 0.27686825;
                    }
                } else {
                    if (input[2] < 2.212811) {
                        var64 = 0.012988123;
                    } else {
                        var64 = -0.21156876;
                    }
                }
            }
        }
    } else {
        if (input[10] < 0.4126082) {
            if (input[15] < 0.3496813) {
                if (input[7] < -0.315953) {
                    var64 = -0.16949199;
                } else {
                    if (input[7] < -0.1124734) {
                        var64 = 0.1665704;
                    } else {
                        var64 = -0.040868886;
                    }
                }
            } else {
                var64 = 0.1793497;
            }
        } else {
            var64 = 0.18997465;
        }
    }
    var var65;
    if (input[17] < 1.418239) {
        if (input[9] < 0.1709309) {
            var65 = 0.16450147;
        } else {
            if (input[10] < 0.5515726) {
                var65 = -0.040545363;
            } else {
                var65 = -0.27472135;
            }
        }
    } else {
        if (input[13] < 0.405693) {
            if (input[16] < 0.208973) {
                if (input[17] < 1.881968) {
                    if (input[5] < 2.026502) {
                        var65 = -0.024550365;
                    } else {
                        var65 = 0.12252519;
                    }
                } else {
                    if (input[0] < -0.2478182) {
                        var65 = 0.038072623;
                    } else {
                        var65 = -0.046542224;
                    }
                }
            } else {
                if (input[2] < 2.18055) {
                    if (input[4] < 0.3043144) {
                        var65 = -0.22379519;
                    } else {
                        var65 = -0.028616244;
                    }
                } else {
                    if (input[12] < 0.08113853) {
                        var65 = -0.1951182;
                    } else {
                        var65 = 0.037668664;
                    }
                }
            }
        } else {
            if (input[9] < -0.2421837) {
                if (input[3] < -0.6804157) {
                    if (input[4] < 0.3076515) {
                        var65 = -0.26779497;
                    } else {
                        var65 = 0.11967563;
                    }
                } else {
                    var65 = -0.31551018;
                }
            } else {
                if (input[11] < 2.40218) {
                    if (input[4] < 0.3155489) {
                        var65 = 0.24435557;
                    } else {
                        var65 = -0.023311375;
                    }
                } else {
                    if (input[9] < 0.09819747) {
                        var65 = 0.21266559;
                    } else {
                        var65 = -0.08643588;
                    }
                }
            }
        }
    }
    var var66;
    if (input[15] < -0.130593) {
        var66 = -0.14158697;
    } else {
        if (input[9] < -0.2559603) {
            if (input[14] < 1.846408) {
                var66 = -0.037747167;
            } else {
                var66 = 0.18987246;
            }
        } else {
            if (input[0] < -0.5997012) {
                if (input[10] < 0.539062) {
                    var66 = -0.20657475;
                } else {
                    var66 = -0.007396885;
                }
            } else {
                if (input[9] < 0.05422041) {
                    if (input[15] < 0.01789931) {
                        var66 = -0.0027208892;
                    } else {
                        var66 = 0.110532835;
                    }
                } else {
                    if (input[0] < -0.2820379) {
                        var66 = -0.15591836;
                    } else {
                        var66 = 0.0001630693;
                    }
                }
            }
        }
    }
    var var67;
    if (input[1] < 0.5407966) {
        if (input[6] < -0.4459358) {
            if (input[11] < 2.063825) {
                if (input[8] < 2.045644) {
                    if (input[3] < -0.6909494) {
                        var67 = 0.18373327;
                    } else {
                        var67 = -0.11191274;
                    }
                } else {
                    if (input[11] < 2.046304) {
                        var67 = -0.013502266;
                    } else {
                        var67 = 0.2581259;
                    }
                }
            } else {
                if (input[7] < -0.05042091) {
                    var67 = 0.025295235;
                } else {
                    var67 = -0.266324;
                }
            }
        } else {
            if (input[9] < 0.004940425) {
                var67 = 0.2341432;
            } else {
                if (input[15] < 0.01789931) {
                    var67 = -0.23024997;
                } else {
                    if (input[10] < 0.5551109) {
                        var67 = 0.010285811;
                    } else {
                        var67 = -0.12406392;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.3018864) {
            var67 = -0.035293344;
        } else {
            var67 = 0.19229947;
        }
    }
    var var68;
    if (input[13] < 0.683242) {
        if (input[15] < -0.1240037) {
            if (input[17] < 1.784227) {
                var68 = -0.17105153;
            } else {
                var68 = -0.03562065;
            }
        } else {
            if (input[12] < -0.100145) {
                if (input[10] < 0.5370268) {
                    if (input[8] < 2.045644) {
                        var68 = -0.21777922;
                    } else {
                        var68 = 0.057417594;
                    }
                } else {
                    if (input[11] < 2.051404) {
                        var68 = 0.26230294;
                    } else {
                        var68 = 0.034588635;
                    }
                }
            } else {
                if (input[0] < -0.587382) {
                    if (input[6] < -0.6385441) {
                        var68 = 0.13653907;
                    } else {
                        var68 = -0.17039797;
                    }
                } else {
                    if (input[9] < 0.004940425) {
                        var68 = 0.109141134;
                    } else {
                        var68 = -0.0073684566;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.3182591) {
            var68 = 0.18227613;
        } else {
            var68 = -0.002161885;
        }
    }
    var var69;
    if (input[13] < 0.683242) {
        if (input[15] < -0.1394486) {
            var69 = -0.15716605;
        } else {
            if (input[7] < 0.1145587) {
                if (input[6] < -0.6242719) {
                    if (input[11] < 2.063825) {
                        var69 = 0.17247653;
                    } else {
                        var69 = -0.19049446;
                    }
                } else {
                    if (input[9] < -0.2421837) {
                        var69 = -0.13160674;
                    } else {
                        var69 = 0.004510654;
                    }
                }
            } else {
                var69 = -0.1419475;
            }
        }
    } else {
        if (input[4] < 0.3182591) {
            var69 = 0.1686206;
        } else {
            var69 = -0.0018370076;
        }
    }
    var var70;
    if (input[15] < 0.2685375) {
        if (input[12] < 0.3155526) {
            if (input[9] < 0.2284386) {
                if (input[12] < 0.2538446) {
                    if (input[6] < -0.2428079) {
                        var70 = 0.014427646;
                    } else {
                        var70 = -0.1362465;
                    }
                } else {
                    if (input[16] < 0.1368458) {
                        var70 = -0.00048068305;
                    } else {
                        var70 = -0.2588459;
                    }
                }
            } else {
                var70 = 0.21892391;
            }
        } else {
            if (input[9] < 0.2284386) {
                var70 = 0.03542027;
            } else {
                var70 = -0.22939412;
            }
        }
    } else {
        if (input[0] < -0.2820379) {
            var70 = -0.23817638;
        } else {
            if (input[11] < 2.395128) {
                if (input[0] < -0.2127114) {
                    if (input[14] < 2.277884) {
                        var70 = -0.03808304;
                    } else {
                        var70 = -0.2974671;
                    }
                } else {
                    if (input[15] < 0.3101016) {
                        var70 = 0.15367408;
                    } else {
                        var70 = -0.010295635;
                    }
                }
            } else {
                if (input[12] < 0.2134126) {
                    var70 = -0.081262685;
                } else {
                    if (input[3] < -0.3497865) {
                        var70 = 0.24366118;
                    } else {
                        var70 = 0.034207318;
                    }
                }
            }
        }
    }
    var var71;
    if (input[5] < 2.481935) {
        if (input[2] < 2.513822) {
            if (input[14] < 2.417249) {
                if (input[16] < 0.8627123) {
                    if (input[11] < 2.42084) {
                        var71 = -0.0006495054;
                    } else {
                        var71 = -0.10681318;
                    }
                } else {
                    var71 = 0.14846268;
                }
            } else {
                if (input[0] < -0.2790148) {
                    var71 = 0.18944803;
                } else {
                    var71 = 0.046745595;
                }
            }
        } else {
            if (input[3] < -0.3567779) {
                var71 = -0.2597677;
            } else {
                if (input[7] < -0.03295884) {
                    var71 = 0.12925957;
                } else {
                    var71 = -0.18990771;
                }
            }
        }
    } else {
        if (input[6] < -0.2969803) {
            if (input[8] < 2.308898) {
                var71 = -0.17244215;
            } else {
                if (input[10] < 0.4109396) {
                    if (input[0] < -0.2655832) {
                        var71 = -0.1292713;
                    } else {
                        var71 = 0.15328965;
                    }
                } else {
                    var71 = 0.20268822;
                }
            }
        } else {
            var71 = 0.20527896;
        }
    }
    var var72;
    if (input[17] < 1.583192) {
        if (input[6] < -0.2789393) {
            if (input[14] < 1.624311) {
                var72 = 0.07471162;
            } else {
                if (input[12] < 0.2117995) {
                    var72 = -0.057580825;
                } else {
                    var72 = -0.24468969;
                }
            }
        } else {
            if (input[5] < 1.905577) {
                if (input[7] < 0.01359072) {
                    var72 = 0.02571437;
                } else {
                    var72 = 0.21916662;
                }
            } else {
                var72 = -0.17456323;
            }
        }
    } else {
        if (input[11] < 1.816813) {
            if (input[9] < 0.2072993) {
                var72 = 0.2018746;
            } else {
                var72 = 0.019102044;
            }
        } else {
            if (input[5] < 1.988168) {
                if (input[10] < 0.5413386) {
                    if (input[7] < 0.0305005) {
                        var72 = -0.25311512;
                    } else {
                        var72 = -0.06623904;
                    }
                } else {
                    var72 = 0.09383809;
                }
            } else {
                if (input[17] < 1.692458) {
                    if (input[9] < -0.2421837) {
                        var72 = -0.0023709978;
                    } else {
                        var72 = 0.15092967;
                    }
                } else {
                    if (input[4] < 0.31011) {
                        var72 = 0.007968521;
                    } else {
                        var72 = -0.113093965;
                    }
                }
            }
        }
    }
    var var73;
    if (input[4] < 0.1543271) {
        if (input[4] < 0.108665) {
            if (input[2] < 2.17439) {
                var73 = -0.20157635;
            } else {
                if (input[17] < 1.699851) {
                    var73 = 0.19487388;
                } else {
                    if (input[11] < 2.164363) {
                        var73 = 0.20925544;
                    } else {
                        var73 = -0.004966575;
                    }
                }
            }
        } else {
            if (input[3] < -0.2962103) {
                if (input[0] < -0.2117956) {
                    if (input[13] < 0.405693) {
                        var73 = -0.29439664;
                    } else {
                        var73 = 0.011643625;
                    }
                } else {
                    if (input[5] < 2.359499) {
                        var73 = 0.13487166;
                    } else {
                        var73 = -0.13970836;
                    }
                }
            } else {
                var73 = 0.13614255;
            }
        }
    } else {
        if (input[4] < 0.2580619) {
            if (input[15] < 0.2199094) {
                if (input[4] < 0.1760592) {
                    var73 = -0.1767184;
                } else {
                    if (input[11] < 2.414822) {
                        var73 = 0.17020893;
                    } else {
                        var73 = 0.0018876974;
                    }
                }
            } else {
                var73 = 0.23990586;
            }
        } else {
            if (input[16] < -0.01345924) {
                var73 = 0.21788186;
            } else {
                if (input[9] < 0.1709309) {
                    if (input[11] < 2.128622) {
                        var73 = 0.04520147;
                    } else {
                        var73 = -0.17159803;
                    }
                } else {
                    if (input[6] < -0.2074243) {
                        var73 = -0.20642886;
                    } else {
                        var73 = 0.17591241;
                    }
                }
            }
        }
    }
    var var74;
    if (input[11] < 2.310855) {
        if (input[12] < 0.4239712) {
            if (input[1] < 0.07622232) {
                if (input[2] < 2.25441) {
                    var74 = 0.040743753;
                } else {
                    var74 = 0.20338236;
                }
            } else {
                if (input[8] < 1.751509) {
                    if (input[15] < 0.2882984) {
                        var74 = 0.042752393;
                    } else {
                        var74 = 0.16369796;
                    }
                } else {
                    if (input[4] < -0.102439) {
                        var74 = -0.123396695;
                    } else {
                        var74 = -0.008033849;
                    }
                }
            }
        } else {
            if (input[9] < 0.3392383) {
                if (input[14] < 2.195239) {
                    var74 = -0.261321;
                } else {
                    var74 = 0.029314697;
                }
            } else {
                if (input[15] < 0.3681365) {
                    var74 = -0.05532657;
                } else {
                    var74 = 0.15294641;
                }
            }
        }
    } else {
        if (input[13] < -0.2311187) {
            var74 = 0.23503627;
        } else {
            if (input[12] < 0.1923617) {
                if (input[2] < 2.287115) {
                    var74 = -0.18098937;
                } else {
                    if (input[4] < -0.09593987) {
                        var74 = -0.064895615;
                    } else {
                        var74 = 0.17309412;
                    }
                }
            } else {
                if (input[15] < 0.1660984) {
                    var74 = -0.21324484;
                } else {
                    if (input[4] < 0.1543271) {
                        var74 = -0.0328861;
                    } else {
                        var74 = 0.17813295;
                    }
                }
            }
        }
    }
    var var75;
    if (input[8] < 2.346013) {
        if (input[3] < -0.06078222) {
            if (input[12] < 0.4114046) {
                if (input[7] < -0.3212084) {
                    var75 = 0.16918987;
                } else {
                    if (input[7] < -0.2479834) {
                        var75 = -0.15489477;
                    } else {
                        var75 = -0.00013515844;
                    }
                }
            } else {
                if (input[13] < -0.2521242) {
                    if (input[4] < -0.2664573) {
                        var75 = -0.091500096;
                    } else {
                        var75 = 0.23183376;
                    }
                } else {
                    if (input[17] < 1.897745) {
                        var75 = -0.016546244;
                    } else {
                        var75 = -0.24098937;
                    }
                }
            }
        } else {
            if (input[14] < 2.188111) {
                var75 = -0.11416562;
            } else {
                if (input[7] < -0.3988132) {
                    var75 = -0.12207458;
                } else {
                    if (input[2] < 2.212811) {
                        var75 = 0.25489244;
                    } else {
                        var75 = 0.03668574;
                    }
                }
            }
        }
    } else {
        if (input[1] < 0.1986625) {
            var75 = -0.04733878;
        } else {
            if (input[1] < 0.3684651) {
                if (input[14] < 2.108432) {
                    var75 = 0.051945772;
                } else {
                    var75 = 0.20832138;
                }
            } else {
                if (input[0] < -0.2655832) {
                    var75 = -0.12836201;
                } else {
                    var75 = 0.1670322;
                }
            }
        }
    }
    var var76;
    if (input[1] < -0.103854) {
        if (input[11] < 2.328073) {
            var76 = 0.020544197;
        } else {
            var76 = -0.17412426;
        }
    } else {
        if (input[3] < -0.06078222) {
            if (input[1] < -0.09849825) {
                if (input[5] < 2.098228) {
                    var76 = -0.19295225;
                } else {
                    var76 = -0.00951228;
                }
            } else {
                if (input[13] < -0.2521242) {
                    var76 = 0.19571857;
                } else {
                    if (input[10] < 0.114619) {
                        var76 = -0.053487185;
                    } else {
                        var76 = 0.010847136;
                    }
                }
            }
        } else {
            if (input[14] < 2.195239) {
                if (input[14] < 2.184239) {
                    var76 = -0.105108716;
                } else {
                    var76 = -0.002514244;
                }
            } else {
                if (input[4] < -0.2737702) {
                    var76 = 0.000733707;
                } else {
                    var76 = 0.20247407;
                }
            }
        }
    }
    var var77;
    if (input[5] < 2.481935) {
        if (input[2] < 2.513822) {
            if (input[14] < 2.394988) {
                if (input[14] < 2.377991) {
                    if (input[14] < 2.349576) {
                        var77 = -0.0036538607;
                    } else {
                        var77 = 0.18024845;
                    }
                } else {
                    var77 = -0.18763524;
                }
            } else {
                if (input[3] < -0.3567779) {
                    var77 = 0.20829664;
                } else {
                    var77 = -0.009537851;
                }
            }
        } else {
            if (input[17] < 2.226639) {
                var77 = 0.024140613;
            } else {
                if (input[12] < 0.2100487) {
                    var77 = -0.046986844;
                } else {
                    var77 = -0.22721776;
                }
            }
        }
    } else {
        if (input[15] < 0.2310787) {
            if (input[10] < 0.4093606) {
                var77 = 0.0075594815;
            } else {
                var77 = 0.21163128;
            }
        } else {
            if (input[3] < -0.3555219) {
                var77 = -0.16303557;
            } else {
                if (input[5] < 2.486625) {
                    var77 = 0.16248056;
                } else {
                    var77 = -0.05646679;
                }
            }
        }
    }
    var var78;
    if (input[12] < 0.5003657) {
        if (input[3] < -0.06442265) {
            if (input[12] < 0.4114046) {
                if (input[0] < -0.03188731) {
                    if (input[17] < 1.936163) {
                        var78 = -0.01555873;
                    } else {
                        var78 = 0.023070615;
                    }
                } else {
                    var78 = 0.16793655;
                }
            } else {
                if (input[16] < -0.2968577) {
                    var78 = 0.06801851;
                } else {
                    if (input[9] < 0.3392383) {
                        var78 = -0.2201409;
                    } else {
                        var78 = 0.017455505;
                    }
                }
            }
        } else {
            if (input[2] < 2.21064) {
                if (input[16] < -0.2693861) {
                    var78 = -0.085536964;
                } else {
                    var78 = 0.0672855;
                }
            } else {
                var78 = 0.16846573;
            }
        }
    } else {
        if (input[2] < 2.212811) {
            if (input[1] < -0.1006322) {
                var78 = -0.056369986;
            } else {
                var78 = 0.06895792;
            }
        } else {
            var78 = -0.16040124;
        }
    }
    var var79;
    if (input[1] < -0.103854) {
        if (input[17] < 2.014048) {
            var79 = 0.008921577;
        } else {
            var79 = -0.15739019;
        }
    } else {
        if (input[3] < -0.2635604) {
            if (input[8] < 1.977931) {
                if (input[16] < 0.05407178) {
                    var79 = -0.21537286;
                } else {
                    var79 = -0.03566934;
                }
            } else {
                if (input[8] < 2.039011) {
                    if (input[1] < 0.5178216) {
                        var79 = 0.09642587;
                    } else {
                        var79 = -0.102577;
                    }
                } else {
                    if (input[8] < 2.276468) {
                        var79 = -0.07088184;
                    } else {
                        var79 = 0.015355627;
                    }
                }
            }
        } else {
            if (input[3] < -0.2397592) {
                if (input[2] < 2.287115) {
                    var79 = -0.017833203;
                } else {
                    var79 = 0.23141189;
                }
            } else {
                if (input[0] < -0.1163382) {
                    if (input[12] < 0.2514438) {
                        var79 = 0.03074697;
                    } else {
                        var79 = -0.21777156;
                    }
                } else {
                    if (input[12] < 0.2869974) {
                        var79 = 0.12701775;
                    } else {
                        var79 = -0.011196819;
                    }
                }
            }
        }
    }
    var var80;
    if (input[0] < -0.2790148) {
        if (input[9] < 0.09887823) {
            if (input[15] < 0.25197) {
                if (input[17] < 2.134785) {
                    if (input[11] < 2.063825) {
                        var80 = 0.048252735;
                    } else {
                        var80 = -0.12717198;
                    }
                } else {
                    if (input[4] < 0.02520591) {
                        var80 = 0.043792;
                    } else {
                        var80 = 0.1949575;
                    }
                }
            } else {
                if (input[15] < 0.298201) {
                    if (input[17] < 2.119318) {
                        var80 = -0.026307868;
                    } else {
                        var80 = -0.24246438;
                    }
                } else {
                    var80 = 0.1448988;
                }
            }
        } else {
            var80 = 0.21162838;
        }
    } else {
        if (input[0] < -0.2540881) {
            if (input[8] < 2.308898) {
                if (input[15] < 0.2332206) {
                    var80 = -0.29971406;
                } else {
                    var80 = -0.05839403;
                }
            } else {
                if (input[1] < 0.3661432) {
                    if (input[15] < 0.2310787) {
                        var80 = 0.14788564;
                    } else {
                        var80 = 0.027753595;
                    }
                } else {
                    if (input[0] < -0.2664247) {
                        var80 = -0.14842612;
                    } else {
                        var80 = 0.13507712;
                    }
                }
            }
        } else {
            if (input[0] < -0.2478182) {
                if (input[0] < -0.2525772) {
                    var80 = -0.0050428063;
                } else {
                    if (input[17] < 1.939203) {
                        var80 = 0.24541485;
                    } else {
                        var80 = 0.056952365;
                    }
                }
            } else {
                if (input[15] < 0.027768) {
                    var80 = -0.2077304;
                } else {
                    if (input[9] < 0.05422041) {
                        var80 = 0.17613499;
                    } else {
                        var80 = -0.014303404;
                    }
                }
            }
        }
    }
    var var81;
    if (input[1] < 0.5407966) {
        if (input[15] < 0.2685375) {
            if (input[12] < 0.3155526) {
                if (input[9] < 0.2284386) {
                    if (input[12] < 0.2405061) {
                        var81 = -0.0036068612;
                    } else {
                        var81 = -0.15183115;
                    }
                } else {
                    var81 = 0.18928741;
                }
            } else {
                if (input[4] < -0.04575291) {
                    var81 = -0.019691419;
                } else {
                    var81 = -0.19089606;
                }
            }
        } else {
            if (input[0] < -0.2820379) {
                var81 = -0.16434985;
            } else {
                if (input[15] < 0.3101016) {
                    if (input[12] < 0.2538446) {
                        var81 = -0.009369113;
                    } else {
                        var81 = 0.19760762;
                    }
                } else {
                    if (input[11] < 2.395128) {
                        var81 = -0.018311145;
                    } else {
                        var81 = 0.16366917;
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.4537559) {
            var81 = 0.0085880915;
        } else {
            var81 = 0.15366894;
        }
    }
    var var82;
    if (input[0] < -0.2109447) {
        if (input[0] < -0.2403695) {
            if (input[0] < -0.2525772) {
                if (input[3] < -0.3387127) {
                    if (input[15] < 0.298201) {
                        var82 = 0.005002469;
                    } else {
                        var82 = 0.17399202;
                    }
                } else {
                    if (input[12] < 0.07044489) {
                        var82 = 0.09380062;
                    } else {
                        var82 = -0.18355317;
                    }
                }
            } else {
                if (input[9] < 0.06072352) {
                    if (input[15] < 0.027768) {
                        var82 = -0.09469321;
                    } else {
                        var82 = 0.2202712;
                    }
                } else {
                    var82 = -0.11634729;
                }
            }
        } else {
            if (input[7] < -0.07025853) {
                if (input[12] < 0.1110251) {
                    var82 = -0.018608758;
                } else {
                    var82 = -0.26668498;
                }
            } else {
                if (input[14] < 2.263798) {
                    var82 = 0.17845812;
                } else {
                    if (input[7] < -0.03295884) {
                        var82 = -0.16219282;
                    } else {
                        var82 = 0.020024305;
                    }
                }
            }
        }
    } else {
        if (input[5] < 2.100418) {
            if (input[6] < -0.2803644) {
                if (input[2] < 1.851128) {
                    var82 = 0.08992745;
                } else {
                    var82 = -0.24134085;
                }
            } else {
                if (input[5] < 1.905577) {
                    if (input[10] < 0.5642681) {
                        var82 = 0.1985956;
                    } else {
                        var82 = -0.06688924;
                    }
                } else {
                    if (input[7] < -0.1209465) {
                        var82 = 0.03363586;
                    } else {
                        var82 = -0.12144991;
                    }
                }
            }
        } else {
            if (input[12] < 0.3976734) {
                if (input[1] < 0.3408778) {
                    var82 = 0.24420434;
                } else {
                    if (input[15] < 0.2355631) {
                        var82 = -0.0878319;
                    } else {
                        var82 = 0.17503062;
                    }
                }
            } else {
                if (input[15] < 0.3590172) {
                    if (input[6] < -0.1333382) {
                        var82 = -0.2045206;
                    } else {
                        var82 = -0.0020122742;
                    }
                } else {
                    if (input[0] < -0.03188731) {
                        var82 = -0.10804522;
                    } else {
                        var82 = 0.14527607;
                    }
                }
            }
        }
    }
    var var83;
    if (input[1] < -0.103854) {
        var83 = -0.11096863;
    } else {
        if (input[15] < 0.3496813) {
            if (input[12] < 0.3249845) {
                if (input[3] < -0.143307) {
                    if (input[12] < 0.2836287) {
                        var83 = 0.004641705;
                    } else {
                        var83 = -0.10434287;
                    }
                } else {
                    if (input[16] < 0.2139698) {
                        var83 = 0.20452708;
                    } else {
                        var83 = -0.045420766;
                    }
                }
            } else {
                if (input[6] < -0.164893) {
                    var83 = -0.010217685;
                } else {
                    if (input[6] < -0.1333382) {
                        var83 = -0.22511509;
                    } else {
                        var83 = -0.02233084;
                    }
                }
            }
        } else {
            if (input[4] < -0.2710837) {
                if (input[5] < 2.057998) {
                    if (input[11] < 2.319927) {
                        var83 = -0.009259078;
                    } else {
                        var83 = 0.15033965;
                    }
                } else {
                    if (input[13] < -0.1070986) {
                        var83 = -0.17829533;
                    } else {
                        var83 = -0.034447316;
                    }
                }
            } else {
                if (input[2] < 2.21064) {
                    if (input[9] < 0.2120294) {
                        var83 = 0.111386806;
                    } else {
                        var83 = -0.11375358;
                    }
                } else {
                    if (input[0] < -0.03188731) {
                        var83 = -0.022222016;
                    } else {
                        var83 = 0.19942522;
                    }
                }
            }
        }
    }
    var var84;
    if (input[1] < 0.1999779) {
        if (input[2] < 2.17439) {
            var84 = -0.18014088;
        } else {
            if (input[17] < 1.699851) {
                var84 = 0.1733708;
            } else {
                if (input[11] < 2.164363) {
                    var84 = 0.17178713;
                } else {
                    if (input[14] < 2.076905) {
                        var84 = -0.11990077;
                    } else {
                        var84 = -0.00258838;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.09749398) {
            if (input[3] < -0.1109793) {
                if (input[2] < 2.509953) {
                    var84 = 0.23165198;
                } else {
                    var84 = -0.0066704093;
                }
            } else {
                var84 = -0.011970331;
            }
        } else {
            if (input[4] < 0.1543271) {
                if (input[3] < -0.3567779) {
                    if (input[6] < -0.4194137) {
                        var84 = -0.008219525;
                    } else {
                        var84 = -0.22204049;
                    }
                } else {
                    if (input[7] < -0.03030185) {
                        var84 = 0.05883627;
                    } else {
                        var84 = -0.19222057;
                    }
                }
            } else {
                if (input[10] < 0.5308664) {
                    if (input[15] < 0.2220562) {
                        var84 = -0.00017858049;
                    } else {
                        var84 = 0.21132;
                    }
                } else {
                    if (input[6] < -0.2124736) {
                        var84 = -0.020892939;
                    } else {
                        var84 = 0.13246165;
                    }
                }
            }
        }
    }
    var var85;
    if (input[1] < 0.5407966) {
        if (input[15] < -0.1240037) {
            var85 = -0.098170385;
        } else {
            if (input[6] < -0.6242719) {
                if (input[11] < 2.056809) {
                    if (input[1] < 0.5178216) {
                        var85 = 0.23003139;
                    } else {
                        var85 = -0.009372178;
                    }
                } else {
                    if (input[16] < 0.459387) {
                        var85 = 0.012443262;
                    } else {
                        var85 = -0.16548273;
                    }
                }
            } else {
                if (input[9] < -0.2421837) {
                    if (input[10] < 0.539062) {
                        var85 = -0.2574636;
                    } else {
                        var85 = 0.010482346;
                    }
                } else {
                    if (input[12] < 0.002736233) {
                        var85 = 0.14235166;
                    } else {
                        var85 = -0.0054024295;
                    }
                }
            }
        }
    } else {
        var85 = 0.09808829;
    }
    var var86;
    if (input[13] < 0.683242) {
        if (input[13] < 0.5822147) {
            if (input[13] < 0.3654739) {
                if (input[4] < 0.3043144) {
                    if (input[6] < -0.4459358) {
                        var86 = -0.14055055;
                    } else {
                        var86 = -0.0046628816;
                    }
                } else {
                    if (input[7] < 0.1058742) {
                        var86 = 0.18146038;
                    } else {
                        var86 = -0.03816574;
                    }
                }
            } else {
                if (input[7] < -0.03295884) {
                    if (input[16] < 0.6176001) {
                        var86 = 0.04111086;
                    } else {
                        var86 = 0.18850903;
                    }
                } else {
                    if (input[14] < 2.025352) {
                        var86 = 0.06379014;
                    } else {
                        var86 = -0.09656105;
                    }
                }
            }
        } else {
            if (input[3] < -0.3538537) {
                if (input[17] < 1.671075) {
                    var86 = 0.06901021;
                } else {
                    if (input[1] < 0.3627352) {
                        var86 = 0.048181355;
                    } else {
                        var86 = -0.19797511;
                    }
                }
            } else {
                if (input[16] < 0.7412744) {
                    if (input[12] < 0.245726) {
                        var86 = 0.0063463086;
                    } else {
                        var86 = -0.13592379;
                    }
                } else {
                    var86 = 0.17750704;
                }
            }
        }
    } else {
        var86 = 0.10303332;
    }
    var var87;
    if (input[0] < -0.2790148) {
        if (input[9] < 0.1003691) {
            if (input[15] < 0.2554578) {
                if (input[3] < -0.4607451) {
                    if (input[7] < 0.09177062) {
                        var87 = -0.18967396;
                    } else {
                        var87 = 0.022870045;
                    }
                } else {
                    if (input[3] < -0.340672) {
                        var87 = 0.17898951;
                    } else {
                        var87 = -0.045671325;
                    }
                }
            } else {
                if (input[15] < 0.2917387) {
                    if (input[3] < -0.3567779) {
                        var87 = -0.20352988;
                    } else {
                        var87 = -0.047348954;
                    }
                } else {
                    var87 = 0.0726027;
                }
            }
        } else {
            var87 = 0.20444094;
        }
    } else {
        if (input[0] < -0.2540881) {
            if (input[8] < 2.308898) {
                var87 = -0.19702633;
            } else {
                if (input[1] < 0.3661432) {
                    var87 = 0.094034016;
                } else {
                    if (input[0] < -0.2679654) {
                        var87 = -0.12211648;
                    } else {
                        var87 = 0.046275742;
                    }
                }
            }
        } else {
            if (input[0] < -0.2478182) {
                if (input[5] < 2.173402) {
                    var87 = -0.010751775;
                } else {
                    if (input[15] < 0.1220412) {
                        var87 = 0.22793669;
                    } else {
                        var87 = 0.0454194;
                    }
                }
            } else {
                if (input[12] < 0.07660175) {
                    var87 = -0.16023958;
                } else {
                    if (input[9] < 0.05236205) {
                        var87 = 0.20955889;
                    } else {
                        var87 = -0.011852455;
                    }
                }
            }
        }
    }
    var var88;
    if (input[4] < -0.05941871) {
        if (input[1] < 0.07622232) {
            if (input[2] < 2.246351) {
                if (input[14] < 2.180659) {
                    var88 = -0.17921191;
                } else {
                    if (input[1] < -0.1006322) {
                        var88 = -0.0635312;
                    } else {
                        var88 = 0.14025317;
                    }
                }
            } else {
                var88 = 0.17785802;
            }
        } else {
            if (input[15] < 0.3590172) {
                if (input[0] < -0.2380911) {
                    if (input[4] < -0.102439) {
                        var88 = -0.1163001;
                    } else {
                        var88 = 0.08229722;
                    }
                } else {
                    if (input[14] < 1.965405) {
                        var88 = 0.07203975;
                    } else {
                        var88 = -0.24239017;
                    }
                }
            } else {
                if (input[0] < -0.03188731) {
                    var88 = -0.0627066;
                } else {
                    var88 = 0.1639468;
                }
            }
        }
    } else {
        if (input[7] < -0.1209465) {
            if (input[8] < 1.829408) {
                var88 = -0.05719029;
            } else {
                if (input[15] < 0.3181228) {
                    if (input[17] < 1.708953) {
                        var88 = 0.05131045;
                    } else {
                        var88 = 0.25362316;
                    }
                } else {
                    var88 = -0.02917537;
                }
            }
        } else {
            if (input[9] < 0.2120294) {
                if (input[2] < 1.851128) {
                    if (input[13] < 0.2694984) {
                        var88 = 0.21924026;
                    } else {
                        var88 = 0.036671985;
                    }
                } else {
                    if (input[8] < 1.950779) {
                        var88 = -0.09247916;
                    } else {
                        var88 = 0.015888052;
                    }
                }
            } else {
                if (input[7] < 0.0160069) {
                    var88 = -0.19498627;
                } else {
                    var88 = -0.004300113;
                }
            }
        }
    }
    var var89;
    if (input[3] < -0.2635604) {
        if (input[3] < -0.2654782) {
            if (input[16] < -0.1623625) {
                var89 = 0.15279217;
            } else {
                if (input[8] < 1.979979) {
                    var89 = -0.118260056;
                } else {
                    if (input[5] < 2.041996) {
                        var89 = 0.16328388;
                    } else {
                        var89 = -0.009880518;
                    }
                }
            }
        } else {
            if (input[9] < 0.05328564) {
                var89 = 0.08438678;
            } else {
                var89 = -0.20840342;
            }
        }
    } else {
        if (input[9] < 0.1709309) {
            if (input[6] < -0.2530461) {
                var89 = 0.19290648;
            } else {
                var89 = -0.082313135;
            }
        } else {
            if (input[17] < 1.418239) {
                if (input[9] < 0.176119) {
                    var89 = -0.16242866;
                } else {
                    var89 = -0.04563901;
                }
            } else {
                if (input[12] < 0.2869974) {
                    if (input[6] < -0.2803644) {
                        var89 = -0.09289471;
                    } else {
                        var89 = 0.16600895;
                    }
                } else {
                    if (input[8] < 1.805208) {
                        var89 = -0.13501059;
                    } else {
                        var89 = 0.015750863;
                    }
                }
            }
        }
    }
    var var90;
    if (input[12] < 0.510573) {
        if (input[6] < -0.05954073) {
            if (input[4] < -0.1215612) {
                if (input[4] < -0.2676983) {
                    var90 = -0.036225826;
                } else {
                    var90 = -0.15233955;
                }
            } else {
                if (input[8] < 1.751509) {
                    var90 = 0.10790732;
                } else {
                    if (input[14] < 1.877747) {
                        var90 = -0.047797825;
                    } else {
                        var90 = 0.011940652;
                    }
                }
            }
        } else {
            if (input[4] < -0.2740892) {
                var90 = -0.041056763;
            } else {
                if (input[11] < 2.30037) {
                    var90 = -0.031694423;
                } else {
                    if (input[0] < -0.0167635) {
                        var90 = -0.006222776;
                    } else {
                        var90 = 0.15710463;
                    }
                }
            }
        }
    } else {
        var90 = -0.08879269;
    }
    var var91;
    if (input[13] < -0.04905465) {
        if (input[2] < 2.293503) {
            if (input[6] < -0.05669941) {
                if (input[0] < -0.2478182) {
                    var91 = -0.032774895;
                } else {
                    var91 = -0.21955456;
                }
            } else {
                if (input[7] < -0.3841964) {
                    if (input[5] < 2.057998) {
                        var91 = 0.059222806;
                    } else {
                        var91 = -0.098444544;
                    }
                } else {
                    var91 = 0.13250749;
                }
            }
        } else {
            var91 = 0.101915434;
        }
    } else {
        if (input[16] < -0.1361457) {
            var91 = 0.1526605;
        } else {
            if (input[3] < -0.06163715) {
                if (input[12] < 0.4033061) {
                    if (input[0] < -0.08452855) {
                        var91 = -0.00082004623;
                    } else {
                        var91 = 0.09423941;
                    }
                } else {
                    if (input[8] < 2.346013) {
                        var91 = -0.15666987;
                    } else {
                        var91 = 0.052619528;
                    }
                }
            } else {
                var91 = 0.11473321;
            }
        }
    }
    var var92;
    if (input[4] < 0.1760592) {
        if (input[2] < 2.17439) {
            var92 = -0.17803349;
        } else {
            if (input[17] < 1.699851) {
                var92 = 0.1420079;
            } else {
                if (input[14] < 1.992337) {
                    if (input[12] < 0.3124632) {
                        var92 = 0.08154311;
                    } else {
                        var92 = -0.19228438;
                    }
                } else {
                    if (input[0] < -0.2109447) {
                        var92 = -0.022131952;
                    } else {
                        var92 = 0.038134716;
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.2580619) {
            if (input[15] < 0.1670507) {
                var92 = 0.019124456;
            } else {
                var92 = 0.20804307;
            }
        } else {
            if (input[11] < 2.128622) {
                if (input[8] < 2.042243) {
                    if (input[8] < 2.039011) {
                        var92 = 0.01136573;
                    } else {
                        var92 = -0.15879908;
                    }
                } else {
                    if (input[0] < -0.5997012) {
                        var92 = -0.06584027;
                    } else {
                        var92 = 0.20660435;
                    }
                }
            } else {
                var92 = -0.13637659;
            }
        }
    }
    var var93;
    if (input[13] < -0.008972555) {
        if (input[15] < 0.1280694) {
            if (input[11] < 2.286012) {
                var93 = -0.018194841;
            } else {
                var93 = 0.13976634;
            }
        } else {
            if (input[6] < -0.05669941) {
                if (input[1] < 0.09505935) {
                    var93 = -0.18072103;
                } else {
                    var93 = -0.023430903;
                }
            } else {
                if (input[7] < -0.3841964) {
                    if (input[14] < 2.188111) {
                        var93 = -0.11141205;
                    } else {
                        var93 = 0.015890643;
                    }
                } else {
                    var93 = 0.08777998;
                }
            }
        }
    } else {
        if (input[16] < -0.1043501) {
            var93 = 0.13001439;
        } else {
            if (input[10] < 0.09654386) {
                if (input[13] < 0.0775089) {
                    if (input[4] < -0.2676983) {
                        var93 = 0.06791255;
                    } else {
                        var93 = -0.07472377;
                    }
                } else {
                    var93 = 0.16444564;
                }
            } else {
                if (input[9] < 0.2256974) {
                    if (input[13] < 0.1357654) {
                        var93 = 0.10455759;
                    } else {
                        var93 = -0.0035903873;
                    }
                } else {
                    if (input[1] < 0.1999779) {
                        var93 = -0.17134607;
                    } else {
                        var93 = 0.09101397;
                    }
                }
            }
        }
    }
    var var94;
    if (input[1] < 0.5407966) {
        if (input[4] < 0.3182591) {
            if (input[15] < -0.1240037) {
                var94 = -0.09799602;
            } else {
                if (input[6] < -0.6385441) {
                    var94 = 0.17670923;
                } else {
                    if (input[12] < -0.100145) {
                        var94 = 0.09322517;
                    } else {
                        var94 = -0.006597724;
                    }
                }
            }
        } else {
            var94 = -0.09258028;
        }
    } else {
        var94 = 0.090413794;
    }
    var var95;
    if (input[15] < 0.005563278) {
        if (input[16] < 0.2931747) {
            if (input[4] < 0.3043144) {
                if (input[14] < 1.972013) {
                    var95 = 0.089014105;
                } else {
                    var95 = -0.11495467;
                }
            } else {
                var95 = 0.14480142;
            }
        } else {
            if (input[17] < 1.68552) {
                if (input[2] < 2.02312) {
                    var95 = 0.18506202;
                } else {
                    if (input[15] < -0.08136275) {
                        var95 = -0.10807825;
                    } else {
                        var95 = 0.012142231;
                    }
                }
            } else {
                if (input[4] < 0.3155489) {
                    if (input[5] < 2.194723) {
                        var95 = -0.23949975;
                    } else {
                        var95 = -0.05388108;
                    }
                } else {
                    var95 = 0.050282825;
                }
            }
        }
    } else {
        if (input[12] < 0.1217389) {
            if (input[14] < 2.119669) {
                if (input[7] < -0.2055921) {
                    if (input[17] < 1.893193) {
                        var95 = 0.004288011;
                    } else {
                        var95 = -0.15862432;
                    }
                } else {
                    if (input[6] < -0.2572749) {
                        var95 = 0.15764084;
                    } else {
                        var95 = -0.038038995;
                    }
                }
            } else {
                if (input[3] < -0.3041407) {
                    var95 = 0.008907099;
                } else {
                    var95 = 0.1867983;
                }
            }
        } else {
            if (input[15] < 0.1796661) {
                if (input[0] < -0.2069517) {
                    if (input[12] < 0.1325188) {
                        var95 = -0.052842617;
                    } else {
                        var95 = -0.20719463;
                    }
                } else {
                    var95 = 0.036458805;
                }
            } else {
                if (input[13] < 0.3711827) {
                    if (input[17] < 1.897745) {
                        var95 = 0.039973404;
                    } else {
                        var95 = -0.038174484;
                    }
                } else {
                    if (input[14] < 2.371329) {
                        var95 = 0.09993004;
                    } else {
                        var95 = -0.090869725;
                    }
                }
            }
        }
    }
    var var96;
    if (input[8] < 2.276468) {
        if (input[2] < 2.346812) {
            if (input[2] < 2.293503) {
                if (input[5] < 2.191864) {
                    if (input[5] < 2.188689) {
                        var96 = -0.008329247;
                    } else {
                        var96 = -0.1308347;
                    }
                } else {
                    if (input[12] < 0.07456549) {
                        var96 = -0.07560547;
                    } else {
                        var96 = 0.1556025;
                    }
                }
            } else {
                var96 = 0.1562861;
            }
        } else {
            if (input[12] < 0.1797906) {
                var96 = 0.04461738;
            } else {
                if (input[8] < 2.260268) {
                    var96 = -0.1873945;
                } else {
                    var96 = -0.04867256;
                }
            }
        }
    } else {
        if (input[4] < 0.1523937) {
            if (input[2] < 2.365464) {
                var96 = 0.15155905;
            } else {
                if (input[10] < 0.3936385) {
                    if (input[2] < 2.518099) {
                        var96 = -0.13443696;
                    } else {
                        var96 = 0.03338711;
                    }
                } else {
                    if (input[2] < 2.509953) {
                        var96 = 0.15109739;
                    } else {
                        var96 = -0.013354297;
                    }
                }
            }
        } else {
            if (input[15] < 0.1965492) {
                var96 = 0.0052175713;
            } else {
                var96 = 0.19931306;
            }
        }
    }
    var var97;
    if (input[13] < 0.683242) {
        if (input[13] < 0.5822147) {
            if (input[16] < 0.7278038) {
                if (input[4] < 0.3076515) {
                    if (input[6] < -0.4459358) {
                        var97 = -0.0856836;
                    } else {
                        var97 = 0.0048522446;
                    }
                } else {
                    if (input[2] < 2.030506) {
                        var97 = 0.17653838;
                    } else {
                        var97 = -0.04429967;
                    }
                }
            } else {
                var97 = 0.1440163;
            }
        } else {
            if (input[1] < 0.5178216) {
                if (input[9] < 0.1003691) {
                    if (input[17] < 1.708953) {
                        var97 = 0.04499832;
                    } else {
                        var97 = 0.17096242;
                    }
                } else {
                    if (input[2] < 2.511671) {
                        var97 = 0.021229718;
                    } else {
                        var97 = -0.17354633;
                    }
                }
            } else {
                if (input[0] < -0.587382) {
                    var97 = -0.20507547;
                } else {
                    var97 = 0.0040573557;
                }
            }
        }
    } else {
        var97 = 0.08635246;
    }
    var var98;
    if (input[1] < 0.5407966) {
        if (input[1] < 0.5137557) {
            if (input[9] < 0.004940425) {
                if (input[11] < 2.046304) {
                    var98 = -0.01613567;
                } else {
                    var98 = 0.21438919;
                }
            } else {
                if (input[15] < 0.01789931) {
                    var98 = -0.16441047;
                } else {
                    if (input[16] < 0.4526399) {
                        var98 = -0.009174101;
                    } else {
                        var98 = 0.061889485;
                    }
                }
            }
        } else {
            if (input[6] < -0.2124736) {
                if (input[4] < 0.3076515) {
                    if (input[4] < 0.2644782) {
                        var98 = 0.06629962;
                    } else {
                        var98 = -0.13019396;
                    }
                } else {
                    if (input[3] < -0.6804157) {
                        var98 = 0.05658362;
                    } else {
                        var98 = -0.113459475;
                    }
                }
            } else {
                var98 = 0.111078665;
            }
        }
    } else {
        var98 = 0.08789039;
    }
    var var99;
    if (input[15] < -0.130593) {
        var99 = -0.08930879;
    } else {
        if (input[12] < -0.100145) {
            if (input[10] < 0.5370268) {
                var99 = -0.059681106;
            } else {
                if (input[4] < 0.3182591) {
                    var99 = 0.19298445;
                } else {
                    var99 = -0.04151826;
                }
            }
        } else {
            if (input[15] < -0.03960742) {
                if (input[0] < -0.587382) {
                    var99 = -0.14730212;
                } else {
                    var99 = -0.010380791;
                }
            } else {
                if (input[12] < 0.05737586) {
                    if (input[3] < -0.4748611) {
                        var99 = -0.0051890565;
                    } else {
                        var99 = 0.16746013;
                    }
                } else {
                    if (input[15] < 0.04389239) {
                        var99 = -0.13516119;
                    } else {
                        var99 = 0.0037065833;
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
