        const hosszuGomb = 1;
        const normalEsUresGomb = 2;
        const SZAM_BUTTON = "szambutton";
        const MEM_BUTTON = "mbutton";
        const OP_BUTTON = "opbutton";
        const C_BUTTON = "cbutton";


        var gombsor = {
            "sorok": [
                [
                    {
                        "id": "mc",
                        "class": "cbutton " + MEM_BUTTON,
                        "value": "MC"
                    },
                    {
                        "id": "mr",
                        "class": "ismeretlenbutton cbutton " + MEM_BUTTON,
                        "value": "MR"
                    },
                    {
                        "id": "ms",
                        "class": "cbutton " + MEM_BUTTON,
                        "value": "MS"
                    },
                    {
                        "id": "mplus",
                        "class": "cbutton " + MEM_BUTTON,
                        "value": "M+"
                    },
                    {
                        "id": "mminus",
                        "class": " cbutton " + MEM_BUTTON,
                        "value": "M-"
                    }
                ],
                [
                    {
                        "id": "back",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "BACK"
                    },
                    {
                        "id": "ce",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "CE"
                    },
                    {
                        "id": "c",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "C"
                    },
                    {
                        "id": "mplusminus",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "+-"
                    },
                    {
                        "id": "gyok",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "GYÖK"
                    }
                ],
                [
                    {
                        "id": "szam7",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "7"
                    },
                    {
                        "id": "szam8",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "8"
                    },
                    {
                        "id": "szam9",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "9"
                    },
                    {
                        "id": "osztas",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "/"
                    },
                    {
                        "id": "szazalek",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "%"
                    }
                ],
                [
                    {
                        "id": "szam4",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "4"
                    },
                    {
                        "id": "szam5",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "5"
                    },
                    {
                        "id": "szam6",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "6"
                    },
                    {
                        "id": "szorzas",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "*"
                    },
                    {
                        "id": "reciprok",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "1/x"
                    }
                ],
                [
                    {
                        "id": "szam1",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "1"
                    },
                    {
                        "id": "szam2",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "2"
                    },
                    {
                        "id": "szam3",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "3"
                    },
                    {
                        "id": "kivonas",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "-",
                        "tipus": normalEsUresGomb
                    },
                    null
                ],
                [
                    {
                        "id": "szam0",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": "0",
                        "tipus": hosszuGomb
                    },
                    null,
                    {
                        "id": "tizedespont",
                        "class": "cbutton " + SZAM_BUTTON,
                        "value": ","
                    },
                    {
                        "id": "osszeadas",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "+"
                    },
                    {
                        "id": "eredmeny",
                        "class": "cbutton " + OP_BUTTON,
                        "value": "="
                    }
                ],
            ]
        };
