import './Membership.css'
import '../template/Template.css'

import config from 'config';
import { checkoutStripe } from '../../helpers/api'
import React from 'react';

const Membership = () => {
  const choosePremium = async () => {
    const response = await checkoutStripe(config.premiumPriceId);
  }

  const chooseUnlimited = async () => {
    const response = await checkoutStripe(config.unlimitedPriceId);
  }

  return (
    <>
      <section className='plans-body'>
        <section className='body-section'>
          <div className='logo-container'>
            <div className='simply-wall-logo-container'>
              <div className='block'>
                <svg width="186px" height="42px" viewBox="0 0 786 178" xmlns="http://www.w3.org/2000/svg" className="sc-nko8h-0 ftpYzy"><path d="M267.177462,137.182678 L279.855069,137.182678 L279.855069,114.317603 L302,79.8173218 L287.590444,79.8173218 L273.601361,102.845197 L259.855886,79.8173218 L245.035868,79.8173218 L267.177462,114.563464 L267.177462,137.182678 Z M210.713894,137.182678 L252.117174,137.182678 L252.117174,125.706949 L223.388163,125.706949 L223.388163,79.8173218 L210.717231,79.8173218 L210.717231,137.182678 L210.713894,137.182678 Z M168.406263,108.745861 L168.406263,91.2066674 L178.200623,91.2066674 C184.537758,91.2066674 188.488873,94.2400608 188.488873,99.8948643 L188.488873,100.057664 C188.488873,104.974885 184.78804,108.745861 178.450905,108.745861 L168.406263,108.745861 Z M155.728657,137.182678 L168.406263,137.182678 L168.406263,119.972407 L178.033769,119.972407 C190.95832,119.972407 201.329996,113.084976 201.329996,99.8118031 L201.329996,99.6490033 C201.329996,87.9307354 193.013967,79.8173218 179.271829,79.8173218 L155.728657,79.8173218 L155.728657,137.182678 Z M84.2848903,137.182678 L96.7122146,137.182678 L96.7122146,99.9779254 L112.763619,124.231783 L113.093991,124.231783 L129.308913,99.728742 L129.308913,137.179356 L141.903092,137.179356 L141.903092,79.8173218 L128.241044,79.8173218 L113.093991,104.074502 L97.9469381,79.8173218 L84.2848903,79.8173218 L84.2848903,137.182678 L84.2848903,137.182678 Z M57.2010652,137.182678 L69.8753343,137.182678 L69.8753343,79.8173218 L57.2010652,79.8173218 L57.2010652,137.182678 Z M24.4441866,138 C36.871511,138 45.5980022,131.610936 45.5980022,120.218268 L45.5980022,120.055468 C45.5980022,110.058227 39.01726,105.875267 27.3274327,102.845197 C17.366218,100.306848 14.8967712,99.0742201 14.8967712,95.3032436 L14.8967712,95.1371213 C14.8967712,92.3529114 17.4496453,90.1434846 22.3017746,90.1434846 C27.1605781,90.1434846 32.179562,92.2731727 37.2819731,95.7982881 L43.8693894,86.289447 C38.0261442,81.6180876 30.8647484,79 22.4686291,79 C10.6987116,79 2.30259232,85.8807861 2.30259232,96.2933326 L2.30259232,96.45281 C2.30259232,107.842156 9.79102301,111.041671 21.4007602,113.992004 C31.0282658,116.453936 33.0071604,118.08858 33.0071604,121.288096 L33.0071604,121.450895 C33.0071604,124.806566 29.8769697,126.859838 24.6944684,126.859838 C18.1103892,126.859838 12.6776061,124.152044 7.49176777,119.889346 L0,128.820081 C6.91111406,134.969929 15.7176954,138 24.4441866,138 Z" id="Shape" fill="#1A1A1A" fillRule="nonzero"></path><path d="M661.079164,137.589334 L700,137.589334 L700,131.628048 L667.578203,131.628048 L667.578203,80.4073545 L661.079164,80.4073545 L661.079164,137.589334 Z M610.137775,137.589334 L649.058611,137.589334 L649.058611,131.628048 L616.64015,131.628048 L616.64015,80.4073545 L610.137775,80.4073545 L610.137775,137.589334 L610.137775,137.589334 Z M556.233785,116.595672 L569.398676,87.5145321 L582.486833,116.595672 L556.233785,116.595672 Z M540.196373,137.589334 L546.852216,137.589334 L553.681545,122.477474 L585.04241,122.477474 L591.784996,137.589334 L598.784475,137.589334 L572.531427,80 L566.442748,80 L540.196373,137.589334 Z M477.568057,138 L482.992819,138 L498.886773,91.5980129 L514.683975,138 L520.192144,138 L540.763537,80.4073545 L533.930872,80.4073545 L517.479763,128.031405 L501.679225,80.2450751 L496.324524,80.2450751 L480.533994,128.031405 L464.066204,80.4073545 L457,80.4073545 L477.568057,138 Z" id="Shape" fill="#1A1A1A" fillRule="nonzero"></path><path d="M763.123746,124.073606 L772.722408,124.073606 L772.722408,89.4374462 L786,89.4374462 L786,80.6193948 L749.846154,80.6193948 L749.846154,89.4341161 L763.123746,89.4341161 L763.123746,124.073606 Z M711,132.005856 L786,132.005856 L786,138 L711,138 L711,132.005856 Z M729.518395,124.693001 C738.929766,124.693001 745.541806,119.854395 745.541806,111.226158 L745.541806,111.099615 C745.541806,103.530344 740.551839,100.360108 731.705686,98.0623529 C724.153846,96.1408968 722.287625,95.2084745 722.287625,92.351266 L722.287625,92.2280531 C722.287625,90.1167825 724.220736,88.4417523 727.899666,88.4417523 C731.575251,88.4417523 735.384615,90.0535109 739.250836,92.7209049 L744.230769,85.5246024 C739.802676,81.9847276 734.384615,80 728.026756,80 C719.110368,80 712.755853,85.2115749 712.755853,93.0972039 L712.755853,93.2204168 C712.755853,101.848654 718.424749,104.266292 727.220736,106.504105 C734.511706,108.36895 736.003344,109.60774 736.003344,112.028708 L736.003344,112.151921 C736.003344,114.699432 733.635452,116.251249 729.70903,116.251249 C724.719064,116.251249 720.61204,114.20325 716.67893,110.973072 L711.003344,117.739794 C716.244147,122.398576 722.909699,124.693001 729.518395,124.693001 Z" id="Shape" fill="#1A1A1A" fillRule="nonzero"></path><path d="M378.003331,36 C417.214225,36 449,67.7865203 449,106.998334 C449,146.210148 417.214225,178 378.003331,178 C338.789106,178 307,146.210148 307,106.998334 C307,67.7898515 338.789106,36 378.003331,36" id="Shape" fill="#CCCCCC"></path><path d="M309,123.18942 C318.034833,117.153889 332.720616,107.41745 346.269521,98.7256218 C358.133173,95.9068298 368.863291,94.3316226 378.469906,94 C388.063146,94.3349388 398.793264,95.9068298 410.66026,98.7256218 C424.386384,107.533518 439.122324,117.087564 448,122.871062 C447.903031,123.318752 447.792687,123.759811 447.682343,124.204185 L447.632187,124.419739 C447.52853,124.8409 447.414842,125.255428 447.301155,125.676589 L447.227592,125.935255 C447.120592,126.353099 447.00356,126.77426 446.876497,127.188788 L446.819654,127.377813 C446.127496,129.695855 445.32165,131.967469 444.408804,134.179392 L444.32521,134.355152 C444.171398,134.746467 443.994178,135.137781 443.830334,135.529096 L443.716647,135.787762 C443.542771,136.169128 443.37224,136.550493 443.19502,136.931859 L443.08802,137.167311 C442.897426,137.55531 442.720207,137.949941 442.529613,138.337939 L442.479456,138.424161 C441.636829,140.118752 440.740702,141.773549 439.764325,143.391867 L439.647294,143.597473 C439.436637,143.942361 439.219293,144.283932 439.008636,144.622187 L438.821386,144.92728 C438.610729,145.255586 438.400072,145.583893 438.182728,145.908883 L437.978759,146.213976 C437.768102,146.545598 437.54407,146.870588 437.320038,147.192262 L437.152851,147.437663 C436.11963,148.906751 435.04294,150.342677 433.902718,151.735492 C433.832499,151.82503 433.748905,151.917884 433.68203,152.010738 C433.451311,152.292617 433.210561,152.57118 432.979841,152.843111 C432.876185,152.969128 432.775872,153.088512 432.662184,153.214528 C432.434809,153.479826 432.200746,153.745124 431.976714,154.00379 C431.859682,154.129807 431.745995,154.255823 431.632307,154.38184 C431.401588,154.640505 431.160837,154.899171 430.930118,155.15452 C430.819774,155.277221 430.70943,155.396605 430.585711,155.515989 C430.341617,155.774655 430.097522,156.036636 429.843397,156.291986 C429.759803,156.381524 429.672865,156.471062 429.575896,156.563916 C428.736613,157.426135 427.873924,158.268456 426.984484,159.084248 C426.844046,159.210265 426.703608,159.339597 426.573202,159.462298 C426.342483,159.674536 426.10842,159.876826 425.8777,160.085748 C425.7172,160.231662 425.546668,160.377576 425.382824,160.520174 C425.16548,160.715831 424.934761,160.908172 424.704041,161.103829 C424.520135,161.249743 424.346259,161.40229 424.172384,161.55152 C423.941665,161.737229 423.714289,161.922937 423.48357,162.111962 C423.309694,162.257876 423.129132,162.397158 422.945225,162.543071 C422.707818,162.72878 422.483786,162.911173 422.24638,163.093565 C422.062473,163.236163 421.875223,163.382077 421.677941,163.527991 C421.440534,163.700434 421.219846,163.876194 420.982439,164.048638 C420.791845,164.191236 420.59122,164.330517 420.400625,164.473115 C419.989343,164.768259 419.56803,165.066719 419.146716,165.358547 C418.926028,165.517726 418.691965,165.676905 418.461246,165.832767 C418.243902,165.975365 418.033245,166.117963 417.825932,166.257244 C417.588525,166.409791 417.36115,166.562337 417.123743,166.711567 C416.899711,166.854165 416.682367,166.99013 416.468367,167.129412 C416.23096,167.275326 416.000241,167.42124 415.762834,167.563837 C415.54549,167.699803 415.318114,167.832452 415.104114,167.965101 C414.853332,168.111015 414.605894,168.256929 414.351768,168.402842 C414.141111,168.528859 413.927111,168.648243 413.716454,168.770944 C413.448954,168.920174 413.184797,169.066088 412.910609,169.212002 C412.709983,169.324753 412.506014,169.437505 412.305389,169.543624 C411.95095,169.735965 411.599856,169.921674 411.235386,170.107383 C411.081573,170.186972 410.92776,170.266561 410.770604,170.346151 C410.335915,170.561705 409.901227,170.77726 409.466538,170.986182 C409.292663,171.072404 409.118788,171.151994 408.938225,171.234899 C408.627255,171.384129 408.309598,171.526727 407.998629,171.669325 C407.801347,171.758863 407.594034,171.851717 407.393409,171.941255 C407.095814,172.070588 406.801564,172.199921 406.503969,172.325938 C406.289969,172.415476 406.075968,172.505014 405.865312,172.591236 C405.571061,172.713936 405.27681,172.830004 404.98256,172.949388 C404.771903,173.03561 404.561246,173.118516 404.353933,173.198105 C404.036276,173.317489 403.725307,173.436873 403.410994,173.552941 C403.210368,173.625898 403.019774,173.698855 402.819148,173.768496 C402.421241,173.911094 402.01999,174.050375 401.622083,174.189657 C401.511739,174.226135 401.398051,174.26593 401.284364,174.305724 C400.769425,174.474852 400.247799,174.647296 399.722829,174.806475 C399.589079,174.849585 399.448641,174.886064 399.304859,174.929175 C398.916983,175.048559 398.525764,175.164627 398.134544,175.274062 C397.950637,175.327122 397.770075,175.376865 397.57948,175.426609 C397.235073,175.519463 396.887323,175.615634 396.536228,175.705172 C396.332259,175.754915 396.124946,175.807975 395.920977,175.857718 C395.586601,175.94394 395.242194,176.023529 394.904474,176.106435 C394.700505,176.152862 394.489848,176.199289 394.285879,176.245717 C393.931441,176.325306 393.573659,176.404895 393.222564,176.477852 C393.035314,176.517647 392.848064,176.557442 392.657469,176.597236 C392.242843,176.683458 391.82153,176.759732 391.400217,176.836005 C391.273154,176.862535 391.146091,176.885748 391.019028,176.905645 C390.463964,177.005132 389.902213,177.097987 389.347149,177.180892 C389.283618,177.190841 389.220087,177.20079 389.159899,177.207422 C388.668367,177.280379 388.170147,177.35002 387.671927,177.416344 C387.508083,177.436242 387.334207,177.456139 387.170363,177.476036 C386.7758,177.52578 386.377893,177.568891 385.986673,177.612002 C385.789391,177.631899 385.595453,177.64848 385.401516,177.668377 C385.023671,177.704856 384.645826,177.738018 384.267982,177.767864 C384.064013,177.784445 383.863387,177.801026 383.659418,177.814291 C383.288261,177.844137 382.903729,177.867351 382.525884,177.883932 C382.331946,177.893881 382.134664,177.907146 381.930695,177.920411 C381.512726,177.940308 381.088068,177.953573 380.666755,177.966838 C380.51963,177.97347 380.36916,177.976786 380.218691,177.980103 C379.640221,177.993368 379.05172,178 378.476594,178 C377.888092,178 377.306279,177.993368 376.727809,177.980103 C376.577339,177.976786 376.423527,177.97347 376.273057,177.966838 C375.851744,177.953573 375.423743,177.940308 375.005773,177.920411 C374.811835,177.910462 374.624585,177.897197 374.430647,177.883932 C374.046115,177.867351 373.66827,177.844137 373.283738,177.814291 C373.083113,177.804343 372.885831,177.787762 372.681862,177.767864 C372.300674,177.741334 371.929516,177.704856 371.555016,177.671694 C371.357734,177.651796 371.163796,177.638531 370.973202,177.615318 C370.565263,177.568891 370.150637,177.529096 369.749387,177.476036 C369.598917,177.459455 369.438417,177.439558 369.291292,177.41966 C368.739572,177.35002 368.201227,177.277063 367.656194,177.194157 L367.612726,177.187525 C367.047631,177.104619 366.482535,177.011765 365.924128,176.912278 C365.803753,176.892381 365.683377,176.869167 365.566346,176.842637 C365.138345,176.766364 364.707,176.690091 364.282343,176.600553 C364.10178,176.56739 363.931248,176.527596 363.747342,176.491117 C363.379529,176.414844 363.018403,176.335255 362.650589,176.252349 C362.449964,176.209238 362.256026,176.162811 362.055401,176.113068 C361.70765,176.036794 361.359899,175.950572 361.008804,175.861034 C360.81821,175.811291 360.627616,175.764864 360.443709,175.718437 C360.065865,175.622266 359.691364,175.519463 359.323551,175.41666 C359.159707,175.373549 359.00255,175.330438 358.838706,175.280695 C358.37058,175.151362 357.909141,175.015397 357.444359,174.872799 C357.380828,174.852902 357.32064,174.836321 357.257108,174.816423 C356.725451,174.653928 356.197137,174.478168 355.668824,174.305724 C355.555136,174.269246 355.444792,174.226135 355.32776,174.189657 C354.923166,174.050375 354.525259,173.91441 354.127351,173.771812 C353.950132,173.708804 353.779601,173.642479 353.605725,173.579471 C353.264662,173.450138 352.926943,173.324122 352.585879,173.194789 C352.398629,173.121832 352.211378,173.048875 352.024128,172.972602 C351.703127,172.843269 351.378783,172.713936 351.054438,172.581287 C350.870532,172.505014 350.689969,172.432057 350.502718,172.352467 C350.168343,172.20987 349.830623,172.063956 349.496247,171.918042 C349.332403,171.848401 349.165215,171.775444 349.004715,171.699171 C348.60012,171.520095 348.198869,171.334386 347.800962,171.145361 C347.717368,171.10225 347.627087,171.065772 347.536805,171.022661 C347.045273,170.787209 346.557084,170.545124 346.07224,170.299724 C345.961896,170.240032 345.854895,170.183656 345.744551,170.130596 C345.373394,169.941571 345.005581,169.742598 344.641111,169.553573 C344.473924,169.464035 344.313423,169.374497 344.146235,169.281642 C343.83861,169.115831 343.530984,168.943387 343.216671,168.770944 C343.042795,168.671457 342.86892,168.568654 342.698388,168.472483 C342.400794,168.300039 342.103199,168.127596 341.808949,167.951836 C341.635073,167.8424 341.457854,167.742914 341.290666,167.640111 C340.986384,167.454402 340.682102,167.265377 340.377821,167.076352 C340.227351,166.983498 340.080226,166.887327 339.926413,166.787841 C339.578662,166.565653 339.234255,166.336834 338.886505,166.11133 C338.779504,166.04169 338.675848,165.975365 338.575535,165.905724 C338.127472,165.603948 337.686096,165.302171 337.24472,164.993762 C337.161126,164.930754 337.074188,164.871062 336.98725,164.808054 C336.6395,164.559337 336.291749,164.307304 335.947342,164.051954 C335.796873,163.942519 335.649747,163.829767 335.499278,163.717015 C335.221746,163.508093 334.940871,163.299171 334.670026,163.086932 C334.509526,162.960916 334.345682,162.834899 334.185182,162.708883 C333.914337,162.499961 333.65018,162.287722 333.392711,162.072167 C333.235554,161.946151 333.075054,161.820134 332.924585,161.690801 C332.660428,161.475247 332.396271,161.256376 332.135458,161.034189 C331.984989,160.904856 331.831176,160.778839 331.684051,160.64619 C331.403175,160.407422 331.125643,160.162021 330.854799,159.919937 C330.73108,159.807185 330.604017,159.701066 330.480298,159.584998 C330.085735,159.233478 329.701203,158.875326 329.316671,158.510541 C329.246452,158.4409 329.172889,158.371259 329.099326,158.301619 C328.788357,158.009791 328.480731,157.708014 328.176449,157.409554 C328.039355,157.270272 327.898917,157.130991 327.75848,156.991709 C327.521073,156.752941 327.283666,156.514173 327.052947,156.275405 C326.899134,156.119542 326.748665,155.960363 326.60154,155.801184 C326.380852,155.572365 326.166851,155.343545 325.952851,155.111409 C325.805725,154.948914 325.655256,154.783103 325.504787,154.620608 C325.290787,154.38184 325.076786,154.139755 324.866129,153.904303 C324.722348,153.741808 324.58191,153.582629 324.441472,153.420134 C324.210753,153.158152 323.990065,152.892854 323.766033,152.627556 C323.642314,152.488275 323.521939,152.348993 323.408251,152.209712 C323.070532,151.805132 322.7395,151.39392 322.411811,150.982708 C322.364999,150.926332 322.324874,150.863324 322.274717,150.803632 C321.997185,150.448796 321.719654,150.090644 321.445465,149.729175 C321.318403,149.563364 321.201371,149.397552 321.074308,149.235057 C320.88037,148.973075 320.689776,148.711094 320.499182,148.449112 C320.362088,148.263403 320.235025,148.081011 320.104619,147.891986 C319.924056,147.639953 319.746837,147.387919 319.576305,147.135886 C319.445898,146.946861 319.315492,146.761153 319.191773,146.568812 C319.014554,146.310146 318.840678,146.041532 318.663459,145.77955 C318.53974,145.597158 318.426052,145.414765 318.305677,145.229056 C318.131802,144.95381 317.957926,144.675247 317.787395,144.4 C317.673707,144.220924 317.556675,144.041848 317.449675,143.862771 C317.239019,143.517884 317.031706,143.163048 316.827736,142.81816 C316.730767,142.652349 316.627111,142.483221 316.536829,142.31741 C316.30611,141.926096 316.085422,141.534781 315.868078,141.136834 C315.764421,140.951125 315.660765,140.7621 315.563796,140.573075 C315.413327,140.291196 315.259514,140.012633 315.112389,139.727438 C315.005389,139.518516 314.901732,139.31291 314.794732,139.103987 C314.654294,138.832057 314.520544,138.55681 314.38345,138.278247 C314.283137,138.066009 314.176137,137.85377 314.075824,137.638216 C313.945417,137.372917 313.821698,137.100987 313.694636,136.829056 C313.590979,136.610186 313.490666,136.387998 313.390354,136.162495 C313.259947,135.887248 313.139572,135.605369 313.019197,135.320174 C312.925571,135.111251 312.83529,134.902329 312.745008,134.696723 C312.601227,134.358468 312.464133,134.013581 312.323695,133.675326 C312.260164,133.519463 312.189945,133.360284 312.126413,133.197789 C311.935819,132.716936 311.751912,132.232767 311.568006,131.745282 C311.494443,131.533044 311.414193,131.320805 311.34063,131.111883 C311.23363,130.816739 311.12663,130.514962 311.022973,130.219818 C310.946067,129.990999 310.872504,129.762179 310.795598,129.530043 C310.698629,129.244848 310.60166,128.959653 310.511378,128.671141 C310.437816,128.435689 310.364253,128.196921 310.29069,127.961469 C310.203753,127.672957 310.116815,127.387762 310.033221,127.09925 C309.963002,126.863798 309.892783,126.628346 309.825908,126.392894 C309.742314,126.09775 309.668752,125.799289 309.585158,125.504145 C309.521626,125.272009 309.458095,125.04319 309.404595,124.811054 C309.317657,124.479432 309.237407,124.147809 309.157157,123.819503 C309.107,123.617213 309.056844,123.418239 309.010031,123.219266 L309.010031,123.18942 L309,123.18942 Z" id="Shape" fill="#333333"></path><path d="M312.665127,134.174699 L309,122.688755 L309,122.688755 L346.521074,98 L378,165.172021 L378,178 L377.973441,178 C348.559469,178 323.348441,159.914324 312.665127,134.174699" id="Shape" fill="#4D4D4D"></path><polygon id="Shape" fill="#CCCCCC" points="346 98 378.004985 167 410 98 378.004985 98"></polygon><path d="M369,149.072 L377.994665,167 L387,149.072 L380.031851,137.38725 L385.474778,131.934262 L383.497934,119.50211 C383.0485,119.053558 383.13235,119 382.589005,119 L378.477021,119.840197 L374.354975,119 C373.811629,119 373.895479,119.053558 373.449399,119.50211 L370.435732,131.934262 L376.270099,137.38725 L376.139294,137.38725 L369,149.072 Z" id="Shape" fill="#CC3300"></path><path d="M387,148.613281 L380.24689,137.416149 L380.120806,137.416149 L384.582257,132.987288 L385.264407,132.383809 L382.839705,119.502899 C382.406491,119.053643 382.487315,119 381.963579,119 L378,119.841517 L378,167 L387,148.613281 Z" id="Shape" fill="#A32900"></path><rect id="Rectangle-path" fill="#FFCC00" x="367" y="148" width="15" height="3"></rect><polygon id="Shape" fill="#FFFFFF" points="346 98 364.711118 138 364.714442 138 378.004985 124.800165 390.717246 98 410 98 391.292205 138 378.004985 124.800165 365.276107 98"></polygon><polygon id="Shape" fill="#1A1A1A" points="339.548643 102.327526 338 119.978223 348.56585 124.753194 340.713435 129.558217 378 167 346.133686 98"></polygon><polygon id="Shape" fill="#1A1A1A" points="416.444481 102.327526 418 119.978223 407.432401 124.753194 415.286116 129.558217 378 167 409.861658 98"></polygon><path d="M378,170 C379.660529,170 381,171.345601 381,173.001725 C381,174.657849 379.660529,176 378,176 C376.346375,176 375,174.657849 375,173.001725 C375,171.342151 376.346375,170 378,170" id="Shape" fill="#B3B3B3"></path><path d="M378,170 C379.660529,170 381,171.345601 381,173.001725 C381,174.657849 379.660529,176 378,176 L378,170 Z" id="Shape" fill="#808080"></path><rect id="Rectangle-path" fill="#4D4D4D" x="401" y="152" width="24" height="3"></rect><polygon id="Shape" fill="#FFFFFF" points="401 152 410.792708 142 416.347808 147.665997 418.553462 145.417001 425 152 420.591971 152 412.110201 152"></polygon><path d="M413.435925,58.1222709 C409.917655,53.4358613 410.037709,49.3973898 413.799424,46 C428.876297,50.2681638 436.616492,52.2496889 437,51.9480034 C431.043952,61.3859592 423.183702,63.4429057 413.435925,58.1222709 L413.435925,58.1222709 Z M343.56074,58.1222709 C347.07901,53.4358613 346.958956,49.3973898 343.197241,46 C328.120368,50.2681638 320.390178,52.2496889 320,51.9480034 C325.949379,61.3859592 333.809628,63.4429057 343.56074,58.1222709 Z" id="Shape" fill="#996633"></path><path d="M400.082109,51 C392.711701,42.3451327 391.644538,37.4269912 396.870646,36.2422566 C417.638772,37.3307522 425.561045,28.2610619 420.654089,9.03982301 C418.14742,3.01327434 416.894085,0 416.894085,0 C429.710016,8.39933628 435.441447,19.9081858 433.692762,34.5 C432.702063,42.7599558 421.37883,48.2522124 400.082109,51 L400.082109,51 Z M355.919505,51 C363.286588,42.3451327 364.357075,37.4269912 359.130968,36.2422566 C338.362842,37.3307522 330.437243,28.2610619 335.340875,9.03982301 C337.850869,3.01327434 339.110853,0 339.110853,0 C326.284948,8.39933628 320.563491,19.9081858 322.305526,34.5 C323.292902,42.7599558 334.616135,48.2522124 355.919505,51 Z" id="Shape" fill="#1A1A1A"></path><path d="M379.005018,125 L332,85.582112 C332.812969,64.7036116 336.824287,47.3454593 344.040645,33.5043182 C351.049578,25.3291023 362.658647,23 379.005018,23 C395.341353,23 406.950422,25.3291023 413.95601,33.5043182 C421.169022,47.3454593 425.183685,64.7069484 426,85.582112 L379.005018,125 Z" id="Shape" fill="#CC9933"></path><path d="M378,23 C394.338079,23 405.948388,25.3291023 412.954723,33.5043182 C420.168506,47.3454593 424.183598,64.7069484 425,85.582112 L378,125 L378,23 Z" id="Shape" fill="#A37A29"></path><path d="M358.576459,71 C358.556315,63.3954265 361.658092,18.6438848 344.354112,32.7209458 C344.061843,33.0270593 343.78271,33.3499922 343.510144,33.676289 C337.096646,46.3177667 333.261026,61.8690044 332,80.3300021 C332.089404,80.3700688 332.1794,80.4099016 332.269989,80.4495005 C332.157686,82.138253 332.067645,83.8514216 332,85.5892747 L379.005018,125 L426,85.5892747 C425.802612,80.5182256 425.411183,75.6573582 424.835748,71 L424.112902,71 C422.332224,56.569613 418.790121,44.128376 413.490306,33.676289 C413.214467,33.3499922 412.932061,33.0270593 412.643087,32.7209458 C395.339784,18.6438848 398.438304,63.3954265 398.424144,71 L358.576459,71 Z" id="Combined-Shape" fill="#996633"></path><path d="M379.00672,125 L348,99.1211073 L348,99.1177706 C348,99.1177706 352.072404,93.0050667 360.207132,80.769649 C359.736722,76.4754078 359.686321,73.2188581 360.039129,71 L367.938652,71 C370.841752,74.0630252 374.527748,79.0946614 379.00336,86.1082551 C383.468892,79.0946614 387.151528,74.0630252 390.061348,71 L397.960871,71 C398.313679,73.2221948 398.256558,76.4787444 397.792868,80.769649 C405.927596,93.0050667 410,99.1177706 410,99.1177706 L410,99.1211073 L379.00672,125 Z" id="Shape" fill="#85592B"></path><path d="M359.967431,80.5451428 C360.209326,74.3576914 369.901713,80.1887456 374.368494,83.2148219 C375.094181,83.7725175 375.833122,84.2939134 376.582003,84.7790096 L376.585317,84.7823096 C377.251358,85.2179061 377.930653,85.620503 378.613262,86 C380.183926,85.1321068 381.71814,84.1091148 383.21259,82.937624 C387.84174,79.8521483 396.967494,74.54249 397.202762,80.5451428 C410.400976,57.1252267 346.116431,57.1780263 359.967431,80.5451428" id="Shape" fill="#1A1A1A"></path><path d="M379.005089,64 C385.077564,64 390,66.4640832 390,69.5 C390,72.5359168 385.077564,75 379.005089,75 C372.925829,75 368,72.5359168 368,69.5 C368.003392,66.4640832 372.925829,64 379.005089,64" id="Shape" fill="#666666"></path><path d="M378.505066,98 C363.119838,98 360.347724,95.1677594 361.115127,89 C361.321345,94.1612032 367.108976,95.3621288 378.505066,95.3621288 C389.891015,95.3621288 395.682027,94.1612032 395.884864,89 C396.652266,95.1677594 393.880153,98 378.505066,98" id="Shape" fill="#1A1A1A"></path><path d="M404.899433,52.7951815 C402.076844,52.6720715 399.602888,55.0077423 398.687726,58 C396.418257,38.5862323 414.054409,37.7791777 418,50.517646 C414.677927,52.5865784 411.097731,53.0721791 404.899433,52.7951815 L404.899433,52.7951815 Z M353.100567,52.7951815 C355.923156,52.6720715 358.400464,55.0077423 359.312274,58 C361.578391,38.5862323 343.942238,37.7791777 340,50.517646 C343.322073,52.5865784 346.898917,53.0721791 353.100567,52.7951815 Z" id="Shape" fill="#1A1A1A"></path></svg>
              </div>
            </div>
            <div className='button-container'>
              <ul className='button-list'>
                <li>
                  <a href="/" data-cy-id="navigation-app" className="header-button-link">
                    <div data-focus="dashed" className="header-button">Go to platform</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <header className='member-header'>
            <h2>Pick the plan that’s right for your investing needs</h2>
          </header>
          <div className='plans-container'>
            <div className='plans-container-1'>
              <div className='plan-item'>
                <div className='plan-item1'>
                  <div className='plan-item-header free'>
                    <div className='plan-item-header1'>
                      <div className='plan-item-background'>
                        <img alt="bear-illustration" srcSet="https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,w=208,q=80,blur=0/https://simplywall.st/static/images/free-bear.png" width="148px" />
                      </div>
                      <div className='plan-item-content'>
                        <p className='title'>Free</p>
                        <p className='description'>Start small and learn the ropes</p>
                        <div className='price'>
                          <p>EUR <mark>€0</mark> forever</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-item-body'>
                    <ul>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">5 Company Reports per Month</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">1 Portfolio, 10 Holdings</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">1 Watchlist</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Limited Screeners & Alerts</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Limited Risk & Reward Updates</p>
                        </li>
                      </div>
                      <div className="plan-extra-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#151B24" opacity="0.3"><path fillRule="evenodd" clip-rule="evenodd" d="M7.75886 6.34273C7.36834 5.9522 6.73518 5.9522 6.34465 6.34273C5.95413 6.73325 5.95413 7.36642 6.34465 7.75694L10.5869 11.9992L6.34359 16.2426C5.95307 16.6331 5.95307 17.2663 6.34359 17.6568C6.73412 18.0473 7.36728 18.0473 7.75781 17.6568L12.0012 13.4134L16.2441 17.6564C16.6347 18.047 17.2678 18.047 17.6584 17.6564C18.0489 17.2659 18.0489 16.6327 17.6584 16.2422L13.4154 11.9992L17.6573 7.75731C18.0478 7.36678 18.0478 6.73362 17.6573 6.34309C17.2668 5.95257 16.6336 5.95257 16.2431 6.34309L12.0012 10.585L7.75886 6.34273Z"></path></svg>
                        <p className='plan-extra'>Brokerage Sync</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#151B24" opacity="0.3"><path fillRule="evenodd" clip-rule="evenodd" d="M7.75886 6.34273C7.36834 5.9522 6.73518 5.9522 6.34465 6.34273C5.95413 6.73325 5.95413 7.36642 6.34465 7.75694L10.5869 11.9992L6.34359 16.2426C5.95307 16.6331 5.95307 17.2663 6.34359 17.6568C6.73412 18.0473 7.36728 18.0473 7.75781 17.6568L12.0012 13.4134L16.2441 17.6564C16.6347 18.047 17.2678 18.047 17.6584 17.6564C18.0489 17.2659 18.0489 16.6327 17.6584 16.2422L13.4154 11.9992L17.6573 7.75731C18.0478 7.36678 18.0478 6.73362 17.6573 6.34309C17.2668 5.95257 16.6336 5.95257 16.2431 6.34309L12.0012 10.585L7.75886 6.34273Z"></path></svg>
                        <p className='plan-extra'>Priority Support</p>
                      </div>
                    </ul>
                    <div className='option-button-container'>
                      <button display="block" disabled="" data-focus="dashed" className="option-button disable-btn">Current Plan</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='plan-item'>
                <div className='plan-item1'>
                  <div className='plan-item-header premium'>
                    <div className='plan-item-header1'>
                      <div className='plan-item-background'>
                        <img alt="bear-illustration" srcSet="https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,w=208,q=80,blur=0/https://simplywall.st/static/images/premium-bear.png" width="148px" />
                      </div>
                      <div className='plan-item-content'>
                        <p className='title'>Premium</p>
                        <p className='description'>Grow and protect your portfolios</p>
                        <div className='price'>
                          <p>EUR <mark>€9.17</mark> /mo</p>
                        </div>
                        <div className='annual-bill'>
                          <p>€110 Billed Yearly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-item-body'>
                    <ul>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">30 Company Reports per Month</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">3 Portfolio, 30 Holdings</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">3 Watchlists</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">3 Stock Screeners & Alerts</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Limited Risk & Reward Updates</p>
                        </li>
                      </div>
                      <div className="plan-extra-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Brokerage Sync</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Priority Support</p>
                      </div>
                    </ul>
                    <div className='option-button-container'>
                      <button display="block" disabled="" data-focus="dashed" className="option-button active-btn" onClick={choosePremium}>Choose Premium</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='plan-item'>
                <div className='plan-item1'>
                  <div className='plan-item-header premium'>
                    <div className='plan-item-header1'>
                      <div className='plan-item-background'>
                      <img alt="bear-illustration" srcSet="https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,w=208,q=80,blur=0/https://simplywall.st/static/images/unlimited-bear.png" width="148px" />
                      </div>
                      <div className='plan-item-content'>
                        <p className='title'>Unlimited</p>
                        <p className='description'>All you need to invest like the best</p>
                        <div className='price'>
                          <p>EUR <mark>€18.33</mark> /mo</p>
                        </div>
                        <div className='annual-bill'>
                          <p>€220 Billed Yearly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-item-body'>
                    <ul>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Unlimited Company Reports</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">5 Portfolios, Unlimited Holdings</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">5 Watchlists</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">10 Stock Screeners & Alerts</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Unlimited Risk & Reward Updates</p>
                        </li>
                      </div>
                      <div className="plan-extra-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Brokerage Sync</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Priority Support</p>
                      </div>
                    </ul>
                    <div className='option-button-container'>
                      <button display="block" disabled="" data-focus="dashed" className="option-button active-btn" onClick={chooseUnlimited}>Choose Unlimited</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Membership;