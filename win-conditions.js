export class WinConditions {
    matchCompare(player, computer) {

        if (player === computer) return 2;
        else if (player == 1 && computer == 2) return 1;
        else if (player == 2 && computer == 3) return 1;
        else if (player == 3 && computer == 1) return 1;
        else if (player == 1 && computer == 3) return 0;
        else if (player == 2 && computer == 1) return 0;
        else if (player == 3 && computer == 2) return 0;
    }
}