package opensource.example.subject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.sql.Connection;
import java.util.List;

@SpringBootApplication
public class SubjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SubjectApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}

/*public class Main {
	public static void main(String[] args) {
		try {
			CSVLoader loader = new CSVLoader();
			List<String[]> csvData = loader.readAll("/path/to/your/dataset.csv");

			try (Connection conn = DatabaseConnector.connect()) {
				DatabaseLoader dbLoader = new DatabaseLoader();
				dbLoader.loadToDatabase(csvData, conn);
			}

			System.out.println("Data successfully loaded into the database.");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}*/

