# ICE 1 
# JEREMY GUMBURA
# DATE : 2025/05/015
# DESCRIPTION:  program to analyze some movie data. 


# setting up some helper functions 
def is_valid_float(value):
    try:
        float(value)
        return True
    except:
        return False

def is_valid_int(value):
    return value.isnumeric()

# Initial movie list
movies = [ 
    ("Eternal Sunshine of the Spotless Mind", 20000000), 
    ("Memento", 9000000), 
    ("Requiem for a Dream", 4500000), 
    ("Pirates of the Caribbean: On Stranger Tides", 379000000), 
    ("Avengers: Age of Ultron", 365000000), 
    ("Avengers: Endgame", 356000000), 
    ("Incredibles 2", 200000000)
]

# Asking the user how many movies to add
while True:
    number_of_movies = input("How many movies would you like to add today?: ")
    if is_valid_int(number_of_movies):
        number_of_movies = int(number_of_movies)
        break
    else:
        print("Please enter a valid whole number.")

# Add movies to the list
for index in range(number_of_movies):
    title_of_movie = input(f"Enter the title of movie: ")
    while True:
        budget_of_movie = input(f"Enter the budget for '{title_of_movie}': ")
        if is_valid_float(budget_of_movie):
            budget_of_movie = float(budget_of_movie)
            break
        else:
            print("Please enter a valid budget (number).")
    movies.append((title_of_movie, budget_of_movie))

# Displaying the new movies added
print("\nUpdated list of new movies:\n")
for title, budget in movies:
    print(f"{title}: ${budget:,.2f}")

# Calculate average budget
# setting up the total_budgetvariable
total_budget = 0
for index in range(len(movies)):
    total_budget += movies[index][1]
average_budget = total_budget / len(movies)

# Display the average budget
print(f"\nAverage budget: ${average_budget:,.2f}\n")

# Print high budget movies
high_budget_count = 0
for title, budget in movies:
    if budget > average_budget:
        high_budget_count += 1
        difference = budget - average_budget

        print(f"\n{title} had a budget ${difference:,.2f} above the average.\n")

print(f"Number of movies with above the average budget: {high_budget_count}")
