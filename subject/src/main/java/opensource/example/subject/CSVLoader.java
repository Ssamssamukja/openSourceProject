package opensource.example.subject;

import com.opencsv.CSVReader;
import java.io.FileReader;
import java.util.List;

public class CSVLoader {
    public List<String[]> readAll(String filePath) throws Exception {
        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            return reader.readAll();
        }
    }
}