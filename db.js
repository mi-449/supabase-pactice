import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mykcltgkxycmmcricdek.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15a2NsdGdreHljbW1jcmljZGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NzQ0ODgsImV4cCI6MjA4NzQ1MDQ4OH0.ySdqe0r0XTkm6Src7AfQK2aryk7M3mEAyBLM9Lmod78'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookllist = document.getElementById('books');
    bookllist.innerHTML += `<li>&{book.title}</li>`
  }