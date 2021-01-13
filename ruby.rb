
def read_file(file_name)
    File.open(file_name).read()
end

imported_text = read_file("file.txt")

def wrap(text)
    output_arr = []
    counter = 0
    char_arr = text.split("")
    
    char_arr.each_with_index do |char, index|
        # checking begin/ paragrach
        if char == "\n" && char_arr[index...index + 5].join == "\n\n \n\n"
          counter = 0
        # there were a lot of random carriage. Checking for paragraph again if not remove and add space
        elsif char == "\n" && char_arr[index...index + 4].join != "\n \n\n"
            counter += 1
            char= " "
        # boundary without breaking words or going over max 
        elsif  counter >= 80 && char == " "     
            counter = 0
            char ="\n"
        #checking charcters after spaces to see if will go over max 😅
        elsif char ==" " && char_arr[index... index + 5].length + counter > 75 && char_arr[index + 1... index + 5].include?(" ") == false
                counter = 0
                char="\n"
            
        end
        counter += 1 
        output_arr <<char
    end
    
  wrapped = output_arr.join.to_s
  return wrapped    
end

puts wrap(imported_text)
