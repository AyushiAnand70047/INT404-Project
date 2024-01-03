// Navigation
function blog() {
  window.location = "blog.html";
}
function contact() {
  window.location = "Contactus.html";
}
function java() {
  window.location = "Java.html";
}
function login() {
  window.location = "index.html";
}
// AI chatbot
function IsEnter(event) {
  if (event.keyCode === 13) {
    var TextBox_val = document.getElementById("InputBox").value;
    if (TextBox_val != "") {
      main(TextBox_val);
    }
  }
}
var isSpoken = false;
// Here I have used simple AI application in the form of a chatbot
function main(input) {
  var ResponseText_val = document.getElementById("ResponseText");
  var FormatInput = input.toLowerCase().trim();
  if (FormatInput.includes("boilerplate code")) {
    ResponseText_val.innerHTML = `
    <pre>
    class HelloWorld
    {
        public static void main(String args[])
       {
              System.out.println("Hello World");
        }
    }</pre>`;
  } else if (FormatInput.includes("output")) {
    ResponseText_val.innerHTML = `
    <pre>
    class HelloWorld
        {
            public static void main(String args[])
            {
                  System.out.println("It display the content as it is on screen");
            }
        }
    </pre>
    `;
  } else if (FormatInput.includes("input")) {
    ResponseText_val.innerHTML = `
    <pre>
    import java.util.Scanner;
    class HelloWorld
    {
        public static void main(String args[])
        {
            Scannner sc=new Scanner(System.in);
            int x=sc.nextInt();
            System.out.println(x);
        }
    }
    </pre>
    `;
  } else if (FormatInput.includes("comment")) {
    ResponseText_val.innerHTML = `
    <pre>
    // It's a single line comment
    /* It's a 
           multi-line
           comment
    */
    </pre>
    `;
  } else if (FormatInput.includes("addition")) {
    ResponseText_val.innerHTML = `
    <pre>
    public class HelloWorld
    {
        public static void main(String args[])
        {
              int x=10+3;
              System.out.println(x);
        }
    }
    </pre>
    `;
  } else if (FormatInput.includes("subtraction")) {
    ResponseText_val.innerHTML = `
    <pre>
    public class HelloWorld
    {
        public static void main(String args[])
        {
              int x=10-3;
              System.out.println(x);
        }
    }
    </pre>
    `;
  } else if (FormatInput.includes("multiplication")) {
    ResponseText_val.innerHTML = `
    <pre>
    public class HelloWorld
    {
        public static void main(String args[])
        {
              int x=10*3;
              System.out.println(x);
        }
    }
    </pre>
    `;
  } else if (FormatInput.includes("division")) {
    ResponseText_val.innerHTML = `
    <pre>
    public class HelloWorld
    {
        public static void main(String args[])
        {
              int x=10/3;
              System.out.println(x);
        }
    }
    </pre>
    `;
  } else {
    speakAI(FormatInput);
  }
}
// Here I have used simple AI application in the form of a speech-enabled chatbot
function speakAI(text) {
  var aiResponse = "";
  if (text.includes("use")) {
    aiResponse =
      "Java is one of the most used language for android development, web development, artificial intelligence, cloud application and many more.";
  } else if (text.includes("different")) {
    aiResponse =
      "It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.";
  } else if (text.includes("implement")) {
    aiResponse =
      "It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.";
  } else if (text.includes("compil")) {
    aiResponsye = "javac filename.java";
  } else if (text.includes("run")) {
    aiResponse = "java filename";
  } else if (text.includes("is java")) {
    aiResponse =
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.";
  } else {
    aiResponse =
      "I'm sorry, I didn't understand that. Please try asking me something else.";
  }

  var msg = new SpeechSynthesisUtterance();
  msg.text = aiResponse;
  window.speechSynthesis.speak(msg);
}
