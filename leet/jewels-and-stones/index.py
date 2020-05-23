class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
    #     count = 0
    #     for x in S:
    #         if x in J:
    #             count += 1
    #     return count
        jewels = set(J)
        count = 0
        for stone in S:
            if stone in jewels:
                count += 1
                
        return count


sol = Solution()

J = 'aA'
S = 'aAAbbbb'

result = sol.numJewelsInStones(J, S)

print(result)