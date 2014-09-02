char = ["*","a","b","c","*","*","a","b","c","*"]

flag = false
char.map! do |ch|
  if ch == "*" && flag == false
    flag = true
    "<i>"
  elsif ch == "*" && flag == true
    flag = false
    "</i>"
  else
    ch
  end
end

p char
