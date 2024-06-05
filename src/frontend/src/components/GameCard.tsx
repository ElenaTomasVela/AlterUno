import { CardColor, CardSymbol, ICard } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  ChangeColorIcon,
  Draw2Icon,
  Draw4Icon,
  ReverseTurnIcon,
  SkipTurnIcon,
} from "./icons/CardSymbolIcons";

export function GameCard({
  card,
  className,
}: {
  card: ICard;
  className?: string;
}) {
  const getBgColor = (cardColor: CardColor) => {
    switch (cardColor) {
      case CardColor.red:
        return "bg-[#ff7240] text-[#ff7240]";
      case CardColor.green:
        return "bg-[#3fd56b] text-[#3fd56b]";
      case CardColor.blue:
        return "bg-[#00bbd3] text-[#00bbd3]";
      case CardColor.yellow:
        return "bg-[#ffd35b] text-[#ffd35b]";
      case CardColor.wild:
        return "bg-wildcard";
    }
  };

  const CardUISymbol = ({ symbol }: { symbol: CardSymbol }) => {
    switch (symbol) {
      case CardSymbol.zero:
        return 0;
      case CardSymbol.one:
        return 1;
      case CardSymbol.two:
        return 2;
      case CardSymbol.three:
        return 3;
      case CardSymbol.four:
        return 4;
      case CardSymbol.five:
        return 5;
      case CardSymbol.six:
        return 6;
      case CardSymbol.seven:
        return 7;
      case CardSymbol.eight:
        return 8;
      case CardSymbol.nine:
        return 9;
      case CardSymbol.draw2:
        return <Draw2Icon className="fill-current mx-auto size-full" />;
      case CardSymbol.draw4:
        return <Draw4Icon className="mx-auto mt-2 size-full" />;
      case CardSymbol.skipTurn:
        return <SkipTurnIcon className="fill-current mx-auto size-full" />;
      case CardSymbol.reverseTurn:
        return <ReverseTurnIcon className="fill-current mx-auto size-full" />;
      case CardSymbol.changeColor:
        return <ChangeColorIcon className="mx-auto size-full" />;
    }
  };

  return (
    <div
      className={cn(
        `${getBgColor(card.color)} aspect-[2/3] rounded-xl flex flex-col justify-center
      text-xl font-black w-32 text-center `,
        className,
      )}
    >
      <div
        className="bg-white rounded-lg p-2 h-3/5 flex flex-col justify-center whitespace-nowrap
        mx-auto w-3/4 font-card text-6xl"
      >
        <CardUISymbol symbol={card.symbol} />
      </div>
    </div>
  );
}

export function CardBack({ className }: { className?: string }) {
  return (
    <div
      className={`aspect-[2/3] rounded-xl w-32 overflow-hidden p-2
  ${className} border shadow-lg`}
    >
      <div className="bg-wildcard size-full rounded-xl p-2">
        <div className="bg-white size-full rounded-lg block">
          <svg
            className="w-4/5 m-auto h-full"
            viewBox="0 0 109 118.00018"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group-2">
              <path
                d="M62.0866 3.55655L94.7676 17.5293Q94.97 17.6159 95.168 17.7122Q95.366 17.8086 95.5591 17.9145Q95.7521 18.0205 95.9398 18.1357Q96.1274 18.251 96.3092 18.3753Q96.491 18.4995 96.6665 18.6326Q96.8419 18.7656 97.0107 18.9071Q97.1795 19.0485 97.3411 19.198Q97.5028 19.3476 97.6569 19.5048Q97.811 19.6621 97.9573 19.8267Q98.1036 19.9913 98.2416 20.1629Q98.3796 20.3345 98.5091 20.5126Q98.6386 20.6907 98.7592 20.8749Q98.8798 21.0592 98.9913 21.2491Q99.1028 21.439 99.2048 21.6341Q99.3069 21.8293 99.3992 22.0292Q99.4916 22.2291 99.5741 22.4332Q99.6566 22.6374 99.729 22.8454Q99.8014 23.0533 99.8635 23.2646Q99.9257 23.4759 99.9774 23.6899Q100.029 23.9039 100.07 24.1203Q100.112 24.3366 100.142 24.5546Q100.173 24.7727 100.193 24.992Q100.213 25.2113 100.222 25.4313Q100.231 25.6514 100.229 25.8716Q100.228 26.0918 100.215 26.3116Q100.203 26.5315 100.18 26.7505Q100.156 26.9695 100.123 27.187Q100.089 27.4046 100.044 27.6203Q99.9999 27.836 99.945 28.0493Q99.8901 28.2625 99.8248 28.4728Q99.7595 28.6831 99.6841 28.89Q99.6086 29.0968 99.523 29.2998L76.984 82.7831Q76.8979 82.9874 76.8019 83.1872Q76.7058 83.3869 76.6001 83.5817Q76.4943 83.7766 76.3791 83.9659Q76.2639 84.1553 76.1395 84.3388Q76.0151 84.5222 75.8818 84.6994Q75.7485 84.8765 75.6067 85.0468Q75.4649 85.2172 75.3148 85.3803Q75.1647 85.5435 75.0068 85.6991Q74.8489 85.8547 74.6836 86.0023Q74.5182 86.1499 74.3458 86.2892Q74.1733 86.4285 73.9942 86.5591Q73.8152 86.6897 73.6299 86.8114Q73.4445 86.933 73.2535 87.0454Q73.0624 87.1578 72.8661 87.2607Q72.6697 87.3635 72.4685 87.4566Q72.2673 87.5496 72.0618 87.6327Q71.8562 87.7157 71.6469 87.7885Q71.4375 87.8613 71.2248 87.9238Q71.0121 87.9862 70.7966 88.038Q70.5811 88.0899 70.3633 88.1311Q70.1455 88.1723 69.9259 88.2028Q69.7063 88.2332 69.4855 88.2528Q69.2647 88.2724 69.0433 88.281Q68.8218 88.2897 68.6001 88.2875Q68.3784 88.2853 68.1572 88.2722Q67.9359 88.259 67.7155 88.235Q67.4951 88.211 67.2762 88.1762Q67.0573 88.1413 66.8404 88.0958Q66.6235 88.0502 66.409 87.994Q66.1946 87.9378 65.9832 87.8712Q65.7718 87.8045 65.5639 87.7275Q65.3561 87.6505 65.1522 87.5633L32.4713 73.5906Q32.2688 73.504 32.0708 73.4077Q31.8728 73.3113 31.6797 73.2054Q31.4867 73.0994 31.2991 72.9842Q31.1114 72.8689 30.9296 72.7446Q30.7479 72.6203 30.5724 72.4873Q30.3969 72.3543 30.2281 72.2128Q30.0594 72.0714 29.8977 71.9218Q29.7361 71.7723 29.5819 71.615Q29.4278 71.4578 29.2815 71.2932Q29.1353 71.1286 28.9972 70.957Q28.8592 70.7854 28.7297 70.6073Q28.6002 70.4292 28.4796 70.2449Q28.359 70.0607 28.2475 69.8708Q28.1361 69.6809 28.034 69.4858Q27.932 69.2906 27.8396 69.0907Q27.7472 68.8908 27.6647 68.6867Q27.5822 68.4825 27.5098 68.2745Q27.4374 68.0666 27.3753 67.8553Q27.3131 67.6441 27.2614 67.43Q27.2096 67.216 27.1684 66.9996Q27.1272 66.7833 27.0966 66.5652Q27.0661 66.3472 27.0462 66.1279Q27.0263 65.9086 27.0172 65.6885Q27.008 65.4685 27.0097 65.2483Q27.0113 65.0281 27.0237 64.8083Q27.0361 64.5884 27.0592 64.3694Q27.0824 64.1504 27.1162 63.9328Q27.15 63.7152 27.1945 63.4996Q27.2389 63.2839 27.2938 63.0706Q27.3487 62.8574 27.414 62.6471Q27.4793 62.4368 27.5548 62.2299Q27.6303 62.0231 27.7158 61.8201L50.2548 8.3368Q50.3409 8.13253 50.437 7.93274Q50.533 7.73296 50.6387 7.53814Q50.7445 7.34333 50.8597 7.15396Q50.9749 6.96458 51.0993 6.78111Q51.2237 6.59764 51.357 6.42052Q51.4903 6.24339 51.6321 6.07305Q51.774 5.9027 51.924 5.73954Q52.0741 5.57638 52.232 5.42081Q52.3899 5.26524 52.5553 5.11763Q52.7206 4.97001 52.8931 4.83072Q53.0655 4.69143 53.2446 4.5608Q53.4237 4.43017 53.609 4.30851Q53.7943 4.18685 53.9853 4.07446Q54.1764 3.96207 54.3728 3.85923Q54.5691 3.75638 54.7703 3.66333Q54.9715 3.57027 55.1771 3.48724Q55.3826 3.4042 55.5919 3.33138Q55.8013 3.25856 56.014 3.19614Q56.2267 3.13371 56.4422 3.08184Q56.6577 3.02996 56.8755 2.98876Q57.0933 2.94756 57.3129 2.91712Q57.5325 2.88669 57.7533 2.86711Q57.9741 2.84752 58.1956 2.83883Q58.4171 2.83014 58.6387 2.83236Q58.8604 2.83459 59.0817 2.84772Q59.3029 2.86085 59.5233 2.88486Q59.7437 2.90887 59.9626 2.9437Q60.1815 2.97853 60.3984 3.0241Q60.6154 3.06966 60.8298 3.12585Q61.0442 3.18204 61.2556 3.24872Q61.467 3.3154 61.6749 3.3924Q61.8828 3.46941 62.0866 3.55655Z"
                id="Rectangle-Copy-2"
                fill="#3FD66C"
                fill-rule="evenodd"
                stroke="#FFFFFF"
                stroke-width="6"
              />
              <path
                d="M19.4469 8.88677L54.5876 13.8613Q54.8061 13.8922 55.0228 13.9338Q55.2395 13.9754 55.4539 14.0275Q55.6683 14.0797 55.8799 14.1423Q56.0915 14.2049 56.2997 14.2778Q56.508 14.3507 56.7125 14.4338Q56.9169 14.5168 57.117 14.6097Q57.3172 14.7027 57.5125 14.8053Q57.7078 14.908 57.8979 15.02Q58.088 15.1321 58.2723 15.2534Q58.4567 15.3747 58.6348 15.5048Q58.813 15.635 58.9846 15.7737Q59.1562 15.9124 59.3208 16.0594Q59.4854 16.2064 59.6426 16.3612Q59.7997 16.5161 59.9492 16.6785Q60.0986 16.8409 60.2398 17.0104Q60.3811 17.1799 60.5139 17.3561Q60.6467 17.5323 60.7707 17.7149Q60.8947 17.8974 61.0096 18.0858Q61.1245 18.2741 61.23 18.4679Q61.3356 18.6617 61.4315 18.8604Q61.5274 19.0591 61.6135 19.2623Q61.6995 19.4655 61.7755 19.6727Q61.8515 19.8798 61.9173 20.0905Q61.983 20.3011 62.0384 20.5147Q62.0937 20.7283 62.1385 20.9444Q62.1834 21.1604 62.2175 21.3784Q62.2517 21.5964 62.2752 21.8158Q62.2986 22.0352 62.3113 22.2555Q62.324 22.4758 62.3258 22.6965Q62.3277 22.9171 62.3187 23.1376Q62.3098 23.3581 62.2901 23.5778Q62.2703 23.7976 62.2398 24.0161L54.2093 81.5701Q54.1787 81.7892 54.1374 82.0065Q54.0961 82.2239 54.0442 82.4389Q53.9923 82.6539 53.9299 82.8662Q53.8674 83.0784 53.7947 83.2873Q53.7219 83.4962 53.6389 83.7013Q53.556 83.9063 53.463 84.1071Q53.3701 84.3079 53.2674 84.5038Q53.1648 84.6997 53.0526 84.8904Q52.9404 85.0811 52.819 85.266Q52.6976 85.4509 52.5672 85.6296Q52.4369 85.8084 52.2979 85.9805Q52.1589 86.1526 52.0116 86.3177Q51.8644 86.4828 51.7092 86.6404Q51.554 86.7981 51.3912 86.9479Q51.2285 87.0977 51.0586 87.2394Q50.8886 87.381 50.712 87.5141Q50.5353 87.6473 50.3523 87.7716Q50.1693 87.8959 49.9804 88.011Q49.7915 88.1261 49.5972 88.2319Q49.4029 88.3376 49.2036 88.4337Q49.0043 88.5297 48.8006 88.6159Q48.5968 88.702 48.3891 88.7781Q48.1814 88.8541 47.9701 88.9198Q47.7589 88.9856 47.5447 89.0408Q47.3305 89.0961 47.1139 89.1408Q46.8972 89.1855 46.6786 89.2195Q46.46 89.2535 46.24 89.2767Q46.02 89.2999 45.7991 89.3123Q45.5783 89.3247 45.3571 89.3262Q45.1359 89.3277 44.9148 89.3183Q44.6938 89.309 44.4735 89.2888Q44.2532 89.2686 44.0342 89.2376L8.89345 84.2631Q8.67497 84.2322 8.45827 84.1906Q8.24156 84.149 8.02716 84.0968Q7.81276 84.0446 7.60117 83.982Q7.38958 83.9194 7.18132 83.8465Q6.97305 83.7736 6.76861 83.6906Q6.56417 83.6075 6.36404 83.5146Q6.16391 83.4217 5.96857 83.319Q5.77324 83.2164 5.58317 83.1043Q5.3931 82.9922 5.20876 82.8709Q5.02441 82.7497 4.84622 82.6195Q4.66804 82.4894 4.49645 82.3506Q4.32486 82.2119 4.16027 82.0649Q3.99569 81.918 3.8385 81.7631Q3.68131 81.6082 3.53191 81.4458Q3.3825 81.2835 3.24123 81.114Q3.09996 80.9445 2.96716 80.7682Q2.83437 80.592 2.71037 80.4095Q2.58637 80.227 2.47146 80.0386Q2.35656 79.8502 2.25102 79.6564Q2.14549 79.4626 2.04958 79.2639Q1.95366 79.0652 1.8676 78.862Q1.78155 78.6588 1.70555 78.4517Q1.62955 78.2445 1.56379 78.0339Q1.49804 77.8232 1.44269 77.6096Q1.38733 77.396 1.34251 77.18Q1.29769 76.9639 1.26351 76.7459Q1.22934 76.5279 1.20588 76.3085Q1.18243 76.0891 1.16976 75.8688Q1.15708 75.6485 1.15522 75.4279Q1.15336 75.2072 1.16231 74.9868Q1.17126 74.7663 1.19101 74.5465Q1.21076 74.3267 1.24125 74.1082L9.27176 16.5542Q9.30233 16.3351 9.34363 16.1178Q9.38493 15.9005 9.43685 15.6854Q9.48878 15.4704 9.5512 15.2582Q9.61363 15.0459 9.68641 14.837Q9.75919 14.6281 9.84214 14.423Q9.9251 14.218 10.018 14.0172Q10.111 13.8165 10.2136 13.6205Q10.3163 13.4246 10.4285 13.2339Q10.5407 13.0433 10.6621 12.8583Q10.7835 12.6734 10.9139 12.4947Q11.0442 12.3159 11.1832 12.1438Q11.3222 11.9717 11.4694 11.8066Q11.6167 11.6416 11.7719 11.4839Q11.9271 11.3263 12.0898 11.1764Q12.2526 11.0266 12.4225 10.885Q12.5924 10.7433 12.7691 10.6102Q12.9458 10.4771 13.1288 10.3528Q13.3118 10.2285 13.5007 10.1133Q13.6895 9.99818 13.8839 9.89245Q14.0782 9.78671 14.2774 9.69066Q14.4767 9.5946 14.6805 9.50845Q14.8842 9.4223 15.092 9.34626Q15.2997 9.27023 15.5109 9.20449Q15.7222 9.13875 15.9364 9.08347Q16.1506 9.02819 16.3672 8.9835Q16.5839 8.93881 16.8025 8.90482Q17.021 8.87082 17.241 8.84761Q17.461 8.8244 17.6819 8.81202Q17.9028 8.79965 18.124 8.79814Q18.3452 8.79663 18.5662 8.80599Q18.7872 8.81535 19.0075 8.83556Q19.2278 8.85576 19.4469 8.88677Z"
                id="Rectangle-Copy"
                fill="#FF7340"
                fill-rule="evenodd"
                stroke="#FFFFFF"
                stroke-width="6"
              />
              <path
                d="M31.1796 28.7315L66.0159 35.552Q66.2323 35.5944 66.4464 35.6473Q66.6605 35.7003 66.8718 35.7636Q67.0831 35.827 67.291 35.9006Q67.4989 35.9742 67.7029 36.058Q67.907 36.1417 68.1067 36.2353Q68.3064 36.3289 68.5013 36.4322Q68.6961 36.5355 68.8857 36.6482Q69.0753 36.7609 69.2592 36.8828Q69.443 37.0046 69.6206 37.1353Q69.7983 37.266 69.9693 37.4053Q70.1403 37.5446 70.3043 37.692Q70.4683 37.8395 70.6249 37.9948Q70.7815 38.1502 70.9303 38.313Q71.0791 38.4758 71.2197 38.6457Q71.3604 38.8156 71.4925 38.9922Q71.6246 39.1688 71.748 39.3516Q71.8713 39.5345 71.9855 39.7232Q72.0998 39.9118 72.2046 40.1059Q72.3095 40.2999 72.4047 40.4989Q72.4999 40.6978 72.5853 40.9012Q72.6706 41.1045 72.7459 41.3119Q72.8212 41.5192 72.8863 41.7299Q72.9513 41.9407 73.006 42.1543Q73.0606 42.368 73.1047 42.5841Q73.1488 42.8002 73.1823 43.0182Q73.2158 43.2362 73.2386 43.4556Q73.2613 43.675 73.2733 43.8952Q73.2853 44.1154 73.2865 44.336Q73.2877 44.5565 73.278 44.7769Q73.2684 44.9972 73.248 45.2168Q73.2276 45.4365 73.1965 45.6548Q73.1654 45.8732 73.1236 46.0897L62.114 103.139Q62.0721 103.357 62.0195 103.572Q61.9669 103.787 61.9039 103.999Q61.8408 104.211 61.7674 104.42Q61.694 104.628 61.6104 104.833Q61.5268 105.038 61.4332 105.239Q61.3396 105.439 61.2363 105.635Q61.133 105.831 61.0202 106.021Q60.9074 106.212 60.7854 106.396Q60.6633 106.581 60.5324 106.759Q60.4014 106.938 60.2619 107.11Q60.1223 107.281 59.9745 107.446Q59.8266 107.611 59.6708 107.768Q59.5151 107.925 59.3518 108.075Q59.1885 108.224 59.0181 108.365Q58.8476 108.506 58.6704 108.639Q58.4933 108.772 58.3098 108.895Q58.1263 109.019 57.937 109.134Q57.7476 109.248 57.5529 109.353Q57.3581 109.459 57.1584 109.554Q56.9588 109.649 56.7546 109.735Q56.5505 109.82 56.3424 109.896Q56.1343 109.971 55.9228 110.036Q55.7113 110.101 55.4968 110.156Q55.2823 110.211 55.0654 110.254Q54.8485 110.298 54.6297 110.332Q54.4109 110.365 54.1907 110.387Q53.9705 110.41 53.7495 110.422Q53.5285 110.433 53.3072 110.434Q53.0859 110.435 52.8648 110.424Q52.6437 110.414 52.4234 110.393Q52.203 110.372 51.984 110.341Q51.765 110.309 51.5478 110.266L16.7115 103.446Q16.4951 103.403 16.281 103.35Q16.0669 103.297 15.8556 103.234Q15.6443 103.171 15.4364 103.097Q15.2285 103.023 15.0245 102.94Q14.8204 102.856 14.6207 102.762Q14.421 102.669 14.2261 102.566Q14.0313 102.462 13.8417 102.35Q13.6521 102.237 13.4683 102.115Q13.2844 101.993 13.1068 101.862Q12.9291 101.732 12.7581 101.592Q12.5871 101.453 12.4231 101.306Q12.2591 101.158 12.1025 101.003Q11.9459 100.848 11.7971 100.685Q11.6483 100.522 11.5077 100.352Q11.3671 100.182 11.2349 100.006Q11.1028 99.8289 10.9794 99.6461Q10.8561 99.4632 10.7419 99.2746Q10.6276 99.0859 10.5228 98.8918Q10.4179 98.6978 10.3227 98.4988Q10.2275 98.2999 10.1421 98.0965Q10.0568 97.8932 9.98149 97.6859Q9.9062 97.4786 9.84115 97.2678Q9.7761 97.0571 9.72145 96.8434Q9.6668 96.6297 9.62268 96.4136Q9.57856 96.1975 9.54508 95.9795Q9.5116 95.7615 9.48884 95.5421Q9.46608 95.3227 9.4541 95.1025Q9.44211 94.8823 9.44093 94.6617Q9.43974 94.4412 9.44936 94.2208Q9.45898 94.0005 9.47938 93.7809Q9.49978 93.5613 9.53092 93.3429Q9.56205 93.1246 9.60385 92.908L20.6134 35.8584Q20.6553 35.6411 20.7079 35.4261Q20.7605 35.2112 20.8235 34.999Q20.8866 34.7869 20.96 34.5781Q21.0335 34.3693 21.1171 34.1644Q21.2007 33.9595 21.2942 33.7589Q21.3878 33.5583 21.4911 33.3626Q21.5944 33.1669 21.7072 32.9765Q21.82 32.7861 21.9421 32.6014Q22.0641 32.4168 22.195 32.2384Q22.326 32.06 22.4656 31.8882Q22.6051 31.7164 22.753 31.5517Q22.9008 31.387 23.0566 31.2298Q23.2123 31.0726 23.3756 30.9232Q23.5389 30.7738 23.7094 30.6326Q23.8798 30.4915 24.057 30.3588Q24.2342 30.2262 24.4177 30.1025Q24.6011 29.9787 24.7905 29.8641Q24.9798 29.7495 25.1746 29.6444Q25.3693 29.5392 25.569 29.4438Q25.7687 29.3483 25.9728 29.2628Q26.1769 29.1773 26.385 29.1019Q26.5931 29.0265 26.8046 28.9615Q27.0162 28.8964 27.2307 28.8418Q27.4451 28.7872 27.662 28.7433Q27.879 28.6993 28.0978 28.666Q28.3166 28.6328 28.5367 28.6103Q28.7569 28.5878 28.9779 28.5762Q29.1989 28.5646 29.4203 28.5639Q29.6416 28.5631 29.8627 28.5733Q30.0837 28.5834 30.3041 28.6044Q30.5244 28.6254 30.7434 28.6572Q30.9624 28.689 31.1796 28.7315L31.1796 28.7315Z"
                id="Rectangle"
                fill="#00BCD4"
                fill-rule="evenodd"
                stroke="#FFFFFF"
                stroke-width="6"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
