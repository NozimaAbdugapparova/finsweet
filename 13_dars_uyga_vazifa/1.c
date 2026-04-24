#include <stdio.h>
#include <stdlib.h>

int kub(int N)
{
return N*N;
}

int main()
{
int A;
system("clear");
printf("Sonni kiriting.\n");
scanf("%d", &A);
printf("Bu sonning kubi  %d", kub(A));

return 0;
}
